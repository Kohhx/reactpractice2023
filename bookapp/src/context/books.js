import { createContext, useState } from "react";

// Create context
const BooksContext = createContext();

const Provider = ({ children }) => {
  // Dummy Book List
  const dummyData = [
    {
      id: Math.round(Math.random() * 999),
      title: "aaaa",
    },
    {
      id: Math.round(Math.random() * 999),
      title: "bbbb",
    },
    {
      id: Math.round(Math.random() * 999),
      title: "cccc",
    },
  ];

  const [books, setBooks] = useState(dummyData);

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

  // Edit Book by ID
  const editBookByID = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  // Set all the value to share
  const valueToShare = {
    books,
    handleCreate: handleCreate,
    deleteBookById: deleteBookById,
    editBookByID: editBookByID,
  }
  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
};

export default BooksContext;
export { Provider };
