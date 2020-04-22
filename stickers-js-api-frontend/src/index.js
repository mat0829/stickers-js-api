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
  const adultTaskImageBar = document.querySelector('#adult-task-image-bar')
  const adultTaskImageInfo = document.querySelector('#adult-task-image-info')
  const adultStickerBar = document.querySelector('#adult-sticker-bar')
  const adultStickerInfo = document.querySelector('#adult-sticker-info')

  const newTaskForm = document.querySelector('#new-task-form')
  const newTaskNameInput = document.querySelector('#new-task-name')
  const newTaskValueInput = document.querySelector('#new-task-value')
  const newTaskImageInput = document.querySelector('#new-task-image')

  const adultEditTaskForm = document.querySelector('#adult-edit-task-form')
  const adultEditTaskNameInput = document.querySelector('#adult-edit-task-name')
  const adultEditTaskValueInput = document.querySelector('#adult-edit-task-value')
  const adultEditTaskImageInput = document.querySelector('#adult-edit-task-image')
  const adultEditTaskCompletedInput = document.querySelector('#adult-edit-task-completed')
  const adultEditTaskImageBar = document.querySelector('#adult-edit-task-image-bar')
  const adultEditTaskImageInfo = document.querySelector('#adult-edit-task-image-info')
  const adultEditStickerBar = document.querySelector('#adult-edit-sticker-bar')
  const adultEditStickerInfo = document.querySelector('#adult-edit-sticker-info')

  const childTaskBar = document.querySelector('#child-task-bar')
  const childTaskInfo = document.querySelector('#child-task-info')

  function hideView(id) {
    const element = document.getElementById(id);
    element.style.display = 'none'
  }

  function hideViews() {
    for (let i = 0; i < arguments.length; i++) {
        let element = document.getElementById(arguments[i]);
        element.style.display = 'none'
    }
  }

  function showView(id) {
    const element = document.getElementById(id);
    element.style.display = 'block'
  }

  function showViews() {
    for (let i = 0; i < arguments.length; i++) {
        let element = document.getElementById(arguments[i]);
        element.style.display = 'block'
    }
  }

  function adultLoggedIn() {
    if (localStorage.loggedIn == 'true') {
      element = document.getElementById('adult-login-signup-container')
      element.style.display = 'none'
    }
  }

  function childLoggedIn() {
    if (localStorage.loggedIn == 'true') {
      element = document.getElementById('child-login-signup-container')
      element.style.display = 'none'
    }
  }

  function logOut() {
    if (event.target.id === 'logoutBtn') {
      delete localStorage.token
      delete localStorage.loggedIn
      window.location.reload(true)
    }
  }

  function checkAge() {
    const result = prompt("Please Enter Your Age and Click Ok.")
    if (result == parseInt(result, 10)) {
      if (result <= 10) {
        alert('Please ask a Parent or Guardian to help you fill this out.')
      } else {
        alert('If you have trouble filling this out ask a Parent or Guardian to help you.')
      }
    } else {
      alert("Please Enter a Number for Your Age. Not a Word.")
      checkAge()
    }
  }

  function avatarCreationIfEmpty(jsonUserData) {
    const number = Math.floor((Math.random() * 100) + 1)
    if (jsonUserData.avatar == '') {
      userChoice = prompt("Choose between a random Robot, Cat, Dog, Monster Avatar or type in a Noun(person, place, or thing)")
        if (userChoice == 'Robot' || userChoice == 'robot') {
          jsonUserData.avatar = `https://robohash.org/Random-Robot-Avatar`+`${number}`+`.png` // Generates a random Robot avatar
        } else if (userChoice == 'Cat' || userChoice == 'cat') {
          jsonUserData.avatar = `https://cataas.com/cat?`+`${number}` // Generates a random Cat avatar
        } else if (userChoice == 'Dog' || userChoice == 'dog') {
          jsonUserData.avatar = `https://placedog.net/500/280/?id=`+`${number}` // Generates a random Dog avatar
        } else if (userChoice == 'Monster' || userChoice == 'monster') {
          jsonUserData.avatar = `https://api.adorable.io/avatars/200/`+`${number}`+`.png` // Generates a random Monster avatar
        } else {
          jsonUserData.avatar = `http://loremflickr.com/320/240/`+`${userChoice}` // Generates an avatar based on the word given
        }
      localStorage.setItem("avatar", jsonUserData.avatar)
    }
  }

  function renderEditUserErrors(userData, userType) {
    if (userData.errors.length == 3) {
      return `<h2 style="color:red">${userData.errors[0]}</h2>
              <h2 style="color:red">${userData.errors[1]}</h2>
              <h2 style="color:red">${userData.errors[2]}</h2>
        <button class="edit${userType}UserForm">Back to Edit ${userType} User</button>
        `
    } else if (userData.errors.length == 2) {
      return `<h2 style="color:red">${userData.errors[0]}</h2>
              <h2 style="color:red">${userData.errors[1]}</h2>
        <button class="edit${userType}UserForm">Back to Edit ${userType} User</button>
        `
    } else {
      return `<h2 style="color:red">${userData.errors}</h2>
        <button class="edit${userType}UserForm">Back to Edit ${userType} User</button>
        `
    }
  }

