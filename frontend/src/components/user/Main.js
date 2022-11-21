import React, { Component } from "react";

import Welcome from './Welcome';
import Content from "./Content";
import ProjContent from "../projects/ProjContent";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div class="grid-container">
                    <img src={"https://cdn-icons-png.flaticon.com/512/1946/1946429.png"} alt="gfg" />
                    <div class="main-header-app">BEM VINDA!</div>
                    <Welcome />
                    <Content />
                </div>
            </div>
        );
    }
}

export default Main;
