import { Button } from "react-bootstrap";

import "./BookForm.css";
import { useState } from "react";

const BookForm = ({ onSaveBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [dateRead, setDateRead] = useState("");

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const changeAuthorHandler = (event) => {
    setAuthor(event.target.value);
  };

  const changePageHandler = (event) => {
    setPageCount(event.target.value);
  };

  const changeDateReadHandler = (event) => {
    setDateRead(event.target.value);
  };
  const addBookHandler = () => {
    const newBook = {
      title,
      author,
      pageCount,
      dateRead: new Date(dateRead),
    };

    onSaveBook(newBook);
    setTitle("");
    setAuthor("");
    setPageCount("");
    setDateRead("");
  };

  return (
    <form>
      <div className="new-book-controls">
        <div className="new-book-control">
          <label>Título</label>
          <input
            onChange={changeTitleHandler}
            type="text"
            className="input-control"
            value={title}
          />
        </div>
        <div className="new-book-control">
          <label>Autor</label>
          <input
            onChange={changeAuthorHandler}
            type="text"
            className="input-control"
            value={author}
          />
        </div>
        <div className="new-book-control">
          <label>Páginas</label>
          <input
            onChange={changePageHandler}
            type="number"
            value={pageCount}
            className="input-control"
            min="1"
            step="1"
          />
        </div>
        <div className="new-book-control">
          <label>¿Cuándo terminaste de leerlo?</label>
          <input
            type="date"
            value={dateRead}
            onChange={changeDateReadHandler}
            className="input-control"
            min="2019-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-book-actions">
        <button>Cancelar</button>
        <Button onClick={addBookHandler}>Agregar lectura</Button>
      </div>
    </form>
  );
};

export default BookForm;
