document.addEventListener('DOMContentLoaded', () => {
  console.log("%c DOM is loaded", "color :purple")

  const indexNavBar = document.querySelector('#index-nav')

  const adultNavBar = document.querySelector('#adult-nav-bar')
  const adultUserInfo = document.querySelector('#adult-user-info')
  const childNavBar = document.querySelector('#child-nav-bar')
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

  const adultTaskBar = document.querySelector('#adult-task-bar')
  const adultTaskInfo = document.querySelector('#adult-task-info')
  const adultTasksBtn = document.querySelector('#adultTasksBtn')

  const newTaskForm = document.querySelector('#new-task-form')
  const newTaskNameInput = document.querySelector('#new-task-name')
  const newTaskValueInput = document.querySelector('#new-task-value')
  const newTaskImageInput = document.querySelector('#new-task-image')

  const adultEditTaskForm = document.querySelector('#adult-edit-task-form')
  const adultEditTaskNameInput = document.querySelector('#adult-edit-task-name')
  const adultEditTaskValueInput = document.querySelector('#adult-edit-task-value')
  const adultEditTaskImageInput = document.querySelector('#adult-edit-task-image')
  const adultEditTaskCompletedInput = document.querySelector('#adult-edit-task-completed')

  const childTaskBar = document.querySelector('#child-task-bar')
  const childTaskInfo = document.querySelector('#child-task-info')

  function showhideView(id) {
    var e = document.getElementById(id);
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
  }

  function showhideViews() {
    for (var i = 0; i < arguments.length; i++) {
        var e = document.getElementById(arguments[i]);
        e.style.display = (e.style.display == 'block') ? 'none' : 'block';
    }
  }

  function hideView(id) {
    var e = document.getElementById(id);
    e.style.display = 'none'
  }

  function hideViews() {
    for (var i = 0; i < arguments.length; i++) {
        var e = document.getElementById(arguments[i]);
        e.style.display = 'none'
    }
  }

  function showView(id) {
    var e = document.getElementById(id);
    e.style.display = 'block'
  }

  function adultLoggedIn() {
    if (localStorage.loggedIn == 'true') {
      e = document.getElementById('adult-login-signup-container')
      e.style.display = 'none'
    }
  }

  function childLoggedIn() {
    if (localStorage.loggedIn == 'true') {
      e = document.getElementById('child-login-signup-container')
      e.style.display = 'none'
    }
  }

// INDEX NAV BAR
  indexNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'adultPageBtn') {
      adultLoggedIn()
      showhideViews("index-nav", "adult-user-container")
    }
    if (event.target.id === 'childPageBtn') {
      childLoggedIn()
      showhideViews("index-nav", "child-user-container")
    }
  })

// ADULT USER LOGIN
  adultLoginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    debugger
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
      localStorage.setItem("loggedIn", newUser.logged_in)
      showhideView('adult-login-signup-container')
      adultUserInfo.innerHTML += newUser.renderWelcomeUserBack() //render the changes so the DOM is in sync with our data
    })
  })

// ADULT USER LOGOUT
  adultNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'logoutBtn') {
      delete localStorage.token
      delete localStorage.loggedIn
      window.location.reload(true)
    }
  })

// FETCH ADULT USER PROFILE
  adultNavBar.addEventListener('click', (event) => {
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
        showhideView('adult-user-info')
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
      localStorage.setItem("loggedIn", newUser.logged_in)
      showhideViews('adult-login-signup-container')
      adultUserInfo.innerHTML += newUser.renderWelcomeUser() //render the changes so the DOM is in sync with our data
    })
  })

// CLICK EDIT ADULT USER + PRE-FILL FORM
  adultUserInfo.addEventListener('click', (event) => {
    if (event.target.className === 'edit' || event.target.dataset.action === 'edit') {
      console.log(event.target)
      debugger
      showhideViews('adult-user-info', 'adult-edit-user-form')
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
      showhideViews('adult-user-info', 'adult-edit-user-form')
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
        .then(delete localStorage.token, delete localStorage.loggedIn)
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
      localStorage.setItem("loggedIn", newUser.logged_in)
      showhideView('child-login-signup-container')
      childUserInfo.innerHTML += newUser.renderWelcomeUserBack() //render the changes so the DOM is in sync with our data
    })
  })

