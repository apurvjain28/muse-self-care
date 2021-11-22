import { Link } from "react-router-dom";
import classes from "./MainNavigationbar.module.css";
import logo from "../../images/logo.JPG";
import HeaderCartButton from "./HeaderCartButton";

const MainNavigationbar = (props) => {
  return (
    <header>
      <nav className={classes.header}>
        <div className={classes.logo}>
          {/* <a className="nav-link" href="#">
            <img src={logo} alt="image" className={classes.logo} />
          </a> */}
        </div>

        {/* <p className={classes.heading}>
          Saturn 1st return- Predictor view <br /> Elon Musk
        </p> */}

        <ul>
          <li>
            <Link to="/">My Centres</Link>
          </li>
          <li>
            <Link to="/products">
              My Products
              <span className={classes.badge}>{"2"}</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/products">
              Cart
              <span className={classes.badge}>{"1"}</span>
            </Link>
          </li> */}
          <li>
            <Link to="/account">My Account</Link>
          </li>
          <li>
            <HeaderCartButton openCart={props.openCart} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigationbar;
