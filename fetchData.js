
const fetch = require('node-fetch');


function fetchTodo(id) {

    return fetch('https://jsonplaceholder.typicode.com/todos/' + id)
      .then((response) => response.json())

}


module.exports = fetchTodo;