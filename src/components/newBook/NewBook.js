import BookForm from "../bookForm/BookForm";
import "./NewBook.css";

const NewBook = ({ onBookSaved }) => {
  const saveBookHandler = (book) => {
    onBookSaved(book);
  };
  return (
    <div className="new-book">
      <BookForm onSaveBook={saveBookHandler} />
    </div>
  );
};

export default NewBook;
