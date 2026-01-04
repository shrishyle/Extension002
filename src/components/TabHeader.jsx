import React from "react";

let activeClass = `bg-teal-200 text-stone-800`;
let inActiveClass = `bg-stone-300 text-stone-600`;

const TabHeader = ({ taskCategory, showTasks, isActive }) => {
  let classes = `min-w-2/25 max-w-6/15 w-auto h-8  flex items-center justify-center ${inActiveClass} rounded-md shadow-md mr-1 cursor-pointer pr-2 pl-2 hover:bg-teal-100 ${isActive ? activeClass : undefined}`;

  console.log(isActive);
  return (
    <button onClick={showTasks} className={classes}>
      {taskCategory}
    </button>
  );
};

export default TabHeader;
