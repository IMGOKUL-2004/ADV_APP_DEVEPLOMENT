import React from 'react';
import '../../assets/css/home.css';
import Footer from '../Footer/Footer';
import Nav from "./navbar";
import img1 from '../../assets/gif/mrg.gif';

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div className="content">
        <div className='flex'>
          <div id='h-custom'>
            <h1 id='h1-cus'>Welcome to Party Planner</h1>
            <div className='para-h'>
              <p id='h-sub'>Plan Memorable Events for Any Occasion</p>
            </div>
            <a href='/bookingform'>
              <button id='bookbut'>Book The Venue</button>
            </a>
          </div>
          <div className='img-container'>
            <img src={img1} alt='img' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
