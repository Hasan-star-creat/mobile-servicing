import React from 'react';
import NavBar from '../../Shard/NavBar/NavBar';
import Headers from '../Headers/Headers';
import Expariance from '../Expariance/Expariance';
import OurServices from '../OurServic/OurServices/OurServices';
import './Home.css'
import TeamMembar from '../TeamMember/TeamMembar';
import Testimonals from '../Testimonals/Testimonals/Testimonals';
import Footer from '../../Shard/Footer/Footer';
const Home = () => {
    return (
      <section className="home container">
        <div style={{ backgroundColor: "aliceblue" }}>
          <NavBar></NavBar>
          <Headers></Headers>
        </div>
         <Expariance></Expariance>
        <OurServices></OurServices>
        <TeamMembar></TeamMembar>
        <Testimonals></Testimonals>
        <Footer></Footer>

      </section>
    );
};

export default Home;