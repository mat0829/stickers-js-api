class Tasks {
  constructor() {
    this.tasks = []
    this.adapter = new TasksAdapter()
    this.InitBindingsAndEventListeners()
    this.fetchAndLoadTasks()
  }

  InitBindingsAndEventListeners() {
    this.tasksContainer = document.getElementById('tasks-container')
    this.tasksContent = document.querySelector('ul')
    this.newTaskName = document.getElementById('new-task-name')
    this.taskForm = document.getElementById('new-task-form')
    this.taskForm.addEventListener('submit', this.createTask.bind(this))
    this.tasksContainer.addEventListener('dblclick', this.handleTaskClick.bind(this))
    this.tasksContent.addEventListener('blur', this.updateTask.bind(this), true)
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

  handleTaskClick() {
    this.toggleTask(event)
  }

  toggleTask(event) {
    const li = event.target
    li.contentEditable = true
    li.focus()
    li.classList.add('editable')
  }

  updateTask(event) {
    const li = event.target
    li.contentEditable = false
    li.classList.remove('editable')
    const newValue = li.innerHTML
    const id = li.dataset.id
    this.adapter.updateTask(newValue, id)
  }

  fetchAndLoadTasks() {
    this.adapter.getTasks()
    .then(tasks => {
      tasks.sort((a, b) => a.id - b.id).forEach(task => this.tasks.push(new Task(task)))
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    this.tasksContainer.innerHTML = this.tasks.map(task => task.renderLi()).join('')
  }
}