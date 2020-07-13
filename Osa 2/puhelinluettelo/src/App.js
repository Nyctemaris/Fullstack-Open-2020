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

    const newPersonData = {
      name: newName,
      number: newNumber,
    }

    const duplicatePerson = (persons.find(person => person.name === newName));
      if (duplicatePerson) {
        if (window.confirm(`${duplicatePerson.name} is already added to phonebook, replace the old number with a new one?`)) {
          handleNumberUpdate(newPersonData, duplicatePerson)
          return;
        }
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

  const handleNumberUpdate = (newPersonData, duplicatePerson) => {
      dataService
        .updateNumber(duplicatePerson.id, newPersonData)
          .then(() => {
            dataService
              .fetchAllData()
                .then(responseData => {
                  setPersons(responseData)
                    return true;
            })
        })

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