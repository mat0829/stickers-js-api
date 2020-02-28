// Only job is to communicate with the Rails api
class TasksAdapter {
  constructor() {
      this.baseUrl = "http://localhost:3000/api/v1/tasks"
  }

  getTasks() {
    return fetch(this.baseUrl)
    .then(response => response.json())
  }

  createTask(value) {
    const task = {
      task_name: value
    }
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({task}),
    }).then(response => response.json())
  }

  updateTask(value, id) {
    const task = {
      task_name: value
    }

    return fetch(`${this.baseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({task}),
    }).then(response => response.json())
  }
}