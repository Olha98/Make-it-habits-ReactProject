import axios from 'axios';

axios.defaults.baseURL = 'https://phonebook-29cc9.firebaseio.com';

export const getInfoAPI = () => axios.get('/info.json');

export const addInfoAPI = info => axios.post('/info.json', info);

// export const deleteInfoAPI = id => axios.delete(`/info/${id}.json`);

export default { getInfoAPI, addInfoAPI };
