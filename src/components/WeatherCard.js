import React from "react";
import WeatherIcon from "../components/weathericon";


function WeatherCard({city, humidity, temp, maxtemp, lowtemp, clouds, wind, looksLike}){

return(
    <div className = "WeatherCard-wrapper">
    <h2>{city}</h2>
   <div className="WeatherCard-looksLike"> 
   <WeatherIcon looksLike={looksLike}/>
   </div>
    <p>Looks Like: {looksLike}</p>
    <p> humidity: {humidity}%</p>
    <p>Current Temperture: {temp}º </p>
    <p>Highest Today: {maxtemp}º </p>
    <p> Lowest Today: {lowtemp}º</p>
    <p> Cloudiness: {clouds}%</p>
    <p> Wind Speed: {wind} mph</p>
</div>
);
}

export default WeatherCard;
