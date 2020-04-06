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
    if (userObj.errors == undefined) {
      this.id = userObj.user.id
      this.logged_in = userObj.user.logged_in
      this.name = userObj.user.name
      this.email = userObj.user.email
      this.password = userObj.user.password
      this.token = userObj.jwt
      this.avatar = userObj.user.avatar
      this.children = userObj.user.children
      this.parentTasks = userObj.user.parent_tasks
      this.childTasks = userObj.user.child_tasks
      User.allUsers.push(this)
    } else {
      this.errors = userObj.errors
    }
  }
  
  renderAdultUserErrors() {
    if (this.errors !== undefined) {
      if (this.errors.length == 4) {
        return `<h2 style="color:red">${this.errors[0]}</h2>
                <h2 style="color:red">${this.errors[1]}</h2>
                <h2 style="color:red">${this.errors[2]}</h2>
                <h2 style="color:red">${this.errors[3]}</h2>
          <button class="createAdultUserForm" data-id="${this.id}">Back to Create a new User</button>
          `
      } else if (this.errors.length == 3) {
        return `<h2 style="color:red">${this.errors[0]}</h2>
                <h2 style="color:red">${this.errors[1]}</h2>
                <h2 style="color:red">${this.errors[2]}</h2>
          <button class="createAdultUserForm" data-id="${this.id}">Back to Create a new User</button>
          `
      } else if (this.errors.length == 2) {
        return `<h2 style="color:red">${this.errors[0]}</h2>
                <h2 style="color:red">${this.errors[1]}</h2>
          <button class="createAdultUserForm" data-id="${this.id}">Back to Create a new User</button>
          `
      } else {
        return `<h2 style="color:red">${this.errors}</h2>
          <button class="createAdultUserForm" data-id="${this.id}">Back to Create a new User</button>
          `
      }
    }
  }

  renderChildUserErrors() {
    if (this.errors !== undefined) {
      if (this.errors.length == 4) {
        return `<h2 style="color:red">${this.errors[0]}</h2>
                <h2 style="color:red">${this.errors[1]}</h2>
                <h2 style="color:red">${this.errors[2]}</h2>
                <h2 style="color:red">${this.errors[3]}</h2>
          <button class="createChildUserForm" data-id="${this.id}">Back to Create a new User</button>
          `
      } else if (this.errors.length == 3) {
        return `<h2 style="color:red">${this.errors[0]}</h2>
                <h2 style="color:red">${this.errors[1]}</h2>
                <h2 style="color:red">${this.errors[2]}</h2>
          <button class="createChildUserForm" data-id="${this.id}">Back to Create a new User</button>
          `
      } else if (this.errors.length == 2) {
        return `<h2 style="color:red">${this.errors[0]}</h2>
                <h2 style="color:red">${this.errors[1]}</h2>
          <button class="createChildUserForm" data-id="${this.id}">Back to Create a new User</button>
          `
      } else {
        return `<h2 style="color:red">${this.errors}</h2>
          <button class="createChildUserForm" data-id="${this.id}">Back to Create a new User</button>
          `
      }
    }
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
            <li data-id="${this.id}">Name: ( ${this.name} )</li>
            <li data-id="${this.id}">Email: ( ${this.email} )</li>
            <li data-id="${this.id}">Avatar Url: ( ${this.avatar} )</li>
            <li data-id="${this.id}">Children: (${this.children} )</li>
            <li data-id="${this.id}">Tasks for Children: (${this.parentTasks} )</li>
            `
  }

  renderChildUserProfile() {
    return `<img src="${this.avatar}"><br>
            <button class="edit" data-id="${this.id}" data-action="edit">Edit User ${this.name}</button>
            <button class="delete" data-id="${this.id}" data-action="delete">Delete User ${this.name}</button><br><br>
            <li data-id="${this.id}">Name: (${this.name})</li>
            <li data-id="${this.id}">Email: (${this.email})</li>
            <li data-id="${this.id}">Avatar Url: (${this.avatar})</li>
            <li data-id="${this.id}">Current Tasks: (${this.childTasks})</li>
            `
  }
}
  
User.allUsers = []