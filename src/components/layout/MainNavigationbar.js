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
            <Link to="/centres">My Centres</Link>
          </li>
          <li>
            <Link to="/rituals">My Rituals</Link>
          </li>
          <li>
            <Link to="/products">
              Products for Me
              <span className={classes.badge}>{"2"}</span>
            </Link>
          </li>
          <li>
            <Link to="/account">My Account</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
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
