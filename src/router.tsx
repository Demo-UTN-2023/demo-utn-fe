import { Navigate, createBrowserRouter } from "react-router-dom";
import Users from "./pages/Users";
import CreateUser from "./pages/Users/CreateUser";
import UpdateUser from "./pages/Users/UpdateUser";

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/users" replace /> },
  { path: '/users', element: <Users /> },
  { path: '/users/create', element: <CreateUser /> },
  { path: '/users/update/:userId', element: <UpdateUser /> },
  { path: '/users/:userId', element: <Users /> },
]);