import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Create from './components/Create';
import Login from './components/Login';
import Welcome from './components/user/Welcome'

class App extends Component {
  render() {
    return (
      <div className="main">
        
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    );
  }
}

export default App;
