// Only job is to communicate with the Rails api

class TasksAdapter {
  constructor() {
      this.baseUrl = "http://localhost:3000/api/v1/tasks"
  }

  getTasks() {
    return fetch(this.baseUrl)
    .then(response => response.json())
  }
}

adapter = new TasksAdapter()

const tasks = adapter.getTasks()