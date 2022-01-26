import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@mui/material";

function Nav() {
    return (
        <AppBar position="fixed" color="secondary" sx={{ mt: 9, width: "100%" }}>
            <Grid>
                <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button color="success">
                        <Typography textAlign="center">Order History</Typography>
                    </Button>
                    <Button href='/login' color="success">
                        <Typography textAlign="center">Login</Typography>
                    </Button>
                    <Button href='/signup' color="success">
                        <Typography textAlign="center">Sign-Up</Typography>
                    </Button>
                </Toolbar>
            </Grid>
        </AppBar>
    );
}

export default Nav;
