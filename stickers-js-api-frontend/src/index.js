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

  const adultPrizeBar = document.querySelector('#adult-prize-bar')
  const adultPrizeInfo = document.querySelector('#adult-prize-info')
  const adultPrizesBtn = document.querySelector('#adultPrizesBtn')
  const adultPrizeImageBar = document.querySelector('#adult-prize-image-bar')
  const adultPrizeImageInfo = document.querySelector('#adult-prize-image-info')

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

  const newPrizeForm = document.querySelector('#new-prize-form')
  const newPrizeNameInput = document.querySelector('#new-prize-name')
  const newPrizeCostInput = document.querySelector('#new-prize-cost')
  const newPrizeImageInput = document.querySelector('#new-prize-image')

  const adultEditPrizeForm = document.querySelector('#adult-edit-prize-form')
  const adultEditPrizeNameInput = document.querySelector('#adult-edit-prize-name')
  const adultEditPrizeCostInput = document.querySelector('#adult-edit-prize-cost')
  const adultEditPrizeImageInput = document.querySelector('#adult-edit-prize-image')
  const adultEditPrizePurchasedInput = document.querySelector('#adult-edit-prize-purchased')
  const adultEditPrizeImageBar = document.querySelector('#adult-edit-prize-image-bar')
  const adultEditPrizeImageInfo = document.querySelector('#adult-edit-prize-image-info')

  const childTaskBar = document.querySelector('#child-task-bar')
  const childTaskInfo = document.querySelector('#child-task-info')

  const childStickerCollection = document.querySelector('#child-stickers-collection')

  const childPrizeBar = document.querySelector('#child-prize-bar')
  const childPrizeInfo = document.querySelector('#child-prize-info')

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
      //setTimeout(() => { checkAge() }, 500)
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
        avatarCreationIfEmpty(returnUserJSON.user)
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
        hideViews('adult-edit-user-form', 'adult-tasks-container', 'adult-prizes-container')
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
        avatarCreationIfEmpty(returnUserJSON.user)
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
        hideViews('child-edit-user-form', 'child-tasks-container','child-prizes-container',)
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
        hideViews('adult-prizes-container','new-task-form', 'adult-edit-task-form', 'adult-user-info', 'adult-edit-user-form')
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

// SCROLL TO TOP OF ADULT TASKS PAGE
  adultTaskInfo.addEventListener('click', (event) => {
    if (event.target.className === 'top') {
      const element = document.getElementById('stickers-header')
      element.scrollIntoView({behavior: "smooth"})
    }
  })

// SHOW CREATE TASK FORM
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
      hideViews('adult-task-info', 'adult-sticker-info', 'adult-user-info', 'adult-task-image-info', 'adult-edit-task-form', 
                'adult-edit-user-form', 'adult-prizes-container')
      showViews('adult-tasks-container', 'new-task-form', 'adult-task-image-bar-container', 'adult-sticker-bar-container')
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

// RETURN TO TOP OF NEW TASK IMAGES
  adultTaskImageInfo.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.className === 'topOfTaskImages') {
      showView('adult-task-image-bar-container')
      adultTaskImageBar.scrollIntoView({behavior: 'smooth'})
    }
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

// RETURN TO TOP OF NEW STICKERS
  adultStickerInfo.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.className === 'topOfStickers') {
      showView('adult-sticker-bar-container')
      adultStickerBar.scrollIntoView({behavior: 'smooth'})
    }
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
     .then(setTimeout(() => { adultTasksBtn.click() }, 500))
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

// RETURN TO CREATE TASK FORM
  adultTaskInfo.addEventListener('click', (event) => {
    if (event.target.className === 'createTaskForm') {
      const element = document.getElementById('createTaskBtn')
      element.click()
    }
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
      localStorage.setItem("originalSticker", foundTask.stickerImage)
      // pre-fill the form data:
      adultEditTaskNameInput.value = foundTask.name
      adultEditTaskValueInput.value = foundTask.value
      adultEditTaskImageInput.value = foundTask.image
      adultEditTaskCompletedInput.checked = foundTask.completed
      adultEditTaskForm.dataset.id = foundTask.id //store the task id in the form so we can PATCH with that id later
    }
  })

