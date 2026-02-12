const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

const createTodoItem = (text) => {
  const li = document.createElement('li');
  li.className = 'todo-item';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = '&#128465;'; 
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });

  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  return li;
};

const handleAddTodo = (event) => {
  event.preventDefault();
  const taskText = todoInput.value.trim();
  if (taskText !== '') {
    const newItem = createTodoItem(taskText);
    todoList.appendChild(newItem);
    todoInput.value = ''; 
  }
};

todoForm.addEventListener('submit', handleAddTodo);