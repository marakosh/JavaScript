$(document).ready(function() {
    $("#cityInput").keypress(function(event) {
      if (event.which === 13) {
        event.preventDefault();
        var city = $("#cityInput").val();
        if (city !== "") {
          getWeather(city);
        }
      }
    });
  
    $("#searchButton").click(function() {
      var city = $("#cityInput").val();
      if (city !== "") {
        getWeather(city);
      }
    });
  
    function getWeather(city) {
      var apiKey = "5036d6148020b0e67dbcb0434da77e98"; // Замените на свой API-ключ OpenWeatherMap
      var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
      $.ajax({
        url: apiUrl,
        type: "GET",
        dataType: "json",
        success: function(data) {
          displayWeather(data);
        },
        error: function() {
          $("#weatherInfo").html("Ошибка при получении данных о погоде.");
        }
      });
    }
  
    function displayWeather(data) {
      var city = data.name;
      var temperature = Math.round(data.main.temp - 273.15); // Преобразование из Кельвинов в Цельсии
      var description = data.weather[0].description;
      var icon = data.weather[0].icon;
  
      var weatherInfo = `
        <h2>${city}</h2>
        <p>Температура: ${temperature}°C</p>
        <p>Описание: ${description}</p>
        <img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
      `;
  
      $("#weatherInfo").html(weatherInfo);
    }
  });
  