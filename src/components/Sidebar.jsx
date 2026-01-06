import React, { useState } from "react";
import CreateNewTaskBtn from "./CreateNewTaskBtn";

const Sidebar = ({ data }) => {
  const [display, setDisplay] = useState(() => {
    return {
      showCreateNewTaskBtn: true,
      showCreateNewTaskForm: false,
      showModifyTaskBtn: false,
      showModifyTaskForm: false,
      showAddUpdateBtn: false,
      showAddUpdateForm: false,
      showModifyUpdateBtn: false,
      showModifyUpdateForm: false,
    };
  });

  return (
    <div className="w-1/7 min-h-screen bg-teal-50 flex flex-col items-center justify-top shadow-md text-grey-500 p-1">
      <CreateNewTaskBtn />
    </div>
  );
};

export default Sidebar;
