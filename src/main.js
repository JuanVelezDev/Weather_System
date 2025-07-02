// import axios from 'axios';
//
//
// const ciudad = 'Itagui';
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;
//
// async function obtenerClima() {
//     try {
//         const respuesta = await axios.get(url);
//         const data = respuesta.data;
//
//         console.log(`Clima en ${data.name}, ${data.sys.country}:`);
//         console.log(`Temperatura: ${data.main.temp}°C`);
//         console.log(`Descripción: ${data.weather[0].description}`);
//         console.log(`Velocidad del viento: ${data.wind.speed} m/s`);
//         console.log(`Humedad: ${data.main.humidity}%`);
//     } catch (error) {
//         console.error(`Error al obtener el clima:`, error.message);
//     }
// }
//
// obtenerClima();
