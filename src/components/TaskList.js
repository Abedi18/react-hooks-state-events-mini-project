import React, { useState } from "react";
import Task from "./Task";
import { TASKS } from "../data";
import NewTaskForm from "./NewTaskForm";

function TaskList() {
  const [tasks, setTasks] = useState(TASKS);

  const handleDelete = (taskToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
  };

  return (
    <div className="tasks">
     {tasks.map((task) => (
        <Task key={task.text} task={task} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