// CHILD USER LOGOUT
  childNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'logoutBtn') {
      delete localStorage.token
      delete localStorage.loggedIn
      window.location.reload(true)
    }
  })

// FETCH CHILD USER PROFILE
  childNavBar.addEventListener('click', (event) => {
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
        showhideView('child-user-info')
        childUserInfo.innerHTML = ''
        childUserInfo.innerHTML += newUser.renderChildUserProfile()
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
      const childNames = JSON.parse(localStorage.getItem("childNames")) || []
      const childObject = {name: `${newUser.name}`, id: newUser.id + ""}
      childNames.push(childObject)
      window.localStorage.setItem('childNames', JSON.stringify(childNames))
      storedChildNames = JSON.parse(localStorage.getItem("childNames"))
      console.log(storedChildNames)
      localStorage.setItem("loggedIn", newUser.logged_in)
      showhideView('child-login-signup-container')
      childUserInfo.innerHTML += newUser.renderWelcomeUser() //render the changes so the DOM is in sync with our data
    })
  })

// CLICK EDIT CHILD USER + PRE-FILL FORM
  childUserInfo.addEventListener('click', (event) => {
    if (event.target.className === 'edit' || event.target.dataset.action === 'edit') {
      console.log(event.target)
      showhideViews('child-user-info', 'child-edit-user-form')
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
      showhideViews('child-user-info', 'child-edit-user-form')
      childUserInfo.innerHTML = updatedUser.renderChildUserProfile() //render the changes so the DOM is in sync with our data
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
        .then(delete localStorage.token, delete localStorage.loggedIn)
        .then(window.location.reload(true))
      }
    }
  })

// INITIAL FETCH OF ADULT TASKS
  adultNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'adultTasksBtn') {
      const token = localStorage.token
      showhideView('adult-tasks-container')
      fetch('http://localhost:3000/api/v1/tasks', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(adultTaskBar.scrollIntoView({behavior: "smooth"}))
      .then(/*function*/(resp) => resp.json())
      .then(/*function*/(taskDataJSON) => {
        hideView('new-task-form')
        adultTaskBar.innerHTML = ''
        if (taskDataJSON && taskDataJSON.length) {
          taskDataJSON.forEach(/*function*/(task) => {
            const newTask = new Task(task)
            adultTaskBar.innerHTML += newTask.renderSpan()
          })
        } else {
          adultTaskBar.innerHTML = `<h2>You currently have 0 Tasks</h2>`
        }
      })
    }
  })

// SHOW/HIDE CREATE TASK FORM
  adultNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    debugger
    if (event.target.id === 'createTaskBtn') {
      element = document.getElementById('adult-tasks-container')
      if (element.style.display == 'block' && newTaskForm.style.display == 'block') {
        hideViews('adult-tasks-container', 'new-task-form')
      } else {
        hideView('adult-task-info')
        adultTaskInfo.style.display = 'none'
        if (element.style.display == 'none') {
          showView('adult-tasks-container')
        }
        if (newTaskForm.style.display == 'none') {
          showView('new-task-form')
        }
        newTaskForm.scrollIntoView({behavior: "smooth"})
      }
    }
  })

// CREATE A NEW TASK
  newTaskForm.addEventListener('submit', (event) => {
     event.preventDefault()
     const storedChildNames = localStorage.getItem("childNames")
     const childId = prompt(`Type in the id of the child the task is for: ${storedChildNames}` )
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
         completed: adultEditTaskCompletedInput.checked,
         taskGiverId: parentId,
         taskReceiverId: childId
       })
       
     })
     .then((r) => r.json())
     .then(adultTasksBtn.click(adultTasksBtn.click()))
     .then((newTaskJSON) => {
       const newTask = new Task(newTaskJSON) //delegate updating tasks to the Task class
       showhideView('new-task-form')
       adultTaskBar.innerHTML += newTask.renderSpan()
       adultTaskInfo.innerHTML = newTask.renderAdultDetails() //render the changes so the DOM is in sync with our data
     })
   })

