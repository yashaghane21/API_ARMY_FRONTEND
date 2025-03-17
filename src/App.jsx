import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login.jsx";
import { Toaster } from "react-hot-toast";
import Home from "./components/Auth/Home.jsx";
import SignUp from "./components/Auth/SignUp.jsx";
const App = () => {
  return (
    <div className="">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
