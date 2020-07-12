import React from 'react';

const Persons = ({
    persons,
    nameFilter,
}) => (
    <div>
    <h2>Numbers</h2>
        {persons.filter(person =>
            person.name.toLowerCase().includes(nameFilter.toLowerCase()))
            .map((person) => (
                <p key={person.id}>{person.name} {person.number}</p>
            ))}
    </div>
)
export default Persons;