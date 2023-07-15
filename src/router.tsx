import { createBrowserRouter, redirect } from "react-router-dom";
import Users from "./pages/Users";

export const router = createBrowserRouter([
  { path: '/', loader: () => redirect('/') },
  { path: '/users', element: <Users /> },
  { path: '/users/:userId', element: <Users /> },
]);