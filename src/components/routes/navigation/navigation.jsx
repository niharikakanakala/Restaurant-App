import React from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as FoodLogo } from "../../../asset/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <React.Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <FoodLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;
