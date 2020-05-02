import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ user }) => {
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
      <NavLink className="nav-link" to="/rentals">
        Rentals
      </NavLink>
      {!user && (
        <React.Fragment>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link" to="/registration">
            Registration
          </NavLink>
        </React.Fragment>
      )}
      {user && (
        <React.Fragment>
          <NavLink className="nav-link" to="/profile">
            {user.name}
          </NavLink>
          <NavLink className="nav-link" to="/logout">
            Logout
          </NavLink>
        </React.Fragment>
      )}
    </nav>
  );
};

export default NavBar;
