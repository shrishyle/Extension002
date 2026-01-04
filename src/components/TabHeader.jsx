import React from "react";

const TabHeader = ({ taskCategory, showTasks }) => {
  return (
    <button onClick={showTasks} className="w-2/15 h-8 bg-blue-200 flex items-center justify-center text-grey-100 rounded-md shadow-md mr-1">
      {taskCategory}
    </button>
  );
};

export default TabHeader;
