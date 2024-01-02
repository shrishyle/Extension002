export default function EditableTDElement({ keyValue, className, onChangeHandler, inputValue }) {
  return (
    <td key={keyValue} className={className}>
      <textarea type="text" onChange={onChangeHandler} value={inputValue} />
    </td>
  );
}
