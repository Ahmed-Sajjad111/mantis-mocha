import React from "react";
import { Typography, Box, Grid, Stack, Avatar } from "@mui/material";

function Footer() {
    return (
        <Box sx={{ bottom: 0, position: "fixed", width: "100%", right: 0, bgcolor: 'primary.main', }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography sx={{ fontSize: { xs:'caption.fontSize', sm:'h4.fontSize' }}} mt={1} ml={.5} pr={-2}>
                        2022 The Coffee Shop <span role="img" aria-label="coffee emoji">☕</span> , Inc.
                    </Typography>
                </Grid>

                {/* our team profile pictures */}
                <Grid item xs={4}>
                    <Stack direction="row" spacing={.25} sx={{ mt:{xs: 0, sm: 1}, justifyContent: "right" }} mt={1} mr={1}>
                        <a href="https://github.com/mjbc53" target="_blank" rel="noopener noreferrer">
                          <Avatar sx={{ width: { xs: 25, md:50 }, height: { xs: 25, md: 50 } }} alt="Mark" src="https://avatars.githubusercontent.com/u/87452989?v=4" />
                        </a>
                        <a href="https://github.com/Caeldeth" target="_blank" rel="noopener noreferrer">
                        <Avatar sx={{ width: { xs: 25, md:50 }, height: { xs: 25, md: 50 } }} alt="Tom" src="https://avatars.githubusercontent.com/u/8400277?v=4" />
                        </a>
                        <a href="https://github.com/BenPaulat/" target="_blank" rel="noopener noreferrer">
                        <Avatar sx={{ width: { xs: 25, md:50 }, height: { xs: 25, md: 50 } }} alt="Ben" src="https://avatars.githubusercontent.com/u/63683602?v=4" />
                        </a>
                        <a href="https://github.com/Ahmed-Sajjad111/" target="_blank" rel="noopener noreferrer">
                        <Avatar sx={{ width: { xs: 25, md:50 }, height: { xs: 25, md: 50 } }} alt="Ahmed" src="https://avatars.githubusercontent.com/u/65852124?v=4" />
                        </a>
                        <a href="https://github.com/Collin-W" target="_blank" rel="noopener noreferrer">
                        <Avatar sx={{ width: { xs: 25, md:50 }, height: { xs: 25, md: 50 } }} alt="Collin" src="https://avatars.githubusercontent.com/u/88279562?v=4" />
                        </a>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;