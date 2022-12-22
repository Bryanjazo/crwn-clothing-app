import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../../features/user/user.selectors";
import {
  NavigationContainer,
  NavLink,
  NavLinkContainer,
  LogoContainer,
} from "../../styles/navigation/navigation.styles";
import { selectIsCartOpen } from "../../../features/basket/basket.selector";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

import CartIcon from "../../cart-icon/CartIcon";
import CartDropdown from "../../cart-dropdown/CartDropdown";
import { signOutFromFireBase } from "../../../utils/firebase/firebase.utils";

export default function NavBar() {
  const currentUser = useSelector(selectCurrentUser);

  const isOpen = useSelector(selectIsCartOpen);

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
