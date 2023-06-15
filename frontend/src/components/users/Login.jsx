import React from "react";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async ({ email, password }) => {
    const userData = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/login",
        userData
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div class="outer">
      <div class="inner">
        <header class="signup">
          <h1>Login</h1>
        </header>

        <main class="content">
          <form action="">
            <p>
              <label for="Name">Email</label>
              <input
                type="text"
                placeholder="gouravparmar775566@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </p>
            <p>
              <label for="Password">Password</label>
              <input
                type="password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </p>
            <p>
              <label for="Submit"></label>
              <input
                type="submit"
                value="Login"
                onClick={() => {
                  handleOnSubmit({ email, password });
                }}
              />
            </p>
          </form>
        </main>
      </div>
      <div class="circle c1"></div>
      <div class="circle c2"></div>
    </div>
  );
}

export default Login;
