class User {
  
    constructor(userObj) {
      this.id = userObj.user.id
      this.name = userObj.user.name
      this.email = userObj.user.email
      this.password = userObj.jwt
      this.avatar = userObj.user.avatar
      User.allUsers.push(this)
    }
  
    renderWelcomeUser() {
      return `<h1 data-id="${this.id}"> Welcome to Stickers ${this.name}!</h1>
              <img src="${this.avatar}">
             `
    }

    renderWelcomeUserBack() {
      return `<h1 data-id="${this.id}"> Welcome back to Stickers ${this.name}!</h1>
              <img src="${this.avatar}">
             `
    }

    renderUserProfile() {
      return `<img src="${this.avatar}"><br>
              <button class="edit" data-id="${this.id}" data-action="edit">Edit User ${this.name}</button>
              <button class="delete" data-id="${this.id}" data-action="delete">Delete User ${this.name}</button><br><br>
              <li data-id="${this.id}">Name: (${this.name})</li><br>
              <li data-id="${this.id}">Email: (${this.email})</li><br>
              <li data-id="${this.id}">Avatar Url: (${this.avatar})</li>
              `
    }
  }
  
  User.allUsers = []