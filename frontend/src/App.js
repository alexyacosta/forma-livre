import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Create from './components/Create';
import Login from './components/Login';
import Main from "./components/user/Main";

class App extends Component {
  render() {
    return (
      <div className="main">

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    );
  }
}

export default App;
