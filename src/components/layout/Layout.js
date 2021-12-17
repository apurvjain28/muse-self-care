import classes from "./Layout.module.css";
import MainNavigationbar from "./MainNavigationbar";

function Layout(props) {
  return (
    <div>
      <MainNavigationbar openCart={props.openCart} />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
