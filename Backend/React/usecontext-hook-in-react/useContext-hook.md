# “prop drilling” in React.

## What it means
- You have some data in a parent component.
- A deeply nested child component needs that data.
- To pass it, you give the prop to every intermediate component, even if they don’t use it.

## Problem
- Gets messy in large apps with deeply nested trees.
- Harder to maintain when props must change.

## Solution
- Use props when only a few levels deep.
- Switch to Context or state management when many nested components need the same data.

# What is useContext?
- useContext is a React Hook that allows you to share state (or data) across the component tree without passing props manually at every level ("prop drilling").
- It works with React.createContext().

## When to use useContext?

✅ When multiple components need access to the same data (e.g., user authentication, theme, language).
✅ To avoid passing props through many nested components.
❌ Don’t use it for everything. If only 1 or 2 components need data, passing props is simpler.
❌ For large apps with complex state → use Context + Reducer or state management libraries like Redux, Zustand, Recoil.

## How to use useContext?
### Step 1: Create a context
```
import { createContext } from "react";

export const ThemeContext = createContext();
```
### Step 2: Provide context value
Wrap your app (or part of it) with the Provider:
```
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Child from "./Child";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <h1>App Component</h1>
        <Child />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
```
### Step 3: Consume context in a child component
```
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Child() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Current theme: {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Child;
```

## Flow of useContext

- createContext() → Creates a context object.
- Provider → Wraps components and gives them access to a value.
- useContext(MyContext) → Lets child components read the value directly.

## In short:
useContext = No more "prop drilling". It makes data globally available in a section of your component tree.