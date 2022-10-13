import React from "react";
import WeatherIcon from "../components/weathericon";


function WeatherCard({city, humidity, temp, maxtemp, lowtemp, clouds, wind, looksLike}){

return(
    <div style = {{ backgroundColor:`rgba(0,0,0,${clouds / 100})`}}>
     <div className="wrapper">
    <h2>{city}</h2>
   <div className="WeatherCard-looksLike"> 
   <WeatherIcon looksLike={looksLike}/>
   </div>
    <p>Looks Like: {looksLike}</p>
    <p> humidity: {humidity}%</p>
    <p>Current Temperture: {temp}º </p>
    <p>Highest Today: {maxtemp}º </p>
    <p> Lowest Today: {lowtemp}º</p>
    <p> How many clouds today: {clouds}</p>
    <p> Wind Speed: {wind}</p>
</div>
    </div>
);
}

export default WeatherCard;
