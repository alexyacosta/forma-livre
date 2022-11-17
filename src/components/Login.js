import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react';

export default function Login() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const postData = () => {
        console.log(firstName);
        console.log(lastName);
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Usuário</label>
                    <input placeholder='Usuário' required onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Senha</label>
                    <input placeholder='Senha' required onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Acessar</Button>
            </Form>
        </div>
    )
    }