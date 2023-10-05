import axios from 'axios'

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
});

console.log("My axios is running");

export default instance;