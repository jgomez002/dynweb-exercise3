import React , { useState,useEffect, useMemo } from "react";
import axios from 'axios'; 
import { WEATHER_APP_API_KEY } from '../API_KEYS';
import WeatherCard from '../components/WeatherCard.js';


function Home(){
//Value Stored in state for weather data
const [weatherData,setWeatherData] = useState({});
    //query OpenWeatherAPI for weather data   
    //  make request to OpenWeather, based on city

const OpenWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=${WEATHER_APP_API_KEY}` ;
// cities to all seoul, 

useEffect(() => {
    axios
    .get(OpenWeatherURL)
    .then(function(response) {
     setWeatherData(response.data);
    })
    .catch(function(error){
    console.warn(error);
     setWeatherData({});
    });
}, []); 

const {humidity, temp, maxtemp, lowtemp, clouds,wind, looksLike} = useMemo(() => {
    const weatherMain = weatherData.main || {};
    const weatherClouds = weatherData.clouds || {};
    const weatherWind = weatherData.wind || {};
    const weatherWeather = weatherData.weather || {};


    return {
        humidity: weatherMain.humidity,
        temp: weatherMain.temp,
        maxtemp: weatherMain.temp_max,
        lowtemp: weatherMain.temp_min,
        clouds: weatherClouds.all,
        wind: weatherWind.speed,
        looksLike: weatherWeather.main,

    };
}, [weatherData]);

//display weather data into app
console.log("state value",weatherData);
    return (  
    <div>
        <h1> Weather App</h1>
        <WeatherCard city = {"Orlando"} 
        humidity ={humidity} 
        temp={temp} 
        maxtemp={maxtemp} 
        lowtemp={lowtemp}
        clouds={clouds}
        wind={wind}
        looksLike={looksLike}
        />
    </div>
    );
}

export default Home;