// RENDER DETAILS OF CLICKED ADULT EDIT TASK IMAGE
  adultEditTaskImageBar.addEventListener('click', (event) => {
    console.log(event)
    adultEditTaskImageInput.value = ''
    const clickedTaskImageId = parseInt(event.target.dataset.id)
    const foundTaskImage = TaskImage.findTaskImage(clickedTaskImageId)
    localStorage.setItem("editedTaskImage", foundTaskImage.imageUrl)
    setTimeout(() => { hideView('adult-edit-task-image-bar-container') }, 1500)
    showView('adult-edit-task-image-info')
    adultEditTaskImageInfo.innerHTML = foundTaskImage.renderTaskImageDetails()
    adultEditTaskImageInfo.scrollIntoView({behavior: 'smooth'})
  })

// RETURN TO TOP OF EDIT TASK IMAGES
  adultEditTaskImageInfo.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.className === 'topOfTaskImages') {
      showView('adult-edit-task-image-bar-container')
      adultEditTaskImageBar.scrollIntoView({behavior: 'smooth'})
    }
  })

// RENDER DETAILS OF CLICKED ADULT EDIT STICKER
  adultEditStickerBar.addEventListener('click', (event) => {
    console.log(event)
    const clickedStickerId = parseInt(event.target.dataset.id)
    const foundSticker = Sticker.findSticker(clickedStickerId)
    localStorage.setItem("clickedSticker", foundSticker.image)
    setTimeout(() => { hideView('adult-edit-sticker-bar-container') }, 1500)
    showView('adult-edit-sticker-info')
    adultEditStickerInfo.innerHTML = foundSticker.renderStickerDetails()
    adultEditStickerInfo.scrollIntoView({behavior: 'smooth'})
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
    let sticker = ''
    if (localStorage.clickedSticker !== undefined) {
      sticker = localStorage.clickedSticker
    } else {
      sticker = localStorage.originalSticker
    }
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
      delete localStorage.clickedSticker
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
        .then(setTimeout(() => { adultTasksBtn.click() }, 500))
        .then(adultTaskInfo.innerHTML = '')
      }
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
      .then(childTaskBar.scrollIntoView({behavior: "smooth"})) // Flag
      .then(/*function*/(resp) => resp.json())
      .then(/*function*/(taskDataJSON) => {
        hideViews('child-prizes-container','child-user-info', 'child-edit-user-form', 'child-stickers-collection')
        childTaskBar.innerHTML = ''
        childTaskInfo.innerHTML = ''
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

// INITIAL FETCH OF CHILD STICKERS COLLECTION
  childNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'stickersPageBtn') {
      const token = localStorage.token
      fetch('http://localhost:3000/api/v1/profile', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(/*function*/(resp) => resp.json())
      .then(/*function*/(userDataJSON) => {
        hideViews('child-prizes-container', 'child-tasks-container' , 'child-stickers-container', 'child-user-info', 
                  'child-edit-user-form')
        childStickerCollection.innerHTML = '<h2>Your Stickers Collection:</h2>'
        showView('child-stickers-collection')
        
        if (userDataJSON.user.stickers.length !== 0) {
          const arrayWithoutDuplicates = [...new Set(userDataJSON.user.stickers)]

          arrayWithoutDuplicates.forEach(/*function*/(sticker) => {
            childStickerCollection.innerHTML += `<img src="${sticker}"></img>`
          })
        } else {
          childStickerCollection.innerHTML = `<h2>You currently have 0 Stickers. Complete tasks to get Sticker rewards.</h2>`
        }
      })
    }
  })  

// RENDER DETAILS OF CLICKED CHILD TASK
  childTaskBar.addEventListener('click', (event) => {
    console.log(event)
    const clickedTaskId = parseInt(event.target.dataset.id)
    const foundTask = Task.findTask(clickedTaskId)
    localStorage.setItem("taskSticker", foundTask.stickerImage)
    localStorage.setItem("taskValue", foundTask.value)
    localStorage.setItem("taskId", foundTask.id)
    childTaskInfo.innerHTML = foundTask.renderChildDetails()
    setTimeout(() => { childTaskInfo.scrollIntoView({behavior: "smooth"}) }, 500)
  })

// COLLECT STICKER POINTS
  childTaskInfo.addEventListener('click', (event) => {
    if (event.target.className === 'collectStickerPoints') {
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
        const userStickers = userDataJSON.user.stickers
        const points = userDataJSON.user.points
        const element = document.getElementById('collect-points-password')
        const password = element.value
        const childId = parseInt(localStorage.childId)
        const foundUser = User.findUser(childId)
        const taskSticker = localStorage.taskSticker
        userStickers.push(taskSticker)
        const taskValue = localStorage.taskValue
        const totalPoints = parseInt(taskValue) + parseInt(points)
        const taskId = parseInt(localStorage.taskId)
        const foundTask = Task.findTask(taskId)

        fetch(`http://localhost:3000/api/v1/tasks/${taskId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            // form inputs were stored in vars at the top of DOMContentLoaded event handler (callback Fn)
            name: foundTask.name,
            value: '0',
            image: foundTask.image,
            completed: foundTask.completed,
            stickerImage: taskSticker
          })
        })
        .then((r) => r.json())
        .then((updatedTaskJSON) => {
          Task.updateTask(updatedTaskJSON) //delegate updating tasks to the Task class
        })
        
        fetch(`http://localhost:3000/api/v1/users/${foundUser.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            // form inputs were stored in vars at the top of DOMContentLoaded event handler (callback Fn)
            user: {
              name: foundUser.name,
              email: foundUser.email,
              password: password,
              avatar: foundUser.avatar,
              points: totalPoints,
              stickers: userStickers
            }
          })
        })
        .then((r) => r.json())
        .then((updatedUserJSON) => {
          const updatedUser = User.updateChildUserPoints(updatedUserJSON) //delegate updating points to the User class
          hideView('collect-points-password')
          childTaskInfo.innerHTML = ''
          childTaskInfo.innerHTML = updatedUser.renderPointsRedemption()
          childTaskInfo.scrollIntoView({behavior: "smooth"})
        })
      })
    }
  })

