import { useState } from "react";

export default function EditableTDElement({ keyValue, className, changeHandleFunc, taskIndex, updateIndex, task_category, inputValue }) {
  const [tdState, set_tdState] = useState(false);

  function editHandler(event) {
    set_tdState(true);
    setTimeout(() => {
      event.target.firstChild.focus();
    }, 25);
  }

  function handleBlur(event) {
    set_tdState(false);
    // changeHandleFunc(inputValue, taskIndex, updateIndex, task_category);
  }

  return (
    <td key={keyValue} className={className} onClick={(event) => editHandler(event)}>
      {!tdState && inputValue}
      {tdState && (
        <input
          key={`${keyValue}56`}
          type="text"
          defaultValue={inputValue}
          onBlur={(event) => handleBlur(event)}
          onChange={(event) => {
            changeHandleFunc(event.target.value, taskIndex, updateIndex, task_category);
          }}
        />
      )}
    </td>
  );
}

// onChange={({ event_target_value, taskIndex, updateIndex, fieldID }) => onChangeHandler(event_target_value, taskIndex, updateIndex, fieldID)}
