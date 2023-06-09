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

function displayTemperature(response) {console.log(response)
    let temperatureElement = document.querySelector("#temperature")
    let descriptionElement = document.querySelector("#tempDescription")
    let cityElement = document.querySelector("#city")
    let humidityElement = document.querySelector("#humidity")
    let dateElement = document.querySelector("#date")
    let iconElement = document.querySelector("#icon")
    
    temperatureElement.innerHTML = Math.round(response.data.temperature.current)
    cityElement.innerHTML = (response.data.city)
    descriptionElement.innerHTML = (response.data.condition.description)
    humidityElement.innerHTML = (response.data.temperature.humidity)
    dateElement.innerHTML = formatDate(response.data.time * 1000);
    iconElement.setAttribute("src", `${response.data.condition.icon_url}`)    
}

let apiKey = "42c46tb11f82fdddoa3422839024da74"
let city = "Seoul"
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`

axios.get(apiUrl).then(displayTemperature)

