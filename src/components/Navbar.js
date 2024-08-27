import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import imglog from "../Image/logonsw.png";

function Navbar() {
  let Navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    Navigate("/login");
  }
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img src={imglog} alt="" style={{width: "40px", height:"35px",borderRadius: "48%"}} className="d-inline-block align-text-top "/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="##navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  <strong>Note Book</strong>   
                </Link>
                </li>
                <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/Features" ? "active" : ""
                  }`}
                  to="/Features"
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/About" ? "active" : ""
                  }`}
                  to="/About"
                >
                  About
                </Link>
              </li>
            </ul>   
            {!localStorage.getItem('token')?<form className="d-flex align-items-end">
              <Link className="btn btn-dark mx-2" to="/login" role="button">Login
              </Link>
              <Link className="btn btn-dark me-2" to="/signup" role="button">
              Signup
              </Link>
            </form>: <button onClick={handleLogout} className="btn btn-dark">Logout</button>}
             
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
