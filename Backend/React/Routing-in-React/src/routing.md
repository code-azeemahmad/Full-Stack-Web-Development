## Install React Router
```
npm install react-router-dom
```
# Using createBrowserRouter + RouterProvider (data API, v6.4+)
- Newer, more powerful (good if you want loaders, actions, etc.).
```
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./About";
import Contact from "./Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```
# Navigation with `<Link />`
- Instead of <a href="">, use:
```
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
```
- This prevents full page reloads and keeps it SPA.

## 4. Example App Flow:
- Navbar links → change URL without reloading page
- Router → decides which component to render based on path
- Route or createBrowserRouter → define mapping between path ↔ component  
- 
## In short:
- --> BrowserRouter → wraps your app, provides routing
- --> Routes + Route → define pages
- --> Link → navigation without reload
- --> createBrowserRouter → advanced data-driven routing