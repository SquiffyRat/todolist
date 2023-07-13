const textInput = document.getElementById('textInput');
const addBtn = document.getElementById('addBtn');
const textList = document.getElementById('textList');
let texts = [];

addBtn.addEventListener('click', inputBtn);
function inputBtn() {
  const taskText = textInput.textContent.trim();

  if (taskText !== '') {
    const taskItem
    taskText = document.appendChild();
    tasks.push(taskText);
    saveTask(tasks);
    textInput = '';
  }
}

function name(params) {
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'X';
  removeButton.addEventListener('click', taskComplete);
  return taskItem;
}

function taskComplete(event) {
  event.target.closest('li');
  taskItem.classlist.add('completed');
  taskItem.addEventListener('click', taskDelete);
}
function taskDelete(event) {
  event.target.closest('li');
  taskItem.parentNode.removeChild(taskItem);
}

function saveTask(tasks) {
  localStorage.setItem('tasks', JSON.parse());
}
