import React from "react";
import InputElement from "../InputElement";
import SelectionInputElement from "../SelectionInputElement";
import Button from "../Button";
import { useContext } from "react";
import { TaskContext } from "../../store/task-context";
import { FormDisplayContext } from "../../store/form-display-context";

const CreateNewTaskForm = () => {
  const { createNewTask, getUniqueTaskList } = useContext(TaskContext);
  const { hide_create_new_task_form } = useContext(FormDisplayContext);

  return (
    <>
      <div>Create New Task</div>
      <InputElement label={`New Task Title`} name={`New Task Title`} type={`text`} propClass={``} />
      <InputElement label={`Latest Action`} name={`Latest Action`} type={`text`} propClass={``} />
      <InputElement label={`Comments`} name={`Comments`} type={`text`} propClass={``} />
      <SelectionInputElement label={`Select Task Category`} id={`select_task_category`} taskCategories={getUniqueTaskList} />
      <Button type={`button`} propClasses={``} label={`Save Task`} clickHandler={createNewTask} />
      <Button type={`button`} propClasses={``} label={`Cancel`} clickHandler={hide_create_new_task_form} />
    </>
  );
};

export default CreateNewTaskForm;
