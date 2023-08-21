import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "./hooks/useLogout";
import { AuthContext } from "./context/AuthContext"; // Update the path accordingly

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const { logout } = useLogout();

  const handleClick = () => {
    // Dispatch the LOGOUT action here
    dispatch({ type: "LOGOUT" });
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          Bank home page
        </Link>
        <nav>
          {user && (
            <div className="user-dashboard">
              <span className="user-email">Welcome, {user.email}</span>
              <Link to="/agentover" className="dashboard-link">
                Dashboard
              </Link>
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
