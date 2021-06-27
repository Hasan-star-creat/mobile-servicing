import React from "react";

const Review = ({ rev }) => {
  const { name, company , photo, date} = rev.review;
  return (
    <div className="col-md-3">
      <img className="d-block w-100" src={photo} alt="First slide" />

      <h3>{name}</h3>
      <p>{company}</p>
      <p>{new Date(date).toDateString()}</p>
    </div>
  );
};

export default Review;
