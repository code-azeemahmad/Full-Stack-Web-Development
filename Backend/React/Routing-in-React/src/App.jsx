// import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import About from "./Components/About";
import "./App.css";

import { 
  createBrowserRouter, 
  RouterProvider 
} from "react-router-dom";

function App() {
    const router = createBrowserRouter([
      {
        path: "",
        element: <Home />
      }, 
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/about",
        element: <About />
      }
    ]);

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

/*
Think of <RouterProvider /> as the brain that connects your React app to React Router’s routing system.
It makes routing context (like current URL, navigation methods, loaders, actions, etc.) available to all your components.
*/