document.getElementById("getuser").addEventListener("click", getUser);
document.getElementById("getusers").addEventListener("click", getUsers);
document.getElementById("button3").addEventListener("click", getApiData);

const ui = new UI();

async function getUser(e) {
  // To be used with a live service. will not accept a location on the disk
  const user = document.getElementById("userinput").value;
  if (user !== "") {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    const profile = await profileResponse
      .json()
      .then(user => ui.showProfile(user));
      console.log(typeof profile);
  }
  
  //   fetch(`https://api.github.com/users/${user}`)
  //     .then(response => response.json())
  //     .then(user => document.getElementById("output").innerHTML = `<li>${user.login}</li><li>${user.id}</li><li>${user.url}</li>`)
  //     .catch(err => console.log(err));
}

async function getUsers(e) {

  // http://localhost:8080/api/posts
  // `http://172.23.40.11:8080/api/posts`

  // const profileResponse = await fetch(`https://api.github.com/users`);
  // const profiles = await profileResponse.json().then(users => ui.showProfiles(users));


  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(users => ui.showProfiles(users))
    .catch((err) => console.log(err));
}

function getApiData(e) {
  fetch("https://api.github.com/users")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = "";
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}
