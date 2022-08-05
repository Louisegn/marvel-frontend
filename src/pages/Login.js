import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
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
        navigate("/favorites");
      }
      console.log(response.data);
      alert("ALLESS GOOOOD");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adresse email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholde="Mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input type="submit" value="Se connecter" />
      </form>
      <Link to="/user/signup">Pas encore de compte ? Inscris-toi !</Link>
    </div>
  );
};

export default Login;
