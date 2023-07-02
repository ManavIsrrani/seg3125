import React from 'react';
import person1 from "../assets/person1.png";
import "../styles/account.css";


const Account = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
    dateOfBirth: 'January 1, 1990',
    homeAddress: '123 Oak Street, Anytown, USA 12345'
  };

  return (
    <div className="account">
      <img src={person1} className="user-image" />
      <h1>{user.name}</h1>
      <div className="user-details">
        <h3>User Information</h3>
        <p>Email: {user.email}</p>
        <p>Phone Number: {user.phoneNumber}</p>
        <p>Date of Birth: {user.dateOfBirth}</p>
        <p>Home Address: {user.homeAddress}</p>
        <h3>Security</h3>
        <p>Old Password: <input type="password" id="password" /></p>
        <p>New Password: <input type="password" id="password" /></p>
        <p>Confirm New Password: <input type="password" id="password" /></p>
        <center><button>Save</button></center>

      </div>
    </div>
  );
};

export default Account;