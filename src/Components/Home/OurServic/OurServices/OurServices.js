import React from 'react';
import OurServiceDettails from '../OurServiceDettails/OurServiceDettails';
import { useEffect } from 'react';
import { useState } from 'react';

const OurServices = () => {
   const [service , setService] = useState([])
   useEffect(() => {
     fetch("http://localhost:5050/service")
     .then(res => res.json())
     .then(data => setService(data))
   },[])
    
    return (
      <div className="row">
        {service.map(servic => (
          <OurServiceDettails servic={servic}></OurServiceDettails>
        ))}
      </div>
    );
};

export default OurServices;