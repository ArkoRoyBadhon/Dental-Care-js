import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import OfficeTour from "../pages/OfficeTour";
import Services from "../pages/Services";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import RequireAuth from "../components/RequireAuth";
import Appointment from "../pages/Appointment";
import MyAppointment from "../pages/MyAppointment";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/office",
        element: <OfficeTour />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/my-appointment",
        element: <MyAppointment />,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth allowedRoles={["admin"]}>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default routes;
