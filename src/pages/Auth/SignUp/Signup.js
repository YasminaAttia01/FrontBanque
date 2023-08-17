import React, { useState } from "react";
import "./Signup.css";
import { useSignup } from "../../../hooks/useSignup";

function Signup() {
  const [Role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [DateNaiss, setDateNaiss] = useState("");
  const [Adresse, setAdresse] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(
      Role,
      Nom,
      Prenom,
      DateNaiss,
      Adresse,
      PhoneNumber,
      email,
      password
    );
  };

  return (
    <div className="Signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">your Role (agent or client):</label>
        <input
          type="text"
          onChange={(event) => setRole(event.target.value)}
          placeholder="Role"
          name="Role"
        />
        <label htmlFor="nom">Name:</label>
        <input
          type="text"
          onChange={(event) => setNom(event.target.value)}
          placeholder="Nom"
          name="nom"
        />
        <label htmlFor="prenom">First name:</label>
        <input
          type="text"
          onChange={(event) => setPrenom(event.target.value)}
          placeholder="Prénom"
          name="prenom"
        />
        <label htmlFor="dateNaiss">Date of Birth:</label>
        <input
          type="date"
          onChange={(event) => setDateNaiss(event.target.value)}
          placeholder="Date de Naissance"
          name="dateNaiss"
        />
        <label htmlFor="adresse">Adresse:</label>
        <input
          type="text"
          onChange={(event) => setAdresse(event.target.value)}
          placeholder="Adresse"
          name="adresse"
        />
        <label htmlFor="phoneNumber">Phone number :</label>
        <input
          type="text"
          onChange={(event) => setPhoneNumber(event.target.value)}
          placeholder="Numéro de Téléphone"
          name="phoneNumber"
        />
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          name="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          name="password"
        />
        <button type="submit" disable={isLoading}>
          {" "}
          Sign Up
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default Signup;
