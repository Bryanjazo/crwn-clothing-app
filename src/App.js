import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import Home from "./components/routes/home/Home";
import NavBar from "./components/routes/navigation/NavBar";
import Shop from "./components/routes/shop/Shop";
import Authenthication from "./components/routes/authenthication/Authenthication";
import Register from "./components/register/Register";
import Checkout from "./components/routes/checkout/Checkout.component";
import { setCurrentUser } from "./features/user/userSlice";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../src/utils/firebase/firebase.utils";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="auth" element={<Authenthication />}></Route>
        <Route path="register" element={<Register />}></Route>

        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
