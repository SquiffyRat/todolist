const textInput = document.getElementById('textInput');
const addBtn = document.getElementById('addBtn');
const textList = document.getElementById('textList');
let tasks = [];

addBtn.addEventListener('click', inputBtn);
function inputBtn() {
  const taskText = textInput.textContent.trim();

  if (taskText !== '') {
    const taskItem = createTaskList(taskText);
    textList.appendChild(taskItem);
    tasks.push(taskText);
    saveTask(tasks);
    textInput = '';
  }
}

function createTaskList(taskText) {
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;
  taskItem.addEventListener('click', taskComplete);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'X';
  removeButton.addEventListener('click', taskDelete);
  taskItem.appendChild(removeButton);
  return taskItem;
}

function taskComplete(event) {
  const taskItem = event.target.closest('li');
  taskItem.classList.toggle('completed');
}
function taskDelete(event) {
  const taskItem = event.target.closest('li');
  taskItem.parentNode.removeChild(taskItem);
}

function saveTask(tasks) {
  localStorage.setItem('tasks', JSON.parse());
}
