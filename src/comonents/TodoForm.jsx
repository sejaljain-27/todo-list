import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 border border-orange-200 rounded-full px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
      />
      <button
        type="submit"
        className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
