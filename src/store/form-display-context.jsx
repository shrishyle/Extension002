import { createContext, useReducer } from "react";
import React from "react";

const formDisplayStatusObject = {
  showCreateNewTaskBtn: true,
  showCreateNewTaskForm: false,
  showModifyTaskBtn: false,
  showModifyTaskForm: false,
  showAddUpdateBtn: false,
  showAddUpdateForm: false,
  showModifyUpdateBtn: false,
  showModifyUpdateForm: false,
};

export const FormDisplayContext = createContext({
  formDisplay: {},
  show_create_new_task_btn_func: () => {},
  hide_create_new_task_btn_func: () => {},
  show_create_new_task_form_func: () => {},
  hide_create_new_task_form_func: () => {},
  show_modify_task_btn_func: () => {},
  hide_modify_task_btn_func: () => {},
  show_modify_task_form_func: () => {},
  hide_modify_task_form_func: () => {},
  show_add_update_btn_func: () => {},
  hide_add_update_btn_func: () => {},
  show_add_update_form_func: () => {},
  hide_add_update_form_func: () => {},
  show_modify_update_btn_func: () => {},
  hide_modify_update_btn_func: () => {},
  show_modify_update_form_func: () => {},
  hide_modify_update_form_func: () => {},
});

function formReducer(state, action) {
  //1
  if (action.type === "show_create_new_task_btn") {
    return {
      ...state,
      showCreateNewTaskBtn: true,
    };
  }

  //2
  if (action.type === "hide_create_new_task_btn") {
    return {
      ...state,
      showCreateNewTaskBtn: false,
    };
  }

  //3
  if (action.type === "show_create_new_task_form") {
    return {
      ...state,
      showCreateNewTaskForm: true,
      // showCreateNewTaskBtn: false,
    };
  }

  //4
  if (action.type === "hide_create_new_task_form") {
    return {
      ...state,
      showCreateNewTaskForm: false,
    };
  }

  //5
  if (action.type === "show_modify_task_btn") {
    return {
      ...state,
      showModifyTaskBtn: true,
    };
  }

  //6
  if (action.type === "hide_modify_task_btn") {
    return {
      ...state,
      showModifyTaskBtn: false,
    };
  }

  //7
  if (action.type === "show_modify_task_form") {
    return {
      ...state,
      showModifyTaskForm: true,
    };
  }

  //8
  if (action.type === "hide_modify_task_form") {
    return {
      ...state,
      showModifyTaskForm: false,
    };
  }

  //9
  if (action.type === "show_add_update_btn") {
    return {
      ...state,
      showAddUpdateBtn: true,
    };
  }

  //10
  if (action.type === "hide_add_update_btn") {
    return {
      ...state,
      showAddUpdateBtn: false,
    };
  }

  //11
  if (action.type === "show_add_update_form") {
    return {
      ...state,
      showAddUpdateForm: true,
    };
  }

  //12
  if (action.type === "hide_add_update_form") {
    return {
      ...state,
      showAddUpdateForm: false,
    };
  }

  //13
  if (action.type === "show_modify_update_btn") {
    return {
      ...state,
      showModifyUpdateBtn: true,
    };
  }

  //14
  if (action.type === "hide_modify_update_btn") {
    return {
      ...state,
      showModifyUpdateBtn: false,
    };
  }

  //15
  if (action.type === "show_modify_update_form") {
    return {
      ...state,
      showModifyUpdateForm: true,
    };
  }

  //16
  if (action.type === "hide_modify_update_form") {
    return {
      ...state,
      showModifyUpdateForm: false,
    };
  }

  return state;
}

export const FormDisplayContextProvider = ({ children }) => {
  const [formDisplay, formDisplayDispatch] = useReducer(formReducer, formDisplayStatusObject);

  //1
  function show_create_new_task_btn() {
    formDisplayDispatch({
      type: "show_create_new_task_btn",
      //   payload: formDisplayStatusObject,
    });
  }

  //2
  function hide_create_new_task_btn() {
    formDisplayDispatch({
      type: "hide_create_new_task_btn",
      //   payload: formDisplayStatusObject,
    });
  }

  //3
  function show_create_new_task_form() {
    formDisplayDispatch({
      type: "show_create_new_task_form",
      //   payload: formDisplayStatusObject,
    });
  }

  //4
  function hide_create_new_task_form() {
    formDisplayDispatch({
      type: "hide_create_new_task_form",
      //   payload: formDisplayStatusObject,
    });
  }

  //5
  function show_modify_task_btn() {
    formDisplayDispatch({
      type: "show_modify_task_btn",
      //   payload: formDisplayStatusObject,
    });
  }

  //6
  function hide_modify_task_btn() {
    formDisplayDispatch({
      type: "hide_modify_task_btn",
      //   payload: formDisplayStatusObject,
    });
  }

  //7
  function show_modify_task_form() {
    formDisplayDispatch({
      type: "show_modify_task_form",
      //   payload: formDisplayStatusObject,
    });
  }

  //8
  function hide_modify_task_form() {
    formDisplayDispatch({
      type: "hide_modify_task_form",
      //   payload: formDisplayStatusObject,
    });
  }

  //9
  function show_add_update_btn() {
    formDisplayDispatch({
      type: "show_add_update_btn",
      //   payload: formDisplayStatusObject,
    });
  }

  //10
  function hide_add_update_btn() {
    formDisplayDispatch({
      type: "hide_add_update_btn",
      //   payload: formDisplayStatusObject,
    });
  }

  //11
  function show_add_update_form() {
    formDisplayDispatch({
      type: "show_add_update_form",
      //   payload: formDisplayStatusObject,
    });
  }

  //12
  function hide_add_update_form() {
    formDisplayDispatch({
      type: "hide_add_update_form",
      //   payload: formDisplayStatusObject,
    });
  }

  //13
  function show_modify_update_btn() {
    formDisplayDispatch({
      type: "show_modify_update_btn",
      //   payload: formDisplayStatusObject,
    });
  }

  //14
  function hide_modify_update_btn() {
    formDisplayDispatch({
      type: "hide_modify_update_btn",
      //   payload: formDisplayStatusObject,
    });
  }

  //15
  function show_modify_update_form() {
    formDisplayDispatch({
      type: "show_modify_update_form",
      //   payload: formDisplayStatusObject,
    });
  }

  //16
  function hide_modify_update_form() {
    formDisplayDispatch({
      type: "hide_modify_update_form",
      //   payload: formDisplayStatusObject,
    });
  }

  const value = {
    formDisplay: formDisplay,
    show_create_new_task_btn_func: show_create_new_task_btn,
    hide_create_new_task_btn_func: hide_create_new_task_btn,
    show_create_new_task_form_func: show_create_new_task_form,
    hide_create_new_task_form_func: hide_create_new_task_form,
    show_modify_task_btn_func: show_modify_task_btn,
    hide_modify_task_btn_func: hide_modify_task_btn,
    show_modify_task_form_func: show_modify_task_form,
    hide_modify_task_form_func: hide_modify_task_form,
    show_add_update_btn_func: show_add_update_btn,
    hide_add_update_btn_func: hide_add_update_btn,
    show_add_update_form_func: show_add_update_form,
    hide_add_update_form_func: hide_add_update_form,
    show_modify_update_btn_func: show_modify_update_btn,
    hide_modify_update_btn_func: hide_modify_update_btn,
    show_modify_update_form_func: show_modify_update_form,
    hide_modify_update_form_func: hide_modify_update_form,
  };

  return <FormDisplayContext.Provider value={value}>{children}</FormDisplayContext.Provider>;
};
