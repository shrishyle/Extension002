import { useContext } from "react";
import { FormDisplayContext } from "../store/form-display-context";
import CreateNewTaskBtn from "./CreateNewTaskBtn";
import CreateNewTaskForm from "./Forms/CreateNewTaskForm";
import React from "react";

const Sidebar = () => {
  const { formDisplay } = useContext(FormDisplayContext);

  return (
    <div className="w-1/7 min-h-screen bg-teal-50 flex flex-col items-center justify-top shadow-md text-grey-500 p-1">
      {formDisplay.showCreateNewTaskBtn && <CreateNewTaskBtn />}
      <div className="border-teal-600 border rounded-sm p-2">{formDisplay.showCreateNewTaskForm && <CreateNewTaskForm />}</div>
    </div>
  );
};

export default Sidebar;
