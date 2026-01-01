import React from 'react'
import './navbar.css';
import userIcon from './user.jpg';

export default function navbar() {


    const scrollM = () => {
      window.scrollTo({
        top: 600,
        behavior: "smooth"
      });
    };

    const scrollTV = () => {
      window.scrollTo({
        top: 1050,
        behavior: "smooth"
      });
    };

     const scrollH = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };



  return (
    <div className="navbg">
    <div className="top">
        <img 
    className="nav-logo"
    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
    alt="Netflix Logo"/>
    
        <ul>
            <li onClick={scrollH}>Home</li>
            <li onClick={scrollM}>Movies</li>
            <li onClick={scrollTV}>Tv shows</li>
            <li>Pages</li>
        </ul>

   <div className="right">

    <i class="fi fi-br-search"></i>


<i class="fi fi-br-bell"></i>

<img src={userIcon} alt="user" className="user"/>   
   </div>

</div> 
  </div>
  )
}
