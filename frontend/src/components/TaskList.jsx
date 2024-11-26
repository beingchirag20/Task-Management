import React, { useState, useEffect } from "react";
import { TaskItem } from "./TaskItem";

export function TaskList() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend
  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  return (
    <div className="task-list p-4">
      <h2 className="text-2xl font-semibold">Tasks</h2>
      <div className="tasks mt-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))
        ) : (
          <p>Add some tasks</p>
        )}
      </div>
    </div>
  );
}
