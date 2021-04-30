import './App.css';
import './form.css';


//import React, {Component} from "react";praksh
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import Header from './Header';
import Home from './Home';
import Feed from './Feed';
import About from './About';
import Contact from './Contact';
import Signup from './Signup';
import {UserProvider} from './UserContext';



function App() {
     //  const[fname,setName]= useState("Guest"); test
       const[isLogged,setLogged]= useState(false);
       const[feedList,setfeedList]=useState(['etgerg','grgeg']);
       const User = {feedList,setfeedList,isLogged,setLogged};
      
  return (
    <Router>
      <UserProvider value={User}>
          <Header/>
            <Switch>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/Feed" exact>
                <Feed />
              </Route>
              <Route path="/About">
                <About />
              </Route>
              <Route path="/Contact">
                <Contact />
              </Route>
              <Route path="/Signup" exact>
                <Signup />
              </Route>
            </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
