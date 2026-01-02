import React from 'react'
import './navbar.css';
import userIcon from './user.jpg';
import {useState, useEffect} from 'react'

function Navbar() {
const [profile, setprofile] = useState(false);
const [nav, setnav] = useState("hind");


    const scrollM = () => {
      if (window.innerWidth < 768)
      {
      window.scrollTo({
        top: 900,
        behavior: "smooth"
      });
      }
      else {
        window.scrollTo({
        top: 600,
        behavior: "smooth"
        });
        }

    };

    const scrollTV = () => {
      if (window.innerWidth < 768){
      window.scrollTo({
        top: 500,
        behavior: "smooth"
      });
      }
    else{
      window.scrollTo({
        top: 1050,
        behavior: "smooth"
      });
      }
    };

     const scrollH = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };


    useEffect( () => {
    const handlenav = () => {
      if(window.scrollY > 100)
      {
        setnav("show");
      }
      else{
        setnav("hind");
      }
    }

    window.addEventListener("scroll", handlenav);

    return () => {
          window.removeEventListener("scroll", handlenav);
    }
  },[]);

  return (
    <div className={nav}>
    <div className="top">
        <img 
    className="nav-logo"
    src="https://fontmeme.com/temporary/f32de6b02493430768e0f425bebc7b51.png" 
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

<img src={userIcon} alt="user" className="user" onClick={ () =>
setprofile(!profile)}/>   
   </div>
   
 

</div> 
  {profile && (
   <div className="hiddenprofile">
     <h5>Edit Profile</h5>
          <span className="nm">Name : Mrb</span>
     <span className="gm">User@gamil.com</span>
     <button className="pbtn">Sighn Out</button>
   </div>
     )
   }
  </div>
  );
}
export default Navbar;