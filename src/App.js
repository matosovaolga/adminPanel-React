
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';
import { connect } from 'react-redux';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';


class App extends Component  {
  render(){
     return (
      <Router>
        <Topbar />
        <div className="container ">
            <Sidebar />
            <Routes>
                <Route>
                   
                     <Route exact path="/" element={<Home/>} />
                     <Route path="/users" element={<UserList/>} /> 
                     <Route path="/user/:userId" element={<User  />}  />

                </Route>
            </Routes>
           
           
        </div>
      

        </Router>

     )
  }
 
   
  }


export default connect(
    state => ({ 
    }),
    dispatch => ({
      
    })
  )(App);