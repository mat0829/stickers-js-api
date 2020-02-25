const BASE_URL = "http://localhost:3000/api/v1"
const TASKS_URL = `${BASE_URL}/tasks`
const taskCollection = document.querySelector('#tasks-collection')

document.addEventListener("DOMContentLoaded", function() {
  console.log("%c DOM is loaded", "color :purple")
})

const app = new App()