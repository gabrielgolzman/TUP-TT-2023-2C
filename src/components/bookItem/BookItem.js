import "./BookItem.css";

import DateRead from "../dateRead/DateRead";

// const props = {}

// const props = {
//     title: ""
// }

const BookItem = ({ title, author, pageCount, dateRead }) => {
  //   const bookTitle = "100 años de soledad";
  //   const bookAuthor = "Gabriel García Marquez";
  //   const pageCount = 410;
  //   const bookDate = new Date(2023, 7, 18);

  return (
    <div className="book-item-container">
      <h1>{title}</h1>
      <h3>{author}</h3>
      <DateRead dateRead={dateRead} />
      <p>{pageCount} páginas</p>
    </div>
  );
};

export default BookItem;
