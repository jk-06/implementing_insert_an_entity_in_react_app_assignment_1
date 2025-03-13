import  { useState } from "react";
import "./AddBook.css";


const AddBook = () => {
  // Step 1: Define state to manage form inputs
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    coverImageUrl: "",
  });

  // Step 2: Handle changes to input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Dynamically update state based on input field name
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Submitted:", formData); // Log form data to console for now
    // Clear form (optional)
    setFormData({ title: "", author: "", description: "", coverImageUrl: "" });
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Author Input */}
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description Input */}
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        {/* Cover Image URL Input */}
        <div>
          <label htmlFor="coverImageUrl">Cover Image URL:</label>
          <input
            type="url"
            id="coverImageUrl"
            name="coverImageUrl"
            value={formData.coverImageUrl}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
