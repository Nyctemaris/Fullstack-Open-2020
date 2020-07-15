import React, { useState, useEffect } from 'react'
import './App.css';
import NewPersonForm from './components/NewPersonForm.js'
import FilterForm from './components/FilterForm'
import Persons from './components/Persons'
import dataService from './Services/dataService'
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [notificationType, setNotificationType] = useState(null)

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

      } else {
        setNewName('')
        setNewNumber('')
        return;
      }
    }


    dataService
      .addNewPerson(newPersonData)
      .then(responseData => {
        setPersons(persons.concat(responseData))
        setNewName('')
        setNewNumber('')
        setNotificationType('successNotification')
        setNotification(`User ${newPersonData.name} has been added to the phonebook`)
        setTimeout(() => {
          setNotification(null)
          setNotificationType(null)
        }, 5000)
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
            setNewName('')
            setNewNumber('')
            setNotificationType('successNotification')
            setNotification(`User ${newPersonData.name} phonenumber has been updated`)
            setTimeout(() => {
              setNotification(null)
              setNotificationType(null)
            }, 5000)

          })
      }).catch(e => {
        setNotificationType('failureNotification')
        setNotification(`updating user ${newPersonData.name} phonenumber has failed, please try again`)
        setTimeout(() => {
          setNotificationType(null)
          setNotification(null)
          dataService
            .fetchAllData()
            .then(responseData => {
              setPersons(responseData)
            })
        }, 5000)
      })

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notificationmessage={notification} notificationType={notificationType} />
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