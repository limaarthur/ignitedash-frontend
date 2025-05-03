import axios from 'axios';
import qs from 'qs';

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