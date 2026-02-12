import React, { useContext } from "react";
import { FormDisplayContext } from "../store/form-display-context";
import { TaskContext } from "../store/task-context";

const TableBody = ({ taskCategory }) => {
  const { show_modify_task_btn_func, show_add_update_btn_func, show_modify_update_btn_func, hide_create_new_task_btn_func, clearSidebar } = useContext(FormDisplayContext);
  const { tasks } = useContext(TaskContext);

  let taskToDisplay = tasks.filter((task) => task.taskCategory === taskCategory);
  let defaultClasses = "border cursor-pointer border-gray-300";

  let btnDisplayFunc = (taskId, updateId) => {
    clearSidebar();
    hide_create_new_task_btn_func();
    // show_add_update_btn_func(taskId, updateId);
    show_modify_update_btn_func(taskId, updateId);
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
              className={`pr-3 pl-3 ${defaultClasses}`}
              onClick={() => {
                // clearSidebar();
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
              <td className={`text-center pr-2 pl-2 ${defaultClasses}`} onClick={() => btnDisplayFunc(task.id, update.id)}>
                {update.date}
              </td>
              <td className={`pr-2 pl-2 ${defaultClasses}`} onClick={() => btnDisplayFunc(task.id, update.id)}>
                {update.action}
              </td>
              <td className={`pr-2 pl-2 ${defaultClasses}`} onClick={() => btnDisplayFunc(task.id, update.id)}>
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
