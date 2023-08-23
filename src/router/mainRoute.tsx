import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../components/common/FirstLayout";
import LandingPage from "../pages/auth/LandingPage";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import MainLayout from "../components/common/MainLayout";
import HomeScreen from "../pages/screen/HomeScreen";
import ViewScreen from "../pages/screen/ViewScreen";
import ErrorPage from "../error/Error";
// import PrivateRoute from "./PrivateRoute";
import CreateTask from "../pages/screen/CreateTask";
import AdminSignin from "../pages/admin/AdminSignin";
import AdminSignup from "../pages/admin/AdminSignup";
import AdminView from "../pages/admin/AdminView";
import AdminScreen from "../pages/admin/AdminScreen";
import AdminLayout from "../components/common/AdminLayout";
import PrivateRoute from "./PrivateRoute";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/admin/signin",
    element: <AdminSignin />,
  },
  {
    path: "/admin/signup",
    element: <AdminSignup />,
  },
  {
    path: "/access",
    element: (
      // <PrivateRoute>
      <MainLayout />
      // </PrivateRoute>
    ),
    children: [
      {
        path: "/access/home",
        element: <HomeScreen />,
      },
      {
        path: "/access/view",
        element: <ViewScreen />,
      },
      {
        path: "/access/create",
        element: <CreateTask />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin/home",
        element: <AdminScreen />,
      },
      {
        path: "/admin/view",
        element: <AdminView />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
