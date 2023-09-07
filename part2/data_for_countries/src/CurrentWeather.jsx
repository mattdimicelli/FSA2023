import axios from 'axios';
import { useState, useEffect } from "react";

const CurrentWeather = ({ latlng, country }) => {
    const [lat, lng] = latlng;

    const [weather, setWeather] = useState(undefined);

    useEffect(() => {
        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=${import.meta.env.VITE_API_KEY}`
        )
            .then(res => setWeather(res.data));
    })

    if(weather != null) {
        return (
            <>
                <h2>Weather in {country}</h2>
                <p>temperature - {weather.main.temp} °F</p>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                </div>
                <p>wind - {weather.wind.speed} mph</p>
            </>
        )
    } else {
        return null;
    }

}

export default CurrentWeather;