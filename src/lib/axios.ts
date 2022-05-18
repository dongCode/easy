import Axios from 'axios';

export const axios = Axios.create({
  baseURL: '',
});

axios.interceptors.request.use();
axios.interceptors.response.use();
