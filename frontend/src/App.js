import React from "react";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Task Management</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
