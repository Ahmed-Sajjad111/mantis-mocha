import React, { useEffect } from "react";
import ProductCard from "../ProductCard/index.js";
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_BY_CATEGORY } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';


import { Box, Typography, Paper, Grid } from "@mui/material";

function ProductList() {
    const dispatch = useDispatch()
    const selectState = state => state
    const state = useSelector(selectState)

    const { currentCategory } = state
    const { loading, data } = useQuery(GET_PRODUCTS_BY_CATEGORY);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products,
            });
            data.products.forEach((product) => {
                idbPromise("products", "put", product);
            });
        } else if (!loading) {
            idbPromise("products", "get").then((products) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: products,
                });
            });
        }
    }, [data, loading, dispatch]);

    function filterProducts() {
        if (!currentCategory) {
            return state.products;
        }

        return state.products.filter(
            (product) => product.category._id === currentCategory
        );
    }

    return (
        <Box sx={{ mt: 2 }}>
            <Paper sx={{ boxShadow: 6, bgcolor: 'primary.light' }}>
                <Typography variant="h4" align="center">
                    Product List
                </Typography>
            </Paper>
            <Grid container spacing={2} sx={{display: "flex", flexDirection: "row"}}>
                {state.products.length ? (
                    <Grid item xs={4}>
                        {filterProducts().map((product) => (
                            <ProductCard
                                key={product._id}
                                _id={product._id}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                quantity={product.quantity}
                            />
                        ))}
                    </Grid>
                ) : (
                    <h3>No Products!</h3>
                )}
                {/* {loading ? <img src={mantis} alt="mantis loading" /> 
                : null} */}
            </Grid>
        </Box>
    );
}

export default ProductList;
