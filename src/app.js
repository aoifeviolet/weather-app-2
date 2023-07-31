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

function displayForecast(forecast) { 
  
let forecastElement = document.querySelector("#forecast")
let forecastHTML = `<div class="row">`;
let days = ["Sat", "Sun", "Fri"]

days.forEach(function(day) {forecastHTML = forecastHTML + `
<div class="col-2">
  <div class="forecast-date">${day}</div>
  <div class="forecast-temp">
    30°C
  </div>
  <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png" alt="" class="forecast-icon"/>
</div>`;
})

forecastHTML = forecastHTML + `</div>`

forecastElement.innerHTML = forecastHTML
  
}

function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature")
    let descriptionElement = document.querySelector("#tempDescription")
    let cityElement = document.querySelector("#city")
    let humidityElement = document.querySelector("#humidity")
    let dateElement = document.querySelector("#date")
    let iconElement = document.querySelector("#icon")
    let windElement = document.querySelector("#wind")
    
    temperatureElement.innerHTML = Math.round(response.data.temperature.current)
    cityElement.innerHTML = (response.data.city)
    descriptionElement.innerHTML = (response.data.condition.description)
    humidityElement.innerHTML = (response.data.temperature.humidity)
    dateElement.innerHTML = formatDate(response.data.time * 1000);
    iconElement.setAttribute("src", `${response.data.condition.icon_url}`)    
    windElement.innerHTML = (response.data.wind.speed)
}

function search(city){
let apiKey = "42c46tb11f82fdddoa3422839024da74"
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
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
displayForecast()

console.log(respone.data)




