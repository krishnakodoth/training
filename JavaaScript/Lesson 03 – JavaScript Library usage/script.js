// JavaScript code to add a new task to the task list
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  // Add your code here
  console.log("Adding new task:",taskText);
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
});
