import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebaseconfig";


const Login = () => {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [errmsg, setErrmsg] = useState(null)

  const userRegister = (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, pass)
      .then((res) => console.log(res))
      .catch((error) => {
        if (error.code == 'auth/invalid-email') {
          setErrmsg('invalid email format  ')
        }
        if (error.code == 'auth/weak-password') {
          setErrmsg('password must be at least 6 characters long ')
        }
      })
  }

  const userLogin = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((res) => console.log(res))
      .catch((error) => {
        if (error.code == 'auth/email-already-in-use') {
          setErrmsg('Email Already in Use  ')
        }
      })
  }

  return (

    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form className='form-group' onSubmit={userRegister} >
          <input
            onChange={(e) => { setEmail(e.target.value) }}
            className='form-control'
            type="email"
            placeholder="Introduce the Email"
            value={email}
          />
          <input
            onChange={(e) => { setPass(e.target.value) }}
            className='form-control mt-3'
            type="password"
            placeholder="Introduce the Password"

          />
          <input className='btn btn-dark  btn-responsive center mt-3'
            type="submit"
            value="User Register" />
        </form>
        <button onClick={userLogin} className="btn btn-success btn- block mt-3" >Login</button>
        {
          errmsg !== null ?
            (
              <div className="alert alert-danger mt-2">{errmsg}</div>
            )
            :
            (
              <span></span>
            )
        }
      </div>
      <div className="col"></div>
    </div>

  );
};

export default Login;
