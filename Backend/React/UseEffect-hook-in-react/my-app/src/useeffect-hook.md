# What is useEffect?
- useEffect is a React hook that lets you run side effects in functional components.
- Side effects are things that React itself doesn’t do automatically (e.g., fetching data, updating the DOM manually, timers, event listeners, etc.).

## Syntax
``` import { useEffect } from "react";

useEffect(() => {
  // setup (subscribe, start timer, add event listener, etc.)
  return () => {
    // cleanup (unsubscribe, stop timer, remove event listener, etc.)
  };
}, [dependencies]);
```

## Summary
- useEffect(fn) → runs after every render.
- useEffect(fn, []) → runs once on mount.
- useEffect(fn, [state]) → runs when state changes.
- Cleanup function → good for removing timers, event listeners, subscriptions.