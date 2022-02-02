import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { Box, Button, Typography, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import mochaMantis from "../../themes/mocha.png";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
    const dispatch = useDispatch();
    const selectState = (state) => state;
    const state = useSelector(selectState);
    const [getCheckout, { data }] = useLazyQuery(CHECKOUT);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    }, [data]);

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise("cart", "get");
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        }

        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    
    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
        const productIds = [];

        state.cart.forEach((item) => {
            for (let i = 0; i < item.purchaseQuantity; i++) {
                productIds.push(item._id);
            }
        });

        getCheckout({
            variables: { products: productIds },
        });
    }

    if (!state.cartOpen) {
        return (
            <Box
                onClick={toggleCart}
                sx={{
                    bgcolor: "background.paper",
                    boxShadow: 1,
                    borderRadius: 2,
                    p: '.5%',
                    zIndex: "modal",
                    position: "fixed",
                    top: {xs:'.5%', xl:'.05%'},
                    right: {xs:'.5%', xl:'.05%'},
                }}
            >
                <ShoppingCartCheckoutIcon sx={{color: "success.main", mr: 1, pl: 1, fontSize: {xs: 35, xl:40} }}/>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                mt: 22,
                zIndex: "modal",
                position: "fixed",
                bgcolor: "background.paper",
                top: ".5%",
                right: ".5%",
                bottom: "10%",
                p: 2,
                maxHeight: "150",
                overflow: "auto"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    my: "auto",
                }}
            >
                <Typography variant="h4">Shopping Cart</Typography>
                <Button onClick={toggleCart} size="small" variant="outlined" sx={{ color: "warning", height: "50%" }}>
                    <CloseIcon />
                </Button>
            </Box>
            <Divider sx={{ mb: 2 }} />
            {state.cart.length ? (
                <Box>
                    {state.cart.map((item) => (
                        <CartItem key={item._id} item={item} />
                    ))}
                    <Divider sx={{ mb: 2 }} />
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Typography variant="subtitle1" display="block" gutterBottom sx={{ fontWeight: "bold" }}>
                            Total: ${calculateTotal()}
                        </Typography>

                        {Auth.loggedIn() ? (
                            <Button onClick={submitCheckout} variant="contained" size="small">
                                Checkout
                            </Button>
                        ) : (
                            <span>Log In to Checkout!</span>
                        )}
                    </Box>
                </Box>
            ) : (
                <Box display="flex" justifyContent="center" flexDirection="column">
                    <Box
                        component="img"
                        sx={{
                            height: 150,
                            width: 150,
                            maxHeight: { xs: 75, sm: 150 },
                            maxWidth: { xs: 75, sm: 150 },
                            mx: "auto",
                            mb: 2,
                        }}
                        alt="mocha helper"
                        src={mochaMantis}
                    />
                    <Typography variant="h4" component="div" align="center" sx={{ color: "warning.dark" }}>
                        Your Cart is Empty!
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ color: "primary.main" }}>
                        Mocha can't help you buy things unless you add items to your cart.
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default Cart;
