import axios from 'axios';
const URL = 'http://localhost:3001/persons';

export const createEntry = (entry) => axios.post(URL, entry).then(res => res.data);



export default { createEntry };