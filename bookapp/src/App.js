import React, { useState } from 'react'
import BookCreate from './components/BookCreate';

const App = () => {
  const [books, setBooks] = useState([]);

  const handleCreate = (title) => {
    const newBook = {
      id: 1,
      title,
    }
    setBooks([...books,newBook])

  }
console.log(books)
  return (
    <div>
      <BookCreate onCreate={handleCreate}/>
    </div>
  )
}

export default App
