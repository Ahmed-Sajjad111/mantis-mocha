import React from "react";
import { AppBar, Toolbar, Icon, Typography, Button, Grid } from "@mui/material";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

function Nav() {
    return (
        <AppBar position="fixed" color="secondary" sx={{ mt: 9, width: "100%" }}>
            <Grid>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Icon>Logo</Icon>
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
