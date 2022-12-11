import React from "react";
import "./Login.css";
export const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // validation
    setUsername(value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };
  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setError("");
    if (username && password) {
      setIsAuthorized(true);
    } else {
      setError("Username and password are required");
    }
  };

  return (
    <div className="paper login-form">
      <h1>Login</h1>
      <label htmlFor="#username">Username</label>
      <input
        type="text"
        id="username"
        name="login"
        onChange={(e) => handleUsernameChange(e)}
      />
      <label htmlFor="#password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => handlePasswordChange(e)}
      />
      {error && <div className="error">{error}</div>}
      <button className="btn btn-success" onClick={(e) => handleSubmit(e)}>
        Login
      </button>
    </div>
  );
};
