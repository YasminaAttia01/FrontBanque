import React, { useState } from "react";

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
    <div className="Signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom:</label>
        <input
          type="text"
          onChange={(event) =>
            setFormData({ ...formData, Nom: event.target.value })
          }
          placeholder="Nom"
          name="nom"
        />
        <label htmlFor="prenom">Prénom:</label>
        <input
          type="text"
          onChange={(event) =>
            setFormData({ ...formData, Prenom: event.target.value })
          }
          placeholder="Prénom"
          name="prenom"
        />
        <label htmlFor="dateNaiss">Date de Naissance:</label>
        <input
          type="date"
          onChange={(event) =>
            setFormData({ ...formData, DateNaiss: event.target.value })
          }
          placeholder="Date de Naissance"
          name="dateNaiss"
        />
        <label htmlFor="adresse">Adresse:</label>
        <input
          type="text"
          onChange={(event) =>
            setFormData({ ...formData, Adresse: event.target.value })
          }
          placeholder="Adresse"
          name="adresse"
        />
        <label htmlFor="phoneNumber">Numéro de Téléphone:</label>
        <input
          type="text"
          onChange={(event) =>
            setFormData({ ...formData, PhoneNumber: event.target.value })
          }
          placeholder="Numéro de Téléphone"
          name="phoneNumber"
        />
        <label htmlFor="email">Email:</label>
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
        <button type="submit"> Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
