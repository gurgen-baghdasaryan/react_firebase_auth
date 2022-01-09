import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home'
import Admin from './components/Admin/Admin'
import Login from './components/Login/Login'
import Menu from "./components/Menu/Menu";



function App() {


  return (
    <div className="container">
      <Router>
      <Menu/>


      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  path="/Admin" component={Admin}></Route>
        <Route  path="/Login" component={Login}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
