import React from "react";
import { Routes, Route } from "react-router";
import Home from "./components/routes/home/Home";
import NavBar from "./components/routes/navigation/NavBar";
import Shop from "./components/routes/shop/Shop";
import Signin from "./components/routes/signin/Signin";
import Register from "./components/routes/register/Register";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="sign-in" element={<Signin />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
