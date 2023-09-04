import ajaxService from '../services/ajax_service.js';
const { deleteEntry } = ajaxService;

const PhonebookEntries = ({persons, filter, setPersons, setError }) => {
    const handleClick = ({ name, id }) => {
            if (window.confirm(`Are you sure that you want to delete ${name}'s entry?`)) {
                deleteEntry(id)
                    .then(() => setPersons(persons.filter(person => person.id !== id)))
                    .catch(e => {
                        setError('Unable to delete entry');
                        setTimeout(() => setError(undefined), 4000);
                        console.error(e);
                    })
            }
    };

    return (
        <table>
            <tbody>
            {persons.sort((p1, p2) => p1.name.localeCompare(p2.name)).map(person => {
                if (person.name.toLowerCase().includes(filter)) {
                    return (
                        <tr key={person.id}>
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