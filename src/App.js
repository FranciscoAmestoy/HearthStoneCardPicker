import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CardPicker from "./pages/CardPicker";
import About from "./pages/About";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="container mt-5">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/cardpicker" exact element={<CardPicker />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
