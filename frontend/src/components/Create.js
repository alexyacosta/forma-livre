import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'

export default function Create() {
    const [full_name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [passw, setPassw] = useState('');
    
    const postData = () => {
      axios.post("http://localhost:10999/api/users", {
        full_name,
        username,
        passw
    })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>User</label>
                    <input placeholder='User' onChange={(e) => setUsername(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' onChange={(e) => setPassw(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}