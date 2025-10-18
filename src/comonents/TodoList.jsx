import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask, toggleTask, updateTask }) => {
  if (tasks.length === 0)
    return <p className="text-center text-gray-400 mt-4">No tasks yet</p>;

  return (
    <ul className="flex flex-col gap-3">
      {tasks.map((t) => (
        <TodoItem
          key={t.id}
          task={t}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
