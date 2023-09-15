import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";

import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Protected from "./components/security/protected/Protected";
import { useState } from "react";
import PageNotFound from "./components/security/pageNotFound/PageNotFound";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <Login onLoggedIn={loginHandler} />,
    },
    {
      path: "/home",
      element: (
        <Protected isSignedIn={isLoggedIn}>
          <Dashboard onLogout={logoutHandler} />
        </Protected>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
