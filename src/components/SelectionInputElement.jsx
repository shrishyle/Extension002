import React from "react";
const SelectionInputElement = ({ label, id, taskCategories }) => {
  return (
    <>
      <label className="mt-2 mb-1 block text-teal-600">{label}</label>
      <select id={id} className="border rounded-sm w-10/10 h-8">
        {taskCategories.map((category) => (
          <option key={category} className="border rounded-sm w-10/10 h-8 bg-teal-100 mb-2 block text-teal-600 outline-1" value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectionInputElement;
