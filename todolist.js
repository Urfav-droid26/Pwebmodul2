function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Check if the input is empty
    if (taskInput.value === '') {
        alert('Please enter a task');
        return;
    }

    // Create a new task item
    const taskItem = document.createElement('li');
    
    taskItem.innerHTML = `
        <span class="task-text">${taskInput.value}</span>
        <div>
            <button class="edit" onclick="editTask(this)"><i class="fas fa-edit"></i></button>
            <button class="delete" onclick="deleteTask(this)"><i class="fas fa-trash"></i></button>
        </div>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = ''; // Clear input after adding the task
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('.task-text');
    
    // Prompt the user to edit the task
    const newTask = prompt('Edit your task:', taskText.innerText);
    
    if (newTask !== null && newTask.trim() !== '') {
        taskText.innerText = newTask;
    } else {
        alert('Task cannot be empty.');
    }
}
