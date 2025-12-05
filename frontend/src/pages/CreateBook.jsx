import { useState } from "react";
import axios from "axios";

function CreateBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    isbn: "",
    publishedYear: "",
  });

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(
      "http://localhost:4000/api/books",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        alert("Book created successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Create Book</h1>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required/><br/>
        <input name="author" placeholder="Author" onChange={handleChange} required/><br/>
        <textarea name="description" placeholder="Description" onChange={handleChange} required/><br/>
        <input name="price" placeholder="Price" type="number" onChange={handleChange} required/><br/>
        <input name="stock" placeholder="Stock" type="number" onChange={handleChange} required/><br/>
        <input name="category" placeholder="Category" onChange={handleChange} required/><br/>
        <input name="isbn" placeholder="ISBN" onChange={handleChange} required/><br/>
        <input
          name="publishedYear"
          placeholder="Published Year"
          type="number"
          onChange={handleChange}
		  required
        /><br/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default CreateBook;

