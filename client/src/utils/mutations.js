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

export const UPDATESHOPPPER = gql`
   mutation  updateShopper($firstName: String, $lastName: String, $email: String, $password: String){
  updateShopper(firstName: $firstName, lastName: $lastName, email: $email, password: $password){
      firstName
      lastName
      email
    }
  } 
`

export const ADDORDER = gql`
  mutation addOrder($products: [ID]!){
  addOrder(products: $products){
    _id
    purchaseDate
    products{
      _id
      }
    }
  }
`

export const UPDATEQUANTITY = gql`
  mutation updateQuantity($id: ID!, $quantity: Int!){
  updateProductQuantity(_id: $id, quantity: $quantity){
    quantity
    }
  }
`