const mongoose = require('mongoose');

// Destructure and get Schema out of mongoose
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  }
})

bookSchema.set('toObject', { getters: true });

console.log("Book model created")

module.exports = mongoose.model('books', bookSchema);
