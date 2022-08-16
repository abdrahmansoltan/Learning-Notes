## INDEX

- [INDEX](#index)
- [Installation](#installation)
- [Redux-toolkit](#redux-toolkit)
  - [Why ?](#why-)
- [`createSlice()`](#createslice)
- [`createActions()`](#createactions)

---

## Installation

```sh
npm install @reduxjs/toolkit

# Complementary Packages
npm install react-redux
npm install --save-dev @redux-devtools/core
```

---

## Redux-toolkit

It is an official recommended approach for writing Redux logic.

- also known as **RTK**

### Why ?

[more](https://redux.js.org/introduction/why-rtk-is-redux-today)

- `Redux Toolkit` eliminates the "boilerplate" from hand-written Redux logic, prevents common mistakes, and provides APIs that simplify standard Redux tasks.
- You don't need to do manual **thunk** setup as redux-toolkit comes with out of the box `createAsyncThunk` which enables you to perform async operations in very free way.
- `Redux Toolkit` starts with **two** key APIs that simplify the most common things you do in every Redux app:

- `configureStore` sets up a well-configured Redux store with a single function call, including combining reducers, adding the thunk middleware, and setting up the Redux DevTools integration.

- It also is easier to configure than `createStore`, because it takes **named options parameters**.

- `createSlice` lets you write reducers that use the `Immer library` to enable writing immutable updates using "**mutating**" JS syntax, with no spreads needed.
  - It also automatically generates action creator functions for each reducer, and generates action type strings internally based on your reducer's names.
  - Finally, it works great with TypeScript.

> The only case where you may want you to stick to redux is when you're using **class-based components**, where Redux Toolkit does have some boilerplate (like Redux) and you may miss out decent support.
> However with functional components, Redux toolkit is like **Redux on steroids**.
>
> **Mutability** might be considered as advantage or disadvantage, but if you're not too used to writing with spread operators, Do straight assignments and let redux toolkit take care of mutability under the hoods.

---

## `createSlice()`

gets a slice of the global state

- Here we can mutate the state as redux-toolkit behind the scene makes a clone of the state

---

## `createActions()`

![actions](./img/actions.PNG)
