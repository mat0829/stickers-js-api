class Task {
  constructor(taskJSON) {
    this.id = taskJSON.id
    this.task_name = taskJSON.task_name
  }

  renderLi() {
    return `<li>${this.task_name}</li>`
  }
}