function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    if (taskInput.value === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `${taskInput.value} <button onclick="deleteTask(this)">Delete</button>`;

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
