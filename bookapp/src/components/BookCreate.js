import React, { useState, useContext } from "react";
import BooksContext from "../context/books"

const BookCreate = () => {
  const { handleCreate } = useContext(BooksContext);
  const [title, setTitle] = useState("");

  // const handleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    handleCreate(title)
    // onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="">Title</label>
        <input
        className="input"
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button" type="submit">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
