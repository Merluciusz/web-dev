console.log('starting point');
// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks)
    filter.addEventListener('keyup', filterTasks)
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
    link.innerHTML = '<i class="fa fa-remove">x</i>';
    li.appendChild(link);
    // Append the li to ul
    //console.log(li);
    taskList.appendChild(li);
    // Clear the input
    taskInput.value = '';
    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        //console.log(e.target);
        if (confirm('Are you sure ?')) {
            e.target.parentElement.parentElement.remove();
        }

    }
}

function clearTasks(e){
    console.log(e.target);
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
        console.log('in while');
    }
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }

    });
}
