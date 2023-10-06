import { useContext } from "react";
import { ThemeContext } from "../../services/themeContext/theme.context";

import "./BookCard.css";

const BookCard = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`book-item-container ${
        theme === "DARK" && "book-item-container-dark"
      }`}
    >
      {children}
    </div>
  );
};

export default BookCard;
