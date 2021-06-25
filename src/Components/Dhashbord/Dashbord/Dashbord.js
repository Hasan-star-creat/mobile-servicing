import React from 'react';
import SideBar from '../SideBar/SideBar';
import Content from '../Content/Content';

const Dashbord = () => {
    return (
        <section className="row">
            <div className="col-md-3">
               <SideBar></SideBar> 
            </div>
            <div className="col-md-8">
               <Content></Content>
            </div>
        </section>
    );
};

export default Dashbord;