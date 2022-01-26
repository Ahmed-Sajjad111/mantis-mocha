import { gql } from '@apollo/client';

export const QUERY_GET_CATEGORY = gql `
  query getSingleCategory($id: ID!){
    category(_id: $id){
      name
      _id
    }
  }
`

export const Query_GET_ALL_CATEGORIES = gql `
  query {
    categories{
      _id
      name
    }
  }
`

export const QUERY_GET_PRODUCTS_BY_CATEGORY = gql`
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

export const QUERY_GET_PRODUCTS_BY_NAME = gql`
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

export const QUERY_ALL_PRODUCTS = gql`
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

