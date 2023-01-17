import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  // If i need to change a state here based on the children component and it require other
  // Functions, then wrap is in a function and pass everything down as 1 function
  const onEditSubmitHandler = (id, title) => {
    setShowEdit(false);
    onEdit(id, title);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onEdit={onEditSubmitHandler} />;
  }

  return (
    <div className="book-show">
      {content}
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
