import React from "react";
import ProductCard from "../ProductCard/index.js";

import { Box, Typography, Paper, Grid } from "@mui/material";

function ProductList() {
    return (
        <Box sx={{ mt: 2 }}>
            <Paper sx={{ boxShadow: 6, bgcolor: 'primary.light' }}>
                <Typography variant="h4" align="center">
                    Product List
                </Typography>
            </Paper>
            <Grid container spacing={2} sx={{ mt: 4, ml: 1, mr: 3, mb: 2 }}>
                <Grid item xs={4}>
                    <ProductCard />
                </Grid>
                <Grid item xs={4}>
                    <ProductCard />
                </Grid>
                <Grid item xs={4}>
                    <ProductCard />
                </Grid>
                <Grid item xs={4}>
                    <ProductCard />
                </Grid>
                <Grid item xs={4}>
                    <ProductCard />
                </Grid>
                <Grid item xs={4}>
                    <ProductCard />
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProductList;
