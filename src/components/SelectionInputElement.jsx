import React from "react";
const SelectionInputElement = ({ label, id, taskCategories }) => {
  return (
    <>
      <label className="text-left mt-2 mb-1">{label}</label>
      <select id={id} className="border border-teal-600 rounded-sm w-full h-8 bg-stone-50 mb-2">
        {taskCategories.map((category) => (
          <option key={category} className="" value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectionInputElement;
