import { useContext } from "react";
import CreateNewTaskBtn from "./CreateNewTaskBtn";
import CreateNewTaskForm from "./Forms/CreateNewTaskForm";
import { FormDisplayContext } from "../store/form-display-context";
import React from "react";

const Sidebar = ({ taskData }) => {
  const { formDisplay } = useContext(FormDisplayContext);

  return (
    <div className="w-1/7 min-h-screen bg-teal-50 flex flex-col items-center justify-top shadow-md text-grey-500 p-1">
      {formDisplay.showCreateNewTaskBtn && <CreateNewTaskBtn />}
      {formDisplay.showCreateNewTaskForm && <CreateNewTaskForm />}
    </div>
  );
};

export default Sidebar;
