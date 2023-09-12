import {useState} from "react";
import ajaxService from '../services/ajax_service.js';

const { createEntry, updateEntry } = ajaxService;

const PhonebookEntryForm = ({ persons, setPersons, setNotification, setError }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingEntry = persons.find(person => person.name === newName);
        if(existingEntry === undefined) {
            createEntry({ name: newName, number: newNumber })
                .then(data => {
                    setPersons(persons.concat(data));
                    setNotification(`Added ${newName}`);
                    setTimeout(() => setNotification(undefined), 4000);
                })
                .catch(err => {
                    setError(err.response.data.error);
                    setTimeout(() => setError(undefined), 4000);
                    console.error(err);
                });
        } else {
            if(confirm(`${newName} is already in the phonebook.  Replace ${existingEntry.number} with ${newNumber}?`)){
                updateEntry({...existingEntry, number: newNumber})
                    .then(data => setPersons(persons.filter(p => p !== existingEntry).concat(data)))
                    .catch(err => {
                        setError(err.response.data.error);
                        setTimeout(() => setError(undefined), 4000);
                        console.error(err);
                    });
            }
        }
        setNewName('');
        setNewNumber('');
    }
    return (
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
    );
}

export default PhonebookEntryForm;