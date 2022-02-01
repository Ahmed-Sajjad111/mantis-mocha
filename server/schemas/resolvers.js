const { AuthenticationError } = require('apollo-server-express');
const { Shopper, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  // queries
  Query: {
    // get all categories 
    categories: async() => {
      return await Category.find()
    },
    // get a sinlge category of products
    category: async (parent, { _id }) => {
      return await Category.findOne({_id})
    },
    // get sinlge product
    product: async(parent, {_id}) => {
      return await Product.findOne({_id})
    },
    //get all products
    products: async (parent, {category, name}) => {
      const params = {}

      //if there is a category return the category of products
      if(category){
        params.category = category
      }

      //if there is a name check if its a string then return the product
      if(name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category')
    },
    //get a shoppers info
    shopper: async (parent, args, context) => {
      //if there is a shopper logged in get the shopper 
      //otherwise return an error
      if(context.shopper) {
        const shopper = await Shopper.findById(context.shopper._id).populate({
          path: 'orders.products',
          populate: 'category'
        })
  
        return shopper
      }
      
      throw new AuthenticationError('Not logged in')
    },
    //get an orders info
    order: async (parent, { _id }, context) => {
      //if there is a shopper logged in get the shopper's order by id
      //otherwise return an error
      if (context.shopper){
        const shopper = await Shopper.findById(context.shopper._id).populate({
          path: 'orders.products',
          populate: 'category'
        })

        return shopper.orders.id(_id)
      }

      throw new AuthenticationError('Not logged in')
    },
    //use stripes to generate products and check out
    checkout: async (parent, args, context) => {
      //get the url of the page
      const url = new URL(context.headers.referer).origin;

      //create new order with products
      const order = new Order ({products: args.products})
      //get get products from order
      const { products } = await order.populate('products').execPopulate()
      //place holder array 
      const line_items = []

      //loop through and create products in stripe
      for(let i = 0; i < products.length; i++){
        //generate product id
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        })
        //generate price
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        //push to the line_items array
        line_items.push({
          price: price.id,
          quantity: 1
        })
      }

      //create session for stripe
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}`
      })

      return {session: session.id}
    }
  },
  //mutations
  Mutation: {
    //add shopper
    addShopper: async (parent, args) => {
      //create a new shopper and sign a token to log them in
      const shopper = await Shopper.create(args);
      const token = signToken(shopper);

      return { token, shopper };
    },
    //add order
    addOrder: async (parent, { products }, context) => {
      //if a shopper is logged in then create a new order for that shopper
      //otherwise return an error
      if (context.shopper) {
        const order = new Order({ products });

        await Shopper.findByIdAndUpdate(context.shopper._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    //update shoppers info
    updateShopper: async (parent, args, context) => {
      //if the shopper is logged in change there info 
      //otherwise return an error
      if (context.shopper) {
        return await Shopper.findByIdAndUpdate(context.shopper._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    //update the products quantity
    updateProductQuantity: async (parent, { _id, quantity }) => {
      return await Product.findByIdAndUpdate(_id, {quantity: quantity}, { new: true });
    },
    //login
    login: async (parent, { email, password }) => {
      //find a shopper by their email
      const shopper = await Shopper.findOne({ email });

      //if there is no shopper throw an error
      if (!shopper) {
        throw new AuthenticationError('Incorrect credentials');
      }

      //check if the password is correct
      const correctPw = await shopper.isCorrectPassword(password);

      // if the password is incorrect let the shopper know
      if (!correctPw) {
        throw new AuthenticationError('Incorrect Password');
      }

      //if there is a shopper and the password is correct then log the shopper in
      const token = signToken(shopper);

      return { token, shopper };
    }
  }
}

module.exports = resolvers;