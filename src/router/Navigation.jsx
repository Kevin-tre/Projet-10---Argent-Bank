import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import Home from "../pages/Home/Home";
import Signin from "../pages/sign-in/Signin";
import User from "../pages/User/User";



const Navigation = () => {
  const {token} = useSelector(state => state.user)
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={token?<Navigate replace to ="/user"/> :<Signin />} />
          <Route exact path="/user" element={!token?<Navigate replace to ="/"/> :<User />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