// SCROLL TO TOP OF CHILD TASK PAGE
  childTaskInfo.addEventListener('click', (event) => {
    if (event.target.className === 'top') {
      const element = document.getElementById('stickers-header')
      element.scrollIntoView({behavior: "smooth"})
    }
  })

// INITIAL FETCH OF ADULT PRIZES
  adultNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'adultPrizesBtn') {
      const token = localStorage.token
      showView('adult-prizes-container')
      fetch('http://localhost:3000/api/v1/prizes', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(/*function*/(resp) => resp.json())
      .then(/*function*/(prizeDataJSON) => {
        hideViews('adult-tasks-container','new-prize-form', 'adult-edit-prize-form', 'adult-user-info', 'adult-edit-user-form')
        adultPrizeBar.innerHTML = ''
        if (prizeDataJSON && prizeDataJSON.length) {
          prizeDataJSON.forEach(/*function*/(prize) => {
            const newPrize = new Prize(prize)
            adultPrizeBar.innerHTML += newPrize.renderPrizeCollection()
          })
        } else {
          adultPrizeBar.innerHTML = `<h2>There are currently 0 Prizes</h2>`
        }
        adultPrizeBar.scrollIntoView({behavior: "smooth"})
      })
    }
  })

// RENDER DETAILS OF CLICKED ADULT PRIZE
  adultPrizeBar.addEventListener('click', (event) => {
    console.log(event)
    const clickedPrizeId = parseInt(event.target.dataset.id)
    const foundPrize = Prize.findPrize(clickedPrizeId)
    hideViews('adult-edit-prize-form', 'new-prize-form')
    showView('adult-prize-info')
    adultPrizeInfo.innerHTML = foundPrize.renderAdultPrizeDetails()
    setTimeout(() => { adultPrizeInfo.scrollIntoView({behavior: 'smooth'}) }, 500)
  })

