import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigationbar.module.css";
// import logo from "../../images/logo.JPG";
import HeaderCartButton from "./HeaderCartButton";

import AuthContext from "../../store/auth-context";

const MainNavigationbar = (props) => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

  let badgeItemCount = 0;
  // console.log(authCtx.data);
  if (authCtx.data?.recommendedProducts) {
    badgeItemCount = Object.keys(authCtx.data.recommendedProducts).length || 0;
  }

  return (
    <header>
      <nav className={classes.header}>
        <div className={classes.logo}></div>
        <ul>
          {authCtx.isLoggedIn && (
            <li>
              <Link to="/centres">My Centres</Link>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <Link to="/rituals">My Rituals</Link>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <Link to="/products">
                Products for Me
                <span className={classes.badge}>{badgeItemCount}</span>
              </Link>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <Link to="/account">My Account</Link>
            </li>
          )}
          {!authCtx.isLoggedIn && (
            <li>
              <Link to="/">Login</Link>
            </li>
          )}
          <li>
            <HeaderCartButton openCart={props.openCart} />
          </li>
          {authCtx.isLoggedIn && (
            <li>
              <button className={classes.btn_logout} onClick={logoutHandler}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigationbar;
