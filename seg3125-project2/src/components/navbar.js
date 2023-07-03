import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/Gaming Geeks-logos_transparent.png"

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/seg3125/"> Home </Link>
          <Link to="/marketplace"> Marketplace </Link>
          <Link to="/information"> Information </Link>
          <Link to="/community"> Community </Link>
          <Link to="/reviews"> Reviews </Link>
          <Link to="/account"> Account </Link>
        </div>
      </div>
      <div className="rightSide">
          <Link to="/seg3125/"> Home </Link>
          <Link to="/marketplace"> Marketplace </Link>
          <Link to="/events"> Events </Link>
          <Link to="/community"> Community </Link>
          <Link to="/reviews"> Reviews </Link>
          <Link to="/account"> Account </Link>
        <button onClick={toggleNavbar}>
        </button>
      </div>
    </div>
  );
}

export default Navbar;