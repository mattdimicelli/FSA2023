import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(persons.find(person => person.name === newName) === undefined) {
            setPersons(persons.concat({ name: newName }));
        } else {
            alert(`${newName} is already in the phonebook`);
        }
        setNewName('');
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input value={newName} onChange={(e) => setNewName(e.currentTarget.value)} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person => (
                    <li key={person.name}>{person.name}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default App