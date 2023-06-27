import React, { useEffect, useState } from 'react';

const apiKey = "b05d1e7552aa6c35175d8a6a0055b37f";

export default function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            if (response.ok) {
              setWeatherData(data);
            } else {
              setError(data.message);
            }
          });
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'row' }}>
        <p>Weather</p>
      </div>
      <div className="weather-container">
        {error ? (
          <p>Error fetching weather data: {error}</p>
        ) : weatherData ? (
          <>
            <p>City: {weatherData.name}</p>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Conditions: {weatherData.weather[0].description}</p>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
}
