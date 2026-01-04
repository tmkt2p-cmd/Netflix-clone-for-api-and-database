import React from 'react'
import './navbar.css';
import userIcon from './user.jpg';
import mrbflix from './mrbflix.png';
import {useState, useEffect} from 'react'
import {Link } from 'react-router-dom';
import { signOut, onAuthStateChanged, updateProfile} from 'firebase/auth'; 
import { auth } from './firebase'; 
import { useNavigate } from 'react-router-dom'; 


function Navbar() {

  const navigate = useNavigate();
const [profile, setprofile] = useState(false);
const [nav, setnav] = useState("hind");

const [User, setUser] = useState(null);


  // Avatars he badhay //
  const avatarList = [
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    "https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png",
    "https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg",
    "https://i.pinimg.com/564x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg"
  ];


// dp change login //

const icone = async (url) => {
    if (User) {
      try{
        await updateProfile(User, {photoURL : url});
        window.location.reload();
      }catch(err){
        console.log(err);
      }
    }
}
  

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
           if(Logined) Logined();
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

    <Link to="/Search" ><i class="fi fi-br-search"></i></Link>


    <Link to="/Notification" ><i class="fi fi-br-bell"></i></Link>

<img src={User?.photoURL} alt="user" className="user" onClick={ () =>
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
    <input type="text" value={User?.uid} />

    </div>
   
    <button  onClick={signout} className="sobtn">Sign Out</button>
    <button  onClick={ () => setprofile(!profile)} className="btbtn"  >Back To Home</button>

   </div>
       <div className="newac">
    <Link to="/SignIn" style={{ textDecoration: 'none', color: 'white' }}>Sighn In to another Account</Link>
    <Link to="/SignUp" style={{ textDecoration: 'none', color: 'white' }}>create New Account</Link>
    </div>
    
    <div className="slt">
      <h3>Select Profile Photo</h3>
      </div>
    <div className="chosephoto">
    {avatarList.map((iconurl, index) => (
      <img src={iconurl} key={index} alt="avatar"
       style={{ width: "50px", height: "50px", borderRadius: "5px", cursor: "pointer"}}
   onClick={ () => icone(iconurl)} />
      )
    )}
</div>

   </div>
    </>
     )
   }
  </div>
 
  );
}
export default Navbar;