import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import About from "./Components/About";
import User from "./Components/User";
import "./App.css";

import { 
  createBrowserRouter, 
  RouterProvider 
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "user/:username",
    element: (
      <>
        <Navbar />
        <User />
      </>
    )
  }
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;

/*
Think of <RouterProvider /> as the brain that connects your React app to React Router’s routing system.
It makes routing context (like current URL, navigation methods, loaders, actions, etc.) available to all your components.
*/