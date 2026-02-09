import { createContext, useReducer } from "react";
import React from "react";

const formDisplayStatusObject = {
  // Buttons
  showCreateNewTaskBtn: true,
  showModifyTaskBtn: false,
  showAddUpdateBtn: false,
  showModifyUpdateBtn: false,
  // Forms
  showCreateNewTaskForm: false,
  showModifyTaskForm: false,
  showAddUpdateForm: false,
  showModifyUpdateForm: false,
};

export const FormDisplayContext = createContext({
  formDisplay: {},
  // Show Button
  show_create_new_task_btn_func: () => {},
  show_modify_task_btn_func: () => {},
  show_add_update_btn_func: () => {},
  show_modify_update_btn_func: () => {},
  // Hide Button
  hide_create_new_task_btn_func: () => {},
  hide_modify_task_btn_func: () => {},
  hide_add_update_btn_func: () => {},
  hide_modify_update_btn_func: () => {},
  // Show Form
  show_create_new_task_form_func: () => {},
  show_modify_task_form_func: () => {},
  show_add_update_form_func: () => {},
  show_modify_update_form_func: () => {},
  // Hide Form
  hide_create_new_task_form_func: () => {},
  hide_modify_task_form_func: () => {},
  hide_add_update_form_func: () => {},
  hide_modify_update_form_func: () => {},
  clearSidebar: () => {},
});

function formReducer(state, action) {
  if (action.type === "SET") {
    return {
      ...state,
      ...action.payload,
    };
  }

  if (action.type === "CLEAR") {
    return { ...formDisplayStatusObject };
  }

  return state;
}

export const FormDisplayContextProvider = ({ children }) => {
  const [formDisplay, dispatch] = useReducer(formReducer, formDisplayStatusObject);

  function setDisplay(payload) {
    dispatch({
      type: "SET",
      payload,
    });
  }

  function clearSidebar() {
    dispatch({ type: "CLEAR" });
  }

  const value = {
    formDisplay,
    // buttons
    show_create_new_task_btn_func: () => setDisplay({ showCreateNewTaskBtn: true }),
    hide_create_new_task_btn_func: () => setDisplay({ showCreateNewTaskBtn: false }),
    show_modify_task_btn_func: () => setDisplay({ showModifyTaskBtn: true }),
    hide_modify_task_btn_func: () => setDisplay({ showModifyTaskBtn: false }),
    show_add_update_btn_func: () => setDisplay({ showAddUpdateBtn: true }),
    hide_add_update_btn_func: () => setDisplay({ showAddUpdateBtn: false }),
    show_modify_update_btn_func: () => setDisplay({ showModifyUpdateBtn: true }),
    hide_modify_update_btn_func: () => setDisplay({ showModifyUpdateBtn: false }),
    // forms
    show_create_new_task_form_func: () => setDisplay({ showCreateNewTaskForm: true, showCreateNewTaskBtn: false }),
    hide_create_new_task_form_func: () => setDisplay({ showCreateNewTaskForm: false, showCreateNewTaskBtn: true }),
    show_modify_task_form_func: () => setDisplay({ showModifyTaskForm: true }),
    hide_modify_task_form_func: () => setDisplay({ showModifyTaskForm: false }),
    show_add_update_form_func: () => setDisplay({ showAddUpdateForm: true }),
    hide_add_update_form_func: () => setDisplay({ showAddUpdateForm: false }),
    show_modify_update_form_func: () => setDisplay({ showModifyUpdateForm: true }),
    hide_modify_update_form_func: () => setDisplay({ showModifyUpdateForm: false }),
    clearSidebar,
  };

  return <FormDisplayContext.Provider value={value}>{children}</FormDisplayContext.Provider>;
};
