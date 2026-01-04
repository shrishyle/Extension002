import React from "react"; // Add this line
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TabHeader from "./components/TabHeader";
import taskData from "./data/API";
import { useState } from "react";
import TableHeader from "./components/TableHeader";

function App() {
  const [taskCategory, setTaskCategory] = useState(taskData[0].taskCategory);

  function handleTaskCategoryClick(taskCategory) {
    setTaskCategory(taskCategory);
  }

  return (
    <>
      <Header></Header>
      <div id="container" className="w-full h-screen flex flex-row">
        <Sidebar />
        <div id="container-right" className="w-full h-full flex flex-col justify-center align-center">
          <div className="w-full h-auto flex flex-row m-1">
            {taskData.map((task) => (
              <TabHeader key={task.taskCategory} taskCategory={task.taskCategory} showTasks={() => handleTaskCategoryClick(`${task.taskCategory}`)} />
            ))}
          </div>
          <div id="task-display-container" className="w-full h-14/15 flex flex-col items-center justify-start mt-2">
            <table className="min-w-3.5 max-w-[90%] w-auto ">
              <TableHeader />
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
