import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { Box, TextField, Button, FormControl, Typography, Slide } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

function Login(props) {
    const [formState, setFormState] = useState({ email: "", password: "" });
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
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
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
            <Link to="/signup" style={{ textDecoration: 'none'}}>
                <Button variant="contained" color="info" sx={{my: 2, mx: "auto" }} ><ArrowCircleLeftIcon /> Go to Signup</Button>
            </Link>
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
                >
                    Input
                </TextField>
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
                >
                    Input
                </TextField>
            </FormControl>
            {error ? (
                <Slide direction="up" in={error}>
                    <Typography align="center" variant="h6" component="div" className="error-text" sx={{ my: 2, color: "red" }}>
                        The provided credentials are incorrect
                    </Typography>
                </Slide>
            ) : null}
            <Button variant="contained" onClick={handleFormSubmit} sx={{ my: 2, width: "30%", mx: "auto" }} color="info">
                Submit
            </Button>
        </Box>
    );
}

export default Login;