// INDEX NAV BAR
  indexNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'adultPageBtn') {
      adultLoggedIn()
      hideView('index-nav')
      showView("adult-user-container")
    }
    if (event.target.id === 'childPageBtn') {
      childLoggedIn()
      hideView("index-nav")
      showView("child-user-container")
      setTimeout(() => { checkAge() }, 500)
    }
  })

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
      if (returnUserJSON.message !== undefined) {
        const newUser = new User(returnUserJSON)
        adultUserInfo.innerHTML = newUser.renderLoginErrors()
      } else {
        const placeholderAvatar = localStorage.avatar
        if (returnUserJSON.user.avatar == '') {
          returnUserJSON.user.avatar = placeholderAvatar
        }
        const newUser = new User(returnUserJSON)
        localStorage.setItem("token", newUser.token)
        localStorage.setItem("parentId", newUser.id)
        localStorage.setItem("loggedIn", newUser.logged_in)
        hideView('adult-login-signup-container')
        adultUserInfo.innerHTML = newUser.renderWelcomeUserBack() //render the changes so the DOM is in sync with our data
      }
    })
  })

// ADULT USER LOGOUT
  adultNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    logOut()
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
        hideViews('adult-edit-user-form', 'adult-tasks-container')
        showView('adult-user-info')
        adultUserInfo.innerHTML = ''
        adultUserInfo.innerHTML = newUser.renderAdultUserProfile()
        adultUserInfo.scrollIntoView({behavior: "smooth"})
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
      if (newUserJSON.errors !== undefined) {
        const newUser = new User(newUserJSON)
        hideView('adult-login-signup-container')
        adultUserInfo.innerHTML = newUser.renderUserErrors('Adult')
      } else {
        avatarCreationIfEmpty(newUserJSON.user)
        const newUser = new User(newUserJSON)
        localStorage.setItem("token", newUser.token)
        localStorage.setItem("parentId", newUser.id)
        localStorage.setItem("loggedIn", newUser.logged_in)
        hideView('adult-login-signup-container')
        showView('adult-user-info')
        adultUserInfo.innerHTML = newUser.renderWelcomeUser() //render the changes so the DOM is in sync with our data
        adultUserInfo.scrollIntoView({behavior: "smooth"})
      }
    })
  })

// RETURN TO CREATE ADULT USER FORM
  adultUserInfo.addEventListener('click', (event) => {
    if (event.target.className === 'createAdultUserForm') {
      adultUserInfo.innerHTML = ''
      showView('adult-login-signup-container')
    }
  })

// CLICK EDIT ADULT USER + PRE-FILL FORM
  adultUserInfo.addEventListener('click', (event) => {
    if (event.target.className === 'edit' || event.target.dataset.action === 'edit') {
      console.log(event.target)
      hideView('adult-user-info')
      showView('adult-edit-user-form')
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
      if (updatedUserJSON.errors !== undefined) {
        hideView('adult-edit-user-form')
        showView('adult-user-info')
        const errors = renderEditUserErrors(updatedUserJSON, 'Adult')
        adultUserInfo.innerHTML = errors
      } else {
        avatarCreationIfEmpty(updatedUserJSON)
        const updatedUser = User.updateUser(updatedUserJSON) //delegate updating tasks to the Task class
        hideView('adult-edit-user-form')
        showView('adult-user-info')
        adultUserInfo.innerHTML = updatedUser.renderAdultUserProfile() //render the changes so the DOM is in sync with our data
        adultUserInfo.scrollIntoView({behavior: "smooth"})
      }
    })
  })

