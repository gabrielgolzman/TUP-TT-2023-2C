import { useState } from "react";

import "./BookItem.css";

import DateRead from "../dateRead/DateRead";
import BookCard from "../bookCard/BookCard";

// const props = {}

// const props = {
//     title: ""
// }

const BookItem = ({ title, author, pageCount, dateRead }) => {
  const [titleValue, setTitleValue] = useState(title);
  const clickHandler = () => {
    console.log("Clicked!");
    setTitleValue("Actualizado!");
    console.log(titleValue);
  };

  return (
    <BookCard className="book-item-container">
      <h1>{titleValue}</h1>
      <h3>{author}</h3>
      <DateRead dateRead={dateRead} />
      <p>{pageCount} páginas</p>
      <button onClick={clickHandler}>Cambiar titulo</button>
    </BookCard>
  );
};

export default BookItem;
