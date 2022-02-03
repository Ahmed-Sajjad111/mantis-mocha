import React from "react";
import { Box, Typography, Button } from "@mui/material";
import logo from "../themes/mocha.png";
import { Link } from "react-router-dom";

// this page renders on an unrecognized route attempt
function NoMatch() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: 20,
        mb: 10,
      }}
    >
      <Box
        component="img"
        sx={{
          height: 150,
          width: 150,
          maxHeight: { xs: 75, sm: 150 },
          maxWidth: { xs: 75, sm: 150 },
          mx: "auto",
        }}
        alt="Coffee shop logo"
        src={logo}
      />

      <Typography
        sx={{
          mt: 25,
          mb: 15,
          fontSize: "1.8em",
          fontWeight: "bold",
          textAlign: "center",
          bgcolor: "primary.main",
          borderRadius: 2,
        }}
      >
        The page you have requested has failed to load.
      </Typography>

      <Link style={{ textDecoration: "none" }} to="/">
        <Button variant="contained" sx={{ my: 2, width: "30%", mx: "auto" }}>
          Return Home.
        </Button>
      </Link>
    </Box>
  );
}

export default NoMatch;
