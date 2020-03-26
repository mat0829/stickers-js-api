document.addEventListener('DOMContentLoaded', () => {
  console.log("%c DOM is loaded", "color :purple")

  const navBar = document.querySelector('#nav-bar')
  const adultUserInfo = document.querySelector('#adult-user-info')
  const childUserInfo = document.querySelector('#child-user-info')
  
  const adultLoginForm = document.querySelector('#adult-user-login-form')
  const adultUserLoginName = document.querySelector('#adult-user-login-name')
  const adultUserLoginPassword = document.querySelector('#adult-user-login-password')

  const adultUserForm = document.querySelector('#adult-new-user-form')
  const adultNewAvatarInput = document.querySelector('#adult-new-user-avatar')
  const adultNewNameInput = document.querySelector('#adult-new-user-name')
  const adultNewEmailInput = document.querySelector('#adult-new-user-email')
  const adultNewPasswordInput = document.querySelector('#adult-new-user-password')

  const adultEditUserForm = document.querySelector('#adult-edit-user-form')
  const adultEditAvatarInput = document.querySelector('#adult-edit-user-avatar')
  const adultEditNameInput = document.querySelector('#adult-edit-user-name')
  const adultEditEmailInput = document.querySelector('#adult-edit-user-email')
  const adultEditPasswordInput = document.querySelector('#adult-edit-user-password')

  const childLoginForm = document.querySelector('#child-user-login-form')
  const childUserLoginName = document.querySelector('#child-user-login-name')
  const childUserLoginPassword = document.querySelector('#child-user-login-password')
  
  const childUserForm = document.querySelector('#child-new-user-form')
  const childNewAvatarInput = document.querySelector('#child-new-user-avatar')
  const childNewNameInput = document.querySelector('#child-new-user-name')
  const childNewEmailInput = document.querySelector('#child-new-user-email')
  const childNewPasswordInput = document.querySelector('#child-new-user-password')

  const childEditUserForm = document.querySelector('#child-edit-user-form')
  const childEditAvatarInput = document.querySelector('#child-edit-user-avatar')
  const childEditNameInput = document.querySelector('#child-edit-user-name')
  const childEditEmailInput = document.querySelector('#child-edit-user-email')
  const childEditPasswordInput = document.querySelector('#child-edit-user-password')

  const taskBar = document.querySelector('#task-bar')
  const taskInfo = document.querySelector('#task-info')
  const tasksBtn = document.querySelector('#tasksBtn')

  const newTaskForm = document.querySelector('#new-task-form')
  const newTaskNameInput = document.querySelector('#new-task-name')
  const newTaskValueInput = document.querySelector('#new-task-value')
  const newTaskImageInput = document.querySelector('#new-task-image')

  const editTaskForm = document.querySelector('#edit-task-form')
  const editTaskNameInput = document.querySelector('#edit-task-name')
  const editTaskValueInput = document.querySelector('#edit-task-value')
  const editTaskImageInput = document.querySelector('#edit-task-image')
  const editTaskCompletedInput = document.querySelector('#edit-task-completed')

// ADULT USER LOGIN
  adultLoginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //MIME type we're sending to the server
         Accept: 'application/json'
       },
       body: JSON.stringify({
         user: {
          name: adultUserLoginName.value,
          password: adultUserLoginPassword.value
         }
       })
    })
    .then((r) => r.json())
    .then((returnUserJSON) => {
      const placeholderAvatar = localStorage.avatar
      if (returnUserJSON.user.avatar == '') {
        returnUserJSON.user.avatar = placeholderAvatar
      }
      const newUser = new User(returnUserJSON)
      localStorage.setItem("token", newUser.token)
      localStorage.setItem("parentId", newUser.id)
      adultUserInfo.innerHTML += newUser.renderWelcomeUserBack() //render the changes so the DOM is in sync with our data
    })
  })

