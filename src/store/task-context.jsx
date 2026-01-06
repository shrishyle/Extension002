import React, { createContext, useReducer } from "react";
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

function taskReducer({ state, action }) {
  if (action.type === "create_new_task") {
    //...
  }

  if (action.type === "modify_task") {
    //...
  }

  if (action.type === "delete_task") {
    //...
  }

  if (action.type === "change_task_category") {
    //...
  }

  if (action.type === "add_new_update") {
    //...
  }

  if (action.type === "modify_task_update") {
    //...
  }

  if (action.type === "delete_task_update") {
    //...
  }

  return state;
}

export default function TaskContextProvider({ children }) {
  const [tasks, taskDispatch] = useReducer(taskReducer, getTasksFromLocalStorage());

  function handleCreateNewTask(id) {
    taskDispatch({
      type: "create_new_task",
      payload: id,
    });
  }

  function handleModifyTask(productId, amount) {
    taskDispatch({
      type: "modify_task",
      payload: {},
    });
  }

  function handleDeleteTask(productId, amount) {
    taskDispatch({
      type: "delete_task",
      payload: {},
    });
  }

  function handleChangeTaskCategory(productId, amount) {
    taskDispatch({
      type: "change_task_category",
      payload: {},
    });
  }

  function handleAddNewUpdate(productId, amount) {
    taskDispatch({
      type: "add_new_update",
      payload: {},
    });
  }

  function handleModifyTaskUpdate(productId, amount) {
    taskDispatch({
      type: "modify_task_update",
      payload: {},
    });
  }

  function handleDeleteTaskUpdate(productId, amount) {
    taskDispatch({
      type: "delete_task_update",
      payload: {},
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
}