// SCROLL TO TOP OF ADULT PRIZES PAGE
  adultPrizeInfo.addEventListener('click', (event) => {
    if (event.target.className === 'top') {
      const element = document.getElementById('stickers-header')
      element.scrollIntoView({behavior: "smooth"})
    }
  })

// SHOW CREATE PRIZE FORM
  adultNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'addPrizeBtn') {
      const token = localStorage.token
      fetch('http://localhost:3000/api/v1/prize_images', { // INITIAL FETCH OF PRIZE IMAGES COLLECTION
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(adultPrizeImageBar.scrollIntoView({behavior: "smooth"}))
      .then(/*function*/(resp) => resp.json())
      .then(/*function*/(prizeImageDataJSON) => {
        showView('adult-prize-image-bar')
        adultPrizeImageBar.innerHTML = ''
        prizeImageDataJSON.forEach(/*function*/(prizeImage) => {
          const newPrizeImage = new PrizeImage(prizeImage)
          adultPrizeImageBar.innerHTML += newPrizeImage.renderPrizeImageCollection()
        })
      })
      hideViews('adult-tasks-container', 'adult-user-info', 'adult-prize-image-info', 'adult-prize-info', 'adult-edit-user-form')
      showViews('adult-prizes-container', 'new-prize-form', 'adult-prize-image-bar-container')
      setTimeout(() => { newPrizeForm.scrollIntoView({behavior: "smooth"}) }, 1000)
    }
  })

// RENDER DETAILS OF CLICKED ADULT PRIZE IMAGE
  adultPrizeImageBar.addEventListener('click', (event) => {
    console.log(event)
    const clickedPrizeImageId = parseInt(event.target.dataset.id)
    const foundPrizeImage = PrizeImage.findPrizeImage(clickedPrizeImageId)
    localStorage.setItem("prizeImage", foundPrizeImage.imageUrl)
    setTimeout(() => { hideView('adult-prize-image-bar-container') }, 1500)
    showView('adult-prize-image-info')
    adultPrizeImageInfo.innerHTML = foundPrizeImage.renderPrizeImageDetails()
    adultPrizeImageInfo.scrollIntoView({behavior: 'smooth'})
  })

// RETURN TO TOP OF NEW PRIZE IMAGES
  adultPrizeImageInfo.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.className === 'topOfPrizeImages') {
      showView('adult-prize-image-bar-container')
      adultPrizeImageBar.scrollIntoView({behavior: 'smooth'})
    }
  })

// CREATE A NEW PRIZE
  newPrizeForm.addEventListener('submit', (event) => {
     event.preventDefault()
     const storedChildNames = localStorage.getItem("childNames")
     const childId = prompt(`Type in the id of the child the prize is for: ${storedChildNames}` )
     const token = localStorage.token
     const parentId = localStorage.parentId
     const prizeImage = localStorage.prizeImage
     if (newPrizeImageInput.value == '') {
       newPrizeImageInput.value = prizeImage
     }
     fetch(`http://localhost:3000/api/v1/prizes`, {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
       body: JSON.stringify({
         // form inputs were stored in vars at the top of DOMContentLoaded event handler (callback Fn)
         name: newPrizeNameInput.value,
         cost: newPrizeCostInput.value,
         image: newPrizeImageInput.value,
         purchased: adultEditPrizePurchasedInput.purchased,
         prizeGiverId: parentId,
         prizeReceiverId: childId
       })
     })
     .then((r) => r.json())
     .then(setTimeout(() => { adultPrizesBtn.click() }, 500))
     .then((newPrizeJSON) => {
       const newPrize = new Prize(newPrizeJSON) //delegate updating prizes to the Prize class
       hideView('new-prize-form')
       newPrizeForm.reset()
       delete localStorage.prizeImage
       showView('adult-prize-info')
       adultPrizeBar.innerHTML += newPrize.renderPrizeCollection()
       adultPrizeInfo.innerHTML = newPrize.renderAdultPrizeDetails() //render the changes so the DOM is in sync with our data
       setTimeout(() => { adultPrizeInfo.scrollIntoView({behavior: "smooth"}) }, 500)
     })
  })