// FETCH ADULT USER PROFILE
  navBar.addEventListener('click', (event) => {
    event.preventDefault()
    debugger
    if (event.target.id === 'userProfileBtn') {
      const token = localStorage.token
      fetch('http://localhost:3000/api/v1/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(/*function*/(resp) => resp.json())
      .then(/*function*/(userDataJSON) => {
        const placeholderAvatar = localStorage.avatar
        if (userDataJSON.user.avatar == '') {
          userDataJSON.user.avatar = placeholderAvatar
        }
        const newUser = new User(userDataJSON)
        adultUserInfo.innerHTML = ''
        adultUserInfo.innerHTML += newUser.renderAdultUserProfile()
      })
    }
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
      const number = Math.floor((Math.random() * 100) + 1)
      if (newUserJSON.user.avatar == '') {
        userChoice = prompt("Choose between a random Robot, Cat, Dog, Monster Avatar or type in a Noun(person, place, or thing)")
        if (userChoice == 'Robot' || userChoice == 'robot') {
          newUserJSON.user.avatar = `https://robohash.org/Random-Robot-Avatar`+`${number}`+`.png` // Generates a random Robot avatar
        } else if (userChoice == 'Cat' || userChoice == 'cat') {
          newUserJSON.user.avatar = `https://cataas.com/cat?`+`${number}` // Generates a random Cat avatar
        } else if (userChoice == 'Dog' || userChoice == 'dog') {
          newUserJSON.user.avatar = `https://placedog.net/500/280/?id=`+`${number}` // Generates a random Dog avatar
        } else if (userChoice == 'Monster' || userChoice == 'monster') {
          newUserJSON.user.avatar = `https://api.adorable.io/avatars/200/`+`${number}`+`.png` // Generates a random Monster avatar
        } else {
          newUserJSON.user.avatar = `http://loremflickr.com/320/240/`+`${userChoice}` // Generates an avatar based on the word given
        }
        localStorage.setItem("avatar", newUserJSON.user.avatar)
      }
      const newUser = new User(newUserJSON)
      localStorage.setItem("token", newUser.token)
      localStorage.setItem("parentId", newUser.id)
      adultUserInfo.innerHTML += newUser.renderWelcomeUser() //render the changes so the DOM is in sync with our data
    })
  })

// CLICK EDIT ADULT USER + PRE-FILL FORM
  adultUserInfo.addEventListener('click', (event) => {
    if (event.target.className === 'edit' || event.target.dataset.action === 'edit') {
      console.log(event.target)
      const clickedUserId = parseInt(event.target.dataset.id)
      const foundUser = User.findUser(clickedUserId)
      // pre-fill the form data:
      adultEditNameInput.value = foundUser.name
      adultEditEmailInput.value = foundUser.email
      adultEditPasswordInput.value = foundUser.password
      adultEditAvatarInput.value = foundUser.avatar
      adultEditUserForm.dataset.id = foundUser.id //store the task id in the form so we can PATCH with that id later
    }
  })

// PATCH REQUEST TO UPDATE ADULT USER
  adultEditUserForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const token = localStorage.token
    const updateUserId = event.target.dataset.id //don't need to parseInt because we are interpolating the id into a url string
    fetch(`http://localhost:3000/api/v1/users/${updateUserId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        // form inputs were stored in vars at the top of DOMContentLoaded event handler (callback Fn)
        user: {
          name: adultEditNameInput.value,
          email: adultEditEmailInput.value,
          password: adultEditPasswordInput.value,
          avatar: adultEditAvatarInput.value
        }
      })
    })
    .then((r) => r.json())
    .then((updatedUserJSON) => {
      const number = Math.floor((Math.random() * 100) + 1)
      if (updatedUserJSON.avatar == '') {
        userChoice = prompt("Choose between a random Robot, Cat, Dog, Monster Avatar or type in a Noun(person, place, or thing)")
        if (userChoice == 'Robot' || userChoice == 'robot') {
          updatedUserJSON.avatar = `https://robohash.org/Random-Robot-Avatar`+`${number}`+`.png` // Generates a random Robot avatar
        } else if (userChoice == 'Cat' || userChoice == 'cat') {
          updatedUserJSON.avatar = `https://cataas.com/cat?`+`${number}` // Generates a random Cat avatar
        } else if (userChoice == 'Dog' || userChoice == 'dog') {
          updatedUserJSON.avatar = `https://placedog.net/500/280/?id=`+`${number}` // Generates a random Dog avatar
        } else if (userChoice == 'Monster' || userChoice == 'monster') {
          updatedUserJSON.avatar = `https://api.adorable.io/avatars/200/`+`${number}`+`.png` // Generates a random Monster avatar
        } else {
          updatedUserJSON.avatar = `http://loremflickr.com/320/240/`+`${userChoice}` // Generates an avatar based on the word given
        }
        localStorage.setItem("avatar", updatedUserJSON.avatar)
      }
      const updatedUser = User.updateUser(updatedUserJSON) //delegate updating tasks to the Task class
      adultUserInfo.innerHTML = updatedUser.renderAdultUserProfile() //render the changes so the DOM is in sync with our data
    })
  })

