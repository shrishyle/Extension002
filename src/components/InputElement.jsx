import React from "react";
const InputElement = ({ label, name, type, propClass, ...props }) => {
  let classes = `border-teal-600 border rounded-sm w-10/10 h-8`;
  return (
    <>
      <label className="block text-left mt-1 text-teal-600">{label}</label>
      <input type={type} name={name} className={`${classes} ${propClass}`} {...props} />
    </>
  );
};

export default InputElement;
