import React, { useContext } from "react";
import { FormDisplayContext } from "../store/form-display-context";
import { TaskContext } from "../store/task-context";

const TableBody = ({ data, taskCategory }) => {
  const { show_modify_task_btn_func, show_add_update_btn_func, show_modify_update_btn_func, clearSidebar } = useContext(FormDisplayContext);

  let taskToDisplay = data.filter((task) => task.taskCategory === taskCategory);
  let defaultCalsses = "border cursor-pointer border-gray-300";

  return (
    <>
      {taskToDisplay.map((task, taskIndex) => (
        <>
          <tr key={task.taskDescription}>
            <td key={`${taskIndex}101${task.taskDescription}`} rowSpan={task.taskUpdate.length + 1} className=" border border-gray-300 align-middle text-center">
              {`${taskIndex + 1}.`}
            </td>
            <td
              key={`${taskIndex}102${task.taskDescription}`}
              rowSpan={task.taskUpdate.length + 1}
              className={`pr-3 pl-3 ${defaultCalsses}`}
              onClick={() => {
                clearSidebar();
                show_add_update_btn_func();
                show_modify_task_btn_func();
              }}
            >
              {task.taskDescription}
            </td>
          </tr>
          {task.taskUpdate.map((update, updateIndex) => (
            <tr key={`${taskIndex}${updateIndex}8`}>
              <td
                key={`${taskIndex}${updateIndex}90`}
                className={`text-center pr-2 pl-2 ${defaultCalsses}`}
                onClick={() => {
                  clearSidebar();
                  show_add_update_btn_func();
                  show_modify_update_btn_func();
                }}
              >
                {update[0]}
              </td>
              <td
                key={`${taskIndex}${updateIndex}91`}
                className={`pr-2 pl-2 ${defaultCalsses}`}
                onClick={() => {
                  clearSidebar();
                  show_add_update_btn_func();
                  show_modify_update_btn_func();
                }}
              >
                {update[1]}
              </td>
              <td
                key={`${taskIndex}${updateIndex}92`}
                className={`pr-2 pl-2 ${defaultCalsses}`}
                onClick={() => {
                  clearSidebar();
                  show_add_update_btn_func();
                  show_modify_update_btn_func();
                }}
              >
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
