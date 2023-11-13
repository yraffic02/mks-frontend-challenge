import axios from "axios";

export const apiMks = axios.create({
  baseURL: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1',
  timeout: 10000,
  headers: {
    "content-Type": "application/json",
  },
});