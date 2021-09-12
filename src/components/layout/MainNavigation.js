import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/quotes" className={classes.logo}>
        Quote Master
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" className={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/addQuote" className={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
