import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Grid
} from "@mui/material";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

function Nav() {
    return (
        <AppBar position="fixed" color="secondary" sx={{ mt: 9 }}>
            <Grid>
                <Toolbar sx={{ display: "flex", justifyContent:"space-between"}}>
                    <IconButton>Logo</IconButton>
                        {pages.map((page) => (
                            <Button key={page}>
                                <Typography textAlign="center">{page}</Typography>
                            </Button>
                        ))}
                </Toolbar>
            </Grid>
        </AppBar>
    );
}

export default Nav;