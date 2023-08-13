import React from "react";

const HomePage = () => {
  return (
    <div className="pages">
      <header>
        <div className="container">
          <h1>Mon Site Web</h1>
          <nav>
            <a href="#">Accueil</a>
            <a href="#">À Propos</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <h2>Bienvenue sur notre site</h2>
        <p>C'est la page d'accueil de notre site web.</p>
      </main>
    </div>
  );
};

export default HomePage;
