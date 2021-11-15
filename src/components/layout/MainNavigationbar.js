import classes from "./MainNavigationbar.module.css";

const MainNavigationbar = () => {
  return (
    <nav className="navbar navbar-dark">
      <a className="nav-link" href="#">
        <img src="./logo.png" alt="image" className={classes.logo} />
        <p className={classes.heading}>
          Saturn 1st return- Predictor view <br /> Rowan Asad
        </p>
      </a>
    </nav>
  );
};

export default MainNavigationbar;
