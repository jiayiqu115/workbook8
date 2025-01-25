# workbook8
problem solving with chat gpt my weather didn't appeared on the cacnvas.
The issue with the weather data not displaying is likely due to a few problems in your code:

Weather API Response Handling: The weather_api returns temperature_2m and is_day for hourly data, but you're trying to access it like it's in j_data.current. It looks like you're referencing an incorrect property for the current temperature.

Function Placement: The setup() function is defined within the getWeather() function, which isn’t necessary.

Asynchronous Nature of API Calls: You need to properly handle the asynchronous nature of your API calls, and getWeather() should be a separate call, similar to how getIP() and getJoke() are handled.

this is kind of fun when making jokes.

https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart
https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,is_day&hourly=temperature_2m
