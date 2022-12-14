import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  NavigationContainer,
  NavLink,
  NavLinkContainer,
  LogoContainer,
} from "../../styles/navigation/navigation.styles";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import CartIcon from "../../cart-icon/CartIcon";
import CartDropdown from "../../cart-dropdown/CartDropdown";
import { signOutFromFireBase } from "../../../utils/firebase/firebase.utils";
import { CartContext } from "../../../context/CartContext";
export default function NavBar() {
  // const { currentUser } = useContext(UserContext);
  const { currentUser } = useSelector((state) => state.user);
  const { isOpen } = useContext(CartContext);

  const handleSignOut = async (e) => {
    await signOutFromFireBase();
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo">logo</CrwnLogo>
        </LogoContainer>

        <NavLinkContainer>
          <NavLink to="/shop">Shop</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={handleSignOut}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="auth">Sign in</NavLink>
          )}

          <CartIcon />
        </NavLinkContainer>
        {isOpen ? <CartDropdown /> : ""}
      </NavigationContainer>
      <Outlet />
    </>
  );
}
