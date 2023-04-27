import React, { useState } from "react";

function NewTaskForm(props) {
  const { categories, onTaskFormSubmit } = props;

  const [formData, setFormData] = useState({
    text: "",
    category: categories[0],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form", formData);
    const newTask = {
      text: formData.text,
      category: formData.category,
    };
    onTaskFormSubmit(newTask);
    setFormData({ text: "", category: categories[0] });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
         type="text" 
         name="text" 
         value={formData.text}
         onChange={handleInputChange}
         />
      </label>
      <label>
        Category
        <select 
           name="category"
           value={formData.category}
           onChange={handleInputChange}
           >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

