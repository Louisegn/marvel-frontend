import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../assets/css/signup.scss";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://project-marvel-back.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      if (response.data) {
        // console.log("yesppp");
        setUser(response.data.token);
        navigate("/favorites");
      }
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte");
      }
    }
  };

  return (
    <div className="signup-main">
      <h2>CREATE YOUR ACCOUNT</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          className="input-text"
          type="text"
          placeholder="Email Adress"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="input-text"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input className="input-submit" type="submit" value="CREATE ACCOUNT" />
        <p className="error-msg">{errorMessage}</p>
      </form>
      <div className="sign-in">
        <p>Already have an account?</p>
        <Link to="/user/login">Sign In</Link>
      </div>
    </div>
  );
};

export default Signup;
