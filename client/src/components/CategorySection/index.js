import React from "react";
import { Grid, Paper, Button, Typography } from "@mui/material";

const categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];

function CategorySection() {
    return (
        <Grid>
            <Paper sx={{ mt: 20, display: "flex", flexDirection: "row", justifyContent: "space-between", bgcolor: 'secondary.dark' }}>
                {categories.map((categories) => (
                    <Button key={categories} color="success">
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
