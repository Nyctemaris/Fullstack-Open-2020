import React from 'react'
import Weather from './Weather'

const Country = ({ country }) => {

    return (

        <div>
            <h3>{country.name}</h3>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h4>languages</h4>
            <ul>
                {country.languages.map((lang, i) => (
                    <li key={i}>{lang.name}</li>
                ))}
            </ul>
            <div>
                <img class="flag" src={country.flag} alt={`The flag of ${country.name}`} />
            </div>
            <div>
                <Weather city={country.capital} />
            </div>
        </div>
    )
}

export default Country;