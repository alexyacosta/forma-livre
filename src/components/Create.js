import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';

export default function Create() {
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        console.log(user);
        console.log(name);
        console.log(password);
        console.log(confPassword);
        console.log(checkbox);
}
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Usuário</label>
                    <input placeholder='Usuário' required onChange={(e) => setUser(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder='Nome' required  onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Senha</label>
                    <input placeholder='Senha' required type='password' onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Confirme a Senha</label>
                    <input placeholder='Senha' required type='password' onChange={(e) => setConfPassword(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Eu li e concordo com os termos de uso' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Acessar</Button>
            </Form>
        </div>
    )
    }