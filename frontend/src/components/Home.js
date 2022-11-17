import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';


class Home extends Component {
  render() {
    return (
      <div className="main">    
        <br />
        <div>
          <Link to={"/create"}>
          <Button>Cadastre-se</Button>
          </Link>
          <Link to={"/login"}>
          <Button>Login</Button>
          </Link>
        </div>

      </div>
    );
  }
}

export default Home;