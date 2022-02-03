import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { Box, TextField, Button, FormControl, Typography, Collapse, Alert, IconButton } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import CloseIcon from "@mui/icons-material/Close";

function Login(props) {
    const [formState, setFormState] = useState({ email: "", password: "" });
    const [loginAlert, setLoginAlert] = useState(false);
    const [login, { error }] = useMutation(LOGIN);


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
            setLoginAlert(true);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
            loginAlert: false
        });
    };

    return (
        <Box
            component="form"
            autoComplete="off"
            sx={{
                mt: 20,
                bgcolor: "secondary.light",
                width: "50%",
                mx: "auto",
                display: "flex",
                flexDirection: "column",
                px: 4,
            }}
        >
            <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="info" sx={{ my: 2, mx: "auto" }}>
                    <ArrowCircleLeftIcon /> Go to Signup
                </Button>
            </Link>
            <Typography align="center" variant="h3" component="div" sx={{ my: 2 }}>
                Login
            </Typography>
            <FormControl sx={{ my: 2 }} variant="outlined">
                <TextField
                    label="Email"
                    InputLabelProps={{ shrink: true }}
                    placeholder="youremail@text.com"
                    name="email"
                    type="email"
                    id="email"
                    onChange={handleChange}
                    sx={{ width: "90%", mx: "auto" }}
                />
            </FormControl>
            <FormControl sx={{ my: 2 }}>
                <TextField
                    label="Password"
                    InputLabelProps={{ shrink: true }}
                    placeholder="******"
                    name="password"
                    type="password"
                    id="pwd"
                    variant="outlined"
                    onChange={handleChange}
                    sx={{ width: "90%", mx: "auto" }}
                />
            </FormControl>
            {error ? (
                <Collapse in={loginAlert}>
                    <Alert
                        variant="filled"
                        severity="error"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"

                                size="small"
                                onClick={() => {
                                    setLoginAlert(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        Something went wrong with your login!
                    </Alert>
                </Collapse>
            ) : null}

            <Button
                variant="contained"
                onClick={handleFormSubmit}
                sx={{ my: 2, width: "30%", mx: "auto" }}
                color="info"
            >
                Submit
            </Button>
        </Box>
    );
}

export default Login;
