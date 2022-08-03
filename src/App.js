import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import axios from "axios";
// import { useState } from "react";

//components
import Header from "./components/Header";

//pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Character from "./pages/Character";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />}></Route>
          <Route path="/comics" element={<Comics />}></Route>
          <Route path="/character/:id" element={<Character />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
