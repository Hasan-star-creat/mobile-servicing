import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import './OurServiceDettaisl.css'

const OurServiceDettails = ({ servic }) => {
  console.log(servic)

  return (
    <section className="my-5 col-md-4 service">
      <img
        height="200px" width="320px"
        src={`data:image/jpeg;base64,${servic.image.img}`}
        alt=""
      />
      <div className="p-4 content">
        <p style={{ fontSize: "30px" }} className="text-secondary">
          <FontAwesomeIcon icon={faTools} />
        </p>
        <h4>{servic.name}</h4>
        <p className="text-secondary">
         {servic.desc}
        </p>
        <button className="btn main-btn text-white">READE MORE</button>
      </div>
    </section>
  );
};

export default OurServiceDettails;