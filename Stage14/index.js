// Profile viewer app
// create the iterator

// login
// id
// avatar_url
// html_url
// type


const data = getUsers();

// async function getUsers() {
//     fetch('https://api.github.com/users')
//       .then(res => res.json())
//       .then(users => {data.push(users)
//         users.map(x => console.log(x));
//     })
//       .catch((err) => console.log(err));


//   }

  async function getUsers(){
    const usrArr1 = [];
    const usrArr2 = [];
    const response = await fetch('https://api.github.com/users');
    // only proceed once its resolved
    const users = await response.json().then(usrs => usrArr1.push(usrs));
    // only proceed once second promise is resolved
    usrArr1.map(x => usrArr2.push[x]);
    return usrArr2;
   }
  
 console.log(data);
  //data.map(x => console.log(x.id));