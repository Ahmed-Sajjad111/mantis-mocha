import { gql } from '@apollo/client';

export const GET_SINGLE_CATEGORY = gql `
  query getSingleCategory($id: ID!){
    category(_id: $id){
      name
      _id
    }
  }
`

export const GET_ALL_CATEGORIES = gql `
  query {
    categories{
      _id
      name
    }
  }
`

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query getProductsByCategory($category: ID){
  products(category: $category){
    _id
    name
    description
    image
    price
    quantity
    category {
      _id
      name
    }
  }
}
`

export const GET_PRODUCT_BY_NAME = gql`
  query getProductsByName($name: String){
    products(name: $name){
      _id
      name
      description
      image
      price
      quantity
      category {
        _id
        name
      }
    }
  }
`

export const GET_SINGLE_PRODUCT = gql`
  query getSingleProduct($id: ID!){
  product(_id :$id){
		_id
    name
    description
    image
    price
    quantity
    category{
      _id
      name
    }
  }
}
`

export const ALL_PRODUCTS = gql`
  query{
    products{
      _id
      name
      description
      image
      price
      quantity
      category {
        _id
        name
      }
    }
  }
`

export const GET_SHOPPER_INFO = gql`
  query shopperInfo{
  shopper{
    firstName
    lastName
    orders{
      _id
      purchaseDate
      products{
        _id
        name
        description
        image
        price
        quantity
        }
      }
    }
  }
`

export const CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;