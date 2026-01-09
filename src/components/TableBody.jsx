const TableBody = ({ data, taskCategory }) => {
  let taskToDisplay = data.filter((task) => task.taskCategory === taskCategory);
  let defaultCalsses = "border cursor-pointer border-gray-300";

  return (
    <>
      {taskToDisplay.map((task, taskIndex) => (
        <>
          <tr key={task.taskDescription}>
            <td rowSpan={task.taskUpdate.length + 1} className=" border border-gray-300 align-middle text-center">
              {`${taskIndex + 1}.`}
            </td>
            <td rowSpan={task.taskUpdate.length + 1} className={`pr-3 pl-3 ${defaultCalsses}`}>
              {task.taskDescription}
            </td>
          </tr>
          {task.taskUpdate.map((update, updateIndex) => (
            <tr key={`${taskIndex}${updateIndex}8`}>
              <td key={`${taskIndex}${updateIndex}90`} className={`text-center pr-2 pl-2 ${defaultCalsses}`}>
                {update[0]}
              </td>
              <td key={`${taskIndex}${updateIndex}90`} className={`pr-2 pl-2 ${defaultCalsses}`}>
                {update[1]}
              </td>
              <td key={`${taskIndex}${updateIndex}90`} className={`pr-2 pl-2 ${defaultCalsses}`}>
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
