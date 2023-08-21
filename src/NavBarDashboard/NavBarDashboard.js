import React from "react";
import { Link } from "react-router-dom"; // Assurez-vous d'avoir React Router installé

const NavBarDashboard = () => {
  return (
    <nav className="navbar-dashboard">
      <div className="navbar-logo">
        <Link to="/dashboard">Mon Application</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/dashboard">Accueil</Link>
        </li>
        <li>
          <Link to="/profile">Profil</Link>
        </li>
        <li>
          <Link to="/settings">Paramètres</Link>
        </li>
        <li>
          <Link to="/logout">Déconnexion</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarDashboard;
