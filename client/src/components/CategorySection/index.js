import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button, Box } from "@mui/material";
import { useQuery } from "@apollo/client";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "../../utils/actions";
import { GET_ALL_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function CategorySection() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const { categories } = state;

    const { loading, data: categoryData } = useQuery(GET_ALL_CATEGORIES);

    useEffect(() => {
         // run dispatch function if categoryData is returned from query
        if (categoryData) {
            // the dispatch function will update category data
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories,
            });
            categoryData.categories.forEach((category) => {
                idbPromise("categories", "put", category);
            });
            // if connection is lost, get categories from indexDB
        } else if (!loading) {
            idbPromise("categories", "get").then((categories) => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories,
                });
            });
        }
    }, [categoryData, loading, dispatch]);

    const handleClick = (id) => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id,
        });
    };

    return (
        <Grid container spacing={2} justifyContent="space-between" sx={{ width: "100%", mt: 20, mx: "auto", bgcolor: "secondary.dark" }}>
            <Button
                onClick={() => handleClick("")}
                color="success"
            >
                All Categories
            </Button>
            {categories.map((categories) => (
                <Box display="flex" justifyContent="center" alignItems="center" key={categories.name}>
                    <Button
                        onClick={() => {
                            handleClick(categories._id);
                        }}
                        color="success"
                    >
                        {categories.name}
                    </Button>
                </Box>
            ))}
        </Grid>
    );
}

export default CategorySection;
