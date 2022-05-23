## INDEX

- [INDEX](#index)
- [Installation](#installation)
- [Redux-toolkit](#redux-toolkit)
  - [`createSlice()`](#createslice)

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

`Redux Toolkit` eliminates the "boilerplate" from hand-written Redux logic, prevents common mistakes, and provides APIs that simplify standard Redux tasks.

`Redux Toolkit` starts with **two** key APIs that simplify the most common things you do in every Redux app:

- `configureStore` sets up a well-configured Redux store with a single function call, including combining reducers, adding the thunk middleware, and setting up the Redux DevTools integration.

  - It also is easier to configure than `createStore`, because it takes **named options parameters**.

- `createSlice` lets you write reducers that use the `Immer library` to enable writing immutable updates using "**mutating**" JS syntax, with no spreads needed.
  - It also automatically generates action creator functions for each reducer, and generates action type strings internally based on your reducer's names.
  - Finally, it works great with TypeScript.

---

### `createSlice()`

gets a slice of the global state

- Here we can mutate the state as redux-toolkit behind the scene makes a clone of the state

---
