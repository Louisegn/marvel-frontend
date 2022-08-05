import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

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

function App() {
  const [token, setToken] = useState(Cookies.get("cookie") || null);

  const setUser = (token) => {
    if (token !== null) {
      Cookies.set("token", token);
    } else {
      Cookies.remove("token");
    }
    setToken(token);
    console.log("YOOO", token);
  };

  return (
    <div className="App">
      <Router>
        <Header token={token} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Characters />}></Route>
          <Route path="/comics" element={<Comics />}></Route>
          <Route path="/character/:id" element={<Character />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route
            path="/user/signup"
            element={<Signup setUser={setUser} />}
          ></Route>
          <Route
            path="/user/login"
            element={<Login setUser={setUser} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
