import React from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className={classes.main}>
        {/*rendering actual components. acts as wrapper */}
        {props.children}
      </main>
    </React.Fragment>
  );
};

export default Layout;
