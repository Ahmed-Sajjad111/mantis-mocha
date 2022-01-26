import React from "react";
import Auth from "../../utils/auth";
import { AppBar, Toolbar, Typography, Button, Grid } from "@mui/material";

function Nav() {

    function navHandler() {
        if (Auth.loggedIn()) {
            return (
                <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button color="success">
                        <Typography textAlign="center">Order History</Typography>
                    </Button>
                    <Button href='/' onClick={() => Auth.logout()} color="success">
                        <Typography textAlign="center">Logout</Typography>
                    </Button>
                </Toolbar>
            )
        } else {
            return (
                <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button href='/login' color="success">
                        <Typography textAlign="center">Login</Typography>
                    </Button>
                    <Button href='/signup' color="success">
                        <Typography textAlign="center">Sign-Up</Typography>
                    </Button>
                </Toolbar>
            )
        }
    }
    return (
        <AppBar position="fixed" color="secondary" sx={{ mt: 9, width: "100%" }}>
            <Grid>
                {navHandler()}
            </Grid>
        </AppBar>
    );
}

export default Nav;
