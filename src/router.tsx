import { Navigate, createBrowserRouter } from "react-router-dom";
import Users from "./pages/Users";

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/users" replace /> },
  { path: '/users', element: <Users /> },
  { path: '/users/:userId', element: <Users /> },
]);