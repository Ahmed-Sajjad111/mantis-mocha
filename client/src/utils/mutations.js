import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
      token
      shopper{
        _id
        firstName
        lastName
        email
      }
    }
  }
`

export const ADDSHOPPER = gql`
  mutation addShopper($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addShopper(firstName: $firstName, lastName: $lastName, email: $email, password: $password){
    token
    shopper{
      _id
      firstName
      lastName
      email
      }
    }
  } 
`

export const UPDATESHOPPER = gql`
   mutation  updateShopper($firstName: String, $lastName: String, $email: String, $password: String){
  updateShopper(firstName: $firstName, lastName: $lastName, email: $email, password: $password){
      firstName
      lastName
      email
    }
  } 
`

export const ADDORDER = gql`
 mutation addOrder($products: [ID]!, $purchaseQuantity: [Int]!){
  addOrder(products: $products, purchaseQuantity: $purchaseQuantity){
    _id
    purchaseDate
    purchaseQuantity
    products{
      _id
      }
    }
  }
`

export const UPDATEQUANTITY = gql`
  mutation updateQuantity($id: ID!, $quantity: Int!, $removeQuantity: Int!){
  updateProductQuantity(_id: $id, quantity: $quantity, removeQuantity: $removeQuantity){
    quantity
    }
  }
`