// DELETE REQUEST TO DELETE ADULT USER
  adultUserInfo.addEventListener('click', (event) => {
    if (event.target.className === 'delete' || event.target.dataset.action === 'delete') {
      console.log(event.target)
      var result = confirm("Are you sure you want to delete this User? Click ok to confirm.")
      if (result) {
        const token = localStorage.token
        const userToDeleteId = event.target.dataset.id //don't need to parseInt because we are interpolating the id into a url string
        fetch(`http://localhost:3000/api/v1/users/${userToDeleteId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json', //MIME type we're sending to the server
            'Authorization': `Bearer ${token}`
          }
        })
        .then(window.location.reload(true))
      }
    }
  })

// CHILD USER LOGIN
  childLoginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //MIME type we're sending to the server
         Accept: 'application/json'
       },
       body: JSON.stringify({
         user: {
          name: childUserLoginName.value,
          password: childUserLoginPassword.value
         }
       })
    })
    .then((r) => r.json())
    .then((returnUserJSON) => {
      const placeholderAvatar = localStorage.avatar
      if (returnUserJSON.user.avatar == '') {
        returnUserJSON.user.avatar = placeholderAvatar
      }
      const newUser = new User(returnUserJSON)
      localStorage.setItem("token", newUser.token)
      localStorage.setItem("childId", newUser.id)
      childUserInfo.innerHTML += newUser.renderWelcomeUserBack() //render the changes so the DOM is in sync with our data
    })
  })

// FETCH CHILD USER PROFILE
  navBar.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'userProfileBtn') {
      const token = localStorage.token
      fetch('http://localhost:3000/api/v1/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(/*function*/(resp) => resp.json())
      .then(/*function*/(userDataJSON) => {
        const placeholderAvatar = localStorage.avatar
        if (userDataJSON.user.avatar == '') {
          userDataJSON.user.avatar = placeholderAvatar
        }
        const newUser = new User(userDataJSON)
        childUserInfo.innerHTML = ''
        childUserInfo.innerHTML += newUser.renderUserProfile()
      })
    }
  })

// CREATE A NEW CHILD USER
  childUserForm.addEventListener('submit', (event) => {
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
          name: childNewNameInput.value,
          email: childNewEmailInput.value,
          password: childNewPasswordInput.value,
          avatar: childNewAvatarInput.value
         }
       })
    })
    .then((r) => r.json())
    .then((newUserJSON) => {
      const number = Math.floor((Math.random() * 100) + 1)
      if (newUserJSON.user.avatar == '') {
        userChoice = prompt("Choose between a random Robot, Cat, Dog, Monster Avatar or type in a Noun(person, place, or thing)")
        if (userChoice == 'Robot' || userChoice == 'robot') {
          newUserJSON.user.avatar = `https://robohash.org/Random-Robot-Avatar`+`${number}`+`.png` // Generates a random Robot avatar
        } else if (userChoice == 'Cat' || userChoice == 'cat') {
          newUserJSON.user.avatar = `https://cataas.com/cat?`+`${number}` // Generates a random Cat avatar
        } else if (userChoice == 'Dog' || userChoice == 'dog') {
          newUserJSON.user.avatar = `https://placedog.net/500/280/?id=`+`${number}` // Generates a random Dog avatar
        } else if (userChoice == 'Monster' || userChoice == 'monster') {
          newUserJSON.user.avatar = `https://api.adorable.io/avatars/200/`+`${number}`+`.png` // Generates a random Monster avatar
        } else {
          newUserJSON.user.avatar = `http://loremflickr.com/320/240/`+`${userChoice}` // Generates an avatar based on the word given
        }
        localStorage.setItem("avatar", newUserJSON.user.avatar)
      }
      const newUser = new User(newUserJSON)
      localStorage.setItem("token", newUser.token)
      localStorage.setItem("childId", newUser.id)
      childUserInfo.innerHTML += newUser.renderWelcomeUser() //render the changes so the DOM is in sync with our data
    })
  })

// CLICK EDIT CHILD USER + PRE-FILL FORM
  childUserInfo.addEventListener('click', (event) => {
    if (event.target.className === 'edit' || event.target.dataset.action === 'edit') {
      console.log(event.target)
      const clickedUserId = parseInt(event.target.dataset.id)
      const foundUser = User.findUser(clickedUserId)
      // pre-fill the form data:
      childEditNameInput.value = foundUser.name
      childEditEmailInput.value = foundUser.email
      childEditPasswordInput.value = foundUser.password
      childEditAvatarInput.value = foundUser.avatar
      childEditUserForm.dataset.id = foundUser.id //store the task id in the form so we can PATCH with that id later
    }
  })

