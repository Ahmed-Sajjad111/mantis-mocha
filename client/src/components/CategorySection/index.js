import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Paper, Button, Typography } from "@mui/material";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { 
  GET_ALL_CATEGORIES,
  GET_SINGLE_CATEGORY 
} from "../../utils/queries";

const categories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
];

function CategorySection() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(
    GET_ALL_CATEGORIES,
    GET_SINGLE_CATEGORY
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
    <Grid>
      <Paper
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
            key={categories}
            color="success"
          >
            <Typography textAlign="center">{categories}</Typography>
          </Button>
        ))}
      </Paper>
    </Grid>
  );
}

/*
  return (
    <section>
      <h2>Coffee Categories</h2>
      <ul>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
    </section>
  );
*/

export default CategorySection;
