import { useContext, useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../../services/authenticationContext/authentication.context";
import ToggleTheme from "../ui/toggleTheme/ToggleTheme";
import { ThemeContext } from "../../services/themeContext/theme.context";

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useContext(AuthenticationContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    if (emailRef.current.value.length > 0) {
      emailRef.current.style.borderColor = "";
      emailRef.current.style.outline = "";
    }
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const signInHandler = () => {
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      alert("Email vacío!");
      return;
    }

    if (password.length === 0) {
      passwordRef.current.focus();
      passwordRef.current.style.borderColor = "red";
      passwordRef.current.style.outline = "none";
      alert("Password vacío");
      return;
    }
    handleLogin(email);
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className={`login-box ${theme === "DARK" && "login-box-dark"}`}>
        <h4>¡Bienvenidos a Book Champions!</h4>
        <div className="input-container">
          <input
            className="input-control"
            placeholder="Email"
            type="email"
            onChange={emailChangeHandler}
            value={email}
            ref={emailRef}
          />
        </div>
        <div className="input-container">
          <input
            className="input-control"
            placeholder="Contraseña"
            type="password"
            onChange={passwordChangeHandler}
            value={password}
            ref={passwordRef}
          />
        </div>
        <button onClick={signInHandler} className="signin-button" type="button">
          Iniciar sesión
        </button>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Login;
