import React from "react";

const TabHeader = ({ taskCategory, showTasks }) => {
  return (
    <button onClick={showTasks} className="min-w-2/25 max-w-6/15 w-auto h-8 bg-blue-200 flex items-center justify-center text-grey-100 rounded-md shadow-md mr-1 cursor-pointer pr-2 pl-2">
      {taskCategory}
    </button>
  );
};

export default TabHeader;
