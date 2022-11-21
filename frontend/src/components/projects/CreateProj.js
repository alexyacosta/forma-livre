import React from 'react';
import { Link } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react'

export default function Create() {

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>NOME DO PROJETO</label>
                    <input type="text" placeholder='Nome' />
                </Form.Field>
                <Form.Field>
                    <label>INSERIR PROJETO</label>
                </Form.Field>
                <Form.TextArea label='About' placeholder='' />
                <br /> <br />
                <Link to={"/main"}>
                    <Button type='submit'>Criar novo projeto</Button>
                </Link>

            </Form>
        </div>
    )

}