import { useState } from 'react'
import axios from "axios";

import './App.css';

function App() {
  var [username, password] = ["none", "none"];
  function getData(usernameInput, passwordInput) {
    axios.get('/login').then((response) => {
      username = response.data.username;
      password = response.data.password;
    });
    if (usernameInput != username || passwordInput != password) {
      window.alert("wrong username/password");
    } else {
      window.alert("correct");
    }
  }
  return (
    <div className="App">
      <header className="App-header">        

        <p>Sign In</p>
        <p>Username: </p>
        <input id="user" type="text"/>
        <p>Password: </p>
        <input id="pass" type="text"/>
        <br></br>
        <button onClick={() => getData(document.getElementById("user").value, document.getElementById("pass").value)}>
          Log In
        </button>
      </header>
    </div>
  );
}

export default App;
