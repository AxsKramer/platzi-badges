import React from 'react';
import { Link } from 'react-router-dom';
import astronauts from '../assets/img/astronauts.svg';
import logo from '../assets/img/platziconf-logo.svg';
import '../assets/styles/Home.css';

const  Home = () => ( 
  <div className='contenedor'>
    <div className='page container'>
      <div className='row'>
        <div className='col-4 conf' >
          <img className='logo' src={logo} alt='logo-conf' />
          <div className='details'>
            <h3>PRINT YOUR BADGES</h3>
            <p>The easiest way to manage your conference</p>
          </div>  
          <Link to='/badges' className='btn btn-primary'>Start now</Link>
        </div>
        <div className='col-8 center'>
          <img className='astronauts' src={astronauts} alt='astronauts logo' />
        </div>
      </div>
    </div>
  </div>
);
 
export default Home;