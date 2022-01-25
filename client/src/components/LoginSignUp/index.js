import React, { useState } from 'react';

import { Box, Modal, Button, TextField, InputLabel } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function SignupModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button onClick={handleOpen}>Already signed up?  Log-in instead!</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="signup-modal-title"
        aria-describedby="signup-modal-descriptio"
      >
        <Box sx={{ ...style, width: 200}}>
          <h2 id="signup-modal-title">Become one with Coffee Mantis<span role="img" aria-label="sparkling-heart-emoji">💖</span></h2>
          <InputLabel>Email</InputLabel>
          <TextField></TextField>
          <InputLabel>Password</InputLabel>
          <TextField></TextField>
          <Button>Sign Up!</Button>
          <Button>Back to Login</Button>
        </Box>
      </Modal>
    </Fragment>
  )
}

import React from "react";

function LoginSignUp() {
  return (
    <form>
      <h1>Sign Up</h1>
      <p>Create an account.</p>

      <label for="email">
        <p>Email</p>
      </label>
      <input type="text" placeholder="Enter Email" name="email" required />

      <label for="pass">
        <p>Password</p>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="pass"
        required
      />

      <div>
        <button type="submit" class="signupbtn">
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default LoginSignUp;