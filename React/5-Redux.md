# INDEX

- [INDEX](#index)
  - [Types of state](#types-of-state)
  - [Redux](#redux)
    - [Core Concept](#core-concept)
    - [(`useContext` + `useReducer`) vs Redux](#usecontext--usereducer-vs-redux)
    - [Store](#store)
      - [Store initial state (Slices)](#store-initial-state-slices)
      - [Action Flow](#action-flow)
      - [Action Creators](#action-creators)
  - [Installation](#installation)
  - [Setup \& File Architecture](#setup--file-architecture)
    - [Setup: Connecting React to Redux](#setup-connecting-react-to-redux)
    - [Setup: Changing state](#setup-changing-state)
    - [Setup: Accessing state](#setup-accessing-state)
    - [Folder structure](#folder-structure)
    - [store.js](#storejs)
    - [root-reducer.js](#root-reducerjs)
    - [user.types.js](#usertypesjs)
    - [user.selector.js](#userselectorjs)
    - [user.reducer.js](#userreducerjs)
    - [user.action.js](#useractionjs)
  - [Redux Hooks](#redux-hooks)
    - [useDispatch()](#usedispatch)
  - [Reselect Library](#reselect-library)
  - [Redux-persist](#redux-persist)
  - [Redux Async Data Flow (Side Effects)](#redux-async-data-flow-side-effects)
    - [Redux Middleware and Side Effects](#redux-middleware-and-side-effects)
      - [Examples of MiddleWares](#examples-of-middlewares)
    - [Redux Thunk Middleware](#redux-thunk-middleware)
      - [Creating a reusable Thunk Hook](#creating-a-reusable-thunk-hook)
  - [Redux Saga Middleware](#redux-saga-middleware)
    - [Saga vs Thunk](#saga-vs-thunk)
  - [Redux in class components](#redux-in-class-components)
  - [Redux in Typescript](#redux-in-typescript)

---

## Types of state

![alt](./img/states-com.PNG)

---

## Redux

It's a **state management system** for cross-component or app-wide state

Redux is really:

- A single store containing "global" state
- Dispatching plain action-objects to the store when something happens in the app
- Pure reducer functions looking at those actions and **returning immutably updated state**

### Core Concept

![alt](./img/redux.PNG)

- one central data(state) store
- components subscribe to the store-data(state)
- components **Never directly manipulate** the store-data, instead we use `Reducer-function`
- there're **multiple** `reducer` functions to manage the state
- If we want to change state in any way, We must call `dispatch`
  ![redux](./img/redux-2.png)
  - this is a good thing as this makes us have a **central point of changing state** and it's easy to understand why state is changing from the `action` object
  - this is also not so great thing as we have to write a lot of boilerplate code just to make sure the reducer knows what to do!
  - To fix this we have 2 choices:
    ![redux](./img/redux-1.png)

---

### (`useContext` + `useReducer`) vs Redux

![alt](./img/reduxworkflow.png)

- Redux is very similar to `useReducer`, but there's some differences:

  - `useReducer`
    ![alt](./img/redux-vs-reducers.png)
    ![alt](./img/redux-vs-reducers-3.png)
  - Redux:
    - here, we create a **separate object** called the redux-store which is separate from our React Application and outside of the hierarchy of our components
      ![alt](./img/redux-vs-reducers-1.png)
      ![alt](./img/redux-vs-reducers-2.png)
      ![alt](./img/redux-vs-reducers-4.png)
      ![alt](./img/redux-vs-reducers-5.png)

- `useContext` vs `Redux`

  - **context**
    ![Context](./img/redux3.PNG)
  - **Redux**
    ![Redux](./img/redux2.PNG)
    - Here, the Redux structure depends on **singularity (single store and singular `dispatch`)** (reducer function for each state item), they are still functions that return objects that carry the state of the reducer
    - these reducers are combined into one reducer (root reducer) and from this root-reducer we will pass the state into all the components (passing the entire state object and not just the state for each reducer)
    - similarly the components can dispatch actions to any reducer that matches the type **as we have only one `dispatch` function**, and even the same action can update all reducers

- usually, you don't use `useContext` with `Redux` at the same time because data can be stored in redux and gets confusing
- some people try to replace redux with `useReducer`, but they will need a lot of plugins to get similar result of redux

> **Note**: `Redux` & `useReducer` both use **Context API** to give different components access to the store within the application

---

### Store

![store](./img/store-1.png)
![store](./img/store-2.png)

#### Store initial state (Slices)

- **Slices:** Determining the shape (top level keys) of the store state property
  ![store](./img/store-3.png)
- define some initial state
  ![store](./img/store-4.png)
- Automatically create **reducers** and **action-types** instead of writing them manually with action-constants & `switch` statement in the reducer function
  ![store](./img/store-5.png)
- inside the `slices` there's a `reducers` property which combines `mini reducer functions` into a big reducer function
  ![store](./img/store-6.png)
  ![store](./img/store-7.png)

  - we can view each of these functions here as being like an individual `case` statement inside of a larger `switch` statement

- it creates a set of **action creator** functions

  - the `action` type is created from the (slice name + name of reducer function)

    ```js
    const songsSlice = createSlice({
      name: 'song',
      initialState: [],
      reducers: {
        // "song" + "/" + "addSong" = "song/addSong" --> action type
        addSong(state, action) {
          // reducer function code
        }
      }
    });
    ```

  - for simplifying this and not to remember the types, Redux provides us with [Action Creators](#action-creators)

- **Note:** in each small reducer function, `state` argument is not the big state object in the store, instead It's the piece of state managed by this reducer
  ![store](./img/store-8.png)
  ![store](./img/store-9.png)
  ![store](./img/store-10.png)
- here we mutate state because:
  - Redux Toolkit's `createReducer` and `createSlice` automatically use `Immer` internally to let you write simpler immutable update logic using "mutating" syntax. This helps simplify most reducer implementations.

---

#### Action Flow

![action flow](./img/action-flow-1.png)
![action flow](./img/action-flow-2.png)

- This can make us convince the "Combined Songs reducer" to also care about actions from "Combined Movies reducer" **(Watch for other actions)**

So, to have common Action we have some options:
![action flow](./img/action-flow-3.png)

- **Option 3:** to watch for actions outside of our current combined-reducer function:

  ```js
  reducers: {
    // ...
  },
  extraReducers(builder){
    builder.addCase("movie/reset", (state, action) =>{
      return [];
    })
  }
  ```

- **Option 4:** Create a standalone action and get both slices to watch for it (this won't make us depend on other actions from other reducers):
  ![action flow](./img/action-flow-4.png)

  ```js
  import {createAction} from "@reduxjs/toolkit"
  const reset = createAction('app/reset')

  reducers: {
    // ...
  },
  extraReducers(builder){
    builder.addCase(reset, (state, action) =>{
      return [];
    })
  }
  ```

---

#### Action Creators

![action creator](./img/redux-action-creator-1.png)

- we can access action creator from: `yourSlice.actions.<reducerFunctionName>`

```js
// ex:
store.dispatch(songsSlice.actions.addSongs('some song'));
// this dispatches action object like this: {type: "song/addSong", payload: "some song"}
```

---

## Installation

```sh
# Redux Core
npm install redux

# Complementary Packages
npm install react-redux
npm install --save-dev @redux-devtools/core
```

> Redux can work with any javascript project not just React, so we use **React-Redux** library lets your React components talk to a Redux store.

---

## Setup & File Architecture

### Setup: Connecting React to Redux

In `index.js`:

- we use `provider component` from `react-redux` & give it a `store prop` that can be used in the entire application

![redux provider](./img/redux-provider.png)
![redux provider](./img/redux-provider-1.png)

---

### Setup: Changing state

Steps:

1. Add a reducer to one of your slices that changes state in some practical way

   ```js
   // in slice
   initialState: [],
   reducers: {
     addSong(state, action){
       state.push(action.payload)
     }
   }
   ```

   - **Note:** If you want to mutate the state by resetting it (making it empty), You have to use the old state because of `Immer` and in this case we return the value we want the state to be:

     ```js
     reducers: {
       // ...
       resetSongs(state, action){
         state = []; // Won't Work
         // instead we do:
         return []; // Correct
       }
     }
     ```

2. Export the (action creator) that the slice automatically creates

   ```js
   // in store/index.js file
   // ...
   export { state };
   export const { addSong } = songsSlice.actions;
   ```

3. Find the component that you want to `dispatch` from, and import the (action creator) function and `useDispatch` from `react-redux` (Call the `useDispatch` hook to get access to)

   ```js
   const dispatch = useDispatch();
   // ...
   const handleSongAdd = song => {
     // const action = addSong(song);
     // dispatch(action);
     // or
     dispatch(addSong(song));
   };
   ```

4. When the user does something, Call the action-creator to get an `action` and then `dispatch` it

---

### Setup: Accessing state

Steps:

1. import `useSelector` hook from `react-redux` in the component that needs to access some state
2. call the hook, passing in a selector function
3. use the state! Anytime state changes, the component will automatically re-render

```js
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

const currentUser = useSelector(selectCurrentUser);
const counter = useSelector(state => state.counter);
```

---

### Folder structure

When using Redux, we have 2 options: **organize by function** or **organize by feature**

1. **organize by function**
   ![redux structure](./img/redux-structure-1.png)
   ![redux structure](./img/redux-structure-4.png)
2. **organize by feature**
   ![redux structure](./img/redux-structure-2.png)

**Which to use?**
![redux structure](./img/redux-structure-3.png)
![redux structure](./img/redux-structure-5.png)

> We don't use the "feature approach" frequently with **Redux-toolkit** because of **"Circular Imports"**

---

### store.js

- in order to use middlewares, we need to generate a compose using `compose` function from redux
  - Middleware is passed as a third argument to the `createStore` function

```js
import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// they run before actions hit the reducers
const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean); // run the logger-middleware only in dev-mode

// Generate composed enhancers that apply middlewares
const composedEnhancers = compose(applyMiddleware(...middleWares));

// create a redux-store that holds the complete state-tree of the app
export const store = createStore(rootReducer, undefined, composedEnhancers);
```

---

### root-reducer.js

```js
import { combineReducers } from 'redux'; // to create final reducer that combine multiple reducer

import { userReducer } from './user/user.reducer';

// here we pass an object that has key of reducer's slice Name - value of function itself
export const rootReducer = combineReducers({
  user: userReducer
});
```

---

### user.types.js

```js
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
};
```

---

### user.selector.js

- `useSelector()`: it takes a `function` that selects the part that we want from the state-object
  - it runs every time that the state object has updated in the root reducer, but it only re-renders the (component it's in) if the return-value of the selector-function is different
  - **Note:** in order to prevent this re-run of `useSelector`, we can use [Reselect library](#reselect-library)

```js
export const selectCurrentUser = state => state.user.curr;
```

this exported function will be called by the `useSelector() Hook`

---

### user.reducer.js

**Notes**:

- in the reducer, you should **never mutate the previous state**, **You must always return new state-object** as it's a **Reference-Type**, so do it for memory-management and so that you don't get unwanted side-effects
- You have to return something and ideally, it should be the unchanged state if there's nothing you need to do to it.
- Prefer flat objects, so that you won't accidentally do a shallow clone of the previous state

```js
import { USER_ACTION_TYPES } from './user.types';

// it's better to declare the initial state here instead of in createStore function so that this initial-state is only for this reducer-function
export const USER_INITIAL_STATE = {
  currentUser: null
};

// here we need to manually-provide the state with initial state as it doesn't have access to the useReduce-Hook & in the beginning the (previous state is undefined)
export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload }; // return the object but modify the currentUser
    default:
      return state; // here we don't return an error, instead -> we return the (current state-object) as this means that the action is not for this particular reducer
    // the object is the same in memory, so it won't result reRendering
  }
};
```

---

### user.action.js

```js
import { createAction } from '../../utils/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

// this function creates an action that will be dispatched from root-reducer
export const setCurrentUser = user => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
```

---

## Redux Hooks

### useDispatch()

It's a Hook that you pass a **selector function** into it which selects the state that you want from the global state-object in `Redux`

- All it does is that it uses the **context** system to reach up to the **provider** at the very top of our component hierarchy and get access to the `dispatch` function from the Redux store
- It dispatches generated actions to every reducer-function in `root-reducer`

```js
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

dispatch({ type: something, payload: {} });
```

> **Note:** when calling the `dispatch` function inside of `useEffect`, we know that the `dispatch` function won't change, so we can put in in the useEffect's dependency array

---

## Reselect Library

It's library for creating **memorized** selector-functions. Commonly used with Redux

> **Memorization:** is the process in which you cache the previous value of something so that if the input has not changed, then you just return back the same output (This works when you have a pure-function)

- Reselect exports a `createSelector API`, which generates memoized selector functions. createSelector accepts one or more "input" selectors, which extract values from arguments, and an "output" selector that receives the extracted values and should return a derived value.
- If the generated selector is called multiple times, the output will only be recalculated when the extracted values have changed.

it's like `pure function` -> as long as the input hasn't change, the output will be the same

```sh
npm i reselect
```

```js
// in categories.selector.js

import { createSelector } from 'reselect';

// creating a memoized (CASHED) version of selectCategories (This is what will run if nothing changed)
const selectCategoryReducer = state => state.categories;

// creating dependencies for the changed values
export const selectCategories = createSelector(
  [selectCategoryReducer],
  categoriesSlice => categoriesSlice.categories
);

// By this, we tell Redux: "As long as "selectCategories" doesn't change, Don't re-run this function"
export const selectCategoriesMap = createSelector([selectCategories], categories =>
  categories.reduce((acc, category) => {
    // acc is for 'accumulator'
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);
```

---

## Redux-persist

It allows us to persist the reducer function value

[Guide](https://dev.to/dawnind/persist-redux-state-with-redux-persist-3k0d)

When we refresh page in a web-app, the state always resets back to the initial values which in not a good thing when you try to build some large web-app like e-commerce.

We can manually do the state persistent using the native JavaScript `localStorage.setItem()` method but honestly we will have to write everything from start and we have to maintain the structure of the state.

- `redux-persist` helps us to persist the state after page refresh.

- Every app needs to decide how many levels of state they want to "merge". The default is 1 level.

```sh
npm i redux-persist
```

```js
// Store.js

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
```

- wrap your root component with PersistGate. This delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux.

  ```js
  import { PersistGate } from 'redux-persist/integration/react';

  // ... normal setup, create store and persistor, import components etc.

  const App = () => {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootComponent />
        </PersistGate>
      </Provider>
    );
  };
  ```

---

## Redux Async Data Flow (Side Effects)

![redux async](./img/async-redux-1.png)
![redux async](./img/async-redux-2.png)

Options for data fetching in Redux Toolkit:

1. Async Thunk Functions
2. Redux Toolkit Query

### Redux Middleware and Side Effects

![sideEffects](./img/sideEffects2.PNG)

By itself, a `Redux store` doesn't know anything about async logic. **It only knows how to synchronously dispatch actions**, update the state by calling the root reducer function, and notify the UI that something has changed. **Any asynchronous code has to happen outside the reducer-function**.

- A "`side effect`" is any change to state or behavior that can be seen outside of returning a value from a function.
- Common side effects:

  - Logging a value to the console
  - Saving a file
  - Setting an async timer
  - Making an AJAX HTTP request
  - Modifying some state that exists outside of a function, or mutating arguments to a function
  - Generating random numbers or unique random IDs (such as `Math.random()` or `Date.now()`)

- we could actually pass something that isn't a plain action object to dispatch, as long as a middleware intercepts that value and doesn't let it reach the reducers.

![sideEffects](./img/sideEffects3.PNG)

#### Examples of MiddleWares

```js
import { client } from '../api/client';

const fetchTodosMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/fetchTodos') {
    // Make an API call to fetch todos from the server
    client.get('todos').then(todos => {
      // Dispatch an action with the todos we received
      storeAPI.dispatch({ type: 'todos/todosLoaded', payload: todos });
    });
  }

  // The next step: going to the reducer-function
  return next(action);
};

//  writing a middleware that let us pass a function to dispatch, instead of an action object
const asyncFunctionMiddleware = storeAPI => next => action => {
  // If the "action" is actually a function instead...
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
    return action(storeAPI.dispatch, storeAPI.getState);
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action);
};
```

---

### Redux Thunk Middleware

It's a middleware that allows us to receive actions that are function

- Instead of dispatching an action in the typical format of an object with a `type` and a `payload`, We pass a function that goes to the thunk and Redux takes this function and return a `dispatch` from it, so that we can dispatch new actions from the `thunk`
- The dispatched action from the thunk might hit another thunk or continue on into the Redux store (reducers)

> The key benefit here, is that now in Redux, we can abstract out some of our logic into the thunk, like **Async operations**

![Redux Async Data Flow](./img/Redux%20Async%20Data%20Flow.gif)

Redux already has "**async function** middleware", called the Redux "Thunk" middleware.

![redux async](./img/async-redux-3.png)

- It allows the application to fire actions, and these actions don't have to flow in the redux-default-data-flow **in a synchronous way** but instead it (read from the store or dispatch actions within the middleware) **in an asynchronous way**
- it receives `async-actions` in the form of `functions`
  - Redux takes the function and passes into it a `dispatch` as a parameter
  - now we can dispatch new actions in this Thunk, so that we can abstract some logic in the Thunk and so that Actions can be dispatched outside the component

The thunk middleware allows us to write functions that get dispatch and getState as arguments. The thunk functions can have any async logic we want inside, and that logic can dispatch actions and read the store state as needed.
![thunk](./img/thunk.PNG)

- All Thunks really do is: **allow actions to be passed as functions**
- **Creating an Async Thunk Steps:**

  1. Create a new file for your thunk, Name it after the purpose of the request, ex `fetchUsers.js`
  2. Create the thunk. Give it a base `type` that describes the purpose of the request
  3. In the thunk, Make the request, return the data that you want to use in the reducer
  4. In the slice, Add `extraReducers`, watching for the action-types made by the thunk
  5. Export the thunk from `store/index.js` file
  6. When a user does something, dispatch the `thunk` function to run it

```js
// in store/thunks/fetchUsers.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('/users');
});
```

```js
// in src/store.js
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer, composedEnhancer);
export default store;
```

```js
// in categories.action.js
import CATEGORIES_ACTION_TYPES from './categories.types';
import { createAction } from '../../utils/reducer.utils';
import { getCategoriesAndDocuments } from '../../utils/firebase.utils';

// -------------------THE ASYNC ACTIONS------------------- //
export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = categoriesArray =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailure = error =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// -------------------THE THUNK ACTION------------------- //
// it's a function that returns a function that gets a dispatch as an argument
export const fetchCategoriesStartAsync = () => {
  return async dispatch => {
    dispatch(fetchCategoriesStart()); // change loading state

    // The Async logic
    try {
      const categoriesArray = await getCategoriesAndDocuments('categories'); // doing the logic here instead of in the component
      dispatch(fetchCategoriesSuccess(categoriesArray)); // after finishing the fetching logic
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  };
};
```

---

#### Creating a reusable Thunk Hook

This allows us to dispatch action without using useDispatch each time + it handles specific repeated case like handling loading/error states for each request(action)

```js
// in fetchUers.js
function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(() => {
    setIsLoaing(true);
    dispatch(thunk())
      .unwrap()
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, [dispatch, thunk]);

  return [runThunk, isLoading, error];
}

// ------------------------------------------
// Using it in a component
const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
```

---

## Redux Saga Middleware

It's an intuitive Redux **side-effect manager**.

- like when a dispatch with type `startFetching`, we do a side-effect of fetching-logic
  - It's like event listener and callback function

In most middlewares, actions hit `middleware` before they hit the `reducer`, **But** Saga is different -> the actions will hit the reducer first before moving to the saga **(after the reducers have updated**)

- when actions hit the saga, it will respond to these actions and perform (business-logic, async-requests,..)
  ![saga](./img/saga.PNG)

- **NOTE**: Actions fired by sagas can trigger another sagas:

  - Actions triggered by sagas can also flow through the saga again

- Saga uses [Generator Functions](https://javascript.info/generators)
  ![generators](./img/generators.png)
  - instead of `await`, use `yield`
  - instead of `dispatch`, use `put`

Look at the **Example Usage** [here](https://redux-saga.js.org/docs/introduction/GettingStarted)

---

### Saga vs Thunk

![thunk_vs_saga](./img/thunk_vs_saga2.PNG)
![thunk_vs_saga](./img/thunk_vs_saga.png)

---

## Redux in class components

- `connect()` --> [Code](https://codesandbox.io/s/r1kqd?file=/src/App.js:591-600)

---

## Redux in Typescript

[Here](https://github.com/piotrwitek/react-redux-typescript-guide)
