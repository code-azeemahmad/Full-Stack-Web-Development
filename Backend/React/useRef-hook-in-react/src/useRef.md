# 🔹 What is useRef?

- useRef is a React Hook that lets you create a mutable reference to a value or a DOM element that does not cause re-renders when updated.

- Think of it like a box that can hold a value which React won’t track for re-rendering.

## Syntax
```
import { useRef } from "react";
const ref = useRef(initialValue);
```
- ref.current → holds the value (like a .current property).
- Unlike useState, changing ref.current does not re-render the component.

## 🔹 When to use useRef?

1. To store values that should not trigger re-renders.
2. To access/manipulate DOM elements directly (like focus, scroll, play/pause a video).
3. To persist values across renders without re-initializing.

## Why not useState for everything?

--> useState updates → cause a re-render (good for UI)  
--> useRef updates → do NOT re-render (good for “just remember this” values or DOM handles).

- Use state when the UI must reflect a value.
- Use ref when the UI doesn’t need to re-render because of that value.