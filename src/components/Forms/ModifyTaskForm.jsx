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
  const selectedTaskArray = tasks.filter((task) => task.id === taskId);
  const selectedTask = selectedTaskArray[0];

  const selectedTaskData = {
    id: selectedTask.id,
    title: selectedTask.taskDescription,
    taskCategory: selectedTask.taskCategory,
    newCategory: "",
  };

  const [formData, setFormData] = useState(selectedTaskData);

  // Delete Task
  const handleDeleteTask = () => {
    if (!taskId) return;
    if (!window.confirm("Delete this task permanently??")) return;
    deleteTask(taskId);
    clearSidebar();
    show_create_new_task_btn_func();
  };

  // Modify a Task
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let payload = {
      taskDescription: formData.title,
      taskCategory: formData.taskCategory === "Create New Category" ? formData.newCategory : formData.taskCategory,
    };

    let id = formData.id;
    modifyTask(id, payload);
    setFormData({
      id: null,
      title: "",
      taskCategory: "",
      newCategory: "",
    });
    clearSidebar();
    show_create_new_task_btn_func();
  };

  const uniqueTaskCategories = [...new Set(tasks.map((task) => task.taskCategory))];

  let taskStatus = ["Completed", "Work-in-Progress", "Archive"];
  return (
    <>
      <div className="w-full h-12 bg-teal-700 flex flex-col justify-center border mt-2 rounded-sm text-teal-50 text-center">Modify your Task</div>
      <form onSubmit={handleSubmit}>
        <InputElement label={`Task Title`} name={`title`} type={`text`} propClass={``} value={formData.title} onChange={handleChange} />
        <SelectionInputElement2 label={`Change Task Category`} id={`taskCategory`} name={`taskCategory`} taskCategories={uniqueTaskCategories} value={formData.taskCategory} onChange={handleChange} />
        {formData.taskCategory === "Create New Category" && <InputElement label="New Category Name" name="newCategory" type="text" value={formData.newCategory} onChange={handleChange} />}
        <SelectionInputElement label={`Select Task Status`} id={`select_task_status`} taskCategories={taskStatus} />
        <Button type={`submit`} propClasses={``} label={`Modify Task`} clickHandler={handleSubmit} />
      </form>
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
