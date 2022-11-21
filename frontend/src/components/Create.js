import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'


export default function Create() {
    const [fullName, setName] = useState('');
    const [username, setUsername] = useState('');
    const [passw, setPassw] = useState('');
    const [confPass, setConfPass] = useState('')

    const postData = () => {
        const valFullName = fullName !== null && fullName !== "" ?  true : alert("Campo obrigatório")
        const valUserName = username !== null && username !== "" ? true : alert("Campo obrigatório")
        const valPassword = passw !== null && passw !== "" ? true : alert("Digite a senha corretamente")
        const valConfPass = confPass !== null && confPass !== "" && confPass === passw ? true : alert("Digite a confirmação de senha corretamente")

        if(valFullName === true && valUserName === true && valPassword === true) {
            axios.post("https://10999-alexyacosta-formalivre-9tt0nfsy8ex.ws-us77.gitpod.io/api/users", {
            fullName,
            username,
            passw
        })
        } else {
            console.log("Preencha todos os campos")
        }
    }
    return (
            <div>
                <Form className="create-form">
                    <Form.Field>
                        <label>Nome</label>
                        <input type="text" placeholder='Nome' onChange={(e) => setName(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Usuário</label>
                        <input type="text" placeholder='Usuário' onChange={(e) => setUsername(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Senha</label>
                        <input type="password" placeholder='Senha' onChange={(e) => setPassw(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Confirme sua senha</label>
                        <input type="password" placeholder='Senha' onChange={(e) => setConfPass(e.target.value)} />
                    </Form.Field>
                    <br />
                    <Button onClick={postData} type='submit'>Cadastre-se</Button>
                </Form>
            </div>
    )
}