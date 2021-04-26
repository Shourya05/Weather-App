import axios from 'axios';

const API_KEY = '54918a44ce3ec278867b868fda3acaf4'
function getCurrentWeather(location){
   return axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    )
};

function getForecast(lat,lon){
    return axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    )
}

export {getCurrentWeather, getForecast} 