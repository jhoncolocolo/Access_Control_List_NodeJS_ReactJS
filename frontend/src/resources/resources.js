import axios from 'axios'

const URI = 'http://localhost:4748/'

export const HTTP = axios.create({
    baseURL: URI,
    headers: { authorization: "Bearer " + localStorage.getItem('user')?.accessToken }
});