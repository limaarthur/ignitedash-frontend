import axios from 'axios';
import qs from 'qs';
import history from './history';

export const BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL

const CLIENT_ID = import.meta.env.VITE_REACT_APP_CLIENT_ID 
const CLIENT_SECRET = import.meta.env.VITE_REACT_APP_CLIENT_SECRET 

const basicHeader = () => 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET);

type LoginData = {
  username: string;
  password: string;
};

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: basicHeader()
  }

  const data = qs.stringify({
    ...loginData,
    grant_type: 'password',
  });

  return axios({method: 'POST', baseURL: BASE_URL, url: '/oauth2/token', data, headers});
 }

  axios.interceptors.request.use(
    function (config) {
    return config;
  }, 
  function (error) {
    return Promise.reject(error);
  });

  axios.interceptors.response.use(
    function (response) {
    return response;
  }, 
  function (error) {
    if (error.response.status === 401 || error.response.status === 403) {
      history.push('/admin/auth');
    }
    return Promise.reject(error);
  });