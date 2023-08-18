# INDEX

- [INDEX](#index)
  - [Functional Components](#functional-components)
  - [State](#state)
    - [`useState` Hook](#usestate-hook)
      - [changing state of type `object`](#changing-state-of-type-object)
      - [Functional state updates](#functional-state-updates)
  - [Refs](#refs)
    - [The Reference object](#the-reference-object)
    - [`useRef`](#useref)
      - [Why use it ?](#why-use-it-)
    - [`useRef` Implementation (How to use it)](#useref-implementation-how-to-use-it)
  - [Effect Hook](#effect-hook)
    - [You might not need an Effect](#you-might-not-need-an-effect)
    - [`useEffect`](#useeffect)
    - [`useEffect` dependency array](#useeffect-dependency-array)
    - [`useEffect` cleanup function](#useeffect-cleanup-function)
  - [useReducer()](#usereducer)
    - [Action generator functions](#action-generator-functions)
    - [Not recommended ways of using reducer function](#not-recommended-ways-of-using-reducer-function)
    - [reducer function with Immer](#reducer-function-with-immer)
  - [Context API](#context-api)
    - [Prop drilling](#prop-drilling)
    - [Solution for Prop drilling: (context)](#solution-for-prop-drilling-context)
    - [context setup](#context-setup)
    - [`useContext` Hook](#usecontext-hook)
    - [Context Limitations](#context-limitations)
  - [Hooks Rules](#hooks-rules)
  - [Custom Hooks](#custom-hooks)
    - [Custom hook for form input (`useInput`)](#custom-hook-for-form-input-useinput)
    - [Custom hook for context](#custom-hook-for-context)

---

## Functional Components

here each time the state change the entire function get called and rerendered unlike in `class components` where only the `render()` method was called

React functional components are **Pure Functions** which depend on the component's props

- We use `hooks` to create impure functions as they generate side-effects

  - `hooks` are used to make functional components behave like class components (with state and lifecycle methods)
  - `hooks` can only be used inside functional components

    ```jsx
    import { useState } from 'react';

    function App() {
      // works because it's in the top level of the component ✅
      const [count, setCount] = useState(0);

      // doesn't work because it's inside a function or a block ❌
      if (count > 0) {
        const [count, setCount] = useState(0);
      }
    }
    ```

---

## State

[reference](https://reactjs.org/docs/faq-state.html#gatsby-focus-wrapper)

- `useState` is a Hook that allows you to have state variables in functional components.
- `setState()` schedules an update to a component’s state object. When state changes, the component responds by `re-rendering`.
  - it happens `ASynchronously` as react finds the best strategy to change it, so it's better to use a `callback function` inside of `setState()`
- Mutating the `state` directly, without `setState()` is not allowed and will not re-render the component.

  - Even when mutating `object` state, it's better to use `setState()` as it will make sure to re-render the component

    ```jsx
    // ❌
    person.name = 'Jesse Hall';
    // ✅
    setPerson({ ...person, name: 'Jesse Hall' });
    ```

> By default, React 18 uses a technique called **"auto-batching"** to group `state` updates that occur within the same event-loop into a single update. This means that if you call the state-update function multiple times in a short period of time, **React will only perform a single re-render for all of the updates**

---

### `useState` Hook

It's used to encapsulate a single value from the state of the component

![useState](./img/useState.png)

- Calls to `setState` are **asynchronous** - don’t rely on `state` to reflect the new value immediately after calling `setState`.

- `useState`

  - The React `useState` Hook allows us to track state in a (function component).
    - calling `useState` defines a new piece of state
  - it `must` be written inside the `component` function

```jsx
// in the top of the file
import { useState } from 'react';

function FavoriteColor() {
  const [color, setColor] = useState('red');
  // color is our current state
  // setColor is the function that is used to update our state

  return <h1>My favorite color is {color}!</h1>;
}

// or with Updating the State
function FavoriteColor() {
  const [color, setColor] = useState('red');

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type='button' onClick={() => setColor('blue')}>
        Change Color
      </button>
    </>
  );
}
```

- the current state is assigned to the initial state in the first render
- calling the setter function causes React to **re-render** the component
- `useState` accepts an `initial state` and returns an `array` with two elements:

  - The current state.
  - A function that updates the state.

- To update the state with the current state, we can pass a function to the setter function with the current state as an argument:

  ```jsx
  // updating state with depending on previous state
  setTotal(state => state + 4);
  ```

---

#### changing state of type `object`

when we have a state with type `object`, when we update any of the state-object properties, make sure to use the previous state using the spread operator:

```js
setPerson(curState => {
  return { ...curState, age: 40 };
});
```

- this way is commonly used with `Form inputs`, to collect all input values in a state-object and use the `name-attribute` as the `object-key`

  ```jsx
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = e => {
    setPerson(currentPerson => {
      return {
        ...currentPerson,
        [e.target.name]: e.target.value
      };
    });
  };

  // in JSX, add the attribute: 'name' in input elements
  ```

---

#### Functional state updates

As the state changes **asynchronously**, if we want to set state based on current state values, we can use the functional version of setting the state: (it's like [callbacks in class components](./03-Class-Components.md#callbacks-in-setstate))

This way of dealing with state is called: **"Derived State"**, which is that values that we can calculate using existing state

![functional-state-update](./img/functional-state-update.png)
![functional-state-update](./img/functional-state-update-1.png)

---

## Refs

[reference](https://blog.logrocket.com/complete-guide-react-refs/)

- **Allow us to access DOM properties directly, which makes us have "uncontrolled inputs"**. Normally, React uses `state` to update the data on the screen by re-rendering the component for us. But there are certain situations where you need to deal with the DOM properties directly, and that’s where refs come in.
- can be very useful when dealing with different frameworks like `react + JQuery` or `react + Angular`

> Note: `refs` are escape hatches for React developers, and we should try to avoid using them if possible.

- You can gain access to the actual HTML element by creating a React reference and passing it to the element itself.

  - This way, at any time in the lifecycle of the component, we can access the actual HTML element at `buttonRef.current`

  ```js
  import React, { useRef } from 'react';
  const ActionButton = ({ label, action }) => {
    const buttonRef = useRef(null);
    return (
      <button onClick={action} ref={buttonRef}>
        {label}
      </button>
    );
  };
  export default ActionButton;
  ```

---

### The Reference object

the variable you use `useRef` with will become a frozen object with a **`current`** property which contains the referenced element

---

### `useRef`

It allows a component to get a reference to a DOM nodes/elements that it creates.

- It can be used to access a DOM nodes/elements directly **with a preserved value**
- most of the time it's used with DOM elements, but it can hold a reference to any value

- It can be used to store a mutable value that does not cause a re-render when updated.

  - **It doesn't trigger re-render**
  - It allows you to persist values between renders.

- **usually used For:**

  - **form-input**
  - Accessing DOM elements

    - used when you need to have programmatic access to a DOM node like:

      - a form input or an element that you want to focus on
      - getting the dimensions of an element (`height`, `width`)

        ```jsx
        const [height, setHeight] = useState(0);
        const refContainer = useRef(null);

        useEffect(() => {
          setHeight(refContainer.current.getBoundingClientRect().height); // getBoundingClientRect() returns the size of an element and its position relative to the viewport (window)
        }, []);

        return (
          <div ref={refContainer}>
            <h1>hello world</h1>
          </div>
        );
        ```

      - getting the scroll position of an element (`scrollTop`, `scrollLeft`)

  - Doing a functionality in each render except initial render

    ```js
    const [value, setValue] = useState(0);
    const refContainer = useRef(null);
    const isMounted = useRef(false);

    useEffect(() => {
      if (!isMounted.current) {
        // in initial render
        isMounted.current = true;
        return;
      }

      // in other re-renders except initial-render
      console.log('re-render');
    }, [value]);
    ```

---

#### Why use it ?

If we tried to count how many times our application renders using the `useState` Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

> **ref**: is like I have one value that I need to refer to the exact same thing across all renders, so that different renders have access to one exact version of the state
>
> **useRef** make sure we get same thing each render

To avoid this, we can use the `useRef` Hook.

---

### `useRef` Implementation (How to use it)

1. create a `ref` at the top of your component by calling `useRef`
2. Assign the `ref` to a JSX element as a prop called `ref`
3. Access that DOM element with `ref.current`

   - **Note:** before accessing the DOM element properties inside `ref.current`, Always check if the element is visible:

     ```js
     if (!inputElement.current) {
       return;
     }
     // ... continue handler
     ```

```js
// Using useRef to focus the input

import { useRef } from 'react';

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type='text' ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

- **Note**: You can also access form-inputs with `useState`:

  ```jsx
  handleChange(e) {
    setState(e.target.value);
  }

  <input type="text" value={state} onChange={handleChange} />
  ```

---

## Effect Hook

> If we are writing **functional components, We won't have lifecycle methods**. We can think of `useEffect` hook as the **react-class-component lifecycle methods** (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`)
>
> - Instead we have **"pure functions"** and **"side effects"**

- when changing the state => the **whole function-component** `rerenders`.
- Data fetching(`HTTP requests`), subscriptions, or manually changing the DOM from React components. We call these operations `side effects` (or `effects` for short) because they can affect other components and **can’t be done during rendering.**
  - so such `sideEffects` shouldn't go directly inside the component-function as it will create bugs
- The Effect Hook, `useEffect()`, adds the ability to perform side effects from a function component. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes, but unified into a single API

> **Side-Effects**: Tasks that must happen outside of the component-evaluation and render-cycle, as they might block rendering (ex: HTTP request)
>
> - React has no tools, objects, functions for making HTTP requests
> - React only cares about showing content and handling user events

---

### You might not need an Effect

> More [Here](https://react.dev/learn/you-might-not-need-an-effect)

`useEffect` is used most of the time for **fetching data**, and this process is now replaced by: (`libraries`, `react query`, `rtk query`, `swr` of `next.js`)

- by using these alternatives, we can use less `useEffect`

---

### `useEffect`

It's a function from React used to run code **(always)** when a component is initially **rendered** and **(sometimes)** when it's re-rendered

![useEffect](./img/sideEffects.PNG)

- by default it runs after re-render unless dependency-array is utilized
- When you call `useEffect`, you’re telling React to run your `effect` function after flushing changes to the `DOM`. Effects are declared inside the component so they have access to its props and state. By default, React runs the effects after every render — including the first render.

- it happens after all other functions and state
  ![useEffect-callback](./img/react-useeffect-callback-3.svg)
- we can have multiple `useEffect()`(Effects) in the component for different state fields

**use cases:**

- making a request on page load
- adding event listener on page load

  - make sure not to forget the dependency array here to prevent infinite-rendering and to add a cleanup function

    ```js
    useEffect(() => {
      window.addEventListener('resize', () => {
        setSize(window.innerWidth);
      });
    }, []);
    ```

- doing something after some time on page load using `useTimeout()`

  ```js
  useEffect(() => {
    setTimeout(() => {
      setSize(window.innerWidth);
    }, 3000);
  }, []);
  ```

---

### `useEffect` dependency array

![dependency array](./img/useEffect-dependency.png)

**Notes:**

- when using a piece of state inside `useEffect` body, it will reference the initial state and not use the updated state on each render unless you add this piece of state to the dependency array

  - this is because at each render, a new piece of state is created and added to memory and the `useEffect` won't be called again (unless you add this piece of state to the dependency array), so it will have reference to the old state value
    ![dependency array](./img/useEffect-dependency-1.png)
  - This bug/issue is common when using `useEffect` and it's called **"Stale Variable References"**
    - > usually `create-react-app` includes ESLint rule to help you find this when using empty array as a dependency array

- When using a piece of state in the dependency array, each render will result creation of a new callback function in the `useEffect` body. That's why it will now has an updated reference to the piece of state
- the (render infinite loop) can happen if you put a function that changes the state (ex: `fetchBooks`) in the dependency array, as this function will be re-created at each render which will cause calling it again which changes the state and so on
  - to fix this, we use [useCallback](./06-performance.md#usecallback)

---

### `useEffect` cleanup function

- it saves applications from unwanted behaviors like memory leaks by cleaning up effects. In doing so, we can optimize our application’s performance.
- it allows us to tidy up our code before our component unmounts. When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.

- The `useEffect` Hook is built in a way that we can return a function inside it
  ![useEffect-cleanup](./img/useEffect-cleanup.png)

  - this `return function` is where the cleanup happens.

    ```js
    useEffect(() => {
      effect;
      return () => {
        cleanup;
      };
    }, [dep]);
    ```

- when the `cleanup` function is called?
  ![useEffect-cleanup](./img/useEffect-cleanup-1.png)

  - the `cleanup` function runs **before** every new side effect function execution and before the component is removed.
  - it does not run before the first side effect function execution. But thereafter, it will run before every next side effect function execution.
  - **Note:** the `cleanup` function will only be called if the `useEffect` callback function will be called again (when there's something in the dependency array or no array what so ever)

- The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.

  - ex: event listeners, because we want to stop listening to events when re-rendering or we will have a new event listener created on each render and we would have multiple listeners which is BAD
    ![useEffect-cleanup](./img/useEffect-cleanup-2.png)

- **Note:** `useEffect` cb-function can't be `async` because it can't return a promise, as it only returns the cleanup function

  - but the execution code inside the cb-function can contain async-functions

  ```js
  useEffect(async () => {}, []); // ❌

  // ---------------------------------------- //

  getUsers = async () => {};
  useEffect(() => {
    getUsers(); // ✅
  }, []);
  ```

---

## useReducer()

It's an alternative to `useState`. Accepts a reducer of type `(state, action) => newState`, and **returns** the current state paired with a `dispatch` method.

![useReducer](./img/reducer.PNG)

- in `useState()` the state management logic takes a good part of the component body.

- That's a problem because the React component in nature should contain the logic that calculates the output. But the state management logic is a different concern that should be managed in a separate place. Otherwise, you get a mix of state management and rendering logic in one place, and that's difficult to read, maintain, and test! as the order of depending states may differ and cause wrong action!

- `useReducer()` does so by extracting the state management out of the component.

- Use-Cases :
  ![useReducer](./img/useReducer-1.png)

- When you have states that belongs together
- if you have a state updates (is set) that depend on other state.
- If you find yourself keeping track of multiple pieces of state that rely on complex logic
  ![useReducer](./img/useReducer-3.png)

- It's similar to `useState()` as the hook returns an `array of 2 items`: the `current state` and the `dispatch function`.
  ![useReducer](./img/useReducer-2.png)
- `reducer function` can be outside the component as it doesn't use any items from the component, it only uses **items rendered by react**

---

![useReducer](./img/useReducer.PNG)
![useReducer](./img/useReducer-4.png)
![useReducer](./img/useReducer-5.png)

- **Reducer function** It's just a function that **returns** the shape of the data we want to store. It contains your custom state logic(different scenarios).
  ![useReducer](./img/useReducer-6.png)
  ![useReducer](./img/useReducer-7.png)

- after executing the scenario-code, you must return a new state object
  - if nothing returned from the reducer function, the state will be `undefined`

```js
// reducer function: takes 2 values and "reduces" them down to one value
(accumulatedValue, nextItem) => nextAccumulatedValue


// in our case (useReducer), the 2 values provided to a reducer are:
  // - the current state
  // - an action that (may) update the state
  (state, action) => newState
```

- **`initialState`** can be a simple value but generally will contain an **object** as it's for more complex state.
- **`dispatch`** : is what we call in order to update the state --> it's like `setState()`
  - it will call the `reducer function` for us with `argument = action-object`
- **`action`** is an **object** that tells the reducer how to change the state.
  ![action](./img/action-1.png)
  - It must contain a **type** property
    ![action](./img/action-2.png)
    - It's to tell the reducer function how the state should be updated
    - The React community has come up with this convention on how to tell the reducer what it needs to do (React doesn't treat these action objects any differently)
  - It can contain an optional **payload** property which has the data you want to add to the state(parameters to be used)
  - for action types, we should follow this:
    ![action](./img/action-3.png)
- Finally: when state is updated the component gets rerendered just like in `useState()`

![useReducer](./img/reducer2.svg)

```js
import { useReducer } from 'react';

// reducer function can be here outside the component as it doesn't use any items from the component, it only uses items rendered by react
const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state, action) {
  let newState;
  switch (action.type) {
    case 'increase':
      newState = { counter: state.counter + 1 };
      break;
    case 'decrease':
      newState = { counter: state.counter - 1 };
      break;
    default:
      throw new Error(`unhandled type of ${action.type} in Reducer`);
  }
  return newState; // by default if no action matched
}
```

---

### Action generator functions

instead of dispatching with the action each time we want to use that action, we can just create an action-generation-function that takes a payload as an argument and dispatches the wanted action

```js
const increaseState = payload => {
  dispatch({ type: 'increase', payload });
};
```

---

### Not recommended ways of using reducer function

The reducer function should only care about updating the state, It shouldn't worry about how to update the state

- usually, it makes more sense to stuff logic into the reducer and to keep the dispatches simple, this will lead to less duplicated code if you need to dispatch the same action in multiple places and avoid typos
- also part of the goal of reducers is to have a very specific set of ways that state can be changed like we can pass the final part of the state wa want to update as the **payload**, instead of just passing a value in the payload:

  - passing just a value (not the best approach):

    ![reducer function](./img/reducer-1.png)

  - passing the final part of the state wa want to update as the **payload** (recommended):
    ![reducer function](./img/reducer-2.png)

---

### reducer function with Immer

**Immer:** (German for: always) is a tiny package that allows you to work with immutable state in a more convenient way.

![immer](./img/immer.png)

- It's not always used in real life

---

## Context API

Context provides a way to pass data through the component tree without having to pass props down manually at every level

- `context` is primarily used when some data needs to be accessible by many components at different nesting levels.
  - > Make sure to apply it sparingly because **it makes component reuse more difficult**
- **Notes:**
  - context is not a replacement for Props
  - context is not a replacement for Redux (Redux is all about organization of data)

### Prop drilling

`Prop drilling` is basically a situation when the same data is being sent at almost every level due to requirements in the final level.

![Prop drilling](./img/drilling.png)

---

### Solution for Prop drilling: (context)

Context provides a way to pass data through the component tree without having to pass `props` down manually at every level. and most of the component passing the props don't need the props-data and they just act as **"Traffic Components"**

- without context

  ![context](./img/context.PNG)

- with context

  ![context](./img/with-context.PNG)

- React Context is a way to manage state globally.
  - it stores data in a external object so that it can be accessed globally.
- Context is designed to share data that can be considered `global` for a tree of React components, such as the current authenticated user, theme, or preferred language.
- It's sometimes used instead of `Redux` by a lot of users

---

### context setup

1. **Create the context**
   - when creating a `context`, we will have access to 2 components: `context.provider` & `context.consumer` functions
     ![context](./img/context-1.png)
2. **Specify (Provide) the data that will be shared**
   ![context](./img/context-2.png)
   ![context](./img/context-3.png)
3. **Consume the data**
   ![context](./img/context-4.png)
4. **Changing context data**

   - for this we need to make the `value` passed to the contextProvider is a piece of state, so that when changing it, it would result a **re-render** in all components that are using(consuming) the context
     ![context](./img/context-5.png)
   - to be able to pass the state-object in the `value`, we need to create another high-level provider that will wrap our provider
     ![context](./img/context-6.png)

     - then use the **provider** wrapper for the `<App/>`
       - The provider is used to tell which component can access the context
         ![context](./img/context-7.png)

---

### `useContext` Hook

- In order to use the Context in a child component, we need to access it using the useContext Hook.

```js
import { useState, createContext, useContext } from 'react';

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

- we'll use the `Context Provider` to wrap the tree of components that need the state Context.
  - `Context Provider` Wrap child components in the Context Provider and supply the state value.
- we'll use the `Context Consumer` to get values from the state Context.
- `without context` (Passing "props" through nested components:)

  ```js
  import { useState } from 'react';
  import ReactDOM from 'react-dom';

  function Component1() {
    const [user, setUser] = useState('Jesse Hall');

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
  import { useState, createContext } from 'react';
  import ReactDOM from 'react-dom';

  const UserContext = createContext(); // create context wrapper component

  function Component1() {
    const [user, setUser] = useState('Jesse Hall');

    return (
      // in the provider the attribute must be named "value" which is the data passed by the context (shared state)
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </UserContext.Provider>
      // Now, all components in this tree will have access to the user Context.
    );
  }
  ```

---

### Context Limitations

- shouldn't be used to replace all components-communications and **Props**
- Complex Setup
  ![alt](./img/contextDisadvantages2.PNG)
- can lead to deeply-nested jsx code and huge context-provider components
  ![alt](./img/contextDisadvantages.PNG)
- Performance
- context is not optimized for high-frequency state changes
  - As The way that context works, is that whenever is value changes (something in that value changes), It's going to pass down new data causing a re-render in whatever components are consuming that context.
  - This makes us have unnecessary re-renders!

---

## Hooks Rules

![rules](./img/hooks.png)
![rules](./img/rules.PNG)

- ✅ Call Hooks from React function components.
- ✅ Call Hooks from custom Hooks
- ✅ Call Hooks in a component that its name is uppercase
- ❌ Don't call hooks conditionally

```js
// ❌ not calling hook directly in the component
if (condition) {
  useEffect(() => {}); // Don't call hooks conditionally
}

// ✅ calling hook directly in the component
useEffect(() => {
  if (condition) {
  }
});
```

---

## Custom Hooks

![custom hooks](./img/custom-hooks.png)

- When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook
  - they're reusable functions.
    ![custom hooks](./img/custom-hooks-1.png)
- Custom Hooks must start with "`use`" keyword. Example: `useFetch`

- Example:

  ```js
  // in useBreedList.js
  import { useState, useEffect } from 'react';

  const localCache = {};

  export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState('unloaded');

    useEffect(() => {
      if (!animal) {
        setBreedList([]);
      } else if (localCache[animal]) {
        setBreedList(localCache[animal]);
      } else {
        requestBreedList();
      }

      async function requestBreedList() {
        setBreedList([]);
        setStatus('loading');
        const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
        const json = await res.json();
        localCache[animal] = json.breeds || [];
        setBreedList(localCache[animal]);
        setStatus('loaded');
      }
    }, [animal]);

    return [breedList, status];
  }
  ```

---

### Custom hook for form input (`useInput`)

Oftentimes, you will create an application with some type of form in it. For example, if you integrate authentication in your application, users will have to fill in the form to sign in. You can get the value that the user inputs in the field with vanilla JavaScript and the `getElementById` method, but a simpler method with hooks can also be used. Let's see how to create a useInput hook to get the value of the inputs in our form!

```js
// useInput.js
import { useState } from 'react';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = event => {
    setValue(event.target.value);
  };

  // returned object-keys must be with these names to match the <input> element attributes "value", "onChange"
  return {
    value,
    onChange: handleChange // onChange event, which will be the handleChange function we just defined
  };

  // or return array like normal hook:
  return [value, handleChange];
};

// ---------------------------------------------------------

// Form.js
import useInput from './useInput';

const SignInForm = () => {
  const email = useInput('');
  const password = useInput('');

  const submitForm = event => {
    event.preventDefault();
    console.log('email', email.value);
    console.log('password', password.value);
  };

  return (
    <FormWrapper onSubmit={submitForm}>
      <Title>Sign in</Title>
      <Input placeholder='Email' {...email} />
      <Input placeholder='Password' type='password' {...password} />
      <Button type='submit'>Sign in</Button>
    </FormWrapper>
  );
};
export default Form;
```

---

### Custom hook for context

When consuming context in a component, Instead of importing both `useContext` and the context and pass it to `useContext`, we can just create a custom hook for a specific context:

```js
import { useContext } from 'react';
import BooksContext from '../context/books';

function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;

// -------------------------------------------------------------
// using it in a component:
// import useBooksContext
const { books } = useBooksContext();
```
