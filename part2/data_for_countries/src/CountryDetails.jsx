import CurrentWeather from './CurrentWeather';
const CountryDetails = ({ country }) => {
    const { name, capital, area, languages, flag} = country;
    return (
        <article>
            <h2>{name.common}</h2>
            <p>capital {capital}</p>
            <p>area {area}</p>
            <p>languages</p>
            <ul>
                {Object.entries(languages).map(([k,v]) => <li key={k}>{v}</li>)}
            </ul>
            <figure style={{fontSize: 150, marginTop: 40}}>{flag}</figure>
            <CurrentWeather latlng={country.latlng} country={name.common} />
        </article>
    )
}

export default CountryDetails;