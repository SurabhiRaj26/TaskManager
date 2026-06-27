import React from "react";

export default function TaskList({ tasks, updateTask, deleteTask }) {

  const toggleComplete = (index) => {
    const updatedTask = {
      ...tasks[index],
      completed: !tasks[index].completed,
    };

    updateTask(updatedTask, index);
  };

  return (
    <ul className="task-list">

      {tasks.length === 0 ? (
        <p className="empty-task">
          🌸 No tasks found.
        </p>
      ) : (
        tasks.map((task, index) => (

          <li
            key={index}
            className={task.completed ? "completed" : ""}
          >

            <div>

              <span>{task.text}</span>

              <small>
                {task.priority} | {task.category}
              </small>

            </div>

            <div>

              <button
                className="complete-btn"
                onClick={() => toggleComplete(index)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>

            </div>

          </li>

        ))
      )}

    </ul>
  );
}