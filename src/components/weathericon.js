import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudRain,faSnowflake,faBolt,faSun } from "@fortawesome/free-solid-svg-icons"; // <-- import styles to be used

function WeatherIcon({looksLike}) {
    
        switch (looksLike){
            case "Clouds":
                return <FontAwesomeIcon icon = {faCloud} />;
            case "Sun":
            case "Clear":
                return <FontAwesomeIcon icon = {faSun} />;
         
            case "Snow":
                return <FontAwesomeIcon icon = {faSnowflake} />;
            case "Rain":
                return <FontAwesomeIcon icon = {faCloudRain} />;
            case "Thunder":
                return <FontAwesomeIcon icon = {faBolt} />;
}
    }

    export default WeatherIcon;
