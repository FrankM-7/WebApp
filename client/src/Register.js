import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export function Register() {
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

  function register() {
    if (user.confirm_pass != user.password) {
      window.alert("Passwords do not match.");
      return;
    }
    axios.post('register', {
      firstname: user.firstname, 
      lastname: user.lastname, 
      email : user.email,
      username: user.username,
      password: user.password
    }).then(function (response) {
      navigate('../');
    });
  }

  return (
    <div className="Register">
      <header className="Register-header">
        {/* <form onSubmit={() => printFields()}> */}
          <p>Register</p>
          <p>Email: </p>

          <p>First Name: </p>
          <input name="firstname" onChange={handleChange} type="text"/>

          <p>Last Name: </p>
          <input name="lastname" onChange={handleChange} type="text"/>

          <p>Email: </p>
          <input name="email" onChange={handleChange} type="text"/>

          <p>Username: </p>
          <input name="username" onChange={handleChange} type="text"/>

          <p>Password: </p>
          <input name="password" onChange={handleChange} type="password"/>

          <p>Confirm Password: </p>
          <input name="confirm_pass" onChange={handleChange} type="password"/>
          

          <br></br>
          <button onClick={() => register()}>Submit</button>
        {/* </form> */}
      </header>
    </div>
  );
}

