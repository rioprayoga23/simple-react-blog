import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Fragment>
      <h1 className="brand">Blog Sederhana</h1>
      <nav className="navbar">
        <Link to="/" className="nav-item">
          Home
        </Link>

        <Link to="/blog" className="nav-item">
          Blog
        </Link>

        <Link to="/contact" className="nav-item">
          Contact
        </Link>

        <Link to="/profile" className="nav-item">
          Profile
        </Link>
      </nav>
    </Fragment>
  );
}
