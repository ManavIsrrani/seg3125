import React from 'react';
import "../styles/signup.css";

const Signup = () => {

  return (
    <div className='container2'>
      <h2>Signup</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" className='username-textbox' />
        </div>
        <div>
          <label>Age:</label>
          <input type="text" className='username-textbox' />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" className='username-textbox' />
        </div>
        <div>
          <label>Phone Number: </label>
          <input type="text" className='username-textbox' />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" className='username-textbox' />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
