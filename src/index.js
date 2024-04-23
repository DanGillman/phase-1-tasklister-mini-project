document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener("submit", handleFormSubmit);

  const tasksList = document.getElementById("tasks");
  tasksList.addEventListener("click", handleTaskDelete);
});

function handleFormSubmit(event) {
  event.preventDefault();
  const taskInput = document.getElementById("new-task-description");
  const taskDescription = taskInput.value;

  const newTask = createTaskElement(taskDescription);
  appendTask(newTask);

  taskInput.value = "";
}

function createTaskElement(taskDescription) {
  const newTask = document.createElement("li");
  newTask.innerText = taskDescription;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  newTask.appendChild(deleteButton);

  return newTask;
}

function appendTask(taskElement) {
  const tasksList = document.getElementById("tasks");
  tasksList.appendChild(taskElement);
}

function handleTaskDelete(event) {
  if (event.target.tagName === "BUTTON") {
    const taskItem = event.target.parentElement;
    taskItem.remove();
  }
}