# 🔹 What is list rendering?
- When you have an array of items (like todos, users, products, etc.), you can use JavaScript’s .map() function inside JSX to dynamically render them as a list of components or elements.

## 🔹 Example 1: Simple list rendering
```
function App() {
  const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍊 Orange"];

  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>   {/* key is important! */}
        ))}
      </ul>
    </div>
  );
}
export default App;
```
### 👉 Output:

🍎 Apple
🍌 Banana
🍇 Grapes
🍊 Orange

## 🔹 Example 2: Rendering objects

- If you have an array of objects (like todos), you can map them into JSX.
```
function App() {
  const todos = [
    { id: 1, title: "Learn React", desc: "Start with basics" },
    { id: 2, title: "Build a project", desc: "Practice coding" },
    { id: 3, title: "Master Hooks", desc: "useState, useEffect, useRef" }
  ];

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <h3>{todo.title}</h3>
          <p>{todo.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
```
### 👉 Output:

Learn React
Start with basics

Build a project
Practice coding

Master Hooks
useState, useEffect, useRef

## 🔹 Why do we need key?

1. React requires a unique key for each item in a list.
2. key helps React identify which items changed, added, or removed → makes rendering more efficient.
3. Ideally, use a unique ID from your data (not the index unless necessary).

- Example:
  ```
  <li key={todo.id}>{todo.title}</li>
  ```
## ✅ Key points about key:

- Must be unique among siblings (not necessarily globally unique).
- Use stable IDs from your data, not array index (unless no better option).
- React uses keys to figure out which items to re-render, move, or remove.

## Summary
-  Use .map() inside JSX to render lists.
-  Always add a key prop.
-  You can render simple text or whole components.
