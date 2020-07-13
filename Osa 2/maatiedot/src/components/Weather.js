import React, { useState, useEffect } from 'react';
import Secrets from './Secrets'
import axios from 'axios';

const Weather = ({ city }) => {
    const [selectedCityWeather, setSelectedCityWeather] = useState();
    const apiKey = Secrets();

// Download current countries capital weather from API
    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`)
            .then(response => {
                setSelectedCityWeather(response.data.current);
            });
    }, [city, apiKey]);

    // prevents website from crashing when selected city weather hasn't been yet loaded from API. 

    let content = <div></div>
    if (selectedCityWeather) {
        content = (
            <div>
                <h3>{`Weather in ${city}`}</h3>
                <p>Temperature: {selectedCityWeather.temperature} Celsius</p>
                <div>
                    <img class="flag" src={selectedCityWeather.weather_icons[0]} alt={`Current weather in ${city}`} />
                </div>
                <p>Wind: {(selectedCityWeather.wind_speed)} kph, direction {selectedCityWeather.wind_dir}</p>
            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}
export default Weather;