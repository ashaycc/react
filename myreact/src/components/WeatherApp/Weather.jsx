import React, { useState } from 'react';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async (city) => {
        const apiKey = '9454634092c1ba61e61296fd5bdff2ab';
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            if (response.ok) {
                setWeather(data);
                setError('');
            } else {
                setWeather(null);
                setError(data.message);
            }
        } catch (err) {
            setWeather(null);
            setError('Failed to fetch data. Please try again later.');
        }
    };

    const handleSearch = () => {
        if (city.trim() !== '') {
            fetchWeather(city);
        }
    };

    return (
        <div>
            <h1>Weather App</h1>
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city name"
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p>{error}</p>}
            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>{weather.main.temp} °C</p>
                    <p>{weather.weather[0].description}</p>
                    <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" />
                </div>
            )}
        </div>
    );
};

export default Weather;
