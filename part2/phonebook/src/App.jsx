import { useState } from 'react';
import Filter from './Filter';
import PhonebookEntryForm from './PhonebookEntryForm';
import PhonebookEntries from './PhonebookEntries';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [filter, setFilter] = useState('');

    const handleChangeFilter = (e) => setFilter(e.currentTarget.value);

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter handleChangeFilter={handleChangeFilter}></Filter>

            <PhonebookEntryForm setPersons={setPersons} persons={persons} />

            <h2>Numbers</h2>
            <PhonebookEntries persons={persons} filter={filter} />
        </div>
    )
}

export default App