console.log('starting point');
// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');// ul
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


loadEventListeners();

function loadEventListeners() {
    // Dom Load Event
    document.addEventListener('DOMContentLoaded', getTasks)
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks)
    filter.addEventListener('keyup', filterTasks)
}

// Get Tasks from Local Storage

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
    const li = document.createElement('li');
    li.className = 'collection-item';
    // Create the text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    // Append the li to ul
    //console.log(li);
    taskList.appendChild(li);
    });
}

//Add a task
function addTask(e) {
    if (taskInput.value === '') {
        alert('No task added');
    }
    // Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    // Create the text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    // Append the li to ul
    //console.log(li);
    taskList.appendChild(li);
    // Store in Local Storage
    storeTaskInLocalStorage(taskInput.value);

    // Clear the input
    taskInput.value = '';
    e.preventDefault();
}

// Some modifications -------------

// End of -------------------------
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        //console.log(e.target);
        if (confirm('Are you sure ?')) {
            e.target.parentElement.parentElement.remove();
            //Remove from the Local Storage

            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }

    }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem){
    console.log(taskItem);
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        console.log('taskItem is '+taskItem.textContent);
        console.log('task is '+task);
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(e) {
    console.log(e.target);
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
        console.log('in while');
    }
    // Clear Tasks from Local Storage
    clearTasksFromLocalStorage();
 
}

function clearTasksFromLocalStorage(){
    localStorage.clear();
}
 

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }

    });
}

