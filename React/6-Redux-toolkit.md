# INDEX

- [INDEX](#index)
  - [Installation](#installation)
  - [Redux-toolkit](#redux-toolkit)
    - [Why ?](#why-)
  - [`createSlice()`](#createslice)
  - [`createActions()`](#createactions)
  - [Redux Toolkit Query](#redux-toolkit-query)
    - [Redux Toolkit Query Steps](#redux-toolkit-query-steps)

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

---

## Redux Toolkit Query

It's a module in Redux-toolkit used to create an **API** which is an (client side code in our app to provide an interface to go and fetch data )

- So, when using the `createApi()` method, we don't mean that we're creating a backend server. It's just to create code that will fetch data in a specific way
  ![query](./img/redux-toolkit-query-1.png)
  ![query](./img/redux-toolkit-query-2.png)
  ![query](./img/redux-toolkit-query-7.png)
- Redux Toolkit Query handles tons of corner cases and almost all aspects of making requests, so It's a heavy duty and little hard to understand as it produce:
  - Fine-grained loading state
  - Fine-grained error state
  - Data caching and refetching
- **`reducerPath`:**
  ![query](./img/redux-toolkit-query-3.png)
  - It's a property on the big state object where all of the API state should be maintained
  - It's a string that specify the key-name that we want to store all the state related to the API
- **`fetchBaseQuery`:**
  - It's a function to make a pre-configured version of `fetch`
- **`endpoints`:**
  ![query](./img/redux-toolkit-query-4.png)
  ![query](./img/redux-toolkit-query-5.png)
  ![query](./img/redux-toolkit-query-6.png)

---

### Redux Toolkit Query Steps

1. Identify a group of related requests that your app needs to make
2. Make a new file what will create the API
3. The API needs to store a ton of state related to data, request, status, errors, So You need to add a `reducerPath`
4. The API needs to know how and where to send requests. Add a `baseQuery`
5. Add `endpoints`, one for each kind of request you want to make.
   - Requests that read data -> "queries"
   - Requests that write data -> "mutations"
6. Export all of the automatically generated hooks
7. Connect the API to the store. (Reducers, middleware, and listeners)
8. Export the hooks from `store/index.js` file
9. Use the generated hooks in a component
