import React from 'react';


const Countries = ({
    countries,
    nameFilter,
}) => {

    let searchResultCount = countries.filter(country => country.name.toLowerCase().includes(nameFilter.toLowerCase()));

    if (searchResultCount.length > 10) {

        return (
            <div>
                <p>Too many results (10+), specify another filter</p>
            </div>
        )

    } else if (searchResultCount.length > 1) {
        return (
            <div>
                {searchResultCount.map((country) => (
                    <p key={country.numericCode}>{country.name}</p>
                ))}
            </div>
        )
    } else {

        return (
            <div>
                {searchResultCount.map((country) => (
                    <div key={country.numericCode}>
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
                            <img src={country.flag} alt={`The flag of ${country.name}`}/>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default Countries;