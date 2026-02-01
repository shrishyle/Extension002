import InputElement from "../InputElement";
import SelectionInputElement from "../SelectionInputElement";
import Button from "../Button";
import { useContext } from "react";
import { TaskContext } from "../../store/task-context";
import { FormDisplayContext } from "../../store/form-display-context";
import React from "react";

const CreateNewTaskForm = () => {
  const { createNewTask, tasks } = useContext(TaskContext);
  const { hide_create_new_task_form_func } = useContext(FormDisplayContext);

  const uniqueTaskCategories = [...new Set(tasks.map((task) => task.taskCategory))];

  return (
    <>
      <div className="mb-2 text-center text-teal-50 flex flex-col  justify-center align-middle w-10/10 h-10 border bg-teal-600 rounded-sm">Create New Task</div>
      <InputElement label={`New Task Title`} name={`New Task Title`} type={`text`} propClass={``} />
      <InputElement label={`Latest Action`} name={`Latest Action`} type={`text`} propClass={``} />
      <InputElement label={`Comments`} name={`Comments`} type={`text`} propClass={``} />
      <SelectionInputElement label={`Select Task Category`} id={`select_task_category`} taskCategories={uniqueTaskCategories} />
      <Button type={`button`} propClasses={`mt-4`} label={`Save Task`} clickHandler={createNewTask} />
      <Button type={`button`} propClasses={``} label={`Cancel`} clickHandler={hide_create_new_task_form_func} />
    </>
  );
};

export default CreateNewTaskForm;
