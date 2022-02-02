import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import logo from "../themes/mocha.png";

function FailToLoad() {
  const returnHome = async () => {};

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
      <Box>  <img src={logo} alt="Coffee shop logo" /> </Box>
      
        
        <Typography
          sx={{
            mt: 25,
            mb: 15,
            fontSize: "1.5em",
            fontWeight: "light",
            textAlign: "center",
          }}
        >
          The page you have requested has failed to load.
        </Typography>
      
      <Button
        variant="contained"
        onClick={returnHome}
        sx={{ my: 2, width: "30%", mx: "auto" }}
      >
        Return Home.
      </Button>
    </Box>
  );
}
/* //center logo */
//import logo

export default FailToLoad;
