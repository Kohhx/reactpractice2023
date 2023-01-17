import React, { useState } from "react";

const BookEdit = ({ book, onEdit }) => {
  const [title, setTitle] = useState(book.title)

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(book.id, title);
  }

  return (
    <form className="book-edit" onSubmit={handleEditSubmit}>
      <label htmlFor="">Title</label>
      <input value={title} type="text" className="input" onChange={(e) => setTitle(e.target.value)}/>
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
