import React , { useState,useEffect, useMemo } from "react";
import axios from 'axios'; 
import { useSearchParams } from "react-router-dom";
import { WEATHER_APP_API_KEY } from '../API_KEYS';
import WeatherCard from '../components/WeatherCard.js';
import Header from '../components/Header.js';
function Home(){
//Value Stored in state for weather data
const [weatherData,setWeatherData] = useState({});
const [city, setCity] = useState('Orlando');
const [searchParams] = useSearchParams();
    //query OpenWeatherAPI for weather data   
    //  make request t o OpenWeather, based on city

// cities to all seoul, Chicago, Tokyo, Bogota  

useEffect (() => {
     const cityToQuery = searchParams.get('city') || city; setCity(cityToQuery);
    //Query OpenWeatherAPI for weather data 
    //make request to OpenWeather beased on city
    axios
    //axios is a package, contains abstractions 
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_API_KEY}&units=imperial`)
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
    


    return {
        humidity: weatherMain.humidity,
        temp: Math.round(weatherMain.temp),
        maxtemp: Math.round(weatherMain.temp_max),
        lowtemp: Math.round(weatherMain.temp_min),
        clouds: weatherClouds.all,
        wind: weatherWind.speed,
        looksLike: weatherData.weather && weatherData.weather[0].main,

    };
}, [weatherData]);


//display weather data into app
    return (  
    <div style = {{backgroundColor: `rgba(102, 153, 204,${1.15-clouds/100})`}}>
    {/* Less cloudy, bluer the sky; the cloudier it is, less opacate blue */}

    <img style={{opacity: `${clouds/100}` }}></img>
    {/* higher percentage of cloudiness -> more visible the cloud gif is */}

    <div className = "page-wrapper">
     <Header />
        <h1> Weather App</h1>
        <WeatherCard 
        city = {city} 
        humidity ={humidity} 
        temp={temp} 
        maxtemp={maxtemp} 
        lowtemp={lowtemp}
        clouds={clouds}
        wind={wind}
        looksLike={looksLike}
        />
    </div>
    </div>
    );
}

export default Home;
