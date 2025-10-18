import React, { useState } from "react";

const TodoItem = ({ task, deleteTask, toggleTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li
      className={`flex justify-between items-center bg-orange-50 border border-orange-100 p-3 rounded-2xl shadow-sm ${
        task.completed ? "opacity-70" : ""
      }`}
    >
      {isEditing ? (
        <form onSubmit={handleUpdate} className="flex gap-2 w-full">
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="flex-1 border border-orange-200 px-2 py-1 rounded-full"
          />
          <button
            type="submit"
            className="bg-green-400 text-white px-3 rounded-full"
          >
            Save
          </button>
        </form>
      ) : (
        <>
          <span
            onClick={() => toggleTask(task.id)}
            className={`flex-1 cursor-pointer ${
              task.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {task.text}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-400 text-white px-5 rounded-full"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-400 text-white px-4  rounded-full"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
