// import taskData from "../data/API";

const STORAGE_KEY = "taskData";

function saveTasksToLocalStorage(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

if (!localStorage.getItem("taskData")) {
  saveTasksToLocalStorage(taskData);
}

function getTasksFromLocalStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export { saveTasksToLocalStorage, getTasksFromLocalStorage };
