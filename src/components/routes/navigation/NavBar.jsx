import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../../styles/navigation/navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
export default function NavBar() {
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
          <Link className="nav-link" to="/auth">
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
