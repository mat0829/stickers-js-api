class Tasks {
  constructor() {
    this.tasks = []
    this.adapter = new TasksAdapter()
    this.InitBindingsAndEventListeners()
    this.fetchAndLoadTasks()
  }

  InitBindingsAndEventListeners() {
    this.homeButton = document.getElementById('home-btn').addEventListener('click', this.refreshPage.bind(this))
    this.tasksContent = document.getElementById('tasks-content')
    this.tasksContainer = document.getElementById('tasks-container')
    this.tasksIndexBtn = document.getElementById('tasks-index-btn').addEventListener('click', this.hideTasks.bind(this))
    this.newTaskName = document.getElementById('new-task-name')
    this.newTaskValue = document.getElementById('new-task-value')
    this.taskForm = document.getElementById('new-task-form').addEventListener('submit', this.createTask.bind(this))
    this.createTaskBtn = document.getElementById('create-task-btn').addEventListener('click', this.hideTaskForm.bind(this))
    
    this.showTask = document.getElementById('show-task')
    this.tasksContent.addEventListener('dblclick', this.handleTaskClick.bind(this))
    //this.tasksContent.addEventListener('blur', this.updateTask.bind(this), true)
  }

  hideTaskForm() {
    const formElement = document.getElementById('new-task-container')
    if (formElement.style.display === 'none') {
      formElement.style.display = 'block'
    } else {
      formElement.style.display = 'none'
    }
  }

  hideTasks() {
    const tasksElement = document.getElementById('tasks-content')
    if (tasksElement.style.display === 'none') {
      tasksElement.style.display = 'block'
    } else {
      tasksElement.style.display = 'none'
    }
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
    this.getTask(event)
  }

  getTask(event) {
    const id = event.target.dataset.id
    this.adapter.getTask(id)
    .then(task => {
      task
      this.renderTask(task)
    })
  }

  updateTask(event) {
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

  renderTask(task) {
    let html = `<h1>${task.task_name}</h1>` +
    `<h2>Task Value: ${task.task_value} Sticker Points!</h2>` +
    `<h3>Task is completed? ${task.completed}</h3>`
    this.showTask.innerHTML = html
  }

  refreshPage() {
    window.location.reload(false)
  }

  render() {
    this.tasksContainer.innerHTML = this.tasks.map(task => task.renderTaskName()).join('')
  }
}