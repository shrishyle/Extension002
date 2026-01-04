import React from "react";
import Sidebar from "./components/Sidebar";
import TabHeader from "./components/TabHeader";
import taskData from "./data/API";
import { useState } from "react";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";

const uniqueTaskCategories = [...new Set(taskData.map((task) => task.taskCategory))];
let activeBtnCategory = "";

function App() {
  const [taskCategory, setTaskCategory] = useState(uniqueTaskCategories[0]);

  function handleTaskCategoryClick(event, taskCategory) {
    setTaskCategory(taskCategory);
    activeBtnCategory = event.target.textContent;
  }

  return (
    <>
      <div id="container" className="w-full h-screen flex flex-row">
        <Sidebar />
        <div id="container-right" className="w-full h-full flex flex-col justify-center align-center">
          <div className="w-full h-auto flex flex-row m-1">
            {uniqueTaskCategories.map((task) => (
              <TabHeader key={task} taskCategory={task} showTasks={(event) => handleTaskCategoryClick(event, `${task}`)} isActive={taskCategory === activeBtnCategory} />
            ))}
          </div>
          <div id="task-display-container" className="w-full h-14/15 flex flex-col items-center justify-start mt-2">
            <table className="min-w-3.5 max-w-[90%] w-auto ">
              <TableHeader />
              <TableBody data={taskData} taskCategory={taskCategory} />
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
