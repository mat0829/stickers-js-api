class Tasks {
  constructor() {
    this.tasks = []
    this.adapter = new TasksAdapter()
    this.InitBindingsAndEventListeners()
    this.fetchAndLoadTasks()
  }

  InitBindingsAndEventListeners() {
    this.tasksContainer = document.getElementById('tasks-container')
    this.newTaskName = document.getElementById('new-task-name')
    this.taskForm = document.getElementById('new-task-form')
    this.taskForm.addEventListener('submit', this.createTask.bind(this))
  }

  createTask(event) {
    event.preventDefault()
    const value = this.newTaskName.value

    this.adapter.createTask(value).then(task => {
      this.tasks.push(new Task(task))
      this.newTaskName.value = ''
      this.render()
    })
  }

  fetchAndLoadTasks() {
    this.adapter.getTasks()
    .then(tasks => {
      tasks.forEach(task => this.tasks.push(new Task(task)))
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    this.tasksContainer.innerHTML = this.tasks.map(task => task.renderLi()).join('')
  }
}