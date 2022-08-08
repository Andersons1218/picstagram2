// LoginForm.jsx
import '../../pages/AuthPage/AuthPage.css'
import { useState } from "react";
import * as usersService from "../../utilities/users-service";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div className="form-container" onSubmit={handleSubmit}>
      <div class="box">
        <div class="heading"></div>
        <form class="login-form">
          <div class="field">
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
            <label for="username">Phone number, username, or email</label>
          </div>
          <br />
          <div class="field">
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <label for="password">Password</label>
          </div>
          <br/>
          <button class="login-button" title="login">
            Log In
          </button>
          <br/>
          <div class="separator">
            <div class="line"></div>
            <p>OR</p>
            <div class="line"></div>
          </div>
          <br/>
          <div class="other">
            <a href="https://www.facebook.com/">
            <button class="fb-login-btn" type="button">
              <span class="">Log in with Facebook</span>
            </button>
             </a>
            <a class="forgot-password" href="#">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
      <div class="box">
        <p>
          Don't have an account?{" "}
        </p>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    </div>
  );
}

// // <div>
// <div className="form-container" onSubmit={handleSubmit}>
// <form autoComplete="off" >
//   <label>Email</label>
//   <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
//   <label>Password</label>
//   <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
//   <button type="submit">LOG IN</button>
// </form>
// </div>
// <p className="error-message">&nbsp;{error}</p>
// </div>
