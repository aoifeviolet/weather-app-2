function displayTemperatue(response) {console.log(response.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.daily.current)
}

let apiKey = "42c46tb11f82fdddoa3422839024da74"
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=${apiKey}&units=metric`
