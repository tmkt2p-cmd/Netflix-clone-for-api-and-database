import React from 'react';
import {Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import './Search.css';
import arrow from './arrow.png';



function Search () {
  return (
    <div className="spage">
      
    <div className="boxnobox">
          <Link to="/"><img src={arrow} alt="back" className="back" /></Link>
    <input className="searchbox" placeholder="Search" type="search" />
   </div>
   
   </div>
   
    );
}

export default Search;