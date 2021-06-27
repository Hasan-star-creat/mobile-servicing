import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import SideBar from '../SideBar/SideBar';

const Admin = () => {
    const [addAdmin, setAddAdmin] = useState([]);
    const blurMakeAddmin = (e) => {
        setAddAdmin(e.target.value)
    }
    
    const handleMakeAdmin = () => {
        fetch('https://still-spire-67822.herokuapp.com/makeAddmin' ,{
          method:'POST',
          headers: {'content-type': 'application/json'} ,
          body: JSON.stringify({email:addAdmin})
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Successful Make Admin')
            }
        })
    }
    return (
      <div className="row">
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>
        <div className="col-md-6">
          <form className="my-3">
            <div className="col-8">
              <input
                onBlur={blurMakeAddmin}
                type="email"
                width="500px"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Make Admin Email"
              ></input>
            </div>
            <div className="text-center my-2">
              <Link>
                <button onClick={handleMakeAdmin} className="btn main-btn">
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Admin;