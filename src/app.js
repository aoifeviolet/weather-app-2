function formatDate(timestmap){
    let date = new Date(timestmap)
    let hours = date.getHours()
    if (hours < 10){minutes = `0${hours}`}
    let minutes = date.getMinutes()
    if (minutes < 10){minutes = `0${minutes}`}
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[date.getDay()] 
    return `${day} ${hours}:${minutes}`
}

function formatDay(timestamp) {

let date = new Date(timestamp * 1000)
let day = date.getDay()
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

return days[day]
}

function displayForecast(response) { 
let forecast = response.data.daily;


let forecastElement = document.querySelector("#forecast")



let forecastHTML = `<div class="row">`;
forecast.forEach(function(forecastDay, index) {
  if (index < 6){

  forecastHTML = forecastHTML + `
<div class="col-2">
  <div class="forecast-date">${formatDay(forecastDay.dt)}</div>
  <img src='http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png' alt="" class="forecast-icon"/>
<div forecast-temps>
  <div class="forecast-temp-max">
    ${Math.round(forecastDay.temp.max)}°C
  </div>
  <div class="forecast-temp-min">
    ${Math.round(forecastDay.temp.min)}°C
  </div>
  </div>
  <div class="forecast weather"></div>
</div>`;
}})

forecastHTML = forecastHTML + `</div>`
forecastElement.innerHTML = forecastHTML}

function getForecast(coordinates){
  let apiKey = "bd5b4461863eddaa6ced0a0a67989e0a"
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(displayForecast)
  }
  

function displayTemperature(response) {
  console.log(response.data)
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement = document.querySelector("#tempDescription");
    let cityElement = document.querySelector("#city");
    let humidityElement = document.querySelector("#humidity");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");
    let windElement = document.querySelector("#wind");
    
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = (response.data.name);
    descriptionElement.innerHTML = (response.data.weather[0].description);
    humidityElement.innerHTML = (response.data.main.humidity);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)    ;
    windElement.innerHTML = (response.data.wind.speed);

    getForecast(response.data.coord)
}

function search(city){
let apiKey = "bd5b4461863eddaa6ced0a0a67989e0a"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(displayTemperature)
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  console.log(cityInputElement.value);
  search(cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);


search("new york")




