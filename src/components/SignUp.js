import React from 'react';
import './SignUp.css';
import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


function SignUp() {

  const navigate = useNavigate();

  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const [emerror, setemerror] = useState("");
  const [nerror, setnameerror] = useState("");

  const [em, setem] = useState("");
  const [name, setn] = useState("");

  const [no, setno] = useState("");
  const [merror, setmerror] = useState("");


  const noc = (event) => {
    const newno = event.target.value;
    setno(newno);
    const regex = /^[0-9]+$/

    if (newno.length < 10) {
      setmerror("Please Enter Valid Phone Number");
    }
    // else {
    //   setmerror("");
    // }

    else if (!regex.test(newno)) {
      setmerror("Enter Numbers Only");
    }
    else {
      setmerror("");
    }
  }

  const nmv = (e) => {
    const newname = e.target.value;
    setn(newname);

    if (newname.length > 6) {
      setnameerror("Enter Sort name");
    }
    else {
      setnameerror("");
    }
  }

  const emc = (e) => {

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-z]+\.[a-z]{2,}$/;
    const newem = e.target.value;
    setem(newem);

    if (!regex.test(newem)) {
      setemerror("Pleas Enter valid Email Adress");
    }
    else {
      setemerror("");
    }

  }


  const hpc = (e) => {

    const newpassword = e.target.value;
    setpassword(newpassword);

    if (newpassword.length < 6) {
      seterror("password must be atleast 6 characters");
    
    }
    else {
      seterror("");
    }

  }



  //create New Account Firebases code niche chhe//

    const createUser = async (e) => {
      e.preventDefault();

      try {
        await createUserWithEmailAndPassword(auth, em, password);
        console.log("account created");
          navigate('/');
      }catch (err) {
        console.log(err);
      }
    };



  return (
    <>
      <div className="bodys">
        <center>
          <div className="sign-cntr">
            <form onSubmit={createUser} className="login-form" >
              <h2>Sign Up</h2>

              <div className="Label">
                {/* <label>User Name</label>
                <input value={name} onChange={nmv}
                  type="text"
                  placeholder="Enter your Name"
                  required
                />
                {nerror && (
                  <div style={{ color: "red", }}>{nerror}</div>
                )} */}


                <label>Email Address</label>
                <input value={em} onChange={emc}
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                {emerror && (
                  <div style={{ color: "red", }}>{emerror}</div>
                )}




                <label>Password</label>
                <input value={password} onChange={hpc}
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                {error && (
                  <div style={{ color: "red", }}>{error}</div>
                )}

                {/* <label>Mobile Number</label>
                <input value={no} onChange={noc} type="number" placeholder="Enter Your Mobile Number" required id="mono" />
                {merror && (
                  <div style={{ color: "red" }} >{merror}</div>
                )} */}

                {/* <input type="button">Remember Me</input> */}


                <button type="submit"  className="submit-btn">
                  Sign Up
                </button>

                <div className="transfer">
                <h4>Alredy Have an Account? <Link to="/SignIn" className="tl" style={{ textDecoration: 'none', color: 'white' }} >Sign In</Link></h4>
                </div>

              </div>
            </form>
          </div>
        </center>
      </div>
    </>
  );
};

export default SignUp;