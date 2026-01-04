import React from "react";

const TableBody = ({ data, taskCategory }) => {
  let taskToDisplay = data.filter((task) => task.taskCategory === taskCategory);
  console.log(taskToDisplay);

  return (
    <>
      {taskToDisplay.map((task, taskIndex) => (
        <>
          <tr key={task.taskDescription}>
            <td rowSpan={task.taskUpdate.length + 1} className="border border-gray-300 align-middle text-center">
              {`${taskIndex + 1}.`}
            </td>
            <td rowSpan={task.taskUpdate.length + 1} className="border border-gray-300 pr-3 pl-3 cursor-pointer">
              {task.taskDescription}
            </td>
          </tr>
          {task.taskUpdate.map((update, updateIndex) => (
            <tr key={`${taskIndex}${updateIndex}8`}>
              <td key={`${taskIndex}${updateIndex}90`} className="border border-gray-300 text-center pr-2 pl-2 pt-1 pb-1 cursor-pointer">
                {update[0]}
              </td>
              <td key={`${taskIndex}${updateIndex}90`} className="border border-gray-300 pr-2 pl-2 pt-1 pb-1 cursor-pointer">
                {update[1]}
              </td>
              <td key={`${taskIndex}${updateIndex}90`} className="border border-gray-300 pr-2 pl-2 pt-1 pb-1 cursor-pointer">
                {update[2]}
              </td>
            </tr>
          ))}
        </>
      ))}
    </>
  );
};

export default TableBody;
