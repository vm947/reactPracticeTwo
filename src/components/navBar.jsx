import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="nav nav-dark bg-dark mb-4">
      <Link
        className="nav-link"
        style={{ fontWeight: "bold", color: "white", fontSize: "1.5rem" }}
        to="/movies"
      >
        Vidly
      </Link>
      <NavLink className="nav-link" to="/movies">
        Movies
      </NavLink>
      <NavLink className="nav-link" to="/customers">
        Customers
      </NavLink>
      <NavLink className="nav-link" to="/rentals" tabindex="-1" aria-disabled="true">
        Rentals
      </NavLink>
      <NavLink className="nav-link" to="/login" tabindex="-1" aria-disabled="true">
        Login
      </NavLink>
    </nav>
  );
};

export default NavBar;
