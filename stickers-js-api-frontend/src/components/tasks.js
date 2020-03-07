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
    this.newTaskValue = document.getElementById('new-task-value')
    this.taskForm = document.getElementById('new-task-form')
    this.taskForm.addEventListener('submit', this.createTask.bind(this))
    this.tasksContainer.addEventListener('dblclick', this.handleTaskClick.bind(this))
    this.tasksContainer.addEventListener('blur', this.updateTask.bind(this), true)
  }

  createTask(event) {
    event.preventDefault()
    const name = this.newTaskName.value
    const value = this.newTaskValue.value

    this.adapter.createTask(name, value).then(task => {
      this.tasks.push(new Task(task))
      this.newTaskName.value = ''
      this.newTaskValue.value = ''
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
    debugger
    const li = event.target
    li.contentEditable = false
    li.classList.remove('editable')
    if (li.className == 'task-name-li') {
      const newName = li.innerHTML
      const newValue = li.nextElementSibling.innerHTML
      const id = li.dataset.id
      this.adapter.updateTask(newName, id, newValue)
    } else {
      const newName = li.previousElementSibling.innerHTML
      const newValue = li.innerHTML
      const id = li.dataset.id
      this.adapter.updateTask(newName, id, newValue)
    }
  }

  deleteTask(event) {
    const li = event.target
    const id = li.dataset.id
    this.adapter.deleteTask(id)
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
    this.tasksContainer.innerHTML = this.tasks.map(task => task.renderTaskName()).join('')
  }
}