import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import Home from "../pages/Home/Home";
import Signin from "../pages/sign-in/Signin";
import User from "../pages/User/User";


const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
