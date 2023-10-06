import { memo } from "react";

import "./Books.css";

import BookItem from "../bookItem/BookItem";

const Books = memo(({ books, yearSelected }) => {
  console.log("In Books");
  const booksMapped = books.map((book, index) => (
    <BookItem
      key={book.id}
      title={book.title}
      author={book.author}
      dateRead={book.dateRead}
      pageCount={book.pageCount}
    />
  ));

  return (
    <div className="books">
      {booksMapped.length > 0 ? (
        booksMapped
      ) : (
        <h3>No posee libros para el año {yearSelected}</h3>
      )}
    </div>
  );
});

export default Books;
