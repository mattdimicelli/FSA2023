import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('');
    const [filter, setFilter] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(persons.find(person => person.name === newName) === undefined) {
            setPersons(persons.concat({ name: newName, number: newNumber }));
        } else {
            alert(`${newName} is already in the phonebook`);
        }
        setNewName('');
        setNewNumber('');
    }

    const handleChangeFilter = (e) => setFilter(e.currentTarget.value);

    return (
        <div>
            <h1>Phonebook</h1>
            <h2 style={{display: 'inline-block', marginRight: '1rem', marginBottom: '1rem'}}>Filter by name:</h2>
            <label>Name<input onChange={handleChangeFilter} /></label>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input value={newName} onChange={(e) => setNewName(e.currentTarget.value)} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={(e) => setNewNumber(e.currentTarget.value)} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <table>
                <tbody>
                    {persons.map(person => {
                        if (person.name.toLowerCase().includes(filter)) {
                            return (
                                <tr key={person.name}>
                                    <td>{person.name}</td>
                                    <td>{person.number}</td>
                                </tr>
                            )
                        } else {
                            return null
                        }
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default App