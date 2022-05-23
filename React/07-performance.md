## INDEX

- [INDEX](#index)
- [React.memo()](#reactmemo)
- [useCallback()](#usecallback)
- [useMemo()](#usememo)
- [Code Splitting & Dynamic Imports](#code-splitting--dynamic-imports)
  - [`React.lazy()`](#reactlazy)
  - [Suspense](#suspense)

---

## React.memo()

- When deciding to update DOM, React first renders your component, then compares the result with the previous render. **If the render results are different, React updates the DOM**.

- When a component is wrapped in React.memo(), React renders the component and memoizes the result. Before the next render, if the `new props` are the same, React reuses the memoized result **skipping the next rendering.**

> This comes at a cost of storing the previos component in memory and comparing it each time, so It's best to use it if you have big component that has a lot of child-components.

- **NOTE**: If you have a component wrapped in `React.memo()` and the props from the parent-component is a **callback-function** for and event or other -> you should put the callback in a `useCallback()` hook as each time the parent element renders it will also render the callback-function unless it's in an `useCallback()` hook.

---

## useCallback()

[read more here..](https://dmitripavlutin.com/dont-overuse-react-usecallback/)

- `useCallback` Hook returns a memoized callback function.
- It only runs when one of its dependencies update.

> "Every callback function should be memoized to prevent useless re-rendering of child components that use the callback function"

```js
import { useCallback } from "react";

function MyComponent() {
  const handleClick = useCallback(() => {
    // handle the click event
  }, []);

  return <MyChild onClick={handleClick} />;
}
```

- The `useMemo` and `useCallback` Hooks are similar. The main difference is that useMemo returns a memoized value`(reference-values like objects & Arrays)` and useCallback returns a memoized function.

---

## useMemo()

- The React useMemo Hook returns a `memoized` value.
  - Think of memoization as `caching` a value so that it does not need to be recalculated.
- only runs when one of its dependencies update This can improve performance.
- usually with high-computation operations like `sorting`, `a result-value from for-loop

- `useMemo()` accepts 2 arguments — a function compute that computes a result and the depedencies array

- usually it's used in the parent and the child components

```js
import { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
```

---

## Code Splitting & Dynamic Imports

bundling involves aligning our code components in progression and putting them in one javascript chunk that it passes to the browser; but as our application grows, we notice that bundle gets very cumbersome in size. This can quickly make using your application very hard and especially slow.

- With Code splitting, the bundle can be split to `smaller chunks` where the most important chunk can be loaded first and then every other secondary one lazily loaded.

### `React.lazy()`

It is a new function in react that lets you load react components lazily through code splitting without help from any additional libraries.

- **Lazy loading** is the technique of **rendering only-needed** or critical user interface items first, then quietly unrolling the non-critical items later.
  - it's used instead of `import`

### Suspense

Suspense is a component required by the lazy function basically used to wrap lazy components. Multiple lazy components can be wrapped with the suspense component. It takes a fallback property that accepts the react elements you want to render as the lazy component is being loaded.

```js
import { lazy, Suspense } from "react";
const Artists = lazy(() => import("./Artists"));
const Performers = lazy(() => import("./Performers"));

//...
return (
  <div>
    <Suspense fallback={<h1>Still Loading…</h1>}>
      <Artists />
      <Performers />
    </Suspense>
  </div>
);
```
