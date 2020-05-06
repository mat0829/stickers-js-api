class User {
  static findUser(id) {
    return this.allUsers.find((user) => user.id === id)
  }

  static updateChildUserPoints(updatedChildPointsData) {
    const childUserToUpdate = this.findUser(updatedChildPointsData.id)
    childUserToUpdate.points = updatedChildPointsData.points
    childUserToUpdate.stickers = updatedChildPointsData.stickers
    return childUserToUpdate
  }

  static updateChildUserPointsSpent(updatedChildPointsData) {
    const childUserToUpdate = this.findUser(updatedChildPointsData.id)
    childUserToUpdate.points = updatedChildPointsData.points
    childUserToUpdate.prizes = updatedChildPointsData.prizes
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
      this.stickers = userObj.user.stickers
      this.prizes = userObj.user.prizes
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

  renderAdultUserProfile() {
    let childNames = '<ul>' // 1st half of childNames unordered list

    if (this.children.length !== 0) {
      this.children.forEach(function(child) {
        debugger
        if (!childNames.includes(child.name)) { // Checking for duplicate child names
          childNames += `<li>${child.name}</li>` // add line items to childNames list
        }
      })
    } else {
      childNames += '<li>'+  'You currently have 0 children. Create a new Task to add children.' + '</li>'
    }
    childNames += '</ul>' // 2nd half of childNames unordered list

    let tasksForChildren = '<ul>' // 1st half of tasksForChildren unordered list

    if (this.parentTasks.length !== 0) {
      this.parentTasks.forEach(function(task) {
        tasksForChildren += `<li>${task.name}</li>` // add line items to tasksForChildren list
      })
    } else {
      tasksForChildren += '<li>'+  'You currently have 0 tasks. Create child user(s) to create Tasks.' + '</li>'
    }
    tasksForChildren += '</ul>' // 2nd half of tasksForChildren unordered list
    
    return `<h1>${this.name}</h1>
            <img src="${this.avatar}"><br>
            <button class="edit" data-id="${this.id}" data-action="edit">Edit User ${this.name}</button>
            <button class="delete" data-id="${this.id}" data-action="delete">Delete User ${this.name}</button><br>
            
            <h2>Children:</h2>
            ${childNames}
            <h1>Tasks Given:</h1>
            ${tasksForChildren}
            `
  }

  renderChildUserProfile() {
    let currentTasks = '<ul>' // 1st half of currentTasks unordered list

    if (this.childTasks.length !== 0) {
      this.childTasks.forEach(function(task) {
        if (task.completed == false) {
          currentTasks += `<li>${task.name}</li>` // add line items to currentTasks list
        } else if (task.value !== 0) {
          let completedTaskWithPoints = `${task.name}` // assign to completed task with points for collecting
          alert(`You have completed the Task: "${completedTaskWithPoints}"! \n\nGo to the Tasks page to collect your rewards!`)
        }
      })
    } else {
      currentTasks += '<li>'+'You currently have 0 tasks. Ask your parent(s) to create some for you.'+'</li>' // add if 0 tasks
    }
    currentTasks += '</ul>' // 2nd half of currentTasks unordered list

    return `<h1>${this.name}</h1>
            <img src="${this.avatar}"><br>
            <h2>Sticker Points: ${this.points}</h2>
            <h3>Stickers: ${this.stickers.length}</h3>
            <button class="edit" data-id="${this.id}" data-action="edit">Edit User ${this.name}</button>
            <button class="delete" data-id="${this.id}" data-action="delete">Delete User ${this.name}</button><br>

            <h1>Current Tasks: </h1>
            ${currentTasks}
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
            <button class="top">Top of Page</button>
            `
  }

  renderPrizePurchase() {
    const collectedPrize = this.prizes[this.prizes.length - 1]
    return `<h1>Congratulations ${this.name}!</h1>
            <img src="${this.avatar}">
            <h2>You have purchased:</h2>
            <img src="${collectedPrize}"><br><br>
            <button class="top">Top of Page</button><br><br>
           `
  }
}
  
User.allUsers = []