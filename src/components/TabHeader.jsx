import React from "react";

const TabHeader = ({ taskCategory, showTasks, isActive }) => {
  let classes = `min-w-2/25 max-w-6/15 w-auto h-8  flex items-center justify-center text-grey-100 rounded-md shadow-md mr-1 cursor-pointer pr-2 pl-2 hover:bg-green-300 ${isActive ? "bg-green-300" : "bg-blue-300"}`;

  console.log(isActive);
  return (
    <button onClick={showTasks} className={classes}>
      {taskCategory}
    </button>
  );
};

export default TabHeader;
