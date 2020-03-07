class Task {
  constructor(taskObj) {
    this.id = taskObj.id
    this.taskName = taskObj.task_name
    this.taskValue = taskObj.task_value
    this.taskCompleted = taskObj.completed
  }

  renderTaskName() {
    return `<li class='task-name-li' data-id=${this.id}>${this.taskName}</li>
            <li class='task-value-li' data-id=${this.id}>${this.taskValue}</li><br>`
  }
}