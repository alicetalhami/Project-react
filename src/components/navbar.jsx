import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";
import DarkMode from "./DarkMode/DarkMode";
import React from "react";

const NavBar = () => {
  const { user } = useAuth();

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Bcard<i className="bi bi-card-heading"></i>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="nav-item">
            <DarkMode />
          </li>
        </ul>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            {user && (
              <>
                <li className="nav-item">
                  <NavLink to="/fav-cards" className="nav-link">
                    Fav Cards
                  </NavLink>
                </li>
                </>
                  )}


          

            {user?.biz && (
              <li className="nav-item">
                <NavLink to="/my-cards" className="nav-link">
                  My Cards
                </NavLink>
              </li>
            )}
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            {user ? (
              <li className="nav-item">
                <NavLink to="/sign-out" className="nav-link">
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/sign-up" className="nav-link">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/sign-up-biz" className="nav-link">
                    Sign Up Biz
                  </NavLink>
                </li>
              </>
            )}

              {user && (
                <li className="nav-item">
                  <a href="/" className="nav-link">
                  <nav className="img2" >
               <img
                  src={user.profilePicture || "logo.png"}
                  alt="Profile"
                  className="nav-profile-picture"
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
                  </nav>
                  </a>
                </li>
             
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;