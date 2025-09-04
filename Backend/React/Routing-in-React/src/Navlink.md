# 🔹 1. What is NavLink?

- NavLink is just like Link, but with extra features for styling when a link is active.  
- It automatically applies an "active" class (or custom styles) to the link when the current URL matches its to prop.

## 🔹 2. Why use NavLink instead of Link?

- Use NavLink when you want navigation highlighting (active tab effect).  
- Example: In a navbar, you want the current page’s link (e.g., “Home”) to look different (bold, underlined, colored, etc.).

## 🔹 3. Where to use NavLink?

- In navigation menus (Navbar, Sidebar, Tabs).  
- Any place you want to indicate which route/page is active.

## 🔹 4. How to use NavLink

```
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
```
## 🔹 5. Key Points

i. NavLink provides a function ({ isActive }) => ...

    - isActive: true → if the link matches the current route.  
    - isActive: false → if not.

ii. You can use:

    - style={({ isActive }) => ... } → inline styles.  
    - className={({ isActive }) => ... } → add/remove CSS classes.

## 🔹 6. CSS Example
```
.active-link {
  font-weight: bold;
  text-decoration: underline;
  color: blue;
}
```
So when you’re on /about, the “About” link will automatically get class="active-link"

## Summary

- Use Link when you just need navigation.
- Use NavLink when you want active route highlighting (for menus/navbars).