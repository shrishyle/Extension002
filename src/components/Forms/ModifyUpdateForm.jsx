import InputElement from "../InputElement";
import SelectionInputElement from "../SelectionInputElement";
import Button from "../Button";
import { useContext } from "react";
import { TaskContext } from "../../store/task-context";
import { FormDisplayContext } from "../../store/form-display-context";
import React from "react";

const ModifyUpdateForm = () => {
  const { tasks, modifyTask, deleteTask } = useContext(TaskContext);
  const { clearSidebar, show_create_new_task_btn_func } = useContext(FormDisplayContext);

  return (
    <>
      <div className="w-full h-12 bg-teal-700 flex flex-col justify-center border mt-2 rounded-sm text-teal-50 text-center">Modify your Task</div>
      <InputElement label={`Task Title`} name={`Task Title`} type={`text`} propClass={``} />
      <SelectionInputElement label={`Select Task Category`} id={`select_task_category`} taskCategories={uniqueTaskCategories} />
      <Button type={`button`} propClasses={``} label={`Modify Task`} clickHandler={modifyTask} />
      <Button type={`button`} propClasses={``} label={`Delete Task`} clickHandler={deleteTask} />
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

export default ModifyUpdateForm;
