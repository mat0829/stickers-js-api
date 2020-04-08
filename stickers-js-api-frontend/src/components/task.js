class Task {

  static findTask(id) {
    return this.allTasks.find((task) => task.id === id) //`this` will be Task when invoked like -> Task.findTask(1)
  }

  static updateTask(updatedTaskData) {
    const taskToUpdate = this.findTask(updatedTaskData.id) // if we invoke Task.updateTask(newTaskJSON), `this` will be Task class
    taskToUpdate.name = updatedTaskData.name
    taskToUpdate.value = updatedTaskData.value
    taskToUpdate.image = updatedTaskData.image
    taskToUpdate.completed = updatedTaskData.completed
    taskToUpdate.stickerImage = updatedTaskData.stickerImage
    return taskToUpdate //return the updated task instance for method chaining; taskToUpdate.renderDetails() etc
  }

  constructor(taskObj) {
    this.id = taskObj.id
    this.errors = taskObj.errors
    this.name = taskObj.name
    this.value = taskObj.value
    this.completed = taskObj.completed
    this.image = taskObj.image
    this.parent = taskObj.parent
    this.child = taskObj.child
    this.stickerImage = taskObj.stickerImage
    Task.allTasks.push(this)
  }

  renderSpan() {
    return `<span data-id="${this.id}">${this.name}</span>`
  }

  renderAdultDetails() {
    if (this.errors !== undefined) {
      
      if (this.errors.length == 3) {
        return `<h2 style="color:red">${this.errors[0]}</h2>
                <h2 style="color:red">${this.errors[1]}</h2>
                <h2 style="color:red">${this.errors[2]}</h2>
          <button class="createTaskForm" data-id="${this.id}">Back to Create a new Task</button>
          `
      } else if (this.errors.length == 2) {
        return `<h2 style="color:red">${this.errors[0]}</h2>
                <h2 style="color:red">${this.errors[1]}</h2>
          <button class="createTaskForm" data-id="${this.id}">Back to Create a new Task</button>
          `
      } else {
        return `<h2 style="color:red">${this.errors}</h2>
          <button class="createTaskForm" data-id="${this.id}">Back to Create a new Task</button>
          `
      }
    }
    if (this.completed == true) {
      const isTaskCompletedString = `${this.child} completed: "${this.name}"!`
      return `<h2>${this.name}</h2>
          <img src="${this.image}">
          <h4>~ Created by: ${this.parent}</h4>
          <h2>Sticker Reward:</h2>
          <img src="${this.stickerImage}" width='100px' height='100px'>
          <h2>Value: ${this.value} Points!</h2>
          <h2>${isTaskCompletedString}</h2>
          <button class="edit" data-id="${this.id}" data-action="edit">Edit this Task!</button>
          <button class="delete" data-id="${this.id}" data-action="delete">Delete this Task!</button>
          <button class="top" data-id="${this.id}">Top of Page</button>
          `
    } else {
      const isTaskCompletedString = `${this.child} is currently working on: "${this.name}"`
      return `<h1>"${this.name}"</h1>
          <h3>~ Created by: ${this.parent}</h3>
          <img src="${this.image}"><br>
          <h2>Sticker Reward:</h2>
          <img src="${this.stickerImage}" width='100px' height='100px'>
          <h2>Value: ${this.value} Points!</h2>
          <h2>${isTaskCompletedString}</h2>
          <button class="edit" data-id="${this.id}" data-action="edit">Edit this Task!</button>
          <button class="delete" data-id="${this.id}" data-action="delete">Delete this Task!</button><br><br>
          <button class="top" data-id="${this.id}">Top of Page</button>
          `
    }
  }

  renderChildDetails() {
    if (this.completed == true) {
      const isTaskCompletedString = `You completed: "${this.name}"!`
      return `<h2>${this.name}</h2>
          <img src="${this.image}">
          <h4>~ Created by: ${this.parent}</h4>
          <h2>Sticker Reward:</h2>
          <img src="${this.stickerImage}" width='100px' height='100px'>
          <h2>Value: ${this.value} Points!</h2>
          <h2>${isTaskCompletedString}</h2>
          <button class="top" data-id="${this.id}">Top of Page</button>
          `
    } else {
      const isTaskCompletedString = `You are currently working on: "${this.name}"`
      return `<h1>"${this.name}"</h1>
          <h3>~ Created by: ${this.parent}</h3>
          <img src="${this.image}">
          <h2>Sticker Reward:</h2>
          <img src="${this.stickerImage}" width='100px' height='100px'>
          <h2>Value: ${this.value} Points!</h2>
          <h2>${isTaskCompletedString}</h2>
          <button class="top" data-id="${this.id}">Top of Page</button>
          `
    }
  }
}

Task.allTasks = []