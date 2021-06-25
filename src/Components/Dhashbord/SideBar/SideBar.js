import React, { useState } from 'react';
import './SideBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../../../image/icon.png';
import {faHome, faPlus, faShoppingBag, faTasks, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import Content from '../Content/Content';
import { Link } from 'react-router-dom';


const SideBar = () => {
     const [modalIsOpen, setIsOpen] = useState(false);
       function closeModal() {
         setIsOpen(false);
       }  
       function openModal() {
         setIsOpen(true);
       }
    const handleAddService = () => {
          openModal()
    }
    return (
      <div className="content">
        <div className="container ps-3 sidebar ms-3 text-secondary">
          <img className="ms-5 my-2" height="50px" src={Logo} alt="" />
          <p>
            <span className="mr-2 text-primary">
              <FontAwesomeIcon icon={faShoppingBag} />
            </span>
            Order List
          </p>
          <p>
            <Link to="/home">
              <span className="mr-2 text-primary">
                <FontAwesomeIcon icon={faHome} />
              </span>
              Home
            </Link>
          </p>
          <p onClick={handleAddService} style={{ cursor: "pointer" }}>
            <span className="mr-2 text-primary">
              <FontAwesomeIcon icon={faPlus} />
            </span>
            Add Service
          </p>
          <p>
            <span className="mr-2 text-primary">
              <FontAwesomeIcon icon={faUserEdit} />
            </span>
            Make Admin
          </p>
          <p>
            <span className="mr-2 text-primary">
              <FontAwesomeIcon icon={faTasks} />
            </span>
            Manage Services
          </p>
        </div>
        <div className="col-md-6">
          <Content modalIsOpen={modalIsOpen} closeModal={closeModal}></Content>
        </div>
      </div>
    );
};

export default SideBar;