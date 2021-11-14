import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebaseconfig";


const Login = () => {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const userRegister = async(e) => {
    e.preventDefault()
    try{
    const user = await createUserWithEmailAndPassword(auth, email, pass)
    }catch(error){
      console.log(error.message);
    }




  }


  return (

    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form className='form-group' onSubmit={userRegister} >
          <input
            onChange={(e) => { setEmail(e.target.value) }}
            className='form-control'
            type="text"
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
      </div>
      <div className="col"></div>
    </div>

  );
};

export default Login;
