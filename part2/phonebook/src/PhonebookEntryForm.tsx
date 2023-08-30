const PhonebookEntryForm = ({handleSubmit, newName, setNewName, setNewNumber, newNumber}) => (
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

export default PhonebookEntryForm;