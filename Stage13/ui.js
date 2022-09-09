class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    //console.log(user);
    let output = "";
    output += `<div clas="card card-body mb-2">
    <div class="row">
    <div class="col-md-6">
    <li>${user.login}</li>
    <li>${user.id}</li>
    <li>${user.html_url}</li>
    </div>
    <div class="col-md-6">
    <img src="${user.avatar_url}" width="200">
    </div>
    </div>
</div>`;  
    this.profile.innerHTML = output;
  }

  showProfiles(users) {
    let output = "";
    let usersArr = users;
    usersArr.forEach((element) => {
      output += `<div clas="card card-body mb-2">
              <div class="row">
              <div class="col-md-6">
              ${element.login}
              ${element.type}
              ${element.url}
              </div>
              <div class="col-md-6">
              <img src="${element.avatar_url}" width="200">
              </div>
              </div>
      </div>`;
    });
    this.profile.innerHTML = output;
    //console.log(typeof users)
    // for(let i=0; i< users.length; i++){
    //     console.log(usersArr[i]);
    //     this.profile.innerHTML = usersArr[i].login;

    // }
  }
}
