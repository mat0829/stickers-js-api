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
    return taskToUpdate //return the updated task instance for method chaining; taskToUpdate.renderDetails() etc
  }

  constructor(taskObj) {
    this.id = taskObj.id
    this.name = taskObj.name
    this.value = taskObj.value
    this.completed = taskObj.completed
    this.image = taskObj.image
    this.taskGiverId = taskObj.taskGiverId
    this.taskReceiverId = taskObj.taskReceiverId
    Task.allTasks.push(this)
  }

  renderSpan() {
    return `<span data-id="${this.id}">${this.name}</span>`
  }

  renderDetails() {
    if (this.completed == true) {
      const isTaskCompletedString = "(Task is complete!)"
      return `<img src="${this.image}">
          <h2>${this.name}</h2>
          <h3>Worth ${this.value} Sticker Points!</h3>
          <h2>${isTaskCompletedString}</h2>
          <button class="edit" data-id="${this.id}" data-action="edit">Edit this Task!</button>
          <button class="delete" data-id="${this.id}" data-action="delete">Delete this Task!</button>
          `
    } else {
      const isTaskCompletedString = "(Currently working on Task)"
      return `<img src="${this.image}">
          <h2>${this.name}</h2>
          <h3>Worth ${this.value} Sticker Points!</h3>
          <h2>${isTaskCompletedString}</h2>
          <button class="edit" data-id="${this.id}" data-action="edit">Edit this Task!</button>
          <button class="delete" data-id="${this.id}" data-action="delete">Delete this Task!</button>
          `
    }
  }
}

Task.allTasks = []