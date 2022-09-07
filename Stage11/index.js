console.log('index script');

const http = new EasyHTTP();

// http.get('https://jsonplaceholder.typicode.com/todos')
// .then(data => console.log(data))
// .catch(err => console.log(err));

const data = {
  name:'john Slow',
  username: 'johnslow',
  email: 'johnslow@qmail.com'
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));