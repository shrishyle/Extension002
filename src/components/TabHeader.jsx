let activeClass = `bg-teal-700 text-teal-50`;
let inActiveClass = `bg-stone-50 text-teal-700 border-indigo-500/100`;

const TabHeader = ({ taskCategory, showTasks, isActive }) => {
  let classes = `min-w-2/25 max-w-6/15 w-auto h-8  flex items-center justify-center rounded-md border-teal-500/100 border-1 shadow-md mr-1 cursor-pointer pr-2 pl-2 hover:bg-teal-700 hover:text-teal-50  ${isActive ? activeClass : inActiveClass}`;

  return (
    <button onClick={showTasks} className={classes}>
      {taskCategory}
    </button>
  );
};

export default TabHeader;
