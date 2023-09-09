import axios from 'axios';

const URL = '/api/persons';

const createEntry = (entry) => axios.post(URL, entry).then(res => res.data);

const deleteEntry = (id) => axios.delete(`${URL}/${id}`);

const updateEntry = (entry) => axios.put(`${URL}/${entry.id}`, entry).then(res => res.data);


export default { createEntry, deleteEntry, updateEntry };