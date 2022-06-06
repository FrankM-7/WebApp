import axios from "axios";
import { useEffect, useState } from "react";

export function Home() {

    const [username, updateUsername] = useState();

    // const [obj, setObj] = useState([]);
    // useEffect(() => {
    //     axios.get('getTasks').then( function (response) {
    //         // console.log(response)
    //     });

    //     for (var i = 0; i < 10; i++) {
    //         setObj(obj => [...obj, <li><input type="checkbox"/></li>]);
    //     }
    // }, []);
    useEffect(() => {
        // const getUser = async () => {
        //     const result = await localStorage.getItem("username"); 
        //     updateUsername(localStorage.getItem("username"));
        //     console.log(username);
        //     return result;
        // }
        // getUser();
        updateUsername("frank");

    }, []);
    
    return (
        <div>
            <h1>Home Page After Login</h1>
            <h2>User: { username } </h2>
            <h2>To-Do List  </h2>
            <ul>
                { /* obj */ }
            </ul>
        </ div>
    );
}