import React, { useState } from "react";

export function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && description) {
      fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      })
        .then((response) => response.json())
        .then(() => {
          setTitle(""); // Clear input fields
          setDescription("");
          window.location.reload(); // Refresh the task list
        })
        .catch((err) => console.error("Error adding task:", err));
    } else {
      alert("Please fill in both fields!");
    }
  };

  return (
    <div className="add-task bg-blue-100 p-6 rounded-md shadow-md mb-4">
      <h2 className="text-xl font-semibold">Add a New Task</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Task Title"
          className="w-full p-2 border rounded-md mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          className="w-full p-2 border rounded-md mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
