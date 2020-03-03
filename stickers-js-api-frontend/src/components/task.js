class Task {
  constructor(taskObj) {
    this.id = taskObj.id
    this.taskName = taskObj.task_name
    this.taskValue = taskObj.sticker_value
  }

  renderTask() {
    return `<li data-id=${this.id}> ${this.taskName}
              <ul id="task-values-ul">
                <li data-id=${this.id}> Worth (${this.taskValue} Sticker Points!) </li>
              </ul>
            </li><br>`
  }
}