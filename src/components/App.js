import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleTaskFormSubmit(newTask) {
    console.log("Adding new task", newTask);
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
  }

  function handleTaskDelete(deletedTask) {
    setTaskList(taskList.filter((task) => task !== deletedTask));
  }

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }

  const categoriesList = CATEGORIES.map((category, index) => (
    <span
      key={index}
      className={category === selectedCategory ? "selected" : null}
      onClick={() => handleCategoryClick(category)}
    >
      {category}
    </span>
  ));

  const displayedTasks =
    selectedCategory === "All"
      ? taskList
      : taskList.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
    <h2>My tasks</h2>
    <CategoryFilter
      categories={categoriesList}
      onCategoryClick={handleCategoryClick}
    />
    <TaskList tasks={displayedTasks} onDeleteTask={handleTaskDelete} />
    <NewTaskForm
      categories={CATEGORIES}
      onTaskFormSubmit={handleTaskFormSubmit}
    />
  </div>
  );
}

export default App;