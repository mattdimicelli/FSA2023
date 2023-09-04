import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryDetails from "./CountryDetails.jsx";

function App() {
    const [allCountries, setAllCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(undefined);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then(res => setAllCountries(res.data))
            .catch(e =>  {
                alert('Error getting list of countries from server');
                console.error(e);
            });
    }, []);

    let displayResultsOfQuery;
    if (filteredCountries === undefined) {
        displayResultsOfQuery = null;
    } else if (filteredCountries.length > 10) {
        displayResultsOfQuery = <div>Too many matches.  Specify another filter</div>
    } else if (filteredCountries.length > 1) {
        displayResultsOfQuery = (
            <ul>
                {
                    filteredCountries.map(country => (
                        <li key={country.name.common}>{country.name.common}</li>
                    ))
                }
            </ul>
        )
    } else if (filteredCountries.length === 1) {
        displayResultsOfQuery = (
            <CountryDetails country={filteredCountries[0]} />
        )
    }

    const handleChange = (e) => {
        setSearchValue(e.currentTarget.value);
        if (e.currentTarget.value === '') {
            setFilteredCountries(undefined);
        } else {
            setFilteredCountries(allCountries.filter(c => c.name.common.toLowerCase().includes(e.currentTarget.value.toLowerCase()) || c.name.official.toLowerCase().includes(e.currentTarget.value.toLowerCase())));
        }
    }

    return (
        <>
            <label>find countries <input type='search' value={searchValue} onChange={handleChange} /></label>
            {displayResultsOfQuery}
        </>
    )
}

export default App
