import React from 'react';

const NewPersonForm = ({
    addPerson,
    newName,
    handleNameFieldChange,
    newNumber,
    handleNumberFieldChange,
}) => (
        <div>
            <h2> Add new person </h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameFieldChange} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberFieldChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    );


export default NewPersonForm;