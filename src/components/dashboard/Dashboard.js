import NewBook from "../newBook/NewBook";
import BooksFilter from "../bookFilter/BookFilter";
import Books from "../books/Books";
import { useCallback, useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../../services/authenticationContext/authentication.context";
import { APIContext } from "../../services/apiContext/API.Context";
import ToggleTheme from "../ui/toggleTheme/ToggleTheme";

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

const Dashboard = () => {
  const [yearSelected, setYearSelected] = useState("");
  const [books, setBooks] = useState(BOOKS);
  const [booksFiltered, setBooksFiltered] = useState([]);

  const { handleLogout, user } = useContext(AuthenticationContext);
  const { toggleLoading } = useContext(APIContext);

  const username = user.email.split("@")[0];

  useEffect(() => {
    toggleLoading(true);
    fetch("http://localhost:8000/books", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((bookData) => {
        toggleLoading(false);
        setBooks(bookData);
        setBooksFiltered(bookData);
      })
      .catch((error) => {
        toggleLoading(false);
        console.log(error);
      });
  }, []);
  const navigate = useNavigate();

  const appBookHandler = useCallback(
    (book) => {
      setBooks((prevBooks) => [book, ...prevBooks]);
      setBooksFiltered((prevBooks) => [book, ...prevBooks]);

      const dateString = book.dateRead.toISOString().slice(0, 10);
      const newBookId = books[books.length - 1].id + 1;

      fetch("http://localhost:8000/books", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: newBookId,
          title: book.title,
          author: book.author,
          dateRead: dateString,
          pageCount: parseInt(book.pageCount, 10),
        }),
      })
        .then((response) => {
          if (response.ok) return response.json();
          else {
            throw new Error("The response had some errors");
          }
        })
        .then(() => {
          const newBookArray = [{ ...book, id: newBookId }, ...books];
          setBooks(newBookArray);
          setBooksFiltered(newBookArray);
        })
        .catch((error) => console.log(error));
    },
    [books]
  );

  const appYearHandler = (year) => {
    setYearSelected(year);
    const booksFiltered = books.filter(
      (book) => book.dateRead.getFullYear().toString() === year
    );
    setBooksFiltered(booksFiltered);
  };

  const handleLogoutInDashboard = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <>
      <Row>
        <Col>
          <h1>Books Champion App</h1>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <h4>Hola {username}!</h4>
        </Col>
        <Col>
          <ToggleTheme />
        </Col>
        <Col className="d-flex justify-content-end mx-4 py-2">
          <Button onClick={handleLogoutInDashboard}>Cerrar sesión</Button>
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
