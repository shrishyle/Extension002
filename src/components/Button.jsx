import React from "react";

const Button = ({ type, propClasses, label, clickHandler }) => {
  let baseClasses = `rounded-md border cursor-pointer bg-teal-700 text-teal-50 w-10/10 h-10 mb-1 mt-1`;
  return (
    <button type={type} className={`${baseClasses} ${propClasses}`} onClick={clickHandler}>
      {label}
    </button>
  );
};

export default Button;
