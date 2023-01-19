import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create context
const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:5000/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Create a book
  const handleCreate = async (title) => {
    try {
      const response = await axios.post("http://localhost:5000/books/create", {
        title,
      });
console.log(response.data)
      setBooks([...books, response.data]);
    } catch (error) {
      throw (error)
    }
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
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
export { Provider };
