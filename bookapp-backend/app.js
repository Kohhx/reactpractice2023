const express = require('express');
const bodyParser = require("body-parser")


// Import Routes
const booksRoutes = require("./routes/books")

// Initialize Express
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send("Node Webserver...")
})
app.use('/books',booksRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`App server running on ${PORT}`)
   console.log("Cool")
})
