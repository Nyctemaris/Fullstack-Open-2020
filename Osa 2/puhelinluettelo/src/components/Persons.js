import React from 'react';

const Persons = ({
    persons,
    nameFilter,
    handleRemovePerson,
}) => {
    const styling = {
        display: 'inline-block',
        marginRight: '8px'
    }
    return (
        <div>
            <h2>Numbers</h2>
            {persons.filter(person =>
                person.name.toLowerCase().includes(nameFilter.toLowerCase()))
                .map((person) => (<div key={person.id}>
                    <p style={styling}>{person.name} {person.number}</p>
                    <button onClick={() => handleRemovePerson(person)}>delete</button>
                </div>
                ))}
        </div>
    )
}
export default Persons;