const user = require('../models/user');
const axios = require('axios');

exports.saveUser = () => {
    axios.get('https://api.unsplash.com/search/users', { params: {
        client_id: "MJMLH8lFl2RsqUfJ6ICyGZYHjVejtO5kmGxYGQYCdiE",
        total_page: 10,
        per_page: 1000,
        query: "e"
    }})
    .then(response => {
        return JSON.parse(JSON.stringify([...response.data.results]));
    })
    .then(response => console.log(response))
    .catch(err => console.log("ERROR :", err))
}