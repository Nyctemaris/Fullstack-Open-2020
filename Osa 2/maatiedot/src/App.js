import React, { useState, useEffect } from 'react'
import FilterForm from './components/FilterForm'
import Countries from './components/Countries'
import Axios from 'axios'

function App() {

  const [countries, setCountries] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  const fetchInitialData = () => {
    Axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {setCountries(response.data)})
  }

  useEffect(fetchInitialData, []);

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  return (
    <div>
      <FilterForm nameFilter={nameFilter} handleNameFilterChange={handleNameFilterChange} />
      <Countries countries={countries} nameFilter={nameFilter} />
    </div>
  );
}

export default App;
