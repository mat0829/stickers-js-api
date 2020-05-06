class TaskImage {
  
  static findTaskImage(id) {
    return this.allTaskImages.find((taskImage) => taskImage.id === id) // Find TaskImage by passed in id
  }

  static updateTaskImage(updatedTaskImageData) {
    const taskImageToUpdate = this.findTaskImage(updatedTaskImageData.id)
    // Update attributes
    taskImageToUpdate.image = updatedTaskImageData.imageUrl

    return taskImageToUpdate // Return the updated TaskImage instance
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
            <button class="topOfTaskImages" data-id="${this.id}">Select a Different Task Image</button>
            `
  }
}

TaskImage.allTaskImages = []