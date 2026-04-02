import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/Landing";
import { Catalog } from "./pages/Catalog";
import { BookDetail } from "./pages/BookDetail";
import { Dashboard } from "./pages/Dashboard";
import { Admin } from "./pages/Admin";
import { Reports } from "./pages/Reports";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/catalog",
    Component: Catalog,
  },
  {
    path: "/book/:id",
    Component: BookDetail,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/admin",
    Component: Admin,
  },
  {
    path: "/reports",
    Component: Reports,
  },
]);
