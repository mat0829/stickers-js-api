document.addEventListener('DOMContentLoaded', () => {
  console.log("%c DOM is loaded", "color :purple")

  const loginForm = document.querySelector('#user-login-form')
  const userLoginName = document.querySelector('#user-login-name')
  const userLoginPassword = document.querySelector('#user-login-password')

  const adultUserForm = document.querySelector('#adult-new-user-form')
  const adultNewAvatarInput = document.querySelector('#adult-new-user-avatar')
  const adultNewNameInput = document.querySelector('#adult-new-user-name')
  const adultNewEmailInput = document.querySelector('#adult-new-user-email')
  const adultNewPasswordInput = document.querySelector('#adult-new-user-password')
  
  const childUserForm = document.querySelector('#child-new-user-form')
  const childNewAvatarInput = document.querySelector('#child-new-user-avatar')
  const childNewNameInput = document.querySelector('#child-new-user-name')
  const childNewEmailInput = document.querySelector('#child-new-user-email')
  const childNewPasswordInput = document.querySelector('#child-new-user-password')
  const userInfo = document.querySelector('#user-info')

  const newTaskForm = document.querySelector('#new-task-form')
  const newTaskNameInput = document.querySelector('#new-task-name')
  const newTaskValueInput = document.querySelector('#new-task-value')
  const newTaskImageInput = document.querySelector('#new-task-image')
  
  const navBar = document.querySelector('#nav-bar')
  const taskBar = document.querySelector('#task-bar')
  const taskInfo = document.querySelector('#task-info')
  const taskForm = document.querySelector('#task-form')
  const taskNameInput = document.querySelector('#task-name-input')
  const taskValueInput = document.querySelector('#task-value-input')
  const taskImgInput = document.querySelector('#task-img-input')
  const completedTaskInput = document.querySelector('#completed-task-input')

// USER LOGIN
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //MIME type we're sending to the server
         Accept: 'application/json'
       },
       body: JSON.stringify({
         user: {
          name: userLoginName.value,
          password: userLoginPassword.value
         }
       })
    })
    .then((r) => r.json())
    .then((newUserJSON) => {
      const newUser = new User(newUserJSON)
      localStorage.setItem("token", newUser.password)
      userInfo.innerHTML += newUser.renderUser() //render the changes so the DOM is in sync with our data
    })
  })

// CREATE A NEW ADULT USER
  adultUserForm.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //MIME type we're sending to the server
         Accept: 'application/json'
       },
       body: JSON.stringify({
         // form inputs were stored in vars at the top of DOMContentLoaded event handler (callback Fn)
         user: {
          name: adultNewNameInput.value,
          email: adultNewEmailInput.value,
          password: adultNewPasswordInput.value,
          avatar: adultNewAvatarInput.value
         }
       })
    })
    .then((r) => r.json())
    .then((newUserJSON) => {
      const newUser = new User(newUserJSON)
      localStorage.setItem("token", newUser.password)
      userInfo.innerHTML += newUser.renderUser() //render the changes so the DOM is in sync with our data
    })
  })

// INITIAL FETCH
  navBar.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'tasksBtn') {
      const token = localStorage.token
      fetch('http://localhost:3000/api/v1/tasks', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(/*function*/(resp) => resp.json())
      .then(/*function*/(taskDataJSON) => {
        taskDataJSON.forEach(/*function*/(task) => {
          const newTask = new Task(task)
          taskBar.innerHTML += newTask.renderSpan()
        })
      })
    }
  })

// CREATE A NEW TASK
  newTaskForm.addEventListener('submit', (event) => {
     event.preventDefault()
     const token = localStorage.token
     fetch(`http://localhost:3000/api/v1/tasks`, {
       method: 'POST',
       headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
       body: JSON.stringify({
         // form inputs were stored in vars at the top of DOMContentLoaded event handler (callback Fn)
         name: newTaskNameInput.value,
         value: newTaskValueInput.value,
         image: newTaskImageInput.value,
         completed: completedTaskInput.checked,
         taskGiverId: '1',
         taskReceiverId: '2'
       })
     })
     .then((r) => r.json())
     .then((newTaskJSON) => {
       const newTask = new Task(newTaskJSON) //delegate updating tasks to the Task class
       taskInfo.innerHTML += newTask.renderDetails() //render the changes so the DOM is in sync with our data
     })
   })

// RENDER DETAILS OF CLICKED TASK
    taskBar.addEventListener('click', (event) => {
      console.log(event)
      const clickedTaskId = parseInt(event.target.dataset.id)
      const foundTask = Task.findTask(clickedTaskId)
      taskInfo.innerHTML = foundTask.renderDetails()
    })

// CLICK EDIT TASK + PRE-FILL FORM
    taskInfo.addEventListener('click', (event) => {
      if (event.target.className === 'edit' || event.target.dataset.action === 'edit') {
        console.log(event.target)
        const clickedTaskId = parseInt(event.target.dataset.id)
        const foundTask = Task.findTask(clickedTaskId) //find the task object based on the id found in the clicked edit button
        // pre-fill the form data:
        taskNameInput.value = foundTask.name
        taskValueInput.value = foundTask.value
        taskImgInput.value = foundTask.image
        completedTaskInput.checked = foundTask.completed
        taskForm.dataset.id = foundTask.id //store the task id in the form so we can PATCH with that id later
      }
    })

// PATCH REQUEST TO UPDATE TASK
    taskForm.addEventListener('submit', (event) => {
      event.preventDefault()
      const updateTaskId = event.target.dataset.id //don't need to parseInt because we are interpolating the id into a url string
      fetch(`http://localhost:3000/api/v1/tasks/${updateTaskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json' //MIME type we're sending to the server
        },
        body: JSON.stringify({
          // form inputs were stored in vars at the top of DOMContentLoaded event handler (callback Fn)
          name: taskNameInput.value,
          value: taskValueInput.value,
          image: taskImgInput.value,
          completed: completedTaskInput.checked
        })
      })
      .then((r) => r.json())
      .then((updatedTaskJSON) => {
        const updatedTask = Task.updateTask(updatedTaskJSON) //delegate updating tasks to the Task class
        taskInfo.innerHTML = updatedTask.renderDetails() //render the changes so the DOM is in sync with our data
      })
    })

// DELETE REQUEST TO DELETE TASK
    taskInfo.addEventListener('click', (event) => {
      if (event.target.className === 'delete' || event.target.dataset.action === 'delete') {
        console.log(event.target)
        var result = confirm("Want to delete?");
        if (result) {
          const taskToDeleteId = event.target.dataset.id //don't need to parseInt because we are interpolating the id into a url string
          fetch(`http://localhost:3000/api/v1/tasks/${taskToDeleteId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json' //MIME type we're sending to the server
            }
          }).then(window.location.reload(false))
        }
      }
    })
})