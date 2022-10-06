import React from "react";
import { WEATHER_APP_API_KEY } from '../API_KEYS';

function Home(){
    return (
    <div>
        <h1> Weather App</h1>
        <p> {WEATHER_APP_API_KEY}</p> 
    </div>
    );
}

export default Home;