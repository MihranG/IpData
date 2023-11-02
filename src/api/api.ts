import axios from 'axios';
const JSON_OUTPUT = '&output=json';

export const api = axios.create({
  baseURL: 'https://ipwho.is/',
});

export const fetchUserLocation = () => {
  return api.get(JSON_OUTPUT);
};

export const fetchIPInfo = (ipAddress: string) => {
  return api.get(ipAddress + JSON_OUTPUT);
};
