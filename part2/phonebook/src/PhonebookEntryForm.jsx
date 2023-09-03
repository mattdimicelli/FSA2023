import {useState} from "react";
import ajaxService from '../services/ajax_service.js';

const { createEntry } = ajaxService;

const PhonebookEntryForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(persons.find(person => person.name === newName) === undefined) {
            createEntry({ name: newName, number: newNumber })
                .then(data => setPersons(persons.concat(data)))
                .catch(err => {
                    alert('Server error.  Unable to create new entry');
                    console.error(err);
                });
        } else {
            alert(`${newName} is already in the phonebook`);
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