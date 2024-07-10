import React, { createContext, useState } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async (latitude, longitude) => {
        try {
            const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=GMT`);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    return (
        <WeatherContext.Provider value={{ weatherData, fetchWeather }}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherContext;


