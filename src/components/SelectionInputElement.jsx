const SelectionInputElement = ({ label, id, taskCategories }) => {
  return (
    <>
      <label className="">{label}</label>
      <select id={id} className="">
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
