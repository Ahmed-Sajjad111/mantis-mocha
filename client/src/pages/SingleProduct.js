import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
// import Cart from '../components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { GET_PRODUCTS_BY_CATEGORY } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

function SingleProduct() {
  const dispatch = useDispatch()
  const selectState = state => state
  const state = useSelector(selectState)
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(GET_PRODUCTS_BY_CATEGORY);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct ? (
        <Card sx={{ maxWidth: 400, boxShadow: 4, bgcolor: 'secondary.main', }}>
          <Link to="/">← Back to Products</Link>
          <CardMedia
            component="img"
            height="300"
            image={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
            sx={{ borderBottom: 2 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {currentProduct.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {currentProduct.description}
            </Typography>
          </CardContent>
          <span>Price: ${currentProduct.price}</span>
          <CardActions>
            <Button disabled={!cart.find((p) => p._id === currentProduct._id)} onClick={removeFromCart}>
              Remove from Cart
            </Button>
            <Button onClick={addToCart}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      ) : null}
      {/* {loading ? <img src={mantis-loading} alt="loading" /> : null} */}
      {/* <Cart /> */}
    </>
  )
}

export default SingleProduct;