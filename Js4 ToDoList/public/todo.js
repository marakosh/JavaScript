const apiUrl = 'http://localhost:3000/tasks';

let tasks = [];

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


function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}


function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}


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


document.addEventListener('DOMContentLoaded', loadTasks);


const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addTask);