// PATCH REQUEST TO UPDATE CHILD USER
  childEditUserForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const token = localStorage.token
    const updateUserId = event.target.dataset.id //don't need to parseInt because we are interpolating the id into a url string
    fetch(`http://localhost:3000/api/v1/users/${updateUserId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        // form inputs were stored in vars at the top of DOMContentLoaded event handler (callback Fn)
        user: {
          name: childEditNameInput.value,
          email: childEditEmailInput.value,
          password: childEditPasswordInput.value,
          avatar: childEditAvatarInput.value
        }
      })
    })
    .then((r) => r.json())
    .then((updatedUserJSON) => {
      const number = Math.floor((Math.random() * 100) + 1)
      if (updatedUserJSON.avatar == '') {
        userChoice = prompt("Choose between a random Robot, Cat, Dog, Monster Avatar or type in a Noun(person, place, or thing)")
        if (userChoice == 'Robot' || userChoice == 'robot') {
          updatedUserJSON.avatar = `https://robohash.org/Random-Robot-Avatar`+`${number}`+`.png` // Generates a random Robot avatar
        } else if (userChoice == 'Cat' || userChoice == 'cat') {
          updatedUserJSON.avatar = `https://cataas.com/cat?`+`${number}` // Generates a random Cat avatar
        } else if (userChoice == 'Dog' || userChoice == 'dog') {
          updatedUserJSON.avatar = `https://placedog.net/500/280/?id=`+`${number}` // Generates a random Dog avatar
        } else if (userChoice == 'Monster' || userChoice == 'monster') {
          updatedUserJSON.avatar = `https://api.adorable.io/avatars/200/`+`${number}`+`.png` // Generates a random Monster avatar
        } else {
          updatedUserJSON.avatar = `http://loremflickr.com/320/240/`+`${userChoice}` // Generates an avatar based on the word given
        }
        localStorage.setItem("avatar", updatedUserJSON.avatar)
      }
      const updatedUser = User.updateUser(updatedUserJSON) //delegate updating tasks to the Task class
      childUserInfo.innerHTML = updatedUser.renderUserProfile() //render the changes so the DOM is in sync with our data
    })
  })

// DELETE REQUEST TO DELETE CHILD USER
  childUserInfo.addEventListener('click', (event) => {
    if (event.target.className === 'delete' || event.target.dataset.action === 'delete') {
      console.log(event.target)
      var result = confirm("Are you sure you want to delete this User? Click ok to confirm.")
      if (result) {
        const token = localStorage.token
        const userToDeleteId = event.target.dataset.id //don't need to parseInt because we are interpolating the id into a url string
        fetch(`http://localhost:3000/api/v1/users/${userToDeleteId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json', //MIME type we're sending to the server
            'Authorization': `Bearer ${token}`
          }
        })
        .then(window.location.reload(true))
      }
    }
  })

// INITIAL FETCH OF TASKS
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
        taskBar.innerHTML = ''
        if (taskDataJSON && taskDataJSON.length) {
          taskDataJSON.forEach(/*function*/(task) => {
            const newTask = new Task(task)
            taskBar.innerHTML += newTask.renderSpan()
          })
        } else {
          taskBar.innerHTML = `<h2>You currently have 0 Tasks</h2>`
        }
      })
    }
  })

// CREATE A NEW TASK
  newTaskForm.addEventListener('submit', (event) => {
     event.preventDefault()
     const token = localStorage.token
     const parentId = localStorage.parentId
     fetch(`http://localhost:3000/api/v1/tasks`, {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
       body: JSON.stringify({
         // form inputs were stored in vars at the top of DOMContentLoaded event handler (callback Fn)
         name: newTaskNameInput.value,
         value: newTaskValueInput.value,
         image: newTaskImageInput.value,
         completed: editTaskCompletedInput.checked,
         taskGiverId: parentId,
         taskReceiverId: '2'
       })
       
     })
     .then((r) => r.json())
     .then((newTaskJSON) => {
       const newTask = new Task(newTaskJSON) //delegate updating tasks to the Task class
       taskBar.innerHTML += newTask.renderSpan()
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
      editTaskNameInput.value = foundTask.name
      editTaskValueInput.value = foundTask.value
      editTaskImageInput.value = foundTask.image
      editTaskCompletedInput.checked = foundTask.completed
      editTaskForm.dataset.id = foundTask.id //store the task id in the form so we can PATCH with that id later
    }
  })

// PATCH REQUEST TO UPDATE TASK
  editTaskForm.addEventListener('submit', (event) => {
    console.log(event)
    event.preventDefault()
    const token = localStorage.token
    const updateTaskId = event.target.dataset.id //don't need to parseInt because we are interpolating the id into a url string
    fetch(`http://localhost:3000/api/v1/tasks/${updateTaskId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        // form inputs were stored in vars at the top of DOMContentLoaded event handler (callback Fn)
        name: editTaskNameInput.value,
        value: editTaskValueInput.value,
        image: editTaskImageInput.value,
        completed: editTaskCompletedInput.checked
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
      var result = confirm("Are you sure you want to delete this Task? Click ok to confirm.");
      if (result) {
        const token = localStorage.token
        const taskToDeleteId = event.target.dataset.id //don't need to parseInt because we are interpolating the id into a url string
        fetch(`http://localhost:3000/api/v1/tasks/${taskToDeleteId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json', //MIME type we're sending to the server
            'Authorization': `Bearer ${token}`
          }
        })
        .then(tasksBtn.click(tasksBtn.click()))
        .then(taskInfo.innerHTML = '')
      }
    }
  })
})