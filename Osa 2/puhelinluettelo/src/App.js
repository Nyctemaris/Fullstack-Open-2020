import React, { useState } from 'react'
import './App.css';
//import './components/NewPersonForm.js'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  }

  const handleNameFieldChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberFieldChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameFieldChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberFieldChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <div>{persons.map((nameObject) => (<p key={nameObject.id}>{nameObject.name} {nameObject.number}</p>))}</div>
    </div>
  )

}

export default App;