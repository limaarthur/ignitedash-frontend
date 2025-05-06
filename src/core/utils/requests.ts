import axios from 'axios';
import qs from 'qs';
import history from './history';

import { jwtDecode } from 'jwt-decode';

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userFirstName: string;
  userId: number;
};

type Role = 'ROLE_OPERATOR' | 'ROLE_ADMIN';

export type TokenData = {
  exp: number;
  username: string;
  authorities: Role[];
}

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

 const tokenKey = 'authData';

 export const saveAuthData = (obj : LoginResponse) => {
  localStorage.setItem(tokenKey, JSON.stringify(obj))
}

export const getAuthData = () => {
  const str = localStorage.getItem(tokenKey) ?? "{}";
  const obj = JSON.parse(str) as LoginResponse;

  return (obj);
}

export const removeAuthData = () => {
  localStorage.removeItem(tokenKey);
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

export const getTokenData = () : TokenData | undefined => {
 
  try {
    return jwtDecode(getAuthData().access_token) as TokenData;
  }catch{
    return undefined;
  }
}

export const isAuthenticated = () : boolean => {
  const tokenData = getTokenData();
  return (tokenData && tokenData.exp * 1000 > Date.now()) ? true : false;
}

export const hasAnyRoles = (roles: Role[]) : boolean => {
  if (roles.length === 0) { return true;
  }

  const tokenData = getTokenData();
  return tokenData !== undefined && roles.some(role => tokenData.authorities.includes(role));
}