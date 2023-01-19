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
  res.json({
    message: "hello",
  });
};

// Fetch single book to show
exports.show = async (req, res, next) => {
  const bookId = +req.params.id;
  const book = DUMMYDATA.find((book) => book.id === bookId);
  if (!book) {
    // Sample of throwing error with a custom error class model
      // const error = new Error('COuldnot find a book for the provided id');
      // error.code = 404;
      // return next(error)
    return next(
      new HttpError("Could not find a book for the provided ID", 404)
    );
  }
  res.json({ book });
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
  console.log("Book created successfully!")
  res.status(201).json({ book: createdBook });
};

// Export multiple functions (Examples)
// exports.index = index;
