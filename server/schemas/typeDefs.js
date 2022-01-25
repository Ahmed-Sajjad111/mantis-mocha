const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    quantity: Int
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Shopper {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    shopper: Shopper
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    shopper: Shopper
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addShopper(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateShopper(firstName: String, lastName: String, email: String, password: String): Shopper
    updateProductQuantity(_id: ID!, newQuantity: Int!): Product
    login(email: String!, password: String!): Auth
  }

`

module.exports = typeDefs;