const PhonebookEntries = ({persons, filter}) => (
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
);

export default PhonebookEntries;