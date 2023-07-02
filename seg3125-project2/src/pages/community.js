import React, { useState } from 'react';
import "../styles/community.css";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import twitter from "../assets/twitter.webp";
import person1 from "../assets/person1.png"
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.jpeg";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.jpg";

const Community = () => {
  const friends = [
    { name: 'Jane Smith', image: person2 },
    { name: 'Alice Johnson', image: person3 },
    { name: 'Bob Anderson', image: person4 },
    { name: 'Emma Davis', image: person5 }
  ];

  const reviewsData = [
    { id: 1, user: 'Emma Davis', rating: 4, comment: "I recently delved into the captivating world of Valorant, and I must say, it's been quite the rollercoaster ride. This tactical first-person shooter has managed to strike a delicate balance between intense gameplay and strategic team coordination, providing players with an adrenaline-fueled experience unlike any other.", image: person5 },
    { id: 2, user: 'Toby Smith', rating: 5, comment: "Grand Theft Auto V (GTA V) is an absolute masterpiece that delivers an unmatched gaming experience. Rockstar Games has truly outdone themselves with this epic installment in the GTA series. The sprawling open world of Los Santos is an absolute marvel. The attention to detail is mind-blowing, from the bustling city streets to the serene countryside and everything in between", image: person2 },
    { id: 3, user: 'Michelle Johnson', rating: 3, comment: "As an avid gamer and long-time fan of the Call of Duty franchise, I eagerly dived into the latest installment, and boy, was I blown away! Call of Duty has yet again proven why it's the king of first-person shooters with its mind-blowing game mode, Warzone. From the moment I dropped into Verdansk, the massive map that serves as the battleground, I was instantly captivated by the sheer scale and attention to detail. ", image: person3 },
  ];

  return (
    <div className="community-container">
      <div className="community-header">
        <h1>Community</h1>
      </div>
      <div className="container">
        <div className="community-sidebar">
          <div>
            <h3>Socials</h3>
            <a href="#">
              <button className="facebook">
                <img src={facebook} className="social-image1" alt="Facebook" />
                Facebook
              </button>
            </a>
            <br></br>
            <a href="#">
              <button className="twitter">
                <img src={twitter} className="social-image2" alt="Twitter" />
                Twitter
              </button>
            </a>
            <br></br>
            <a href="#">
              <button className="google">
                <img src={google} className="social-image3" alt="Google" />
                Google
              </button>
            </a>
            <br></br>
          </div>
          <div className="friends-list">
            <h3>Friends</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {friends.map((friend, index) => (
                <li key={index} className="friend-item">
                  <img
                    src={friend.image}
                    alt={friend.name}
                    className="friend-picture"
                  />
                  <span className="friend-name">{friend.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="user-component">
          <div className="user-info">
            <img
              src={person1}
              alt="User"
              className="user-picture"
            />
            <span className="user-name">John Doe</span>
          </div>
          <input type="text" placeholder='Make a new post.....' className='text-box'></input>
          <button className="post-button">Post!</button>
          <div className='posts'>
            {reviewsData.map((review) => (
                <div key={review.id} className="review-card">
                <div className="review-user">
                    <img src={review.image} className="person" />
                    <h3>{review.user}</h3>
                </div>
                <p>{review.comment}</p>
                </div>
            ))}
            </div>

        </div>
      </div>
    </div>
  );
};

export default Community;
