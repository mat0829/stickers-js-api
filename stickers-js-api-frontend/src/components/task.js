class Task {

  static findTask(id) {
    return this.allTasks.find((task) => task.id === id) // Find Task by passed in id
  }

  static updateTask(updatedTaskData) {
    const taskToUpdate = this.findTask(updatedTaskData.id)
    // Update attributes
    taskToUpdate.name = updatedTaskData.name
    taskToUpdate.value = updatedTaskData.value
    taskToUpdate.image = updatedTaskData.image
    taskToUpdate.completed = updatedTaskData.completed
    taskToUpdate.stickerImage = updatedTaskData.stickerImage
    return taskToUpdate // Return the updated Task instance
  }

  constructor(taskObj) {
    this.id = taskObj.id
    this.errors = taskObj.errors
    this.name = taskObj.name
    this.value = taskObj.value
    this.completed = taskObj.completed
    this.image = taskObj.image
    this.taskParent = taskObj.task_parent
    this.taskChild = taskObj.task_child
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
                <button class="createTaskForm">Back to Create a new Task</button>
                `
      } else if (this.errors.length == 2) {
          return `<h2 style="color:red">${this.errors[0]}</h2>
                  <h2 style="color:red">${this.errors[1]}</h2>
                  <button class="createTaskForm">Back to Create a new Task</button>
                  `
      } else {
          return `<h2 style="color:red">${this.errors}</h2>
                  <button class="createTaskForm">Back to Create a new Task</button>
                  `
      }
    }
    if (this.completed && this.value == 0) {
      const isTaskCompletedString = `${this.taskChild.name} collected the Reward for: "${this.name}"!`

      return `<h2>${isTaskCompletedString}</h2>
              <img src="${this.image}" width='250px' height='125px'><br><br>
              <button class="edit" data-id="${this.id}" data-action="edit">Edit this Task!</button>
              <button class="delete" data-id="${this.id}" data-action="delete">Delete this Task!</button><br><br>
              <button class="createTaskForm">Create another new Task</button><br><br>
              <button class="top">Top of Page</button><br><br>
              `
    } else if (this.completed) {
        const isTaskCompletedString = `${this.taskChild.name} completed: "${this.name}"!`

        return `<h2>${isTaskCompletedString}</h2>
                <img src="${this.image}" width='250px' height='125px'>
                <h4>~ Created by: ${this.taskParent.name}</h4>
                <h2>Sticker Reward:</h2>
                <img src="${this.stickerImage}" width='150px' height='150px'>
                <h2>Value: ${this.value} Sticker Points!</h2>
                <button class="edit" data-id="${this.id}" data-action="edit">Edit this Task!</button>
                <button class="delete" data-id="${this.id}" data-action="delete">Delete this Task!</button><br><br>
                <button class="createTaskForm">Create another new Task</button><br><br>
                <button class="top">Top of Page</button><br><br>
                `
    } else {
        const isTaskCompletedString = `${this.taskChild.name} is currently working on: "${this.name}"`

        return `<h2>${isTaskCompletedString}</h2>
                <img src="${this.image}" width='250px' height='125px'>
                <h4>~ Created by: ${this.taskParent.name}</h4>
                <h2>Sticker Reward:</h2>
                <img src="${this.stickerImage}" width='150px' height='150px'>
                <h2>Value: ${this.value} Sticker Points!</h2>
                <button class="edit" data-id="${this.id}" data-action="edit">Edit this Task!</button>
                <button class="delete" data-id="${this.id}" data-action="delete">Delete this Task!</button><br><br>
                <button class="createTaskForm">Create another new Task</button><br><br>
                <button class="top">Top of Page</button><br><br>
                `
    }
  }

  renderChildDetails() {
    if (this.completed && this.value == 0) {
      const isTaskCompletedString = `You completed: "${this.name}"!`

      return `<h2>${isTaskCompletedString}</h2>
              <img src="${this.image}" width='250px' height='125px'>
              <h4>~ Created by: ${this.taskParent.name}</h4>
              `
    } else if (this.completed) {
        const isTaskCompletedString = `You completed: "${this.name}"!`

        return `<h2>${isTaskCompletedString}</h2>
                <img src="${this.image}" width='250px' height='125px'>
                <h4>~ Created by: ${this.taskParent.name}</h4>
                <h2>Sticker Reward:</h2>
                <img src="${this.stickerImage}" width='150px' height='150px'>
                <h2>Value: ${this.value} Sticker Points!</h2>
                <button class="collectStickerPoints" data-id="${this.id}">Collect your points</button><br><br>
                <button class="top">Top of Page</button>
                `
    } else {
        const isTaskCompletedString = `You are currently working on: "${this.name}"`

        return `<h2>${isTaskCompletedString}</h2>
                <img src="${this.image}" width='250px' height='125px'>
                <h4>~ Created by: ${this.taskParent.name}</h4>
                <h2>Sticker Reward:</h2>
                <img src="${this.stickerImage}" width='150px' height='150px'>
                <h2>Value: ${this.value} Sticker Points!</h2>
                <button class="top">Top of Page</button>
                `
    }
  }
}

Task.allTasks = []