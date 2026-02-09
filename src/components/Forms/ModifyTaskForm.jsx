import InputElement from "../InputElement";
import SelectionInputElement2 from "../SelectionInputElement2";
import SelectionInputElement from "../SelectionInputElement";
import Button from "../Button";
import { useContext, useState } from "react";
import { TaskContext } from "../../store/task-context";
import { FormDisplayContext } from "../../store/form-display-context";
import React from "react";

const ModifyTaskForm = () => {
  const { tasks, modifyTask, deleteTask } = useContext(TaskContext);
  const { clearSidebar, show_create_new_task_btn_func, formDisplay } = useContext(FormDisplayContext);

  const taskId = formDisplay.selectedTaskId;
  console.log("Selected Task ID:", taskId);

  const handleDeleteTask = () => {
    if (!taskId) return;
    if (!window.confirm("Delete this task permanently??")) return;
    deleteTask(taskId);
    clearSidebar();
    show_create_new_task_btn_func();
  };

  const uniqueTaskCategories = [...new Set(tasks.map((task) => task.taskCategory))];

  let taskStatus = ["Completed", "Work-in-Progress", "Archive"];
  return (
    <>
      <div className="w-full h-12 bg-teal-700 flex flex-col justify-center border mt-2 rounded-sm text-teal-50 text-center">Modify your Task</div>
      <InputElement label={`Task Title`} name={`Task Title`} type={`text`} propClass={``} />
      <SelectionInputElement2 label={`Change Task Category`} id={`change_task_category`} taskCategories={uniqueTaskCategories} />
      <SelectionInputElement label={`Select Task Status`} id={`select_task_status`} taskCategories={taskStatus} />
      <Button type={`button`} propClasses={``} label={`Modify Task`} clickHandler={modifyTask} />
      <Button type={`button`} propClasses={``} label={`Delete Task`} clickHandler={handleDeleteTask} />
      <Button
        type={`button`}
        propClasses={``}
        label={`Cancel`}
        clickHandler={() => {
          clearSidebar();
          show_create_new_task_btn_func();
        }}
      />
    </>
  );
};

export default ModifyTaskForm;
