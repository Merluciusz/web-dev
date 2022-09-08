class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
    <li>${user.login}</li>
    <li>${user.id}</li>
    <li>${user.url}</li>`;
  }

  showProfiles(users) {
    let usersArr = users;
    //console.log(typeof users)
    for(let i=0; i< users.length; i++){
        console.log(usersArr[i]);
        this.profile.innerHTML = usersArr[i].login;
        
    }
   
  }
}
