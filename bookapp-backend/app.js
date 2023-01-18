const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// Import Models
require("./models/book");

// Import Routes
const booksRoutes = require("./routes/books");

// Initialize Express
const app = express();

// Mongoose Initialize and then run server
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


// Routes
app.get("/", (req, res) => {
  res.send("Node Webserver...");
});
app.use("/books", booksRoutes);

const PORT = process.env.PORT || 5000;
// mongoose.connect(process.env.MONGO_URI, () => {

// });
  app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}....`);
  });
