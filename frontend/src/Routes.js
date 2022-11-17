
import React, { Component } from "react";
import { Router, Route } from "react-router-dom";

import Create from "./components/Create";
import Login from "./components/Login";
import Home from "./components/Home"

export default class Routes extends Component {
    render() {
        return (
            <Router history={History}>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={Create} />
                    <Route path="/Contact" component={Login} />
                </div>
            </Router>
        )
    }
}