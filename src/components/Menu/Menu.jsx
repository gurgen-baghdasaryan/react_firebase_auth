import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebaseconfig";


const Menu = () => {

  const [usuario, setUsuario] = useState(null)
  const history = useHistory()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsuario(user.email)
      }
    })
  }, [])

  const logOut = () => {
    auth.signOut()
    setUsuario(null)
    history.push('/')
  }

  return (
    <div>

      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            {
              !usuario ?
                (
                  <Link className="nav-link" to="/Login">Login</Link>

                )
                :
                (
                  <span></span>
                )
            }
          </li>
          <li className="nav-item">
            {
              !usuario ?
                (
                  <Link className="nav-link" to="/Admin">Admin</Link>

                )
                :
                (
                  <span></span>
                )
            }
          </li>
        </ul>
        {
          usuario ?
            (
              <button onClick={logOut} className="btn btn-danger ml-6">Logout </button>
            )
            :
            (
              <span></span>
            )
        }
      </nav>

    </div>);
};

export default Menu;
