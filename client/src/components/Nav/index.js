import React from "react";
import Auth from "../../utils/auth";
import { AppBar, Toolbar, Avatar, Typography, Button, Grid, Tooltip } from "@mui/material";
import mochaMantis from "../../themes/mocha.png";

function Nav() {
    function navHandler() {
        if (Auth.loggedIn()) {
            return (
                <Grid container>
                    <Grid item xs={2}>
                        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Tooltip title="Mocha the Mantis has curated a premium selection of coffees you're sure to enjoy!">
                                <Avatar sx={{ border: 1, borderColor: "primary" }} variant="square" src={mochaMantis} />
                            </Tooltip>
                        </Toolbar>
                    </Grid>
                    <Grid item xs={10}>
                        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button color="success">
                                <Typography textAlign="center">Order History</Typography>
                            </Button>
                            <Button href="/" onClick={() => Auth.logout()} color="success">
                                <Typography textAlign="center">Logout</Typography>
                            </Button>
                        </Toolbar>
                    </Grid>
                </Grid>
            );
        } else {
            return (
                <Grid container>
                    <Grid item xs={2}>
                        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Tooltip title="Mocha the Mantis is excited for you to see what he has to offer!">
                                <Avatar sx={{ border: 1, borderColor: "primary" }} variant="square" src={mochaMantis} />
                            </Tooltip>
                        </Toolbar>
                    </Grid>
                    <Grid item xs={10}>
                        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button href="/login" color="success">
                                <Typography textAlign="center">Login</Typography>
                            </Button>
                            <Button href="/signup" color="success">
                                <Typography textAlign="center">Sign-Up</Typography>
                            </Button>
                        </Toolbar>
                    </Grid>
                </Grid>
            );
        }
    }
    return (
        <AppBar position="fixed" color="secondary" sx={{ mt: 9, width: "100%" }}>
            <Grid>{navHandler()}</Grid>
        </AppBar>
    );
}

export default Nav;
