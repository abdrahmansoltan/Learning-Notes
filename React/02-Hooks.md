## INDEX

- [INDEX](#index)
- [Functional Components](#functional-components)
- [Component's State](#components-state)
  - [Difference between state and props](#difference-between-state-and-props)
  - [Using the state](#using-the-state)
- [Effect Hook](#effect-hook)
  - [useEffect](#useeffect)
  - [useEffect cleanup function](#useeffect-cleanup-function)
- [useReducer()](#usereducer)
- [useContext()](#usecontext)
  - [Prop drilling](#prop-drilling)
  - [Soulution](#soulution)
  - [useContext Hook](#usecontext-hook)
- [Hooks Rules](#hooks-rules)
- [useCallback()](#usecallback)
- [useMemo()](#usememo)
- [Custom Hooks](#custom-hooks)

---

## Functional Components

here each time the state change the entire function get called and rerendered unlike in `class components` where only the `render()` method was called

---

## Component's State

[reference](https://reactjs.org/docs/faq-state.html#gatsby-focus-wrapper)

- `setState()` schedules an update to a component’s state object. When state changes, the component responds by `re-rendering`.
  - it happens `ASynchronously` as react finds the best strategy to change it, so it's better to use a callback function inside of `setState`

### Difference between state and props

props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way:

- `props` get passed to the component (similar to function `parameters`)
- `state` is managed within the component (similar to `variables` declared within a function).

---

### Using the state

- In React, both this.props and this.state represent the rendered values, i.e. what’s currently on the screen.
- Calls to setState are asynchronous - don’t rely on this.state to reflect the new value immediately after calling setState. Pass an updater function instead of an object if you need to compute values based on the current state

- `useState`

  - The React `useState` Hook allows us to track state in a (function component).
  - it `must` be written inside the `component` function
  - `useState` accepts an `initial state` and returns an `array` with two elements:
    - The current state.
    - A function that updates the state.

```js
// in the top of the file
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");
  // color is our current state
  // setColor is the function that is used to update our state

  return <h1>My favorite color is {color}!</h1>;
}

// or with Updating the State
function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Change Color
      </button>
    </>
  );
}
```

---

## Effect Hook

- when changing the state => the **whole function-component** `rerenders`.
- data fetching(`HTTP requests`), subscriptions, or manually changing the DOM from React components. We call these operations `“side effects`” (or `“effects”` for short) because they can affect other components and **can’t be done during rendering.**
  - so such `sideEffects` shouldn't go directly inside the component-function as it will create bugs
- The Effect Hook, `useEffect`, adds the ability to perform side effects from a function component. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes, but unified into a single API

### useEffect

![useEffect](./img/sideEffects.PNG)

- When you call `useEffect`, you’re telling React to run your `“effect”` function after flushing changes to the `DOM`. Effects are declared inside the component so they have access to its props and state. By default, React runs the effects after every render — including the first render.

<img src="./img/react-useeffect-callback-3.svg" style="background-color: #fff">

### useEffect cleanup function

- it saves applications from unwanted behaviors like memory leaks by cleaning up effects. In doing so, we can optimize our application’s performance.
- it allows us to tidy up our code before our component unmounts. When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.
- The `useEffect` Hook is built in a way that we can return a function inside it
  - this `return function` is where the cleanup happens.
  - The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.

```js
useEffect(() => {
  effect;
  return () => {
    cleanup;
  };
}, [dep]);
```

- the `cleanup` function runs before every new side effect function execution and before the component is removed.
- it does not run `before` the first side effect function execution. But thereafter, it will run `before` every next side effect function execution.

---

## useReducer()

![useReducer](./img/reducer.PNG)

- in `useState()` the state management logic takes a good part of the component body.
  - That's a problem because the React component in nature should contain the logic that calculates the output. But the state management logic is a different concern that should be managed in a separate place. Otherwise, you get a mix of state management and rendering logic in one place, and that's difficult to read, maintain, and test!
- `useReducer()` does so by extracting the state management out of the component.

- Use-Cases :

  - When you have states that belongs together
  - if you have state updates that depend on other state.

- The hook returns an `array of 2 items`: the `current state` and the `dispatch function`.

![usereducer](./img/useReducer.PNG)

```js
import { useReducer } from "react";

// reducer function can be here outside the component

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const action = {
    type: "ActionType",
  };
  return <button onClick={() => dispatch(action)}>Click me</button>;
}
```

---

## useContext()

### Prop drilling

`Prop drilling` is basically a situation when the same data is being sent at almost every level due to requirements in the final level.

![Prop drilling](./img/drilling.png)

---

### Soulution

Context provides a way to pass data through the component tree without having to pass `props` down manually at every level.

- without context

  ![context](./img/context.PNG)

- with context

  ![context](./img/with-context.PNG)

- React Context is a way to manage state globally.
  - it stores data in a external object so that it can be accessed globally.
- Context is designed to share data that can be considered `global` for a tree of React components, such as the current authenticated user, theme, or preferred language.
- we'll use the `Context Provider` to wrap the tree of components that need the state Context.

  - `Context Provider` Wrap child components in the Context Provider and supply the state value.

- `without context` (Passing "props" through nested components:)

  ```js
  import { useState } from "react";
  import ReactDOM from "react-dom";

  function Component1() {
    const [user, setUser] = useState("Jesse Hall");

    return (
      <>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </>
    );
  }

  function Component2({ user }) {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 user={user} />
      </>
    );
  }

  function Component3({ user }) {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 user={user} />
      </>
    );
  }

  function Component4({ user }) {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 user={user} />
      </>
    );
  }

  function Component5({ user }) {
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }
  ```

- `with context`

  ```js
  import { useState, createContext } from "react";
  import ReactDOM from "react-dom";

  const UserContext = createContext();

  function Component1() {
    const [user, setUser] = useState("Jesse Hall");

    return (
      // in the provider the attribute must be named "value"
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </UserContext.Provider>
      // Now, all components in this tree will have access to the user Context.


    );
  ```

### useContext Hook

- In order to use the Context in a child component, we need to access it using the useContext Hook.

```js
import { useState, createContext, useContext } from "react";

function Component5() {
  // inside the component
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
```

---

## Hooks Rules

![rules](./img/rules.PNG)

---

## useCallback()

[read here](ff)

- It's an optimization technique for functions especially in `react.memo()`

> "Every callback function should be memoized to prevent useless re-rendering of child components that use the callback function"

```js
mport React, { useCallback } from 'react';
function MyComponent() {
  const handleClick = useCallback(() => {
    // handle the click event
  }, []);
  return <MyChild onClick={handleClick} />;
}
```

## useMemo()

- The React useMemo Hook returns a `memoized` value.
  - Think of memoization as `caching` a value so that it does not need to be recalculated.
- only runs when one of its dependencies update This can improve performance.
- usually with high-computation operations like `sorting`, `a result-value from for-loop

- The `useMemo` and `useCallback` Hooks are similar. The main difference is that useMemo returns a memoized value`(reference-values like objects & Arrays)` and useCallback returns a memoized function.
  `

```js
import { useState, useMemo } from "react";
import ReactDOM from "react-dom";

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

## Custom Hooks

- When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook
  - they're reusable functions.
- Custom Hooks start with "`use`". Example: `useFetch`
