import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clones-backend.herokuapp.com/',
});

export default instance;