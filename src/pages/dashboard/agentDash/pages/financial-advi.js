import "./styles/financial-advi.css";
import React from "react";

const ServicePage = () => {
  return (
    <div className="body">
      <div className="wrapper">
        <h2>Our Services</h2>
        <div className="single-service">
          <h3>Service 1</h3>
          <p>Description of Service 1</p>
        </div>
        <div className="single-service">
          <h3>Service 2</h3>
          <p>Description of Service 2</p>
        </div>
        <div className="single-service">
          <h3>Service 3</h3>
          <p>Description of Service 3</p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
