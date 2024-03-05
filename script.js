document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button>Delete</button>
    `;

    taskList.appendChild(taskElement);
    taskInput.value = '';

    const deleteBtn = taskElement.querySelector('button');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskElement);
    });

    const checkbox = taskElement.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskElement.style.textDecoration = 'line-through';
        } else {
            taskElement.style.textDecoration = 'none';
        }
    });
}