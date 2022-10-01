import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../assets/css/login.scss";

const Login = ({ setUser, setUserId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://project-marvel-back.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      // console.log("COOKIE", response.data.token);
      if (response.data) {
        // console.log("yesppp");
        setUser(response.data.token);
        setUserId(response.data);
        navigate("/favorites");
      }
      // console.log(response.data);
      // alert("ALLESS GOOOOD");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-main">
      <h2>SIGN IN</h2>
      <form className="form-container" onSubmit={handleSubmit}>
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
        <input className="input-submit" type="submit" value="SIGN IN" />
      </form>
      <div className="separator"></div>
      <Link to="/user/signup">CREATE AN ACCOUNT</Link>
    </div>
  );
};

export default Login;
