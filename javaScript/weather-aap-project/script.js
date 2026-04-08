const apiKey = "d81bc77cd98527065ddbfbae7aa74367";
const cityInput = document.getElementById("city-input")
const getWeatherBtn = document.getElementById("get-weather-btn")
const weatherInfo = document.getElementById("weather-info")
const  cityName= document.getElementById("city-name")
const  temperature= document.getElementById("temperature")
const humidity = document.getElementById("humidity")
const  description= document.getElementById("description")
const  forecastInfo= document.getElementById("forecast-info")
const  forecastList= document.getElementById("forecast-list")

getWeatherBtn.addEventListener("click",getWeather);

cityInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
       getWeather();
  }
});

function getWeather(){
    const city = cityInput.value.trim();

    if(city===""){
        alert("Please Enter city name");
        return;
    }

    fetchWeatherData(city);
}
// https://www.youtube.com/results?search_query=codewithharry&
function fetchWeatherData(city){
   const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;


      // fetch current weather data 
      fetch(currentWeatherUrl)
      .then((res)=> res.json())
      .then((data)=> {
        cityName.textContent = `Weather in ${data.name}`
         temperature.textContent = `Temperature: ${data.main.temp} °C`;
         humidity.textContent = `Humidity : ${data.main.humidity}%: `
         description.textContent = `Description :${data.weather[0].description}`

         // fetch 5 day forecast data 
         fetch(forecastUrl)
         .then((response)=> response.json())
         .then((forecastData)=>{
             displayForecast(forecastData);
         })
      }).catch((error)=>{
          alert("Error fetching weather data")
      })
}

function displayForecast(forecastData){
    forecastList.innerHTML = "";

    for(let i=0;i<forecastData.list.length;i+=8){
        // data is in 3 hours intervals , so 8 times give a full day
        const dayForecast = forecastData.list[i];
          const listItem = document.createElement("li");
          listItem.textContent = `${new Date(dayForecast.dt *1000).toLocaleDateString()} - Temp : ${dayForecast.main.temp}°C- ${
            dayForecast.weather[0].description}`;

            forecastList.appendChild(listItem);
    }
}