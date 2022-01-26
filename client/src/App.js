import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Grid, Container, Paper, AppBar, Toolbar, Typography } from "@mui/material";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import CoffeeTheme from "./themes/coffee";
import MintTheme from "./themes/mint";
import CategorySection from './components/CategorySection';
import ProductList from './components/ProductList';

function App() {
    const [theme, setTheme] = useState(CoffeeTheme);

    const handleChange = (event) => {
        setTheme(event.target.value);
        //need to add localstorage save to keep persistence
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="xl">
                <Grid container spacing={2} sx={{ mb:2 }}>
                    <AppBar>
                        <Toolbar>
                            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
                                The Coffee Shop
                            </Typography>
                            <FormControl sx={{ width: "15%" }}>
                                <InputLabel id="set-theme-label">Theme: </InputLabel>
                                {/* may need to change this to textfield for better styling */}
                                <Select
                                    labelId="select-theme-label"
                                    label="Theme: "
                                    id="select-theme"
                                    value={theme}
                                    onChange={handleChange}
                                    sx={{
                                        "& .MuiInput-root": {
                                            "& > fieldset": {
                                                borderColor: "blue",
                                            },
                                        },
                                        "& .MuiInput-root:hover": {
                                            "& > fieldset": {
                                                borderColor: "blue",
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem value={CoffeeTheme} id="coffee">Creamy Coffee</MenuItem>
                                    <MenuItem value={MintTheme} id="mint">Minty Mocha</MenuItem>
                                </Select>
                            </FormControl>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Nav />
                <CategorySection/>
                <ProductList/>
                <Footer />
            </Container>
        </ThemeProvider>
    );
}

export default App;
