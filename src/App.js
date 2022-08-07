import "./App.css";
import "./assets/css/reset.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
// import axios from "axios";
// import { useState } from "react";

//components
import Header from "./components/Header";

//pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Character from "./pages/Character";
import Favorites from "./pages/Favorites";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [userId, setUserId] = useState();
  // const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `https://project-marvel-back.herokuapp.com/user`,
          {
            token: token,
          }
        );
        // console.log(response.data);
        setUserId(response.data);
      } catch (error) {
        console.log(error.meassage);
      }
    };
    fetchData();
  }, [token]);
  const setUser = (token) => {
    if (token !== null) {
      Cookies.set("token", token);
    } else {
      Cookies.remove("token");
    }
    setToken(token);
    console.log("YOOO", token);
  };

  const favorite = async ({ comicId, charaId }) => {
    try {
      // console.log(
      //   "userId : ",
      //   userId._id,
      //   "charaId : ",
      //   charaId,
      //   "comicId : ",
      //   comicId
      // );
      if (charaId) {
        const response = await axios.post(
          "https://project-marvel-back.herokuapp.com/user/favorites",
          {
            userId: userId._id,
            charaId: charaId,
          }
        );
        setUserId(response.data);
      } else {
        const response = await axios.post(
          "https://project-marvel-back.herokuapp.com/user/favorites",
          {
            userId: userId._id,
            comicsId: comicId,
          }
        );
        setUserId(response.data);
      }
      // console.log("coucou");
      // console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <Router>
        <Header token={token} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home token={token} />}></Route>
          <Route
            path="/characters"
            element={
              <Characters token={token} favorite={favorite} userId={userId} />
            }
          ></Route>
          <Route
            path="/comics"
            element={
              <Comics token={token} favorite={favorite} userId={userId} />
            }
          ></Route>
          <Route
            path="/character/:id"
            element={<Character favorite={favorite} />}
          ></Route>
          <Route
            path="/favorites"
            element={<Favorites userId={userId} />}
          ></Route>
          <Route
            path="/user/signup"
            element={<Signup setUser={setUser} setUserId={setUserId} />}
          ></Route>
          <Route
            path="/user/login"
            element={<Login setUser={setUser} setUserId={setUserId} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
