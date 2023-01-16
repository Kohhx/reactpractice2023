import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  // const handleChange = (e) => {
  //   setTitle(e.target.value);
  // };


  const submitHandler = (e) => {
    e.preventDefault();
    onCreate(title)
    setTitle("")
  }

  return (
    <form action="" onSubmit={submitHandler}>
      <label htmlFor="">Title</label>
      <input value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
      <button type="submit">Create</button>
    </form>
  );
};

export default BookCreate;
