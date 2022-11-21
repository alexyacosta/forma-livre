import React, { useState, useEffect } from "react";
import { Button, Form } from 'semantic-ui-react'
import axios from "axios";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [passw, setPassw] = useState("");
  const [username, setUsername] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("username");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUsername(foundUser);
    }
  }, []);

  // logout the user
  const handleLogout = () => {
    setFullName({});
    setUsername("");
    setPassw("");
    localStorage.clear();
  };

  // login the user
  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, passw };
    // send the username and password to the server
    const response = await axios.post(
      "https://10999-alexyacosta-formalivre-9tt0nfsy8ex.ws-us77.gitpod.io/api/users",
      user
    );
    // set the state of the user
    setUsername(response.data);
    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(response.data));
  };

  // if there's a user show the message below
  if (username) {
    return (
      <div>
        {username.fullName} is loggged in
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  }

  // if there's no user, show the login form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          placeholder="enter a username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            value={passw}
            placeholder="enter a password"
            onChange={({ target }) => setPassw(target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;