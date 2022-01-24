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