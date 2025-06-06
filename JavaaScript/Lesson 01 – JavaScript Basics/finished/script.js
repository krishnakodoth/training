let tasks = [];

function addTask() {
  const task = prompt("Enter a task:");
  if (task) {
    tasks.push({ name: task, completed: false });
    console.log("Task added!");
  }
}

function viewTasks() {
  if (tasks.length === 0) {
    console.log("No tasks available.");
    return;
  }

  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.name} [${task.completed ? "✓" : "✗"}]`);
    // ✓ is the checkmark, ✗ is the close (cross) symbol
    // No additional code needed here for displaying checkmark/cross, as it's already shown in the console.log above.
  });
}

function deleteTask() {
  const index = prompt("Enter the task number to delete:");
  const i = parseInt(index) - 1;
  if (!isNaN(i) && i >= 0 && i < tasks.length) {
    tasks.splice(i, 1);
    console.log("Task deleted.");
  } else {
    console.log("Invalid index.");
  }
}

function markTaskCompleted() {
  const index = prompt("Enter the task number to mark as completed:");
  const i = parseInt(index) - 1;
  // Add code to mark the task at index i as completed
  console.log("Task marked as completed:", index);
}