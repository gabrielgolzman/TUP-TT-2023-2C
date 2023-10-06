import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";

import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Protected from "./components/security/protected/Protected";
import PageNotFound from "./components/security/pageNotFound/PageNotFound";
import { useContext } from "react";
import { ThemeContext } from "./services/themeContext/theme.context";
import {
  APIContext,
  APIContextProvider,
} from "./services/apiContext/API.Context";
import { Spinner } from "react-bootstrap";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { isLoading } = useContext(APIContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: (
        <Protected>
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div
      className={`App ${theme === "DARK" && "dark-theme"} ${
        isLoading && "opacity-80"
      }`}
    >
      {isLoading && <Spinner />}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
