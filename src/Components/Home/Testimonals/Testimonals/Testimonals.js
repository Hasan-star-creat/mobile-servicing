import React from 'react';
import Review from '../Review/Review';
import image from '../../../../image/membar.jpg';
import { useEffect } from 'react';
import { useState } from 'react';


const Testimonals = () => {
  const [reviewItem, setReviewItem] = useState([])
    useEffect(() => {
      fetch("https://still-spire-67822.herokuapp.com/review")
      .then(res => res.json())
      .then(data => setReviewItem(data))
    }, [])
  
    return (
      <section className="my-5">
        <div className="text-center">
          <h2 className="fw-bolder">What Our Clients Say!</h2>
          <p className="text-secondary">
            Take a look at what our clients say about fixtech and our work.
            <br /> We love building relationships with our customers and
            clients.
          </p>
        </div>
        <div className="row">
          {reviewItem.map((rev) => (
            <Review rev={rev}></Review>
          ))}
        </div>
      </section>
    );
};

export default Testimonals;