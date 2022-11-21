import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

export default function CreateProj() {
    const [project, setProj] = useState('');
    const [projLink, setLink] = useState('');


    const postData = () => {
            axios.post("https://10999-alexyacosta-formalivre-9tt0nfsy8ex.ws-us77.gitpod.io/api/projects", {
                project,
                projLink
            }).then(() => {
                console.log('oii')
            })
        }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Nome do Projeto</label>
                    <input type="text" placeholder='Nome' onChange={(e) => setProj(e.target.value)} />
                </Form.Field>
                <br />
                <Form.Field>
                    <label>Insira seu projeto abaixo</label>
                    <input type="text" onChange={(e) => setLink(e.target.value)} />
                </Form.Field>
                <Button onClick={postData} type='submit'>Criar</Button>
            </Form>
        </div>
    )
}