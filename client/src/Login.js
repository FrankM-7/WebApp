import { useState } from 'react'
import axios from "axios";

export function Login() {
  var [user, setUser] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser(user => ({...user, [name]: value}))
  }

  function login() {
    axios.post('login', {
      username: user.username,
      password: user.password
    }).then(function (response) {
      console.log(response);
    });
  }

  return (
    <div className="Login">
      <header className="Login-header">
          <p>Login</p>

          <p>Username: </p>
          <input name="username" onChange={handleChange} type="text"/>

          <p>Password: </p>
          <input name="password" onChange={handleChange} type="text"/>

          <br></br>
          <button onClick={() => login()}>Submit</button>
      </header>
    </div>
  );
}
