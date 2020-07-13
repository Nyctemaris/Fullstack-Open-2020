import React, { useState, useEffect } from 'react'
import './App.css';
import NewPersonForm from './components/NewPersonForm.js'
import FilterForm from './components/FilterForm'
import Persons from './components/Persons'
import dataService from './Services/dataService'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    dataService
      .fetchAllData()
      .then(responseData => {
        setPersons(responseData)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return;
    }

    const newPersonData = {
      name: newName,
      number: newNumber,
      //id: persons.length + 1
    }
    dataService
      .addNewPerson(newPersonData)
      .then(responseData => {
        setPersons(persons.concat(responseData))
        setNewName('')
        setNewNumber('')
      })
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

  const handleRemovePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      dataService
        .deletePerson(person.id)
        .then(() => {
          dataService
            .fetchAllData()
            .then(responseData => {
              setPersons(responseData)
            })
        })
    }
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
      <Persons persons={persons} nameFilter={nameFilter} handleRemovePerson={handleRemovePerson} />

    </div>
  )

}

export default App;