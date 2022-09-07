// async function myFunc(){
//   console.log('in the function');
//   return 'hello';
// }

// myFunc().then(res => console.log(res));

async function execRequest(){
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Connecting .. Connected'), 2000);
  })
  const error = false;

  if(!error){
    const res = await promise;
    return res;
  }else{
    await Promise.reject(new Error('something went wrong'));
  }
}

//execRequest().then(res => console.log(res)).catch(err => console.log(err));

async function getUsers(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // only proceed once its resolved
  const data = await response.json();
  // only proceed once second promise is resolved
  return data;
 }

 getUsers().then(users => console.log(users));