// RETURN TO EDIT ADULT USER FORM
  adultUserInfo.addEventListener('click', (event) => {
    if (event.target.className === 'editAdultUserForm') {
      adultUserInfo.innerHTML = ''
      showView('adult-edit-user-form')
    }
  })

// DELETE REQUEST TO DELETE ADULT USER
  adultUserInfo.addEventListener('click', (event) => {
    if (event.target.className === 'delete' || event.target.dataset.action === 'delete') {
      console.log(event.target)
      const result = confirm("Are you sure you want to delete this User? Click ok to confirm.")
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
        .then(alert(`User Successfully Deleted`))
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
      if (returnUserJSON.message !== undefined) {
        const newUser = new User(returnUserJSON)
        childUserInfo.innerHTML = newUser.renderLoginErrors()
      } else {
        const placeholderAvatar = localStorage.avatar
        if (returnUserJSON.user.avatar == '') {
          returnUserJSON.user.avatar = placeholderAvatar
        }
        const newUser = new User(returnUserJSON)
        localStorage.setItem("token", newUser.token)
        localStorage.setItem("childId", newUser.id)
        localStorage.setItem("loggedIn", newUser.logged_in)
        hideView('child-login-signup-container')
        childUserInfo.innerHTML = newUser.renderWelcomeUserBack() //render the changes so the DOM is in sync with our data
      }
    })
  })

// CHILD USER LOGOUT
  childNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    logOut()
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
        hideViews('child-edit-user-form', 'child-tasks-container')
        showView('child-user-info')
        childUserInfo.innerHTML = ''
        childUserInfo.innerHTML = newUser.renderChildUserProfile()
        childUserInfo.scrollIntoView({behavior: "smooth"})
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
      if (newUserJSON.errors !== undefined) {
        const newUser = new User(newUserJSON)
        hideView('child-login-signup-container')
        childUserInfo.innerHTML = newUser.renderUserErrors('Child')
      } else {
        avatarCreationIfEmpty(newUserJSON.user)
        const newUser = new User(newUserJSON)
        localStorage.setItem("token", newUser.token)
        const childNames = JSON.parse(localStorage.getItem("childNames")) || []
        const childObject = {name: `${newUser.name}`, id: newUser.id + ""}
        childNames.push(childObject)
        window.localStorage.setItem('childNames', JSON.stringify(childNames))
        storedChildNames = JSON.parse(localStorage.getItem("childNames"))
        console.log(storedChildNames)
        localStorage.setItem("loggedIn", newUser.logged_in)
        hideView('child-login-signup-container')
        showView('child-user-info')
        childUserInfo.innerHTML = newUser.renderWelcomeUser() //render the changes so the DOM is in sync with our data
        childUserInfo.scrollIntoView({behavior: "smooth"})
      }
    })
  })

// RETURN TO CREATE ADULT CHILD FORM
  childUserInfo.addEventListener('click', (event) => {
    if (event.target.className === 'createChildUserForm') {
      childUserInfo.innerHTML = ''
      showView('child-login-signup-container')
    }
  })

// CLICK EDIT CHILD USER + PRE-FILL FORM
  childUserInfo.addEventListener('click', (event) => {
    if (event.target.className === 'edit' || event.target.dataset.action === 'edit') {
      console.log(event.target)
      hideView('child-user-info')
      showView('child-edit-user-form')
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
      debugger
      if (updatedUserJSON.errors !== undefined) {
        hideView('child-edit-user-form')
        showView('child-user-info')
        const errors = renderEditUserErrors(updatedUserJSON, 'Child')
        childUserInfo.innerHTML = errors
      } else {
        avatarCreationIfEmpty(updatedUserJSON)
        const updatedUser = User.updateUser(updatedUserJSON) //delegate updating tasks to the Task class
        hideView('child-edit-user-form')
        showView('child-user-info')
        childUserInfo.innerHTML = updatedUser.renderChildUserProfile() //render the changes so the DOM is in sync with our data
        childUserInfo.scrollIntoView({behavior: "smooth"})
      }
    })
  })

// RETURN TO EDIT CHILD USER FORM
  childUserInfo.addEventListener('click', (event) => {
    if (event.target.className === 'editChildUserForm') {
      childUserInfo.innerHTML = ''
      showView('child-edit-user-form')
    }
  })

