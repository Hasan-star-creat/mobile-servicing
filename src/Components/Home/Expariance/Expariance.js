import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faCheck, faTools } from "@fortawesome/free-solid-svg-icons";
import expImg from '../../../image/expreince1.jpg'
const Expariance = () => {
    return (
      <div className="row mt-5 py-5">
        <div className="col-md-7">
          <h2>We Have 35 Years Experiance In This Passion</h2>
          <p className="text-secondary py-3">
            We have been in the repairing and services business since 1995. We
            have experienced service department ready to handle all of your
            repair tasks. Our team will get your device with guarantee with
            affordable price.
          </p>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled text-secondary">
                <li>
                  <span className="mr-2 text-info">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Water damaged smartphones
                </li>
                <li>
                  <span className="mr-2 text-info">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Network related issues.
                </li>
                <li>
                  <span className="mr-2 text-info">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Broken screens & glass.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled text-secondary">
                <li>
                  <span className="mr-2 text-info">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Water damaged smartphones
                </li>
                <li>
                  <span className="mr-2 text-info">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Network related issues.
                </li>
                <li>
                  <span className="mr-2 text-info">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Broken screens & glass.
                </li>
              </ul>
            </div>
            <button className="btn main-btn my-2">MAKE APPOINTMENT</button>
            <p className="mt-3">A better Service in Within Your Reach.</p>
            <h3>
              Call <span className="text-primary">(164) 157-9936</span> For A Enquiry.
            </h3>
          </div>
        </div>
        <div className="col-md-5 image-fluid">
          <img height="410px" src={expImg} alt="" />
        </div>
      </div>
    );
};

export default Expariance;