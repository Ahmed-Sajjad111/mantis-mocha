import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import Cart from "../components/Cart";
import mochaMantis from "../themes/mocha.png";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY, ADD_TO_CART, UPDATE_PRODUCTS } from "../utils/actions";
import { GET_PRODUCTS_BY_CATEGORY } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

function SingleProduct() {
    const dispatch = useDispatch();
    const selectState = (state) => state;
    const state = useSelector(selectState);
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
                idbPromise("products", "put", product);
            });
        }
        // get cache from idb
        else if (!loading) {
            idbPromise("products", "get").then((indexedProducts) => {
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
            idbPromise("cart", "put", {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...currentProduct, purchaseQuantity: 1 },
            });
            idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
        }
    };

    const removeFromCart = () => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: currentProduct._id,
        });

        idbPromise("cart", "delete", { ...currentProduct });
    };

    return (
        <>
            <Cart />
            {currentProduct ? (
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", mt: 20, mb: 10 }}>
                    <Box sx={{ mx: "auto" }}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Button variant="contained" color="info" sx={{ my: 2, mx: "auto" }}>
                                <ArrowCircleLeftIcon /> Back to Products
                            </Button>
                        </Link>
                    </Box>
                    <Card sx={{ maxWidth: 800, boxShadow: 4, bgcolor: "secondary.main", mx: "auto" }}>
                        <CardMedia
                            component="img"
                            height="400"
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
                            <Typography variant="body2" component="div" sx={{ mt: 2 }}>
                                Price: ${currentProduct.price}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <Button disabled={!cart.find((p) => p._id === currentProduct._id)} onClick={removeFromCart}>
                                Remove from Cart
                            </Button>
                            <Button onClick={addToCart}>Add To Cart</Button>
                        </CardActions>
                    </Card>
                </Box>
            ) : null}
            {loading ? <img src={mochaMantis} alt="loading" /> : null}
        </>
    );
}

export default SingleProduct;
