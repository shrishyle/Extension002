import React, { useContext } from "react";
import { FormDisplayContext } from "../store/form-display-context";
import { TaskContext } from "../store/task-context";

const TableBody = ({ data, taskCategory }) => {
  const { show_modify_task_btn_func, show_add_update_btn_func, show_modify_update_btn_func, hide_create_new_task_btn_func, clearSidebar } = useContext(FormDisplayContext);

  let taskToDisplay = data.filter((task) => task.taskCategory === taskCategory);
  let defaultCalsses = "border cursor-pointer border-gray-300";

  let btnDisplayFunc = () => {
    clearSidebar();
    hide_create_new_task_btn_func();
    show_add_update_btn_func();
    show_modify_update_btn_func();
  };

  return (
    <>
      {taskToDisplay.map((task, taskIndex) => (
        <React.Fragment key={task.id}>
          <tr key={task.taskDescription}>
            <td rowSpan={task.taskUpdate.length + 1} className=" border border-gray-300 align-middle text-center">
              {`${taskIndex + 1}.`}
            </td>
            <td
              rowSpan={task.taskUpdate.length + 1}
              className={`pr-3 pl-3 ${defaultCalsses}`}
              onClick={() => {
                hide_create_new_task_btn_func();
                show_add_update_btn_func(task.id);
                show_modify_task_btn_func(task.id);
              }}
            >
              {task.taskDescription}
            </td>
          </tr>
          {task.taskUpdate.map((update, updateIndex) => (
            <tr key={`${taskIndex}${updateIndex}8`}>
              <td className={`text-center pr-2 pl-2 ${defaultCalsses}`} onClick={btnDisplayFunc}>
                {update.date}
              </td>
              <td className={`pr-2 pl-2 ${defaultCalsses}`} onClick={btnDisplayFunc}>
                {update.action}
              </td>
              <td className={`pr-2 pl-2 ${defaultCalsses}`} onClick={btnDisplayFunc}>
                {update.comments}
              </td>
            </tr>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};

export default TableBody;
