import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  const location = useLocation();

  return (
    <div
      className="navbar-head"
      style={{
        height: "50px",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000, 
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        borderRadius: "10px",
      }}
    >
      <div
        className="navbar-option"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          fontSize: "25px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-item" : ""}
          style={{ textDecoration: "none", color: "white" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-item" : ""}
          style={{ textDecoration: "none", color: "white" }}
        >
          About
        </Link>
        <Link
          to="/product"
          className={location.pathname === "/product" ? "nav-item" : ""}
          style={{ textDecoration: "none", color: "white" }}
        >
          Products
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-item" : ""}
          style={{ textDecoration: "none", color: "white" }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
