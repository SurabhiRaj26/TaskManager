import { useState, useEffect } from "react";
import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import ProgressTracker from "./Components/ProgressTracker";
import "./Style.css";

export default function App() {

  const [tasks, setTasks] = useState([]);

  // New States
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  // Search + Filter
  const filteredTasks = tasks.filter((task) => {

    const matchesSearch = task.text
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "Completed") {
      return matchesSearch && task.completed;
    }

    if (filter === "Pending") {
      return matchesSearch && !task.completed;
    }

    return matchesSearch;
  });

  return (
    <div>

      <header>
        <h1>TaskMan</h1>
        <p><i>Your Friendly Task Manager</i></p>
      </header>

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search Tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filter */}
      <div className="filter-buttons">

        <button onClick={() => setFilter("All")}>
          All
        </button>

        <button onClick={() => setFilter("Pending")}>
          Pending
        </button>

        <button onClick={() => setFilter("Completed")}>
          Completed
        </button>

      </div>

      <Taskform addTask={addTask} />

      <Tasklist
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />

      <ProgressTracker tasks={tasks} />

      {tasks.length > 0 && (
        <button
          className="clear-btn"
          onClick={clearTasks}
        >
          Clear All Tasks
        </button>
      )}

    </div>
  );
}