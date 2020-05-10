class User {

  static findUser(id) {
    return this.allUsers.find((user) => user.id === id) // Find User by passed in id
  }

  static updateChildUserPoints(updatedChildPointsData) {
    const childUserToUpdate = this.findUser(updatedChildPointsData.id)
    // Update attributes
    childUserToUpdate.points = updatedChildPointsData.points
    childUserToUpdate.stickers = updatedChildPointsData.stickers

    return childUserToUpdate // Return the updated Child User instance
  }

  static updateChildUserPointsSpent(updatedChildPointsData) {
    const childUserToUpdate = this.findUser(updatedChildPointsData.id)
    // Update attributes
    childUserToUpdate.points = updatedChildPointsData.points
    childUserToUpdate.prizes = updatedChildPointsData.prizes

    return childUserToUpdate // Return the updated Child User instance
  }

  static updateUser(updatedUserData) {
    const userToUpdate = this.findUser(updatedUserData.id)
    // Update attributes
    userToUpdate.name = updatedUserData.name
    userToUpdate.email = updatedUserData.email
    userToUpdate.password = updatedUserData.password
    userToUpdate.avatar = updatedUserData.avatar

    return userToUpdate // Return the User instance
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
        this.parentPrizes = userObj.user.parent_prizes
        this.childPrizes = userObj.user.child_prizes
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
    let tasksForChildren = []
    let purchasedPrizes = []

    if (this.parentTasks.length !== 0) {
      this.parentTasks.forEach(function(task) {
        tasksForChildren.push(task)
      })
    } else {
        tasksForChildren = 'You have created 0 tasks.'
    }

    const prizesForChildren = this.parentPrizes

    let childNames = '<div>' // 1st half of childNames unordered list

    if (this.children.length !== 0) {
      this.children.forEach(function(child) {
        let currentTasks = '<ul>'
        let completedTasks = '<ul>'

        tasksForChildren.forEach(function(task) {
          if (task.taskReceiverId == child.id && task.completed == false) { // Only non-completed tasks with the child.id
            currentTasks += `<li>${task.name}</li>`
          } else if (task.taskReceiverId == child.id && task.completed == true) {
            completedTasks += `<li> ${child.name} has completed "${task.name}"</li>`
          }
        })
        
        if (currentTasks == '<ul>') {
          currentTasks += `<li>${child.name} does not currently have any Tasks.</li></ul>`
        } else {
          currentTasks += '</ul>'
        }

        if (completedTasks == '<ul>') {
          completedTasks += `<li>${child.name} has not completed any Tasks.</li></ul>`
        } else {
          completedTasks += '</ul>'
        }

        prizesForChildren.forEach(function(prize) {
          if (prize.prizeReceiverId == child.id && prize.purchased == true) { // Only allowing prizes with the child.id
            if (!purchasedPrizes.includes(child.name)) {
              purchasedPrizes += `${child.name} has purchased the Prize: "${prize.name}"`
            }
          }
        })
        
        if (!childNames.includes(child.name)) { // Checking for duplicate child names
          childNames += `<span><h2>${child.name}</h2>
                         <img src="${child.avatar}" width='150px' height='150px'>
                         <h3>Sticker Points: ${child.points}</h3>
                         <h2>Current Tasks:</h2>
                         ${currentTasks}<br>
                         <h2>Completed Tasks:</h2>
                         ${completedTasks}
                         </span>`
        }
      })
    } else {
        childNames += '<li>' + 'You currently have 0 children.' + '</li>'
    }
    
    if (purchasedPrizes.length !== 0) {
      alert(purchasedPrizes)
    }

    childNames += '</div>' // 2nd half of childNames unordered list
    
    return `<h1>${this.name}</h1>
            <img src="${this.avatar}"><br>
            <button class="edit" data-id="${this.id}" data-action="edit">Edit User ${this.name}</button>
            <button class="delete" data-id="${this.id}" data-action="delete">Delete User ${this.name}</button><br><br>
            <button class="saveAvatar" data-id="${this.id}" data-action="saveAvatar">Save Current Avatar</button><br>
            
            <h1>Children:</h1>
            ${childNames}<br>
            <button class="top">Top of Page</button><br><br>
            `
  }

  renderChildUserProfile() {
    let currentTasks = '<ul>' // 1st half of currentTasks unordered list
    let completedTasks = '<ul>' // 1st half of currentTasks unordered list

    if (this.childTasks.length !== 0) {
      this.childTasks.forEach(function(task) {
        if (task.completed == false) {
          currentTasks += `<li>${task.name}</li>` // add line items to currentTasks list
        } else if (task.value !== 0) {
            let completedTaskWithPoints = `${task.name}` // assign to completed task with points for collecting
            alert(`You have completed the Task: "${completedTaskWithPoints}"! \n\nGo to the Tasks page to collect your rewards!`)
        } else if (task.completed == true) {
          completedTasks += `<li>${task.name}</li>` // add line items to completedTasks list
        }
      })
    } else if (currentTasks == '<ul>') {
        currentTasks += '<li>'+'You currently have 0 tasks. Ask your parent(s) to create some for you.'+'</li>' // add if 0 tasks
    }
    
    currentTasks += '</ul>' // 2nd half of currentTasks unordered list
    if (completedTasks == '<ul>') {
      completedTasks += '<li>'+'You have not completed any Tasks.'+'</li>'
    } else {
      completedTasks += '</ul>' // 2nd half of completedTasks unordered list
    }

    return `<h1>${this.name}</h1>
            <img src="${this.avatar}"><br>
            <h2>Sticker Points: ${this.points}</h2>
            <h2>Stickers: ${this.stickers.length}</h2>
            <button class="edit" data-id="${this.id}" data-action="edit">Edit User ${this.name}</button>
            <button class="delete" data-id="${this.id}" data-action="delete">Delete User ${this.name}</button><br><br>
            <button class="saveAvatar" data-id="${this.id}" data-action="saveAvatar">Save Current Avatar</button><br>

            <h1>Current Tasks:</h1>
            ${currentTasks}
            <h1>Completed Tasks:</h1>
            ${completedTasks}<br>
            <button class="top">Top of Page</button><br><br>
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