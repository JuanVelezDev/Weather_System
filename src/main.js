import axios from 'axios';


const apiKey = import.meta.env.VITE_API_KEY;


const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const weatherContainer = document.getElementById('weather-result');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const weatherIcon = document.getElementById('weather-icon');
const errorMessage = document.getElementById('error-message');


async function obtenerClima(ciudad) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const respuesta = await axios.get(url);
        const data = respuesta.data;


        cityName.textContent = `${data.name}, ${data.sys.country}`;
        temperature.textContent = data.main.temp;
        humidity.textContent = data.main.humidity;
        windSpeed.textContent = data.wind.speed;
        sunrise.textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        sunset.textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weatherIcon.alt = data.weather[0].description;


        weatherContainer.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    } catch (error) {

        console.error(`Error al obtener el clima:`, error);
        weatherContainer.classList.add('hidden');
        errorMessage.textContent = 'Ciudad no encontrada. Por favor intenta nuevamente.';
        errorMessage.classList.remove('hidden');
    }
}


searchButton.addEventListener('click', () => {
    const ciudad = cityInput.value.trim();
    if (ciudad) {
        obtenerClima(ciudad);
    }
});


cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const ciudad = cityInput.value.trim();
        if (ciudad) {
            obtenerClima(ciudad);
        }
    }
});