// DELETE REQUEST TO DELETE CHILD USER
  childUserInfo.addEventListener('click', (event) => {
    if (event.target.className === 'delete' || event.target.dataset.action === 'delete') {
      console.log(event.target)
      const result = confirm("Are you sure you want to delete this User? Click ok to confirm.")
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
        .then(alert(`User Successfully Deleted`))
        .then(window.location.reload(true))
      }
    }
  })

// INITIAL FETCH OF ADULT TASKS
  adultNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'adultTasksBtn') {
      const token = localStorage.token
      showView('adult-tasks-container')
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
        hideViews('new-task-form', 'adult-edit-task-form', 'adult-user-info', 'adult-edit-user-form')
        adultTaskBar.innerHTML = ''
        if (taskDataJSON && taskDataJSON.length) {
          taskDataJSON.forEach(/*function*/(task) => {
            const newTask = new Task(task)
            adultTaskBar.innerHTML += newTask.renderSpan()
          })
        } else {
          adultTaskBar.innerHTML = `<h2>You currently have 0 Tasks</h2>`
        }
        adultTaskBar.scrollIntoView({behavior: "smooth"})
      })
    }
  })

// SHOW/HIDE CREATE TASK FORM
  adultNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'createTaskBtn') {
      const token = localStorage.token
      fetch('http://localhost:3000/api/v1/task_images', { // INITIAL FETCH OF TASK IMAGES COLLECTION
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(adultTaskImageBar.scrollIntoView({behavior: "smooth"}))
      .then(/*function*/(resp) => resp.json())
      .then(/*function*/(taskImageDataJSON) => {
        showView('adult-task-image-bar')
        adultTaskImageBar.innerHTML = ''
        taskImageDataJSON.forEach(/*function*/(taskImage) => {
          const newTaskImage = new TaskImage(taskImage)
          adultTaskImageBar.innerHTML += newTaskImage.renderTaskImageCollection()
        })
      })
      fetch('http://localhost:3000/api/v1/stickers', { // INITIAL FETCH OF STICKERS COLLECTION
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(adultStickerBar.scrollIntoView({behavior: "smooth"}))
      .then(/*function*/(resp) => resp.json())
      .then(/*function*/(stickerDataJSON) => {
        showView('adult-sticker-bar')
        adultStickerBar.innerHTML = ''
        stickerDataJSON.forEach(/*function*/(sticker) => {
          const newSticker = new Sticker(sticker)
          adultStickerBar.innerHTML += newSticker.renderStickerCollection()
        })
      })
      const element = document.getElementById('adult-tasks-container')
      hideViews('adult-task-info', 'adult-user-info', 'adult-edit-task-form', 'adult-edit-user-form')
      if (element.style.display == 'none') {
        showView('adult-tasks-container')
      }
      if (newTaskForm.style.display == 'none') {
        showView('new-task-form')
      }
      setTimeout(() => { newTaskForm.scrollIntoView({behavior: "smooth"}) }, 500)
    }
  })

// RENDER DETAILS OF CLICKED ADULT TASK IMAGE
  adultTaskImageBar.addEventListener('click', (event) => {
    console.log(event)
    const clickedTaskImageId = parseInt(event.target.dataset.id)
    const foundTaskImage = TaskImage.findTaskImage(clickedTaskImageId)
    localStorage.setItem("taskImage", foundTaskImage.imageUrl)
    setTimeout(() => { hideView('adult-task-image-bar-container') }, 1500)
    showView('adult-task-image-info')
    adultTaskImageInfo.innerHTML = foundTaskImage.renderTaskImageDetails()
    adultTaskImageInfo.scrollIntoView({behavior: 'smooth'})
  })

// RENDER DETAILS OF CLICKED ADULT STICKER
  adultStickerBar.addEventListener('click', (event) => {
    console.log(event)
    const clickedStickerId = parseInt(event.target.dataset.id)
    const foundSticker = Sticker.findSticker(clickedStickerId)
    localStorage.setItem("sticker", foundSticker.image)
    setTimeout(() => { hideView('adult-sticker-bar-container') }, 1500)
    showView('adult-sticker-info')
    adultStickerInfo.innerHTML = foundSticker.renderStickerDetails()
    adultStickerInfo.scrollIntoView({behavior: 'smooth'})
  })

// CREATE A NEW TASK
  newTaskForm.addEventListener('submit', (event) => {
     event.preventDefault()
     const storedChildNames = localStorage.getItem("childNames")
     const childId = prompt(`Type in the id of the child the task is for: ${storedChildNames}` )
     const token = localStorage.token
     const parentId = localStorage.parentId
     const sticker = localStorage.sticker
     const taskImage = localStorage.taskImage
     if (newTaskImageInput.value == '') {
       newTaskImageInput.value = taskImage
     }
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
         taskReceiverId: childId,
         stickerImage: sticker
       })
       
     })
     .then((r) => r.json())
     .then(adultTasksBtn.click(adultTasksBtn.click()))
     .then((newTaskJSON) => {
       const newTask = new Task(newTaskJSON) //delegate updating tasks to the Task class
       hideView('new-task-form')
       newTaskForm.reset()
       delete localStorage.taskImage
       showView('adult-task-info')
       adultTaskBar.innerHTML += newTask.renderSpan()
       adultTaskInfo.innerHTML = newTask.renderAdultDetails() //render the changes so the DOM is in sync with our data
       setTimeout(() => { adultTaskInfo.scrollIntoView({behavior: "smooth"}) }, 500)
     })
   })

