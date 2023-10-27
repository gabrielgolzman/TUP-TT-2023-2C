import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../../../services/themeContext/theme.context";
import useTranslation from "../../../custom/useTranslation/useTranslation";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const translate = useTranslation();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <Button className="mt-4" onClick={handleToggleTheme}>
      {translate(theme === "DARK" ? "light_theme_change" : "dark_theme_change")}
    </Button>
  );
};

export default ToggleTheme;
