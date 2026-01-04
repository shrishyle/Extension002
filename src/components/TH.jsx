import React from "react";

const TH = ({ children, key, classes }) => {
  let defaultClasses = "min-w-1/12 max-h-24 p-1 border-none bg-teal-200 font-(family-name:<calibri>) font-medium text-stone-800";

  return (
    <th key={key} className={`${defaultClasses} ${classes}`}>
      {children}
    </th>
  );
};

export default TH;
