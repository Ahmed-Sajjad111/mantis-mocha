import React from "react";
import { Grid, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { FormControl, MenuItem, TextField, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_PAGE_THEME } from "../../utils/actions";
import { Link } from "react-router-dom";
import CoffeeTheme from "../../themes/coffee";
import MintTheme from "../../themes/mint";
import IceTheme from "../../themes/ice";
import DarkBrewTheme from "../../themes/dark";
import MantisTheme from "../../themes/mantis";



function Header() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const handleChange = (event) => {

    // these themes are a way for customers to personalize their account page
    const newTheme = event.target.value

    switch (newTheme) {
      case MintTheme:
        return dispatch({
          type: CHANGE_PAGE_THEME,
          theme: MintTheme
        });
      case CoffeeTheme:
        return dispatch({
          type: CHANGE_PAGE_THEME,
          theme: CoffeeTheme
        });
      case IceTheme:
        return dispatch({
          type: CHANGE_PAGE_THEME,
          theme: IceTheme
        });
      case DarkBrewTheme:
        return dispatch({
          type: CHANGE_PAGE_THEME,
          theme: DarkBrewTheme
        });
      case MantisTheme:
        return dispatch({
          type: CHANGE_PAGE_THEME,
          theme: MantisTheme
        });
      default:
        return dispatch({
          type: CHANGE_PAGE_THEME,
          theme: CoffeeTheme
        })
    }
  };

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <AppBar>
        <Toolbar>
        <Typography component="div" sx={{ flexGrow: 1 }}>
          <Link to='/' style={{ textDecoration: "none"}}>
            <Button color="success">
              <Typography sx={{ fontSize: {xs:'h6.fontSize', lg:'h2.fontSize'} }}>
                Mantis Mocha
              </Typography> 
            </Button>
            </Link>
          </Typography>
        <FormControl variant="outlined" sx={{ width: {xs:'35%', sm:'20%'}, mr: 6 }}>
        <InputLabel htmlFor="select-theme" shrink sx={{ color: "success.main" }}>Choose Theme:</InputLabel>
            <TextField
              id="select-theme"
              value={state.theme}
              onChange={handleChange}
              select
              variant="filled"
              margin="none"
              size="small"
              SelectProps={{ sx: { color: "success.main" } }}
            >
              <MenuItem value={CoffeeTheme} id="coffee">Creamy Coffee</MenuItem>
              <MenuItem value={MintTheme} id="mint">Minty Mocha</MenuItem>
              <MenuItem value={IceTheme} id="ice">Icy Coffee</MenuItem>
              <MenuItem value={DarkBrewTheme} id="dark">Dark Brew</MenuItem>
              <MenuItem value={MantisTheme} id="melon">Mantis Melon</MenuItem>
            </TextField>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Grid>
  )
}


export default Header