import React, { useEffect, useState } from "react";
import { useLogin } from "../../../hooks/useLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password, nav);
  };

  return (
    <div className="login-container">
      <h1>login</h1>
      <form onSubmit={handleSubmit} className="form-container">
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
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        <button type="submit" disabled={isLoading}>
          Log in
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
export default Login;
