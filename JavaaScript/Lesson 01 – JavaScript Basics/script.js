let tasks = [];

function addTask() {
  const task = prompt("Enter a task:");
  if (task) {
    // Add code to add the task to the tasks array
    console.log("Task added!");
  }
}

function viewTasks() {
  // Add code to display all tasks
  console.log("Tasks:");
}

function deleteTask() {
  const index = prompt("Enter the task number to delete:");
  console.log("Delete a task:",index);
  const i = parseInt(index) - 1;
  // Add code to delete the task at index i
}

