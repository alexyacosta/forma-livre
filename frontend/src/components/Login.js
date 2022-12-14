import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

import Config from '../config.json'

export default function Create() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [passw, setPassw] = useState('');

const postData = () => {
    const valUserName = username !== null && username !== "" ? true : alert("Preencha todos os campos")
    const valPassword = passw !== null && passw !== "" ? true : alert("Digite a senha corretamente")

    if (valUserName === true && valPassword === true) {
        axios.post(`http://${Config.BACKEND_ENDPOINT}:${Config.BACKEND_PORT}/api/users/login`, {
            username,
            passw
        })
        console.log('ola');
    } else {
        console.log("Preencha todos os campos")
    }
    navigate("../main", { replace: true });
}
return (
    <div>
        <Form className="create-form">
            <Form.Field>
                <label>Usuário</label>
                <input type="text" placeholder='Usuário' onChange={(e) => setUsername(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Senha</label>
                <input type="password" placeholder='Senha' onChange={(e) => setPassw(e.target.value)} />
            </Form.Field>
            <br />
            <Button onClick={postData} type='submit'>Entrar</Button>
        </Form>
    </div>
)
}
