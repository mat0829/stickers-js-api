class User {
  static findUser(id) {
    return this.allUsers.find((user) => user.id === id)
  }

  static updateChildUserPoints(updatedChildPointsData) {
    debugger
    const childUserToUpdate = this.findUser(updatedChildPointsData.id)
    childUserToUpdate.points = updatedChildPointsData.points
    childUserToUpdate.stickers = updatedChildPointsData.stickers
    return childUserToUpdate
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
    if (userObj.errors !== undefined) {
      this.errors = userObj.errors
    } else if (userObj.message !== undefined) {
      this.message = userObj.message
    } else {
      this.id = userObj.user.id
      this.logged_in = userObj.user.logged_in
      this.name = userObj.user.name
      this.email = userObj.user.email
      this.password = userObj.user.password
      this.token = userObj.jwt
      this.avatar = userObj.user.avatar
      this.points = userObj.user.points
      this.stickers =userObj.user.stickers
      this.children = userObj.user.children
      this.parentTasks = userObj.user.parent_tasks
      this.childTasks = userObj.user.child_tasks
      User.allUsers.push(this)
    }
  }

  renderLoginErrors() {
    return `<h2 style="color:red">${this.message}</h2>`
  }
  
  renderUserErrors(userType) {
    if (this.errors !== undefined) {
      if (this.errors.length == 4) {
        return `<h2 style="color:red">${this.errors[0]}</h2>
                <h2 style="color:red">${this.errors[1]}</h2>
                <h2 style="color:red">${this.errors[2]}</h2>
                <h2 style="color:red">${this.errors[3]}</h2>
          <button class="create${userType}UserForm">Back to Create a new User</button>
          `
      } else if (this.errors.length == 3) {
        return `<h2 style="color:red">${this.errors[0]}</h2>
                <h2 style="color:red">${this.errors[1]}</h2>
                <h2 style="color:red">${this.errors[2]}</h2>
          <button class="create${userType}UserForm">Back to Create a new User</button>
          `
      } else if (this.errors.length == 2) {
        return `<h2 style="color:red">${this.errors[0]}</h2>
                <h2 style="color:red">${this.errors[1]}</h2>
          <button class="create${userType}UserForm">Back to Create a new User</button>
          `
      } else {
        return `<h2 style="color:red">${this.errors}</h2>
          <button class="create${userType}UserForm">Back to Create a new User</button>
          `
      }
    }
  }

  renderWelcomeUser() {
    return `<h1> Welcome to Stickers ${this.name}!</h1>
            <img src="${this.avatar}">
           `
  }

  renderWelcomeUserBack() {
    return `<h1> Welcome back to Stickers ${this.name}!</h1>
            <img src="${this.avatar}">
           `
  }

  renderAdultUserProfile() {
    return `<img src="${this.avatar}"><br>
            <button class="edit" data-id="${this.id}" data-action="edit">Edit User ${this.name}</button>
            <button class="delete" data-id="${this.id}" data-action="delete">Delete User ${this.name}</button><br><br>
            <li>Name: ( ${this.name} )</li>
            <li>Email: ( ${this.email} )</li>
            <li>Avatar Url: ( ${this.avatar} )</li>
            <li>Children: (${this.children} )</li>
            <li>Tasks for Children: (${this.parentTasks} )</li>
            `
  }

  renderChildUserProfile() {
    return `<img src="${this.avatar}"><br>
            <button class="edit" data-id="${this.id}" data-action="edit">Edit User ${this.name}</button>
            <button class="delete" data-id="${this.id}" data-action="delete">Delete User ${this.name}</button><br><br>
            <li>Name: (${this.name})</li>
            <li>Email: (${this.email})</li>
            <li>You currently have: (${this.points}) Sticker Points</li>
            <li>Current Tasks: (${this.childTasks})</li>
            `
  }

  renderPointsRedemption() {
    const collectedSticker = this.stickers[this.stickers.length - 1]
    return `<h1>Congratulations ${this.name}!</h1>
            <img src="${this.avatar}">
            <h2>You now have: ${this.points} Sticker Points!</h2>
            <h2>You have also added:</h2>
            <img src="${collectedSticker}" width='150px' height='150px'>
            <h2>to your Sticker Collection!</h2>
    `
  }
}
  
User.allUsers = []