import React from 'react';
import "../styles/login.css"

const Login = () => {
  return (
    <div className='container3'>
      <center><h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" className='username-textbox2' />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" className='password-textbox' />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
      <p>
        <a href="#" className='forgot'>Forgot Password?</a>
      </p>
      <p  className='forgot'>
        New to this website?  <a href="/signup">Sign Up</a>
      </p>
      <br></br>
      </center>
    </div>
  );
};

export default Login;
