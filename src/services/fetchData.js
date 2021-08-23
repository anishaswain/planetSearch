import axios from 'axios';

const url = 'https://my-json-server.typicode.com/anishaswain/EarthAPI';

export const fetchFullData = (type) => {
  return axios.get(`${url}/${type}`).then((res) => res.data);
};

export const fetchColors = (type) => {
  return axios.get(`${url}/${type}`).then((res) => res.data);
};

export const fetchShapes = (type) => {
  return axios.get(`${url}/${type}`).then((res) => res.data);
};

export const fetchSizes = (type) => {
  return axios.get(`${url}/${type}`).then((res) => res.data);
};
