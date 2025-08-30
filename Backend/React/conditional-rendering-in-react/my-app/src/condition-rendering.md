# 🔹 What is Conditional Rendering?

- Conditional rendering in React means displaying different UI elements depending on certain conditions (like state or props).
- It’s just like if/else statements in JavaScript, but applied inside JSX.

## 🔹 Methods of Conditional Rendering

### 1. Using if/else
```
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome back! 🎉</h1>;
  } else {
    return <h1>Please login first 🔑</h1>;
  }
}
```
### 2. Using Ternary Operator (condition ? true : false)
```
function App() {
  const isDarkMode = false;

  return (
    <div>
      {isDarkMode ? <h1>🌙 Dark Mode</h1> : <h1>☀️ Light Mode</h1>}
    </div>
  );
}
```
### 3. Using Logical AND (&&)
- Best when you only want to show something if a condition is true.
```
function App() {
  const hasNotification = true;

  return (
    <div>
      <h1>Welcome User 👋</h1>
      {hasNotification && <p>🔔 You have a new notification!</p>}
    </div>
  );
}
```
### 4. Using Switch Statement
```
function App() {
  const role = "admin";

  switch (role) {
    case "admin":
      return <h1>👑 Welcome Admin</h1>;
    case "user":
      return <h1>🙋 Welcome User</h1>;
    default:
      return <h1>Guest Mode</h1>;
  }
}
```
### 5. Storing JSX in Variables
```
function App() {
  const isLoggedIn = true;
  let message;

  if (isLoggedIn) {
    message = <h1>✅ You are logged in</h1>;
  } else {
    message = <h1>❌ Please log in</h1>;
  }

  return <div>{message}</div>;
}
```
