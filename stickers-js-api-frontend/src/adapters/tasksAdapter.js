// Only job is to communicate with the Rails api
class TasksAdapter {
  constructor() {
      this.baseUrl = "http://localhost:3000/api/v1/tasks"
  }

  getTasks() {
    return fetch(this.baseUrl)
    .then(response => response.json())
  }

  getTask(id) {
    return fetch(`${this.baseUrl}/${id}`)
    .then(response => response.json())
    .then(json => json)
  }

  createTask(name, value) {
    const task = {
      task_name: name,
      task_value: value
    }
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({task}),
    }).then(response => response.json())
  }

  updateTask(name, id, value) {
    const task = {
      task_name: name,
      task_value: value
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