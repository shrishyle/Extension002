import React from "react";

const InputElement = ({ label, name, type, propClass, ...props }) => {
  let classes = ``;
  return (
    <>
      <label>{label}</label>
      <input type={type} name={name} className={`${classes} ${propClass}`} {...props} />
    </>
  );
};

export default InputElement;
