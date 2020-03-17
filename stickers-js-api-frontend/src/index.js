document.addEventListener('DOMContentLoaded', () => {
  console.log("%c DOM is loaded", "color :purple")

  const newTaskForm = document.querySelector('#new-task-form')
  const newTaskNameInput = document.querySelector('#new-task-name')
  const newTaskValueInput = document.querySelector('#new-task-value')
  const newTaskImageInput = document.querySelector('#new-task-image')
  //const createTaskPageBtn = document.getElementById
  const taskBar = document.querySelector('#task-bar')
  const taskInfo = document.querySelector('#task-info')
  const taskForm = document.querySelector('#task-form')
  const taskNameInput = document.querySelector('#task-name-input')
  const taskValueInput = document.querySelector('#task-value-input')
  const taskImgInput = document.querySelector('#task-img-input')
  const completedTaskInput = document.querySelector('#completed-task-input')

// INITIAL FETCH
  fetch('http://localhost:3000/api/v1/tasks', { method: 'GET' })
    .then(/*function*/(resp) => resp.json())
    .then(/*function*/(taskDataJSON) => {
      taskDataJSON.forEach(/*function*/(task) => {
        const newTask = new Task(task)
        taskBar.innerHTML += newTask.renderSpan()
      })
    })

// CREATE A NEW TASK
  newTaskForm.addEventListener('submit', (event) => {
     event.preventDefault()
     fetch(`http://localhost:3000/api/v1/tasks`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json' //MIME type we're sending to the server
        },
       body: JSON.stringify({
         // form inputs were stored in vars at the top of DOMContentLoaded event handler (callback Fn)
         name: newTaskNameInput.value,
         value: newTaskValueInput.value,
         image: newTaskImageInput.value,
         completed: completedTaskInput.checked
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
        const taskToDeleteId = event.target.dataset.id //don't need to parseInt because we are interpolating the id into a url string
        fetch(`http://localhost:3000/api/v1/tasks/${taskToDeleteId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json' //MIME type we're sending to the server
          }
        })
      }
    })
})