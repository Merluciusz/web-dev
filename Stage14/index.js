// Profile viewer app
// create the iterator

// login
// id
// avatar_url
// html_url
// type

const usersArray = [];
let profiles;

getUsers();

async function getUsers() {
  await getData();

  // now you can proceed further
  console.log(usersArray);
  profiles = profileIterator(usersArray);
  nextProfile();
  //Next Event
  document.getElementById("next").addEventListener("click", nextProfile);

  //usersArray.forEach(user => console.log(user.login+" "+user.type));
}

async function getData() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  data.forEach((element) => {
    usersArray.push(element);
  });
  // console.log(data);
  // console.log(usersArray);
}

function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    //console.log('button clicked');
    document.getElementById("profileDisplay").innerHTML = `
  <ul class="list-group">
  <li class="list-group-item">Name: ${currentProfile.login}
  <li class="list-group-item">Type: ${currentProfile.type}
  <li class="list-group-item">Url: ${currentProfile.html_url}
  </li>
  </ul>
  `;
    document.getElementById("imageDisplay").innerHTML = `
  <img src="${currentProfile.avatar_url}" width="500" height="600">`;
  } else {
    window.location.reload();
  }
}

function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// async function getUsers() {
//   let userArray = []
//     fetch('https://api.github.com/users')
//       .then(response => response.json())
//       .then(json => userArray = json.map(user => user.id));
//       //.catch((err) => console.log(err));

//       console.log(userArray);
//   }

// async function getUsers(){
//   const usrArr1 = [];
//   const usrArr2 = [];
//   const response = await fetch('https://api.github.com/users');
//   // only proceed once its resolved
//   const users = await response.json().then(usrs => usrArr1.push(usrs));
//   // only proceed once second promise is resolved
//   usrArr1.map(x => usrArr2.push[x]);
//   return usrArr2;
//  }

//console.log(data);
//data.map(x => console.log(x.id));
