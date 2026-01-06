import React from "react";
import Container from "./components/Container";
import { TaskContextProvider } from "./store/task-context";
import { FormDisplayContextProvider } from "./store/form-display-context";

function App() {
  return (
    <>
      <TaskContextProvider>
        <FormDisplayContextProvider>
          <Container />
        </FormDisplayContextProvider>
      </TaskContextProvider>
    </>
  );
}

export default App;
