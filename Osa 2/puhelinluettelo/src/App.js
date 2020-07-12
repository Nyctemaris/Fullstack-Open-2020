import React, { useState } from 'react'
import './App.css';
import NewPersonForm from './components/NewPersonForm.js'
import FilterForm from './components/FilterForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return;
    }

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')

  }

  const handleNameFieldChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberFieldChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <FilterForm nameFilter={nameFilter} handleNameFilterChange={handleNameFilterChange} />
        <NewPersonForm 
          addPerson={addPerson}
          newName={newName}
          handleNameFieldChange={handleNameFieldChange}
          newNumber={newNumber}
          handleNumberFieldChange={handleNumberFieldChange}
        />
      <Persons persons={persons} nameFilter={nameFilter} />

    </div>
  )

}

export default App;