import React from "react";
import "./Home.css";

function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to Our Bank</h1>
        <p>Your Trusted Partner in Banking Solutions</p>
      </header>
      <section className="features">
        <h2>Our Services</h2>
        <ul>
          <li>Secure Online Banking</li>
          <li>Quick and Easy Fund Transfers</li>
          <li>24/7 Customer Support</li>
          {/* Add more features here */}
        </ul>
      </section>
      {/* Add more sections and content */}
    </div>
  );
}

export default HomePage;
