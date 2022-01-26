import React from "react";
import { AppBar, Toolbar, Icon, Typography, Button, Grid } from "@mui/material";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

function Nav() {
    return (
        <AppBar position="fixed" color="secondary" sx={{ mt: 9, width: "100%" }}>
            <Grid>
                <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button color="success">
                            <Typography textAlign="center">Order History</Typography>
                        </Button>
                        <Button color="success">
                            <Typography textAlign="center"></Typography>
                        </Button>
                    <Button href='/login' color="success">
                        <Typography textAlign="center">Login</Typography>
                    </Button>
                </Toolbar>
            </Grid>
        </AppBar>
    );
}

export default Nav;
