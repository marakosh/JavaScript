const apiUrl = 'http://localhost:3000/tasks';

let tasks = [];

// Load tasks from the server
async function loadTasks() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      tasks = await response.json();
    } else {
      console.log('Failed to load tasks:', response.status);
    }
    renderTasks();
  } catch (error) {
    console.log('Failed to load tasks:', error);
  }
}

// Save tasks to the server
async function saveTasks() {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tasks)
    });
    if (response.ok) {
      console.log('Tasks saved successfully');
    } else {
      console.log('Failed to save tasks:', response.status);
    }
  } catch (error) {
    console.log('Failed to save tasks:', error);
  }
}

// Add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const task = {
      text: taskText,
      completed: false
    };
    tasks.push(task);
    saveTasks();
    renderTasks();
    taskInput.value = '';
  }
}

// Toggle a task's completed status
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Render tasks
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Load tasks when the page is loaded
document.addEventListener('DOMContentLoaded', loadTasks);

// Add event listener to the add button
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addTask);
