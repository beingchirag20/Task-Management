import React from 'react'

export function TaskItem({task}) {
    const {title, description, completed, _id} = task;

    //Handle task delete
    const deleteTask = () => {
        fetch(`http://localhost:5000/api/tasks/${_id}`, {
            method: "DELETE",
    })
    .then(() => window.location.reload())
    .catch((err) => console.error("Error deleting task:", err));
}
  return (
    <div className='task-item bg-gray-100 p-4 mb-2 rounded-mb shadow-md'
    >
        <h3 className='font-bold text-xl'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
        <p className='text-sm'>{completed  ? "Completed" : "Not completed"}</p>
        <button 
        onClick={deleteTask}
        className='mt-2 bg-red-500 text-white px-4 py-2 rounded-md'>
            Delete
        </button>
    </div>
  );
}