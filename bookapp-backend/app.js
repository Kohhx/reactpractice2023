const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// Import Models
require("./models/book");
const HttpError = require("./models/http-error");

// Import Routes
const booksRoutes = require("./routes/books");

/**
 * =============================================================================
 * Initialize App with express
 * =============================================================================
 */

const app = express();

/**
 * =============================================================================
 * Body Parser middleware to parse Incoming JSON
 * =============================================================================
 */

app.use(bodyParser.json());

/**
 * =============================================================================
 * Mongoose Initialize and then run server
 * =============================================================================
 */

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

/**
 * =============================================================================
 * Routes
 * =============================================================================
 */

app.get("/", (req, res) => {
  res.send("Node Webserver...");
});
app.use("/books", booksRoutes);

/**
 * =============================================================================
 * Error Handling
 * =============================================================================
 */

// Error handling main (if no error specified in controller)
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

// Our own Error Handling Middleware
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Unknown error occured!" });
});

/**
 * =============================================================================
 * Listen to PORT and run server
 * =============================================================================
 */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}....`);
});
