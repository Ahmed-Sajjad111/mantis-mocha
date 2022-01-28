import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import mochaMantis from "../../themes/mocha.png";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise, pluralize } from "../../utils/helpers";
import { Link } from "react-router-dom";


function ProductCard(item) {
    const dispatch = useDispatch()
    const selectState = state => state
    const state = useSelector(selectState)

    const { image, name, _id, price, quantity } = item

    const { cart } = state

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, purchaseQuantity: 1 }
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
    }


    return (
        <Card sx={{ maxWidth: 400, boxShadow: 4, bgcolor: 'secondary.main', }}>
            <CardMedia
                component="img"
                height="300"
                image={`/images/${image}`}
                alt={name}
                sx={{ borderBottom: 2 }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                <Typography variant="body2" color="text.secondary">We exist, we dream, we are reborn. To roam the mission is to become one with it.
                    Consciousness consists of sub-atomic particles of quantum energy. “Quantum” means a maturing of the holistic.
                    You must take a stand against pain. Desire is the antithesis of life-force.
                    Illusion is born in the gap where energy has been excluded.</Typography>
            <Typography variant="body1" component="div" sx={{ mt:1}}>{quantity} {pluralize("item", quantity)} in stock</Typography>
            <Typography variant="body2" component="div">${price}</Typography>
            </CardContent>
            <CardActions>
                <Link to={`/products/${_id}`}>
                    <Button>Details</Button>
                </Link>
                <Button onClick={addToCart}>Add To Cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard;