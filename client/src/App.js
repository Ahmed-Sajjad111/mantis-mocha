import React, { useState } from "react";
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import store from "./utils/store";
import { Grid, Container, Paper, AppBar, Toolbar, Typography } from "@mui/material";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import CoffeeTheme from "./themes/coffee";
import MintTheme from "./themes/mint";
import CategorySection from './components/CategorySection';
import ProductList from './components/ProductList';
import SingleProduct from './components/SingleProduct';

const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

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
                <ApolloProvider client={client}>
                    <Router>
                        <div>
                            <Provider store={store}>
                                <Nav />
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/signup" component={Signup} />
                                </Switch>
                            </Provider>
                        </div>
                    </Router>
                </ApolloProvider>
                <Footer />
            </Container>
        </ThemeProvider>
    );
}

export default App;
