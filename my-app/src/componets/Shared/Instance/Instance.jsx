import axios from "axios";

// axiso Instence
export const axiosinstance = axios.create({
    baseURL: 'http://localhost:2020/',
    headers: {
      authorization:`Bearer ${localStorage.getItem('assentoken')}`
  }
  });