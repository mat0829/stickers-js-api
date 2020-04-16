class TaskImage {
  // `static` creates a 'class' method; TaskImage.methodName()
  static findTaskImage(id) {
    return this.allTaskImages.find((taskImage) => taskImage.id === id) //`this` will be TaskImage when invoked like -> TaskImage.findTaskImage(1)
  }

  static updateTaskImage(updatedTaskImageData) {
    const taskImageToUpdate = this.findTaskImage(updatedTaskImageData.id) // if we invoke TaskImage.updateTaskImage(newTaskImageJSON), `this` will be TaskImage class
    taskImageToUpdate.image = updatedTaskImageData.imageUrl
    return taskImageToUpdate //return the updated taskImage instance for method chaining; taskImageToUpdate.renderDetails() etc
  }

  constructor(taskImageDataObj) {
    this.id = taskImageDataObj.id
    this.imageUrl = taskImageDataObj.imageUrl
    TaskImage.allTaskImages.push(this)
  }

  renderTaskImageCollection() {
    return `<span data-id="${this.id}"><img src="${this.imageUrl}" data-id="${this.id}"></span>`
  }

  renderTaskImageDetails() {
    return `<img src="${this.imageUrl}"><br>
            <button class="topOfTaskImages" data-id="${this.id}">Select a Different TaskImage</button>
          `
  }
}

TaskImage.allTaskImages = []