// RETURN TO CREATE PRIZE FORM
  adultPrizeInfo.addEventListener('click', (event) => {
    if (event.target.className === 'addPrizeForm') {
      const element = document.getElementById('addPrizeBtn')
      element.click()
    }
  })

// CLICK EDIT PRIZE + PRE-FILL FORM
  adultPrizeInfo.addEventListener('click', (event) => {
    if (event.target.className === 'edit' || event.target.dataset.action === 'edit') {
      console.log(event.target)
      const token = localStorage.token
      fetch('http://localhost:3000/api/v1/prize_images', { // INITIAL FETCH OF PRIZE IMAGES COLLECTION
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(adultPrizeImageBar.scrollIntoView({behavior: "smooth"}))
      .then(/*function*/(resp) => resp.json())
      .then(/*function*/(prizeImageDataJSON) => {
        showView('adult-edit-prize-image-bar')
        adultEditPrizeImageBar.innerHTML = ''
        prizeImageDataJSON.forEach(/*function*/(prizeImage) => {
          const newPrizeImage = new PrizeImage(prizeImage)
          adultEditPrizeImageBar.innerHTML += newPrizeImage.renderPrizeImageCollection()
        })
      })
      setTimeout(() => { adultEditPrizeForm.scrollIntoView({behavior: "smooth"}) }, 1000)
      hideViews('adult-prize-info', 'adult-edit-prize-image-info')
      showViews('adult-edit-prize-form', 'adult-edit-prize-image-bar-container')
      const clickedPrizeId = parseInt(event.target.dataset.id)
      const foundPrize = Prize.findPrize(clickedPrizeId) //find the prize object based on the id found in the clicked edit button
      // pre-fill the form data:
      adultEditPrizeNameInput.value = foundPrize.name
      adultEditPrizeCostInput.value = foundPrize.cost
      adultEditPrizeImageInput.value = foundPrize.image
      adultEditPrizePurchasedInput.checked = foundPrize.purchased
      adultEditPrizeForm.dataset.id = foundPrize.id //store the prize id in the form so we can PATCH with that id later
    }
  })

// RENDER DETAILS OF CLICKED ADULT EDIT PRIZE IMAGE
  adultEditPrizeImageBar.addEventListener('click', (event) => {
    console.log(event)
    adultEditPrizeImageInput.value = ''
    const clickedPrizeImageId = parseInt(event.target.dataset.id)
    const foundPrizeImage = PrizeImage.findPrizeImage(clickedPrizeImageId)
    localStorage.setItem("editedPrizeImage", foundPrizeImage.imageUrl)
    setTimeout(() => { hideView('adult-edit-prize-image-bar-container') }, 1500)
    showView('adult-edit-prize-image-info')
    adultEditPrizeImageInfo.innerHTML = foundPrizeImage.renderPrizeImageDetails()
    adultEditPrizeImageInfo.scrollIntoView({behavior: 'smooth'})
  })

// RETURN TO TOP OF EDIT PRIZE IMAGES
  adultEditPrizeImageInfo.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.className === 'topOfPrizeImages') {
      showView('adult-edit-prize-image-bar-container')
      adultEditPrizeImageBar.scrollIntoView({behavior: 'smooth'})
    }
  })

