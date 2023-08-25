import { Button } from "react-bootstrap";

import "./BookForm.css";

const BookForm = () => {
  return (
    <form>
      <div className="new-book-controls">
        <div className="new-book-control">
          <label>Título</label>
          <input type="text" className="input-control" />
        </div>
        <div className="new-book-control">
          <label>Autor</label>
          <input type="text" className="input-control" />
        </div>
        <div className="new-book-control">
          <label>Páginas</label>
          <input type="number" className="input-control" min="1" step="1" />
        </div>
        <div className="new-book-control">
          <label>¿Cuándo terminaste de leerlo?</label>
          <input
            type="date"
            className="input-control"
            min="2019-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-book-actions">
        <button>Cancelar</button>
        <Button>Agregar lectura</Button>
      </div>
    </form>
  );
};

export default BookForm;
