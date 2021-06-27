import React, { useState } from 'react';
import './SideBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../../../image/icon.png';
import {faCommentDots, faHome, faInbox, faPlus, faShoppingBag, faShoppingCart, faTasks, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import Content from '../Content/Content';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { userContext } from '../../../App';


const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [isAdmin, setIsAdmin] = useState(false)
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

   
    useEffect(() => {
      fetch('https://still-spire-67822.herokuapp.com/isAdmins', {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: loggedInUser.email }),
      })
        .then((res) => res.json())
        .then((data) => setIsAdmin(data));
    }, []);

    return (
      <div className="content">
        <div className="container ps-3 sidebar ms-3 text-secondary">
          <img className="ms-5 my-2" height="50px" src={Logo} alt="" />
          <p>
            <Link to="/home">
              <span className="mr-2 text-primary">
                <FontAwesomeIcon icon={faHome} />
              </span>
              Home
            </Link>
          </p>
          <p>
            <span className="mr-2 text-primary">
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            Book
          </p>
          <p>
            <span className="mr-2 text-primary">
              <FontAwesomeIcon icon={faShoppingBag} />
            </span>
            Booking List
          </p>
          <p>
            <Link to="/review">
              <span className="mr-2 text-primary">
                <FontAwesomeIcon icon={faCommentDots} />
              </span>
              Review
            </Link>
          </p>

          {isAdmin && (
            <div>
              <p>
                <span className="mr-2 text-primary">
                  <FontAwesomeIcon icon={faShoppingBag} />
                </span>
                Order List
              </p>
              <p onClick={handleAddService} style={{ cursor: "pointer" }}>
                <span className="mr-2 text-primary">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                Add Service
              </p>
              <p>
                <Link to="/admin">
                  <span className="mr-2 text-primary">
                    <FontAwesomeIcon icon={faUserEdit} />
                  </span>
                  Make Admin
                </Link>
              </p>
              <p>
                <span className="mr-2 text-primary">
                  <FontAwesomeIcon icon={faTasks} />
                </span>
                Manage Services
              </p>
            </div>
          )}
        </div>
        <div className="col-md-6">
          <Content modalIsOpen={modalIsOpen} closeModal={closeModal}></Content>
        </div>
      </div>
    );
};

export default SideBar;