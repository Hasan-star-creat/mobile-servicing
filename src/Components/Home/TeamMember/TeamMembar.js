import React from 'react';
import membar1 from '../../../image/malemembar5.jpg';
import membar2 from '../../../image/malemembar2.jpg';
import membar3 from '../../../image/malemembar3.jpg';
import membar4 from '../../../image/malemembar4.jpg'


const TeamMembar = () => {
    const teamMembar = [{ 
        name: "Micele Jack", designation:'Sales Manager', img:membar1}, 
        {name: "Maleka ", designation:'Product Manager', img:membar2},
        {name: "Sihab islam", designation:'Marketing Manager', img:membar3},
        {name: " Ritikka  ", designation:'Hardware Engineer', img:membar4}
     ];
    return (
      <section
        style={{
         
            background: "linear-gradient(0.25turn, #3f87a6, #ebf8e7, #f69d3c)",
            color:'white',
            padding:'5px',
            padding: '5px 20px'
        }}
      >
        <h3>SEE OUR BEST Our Great Team Member</h3>
        <p>
          Our people at Fixtech are most valuable assets. They are the faces of
          our organization. They are the individuals who see your project from
          start to finish and work together.
        </p>
        <div className="row">
          {teamMembar.map((membar) => (
            <div className="col-md-3 my-5">
              <img height="270px" width="255px" src={membar.img} alt="" />
              <div className="text-center py-1 bg-dark text-white">
                <h4 className="mt-2">{membar.name}</h4>
                <p>{membar.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default TeamMembar;