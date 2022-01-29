const db = require('./connection');
const { Shopper, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Arabica Coffee' },
        { name: 'Robusta Coffee' },
        { name: 'Liberica Coffee' },
        { name: 'Excelsa Coffee' },
        { name: 'Cold Brew Coffee'},
        { name: 'Merchandise' }
    ]);
  
    console.log('--beep boop-- CATEGORIES SEEDED --beep boop--');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: "Felix's Finest Coffee",
            category: categories[0]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage1.jpg',
            price: 19.99,
            quantity: 100
        },
        {
            name: "Adrian's Arabica Coffee",
            category: categories[0]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage1.jpg',
            price: 20.99,
            quantity: 100
        },
        {
            name: "Bruno's Best Coffee",
            category: categories[0]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage1.jpg',
            price: 21.99,
            quantity: 100
        },
        {
            name: "Claudia's Curious Coffee",
            category: categories[0]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage1.jpg',
            price: 22.99,
            quantity: 100
        },
        {
            name: "Daniel's Deadly Coffee",
            category: categories[0]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage1.jpg',
            price: 23.99,
            quantity: 100
        },
        {
            name: "Ezra's Excellent Coffee",
            category: categories[0]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage1.jpg',
            price: 24.99,
            quantity: 100
        },
        {
            name: "Greta's Great Coffee",
            category: categories[1]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage2.jpg',
            price: 10.99,
            quantity: 100
        },
        {
            name: "Herbert's Handy Coffee",
            category: categories[1]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage2.jpg',
            price: 11.99,
            quantity: 100
        },
        {
            name: "Inga's Interesting Coffee",
            category: categories[1]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage2.jpg',
            price: 12.99,
            quantity: 100
        },
        {
            name: "Jack's Jumpy Coffee",
            category: categories[1]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage2.jpg',
            price: 13.99,
            quantity: 100
        },
        {
            name: "Krusty's Krab Coffee",
            category: categories[1]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage2.jpg',
            price: 14.99,
            quantity: 100
        },
        {
            name: "Lisa's Lucious Coffee",
            category: categories[1]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage2.jpg',
            price: 15.99,
            quantity: 100
        },
        {
            name: "Margret's Mom Coffee",
            category: categories[2]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage3.jpg',
            price: 16.99,
            quantity: 50
        },
        {
            name: "Nancy's Normal Coffee",
            category: categories[2]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage3.jpg',
            price: 17.99,
            quantity: 50
        },
        {
            name: "Oscar's Opulent Coffee",
            category: categories[2]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage3.jpg',
            price: 18.99,
            quantity: 50
        },
        {
            name: "Peter's Piping Coffee",
            category: categories[2]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage3.jpg',
            price: 19.99,
            quantity: 50
        },
        {
            name: "Quincy's Questionable Coffee",
            category: categories[2]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage3.jpg',
            price: 20.99,
            quantity: 50
        },
        {
            name: "Ramone's Romantic Coffee",
            category: categories[2]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage3.jpg',
            price: 21.99,
            quantity: 50
        },
        {
            name: "Stacy's Stupid Coffee",
            category: categories[3]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage4.jpg',
            price: 25.99,
            quantity: 25
        },
        {
            name: "Teresa's Tasty Coffee",
            category: categories[3]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage4.jpg',
            price: 26.99,
            quantity: 25
        },
        {
            name: "Uno's Utopian Coffee",
            category: categories[3]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage4.jpg',
            price: 27.99,
            quantity: 25
        },
        {
            name: "Victor's Viscous Coffee",
            category: categories[3]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage4.jpg',
            price: 28.99,
            quantity: 25
        },
        {
            name: "Wanda's Witchy Coffee",
            category: categories[3]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage4.jpg',
            price: 29.99,
            quantity: 25
        },
        {
            name: "Xavier's XXX Coffee",
            category: categories[3]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage4.jpg',
            price: 30.99,
            quantity: 25
        },
        {
            name: "Yanzee's Yankee Coffee",
            category: categories[4]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage5.jpg',
            price: 40.99,
            quantity: 10
        },
        {
            name: "Zeus' Zippy Coffee",
            category: categories[4]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'CoffeeImage5.jpg',
            price: 45.99,
            quantity: 15
        },
        {
            name: "Mocha Mantis T-shirt",
            category: categories[5]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'MochaTshirt.png',
            price: 24.99,
            quantity: 50
        },
        {
            name: "Mantis Mug",
            category: categories[5]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'MochaTravel.png',
            price: 20.99,
            quantity: 200
        },
        {
            name: "Mantis Mocha Espresso Maker",
            category: categories[5]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'MochaMaker.jpg',
            price: 30.99,
            quantity: 50
        },
        {
            name: "Mocha Mantis Sticker",
            category: categories[5]._id,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit quidem quis voluptatem dolore ea doloremque illum ut rem, minus delectus dolorem vel sint inventore saepe facere aut! Ea, modi!',
            image: 'MochaSticker.jpg',
            price: 5.99,
            quantity: 100
        }

        /* BEGIN PRODUCT TEMPLATE
        {
            name: '',
            category: categories[]._id,
            description: '',
            image: '',
            price: ,
            quantity: 
        },
        END PRODUCT TEMPLATE */ 
    ]);

    console.log('--beep boop-- PRODUCTS SEEDED --beep boop--');

    await Shopper.deleteMany();

    await Shopper.create(
        {
            firstName:'Trisha',
            lastName:'WhoWantsToKnow',
            email:'dontask@mindyourownbusiness.com',
            password:'password',
            orders: [
                {
                    products:[products[0]._id, products[3]._id, products[16]._id]
                }
            ] 
        },
        {
            firstName:'Mike',
            lastName:'FreeMoney',
            email:'shutup@takemymoney.com',
            password:'ezplease',
            orders: [
                {
                    products:[
                        products[2]._id, 
                        products[4]._id, 
                        products[6]._id,
                        products[8]._id,
                        products[10]._id
                    ]
                }
            ] 
        },
        {
            firstName:'Leo',
            lastName:'Browsing',
            email:'justlooking@looksie.com',
            password:'lookieloo',
        }
    );

    /* BEGIN SHOPPER TEMPLATE
    {
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        orders: [
            {
                products:[]
            }
        ]
    } 
    END SHOPPER TEMPLATE */

    console.log('--beep boop-- USERS SEEDED --beep boop--');

    process.exit();
});