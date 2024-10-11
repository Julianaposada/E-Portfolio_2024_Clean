document.addEventListener("DOMContentLoaded", function () {
    const getWeatherBtn = document.getElementById("getWeatherBtn");
    const weatherInfo = document.getElementById("weatherInfo");

    getWeatherBtn.addEventListener("click", getWeather);

    function getWeather() {
        const apiKey = '76167cad71c92c7d6ad5bd693521a645';
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Medellin&appid=' + apiKey;
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const ciudad = data.name;
                const clima = data.weather[0].description;
                const temperatura = (data.main.temp - 273.15).toFixed(2);
    
                // Actualiza la clase según el clima
                let weatherClass = '';
                if (clima.includes('sol')) {
                    weatherClass = 'weather-sunny';
                } else if (clima.includes('lluvia')) {
                    weatherClass = 'weather-rainy';
                } else {
                    weatherClass = 'weather-cloudy';
                }
    
                // Aplica la clase al contenedor principal
                document.body.className = weatherClass;
    
                const mensaje = `El clima en ${ciudad} es ${clima} con una temperatura de ${temperatura}°C.`;
                weatherInfo.textContent = mensaje;
            })
            .catch(error => {
                console.error(error);
                weatherInfo.textContent = 'Hubo un error al obtener el clima.';
            });
    }
    
});
