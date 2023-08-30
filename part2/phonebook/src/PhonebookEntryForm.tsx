import {useState} from "react";

const PhonebookEntryForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('');

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