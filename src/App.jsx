import React from "react";
import Home from "./components/Home";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./components/Auth/Register";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Dashboard from "./components/Dashboard";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </>
);

export default App;
