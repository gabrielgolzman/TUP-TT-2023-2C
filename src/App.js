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

const App = () => {
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

  return <RouterProvider router={router} />;
};

export default App;
