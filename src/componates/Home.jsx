import React, { useContext, useState } from 'react';
import WeatherContext from "./WeatherContext";
import WeatherResponse from './WeatherResponse';
import "./home.css"

const Home = () => {
    const { fetchWeather, weatherData } = useContext(WeatherContext);
    const [selectedCity, setSelectedCity] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showHome, setShowHome] = useState(true);
    let handlereset = ()=>{
        setShowHome(true)
    }

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        setErrorMessage('');
    };

    const handleGetWeather = async () => {
        if (!selectedCity) {
            setErrorMessage('Veuillez choisir une ville parmi les trois');
            return;
        }
        const [latitude, longitude] = selectedCity.split(',');
        await fetchWeather(latitude, longitude);
        setShowHome(false);
    };

    return (
        <div>
            {showHome ? (
                <>
                <div className='page1'>
                <h1 className='h2'>bienvenue ici vous allez trouve les prevision meteo pour la journee</h1>
                    <h3 className='h3'>Choisissez une ville pour voir la météo</h3>
                    <select className='city' value={selectedCity} onChange={handleCityChange}>
                        <option value="">Sélectionnez une ville</option>
                        <option value="36.7323,3.0875">Alger</option>
                        <option value="36.7559,5.0843">Bejaia</option>
                        <option value="35.7991,-0.6359">Oran</option>
                    </select>
                    <button className='meteo' onClick={handleGetWeather}>Voir la météo</button>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    </div>
                </>
            ) : (
                <>
                <WeatherResponse />
                
                <input className='reset' type="button" value="reset" onClick={()=>handlereset()} />
                </>
            )}
        </div>
    );
};

export default Home;

