import React, { Component } from "react";
import "./login.scss";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false, username: "", password: "" };

    this.verifyTextFields = this.verifyTextFields.bind(this);
  }
  verifyTextFields() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <div id="login_container">
        <h1>Login</h1>
        <form id="login_form" action="/action_page.php">
          <label>Username</label>
          <input
            className="input_field"
            type="text"
            id="username_input"
            name="username"
            required
          ></input>
          <label>Password</label>
          <input
            className="input_field"
            type="password"
            id="password_input"
            name="password"
            required
          ></input>
          <input
            className="input_field"
            id="submit_input"
            type="submit"
            value="Login"
            onClick={this.verifyTextFields}
          ></input>
        </form>
      </div>
    );
  }
}

export default LoginPage;
