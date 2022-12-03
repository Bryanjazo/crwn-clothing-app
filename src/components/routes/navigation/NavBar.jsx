import { Outlet, Link } from "react-router-dom";
import "../../styles/navigation/navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import CartIcon from "../../cart-icon/CartIcon";
import CartDropdown from "../../cart-dropdown/CartDropdown";
import { signOutFromFireBase } from "../../../utils/firebase/firebase.utils";
import { CartContext } from "../../../context/CartContext";
export default function NavBar() {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);

  const handleSignOut = async (e) => {
    await signOutFromFireBase();
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo">logo</CrwnLogo>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              Sign in
            </Link>
          )}
          <Link className="nav-link" to="products">
            Products
          </Link>

          <CartIcon />
        </div>
        {isOpen ? <CartDropdown /> : ""}
      </div>
      <Outlet />
    </>
  );
}
