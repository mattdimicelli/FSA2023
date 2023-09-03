import axios from 'axios';

const URL = 'http://localhost:3001/persons';

const createEntry = (entry) => axios.post(URL, entry).then(res => res.data);

const deleteEntry = (id) => axios.delete(`${URL}/${id}`);


export default {createEntry, deleteEntry};