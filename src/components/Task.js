import React from "react";

function Task({ task, handleDelete }) {
  const { text, category } = task;

  const handleButtonClick = () => {
    handleDelete(task);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleButtonClick}>X</button>
    </div>
  );
}

export default Task;
