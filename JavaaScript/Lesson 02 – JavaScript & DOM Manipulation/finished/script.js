const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerText = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
  }
});
