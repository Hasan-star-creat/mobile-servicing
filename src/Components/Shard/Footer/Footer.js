import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMailBulk, faMapMarker, faMarker, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
      <footer className="row">
        <div className="col-md-4">
          <h2>fixed</h2>
          <p className="text-secondary">
            Fixtech has very good strength in innovative technology and tools
            with over 35 years of experience.
          </p>
          <p className="text-secondary">
            We makes long-term investments goal in global companies in different
            sectors, mainly in Europe and other countries.
          </p>
          <button className="btn mt-3 main-btn">Know More</button>
        </div>
        <div className="col-md-4">
          <h2>Quick Link</h2>
          <p>
            <Link>Make Appointments</Link>
          </p>
          <p>
            <Link>Before & After</Link>
          </p>
          <p>
            <Link>About Us</Link>
          </p>
          <p>
            <Link>Customar Services</Link>
          </p>
          <p>
            <Link>Order a Service</Link>
          </p>
          <p>
            <Link>Track Service Status</Link>
          </p>
          <p>
            <Link></Link>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Contact</h2>
          <p className="text-secondary">
            <span className="mr-2">
              <FontAwesomeIcon icon={faMapMarker} />
            </span>
            Panchagarh. Atwari,Mirzapur
            <br />
            Luksmipur, Bangladesh
          </p>
          <p className="text-secondary">
            <span className="mr-2">
              <FontAwesomeIcon icon={faMailBulk} />
            </span>
            hasanali3150927@gmail.com
          </p>
          <p className="text-secondary">
            <span className="mr-2">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            (+80) 164 157 9936
          </p>
          <p className="text-secondary">
            <span className="mr-2">
              <FontAwesomeIcon icon={faClock} />
            </span>
            09:30 AM - 06:00PM
          </p>
          <div className="d-flex">
            <p className="mr-2">
              facebook
            </p>
            <p className="mr-2">twiter</p>
            <p className="mr-2">linkedin</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;