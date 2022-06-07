import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  var [user, setUser] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser(user => ({...user, [name]: value}))
  }

  useEffect(() => {
    if (localStorage.getItem('loggedIn') == 'true') {
      navigate('../home');
    }
  }, []);

  function login() {
    axios.post('login', {
      username: user.username,
      password: user.password
    }).then(function (response) {
      localStorage.setItem("loggedIn", JSON.stringify(response.data.loggedIn));
      localStorage.setItem("username", response.data.username);
      if (localStorage.getItem('loggedIn') == 'true') {
        navigate('../home');
      } else {
        window.alert('Not Registered');
      }
    });
  }

  return (
    <div className="Login">
      <header className="Login-header">
          <p>Login</p>

          <p>Username: </p>
          <input name="username" onChange={handleChange} type="text"/>

          <p>Password: </p>
          <input name="password" onChange={handleChange} type="password"/>

          <br></br>
          <button onClick={() => login()}>Submit</button>
      </header>
    </div>
  );
}

