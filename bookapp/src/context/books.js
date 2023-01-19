import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create context
const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:5000/books");
    const fetchedBooks_map = response.data.map((book) => {
      return { ...book, id: book._id };
    });
    setBooks(fetchedBooks_map);
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
      console.log(response.data);
      setBooks([...books, response.data]);
    } catch (error) {
      throw error;
    }
  };

  // Delete Book by ID
  const deleteBookById = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      const updatedBooks = books.filter((book) => {
        return book.id !== id;
      });
      setBooks(updatedBooks);
    } catch (error) {
      throw error;
    }
  };

  // Edit Book by ID
  const editBookByID = async (id, title) => {
    try {
      const response = await axios.patch(`http://localhost:5000/books/${id}`, {
        title,
      });
      const updatedBooks = books.map((book) => {
        if (book.id === id) {
          return { ...book, ...response.data };
        }
        return book;
      });
      setBooks(updatedBooks);
    } catch (error) {
      throw error;
    }
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
