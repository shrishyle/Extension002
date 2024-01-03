import taskData from "../API/API";
import TableHeader from "./TableHeader";
import EditableTDElement from "./EditableTDElement";
import { useState } from "react";
import "./TabBody.css";

export default function TabBody() {
  const [data, setData] = useState(() => taskData);

  function handleChange(inputValue, taskIndex, updateIndex, updateIdentifier) {
    setData((prevData) => {
      if (updateIndex === null) {
        let newTaskData = [...prevData];
        newTaskData[taskIndex].taskDescription = inputValue;
        return newTaskData;
      }

      if (updateIndex) {
        let newTaskData = [...prevData];
        if (updateIdentifier === "task-update") {
          newTaskData[taskIndex].taskUpdate[updateIndex][1] = inputValue;
        }
        if (updateIdentifier === "comment") {
          newTaskData[taskIndex].taskUpdate[updateIndex][2] = inputValue;
        }
        return newTaskData;
      }
    });
    console.log("hehehehe");
    console.log("inputValue = ", inputValue);
    console.log("taskIndex = ", taskIndex);
    console.log("updateIndex = ", updateIndex);
    console.log("updateIdentifier = ", updateIdentifier);
  }

  let display = <p>There are no tasks to display !!</p>;

  if (taskData === null || taskData === "" || taskData === undefined || taskData[0] === null || taskData[0] === undefined) {
    display = <p>There are no tasks to display !!</p>;
  } else {
    display = (
      <table>
        <TableHeader></TableHeader>
        <tbody>
          {taskData.map((task, taskIndex) => (
            <>
              <tr key={`${taskIndex}5`}>
                <td key={`${taskIndex}71`} className="serial" rowSpan={task.taskUpdate.length + 1}>
                  {`${taskIndex + 1}.`}
                </td>
                <td key={`${taskIndex}72`} className="task-description" rowSpan={task.taskUpdate.length + 1}>
                  <input type="text" onChange={(event) => handleChange(event.target.value, taskIndex, null, null)} value={task.taskDescription} />
                </td>
              </tr>
              {task.taskUpdate.map((update, updateIndex) => (
                <tr key={`${taskIndex}${updateIndex}8`}>
                  <td key={`${taskIndex}${updateIndex}90`} className="date">
                    {update[0]}
                  </td>
                  {console.log("update[2] = ", update[2])}
                  {/* <EditableTDElement key={`${taskIndex}${updateIndex}91`} className="task-update" changeHandleFunc={(event) => handleChange(event.target.value, taskIndex, updateIndex, "task-update")} inputValue={update[1]} /> */}
                  <EditableTDElement key={`${taskIndex}${updateIndex}92`} className="comments" changeHandleFunc={handleChange} taskIndex={taskIndex} updateIndex={updateIndex} task_category="comment" inputValue={update[2]} />

                  {/* <EditableTDElement key={`${taskIndex}${updateIndex}91`} className="task-update" changeHandleFunc={(event) => handleChange(event.target.value, taskIndex, updateIndex, "task-update")} inputValue={update[1]} />
                  <EditableTDElement key={`${taskIndex}${updateIndex}92`} className="comments" changeHandleFunc={(event) => handleChange(event.target.value, taskIndex, updateIndex, "comment")} inputValue={update[2]} /> */}
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    );
  }

  return <>{display}</>;
}
