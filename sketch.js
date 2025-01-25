let ip;
let ip_api = 'https://api.ipify.org?format=json';
let intro, punchline;
let joke_api = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart';
let dataLoaded = false; // Flag to check if data is loaded
let currentTemp;
let dayNight;
let weather_api = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,is_day';

async function getIP() {
  let data = await fetch(ip_api);
  let j_data = await data.json();
  ip = j_data.ip;
}

async function getJoke() {
  let data = await fetch(joke_api);
  let j_data = await data.json();
  intro = j_data.setup;
  punchline = j_data.delivery;
}

async function getWeather() {
  let data = await fetch(weather_api);
  let j_data = await data.json();
  currentTemp = j_data.current.temperature_2m;
  dayNight = j_data.current.is_day;
}

function setup() {
  createCanvas(400, 400);
  // Use Promise.all to ensure all API calls complete before drawing
  Promise.all([getIP(), getJoke(), getWeather()]).then(() => {
    dataLoaded = true; // Set the flag to true when all data is loaded
  });
}

function draw() {
  background(220);
  
  if (dataLoaded) {
    text("IP: " + ip, 20, 100);
    text("Joke: " + intro, 20, 150);
    text(punchline, 20, 180);
    text("Temperature: " + currentTemp + "°C", 20, 210);
    text("Day/Night: " + (dayNight === 1 ? "Day" : "Night"), 20, 240);
  } else {
    text("Loading...", 20, 100); // Display loading message until data is available
  }
}
