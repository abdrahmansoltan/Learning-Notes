## INDEX

- [INDEX](#index)
- [Vuex](#vuex)
  - [State / getters](#state--getters)
  - [Getting Vuex State into Vue Components](#getting-vuex-state-into-vue-components)
    - [mapState](#mapstate)

---

## Vuex

Vuex is a **state management pattern + library** for Vue.js applications. It serves as a centralized store for all the components in an application, with rules **ensuring that the state can only be mutated in a predictable fashion**.
![vuex](./img/vuex.PNG)

![vuex](./img/vuex1.PNG)
![vuex](./img/vuex2.PNG)

- Application Structure

  ```sh
  ├── index.html
  ├── main.js
  ├── api
  │   └── ... # abstractions for making API requests
  ├── components
  │   ├── App.vue
  │   └── ...
  └── store
      ├── index.js          # where we assemble modules and export the store
      ├── actions.js        # root actions
      ├── mutations.js      # root mutations
      └── modules
          ├── cart.js       # cart module
          └── products.js   # products module
  ```

### State / getters

```js
const store = createStore({
  state: {
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done);
    },
  },
});
```

---

### Getting Vuex State into Vue Components

```js
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
```

#### mapState

When a component needs to make use of multiple store state properties or getters, declaring all these computed properties can get repetitive. To deal with this we can make use of the `mapState` helper which **generates computed getter functions for us**, saving us some keystrokes:

```js
import { mapState } from "vuex";

export default {
  // ...
  computed: mapState({
    // arrow functions can make the code very succinct!
    count: (state) => state.count,
  }),
};
```

- `mapState` returns an **object**. How do we use it in combination with other local computed properties? Normally, we'd have to use a utility to merge multiple objects into one so that we can pass the final object to computed. However with the object spread operator, we can greatly simplify the syntax:

  ```js
  computed: {
    localComputed () { /* ... */ },
    // mix this into the outer object with the object spread operator
    ...mapState({
      // ...
    })
  }
  ```
