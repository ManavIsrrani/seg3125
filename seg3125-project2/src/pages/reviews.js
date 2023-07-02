import React from 'react';
import "../styles/reviews.css";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.jpeg";

const reviewsData = [
  { id: 1, user: 'John Doe', rating: 4, comment: "I recently delved into the captivating world of Valorant, and I must say, it's been quite the rollercoaster ride. This tactical first-person shooter has managed to strike a delicate balance between intense gameplay and strategic team coordination, providing players with an adrenaline-fueled experience unlike any other.", image: person1},
  { id: 2, user: 'Toby Smith', rating: 5, comment: "Grand Theft Auto V (GTA V) is an absolute masterpiece that delivers an unmatched gaming experience. Rockstar Games has truly outdone themselves with this epic installment in the GTA series. The sprawling open world of Los Santos is an absolute marvel. The attention to detail is mind-blowing, from the bustling city streets to the serene countryside and everything in between", image: person2 },
  { id: 3, user: 'Michelle Johnson', rating: 3, comment: "As an avid gamer and long-time fan of the Call of Duty franchise, I eagerly dived into the latest installment, and boy, was I blown away! Call of Duty has yet again proven why it's the king of first-person shooters with its mind-blowing game mode, Warzone. From the moment I dropped into Verdansk, the massive map that serves as the battleground, I was instantly captivated by the sheer scale and attention to detail. ", image: person3 },
];

const Reviews = () => {
  return (
    <div>
      <h1>Reviews</h1>
      {reviewsData.map((review) => (
        <div key={review.id} className="review-card">
          <div className="review-user">
            <img src={review.image} className="person" />
            <h3>{review.user}</h3>
          </div>
          <p>{review.comment}</p>
          <div className='star'>
            <center><StarRating rating={review.rating} /></center>
          </div>
        </div>
      ))}
    </div>
  );
};

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <span key={index} className="star">&#9733;</span>
  ));

  return <div>{stars}</div>;
};

export default Reviews;
