import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  NavigationContainer,
  NavLink,
  NavLinkContainer,
  LogoContainer,
} from "../../styles/navigation/navigation.styles";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

import CartIcon from "../../cart-icon/CartIcon";
import CartDropdown from "../../cart-dropdown/CartDropdown";
import { signOutFromFireBase } from "../../../utils/firebase/firebase.utils";

export default function NavBar() {
  const { currentUser } = useSelector((state) => state.user);
  const { isOpen } = useSelector((state) => state.basket);

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
