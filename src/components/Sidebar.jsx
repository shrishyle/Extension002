import React from "react";
import { useContext } from "react";
import { FormDisplayContext } from "../store/form-display-context";
import CreateNewTaskForm from "./Forms/CreateNewTaskForm";
import ModifyTaskForm from "./Forms/ModifyTaskForm";
import AddUpdateForm from "./Forms/AddUpdateForm";
import Button from "./Button";

const Sidebar = () => {
  const { formDisplay, show_modify_task_form_func, show_add_update_form_func, show_modify_update_form_func, clearSidebar, show_create_new_task_form_func } = useContext(FormDisplayContext);

  return (
    <div className="w-1/7 min-h-screen bg-teal-50 flex flex-col items-center justify-top shadow-md text-grey-500 p-1">
      {formDisplay.showCreateNewTaskForm && <CreateNewTaskForm />}
      {formDisplay.showModifyTaskForm && <ModifyTaskForm />}
      {formDisplay.showModifyUpdateForm && <ModifyTaskForm />}
      {formDisplay.showAddUpdateForm && <AddUpdateForm />}

      {formDisplay.showCreateNewTaskBtn && (
        <Button
          type="button"
          label="Create New Task"
          clickHandler={() => {
            clearSidebar();
            show_create_new_task_form_func();
          }}
        />
      )}

      {formDisplay.showModifyTaskBtn && (
        <Button
          type="button"
          label="Modify Task"
          clickHandler={() => {
            clearSidebar();
            show_modify_task_form_func();
          }}
        />
      )}

      {formDisplay.showAddUpdateBtn && (
        <Button
          type="button"
          label="Add Update"
          clickHandler={() => {
            clearSidebar();
            show_add_update_form_func();
          }}
        />
      )}

      {formDisplay.showModifyUpdateBtn && (
        <Button
          type="button"
          label="Modify Update"
          clickHandler={() => {
            clearSidebar();
            show_modify_update_form_func();
          }}
        />
      )}
    </div>
  );
};

export default Sidebar;
