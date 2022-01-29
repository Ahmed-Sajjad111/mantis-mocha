import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SingleProduct from './pages/SingleProduct';
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import { Grid, Container, AppBar, Toolbar, Typography } from "@mui/material";
import { FormControl, MenuItem, TextField, InputLabel } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useDispatch, useSelector} from 'react-redux';
import { CHANGE_PAGE_THEME } from "./utils/actions";
import CoffeeTheme from "./themes/coffee";
import MintTheme from "./themes/mint";
import IceTheme from "./themes/ice";
import DarkBrewTheme from "./themes/dark";


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
    const dispatch = useDispatch()
    const state = useSelector(state => state)


    const handleChange = (event) => {
        const newTheme = event.target.value

        switch(newTheme){
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
            default:
                return dispatch({
                type: CHANGE_PAGE_THEME,
                theme: CoffeeTheme
            })
        }

    };

    return (
        <ThemeProvider theme={state.theme}>
            <CssBaseline />
            <Container maxWidth="xl">
                <Grid container spacing={2} sx={{ mb:2 }}>
                    <AppBar>
                        <Toolbar>
                            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
                                The Coffee Shop
                            </Typography>
                            <FormControl variant="outlined" sx={{ width: "15%" }}>
                            <InputLabel htmlFor="select-theme" shrink sx={{ color: "success.main" }}>Choose Theme:</InputLabel>
                                <TextField
                                    id="select-theme"
                                    labelId="select-theme-label"
                                    value={state.theme}
                                    onChange={handleChange}
                                    select
                                    variant="filled"
                                    margin="none"
                                    size="small"
                                    SelectProps={{ sx: { color: "success.main"} }}
                                >
                                    <MenuItem value={CoffeeTheme} id="coffee">Creamy Coffee</MenuItem>
                                    <MenuItem value={MintTheme} id="mint">Minty Mocha</MenuItem>
                                    <MenuItem value={IceTheme} id="ice">Icy Coffee</MenuItem>
                                    <MenuItem value={DarkBrewTheme} id="ice">Dark Brew</MenuItem>
                                </TextField>
                            </FormControl>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <ApolloProvider client={client}>
                    <Router>
                        <div>
                            <Nav />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/signup" component={Signup} />
                                <Route exact path="/products/:id" component={SingleProduct} />
                            </Switch>
                        </div>
                    </Router>
                </ApolloProvider>
                <Footer />
            </Container>
        </ThemeProvider>
    );
}

export default App;
