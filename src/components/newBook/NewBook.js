import { memo } from "react";

import "./NewBook.css";

import BookForm from "../bookForm/BookForm";

const NewBook = memo(({ onBookSaved }) => {
  console.log("In New Book!");
  const saveBookHandler = (book) => {
    onBookSaved(book);
  };
  return (
    <div className="new-book">
      <BookForm onSaveBook={saveBookHandler} />
    </div>
  );
});

export default NewBook;
