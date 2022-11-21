import axios from 'axios';
import React, { useEffect, useState } from 'react';

import ProjContent from "../projects/ProjContent";
import user from '../../assets/user.png'

export default function Main() {

    const avatar = user;

    return (
        <div id="main">
            <div className='img-avatar'>
                <img src={avatar} alt="avatar"/>
            </div>
            <br />
        <div className='main-header-app'>SEJA BEM VINDA</div>
        <br/>
        Confira seus projetos abaixo
        <br/><br/>
      <ProjContent />
    
    </div>
    )
}
