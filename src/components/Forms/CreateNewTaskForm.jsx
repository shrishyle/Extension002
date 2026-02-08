import InputElement from "../InputElement";
import SelectionInputElement from "../SelectionInputElement";
import Button from "../Button";
import { useContext, useState } from "react";
import { TaskContext } from "../../store/task-context-0";
import { FormDisplayContext } from "../../store/form-display-context";
import React from "react";

const CreateNewTaskForm = () => {
  const { createNewTask, tasks } = useContext(TaskContext);
  const { hide_create_new_task_form_func } = useContext(FormDisplayContext);

  const [formData, setFormData] = useState({
    title: "",
    latestAction: "",
    comments: "",
    taskCategory: "",
  });

  const uniqueTaskCategories = [...new Set(tasks.map((task) => task.taskCategory))];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full h-12 bg-teal-700 flex flex-col justify-center border mt-2 rounded-sm text-teal-50 text-center">Write New Task</div>
        <InputElement label={`New Task Title`} name={`New Task Title`} type={`text`} propClass={``} value={formData.title} onChange={handleChange} />
        <InputElement label={`Latest Action`} name={`Latest Action`} type={`text`} propClass={``} value={formData.latestAction} onChange={handleChange} />
        <InputElement label={`Comments`} name={`Comments`} type={`text`} propClass={``} value={formData.comments} onChange={handleChange} />
        <SelectionInputElement label={`Select Task Category`} id={`select_task_category`} taskCategories={uniqueTaskCategories} onChange={handleChange} />
        <Button type={`submit`} propClasses={``} label={`Save Task`} />
        <Button type={`button`} propClasses={``} label={`Cancel`} clickHandler={hide_create_new_task_form_func} />
      </form>
    </>
  );
};

export default CreateNewTaskForm;
