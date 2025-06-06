type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userFirstName: string;
  userId: number;
};

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