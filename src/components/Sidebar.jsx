import { useContext } from "react";
import CreateNewTaskBtn from "./CreateNewTaskBtn";
import CreateNewTaskForm from "./Forms/CreateNewTaskForm";
import { FormDisplayContext } from "../store/form-display-context";
import Button from "./Button";
import ModifyTaskForm from "./Forms/ModifyTaskForm";
import React from "react";

const Sidebar = () => {
  const { formDisplay, show_modify_task_form_func, show_add_update_form_func, show_modify_update_form_func, clearSidebar } = useContext(FormDisplayContext);

  return (
    <div className="w-1/7 min-h-screen bg-teal-50 flex flex-col items-center justify-top shadow-md text-grey-500 p-1">
      {formDisplay.showCreateNewTaskBtn && <CreateNewTaskBtn />}
      {formDisplay.showCreateNewTaskForm && <CreateNewTaskForm />}
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
      {formDisplay.showModifyTaskForm && <ModifyTaskForm />}
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
