import React, { useState } from "react";
import "./App.css";
import Victory from "../assets/victory.svg";
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/auth" element={<Auth />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
