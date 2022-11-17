import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import createServ from '../services/create-serv';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfPassword = this.onChangeConfPassword.bind(this);

        this.state = {
            user: "",
            name: "",
            password: "",
            confPassword: "",
            submitted: false
        };
    }

    onChangeUser(e) {
        this.setState({
            user: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeConfPassword(e) {
        this.setState({
            confPassword: e.target.value
        });
    }

    saveData() {
        var data = {
            user: this.state.user,
            name: this.state.name,
            password: this.state.password,
            confPassword: this.state.confPassword
        };

        createServ.create(data)
            .then(Response => {
                this.setState({
                    user: Response.data.user,
                    name: Response.data.name,
                    password: Response.data.password,
                    confPassword: Response.data.confPassword,
                    submitted: true
                });
                console.log(Response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newData(){
        this.setState({
            user: "",
            name: "",
            password: "",
            confPassword: "",
            submitted: false
        })
    }
    render() {
        return (
          <div className="create-form">
            {this.state.submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={this.newData}>
                  Add
                </button>
              </div>
            ) : (
              <Form className="create-form">
                <div className="form-group">
                  <label htmlFor="title">User</label>
                  <input
                    type="text"
                    className="form-control"
                    id="user"
                    required
                    value={this.state.user}
                    onChange={this.onChangeUser}
                    name="user"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={this.state.name}
                    onChange={this.onChangeName}
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Confirm password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confPassword"
                    required
                    value={this.state.confPassword}
                    onChange={this.onChangeConfPassword}
                    name="confPassword"
                  />
                </div>
                <Button onClick={this.saveData} className="btn btn-success">
                  Submit
                </Button >
              </Form>
            )}
          </div>
        );
      }
    }