import { useState } from "react";

function EditableTDElement({ keyValue, className, onChangeHandler, inputValue }) {
  const [tdState, set_tdState] = useState(false);

  function editHandler(event) {
    set_tdState(true);
    setTimeout(() => {
      event.target.firstChild.focus();
    }, 25);
    console.log(event.target.firstChild);
  }

  function handleBlur(event) {
    set_tdState(false);
  }

  return (
    <td key={keyValue} className={className} onClick={(event) => editHandler(event)}>
      {!tdState && inputValue}
      {tdState && <input key={`${keyValue}56`} type="text" onChange={({ event_target_value, taskIndex, updateIndex, fieldID }) => onChangeHandler(event_target_value, taskIndex, updateIndex, fieldID)} defaultValue={inputValue} onBlur={(event) => handleBlur(event)} />}
    </td>
  );
}
