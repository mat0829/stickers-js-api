const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const TASKS_URL = `${BASE_URL}/tasks`
const userCollection = document.querySelector('#user-collection')

document.addEventListener("DOMContentLoaded", function() {
  console.log("%c DOM is loaded", "color :purple")

  fetch(USERS_URL)
    .then(response => response.json())
    .then(users => {
      let usersHTML = users.map(function(user) {
        return `
        <div class="card">
        <h2> ${user.name}</h2>
        <button data-id="${user.id}" class="delete-btn"> Delete User <3</button>
        </div>
        `
      })
      UserCollection.innerHTML =
      usersHTML.join('')
  })
})