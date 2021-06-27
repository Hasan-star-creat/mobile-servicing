import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav  mb-2 mb-lg-0">
              <li class="nav-item ms-5">
                <Link class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item ms-5">
                <Link class="nav-link">
                  Page
                </Link>
              </li>
              <li class="nav-item dropdown ms-5">
                <Link
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service
                </Link>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link class="dropdown-item">
                      Smart Phone Repair
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item">
                      Mack Book Repair
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item">
                      PC Repair
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item">
                      Camera Repair
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item ms-5">
                <Link to="/dashbord" class="nav-link">
                  Dashbord
                </Link>
              </li>
              <li class="nav-item ms-5">
                <Link to="/admin" class="nav-link">
                  Admin
                </Link>
              </li>
              <li class="nav-item ms-5">
                <Link to="/login" class="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;