import axios from "axios";
import { useEffect, useState } from "react";

export function Home() {

    const [obj, setObj] = useState([]);
    var username;

    useEffect(() => {
        axios.get('getTasks').then( function (response) {
            // console.log(response)
        });

        for (var i = 0; i < 10; i++) {
            setObj(obj => [...obj, <li><input type="checkbox"/></li>]);
        }
    }, []);

    function getUser() {
        axios.get('getUser').then(function (response) {
            // console.log(response.data.name);
            username = response.data.name;
            console.log(username);
        });
        console.log(username);
        return username;
    }
        // axios.get('getTasks', {

        // }).then(function (response) {

        // });
    
    return (
        <div>
            <h1>Home Page After Login</h1>
            <h2>User: { getUser } </h2>
            <h2>To-Do List  </h2>
            <ul>
                { obj }
            </ul>
        </ div>
    );
}