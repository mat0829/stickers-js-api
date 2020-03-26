class User {
  static findUser(id) {
    return this.allUsers.find((user) => user.id === id)
  }

  static updateUser(updatedUserData) {
    const userToUpdate = this.findUser(updatedUserData.id)
    userToUpdate.name = updatedUserData.name
    userToUpdate.email = updatedUserData.email
    userToUpdate.password = updatedUserData.password
    userToUpdate.avatar = updatedUserData.avatar
    return userToUpdate
  }

  constructor(userObj) {
    this.id = userObj.user.id
    this.name = userObj.user.name
    this.email = userObj.user.email
    this.password = userObj.user.password
    this.token = userObj.jwt
    this.avatar = userObj.user.avatar
    this.children = userObj.user.children
    this.tasks = userObj.user.parent_tasks
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

  renderAdultUserProfile() {
    return `<img src="${this.avatar}"><br>
            <button class="edit" data-id="${this.id}" data-action="edit">Edit User ${this.name}</button>
            <button class="delete" data-id="${this.id}" data-action="delete">Delete User ${this.name}</button><br><br>
            <li data-id="${this.id}">Name: (${this.name})</li><br>
            <li data-id="${this.id}">Email: (${this.email})</li><br>
            <li data-id="${this.id}">Avatar Url: (${this.avatar})</li><br>
            <li data-id="${this.id}">Children: (${this.children})</li><br>
            <li data-id="${this.id}">Tasks for Children: (${this.tasks})</li><br>
            `
  }

  renderUserProfile() {
    return `<img src="${this.avatar}"><br>
            <button class="edit" data-id="${this.id}" data-action="edit">Edit User ${this.name}</button>
            <button class="delete" data-id="${this.id}" data-action="delete">Delete User ${this.name}</button><br><br>
            <li data-id="${this.id}">Name: (${this.name})</li><br>
            <li data-id="${this.id}">Email: (${this.email})</li><br>
            <li data-id="${this.id}">Avatar Url: (${this.avatar})</li><br>
            <li data-id="${this.id}">Children: (${this.children})</li><br>
            <li data-id="${this.id}">Tasks for Children: (${this.tasks})</li><br>
            `
  }
}
  
User.allUsers = []