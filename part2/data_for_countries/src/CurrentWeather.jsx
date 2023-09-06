import axios from 'axios';
import { useState, useEffect } from "react";

const CurrentWeather = ({ latlng, country }) => {
    const [lat, lng] = latlng;

    const [weather, setWeather] = useState(undefined);

    useEffect(() => {
        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${import.meta.env.VITE_API_KEY}`
        )
            .then(res => setWeather(res.data));
    })

    if(weather != null) {
        return (
            <>
                <h2>Weather in {country}</h2>
                <p>temperature - {weather.main.temp}</p>
            </>
        )
    } else {
        return null;
    }

}

export default CurrentWeather;