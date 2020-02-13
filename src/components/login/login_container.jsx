import React, { Component } from "react";
import "./login.scss";

class LoginPage extends Component {
  state = { isLoggedIn: false };
  render() {
    return (
      <div id="login_container">
        <h1>Login</h1>
        <form id="login_form" action="/action_page.php">
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname" value="John"></input>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" value="Doe"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default LoginPage;
