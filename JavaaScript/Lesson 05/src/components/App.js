import createTodoItem from './TodoItem.js';

export default function App() {
  const container = document.createElement('div');
  const mainWrapper = document.createElement('div');
  // add class for styling
  container.className = 'input-container';

  const input = document.createElement('input');
  // add id for styling
  input.id = 'taskInput';
  const addButton = document.createElement('button');
  // add id for styling
  addButton.id = 'addTaskBtn';
  // set button text
  addButton.textContent = 'Add';

  const list = document.createElement('ul');
  // add id for styling
  list.id = 'taskList';

  addButton.onclick = () => {
    if (input.value.trim() !== '') {
      list.appendChild(createTodoItem(input.value.trim()));
      input.value = '';
    }
  };

  container.appendChild(input);
  container.appendChild(addButton);  
  // add mainWrapper to the container
  mainWrapper.appendChild(container);
  mainWrapper.appendChild(list);

  return mainWrapper;
}
