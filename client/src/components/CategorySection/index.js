import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button,  } from "@mui/material";
import { useQuery } from '@apollo/client';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { 
  GET_ALL_CATEGORIES
} from "../../utils/queries";
import { idbPromise } from '../../utils/helpers';

function CategorySection() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(
    GET_ALL_CATEGORIES
  );

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
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
    <Box
        sx={{
          mt: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          bgcolor: "secondary.dark",
        }}
      >
        {categories.map((categories) => (
          <Button
            onClick={() => {
              handleClick(categories._id);
            }}
            key={categories.name}
            color="success"
          >
            {categories.name}
          </Button>
        ))}
      </Box>
  );
}

export default CategorySection;
