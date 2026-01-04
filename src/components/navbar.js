import React from 'react'
import './navbar.css';
import userIcon from './user.jpg';
import mrbflix from './mrbflix.png';
import {useState, useEffect} from 'react'
import {Link } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth'; 
import { auth } from './firebase'; 
import { useNavigate } from 'react-router-dom'; 


function Navbar() {

  const navigate = useNavigate();
const [profile, setprofile] = useState(false);
const [nav, setnav] = useState("hind");

const [User, setUser] = useState(null);


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


      //Logined uder data fetch//

      const Logined = onAuthStateChanged(auth, (currentuser) => {

        if (currentuser){
          setUser(currentuser);
        }
        else {
          setUser(null);
        }
      });


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



  //signout Login //

  const signout = async () => {
    try {
      await signOut(auth);
      navigate("/SignIn");
    }catch (err) {
      console.log("erro hai bhai");
    }
  };

  return (
    <div className={nav}>
    <div className="top">
        <img 
    className="nav-logo"
    src={mrbflix} 
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
    <>
 

    <div className="probd">
    


    
   <div className="hiddenprofile">
     <h1>Edit your Profile</h1>

     <div className="ibox">
    <label>User Name</label>
    <input type="text"value={User?.displayName || "MRBFLIX USER"}readOnly />
  
    <label>Email</label>
    <input type="text" value={User?.email} />

      <label>Unique Id</label>
    <input type="text" value="qjfdcncjsdfhdsfui578fjdhfjkdsre6wehdsmcjaskxjkchj" />

    </div>
   
    <button  onClick={signout} className="sobtn">Sign Out</button>
    <button  onClick={ () => setprofile(!profile)} className="btbtn"  >Back To Home</button>

   </div>
       <div className="newac">
    <Link to="/SignIn" style={{ textDecoration: 'none', color: 'white' }}>Sighn In to another Account</Link>
    <Link to="/SignUp" style={{ textDecoration: 'none', color: 'white' }}>create New Account</Link>
    </div>

   </div>
    </>
     )
   }
  </div>
 
  );
}
export default Navbar;