import React from "react";
import TaskContextProvider from "./store/task-context";
import Container from "./components/Container";

function App() {
  return (
    <>
      <TaskContextProvider>
        <Container />
      </TaskContextProvider>
    </>
  );
}

export default App;
