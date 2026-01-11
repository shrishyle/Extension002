import React from "react";

const Button = ({ type, propClasses, label, clickHandler }) => {
  let baseClasses = `rounded-sm border cursor-pointer bg-teal-700 text-teal-50 w-full h-10 mt-2`;
  return (
    <button type={type} className={`${baseClasses} ${propClasses}`} onClick={clickHandler}>
      {label}
    </button>
  );
};

export default Button;