// RENDER DETAILS OF CLICKED ADULT TASK
  adultTaskBar.addEventListener('click', (event) => {
    console.log(event)
    debugger
    const clickedTaskId = parseInt(event.target.dataset.id)
    const foundTask = Task.findTask(clickedTaskId)
    adultTaskInfo.innerHTML = foundTask.renderAdultDetails()
    adultTaskInfo.scrollIntoView({behavior: 'smooth'})
  })

// CLICK EDIT TASK + PRE-FILL FORM
  adultTaskInfo.addEventListener('click', (event) => {
    if (event.target.className === 'edit' || event.target.dataset.action === 'edit') {
      console.log(event.target)
      adultUserForm.scrollIntoView({behavior: "smooth"})
      showhideViews('adult-task-info', 'adult-edit-task-form')
      const clickedTaskId = parseInt(event.target.dataset.id)
      const foundTask = Task.findTask(clickedTaskId) //find the task object based on the id found in the clicked edit button
      // pre-fill the form data:
      adultEditTaskNameInput.value = foundTask.name
      adultEditTaskValueInput.value = foundTask.value
      adultEditTaskImageInput.value = foundTask.image
      adultEditTaskCompletedInput.checked = foundTask.completed
      adultEditTaskForm.dataset.id = foundTask.id //store the task id in the form so we can PATCH with that id later
    }
  })

// PATCH REQUEST TO UPDATE TASK
  adultEditTaskForm.addEventListener('submit', (event) => {
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
        name: adultEditTaskNameInput.value,
        value: adultEditTaskValueInput.value,
        image: adultEditTaskImageInput.value,
        completed: adultEditTaskCompletedInput.checked
      })
    })
    .then((r) => r.json())
    .then((updatedTaskJSON) => {
      const updatedTask = Task.updateTask(updatedTaskJSON) //delegate updating tasks to the Task class
      showhideView('adult-edit-task-form')
      adultTaskInfo.innerHTML = updatedTask.renderAdultDetails() //render the changes so the DOM is in sync with our data
    })
  })

// DELETE REQUEST TO DELETE TASK
  adultTaskInfo.addEventListener('click', (event) => {
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
        .then(adultTasksBtn.click(adultTasksBtn.click()))
        .then(adultTaskInfo.innerHTML = '')
      }
    }
  })

// INITIAL FETCH OF CHILD TASKS
  childNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'childTasksBtn') {
      const token = localStorage.token
      showhideView('child-tasks-container')
      fetch('http://localhost:3000/api/v1/tasks', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(childTaskBar.scrollIntoView({behavior: "smooth"}))
      .then(/*function*/(resp) => resp.json())
      .then(/*function*/(taskDataJSON) => {
        childTaskBar.innerHTML = ''
        if (taskDataJSON && taskDataJSON.length) {
          taskDataJSON.forEach(/*function*/(task) => {
            const newTask = new Task(task)
            childTaskBar.innerHTML += newTask.renderSpan()
          })
        } else {
          childTaskBar.innerHTML = `<h2>You currently have 0 Tasks</h2>`
        }
      })
    }
  })

// RENDER DETAILS OF CLICKED CHILD TASK
  childTaskBar.addEventListener('click', (event) => {
    console.log(event)
    const clickedTaskId = parseInt(event.target.dataset.id)
    const foundTask = Task.findTask(clickedTaskId)
    childTaskInfo.innerHTML = foundTask.renderChildDetails()
    childTaskInfo.scrollIntoView({behavior: "smooth"})
  })
})