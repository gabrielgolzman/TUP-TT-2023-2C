import NewBook from "../newBook/NewBook";
import BooksFilter from "../bookFilter/BookFilter";
import Books from "../books/Books";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const BOOKS = [
  {
    title: "100 años de soledad",
    author: "Gabriel García Marquez",
    dateRead: new Date(2021, 8, 12),
    pageCount: 410,
  },
  {
    title: "Todos los fuegos el fuego",
    author: "Julio Cortazar",
    dateRead: new Date(2020, 6, 11),
    pageCount: 197,
  },
  {
    title: "Asesinato en el Orient Express",
    author: "Agatha Christie",
    dateRead: new Date(2021, 5, 9),
    pageCount: 256,
  },
  {
    title: "Las dos torres",
    author: "J.R.R Tolkien",
    dateRead: new Date(2020, 3, 22),
    pageCount: 352,
  },
];

const Dashboard = ({ onLogout }) => {
  const [yearSelected, setYearSelected] = useState("");
  const [books, setBooks] = useState(BOOKS);
  const [booksFiltered, setBooksFiltered] = useState(BOOKS);

  const navigate = useNavigate();

  const appBookHandler = (book) => {
    setBooks((prevBooks) => [book, ...prevBooks]);
    setBooksFiltered((prevBooks) => [book, ...prevBooks]);
  };

  const appYearHandler = (year) => {
    setYearSelected(year);
    const booksFiltered = books.filter(
      (book) => book.dateRead.getFullYear().toString() === year
    );
    setBooksFiltered(booksFiltered);
  };

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <>
      <Row>
        <Col>
          <h1>Books Champion App</h1>
        </Col>
        <Col className="d-flex justify-content-end mx-4 py-2">
          <Button onClick={handleLogout}>Cerrar sesión</Button>
        </Col>
      </Row>
      <br />
      <NewBook onBookSaved={appBookHandler} />
      <BooksFilter yearSelected={yearSelected} onYearChange={appYearHandler} />
      <Books yearSelected={yearSelected} books={booksFiltered} />
    </>
  );
};

export default Dashboard;
