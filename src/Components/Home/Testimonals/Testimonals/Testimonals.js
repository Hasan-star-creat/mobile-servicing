import React from 'react';
import Review from '../Review/Review';
import image from '../../../../image/membar.jpg';


const Testimonals = () => {
    const reviewItem = [
      {
        name: "hasan",
        img: image,
        comment: "amaging her service",
        date: "2020/20/20"
      },
      {
        name: "Jisan",
        img: image,
        comment: "amaging her service",
        date: "2020/20/20"
      },
      {
        name: "Jisan",
        img: image,
        comment: "amaging her service",
        date: "2020/20/20"
      },
    ];
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
           {reviewItem.map(rev => <Review rev={rev}></Review>)}
        </div>
      </section>
    );
};

export default Testimonals;