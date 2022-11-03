import classes from "./Layout.module.css";
import MainNavigationPage from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigationPage />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
