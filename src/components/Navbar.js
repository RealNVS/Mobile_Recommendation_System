import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

export default function Navbar() {
  const datas = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
      </div>

      <h1 className="navbar-title">PickMyPhone</h1>

      <div className="navbar-right">
        {datas.user && <Link to="/filter">Filters</Link>}
        {datas.user && <Link to="/services">Services</Link>}
        {datas.user  && <Link to="/about">About</Link>}
        {!datas.user && <Link to="/signup">Signup</Link>}
        {!datas.user && <Link to="/login">Login</Link>}
        {datas.user && (
          <button
            onClick={datas.logout}
            className="logout-button"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
