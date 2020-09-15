import axios from 'axios';

axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com';
const mytoken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWYzZmM4YzEyMDY3MDAxN2Q5NDA1ZCIsImlhdCI6MTYwMDA3NzgwMiwiZXhwIjoxNjAwNjgyNjAyfQ.Do35UzthClOuYZphh-NsHZfv_L_n4pRgnGaKQMfi0Mg';
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWYzOTk2YzEyMDY3MDAxN2Q5NDA1OSIsImlhdCI6MTYwMDA4MjEwNSwiZXhwIjoxNjAwNjg2OTA1fQ.ZJ6D6WOT-ym-ZjcodwuDzzkAkr21qv-MwQVGLef5fcs";
axios.defaults.headers.common.Authorization = mytoken;

export const getInfoAPI = () => axios.get('/habits');

export const addInfoAPI = info => axios.post('/users/updateQuizInfo', info);

// export const deleteInfoAPI = id => axios.delete(`/info/${id}.json`);

export default { getInfoAPI, addInfoAPI };
