import React from "react";

function WeatherCard({city, humidity, temp, maxtemp, lowtemp, clouds, wind, looksLike}){

return(
    <div className= "WeatherCard">
    <h2>{city}</h2>
    <p>Looks Like: {looksLike}</p>
    <p> humidity: {humidity}%</p>
    <p>Current Temperture: {temp}º </p>
    <p>Highest Today: {maxtemp}º </p>
    <p> Lowest Today: {lowtemp}</p>
    <p> How many clouds today: {clouds}</p>
    <p> Wind Speed: {wind}</p>

    </div>
);
}

export default WeatherCard;
