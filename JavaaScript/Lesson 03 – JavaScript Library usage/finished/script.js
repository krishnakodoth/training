const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if(taskText === ""){
    // Show toast
    Toastify({
      text: "Please provide a task",
      duration: 2000,
      gravity: "top",
      position: "right",
      backgroundColor: "rgb(236, 128, 27)",
    }).showToast();
  }
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerText = taskText;

    // Show toast
    Toastify({
      text: "Task added!",
      duration: 2000,
      gravity: "top",
      position: "right",
      backgroundColor: "#4caf50",
    }).showToast();

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
       Toastify({
        text: "Task deleted!",
        duration: 2000,
        gravity: "top",
        position: "right",
        backgroundColor: "#f44336",
      }).showToast();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
  }
});