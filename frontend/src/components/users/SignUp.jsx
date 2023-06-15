import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async ({ email, name, password }) => {
    const userData = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/register",
        userData
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div class="outer">
      <div class="inner">
        <header class="signup">
          <h1>SignUp</h1>
          <p>It takes 30sec</p>
        </header>

        <main class="content">
          <form action="">
            <p>
              <label for="Name">Full Name</label>
              <input
                type="text"
                placeholder="Gourav Parmar"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </p>

            <p>
              <label for="Email">Your Email</label>
              <input
                type="text"
                placeholder="gourav.parmar434@gmail.com"
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
                value="Create Account"
                onClick={() => {
                  handleOnSubmit({ email, name, password });
                }}
              />
            </p>
          </form>
        </main>

        <footer>
          <p>
            Already have an account! click on login.
            <a href="">login</a>
          </p>
        </footer>
      </div>
      <div class="circle c1"></div>
      <div class="circle c2"></div>
    </div>
  );
}

export default SignUp;
