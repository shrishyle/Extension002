import React from "react";
const TH = ({ classes, label }) => {
  let defaultClasses = "min-w-1/12 max-h-24 p-1 border-none bg-teal-700 text-teal-50 font-(family-name:<calibri>) font-medium";

  return (
    <th key={label} className={`${defaultClasses} ${classes}`}>
      {label}
    </th>
  );
};

export default TH;
