import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../../../App';
import SideBar from '../../SideBar/SideBar';

const Review = () => {
      const [loggedInUser, setLoggedInUser] = useContext(userContext)
      const { register,handleSubmit,formState: { errors }, } = useForm();
      
     const onSubmit = data => { 
          const value = {name: data.name, company:data.company, desc:data.description, photo:loggedInUser.photo, date: new Date()}
          console.log(value)
        
       fetch("http://localhost:5050/addReview", {
         method: "POST",
         headers: { "content-type": "application/json" },
         body: JSON.stringify({ review: value}),
       })
         .then((res) => res.json())
         .then((result) => {
           if (result) {
             alert("user review successful");
           }
         });
     
     }   
    return (
      <div className="row">
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>
        <div className="col-md-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mr-5 my-2">
              <input
                style={{ width: "400px" }}
                {...register("name", { required: true })}
                placeholder="Name"
              />
              {errors.name && <p className="text-danger">name is required.</p>}
            </div>
            <div className="my-2">
              <input
                style={{ width: "400px" }}
                {...register("company", { required: true })}
                placeholder="company name / designation"
              />
            </div>

            <div>
              <textarea
                style={{ height: "150px", width: "400px" }}
                {...register("description", { required: true })}
                placeholder="description"
              />
              {errors.description && (
                <p className="text-danger">description is required.</p>
              )}
            </div>

            <input type="submit" />
          </form>
        </div>
      </div>
    );
};

export default Review;