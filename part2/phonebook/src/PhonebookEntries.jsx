import ajaxService from '../services/ajax_service.js';
const { deleteEntry } = ajaxService;
const PhonebookEntries = ({persons, filter, setPersons}) => {
    const handleClick = ({ name, id }) => {
            if (window.confirm(`Are you sure that you want to delete ${name}'s entry?`)) {
                deleteEntry(id)
                    .then(() => setPersons(persons.filter(person => person.id !== id)))
                    .catch(e => {
                        alert('Unable to delete entry');
                        console.error(e);
                    })
            }
    };

    return (
        <table>
            <tbody>
            {persons.map(person => {
                if (person.name.toLowerCase().includes(filter)) {
                    return (
                        <tr key={person.name}>
                            <td>{person.name}</td>
                            <td>{person.number}</td>
                            <td><button onClick={() => handleClick(person)}>delete</button></td>
                        </tr>
                    )
                } else {
                    return null
                }
            })}
            </tbody>
        </table>
    )
}

export default PhonebookEntries;