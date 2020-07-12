import React, { useState } from 'react'
import './App.css';
//import './components/NewPersonForm.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const nameObject = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }
  const handleFieldChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleFieldChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <div>{persons.map((nameObject) => (<p key={nameObject.id}>{nameObject.name}</p>))}</div>
    </div>
  )

}

export default App;