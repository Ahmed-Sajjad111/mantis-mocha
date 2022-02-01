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

      if(category){
        params.category = category
      }

      if(name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category')
    },
    //get a shoppers info
    shopper: async (parent, args, context) => {
      if(context.shopper) {
        const shopper = await Shopper.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        })
  
        return shopper
      }
      
      throw new AuthenticationError('Not logged in')
    },
    //get an orders info
    order: async (parent, { _id }, context) => {
      if (context.shopper){
        const shopper = await Shopper.findById(context.user._id).populate({
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
      const shopper = await Shopper.create(args);
      const token = signToken(shopper);

      return { token, shopper };
    },
    //add order
    addOrder: async (parent, { products }, context) => {
      if (context.shopper) {
        const order = new Order({ products });

        await Shopper.findByIdAndUpdate(context.shopper._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    //update shoppers info
    updateShopper: async (parent, args, context) => {
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
      const shopper = await Shopper.findOne({ email });

      if (!shopper) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await shopper.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect Password');
      }

      const token = signToken(shopper);

      return { token, shopper };
    }
  }
}

module.exports = resolvers;