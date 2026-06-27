import React from "react";

export default function ProgressTracker({ tasks }) {

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const progress =
    totalTasks === 0
      ? 0
      : (completedTasks / totalTasks) * 100;

  // Motivational Message
  let message = "";

  if (totalTasks === 0) {
    message = "🌱 Add your first task!";
  }
  else if (completedTasks === 0) {
    message = "💖 Start now! You've got this!";
  }
  else if (completedTasks < totalTasks) {
    message = "✨ Keep Going! You're doing amazing!";
  }
  else {
    message = "🎉 Great Job! All tasks completed!";
  }

  return (

    <div className="progress-tracker">

      <h3>Progress Tracker</h3>

      <p>
        {completedTasks} of {totalTasks} Tasks Completed
      </p>

      <div className="progress-bar">

        <div
          className="progress"
          style={{
            width: `${progress}%`
          }}
        ></div>

      </div>

      <h4 className="motivation">
        {message}
      </h4>

      <p className="percentage">
        {progress.toFixed(0)}% Completed
      </p>

    </div>

  );
}