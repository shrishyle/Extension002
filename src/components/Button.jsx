import React from "react";

const Button = ({ type, propClasses, label, clickHandler }) => {
  let baseClasses = `rounded-md border cursor-pointer`;
  return (
    <button type={type} className={`${baseClasses} ${propClasses}`} onClick={clickHandler}>
      {label}
    </button>
  );
};

export default Button;
