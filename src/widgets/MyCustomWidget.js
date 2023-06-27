import React, { useEffect, useState } from 'react';

const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

export default function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;

              const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
              const data = await response.json();

              if (response.ok) {
                setWeatherData(data);
              } else {
                setError(data.message);
              }
            },
            () => {
              setError('Access to location was denied.');
            }
          );
        } else {
          setError('Geolocation is not supported by this browser.');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div style={{ minWidth: 300 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p>Weather</p>
      </div>
      <div className="weather-container">
        {error ? (
          <p>Error fetching weather data: {error}</p>
        ) : weatherData ? (
          <>
            <p>City: {weatherData.name}</p>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Conditions: {weatherData.weather[0].description}</p>
            <p>Wind Speed: {(weatherData.wind.speed * 3.6).toFixed(2)} km/h</p>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
}
