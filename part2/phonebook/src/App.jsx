import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter';
import PhonebookEntryForm from './PhonebookEntryForm.jsx';
import PhonebookEntries from './PhonebookEntries.jsx';
import Notify from './Notify.jsx';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [filter, setFilter] = useState('');
    const [notification, setNotification] = useState('');


    const handleChangeFilter = (e) => setFilter(e.currentTarget.value);

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(res => setPersons(res.data));
    },[]);

    return (
        <div>
            <h1>Phonebook</h1>
            <Notify msg={notification} />
            <Filter handleChangeFilter={handleChangeFilter}></Filter>

            <PhonebookEntryForm setPersons={setPersons} persons={persons} setNotification={setNotification} />

            <h2>Numbers</h2>
            <PhonebookEntries persons={persons} filter={filter} setPersons={setPersons} />
        </div>
    )
}

export default App