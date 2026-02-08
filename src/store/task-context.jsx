import React from "react";
import { createContext, useReducer } from "react";
import { saveTasksToLocalStorage, getTasksFromLocalStorage } from "../APIs/api";

export const TaskContext = createContext({
  tasks: [],
  createNewTask: () => {},
  modifyTask: () => {},
  deleteTask: () => {},
  changeTaskCategory: () => {},
  addNewUpdate: () => {},
  modifyTaskUpdate: () => {},
  deleteTaskUpdate: () => {},
});

function taskReducer(state, action) {
  let updatedTasks;

  switch (action.type) {
    case "create_new_task":
      updatedTasks = [...state, action.payload];
      saveTasksToLocalStorage(updatedTasks);
      return updatedTasks;

    case "modify_task":
      updatedTasks = state.map((task) => (task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task));
      saveTasksToLocalStorage(updatedTasks);
      return updatedTasks;

    case "delete_task":
      updatedTasks = state.filter((task) => task.id !== action.payload.id);
      saveTasksToLocalStorage(updatedTasks);
      return updatedTasks;

    case "change_task_category":
      updatedTasks = state.map((task) => (task.id === action.payload.id ? { ...task, taskCategory: action.payload.category } : task));
      saveTasksToLocalStorage(updatedTasks);
      return updatedTasks;

    case "add_new_update":
      updatedTasks = state.map((task) => (task.id === action.payload.id ? { ...task, taskUpdate: [...task.taskUpdate, action.payload.update] } : task));
      saveTasksToLocalStorage(updatedTasks);
      return updatedTasks;

    case "modify_task_update":
      updatedTasks = state.map((task) => (task.id === action.payload.id ? { ...task, taskUpdate: task.taskUpdate.map((upd, i) => (i === action.payload.updateIndex ? action.payload.updatedUpdate : upd)) } : task));
      saveTasksToLocalStorage(updatedTasks);
      return updatedTasks;

    case "delete_task_update":
      updatedTasks = state.map((task) => (task.id === action.payload.id ? { ...task, taskUpdate: task.taskUpdate.filter((_, i) => i !== action.payload.updateIndex) } : task));
      saveTasksToLocalStorage(updatedTasks);
      return updatedTasks;

    default:
      return state;
  }
}

export const TaskContextProvider = ({ children }) => {
  const initialTasks = getTasksFromLocalStorage().map((task) => ({
    ...task,
    id: task.id || crypto.randomUUID(),
  }));
  const [tasks, taskDispatch] = useReducer(taskReducer, initialTasks);

  function handleCreateNewTask(formData) {
    const newTask = {
      id: crypto.randomUUID(),
      taskDescription: formData.title,
      taskCategory: formData.taskCategory,
      taskUpdate: [[new Date().toLocaleDateString(), formData.latestAction, formData.comments]],
    };

    taskDispatch({
      type: "create_new_task",
      payload: newTask,
    });
  }

  function handleDeleteTask(id) {
    taskDispatch({
      type: "delete_task",
      payload: { id },
    });
  }

  function handleModifyTask(id, updatedTask) {
    taskDispatch({
      type: "modify_task",
      payload: { id, updatedTask },
    });
  }

  function handleChangeTaskCategory(id, category) {
    taskDispatch({
      type: "change_task_category",
      payload: { id, category },
    });
  }

  function handleAddNewUpdate(id, update) {
    taskDispatch({
      type: "add_new_update",
      payload: { id, update },
    });
  }

  function handleModifyTaskUpdate(id, updateIndex, updatedUpdate) {
    taskDispatch({
      type: "modify_task_update",
      payload: { id, updateIndex, updatedUpdate },
    });
  }

  function handleDeleteTaskUpdate(id, updateIndex) {
    taskDispatch({
      type: "delete_task_update",
      payload: { id, updateIndex },
    });
  }

  const taskValue = {
    tasks: tasks,
    createNewTask: handleCreateNewTask,
    modifyTask: handleModifyTask,
    deleteTask: handleDeleteTask,
    changeTaskCategory: handleChangeTaskCategory,
    addNewUpdate: handleAddNewUpdate,
    modifyTaskUpdate: handleModifyTaskUpdate,
    deleteTaskUpdate: handleDeleteTaskUpdate,
  };

  return <TaskContext.Provider value={taskValue}>{children}</TaskContext.Provider>;
};
