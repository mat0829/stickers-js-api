class User {
  
    constructor(userObj) {
      this.id = userObj.user.id
      this.name = userObj.user.name
      this.email = userObj.user.email
      this.password = userObj.password
      this.avatar = userObj.user.avatar
      User.allUsers.push(this)
    }
  
    renderUser() {
      return `<h1 data-id="${this.id}"> Welcome to Stickers ${this.name}!</h1>
              <img src="${this.avatar}">
             `
    }
  }
  
  User.allUsers = []