import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate();

    const [username, updateUsername] = useState();

    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);
    const [snack, setSnack] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("loggedIn") == "false") {
            // navigate('../');
        }
        const getUser = function() {
            const result = localStorage.getItem("username"); 
            return result;
        }
        updateUsername(getUser);

        axios.get('getBLDS').then( function (response) {
            for (var i = 0; i < response.data.breakfast.length; i++) {
                const breakfastItem = response.data.breakfast[i];
                setBreakfast(obj => [...obj, <li> { breakfastItem } </li>])
            }
            for (var i = 0; i < response.data.lunch.length; i++) {
                const lunchItem = response.data.lunch[i];
                setLunch(obj => [...obj, <li> { lunchItem } </li>])
            }
            for (var i = 0; i < response.data.dinner.length; i++) {
                const dinnerItem = response.data.dinner[i];
                setDinner(obj => [...obj, <li> { dinnerItem } </li>])
            }
            for (var i = 0; i < response.data.snack.length; i++) {
                const snackItem = response.data.snack[i];
                setSnack(obj => [...obj, <li> { snackItem } </li>])
            }
        });
    }, []);

    return (
        <div>
            <h1>Home Page After Login</h1>
            <h2>User: { username } </h2>

            <h2>Breakfast: </h2>
            <ul>
                { breakfast }
            </ul>

            <h2>Lunch: </h2>
            <ul>
                { lunch }
            </ul>

            <h2>Dinner: </h2>
            <ul>
                { dinner }
            </ul>

            <h2>Snacks: </h2>
            <ul>
                { snack }
            </ul>

            
        </ div>
    );
}