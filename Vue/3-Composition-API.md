## INDEX

- [INDEX](#index)
- [Composition API](#composition-api)
  - [Why use it ?](#why-use-it-)
  - [Differences](#differences)
- [Reactivity](#reactivity)
  - [ref](#ref)
  - [Computed](#computed)
- [LifeCycles Hooks](#lifecycles-hooks)
  - [reactive function](#reactive-function)
  - [toRef](#toref)
- [Mixins](#mixins)
- [props](#props)
  - [Using destructed props](#using-destructed-props)
- [Context](#context)
- [Router](#router)

---

## Composition API

It's an alternative syntax for writing components

![options api](./img/options%20api.PNG)
![composition api](./img/composition%20api.PNG)
![options api](./img/composition%20api2.PNG)

- new syntax for the `setup`
  ![composition api](./img/options%20api2.png)

---

### Why use it ?

- Better **Typescript** support
  - as it's made and written in **Typescript**
- Better Organization

  - related code(data+methods) are close to each other

  ![oragnization](./img/organization.PNG)

- Better Re-Usability
  ![mixins](./img/mixins.PNG)

---

### Differences

- Here, we don't use **this** keyword
- must return an object with the data/methods to use in the `<template></template>`

---

## Reactivity

It's the process of **updating the template** whenever a change in the data occurs.

> It's the equivalent of **computed & reactive-data** in options-API

### ref

- **Reactive References**: are variables Vue should keep track of.

  - they are created by **ref()**

- why use **ref**?
  - to make the properties become **reactive**
  - you can access the value of the property using `.value`

```vue
<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0); // give it the initial value = 0

    // expose to template and other options API hooks
    return {
      count,
    };
  },

  mounted() {
    console.log(this.count); // 0
  },
};
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```

---

### Computed

- It's reactive-ready function from **Vue**
  - The function inside it -> returns a **reactive object**
- it's **read-only** (can't assign values to properties inside of it)

---

## LifeCycles Hooks

![lifecycle](./img/lifecycle3.PNG)
![lifecycle](./img/lifecycle4.PNG)

---

### reactive function

Returns a reactive proxy of the **object** and not **Primitive values** like **ref**.

- here we use it with object-properties to be able to access the object's properties (nested properties)
- now we don't have to use the `value` property as it help us from going so deep into the object to get values from it
- here we can't use `spread operator {...}` or `destructuring` as **it will make us lose reactivity**

```js
const user = reactive({
  name: 'John',
  age: 20,
});

const title = computed(() => `${user.name} with age of ${user.age}`);

// this won't work!
const { name, age } = user;
const title = computed(() => `${name} with age of ${age}`);
```

---

### toRef

Can be used to create a ref for a property on a source reactive object. The created ref is synced with its source property: mutating the source property will update the ref, and vice-versa.

```js
const state = reactive({
  foo: 1,
  bar: 2,
});

const fooRef = toRef(state, 'foo'); // creating connection to  the "foo" property in the "state" object

// mutating the ref updates the original
fooRef.value++;
console.log(state.foo); // 2

// mutating the original also updates the ref
state.foo++;
console.log(fooRef.value); // 3
```

> if the object has a lot of properties that you want them to be reactive -> use [toRefs()](https://vuejs.org/api/reactivity-utilities.html#torefs)

---

## Mixins

Mixins are a flexible **way to distribute reusable functionalities** for Vue components.

- If there's a clash of names between data in mixins or data in the component -> **the data in component has the priority**
  - that's why mixins work better with composition-api

```js
// define a mixin object
var myMixin = {
  created: function () {
    this.hello();
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!');
    },
  },
};

// ----------------------------------------------------- //

// define a component that uses this mixin
var Component = Vue.extend({
  mixins: [myMixin],
});
// Or
new Vue({
  mixins: [mixin], // must be array
  data: function () {},
});

var component = new Component(); // => "hello from mixin!"
```

---

## props

The first argument in the setup function is the **props argument**. Just as you would expect in a standard component, props inside of a setup function **are reactive** and will be updated when new props are passed in.

```js
export default {
  props: {
    title: String,
  },
  setup(props) {
    console.log(props.title);
  },
};
```

### Using destructed props

If you destructure the props object, the destructured variables **will lose reactivity**.

If you really need to destructure the props, or need to pass a prop into an external function while retaining reactivity, you can do so with the **toRefs()** and **toRef()** utility APIs

```js
import { toRefs, toRef } from 'vue';

export default {
  setup(props) {
    // turn `props` into an object of refs, then destructure
    const { title } = toRefs(props);
    // `title` is a ref that tracks `props.title`
    console.log(title.value);

    // OR, turn a single property on `props` into a ref
    const title = toRef(props, 'title');
  },
};
```

---

## Context

he second argument passed to the setup function is a Setup **Context object**. The context object exposes other values that may be useful inside setup -> It's like **this**

```js
export default {
  setup(props, context) {
    // Attributes (Non-reactive object, equivalent to $attrs)
    console.log(context.attrs);

    // Slots (Non-reactive object, equivalent to $slots)
    console.log(context.slots);

    // Emit events (Function, equivalent to $emit)
    console.log(context.emit);

    // Expose public properties (Function)
    console.log(context.expose);
  },
};
```

The context object is **not reactive** and can be safely destructured:

```js
export default {
  setup(props, { attrs, slots, emit, expose }) {
    ...
  }
}
```

---

## Router

Because we don't have access to **this** inside of setup, we cannot directly access `this.$router or this.$route` anymore. Instead we use the **useRouter** function:

```js
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    function pushWithQuery(query) {
      router.push({
        name: 'search',
        query: {
          ...route.query,
        },
      });
    }
  },
};
```
