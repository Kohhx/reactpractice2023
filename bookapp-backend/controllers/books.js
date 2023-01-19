// Import Models to be use in this controller
const Book = require("../models/book");
const HttpError = require("../models/http-error");

// Dummy Data
DUMMYDATA = [
  {
    id: 1,
    title: "harry",
  },
  {
    id: 2,
    title: "matrix",
  },
];

// Fetch all the books
exports.index = async (req, res, next) => {
  let fetchedBooks;
  try {
    fetchedBooks = await Book.find();
  } catch (error) {
    return next(error);
  }

  if (fetchedBooks.length === 0) {
    return next(new HttpError("No books found", 404));
  }

  res.status(201).json(fetchedBooks);
};

// Fetch single book to show by ID
exports.show = async (req, res, next) => {
  const bookId = req.params.id;
  let book;
  try {
    book = await Book.findById(bookId);
  } catch (error) {
    return next(
      new HttpError("Something went wrong, could not find a book", 500)
    );
  }
  if (!book) {
    // Sample of throwing error with a custom error class model
    // const error = new Error('COuldnot find a book for the provided id');
    // error.code = 404;
    // return next(error)
    return next(
      new HttpError("Could not find a book for the provided ID", 404)
    );
  }
  res.status(201).json(book.toObject({ getters: true }));
};

// Create a book
exports.create = async (req, res, next) => {
  const { title } = req.body;
  const createdBook = new Book({
    title,
  });

  try {
    await createdBook.save();
  } catch (err) {
    return next(err);
  }
  console.log("Book created successfully!");
  res.status(201).json({ book: createdBook });
};

// Edit a book
exports.edit = async (req, res, next) => {
  const bookId = req.params.id;
};

// Delete a book
exports.delete = async (req, res, next) => {
  const bookId = req.params.id;

  let books;
  try {
    await Book.deleteOne({_id: bookId})
    console.log("Book deleted successfully!")
  } catch (error) {
    return next(new HttpError("Error deleting book", 500))
  }

  res.status(201).json({Message: "Book deleted successfully!"})

};

// Export multiple functions (Examples)
// exports.index = index;
