import React, { useState, useEffect } from "react";
import TodoForm from "./comonents/TodoForm";
import TodoList from "./comonents/TodoList";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (!text.trim()) return alert("Please enter a task!");
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    const sorted = [
      ...updated.filter((t) => !t.completed),
      ...updated.filter((t) => t.completed),
    ];
    setTasks(sorted);
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="min-h-screen w-full bg-yellow-50 flex flex-col">
      {/* header */}
      <header className="bg-yellow-100 text-gray-900 py-6 px-8 shadow-md w-full">
        <h1 className="text-5xl font-extrabold tracking-wide text-center">
          To-Do List
        </h1>
        <p className="text-lg mt-2 opacity-90 text-center">Organize your day</p>
      </header>

      {/* Main Content */}
      <main className="flex-1  bg-yellow-50 w-full py-6">
        <div className="w-full max-w-4xl mx-auto px-4 flex flex-col gap-6">
          {/* Form + Filter */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-4">
            <TodoForm addTask={addTask} />

            <div className="flex flex-wrap gap-3">
              {["all", "active", "completed"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-full capitalize font-medium transition 
                    ${
                      filter === type
                        ? "bg-yellow-500 text-white shadow-md"
                        : "bg-yellow-200 text-yellow-800 hover:bg-yellow-300"
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Task List */}
          <TodoList
            tasks={filteredTasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            updateTask={updateTask}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-yellow-100 text-sm text-gray-700 w-full">
        Sejaljain @ all rights reserved.
      </footer>
    </div>
  );
};

export default App;
