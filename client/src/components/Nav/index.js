import React, { useState } from "react";
import { AppBar, Toolbar, Avatar, Typography, Button, Grid, Tooltip } from "@mui/material";
import mochaMantis from "../../themes/mocha.png";
const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

function Nav() {
    return (
        <AppBar position="fixed" color="secondary" sx={{ mt: 9, width: "100%" }}>
            <Grid>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Tooltip title="Mocha the Mantis has curated a premium selection of coffees you're sure to enjoy!">
                        <Avatar sx={{ border: 1, borderColor: "primary" }} variant="square" src={mochaMantis} />
                    </Tooltip>
                    {pages.map((page) => (
                        <Button key={page} color="success">
                            <Typography textAlign="center">{page}</Typography>
                        </Button>
                    ))}
                    <Button color="success">
                        <Typography textAlign="center">Login</Typography>
                    </Button>
                </Toolbar>
            </Grid>
        </AppBar>
    );
}

export default Nav;
