import Carousel from "react-bootstrap/Carousel";
import React from "react";

const Review = ({ rev }) => {
  console.log(rev);
  return (
    <div className="col-md-3">
      <img className="d-block w-100" src={rev.img} alt="First slide" />

      <h3>{rev.name}</h3>
      <p>{rev.comment}</p>
      <p>{rev.date}</p>
    </div>
  );
};

export default Review;
