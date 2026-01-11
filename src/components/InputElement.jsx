import React from "react";
const InputElement = ({ label, name, type, propClass, ...props }) => {
  let classes = `border border-teal-600 rounded-sm w-full h-8 bg-stone-50 p-2 outline-hidden shadow-xs`;
  return (
    <>
      <label className="mt-2 mb-0.5 text-left w-full block">{label}</label>
      <input type={type} name={name} className={`${classes} ${propClass}`} {...props} />
    </>
  );
};

export default InputElement;
