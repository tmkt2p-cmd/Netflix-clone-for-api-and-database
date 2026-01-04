import React from 'react';
import {Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import './Notification.css';
import arrow from './arrow.png';



function Notifications () {
  return (
    <div className="npage">
      
            <Link to="/"><img src={arrow} alt="back" className="back" /></Link>
   <h4>You dont Have Notifications</h4>
   
   </div>
   
    );
}

export default Notifications;