import InputElement from "../InputElement";
import SelectionInputElement from "../SelectionInputElement";
import Button from "../Button";
import { useContext, useState } from "react";
import { TaskContext } from "../../store/task-context";
import { FormDisplayContext } from "../../store/form-display-context";
import React from "react";

const ModifyUpdateForm = () => {
  const { tasks, modifyTaskUpdate, deleteTaskUpdate } = useContext(TaskContext);
  const { clearSidebar, show_create_new_task_btn_func, formDisplay } = useContext(FormDisplayContext);
  const { selectedTaskId, selectedUpdateId } = formDisplay;

  const taskId = formDisplay.selectedTaskId;
  const selectedTask = tasks.find((task) => task.id === taskId);
  const selectedUpdate = selectedTask.taskUpdate.find((update) => update.id === selectedUpdateId);
  const { action, comments } = selectedUpdate;

  const [formData, setFormData] = useState({
    latestAction: action,
    comments: comments,
  });

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // modifyTaskUpdate(selectedTaskId, {
    //   id: crypto.randomUUID(),
    //   date: new Date().toLocaleDateString(),
    //   action: formData.latestAction,
    //   comments: formData.comments,
    // });
    clearSidebar();
    show_create_new_task_btn_func();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full h-12 bg-teal-700 flex flex-col justify-center border mt-2 rounded-sm text-teal-50 text-center">Modify Update</div>
        <InputElement label={`Modify Task Update`} name={`latestAction`} type={`text`} propClass={``} value={formData.latestAction} onChange={handleChange} />
        <InputElement label={`Comments`} name={`comments`} type={`text`} propClass={``} value={formData.comments} onChange={handleChange} />
        <Button type={`submit`} propClasses={``} label={`Modify Update`} clickHandler={handleSubmit} />
        <Button type={`button`} propClasses={``} label={`Delete Update`} clickHandler={deleteTaskUpdate} />
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

export default ModifyUpdateForm;
