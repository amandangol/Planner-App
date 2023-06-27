import React, { useEffect, useState } from 'react';

const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

export default function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data based on user's current location
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
              console.error('Error fetching weather data:', data.message);
            }
          });
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
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
        {weatherData ? (
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
