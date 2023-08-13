import React, { useEffect, useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div className="login-container">
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email :</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="E-mail"
          value={email}
        />
        <label> Password :</label>
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Password"
          value={password}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
export default Login;
