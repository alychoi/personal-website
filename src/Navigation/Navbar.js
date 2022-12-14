import React from "react";
import { NavLink } from 'react-router-dom';
import injectSheet from "react-jss";
import "./Navbar.css"

const styles = {
    Navbar: {
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "5",
    },
    navbarBrand: {
        marginLeft: "20px",
        marginRight: "10px",
        textDecoration: "none",
        fontWeight: "bold",
        color: "#e294de",
    }
}

const Navbar = ({classes}) => {
  return (
    <div className={classes.Navbar}>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className={classes.navbarBrand} id="brand" href="#">
        Alyssa Choi
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
                <NavLink className="nav-element" to='/home'>
                    Home 
                </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                <NavLink className="nav-element" to='/idea-board'>
                    Idea Board
                </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                <NavLink className="nav-element" to='/technical-projects'>
                    Technical Projects
                </NavLink>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Misc (Coming Soon)
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Media
              </a>
              <a className="dropdown-item" href="#">
                Travel
              </a>
              <a className="dropdown-item" href="#">
                Blog
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default injectSheet(styles)(Navbar);