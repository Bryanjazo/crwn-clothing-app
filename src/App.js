import React from "react";
import { Routes, Route } from "react-router";
import Home from "./components/routes/home/Home";
import NavBar from "./components/routes/navigation/NavBar";
import Shop from "./components/routes/shop/Shop";
import Authenthication from "./components/routes/authenthication/Authenthication";
import Register from "./components/register/Register";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="auth" element={<Authenthication />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
