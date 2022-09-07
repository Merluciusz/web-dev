document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJason);
document.getElementById("button3").addEventListener("click", getApiData);

function getText(e) {
  // To be used with a live service. will not accept a location on the disk
  fetch("test.txt")
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      document.getElementById("output").innerHTML = text;
    })
    .catch((err) => console.log(err));
}

function getJason(e) {
  // fetch('https://jsonplaceholder.typicode.com/todos/1').then(function(response){
  //     return response.text();
  // }).then(function(data){
  //     document.getElementById('output').innerHTML=`<p>${data}</p>`;
  //     console.log(data);

  // });

  // const post = {
  //     someName:'',s
  //     id:'',
  // }

  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      //console.log(data);
      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
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