// PATCH REQUEST TO UPDATE PRIZE
  adultEditPrizeForm.addEventListener('submit', (event) => {
    console.log(event)
    event.preventDefault()
    const token = localStorage.token
    const editedPrizeImage = localStorage.editedPrizeImage
    if (editedPrizeImage !== undefined) {
      adultEditPrizeImageInput.value = editedPrizeImage
    }
    const updatePrizeId = event.target.dataset.id //don't need to parseInt because we are interpolating the id into a url string
    fetch(`http://localhost:3000/api/v1/prizes/${updatePrizeId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        // form inputs were stored in vars at the top of DOMContentLoaded event handler (callback Fn)
        name: adultEditPrizeNameInput.value,
        cost: adultEditPrizeCostInput.value,
        image: adultEditPrizeImageInput.value,
        purchased: adultEditPrizePurchasedInput.checked
      })
    })
    .then((r) => r.json())
    .then((updatedPrizeJSON) => {
      const updatedPrize = Prize.updatePrize(updatedPrizeJSON) //delegate updating prizes to the Prize class
      hideView('adult-edit-prize-form')
      adultEditPrizeForm.reset()
      delete localStorage.editedPrizeImage
      showView('adult-prize-info')
      adultPrizeInfo.innerHTML = updatedPrize.renderAdultPrizeDetails() //render the changes so the DOM is in sync with our data
      setTimeout(() => { adultPrizeInfo.scrollIntoView({behavior: "smooth"}) }, 500)
    })
  })

// DELETE REQUEST TO DELETE PRIZE
  adultPrizeInfo.addEventListener('click', (event) => {
    if (event.target.className === 'delete' || event.target.dataset.action === 'delete') {
      console.log(event.target)
      const result = confirm("Are you sure you want to delete this Prize? Click ok to confirm.")
      if (result) {
        const token = localStorage.token
        const prizeToDeleteId = event.target.dataset.id //don't need to parseInt because we are interpolating the id into a url string
        fetch(`http://localhost:3000/api/v1/prizes/${prizeToDeleteId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json', //MIME type we're sending to the server
            'Authorization': `Bearer ${token}`
          }
        })
        .then(alert(`Prize Successfully Deleted`))
        .then(setTimeout(() => { adultPrizesBtn.click() }, 500))
        .then(adultPrizeInfo.innerHTML = '')
      }
    }
  })

// INITIAL FETCH OF CHILD PRIZES
  childNavBar.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'childPrizesBtn') {
      const token = localStorage.token
      showView('child-prizes-container')
      fetch('http://localhost:3000/api/v1/prizes', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(childPrizeBar.scrollIntoView({behavior: "smooth"}))
      .then(/*function*/(resp) => resp.json())
      .then(/*function*/(prizeDataJSON) => {
        hideViews('child-tasks-container','child-user-info', 'child-edit-user-form')
        childPrizeBar.innerHTML = ''
        if (prizeDataJSON && prizeDataJSON.length) {
          prizeDataJSON.forEach(/*function*/(prize) => {
            const newPrize = new Prize(prize)
            childPrizeBar.innerHTML += newPrize.renderPrizeCollection()
          })
        } else {
          childPrizeBar.innerHTML = `<h2>There are currently 0 Prizes</h2>`
        }
      })
    }
  })

// RENDER DETAILS OF CLICKED CHILD PRIZE
  childPrizeBar.addEventListener('click', (event) => {
    console.log(event)
    const clickedPrizeId = parseInt(event.target.dataset.id)
    const foundPrize = Prize.findPrize(clickedPrizeId)
    showView('child-prize-info')
    childPrizeInfo.innerHTML = foundPrize.renderChildPrizeDetails()
    setTimeout(() => { childPrizeInfo.scrollIntoView({behavior: 'smooth'}) }, 500)
  })

// SCROLL TO TOP OF CHILD PRIZES PAGE
  childPrizeInfo.addEventListener('click', (event) => {
    if (event.target.className === 'top') {
      const element = document.getElementById('stickers-header')
      element.scrollIntoView({behavior: "smooth"})
    }
  })
})