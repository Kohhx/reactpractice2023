import React, { useState } from 'react'
import BookCreate from './components/BookCreate';

const App = () => {
  const [books, setBooks] = useState([]);

  const handleCreate = (title) => {
    console.log('title',title)
  }

  return (
    <div>
      <BookCreate onCreate={handleCreate}/>
    </div>
  )
}

export default App
