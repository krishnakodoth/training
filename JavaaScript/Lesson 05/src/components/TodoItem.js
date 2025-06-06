export default function createTodoItem(text) {
  const li = document.createElement('li');
  li.textContent = text;

  li.onclick = () => {
    li.style.textDecoration = li.style.textDecoration === 'line-through' ? '' : 'line-through';
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "deleteBtn";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);

  return li;
}
