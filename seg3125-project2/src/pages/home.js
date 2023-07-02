import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/background.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Gaming Geeks </h1>
        <p> Explore, Connect, and Game On with Gaming Geeks!</p>
        
        <Link to="/signup">
          <button> Sign Up </button>
        </Link>
        <Link to="/login">
          <button> Login </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;