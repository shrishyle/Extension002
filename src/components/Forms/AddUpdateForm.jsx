import React from "react";
import Button from "../Button";
import InputElement from "../InputElement";
import { FormDisplayContext } from "../../store/form-display-context";
import { useContext, useState } from "react";
import { TaskContext } from "../../store/task-context";

const AddUpdateForm = () => {
  const { clearSidebar, show_create_new_task_btn_func, formDisplay } = useContext(FormDisplayContext);
  const { tasks, addNewUpdate } = useContext(TaskContext);
  const { selectedTaskId } = formDisplay;

  const taskId = formDisplay.selectedTaskId;
  const selectedTask = tasks.find((task) => task.id === taskId);

  const [formData, setFormData] = useState({
    action: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewUpdate(selectedTaskId, {
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString(),
      action: formData.action,
      comments: formData.comments,
    });
    clearSidebar();
    show_create_new_task_btn_func();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full h-12 bg-teal-700 flex flex-col justify-center border mt-2 rounded-sm text-teal-50 text-center">Add Update</div>
        <InputElement label={`Task Update`} name={`action`} type={`text`} propClass={``} value={formData.action} onChange={handleChange} />
        <InputElement label={`Comments`} name={`comments`} type={`text`} propClass={``} value={formData.comments} onChange={handleChange} />
        <Button type={`submit`} propClasses={``} label={`Add Update`} />
        <Button
          type={`button`}
          propClasses={``}
          label={`Cancel`}
          clickHandler={() => {
            clearSidebar();
            show_create_new_task_btn_func();
          }}
        />
      </form>
    </>
  );
};

export default AddUpdateForm;
