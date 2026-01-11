import Button from "../Button";
import InputElement from "../InputElement";
import { FormDisplayContext } from "../../store/form-display-context";
import { useContext } from "react";
import React from "react";

const AddUpdateForm = () => {
  const { clearSidebar, show_create_new_task_btn_func } = useContext(FormDisplayContext);

  return (
    <>
      <div className="w-full h-12 bg-teal-700 flex flex-col justify-center border mt-2 rounded-sm text-teal-50 text-center">Add Update</div>
      <InputElement label={`Task Title`} name={`Task Title`} type={`text`} propClass={``} />
      <InputElement label={`Task Title`} name={`Task Title`} type={`text`} propClass={``} />
      <Button type={`button`} propClasses={``} label={`Add Update`} clickHandler="" />
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

export default AddUpdateForm;
