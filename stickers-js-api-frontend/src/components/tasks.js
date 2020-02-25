class Tasks {
  constructor() {
    this.tasks = []
    this.adapter = new TasksAdapter()
    //this.bindEventListeners()
    this.fetchAndLoadTasks()
  }

  fetchAndLoadTasks() {
    this.adapter.getTasks()
    .then(tasks => {
      tasks.forEach(task => this.tasks.push(task))
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    const tasksContainer = document.getElementById('tasks-container')
    tasksContainer.innerHTML = 'my tasks here'
  }
}