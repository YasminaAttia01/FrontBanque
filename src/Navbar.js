import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../src/hooks/useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();

  const handleClick = () => {
    //logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          Bank home page
        </Link>
        <nav>
          {user && (
            <div>
              <span className="user-email">{user.email}</span>
              <button className="logout-button" onClick={handleClick}>
                Log out
              </button>
            </div>
          )}

          {!user && (
            <div className="auth-buttons">
              <Link to="/login" className="auth-button">
                Login
              </Link>
              <Link to="/signup" className="auth-button">
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
