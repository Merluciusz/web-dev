// localStorage.setItem('name', 'john doe');
// sessionStorage.setItem('name', 'joe slow');

// adding a value to the local storage

let info;
console.log(`let info first value is ${info}`);

//const form = document.querySelector('form');
const par = document.getElementById('desc');

document.querySelector('form').addEventListener('submit',
    function (e) {
        //get the task from input
        const task = document.getElementById('yourname').value;
        //prepare the Array
        let tasks = [];
        // Check to see if local storage is empty
        if (localStorage.getItem('tasks') === null) {
            //if empty make an empty array
            tasks = [];
            console.log('in if '+tasks);
        } else {
            // if not empty, retrieve the string array and parse it with JSON
            tasks = JSON.parse(localStorage.getItem('tasks'));
            console.log('in else '+tasks);
        }
        // finnaly push the task in the array
        //console.log(`task is ${JSON.parse(localStorage.getItem('tasks'))}`);
        tasks.push(task);

        // set the array in the local 
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log(`task is ${JSON.parse(localStorage.getItem('tasks'))}`);
        info = JSON.parse(localStorage.getItem('tasks'))
        console.log('info var is ' + info);
        par.innerHTML = `<p>you have to ${info}</p>`;
        alert('task saved');
        e.preventDefault();
    })

    const tasksList = JSON.parse(localStorage.getItem('tasks')) ;

    tasksList.forEach(x => {
        console.log(x);
    });

// console.log(`let info final value is ${info}`);

