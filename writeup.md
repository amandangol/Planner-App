# Custom-Made Widget Description

The custom widget that's added on the planner app is <strong>Weather Widget</strong> which can fetch the weather data on the basis of location.

## Why the Weather Widget?

Weather widget is necessary for planner app due to number of reasons such as:

- Location-Specific Weather:
  The location widget provides real-time weather information specific to the user's current location. This feature ensures that users receive accurate and relevant weather updates based on their whereabouts, enhancing the usability and reliability of the planner app.
- Contextual Planning:
  By incorporating location-specific weather information, users can plan their activities, events, or tasks based on the weather conditions of their current location. It enables them to make informed decisions and adjustments to their plans, considering factors such as temperature, precipitation, wind, and other weather elements.
- Weather-Dependent Tasks: Some tasks or events are weather-dependent, such as outdoor sports, gardening, or picnics. The location widget in the planner app ensures that users are aware of the weather conditions at their location, enabling them to plan and schedule these activities accordingly. It helps users optimize their time and resources based on the prevailing weather.
- Seamless User Experience: Incorporating weather information into the planner app through a location widget creates a seamless user experience. Users don't have to switch to a separate weather app or manually input their location. The app automatically retrieves the weather data based on their current location, saving time and effort.

## How to use this widget?

WeatherWidget component can be used within your planner app to provide weather information to the user.
Here's how the user can interact with the widget:

- When the user opens the planner app, the WeatherWidget will automatically fetch the weather data based on the user's current location (if geolocation access is allowed).

- The widget will display the name of the city, the current temperature, and the weather conditions obtained from the OpenWeatherMap API.

- The weather information will be updated in real-time, reflecting the latest data available.

- If there is an error while fetching the weather data or if geolocation access is not supported or denied, an appropriate error message will be displayed to the user.

By including the WeatherWidget component in the planner app, the user will have access to real-time weather information without needing to manually enter their location. This can be beneficial for planning activities, scheduling events, and making informed decisions based on the current weather conditions.

## How does the code work?

- The WeatherWidget component is implemented as a functional component in React. It displays weather information based on the user's current location.
- The component starts by defining the apiKey variable, which holds the API key for accessing the OpenWeatherMap API.
- The component uses the useState hook to define two state variables: weatherData and error. These variables will hold the weather data and any error messages, respectively.
- The useEffect hook is used to perform an asynchronous operation to fetch the weather data when the component mounts.
- Within the useEffect hook, the fetchWeatherData function is defined. This function checks if the browser supports geolocation using the navigator.geolocation object.
- If geolocation is supported, the getCurrentPosition method is called to retrieve the user's current latitude and longitude.
  The latitude and longitude values are then used to construct the API request URL, including the apiKey and specifying the desired units (metric in this case).
- The fetch function is used to send the API request and receive the response. If the response is successful (status code 200), the returned data is converted to JSON format using the response.json() method.
- If the API request is successful, the weather data is stored in the weatherData state variable using the setWeatherData function.
- If there is an error in the API response or during the data retrieval process, the error message is stored in the error state variable using the setError function.
- In the component's return statement, the weather widget's UI is rendered based on the state variables. If there is an error, the error message is displayed. If the weather data is available, the city name, temperature, and weather conditions are shown. If the data is still being loaded, a loading message is displayed.
- The weather widget is wrapped in a div element with inline styles to set a minimum width.

In summary, this component uses the geolocation feature of the browser to retrieve the user's current location. It then makes an API request to OpenWeatherMap using the latitude, longitude, and API key to fetch the weather data. The retrieved data is stored in the component's state variables and rendered in the UI.
