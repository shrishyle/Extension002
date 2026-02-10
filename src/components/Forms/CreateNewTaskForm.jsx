import InputElement from "../InputElement";
import SelectionInputElement from "../SelectionInputElement";
import Button from "../Button";
import { useContext, useState, useMemo } from "react";
import { TaskContext } from "../../store/task-context";
import { FormDisplayContext } from "../../store/form-display-context";
import React from "react";

const CreateNewTaskForm = () => {
  const { createNewTask, tasks } = useContext(TaskContext);
  const { clearSidebar } = useContext(FormDisplayContext);

  const [formData, setFormData] = useState({
    title: "",
    latestAction: "",
    comments: "",
    taskCategory: "",
    newCategory: "",
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
    console.log(formData);
    e.preventDefault();
    createNewTask(formData);
    setFormData({
      title: "",
      latestAction: "",
      comments: "",
      taskCategory: "",
      newCategory: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full h-12 bg-teal-700 flex flex-col justify-center border mt-2 rounded-sm text-teal-50 text-center">Write New Task</div>
        <InputElement label={`New Task Title`} name={`title`} type={`text`} propClass={``} value={formData.title} onChange={handleChange} />
        <InputElement label={`Latest Action`} name={`latestAction`} type={`text`} propClass={``} value={formData.latestAction} onChange={handleChange} />
        <InputElement label={`Comments`} name={`comments`} type={`text`} propClass={``} value={formData.comments} onChange={handleChange} />
        <SelectionInputElement label="Select Task Category" name="taskCategory" value={formData.taskCategory} taskCategories={uniqueTaskCategories} onChange={handleChange} />
        {formData.taskCategory === "Create New Category" && <InputElement label="New Category Name" name="newCategory" type="text" value={formData.newCategory} onChange={handleChange} />}
        <Button type={`submit`} propClasses={``} label={`Save Task`} disabled={!formData.title || !formData.taskCategory} />
        <Button type={`button`} propClasses={``} label={`Cancel`} clickHandler={clearSidebar} />
      </form>
    </>
  );
};

export default CreateNewTaskForm;
