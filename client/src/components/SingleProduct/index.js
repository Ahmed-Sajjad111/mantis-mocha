import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import mochaMantis from "../../themes/mocha.png";

function SingleProduct() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { image, name, _id, price, quantity } = product;

  const { cart } = state;

  const addToCart = () => {
    const productInCart = cart.find((cartProduct) => cartProduct._id === _id);
    if (productInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(productInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...productInCart,
        purchaseQuantity: parseInt(productInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...product, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...product, purchaseQuantity: 1 });
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 10 }}>
      <Card sx={{ maxWidth: 800, boxShadow: 4, bgcolor: "secondary.main" }}>
        <CardMedia
          component="img"
          height="400"
          image={mochaMantis}
          alt="mocha the mantis"
          sx={{ borderBottom: 2 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <img alt={name} src={`/images/${image}`} />
            <span>{`Quantity: ${quantity} Price: ${price}`}</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={addToCart}>Add to cart</Button>
          <Button>Button 2</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default SingleProduct;
