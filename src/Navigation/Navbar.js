import React, { useState } from "react";
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
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleToggle() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className={classes.Navbar}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className={classes.navbarBrand} href="#">
        <NavLink id="brand" to='/home' onClick={handleToggle}>
            Alyssa Choi 
        </NavLink>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggle}
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNavDropdown" style={{paddingLeft: "20px"}}>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
                <NavLink className="nav-element" to='/home' onClick={handleToggle}>
                    HOME 
                </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                <NavLink className="nav-element" to='/idea-board' onClick={handleToggle}>
                    IDEAS
                </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                <NavLink className="nav-element" to='/technical-projects' onClick={handleToggle}>
                    PROJECTS
                </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                <NavLink className="nav-element" to='/misc' onClick={handleToggle}>
                    MISC ✩
                </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                <NavLink className="nav-element" to='/resume' onClick={handleToggle}>
                    RESUME
                </NavLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default injectSheet(styles)(Navbar);