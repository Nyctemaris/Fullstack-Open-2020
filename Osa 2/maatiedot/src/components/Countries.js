import React, {useState, useEffect} from 'react';
import Country from './Country'

const Countries = ({
    countries,
    nameFilter,
}) => {

    const [selectedCountry, setSelectedCountry] = useState(null)
    useEffect(() => {setSelectedCountry(null);}, [nameFilter])

    let searchResultCount = countries.filter(country => country.name.toLowerCase().includes(nameFilter.toLowerCase()));


    const selectCountry = (country) => {
        setSelectedCountry(country);
    }
    if (selectedCountry) {
        return (
            <div>
                <Country country={selectedCountry} />
            </div>
        )
    }
    else if (searchResultCount.length > 10) {

        return (
            <div>
                <p>Too many results (10+), specify another filter</p>
            </div>
        )

    } else if (searchResultCount.length > 1 || searchResultCount.length === 0) {
        return (
            <div>
                {searchResultCount.map((country) => (
                    <div key={country.numericCode}>
                    <p>{country.name}</p>
                    <button onClick={() => selectCountry(country)}>show</button>
                    </div>
                ))}
            </div>
        )
    } else {

        return (
            <div>
                <Country country={searchResultCount[0]} />
            </div>
        )
    }
}
export default Countries;