import React from "react";

const Login = () => {
  return (

    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form className='form-group'>
          <input className='form-control' type="text" placeholder="Introduce the Email"/>
          <input className='form-control mt-3' type="text" placeholder="Introduce the Password" />
          <input className='btn btn-dark  btn-responsive btninter center mt-3' type="submit" value="User Register"/>
        </form>
      </div>
      <div className="col"></div>
    </div>

  );
};

export default Login;