// RETURN TO TOP OF NEW TASK IMAGES
  adultTaskImageInfo.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.className === 'topOfTaskImages') {
      showView('adult-task-image-bar-container')
      adultTaskImageBar.scrollIntoView({behavior: 'smooth'})
    }
  })

// RETURN TO TOP OF NEW STICKERS
  adultStickerInfo.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.className === 'topOfStickers') {
      showView('adult-sticker-bar-container')
      adultStickerBar.scrollIntoView({behavior: 'smooth'})
    }
  })

// RETURN TO CREATE TASK FORM
  adultTaskInfo.addEventListener('click', (event) => {
    if (event.target.className === 'createTaskForm') {
      const element = document.getElementById('createTaskBtn')
      element.click()
    }
  })

// RENDER DETAILS OF CLICKED ADULT TASK
  adultTaskBar.addEventListener('click', (event) => {
    console.log(event)
    const clickedTaskId = parseInt(event.target.dataset.id)
    const foundTask = Task.findTask(clickedTaskId)
    hideViews('adult-edit-task-form', 'new-task-form')
    showView('adult-task-info')
    adultTaskInfo.innerHTML = foundTask.renderAdultDetails()
    setTimeout(() => { adultTaskInfo.scrollIntoView({behavior: 'smooth'}) }, 500)
  })

// RENDER DETAILS OF CLICKED ADULT EDIT TASK IMAGE
  adultEditTaskImageBar.addEventListener('click', (event) => {
    console.log(event)
    const clickedTaskImageId = parseInt(event.target.dataset.id)
    const foundTaskImage = TaskImage.findTaskImage(clickedTaskImageId)
    localStorage.setItem("editedTaskImage", foundTaskImage.imageUrl)
    setTimeout(() => { hideView('adult-edit-task-image-bar-container') }, 1500)
    showView('adult-edit-task-image-info')
    adultEditTaskImageInfo.innerHTML = foundTaskImage.renderTaskImageDetails()
    adultEditTaskImageInfo.scrollIntoView({behavior: 'smooth'})
  })

// RENDER DETAILS OF CLICKED ADULT EDIT STICKER
  adultEditStickerBar.addEventListener('click', (event) => {
    console.log(event)
    const clickedStickerId = parseInt(event.target.dataset.id)
    const foundSticker = Sticker.findSticker(clickedStickerId)
    localStorage.setItem("sticker", foundSticker.image)
    setTimeout(() => { hideView('adult-edit-sticker-bar-container') }, 1500)
    showView('adult-edit-sticker-info')
    adultEditStickerInfo.innerHTML = foundSticker.renderStickerDetails()
    adultEditStickerInfo.scrollIntoView({behavior: 'smooth'})
  })

