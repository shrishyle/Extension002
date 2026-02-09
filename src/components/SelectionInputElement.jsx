import React from "react";
const SelectionInputElement = ({ label, id, taskCategories, name, value, onChange }) => {
  return (
    <>
      <label className="text-left mt-2 mb-1">{label}</label>
      <select id={id} name={name} value={value} onChange={onChange} className="border border-teal-600 rounded-sm w-full h-8 bg-stone-50 mb-2">
        <option value="create_new_category">Create New Category</option>
        {taskCategories?.length > 0 &&
          taskCategories.map((category) => (
            <option key={category} className="border rounded-sm w-10/10 h-8 bg-teal-100 mb-2 block text-teal-600 outline-1" value={category}>
              {category}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectionInputElement;
