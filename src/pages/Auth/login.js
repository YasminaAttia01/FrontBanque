import React, { useEffect, useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div className="login-container" onSubmit={handleSubmit}>
      <h1>login</h1>
      <form action="POST">
        <label>Email :</label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name=""
          id=""
          value={email}
        />
        <label> Password :</label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          name=""
          id=""
          value={password}
        />
      </form>
      <button>Log in</button>
    </div>
  );
}
export default Login;
