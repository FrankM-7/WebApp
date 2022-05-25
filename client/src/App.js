import { useState } from 'react'
import axios from "axios";

import logo from './logo.svg';
import './App.css';

function App() {
  // new line start
  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:"/classSize",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.data[0].enrollment,
        about_me: res.data[1].enrollment}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
    //end of new line 

    // check if username=username and password=password
    function checkLogin(string) {
      
    }
    // end
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Black.
        </p>
        <p>
          Username:
        </p>
        <input type="text"></input>
        <p>
          Password: 
        </p>
        <input type="password"/>
        <button onClick={getData}>Enter</button>
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
      </header>
    </div>
  );
}

export default App;
