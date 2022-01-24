import React, { useState } from "react";
import Footer from "./components/Footer";
import { Grid, Container, Paper, AppBar, Toolbar, Typography } from "@mui/material";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import CoffeeTheme from "./themes/coffee";
import MintTheme from "./themes/mint";

function App() {
    const [label, setLabel] = useState("");
    const [theme, setTheme] = useState(CoffeeTheme);

    const handleChange = (event) => {
        setTheme(event.target.value);
        setLabel(event.target.label);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container>
                <Grid container spacing={2}>
                    <AppBar>
                        <Toolbar>
                            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
                                The Coffee Shop
                            </Typography>
                            <FormControl sx={{ width: "15%" }}>
                                <InputLabel id="set-theme-label">Theme: </InputLabel>
                                <Select
                                    labelId="select-theme-label"
                                    id="select-theme"
                                    label={label}
                                    value={theme}
                                    onChange={handleChange}
                                >
                                    <MenuItem label={"Creamy Coffee"} value={CoffeeTheme}>
                                        Creamy Coffee
                                    </MenuItem>
                                    <MenuItem label={"Minty Mocha"} value={MintTheme}>
                                        Minty Mocha
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Paper>Main</Paper>
                <Footer />
            </Container>
        </ThemeProvider>
    );
}

export default App;
