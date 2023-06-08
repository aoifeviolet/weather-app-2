function displayTemperature(response) {console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement = document.querySelector("#tempDescription")
    let cityElement = document.querySelector("#city")
    let humidityElement = document.querySelector("#humidity")
    
    temperatureElement.innerHTML = Math.round(response.data.temperature.current)
    cityElement.innerHTML = (response.data.city)
    descriptionElement.innerHTML = (response.data.condition.description)
    humidityElement.innerHTML = (response.data.temperature.humidity)
}

let apiKey = "42c46tb11f82fdddoa3422839024da74"
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${apiKey}&units=metric`

axios.get(apiUrl).then(displayTemperature)