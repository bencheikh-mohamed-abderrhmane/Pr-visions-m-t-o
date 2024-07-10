import React, { useContext } from 'react';
import WeatherContext from './WeatherContext';
import"./home.css"

const WeatherResponse = () => {
    const { weatherData } = useContext(WeatherContext);

    const hours = [3, 8, 12, 16, 20, 23];
    const displayedWeather = hours.map(hour => ({
        hour,
        temperature: weatherData?.hourly?.temperature_2m[hour]
    }));

    return (
        <div>
            <h1>Météo pour les prochaines heures</h1>
            <ul className='response'>
                {displayedWeather.map(({ hour, temperature }) => (
                    <li key={hour}>
                        Heure: {hour}h, Température: {temperature}°C
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeatherResponse;


