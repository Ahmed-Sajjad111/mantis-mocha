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
import Header from './components/Header'

import {Container} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import {useSelector} from 'react-redux';


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
    const state = useSelector(state => state)
    console.log(state)

    return (
    <ApolloProvider client={client}>
        <Router>
            <ThemeProvider theme={state.theme}>
                <CssBaseline />
                <Container maxWidth="xl">
                    <Header/>
                    <div>
                        <Nav />
                        <Switch>
                            <Route  exact path="/" component={Home} />
                            <Route  excat path="/login" component={Login} />
                            <Route  excat path="/signup" component={Signup} />
                            <Route  excat path="/products/:id" component={SingleProduct} />
                        </Switch>
                    </div>
                    <Footer/>
                </Container>
            </ThemeProvider>
        </Router>
    </ApolloProvider>
    );
}

export default App;
