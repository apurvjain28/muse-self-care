import classes from "./Layout.module.css";
import MainNavigationbar from "./MainNavigationbar";

function Layout(prop) {
  return (
    <div>
      <MainNavigationbar />
      <main className={classes.main}>{prop.children}</main>
    </div>
  );
}

export default Layout;
