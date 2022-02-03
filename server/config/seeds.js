const db = require('./connection');
const { Shopper, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Arabica Coffee' },
        { name: 'Robusta Coffee' },
        { name: 'Liberica Coffee' },
        { name: 'Excelsa Coffee' },
        { name: 'Mocha Mantis Specials'},
        { name: 'Merchandise' }
    ]);
  
    console.log('--beep boop-- CATEGORIES SEEDED --beep boop--');

    await Product.deleteMany();

    // product seeds
    const products = await Product.insertMany([
        {
            name: "Adrian's Arabica Coffee",
            category: categories[0]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage3.jpg',
            price: 20.99,
            quantity: 100
        },
        {
            name: "Bruno's Best Coffee",
            category: categories[0]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage2.jpg',
            price: 21.99,
            quantity: 100
        },
        {
            name: "Claudia's Curious Coffee",
            category: categories[0]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage5.jpg',
            price: 22.99,
            quantity: 100
        },
        {
            name: "Daniel's Deadly Coffee",
            category: categories[0]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage4.jpg',
            price: 23.99,
            quantity: 100
        },
        {
            name: "Ezra's Excellent Coffee",
            category: categories[0]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage3.jpg',
            price: 24.99,
            quantity: 100
        },
        {
            name: "Greta's Great Coffee",
            category: categories[1]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage3.jpg',
            price: 10.99,
            quantity: 100
        },
        {
            name: "Herbert's Handy Coffee",
            category: categories[1]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage4.jpg',
            price: 11.99,
            quantity: 100
        },
        {
            name: "Inga's Interesting Coffee",
            category: categories[1]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage5.jpg',
            price: 12.99,
            quantity: 100
        },
        {
            name: "Jack's Jumpy Coffee",
            category: categories[1]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage3.jpg',
            price: 13.99,
            quantity: 100
        },
        {
            name: "Krusty's Krab Coffee",
            category: categories[1]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage5.jpg',
            price: 14.99,
            quantity: 100
        },
        {
            name: "Lisa's Lucious Coffee",
            category: categories[2]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage3.jpg',
            price: 15.99,
            quantity: 100
        },
        {
            name: "Quincy's Questionable Coffee",
            category: categories[2]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage4.jpg',
            price: 20.99,
            quantity: 50
        },
        {
            name: "Ramone's Romantic Coffee",
            category: categories[2]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage5.jpg',
            price: 21.99,
            quantity: 50
        },
        {
            name: "Stacy's Stupid Coffee",
            category: categories[2]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage4.jpg',
            price: 25.99,
            quantity: 25
        },
        {
            name: "Teresa's Tasty Coffee",
            category: categories[3]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage3.jpg',
            price: 26.99,
            quantity: 25
        },
        {
            name: "Uno's Utopian Coffee",
            category: categories[3]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage2.jpg',
            price: 27.99,
            quantity: 25
        },
        {
            name: "Victor's Viscous Coffee",
            category: categories[3]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage1.jpg',
            price: 28.99,
            quantity: 25
        },
        {
            name: "Wanda's Witchy Coffee",
            category: categories[3]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage3.jpg',
            price: 29.99,
            quantity: 25
        },
        {
            name: "Xavier's XXX Coffee",
            category: categories[3]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'CoffeeImage5.jpg',
            price: 30.99,
            quantity: 25
        },
        {
            name: "Mocha The Mantis Special Dark Roast",
            category: categories[4]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'mocha_the_mantis_dark_roast.jpg',
            price: 35.99,
            quantity: 10
        },
        {
            name: "Mocha The Mantis Dark Roast",
            category: categories[4]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'mocha_the_mantis_dark_roast.jpg',
            price: 40.99,
            quantity: 10
        },
        {
            name: "Mocha The Mantis Special Roast",
            category: categories[4]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'mocha_the_mantis_classic_roast.jpg',
            price: 40.99,
            quantity: 10
        },
        {
            name: "Mocha The Mantis Classic Roast",
            category: categories[4]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'mocha_the_mantis_classic_roast.jpg',
            price: 35.99,
            quantity: 15
        },
        {
            name: "Mocha Mantis T-shirt",
            category: categories[5]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'MochaTshirt.png',
            price: 24.99,
            quantity: 50
        },
        {
            name: "Mantis Mug",
            category: categories[5]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'MochaTravel.png',
            price: 20.99,
            quantity: 200
        },
        {
            name: "Mantis Mocha Espresso Maker",
            category: categories[5]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'MochaMaker.jpg',
            price: 30.99,
            quantity: 50
        },
        {
            name: "Mocha Mantis Sticker",
            category: categories[5]._id,
            description: 'Froth, macchiato skinny, black, half and half, caffeine brewed sugar foam seasonal siphon french press. Eu, single origin irish espresso sweet fair trade coffee. Coffee percolator turkish cup single origin trifecta frappuccino. Ut percolator, sugar, aromatic in, bar , filter that irish qui foam aged. Skinny organic, a filter, beans acerbic medium flavour whipped eu doppio.',
            image: 'MochaSticker.png',
            price: 5.99,
            quantity: 100
        }

    ]);

    console.log('--beep boop-- PRODUCTS SEEDED --beep boop--');

    await Shopper.deleteMany();

    // shopper seeds
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
            firstName:'Admin',
            lastName:'Admin',
            email:'Admin@test.com',
            password:'Admin1234',
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

    console.log('--beep boop-- USERS SEEDED --beep boop--');

    process.exit();
});