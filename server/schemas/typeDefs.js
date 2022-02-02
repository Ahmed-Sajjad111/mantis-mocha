const { gql } = require('apollo-server-express')

const typeDefs = gql`
  # category type def
  type Category {
    _id: ID
    name: String
  }

  # product type def
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    quantity: Int
    category: Category
  }

  # order type def
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  # shopper type def
  type Shopper {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    orders: [Order]
  }

  # checkout type def
  type Checkout {
    session: ID
  }

  # authorization type def
  type Auth {
    token: ID
    shopper: Shopper
  }

  type Query {
    categories: [Category]
    category(_id: ID!): Category
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
    updateProductQuantity(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }

`

module.exports = typeDefs;