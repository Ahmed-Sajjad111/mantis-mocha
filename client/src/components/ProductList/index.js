import React, { useEffect } from "react";
import ProductCard from "../ProductCard/index.js";
import mochaMantis from "../../themes/mocha.png";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_CATEGORY } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

import { Box, Typography, Grid } from "@mui/material";

function ProductList() {
    const dispatch = useDispatch();
    const selectState = (state) => state;
    const state = useSelector(selectState);

    const { currentCategory } = state;
    const { loading, data } = useQuery(GET_PRODUCTS_BY_CATEGORY);

    // update product list
    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products,
            });
            data.products.forEach((product) => {
                idbPromise("products", "put", product);
            });
    // uses indexDB if not online to get products
        } else if (!loading) {
            idbPromise("products", "get").then((products) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: products,
                });
            });
        }
    }, [data, loading, dispatch]);

    // returns a specific category or the entire category object from the store
    function filterProducts() {
        if (!currentCategory) {
            return state.products;
        }

        return state.products.filter((product) => product.category._id === currentCategory);
    }

    return (
        <Box sx={{ mt: 2, mb: 15 }}>
            <Typography
                variant="h4"
                align="center"
                sx={{ bgcolor: "primary.main", mb: 3, py: 1, borderRadius: "25px" }}
            >
                Product List
            </Typography>
            {state.products.length ? (
                <Grid container spacing={2} sx={{ px: 2 }}>
                    {filterProducts().map((product) => (
                        <Grid item xs={12} sm={4} key={product._id} sx={{ mx: "auto" }}>
                            <ProductCard
                                _id={product._id}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                quantity={product.quantity}
                            />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography variant="h3" component="div" align="center">
                    No Products!
                </Typography>
            )}
            {loading ? <img src={mochaMantis} alt="mantis loading" /> : null}
        </Box>
    );
}

export default ProductList;
