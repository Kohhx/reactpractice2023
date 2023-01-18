import React, { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books"

const BookShow = ({ book, onDelete, onEdit }) => {

  // Use book context to get resources out
  const { deleteBookById, editBookByID } = useContext(BooksContext);
  const [showEdit, setShowEdit] = useState(false);

  // If i need to change a state here based on the children component and it require other
  // Functions, then wrap is in a function and pass everything down as 1 function
  const onEditSubmitHandler = (id, title) => {
    setShowEdit(false);
    editBookByID(id, title);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onEdit={onEditSubmitHandler} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
