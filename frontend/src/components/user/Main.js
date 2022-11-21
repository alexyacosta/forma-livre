import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Welcome from './Welcome';
import Content from "./Content";
import ProjContent from "../projects/ProjContent";


export default function Main() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://10999-alexyacosta-formalivre-9tt0nfsy8ex.ws-us77.gitpod.io/api/users`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { project, projLink} = data;
        localStorage.setItem('project', project);
        localStorage.setItem('projLink', projLink);
    }

    const getData = () => {
        axios.get(`https://10999-alexyacosta-formalivre-9tt0nfsy8ex.ws-us77.gitpod.io/api/users`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://10999-alexyacosta-formalivre-9tt0nfsy8ex.ws-us77.gitpod.io/api/users/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Project</Table.HeaderCell>
                        <Table.HeaderCell>Project Link</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.project}</Table.Cell>
                                <Table.Cell>{data.projLink}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
