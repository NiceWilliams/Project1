import React from 'react';


export class SignInComponent extends React.Component {
  render() {
    return (
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUsername" className="sr-only">Username</label>
        <input type="text" id="inputUsername" className="form-control" placeholder="Username" required />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p id="login-error"></p>
      </form>
    );
  }
}