import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Quote Master</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
