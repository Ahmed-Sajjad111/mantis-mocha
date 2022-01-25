import React from "react";
import { Typography, Paper, Grid, Stack, Avatar } from "@mui/material";

function Footer() {
    return (
        <Paper sx={{ bottom: 0, position: "fixed", width: "100%", right: 0 }}>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <Typography variant="h4" mt={1} ml={1}>
                        2022 The Coffee Shop <span role="img" aria-label="coffee emoji">☕</span> , Inc.
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Stack direction="row" spacing={2} sx={{ justifyContent: "right" }} mt={1} mr={1}>
                        <a href="https://github.com/mjbc53" target="_blank" rel="noopener noreferrer">
                          <Avatar alt="Mark" src="https://avatars.githubusercontent.com/u/87452989?v=4" />
                        </a>
                        <a href="https://github.com/Caeldeth" target="_blank" rel="noopener noreferrer">
                        <Avatar alt="Tom" src="https://avatars.githubusercontent.com/u/8400277?v=4" />
                        </a>
                        <a href="https://github.com/BenPaulat/" target="_blank" rel="noopener noreferrer">
                        <Avatar alt="Ben" src="https://avatars.githubusercontent.com/u/63683602?v=4" />
                        </a>
                        <a href="https://github.com/Ahmed-Sajjad111/" target="_blank" rel="noopener noreferrer">
                        <Avatar alt="Ahmed" src="https://avatars.githubusercontent.com/u/65852124?v=4" />
                        </a>
                        <a href="https://github.com/Collin-W" target="_blank" rel="noopener noreferrer">
                        <Avatar alt="Collin" src="https://avatars.githubusercontent.com/u/88279562?v=4" />
                        </a>
                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Footer;
