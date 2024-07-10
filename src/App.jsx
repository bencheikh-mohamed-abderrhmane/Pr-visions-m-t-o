import React from 'react';
import { WeatherProvider } from "./componates/WeatherContext"
import Home from './componates/Home';
import WeatherResponse from "./componates/WeatherResponse"

const App = () => {
    return (
        <WeatherProvider>
            <div>
                <Home />
                
            </div>
        </WeatherProvider>
    );
};

export default App;
