import React from "react";

const TabHeader = ({ taskCategory, showTasks, isActive }) => {
  let classes = `min-w-2/25 max-w-6/15 w-auto h-8  flex items-center justify-center text-grey-100 rounded-md shadow-md mr-1 cursor-pointer pr-2 pl-2 hover:bg-blue-300 ${isActive ? "bg-orange-200" : "bg-orange-800"}`;

  return (
    <button onClick={showTasks} className={classes}>
      {taskCategory}
    </button>
  );
};

export default TabHeader;
