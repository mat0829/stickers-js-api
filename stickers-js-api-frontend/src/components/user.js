class User {

    static findUser(id) {
      return this.allUsers.find((user) => user.id === id) //`this` will be User when invoked like -> User.findUser(1)
    }

    static parseJwt (token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  
      return JSON.parse(jsonPayload);
  };
  
    constructor(userObj) {
      this.id = userObj.user.id
      this.name = userObj.user.name
      this.email = userObj.user.email
      this.password = userObj.jwt
      this.avatar = userObj.user.avatar
      User.allUsers.push(this)
    }
  
    renderUser() {
      return `<img src="${this.avatar}">
             <h1 data-id="${this.id}"> Welcome to Stickers ${this.name}!</h1>
             `
    }

  }
  
  User.allUsers = []