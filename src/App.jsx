import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import TabHeader from "./components/TabHeader";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
import { saveTasksToLocalStorage, getTasksFromLocalStorage } from "./APIs/api";

function App() {
  const [tasks, setTasks] = useState(() => {
    return getTasksFromLocalStorage();
  });

  const uniqueTaskCategories = [...new Set(tasks.map((task) => task.taskCategory))];

  const [activeCategory, setActiveCategory] = useState(uniqueTaskCategories[0]);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  function handleTaskCategoryClick(category) {
    setActiveCategory(category);
  }

  return (
    <>
      <div id="container" className="w-full h-screen flex flex-row">
        <Sidebar />
        <div id="container-right" className="w-full h-full flex flex-col justify-center align-center">
          <div className="w-full h-auto flex flex-row m-1">
            {uniqueTaskCategories.map((category) => (
              <TabHeader key={category} taskCategory={category} showTasks={() => handleTaskCategoryClick(category)} isActive={category === activeCategory} />
            ))}
          </div>
          <div id="task-display-container" className="w-full h-14/15 flex flex-col items-center justify-start mt-3">
            {!tasks && (
              <div>
                <p>Create your first Task</p>
                <button>Create New Task</button>
              </div>
            )}
            {tasks && (
              <table className="min-w-3.5 max-w-[90%] w-auto ">
                <TableHeader />
                <TableBody data={tasks} taskCategory={activeCategory} />
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
