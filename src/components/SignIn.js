import React from 'react'
import './SignIn.css';
import { useState } from 'react';

function SignIn() {

  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [emerror, setemerror] = useState("");
  const [nerror, setnameerror] = useState("");

  const [em, setem] = useState("");
  const [name, setn] = useState("");

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
  return (
    <>
      <div className="login-bg">
        <div className="login-container">
          <h2 className="login-title">Login</h2>

          <form action="https://Gopi18.my-style.in/Login.php" method="post">
            <label className="namelabel" >Name:</label>
            <input value={name} onChange={nmv} type="text" name="username" className='username' placeholder="Enter your name" required></input>
            {nerror && (
              <div style={{ color: "red", }}>{nerror}</div>
            )}

            <label className="namelabel" >Email:</label>
            <input value={em} onChange={emc} type="text" name="email" placeholder="Enter your email" className='username' required></input>
            {emerror && (
              <div style={{ color: "red", }}>{emerror}</div>
            )}


            <label className="namelabel" >Password:</label>
            <input value={password} onChange={hpc} type="password"  name="password" placeholder="Enter your password" className='username' required></input>
            {error && (
              <div style={{ color: "red", }}>{error}</div>
            )}


            <button id="btnlogin" className='btn btn-primary'>Login</button>

          </form>
        </div>

      </div>
    </>
  );
}
export default SignIn;