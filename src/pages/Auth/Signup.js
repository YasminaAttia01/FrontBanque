import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    Nom: "",
    Prenom: "",
    DateNaiss: "",
    Adresse: "",
    PhoneNumber: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div className="Signup-container" onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="nom">Nom:</label>
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, Nom: e.target.value })}
          placeholder="Nom"
          name="nom"
        />
        <label htmlFor="prenom">Prénom:</label>
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, Prenom: e.target.value })}
          placeholder="Prénom"
          name="prenom"
        />
        <label htmlFor="dateNaiss">Date de Naissance:</label>
        <input
          type="date"
          onChange={(e) =>
            setFormData({ ...formData, DateNaiss: e.target.value })
          }
          placeholder="Date de Naissance"
          name="dateNaiss"
        />
        <label htmlFor="adresse">Adresse:</label>
        <input
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, Adresse: e.target.value })
          }
          placeholder="Adresse"
          name="adresse"
        />
        <label htmlFor="phoneNumber">Numéro de Téléphone:</label>
        <input
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, PhoneNumber: e.target.value })
          }
          placeholder="Numéro de Téléphone"
          name="phoneNumber"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          name="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          name="password"
        />
        <button> Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
