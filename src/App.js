import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import "./App.css";

import Create from './components/Create.js';
import Login from './components/Login.js';

class App extends Component {
  render() {
    return (
      <div className="main">
        <h2 className="main-header">Forma Livre 3D</h2>
        <br />
        <div>
          <Link to={"/create"}>
          <Button>Cadastre-se</Button>
          </Link>
          <Link to={"/login"}>
          <Button>Login</Button>
          </Link>
        </div>

        <div className="container mt-3">
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
