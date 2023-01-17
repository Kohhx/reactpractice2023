import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  // Create a book
  const handleCreate = (title) => {
    const newBook = {
      id: Math.round(Math.random() * 999),
      title,
    };
    setBooks([...books, newBook]);
  };

  // Delete Book by ID
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookCreate onCreate={handleCreate} />
      <BookList books={books} onDelete={deleteBookById}/>
    </div>
  );
};

export default App;
