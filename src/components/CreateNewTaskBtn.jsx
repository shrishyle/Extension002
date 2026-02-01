import React, { useContext } from "react";
import { FormDisplayContext } from "../store/form-display-context";

const CreateNewTaskBtn = () => {
  const { formDisplay } = useContext(FormDisplayContext);
  return (
    <button className="bg-teal-700 text-teal-50 w-10/10 h-12 rounded-md border cursor-pointer mb-2" onClick={()=> formDisplay.show_create_new_task_form_func()}>
      Create New Task
    </button>
  );
};

export default CreateNewTaskBtn;