// CLICK EDIT TASK + PRE-FILL FORM
  adultTaskInfo.addEventListener('click', (event) => {
    if (event.target.className === 'edit' || event.target.dataset.action === 'edit') {
      console.log(event.target)
      const token = localStorage.token
      fetch('http://localhost:3000/api/v1/task_images', { // INITIAL FETCH OF TASK IMAGES COLLECTION
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(adultTaskImageBar.scrollIntoView({behavior: "smooth"}))
      .then(/*function*/(resp) => resp.json())
      .then(/*function*/(taskImageDataJSON) => {
        showView('adult-edit-task-image-bar')
        adultEditTaskImageBar.innerHTML = ''
        taskImageDataJSON.forEach(/*function*/(taskImage) => {
          const newTaskImage = new TaskImage(taskImage)
          adultEditTaskImageBar.innerHTML += newTaskImage.renderTaskImageCollection()
        })
      })
      fetch('http://localhost:3000/api/v1/stickers', { // INITIAL FETCH OF STICKERS COLLECTION
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(adultEditStickerBar.scrollIntoView({behavior: "smooth"}))
      .then(/*function*/(resp) => resp.json())
      .then(/*function*/(stickerDataJSON) => {
        showView('adult-edit-sticker-bar')
        adultEditStickerBar.innerHTML = ''
        stickerDataJSON.forEach(/*function*/(sticker) => {
          const newSticker = new Sticker(sticker)
          adultEditStickerBar.innerHTML += newSticker.renderStickerCollection()
        })
      })
      setTimeout(() => { adultEditTaskForm.scrollIntoView({behavior: "smooth"}) }, 1000)
      hideViews('adult-task-info', 'adult-edit-task-image-info', 'adult-edit-sticker-info')
      showViews('adult-edit-task-form', 'adult-edit-task-image-bar-container', 'adult-edit-sticker-bar-container')
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

// RETURN TO TOP OF EDIT TASK IMAGES
  adultEditTaskImageInfo.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.className === 'topOfTaskImages') {
      showView('adult-edit-task-image-bar-container')
      adultEditTaskImageBar.scrollIntoView({behavior: 'smooth'})
    }
  })

// RETURN TO TOP OF EDIT STICKERS
  adultEditStickerInfo.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.className === 'topOfStickers') {
      showView('adult-edit-sticker-bar-container')
      adultEditStickerBar.scrollIntoView({behavior: 'smooth'})
    }
  })

// PATCH REQUEST TO UPDATE TASK
  adultEditTaskForm.addEventListener('submit', (event) => {
    console.log(event)
    event.preventDefault()
    const token = localStorage.token
    const sticker = localStorage.sticker
    const editedTaskImage = localStorage.editedTaskImage
    if (editedTaskImage !== undefined) {
      adultEditTaskImageInput.value = editedTaskImage
    }
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
        completed: adultEditTaskCompletedInput.checked,
        stickerImage: sticker
      })
    })
    .then((r) => r.json())
    .then((updatedTaskJSON) => {
      const updatedTask = Task.updateTask(updatedTaskJSON) //delegate updating tasks to the Task class
      hideView('adult-edit-task-form')
      adultEditTaskForm.reset()
      delete localStorage.editedTaskImage
      showView('adult-task-info')
      adultTaskInfo.innerHTML = updatedTask.renderAdultDetails() //render the changes so the DOM is in sync with our data
      setTimeout(() => { adultTaskInfo.scrollIntoView({behavior: "smooth"}) }, 500)
    })
  })

// DELETE REQUEST TO DELETE TASK
  adultTaskInfo.addEventListener('click', (event) => {
    if (event.target.className === 'delete' || event.target.dataset.action === 'delete') {
      console.log(event.target)
      const result = confirm("Are you sure you want to delete this Task? Click ok to confirm.")
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
        .then(alert(`Task Successfully Deleted`))
        .then(setTimeout(() => { adultTasksBtn.click(adultTasksBtn.click()) }, 1000))
        .then(adultTaskInfo.innerHTML = '')
      }
    }
  })

// SCROLL TO TOP OF ADULT PAGE
  adultTaskInfo.addEventListener('click', (event) => {
    if (event.target.className === 'top') {
      const element = document.getElementById('stickers-header')
      element.scrollIntoView({behavior: "smooth"})
    }
  })

// INITIAL FETCH OF CHILD TASKS
  childNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'childTasksBtn') {
      const token = localStorage.token
      showView('child-tasks-container')
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
        hideViews('child-user-info', 'child-edit-user-form')
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
    setTimeout(() => { childTaskInfo.scrollIntoView({behavior: "smooth"}) }, 500)
  })

  // SCROLL TO TOP OF CHILD PAGE
  childTaskInfo.addEventListener('click', (event) => {
    if (event.target.className === 'top') {
      const element = document.getElementById('stickers-header')
      element.scrollIntoView({behavior: "smooth"})
    }
  })
})