# INDEX

- [INDEX](#index)
  - [Vue](#vue)
    - [How it works?](#how-it-works)
      - [Reactivity and Proxies](#reactivity-and-proxies)
        - [Proxies Summary](#proxies-summary)
      - [Templates Syntax](#templates-syntax)
      - [Virtual DOM](#virtual-dom)
    - [Ways of Using Vue](#ways-of-using-vue)
  - [Instance LifeCycle](#instance-lifecycle)
    - [Lifecycle Hooks](#lifecycle-hooks)
      - [The Creation Hooks](#the-creation-hooks)
      - [The Mounting Hooks](#the-mounting-hooks)
      - [The Updating Hooks](#the-updating-hooks)
      - [The Destroying Hooks](#the-destroying-hooks)
    - [LifeCycle Notes](#lifecycle-notes)
  - [Data](#data)
    - [Interpolation](#interpolation)
    - [Directives](#directives)
      - [Binding data (`v-bind`)](#binding-data-v-bind)
    - [v-model (2 Way Binding)](#v-model-2-way-binding)
      - [2 way binding for elements in a child-component or custom element component](#2-way-binding-for-elements-in-a-child-component-or-custom-element-component)
      - [Modifiers](#modifiers)
      - [Custom Directives](#custom-directives)
    - [Refs](#refs)
      - [Accessing the Refs](#accessing-the-refs)
    - [ref vs v-model](#ref-vs-v-model)
  - [Methods](#methods)
    - [Event Handling (Listening to Events)](#event-handling-listening-to-events)
      - [Accessing Event Argument](#accessing-event-argument)
  - [Computed Properties](#computed-properties)
    - [Computed properties vs methods](#computed-properties-vs-methods)
    - [Filters (old and deprecated)](#filters-old-and-deprecated)
  - [Watchers](#watchers)
    - [Deep Watchers](#deep-watchers)
    - [Eager Watchers](#eager-watchers)
    - [`this.$watch()`](#thiswatch)
    - [Watcher Notes](#watcher-notes)
  - [Styles](#styles)
    - [Dynamic styling](#dynamic-styling)
    - [Scoped styling](#scoped-styling)
  - [Vue Transitions and Animations](#vue-transitions-and-animations)
    - [Vue Transition Classes](#vue-transition-classes)
    - [Nested Transitions and Explicit Transition Durations](#nested-transitions-and-explicit-transition-durations)
    - [TransitionGroup](#transitiongroup)
    - [Transition Performance Considerations](#transition-performance-considerations)
    - [Reusable Transitions](#reusable-transitions)
    - [Transition modes](#transition-modes)
    - [Animating with JavaScript Hooks](#animating-with-javascript-hooks)
  - [Conditional Rendering](#conditional-rendering)
    - [`v-show`](#v-show)
    - [Dynamic Components](#dynamic-components)
      - [`Keep-alive`](#keep-alive)
  - [Rendering Lists (looping)](#rendering-lists-looping)
    - [Maintaining State with `key`](#maintaining-state-with-key)
    - [`v-for` with `v-if`](#v-for-with-v-if)
    - [Array Mutation Methods](#array-mutation-methods)
  - [Components](#components)
    - [Single File Component (SFC)](#single-file-component-sfc)
    - [Component Registration (Global / Local)](#component-registration-global--local)
      - [Global Registration](#global-registration)
      - [Local Registration](#local-registration)
  - [Communicate between Components](#communicate-between-components)
    - [Props](#props)
      - [Mutating Object / Array Props](#mutating-object--array-props)
    - [Component Events (Event emitter)](#component-events-event-emitter)
      - [`model-value` event: using `v-model` with custom components](#model-value-event-using-v-model-with-custom-components)
    - [Provide / Inject](#provide--inject)
      - [Provide](#provide)
      - [Inject](#inject)
  - [Slots](#slots)
    - [named-slots](#named-slots)
      - [Dynamic Slot Names](#dynamic-slot-names)
    - [Scoped Slots (slots with props)](#scoped-slots-slots-with-props)
  - [Teleport Components](#teleport-components)
  - [Forms](#forms)
    - [Binding input values](#binding-input-values)
    - [Form Validation](#form-validation)
  - [Modes and Environment Variables](#modes-and-environment-variables)
    - [Modes](#modes)
    - [Environment Variables](#environment-variables)
  - [Performance](#performance)
    - [Loading data](#loading-data)
    - [Code Splitting - Lazy Loading](#code-splitting---lazy-loading)
      - [Webpack Chunks](#webpack-chunks)
  - [Progressive Web App PWA](#progressive-web-app-pwa)
  - [Plugins](#plugins)
    - [Installing a plugin](#installing-a-plugin)
    - [Plugins use cases](#plugins-use-cases)
  - [Notes](#notes)

---

## Vue

It's a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a **declarative and component-based programming model** that helps you efficiently develop user interfaces, be it simple or complex.

> **Framework**: is a third-party library that exposes utility-functionalities and a (set of rules) on how to build your Javascript application

- Comparison with other Frameworks:
  - Vue is neutral-Opinionated:
    - Vue has tools-ecosystem like for `routing`, `testing`, ... that are built by the Vue-team, but unlike `Angular`, Vue doesn't force you to use them even thought they're recommended
      ![vue-vs-other-frameworks](./img/vue-vs-other-frameworks.png)
- Advantages of Vue:
  - **clean** -> (separation of concerns)
  - **semantic** -> able to write semantic HTML
  - **declarative**
  - **easy to maintain**
  - **reactive** -> responding to changes in a state
- You should always create an app and specify where the app applies its logic, using `createApp()`:

  - Creates an application instance.

    ```js
    function createApp(rootComponent: Component, rootProps?: object): App
    ```

  - The first argument is the root component. The second optional argument is the props to be passed to the root component.

  ```html
  <script src="https://unpkg.com/vue@3"></script>

  <div id="app">{{ message }}</div>

  <script>
    const { createApp } = Vue;
    const app = createApp(); // instantiation using (construction function)

    app({
      data() {
        return {
          message: 'Hello Vue!'
        };
      }
    });

    // Mounts (inserts) the application instance in a container element (the document).
    app.mount('#app'); // we use ID-selector as every Vue app must be connected to one HTML element

    // we can also mount it to an actual DOM element
    app.mount(document.body.firstChild);
  </script>
  ```

More on the App configuration and methods, like `app.use()`, `app.config()`, `app.component()` -> here: [Application API](https://vuejs.org/api/application.html)

---

### How it works?

#### Reactivity and Proxies

- Javascript in default is not reactive
- Vue has a built-in mechanism to be aware when a `data-property` or a `variable` is changed, so that parts of the app that rely on that variable can be updated, and for that it uses **"Proxies"**
- It uses **Proxy** which uses `set` method to update properties
- > **Proxy**: a figure that can be used to represent the value of something in a calculation (usually by creating a **setter**)

  ```js
  const vm = vue.createApp({
    data() {
      return {
        firstName: 'John'
      };
    }
  });
  ```

  ![proxy](./img/proxy.png)

- **How proxy works?** -> it's for reactivity
  ![proxy](./img/proxy2.png)
  ![proxy](./img/proxy3.png)
  - It's done using (**track** all properties that are changing) and (**trigger** function that would update new things accordingly)

```js
const data = {
  message: 'Hello!'
};

// this object can set-up "traps" which proxies support
const handler = {
  set(target, key, value) {
    console.log(target); // object details before changing its property
    console.log(key); // object-key that was changed(set)
    console.log(value); // new object-value for the key that was changed
  };
}:

// instantiating the Proxy class with data-object + handler object
const proxy  = new Proxy(data, handler);

// we can now access/set the message from the proxy which will trigger the "set" method
proxy.message = 'Hola';
```

##### Proxies Summary

- what Vue does is: it keeps track of all your data-properties here(the proxy) and whenever such a property changes, it updates the part of your app where that property was used.
- it does that by wrapping your properties with proxies so that it has a chance of finding out when you're setting a new value

---

#### Templates Syntax

- Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying Vue component instance's data.
- All Vue templates are syntactically valid HTML that can be parsed by spec-compliant browsers and HTML parsers.
- Under the hood, Vue compiles the templates into highly-optimized JavaScript code. Combined with the reactivity system, Vue can intelligently figure out the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.
  ![vue-compiling](./img/vue-compiling.png)

- Templates are optional, you can write `render functions` with optional **JSX** support

---

#### Virtual DOM

It's a javascript object. It's a lightweight copy of the actual DOM, without most of its methods and functionalities, it observes all the changes in the data linked to the DOM and **patch** all these changes and reflect on them one time in the real DOM

- It's faster to perform comparisons and updates on the virtual DOM than it is to perform them on the actual DOM

![dom](./img/dom.PNG)

- This step is done after reactivity and changing values
- It's done in the **memory**

---

### Ways of Using Vue

- Standalone Script (Content Delivery Network (CDN))
  - CDN deliver content from a server closest to the user, this decreases the time it takes for a page to load
- Single-Page Application (`SPA`)
  - Some applications require rich interactivity, deep session depth, and non-trivial stateful logic on the frontend. The best way to build such applications is to use an architecture where Vue not only controls the entire page, but also handles data updates and navigation without having to reload the page. This type of application is typically referred to as a Single-Page Application (SPA).
- Fullstack / SSR
  - Pure client-side SPAs are problematic when the app is sensitive to SEO and time-to-content. This is because the browser will receive a largely empty HTML page, and has to wait until the JavaScript is loaded before rendering anything.
  - This means we can pre-render an entire application into HTML and serve them as static files. This improves site performance and makes deployment a lot simpler since we no longer need to dynamically render pages on each request.

---

## Instance LifeCycle

> Each Vue component instance goes through a series of initialization steps when it's created - for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. Along the way, it also runs functions called lifecycle hooks, giving users the opportunity to add their own code at specific stages.

![lifecycle](./img/lifecycle.png)
![lifecycle](./img/lifecycle2.PNG)

### Lifecycle Hooks

![lifecycle](./img/lifecycle5.png)

#### The Creation Hooks

- `beforeCreate`
  - runs whenever a component is initialized.
  - None of the `data`, `computed` or `methods` are setup during this.
  - > Note that the `setup()` hook of Composition API is called before any **Options API** hooks, even `beforeCreate()`.
- `created`
  - During the created hook, we can access all reactive `data` members and `methods` as part of our component.
  - The DOM is yet to be mounted.

#### The Mounting Hooks

> **These hooks are not called during server-side rendering.**

- `beforeMount`
  - runs before the initial render of the components and after the template or render functions have been compiled.
  - the `$el` property will not be available yet.
- `mounted`
  - we have access to the reactive components, and rendered DOM (via `this.$el` or `vm.$el`).
  - it's a common place for **side-effects** like: fetch data; The `async` requests may take some time to resolve and we don't want to delay component render

#### The Updating Hooks

> **These hooks are not called during server-side rendering.**

- `beforeUpdate`
  - runs after data changes on your component, right before the DOM is patched and re-rendered.
- `updated`
  - runs after data changes on your component and the DOM re-renders.

#### The Destroying Hooks

> **These hooks are not called during server-side rendering.**

- `beforeDestroy`
  - is invoked right before teardown or destroyed. The component completely exists and is totally functional.
- `destroyed`
  - is when everything part of the component has been torn down, or destroyed from existence.
  - This method is useful for all **cleanup** required within the component.

---

### LifeCycle Notes

- when you want to use data in the instance within the `before-..` lifecycle hooks --> for that you **replace `this` with `vm`**

---

## Data

### Interpolation

> - **Data binding**: The task of keeping data synchronized between the two
> - **String interpolation**: is the process of replacing placeholders into string values

- The most basic form of **data binding** is text interpolation using the **"Mustache" syntax** (double curly braces):

  ```html
  <span>Message: {{ msg }}</span>
  ```

- another alternative way is to use `v-text` directive:

  ```html
  <span v-text="msg"></span>
  ```

  - it's not usually used, but we may use it if we only have access to change attributes or something and not able to insert something inside the element

---

### Directives

A directive is a template-token that tells Vue how we want to handle our DOM.P
It's used to tell vue to set the value of an html-attribute

![Directives](./img/directives.jpg)
![Directives](./img/v-elements.png)

```html
<!-- Examples -->
<p v-if="condition"></p>
<button v-on:click="handleClick">Click Me</button>
<a v-bind:href="varLink">link</a>
```

---

#### Binding data (`v-bind`)

Dynamically bind one or more attributes, or a component prop to an expression (tells `Vue` to set value from something and keep it in sync with the component's property).

- Shorthand: `:` or `.` (when using `.prop` modifier)

```html
<a v-bind:href="varLink">link</a>
<!-- OR -->
<a :href="varLink">link</a>
```

---

### v-model (2 Way Binding)

Vue **v-model** is a directive. It tells Vue that we want to create a two-way data binding (relationship) between a value in our template (usually a **`form input`**, **`textarea`**, and **`select elements`**.) and a value in our `data` properties, so that we can dynamically update values.

- A common use case for using v-model is when designing forms and inputs. We can use it to have our DOM input elements be able to modify the data in our Vue instance.

  - this is called: **ReActivity**

- Different DOM property and event pairs based on the element it is used on:

  - `<input>` with text types and `<textarea>` elements
    - use **value** property and input event
  - `<input type="checkbox">` and `<input type="radio">` -> Single checkbox, boolean value:
    - use **checked** property and **change** event
  - `<select>`
    - use `v-model` on the `<select>` and not the `<option>`
    - use **value** as a prop and **change** as an event.

> **Note:** `v-model` will ignore the initial **`value`**, **`checked`** or **`selected`** attributes found on any form elements. It will always treat the current bound JavaScript state as the source of truth. You should declare the initial value on the JavaScript side, using the data option.

- **NOTE**: to make adjustment on the binded input, use a [modifier](#modifiers) -> EX:
  - `v-model.trim="name"`
  - `v-model.number="rate"` --> now the value will be type `number` and not `string`

```html
<div>
  <input type="text" v-model="value" />
  <p>Value: {{ value }}</p>
</div>

<script>
  export default {
    data() {
      return {
        value: 'Hello World'
      };
    }
  };
</script>
```

Here it's like we used 2 directives one for `input` element:

- `v-bind:value="value"`
- `v-on:input="setValue"`
  - `e.target.value ...`

---

#### 2 way binding for elements in a child-component or custom element component

Here:

- instead of `v-model=""` we use `:model-value=""`

then pass it to an event emitter to the parent component

---

#### Modifiers

Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way. For example, the `.prevent` modifier tells the `v-on` directive to call `event.preventDefault()` on the triggered event

```html
<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>
```

- It is a very common need to call event.`preventDefault()` or event.`stopPropagation()` inside event handlers.
- also it can be used in keyCodes (keyboard) to specify specific key -> `@keyup.enter`
  Instead we use **Event Modifiers** or **modifiers** for inputs

  ```html
  <!-- the handler will only be called if $event.key is equal to 'PageDown' -->
  <input @keyup.page-down="onPageDown" />
  ```

![modifiers](./img/modifiers.png)
![modifiers](./img/modifiers2.png)

- `.lazy`: By default, v-model syncs the input with the data after each `input` event (with the exception of IME composition as stated above). You can add the lazy modifier to instead sync after `change` events:

  ```html
  <!-- synced after "change" instead of "input" -->
  <input v-model.lazy="msg" />
  ```

- `.stop`: stops event's propagation

  ```html
  <a @click.stop="doThis"></a>
  ```

- `.exact` Modifier: allows control of the exact combination of system modifiers needed to trigger an event.

  ```html
  <!-- this will fire even if Alt or Shift is also pressed -->
  <button @click.ctrl="onClick">A</button>

  <!-- this will only fire when Ctrl and no other keys are pressed -->
  <button @click.ctrl.exact="onCtrlClick">A</button>
  ```

- Order matters when using modifiers because the relevant code is generated in the same order. Therefore using:
  - `@click.prevent.self` will prevent click's default action on the element itself and its children,
  - while `@click.self.prevent` will only prevent click's default action on the element itself.

---

#### Custom Directives

Custom directives are mainly intended for reusing logic that involves low-level DOM access on plain elements.

- custom directive is defined as an object containing lifecycle hooks similar to those of a component. The hooks receive the element the directive is bound to. Here is an example of a directive that focuses an input when the element is inserted into the DOM by Vue:

  ```js
  <input v-focus />;

  const focus = {
    mounted: el => el.focus()
  };

  export default {
    directives: {
      // enables v-focus in template
      focus
    }
  };
  ```

- It is also common to globally register custom directives at the app level:

  ```js
  const app = createApp({});

  // make v-focus usable in all components
  app.directive('focus', {
    /* ... */
  });
  ```

---

### Refs

While Vue's declarative rendering model abstracts away most of the direct DOM operations for you, there may still be cases where we need **direct access to the underlying DOM elements**. To achieve this, we can use the special `ref` attribute:

```html
<input ref="input" />
```

**ref** is a special attribute, similar to the **key** attribute discussed in the `v-for`. It **allows us to obtain a direct reference to a specific DOM element (Access DOM elements Directly)** or child component instance after it's mounted. This may be useful when you want to, for example, programmatically focus an input on component mount, or initialize a 3rd party library on an element.

#### Accessing the Refs

```html
<script>
  export default {
    mounted() {
      this.$refs.input.focus();
    }
  };
</script>

<template>
  <input ref="input" />
</template>
```

---

### ref vs v-model

![ref](./img/ref.PNG)

- **ref**

  - when you need to access the element from code
  - it changes the DOM and not the vue-instance
  - in ref -> you get the value from input as a **string**

- **v-model**
  - when you need to associate data with the element content
  - in v-model -> you get the value from input as a **its type**

Note from **stackoverflow**:

> Directly accessing component instances/DOM nodes (through refs, in this case) should always be a last resort, because you're explicitly sidestepping the framework and potentially making massive headaches for yourself in the process. That is to say, anything that you can use the framework to do (e.g. using v-model for two-way bindings), you should.

---

## Methods

![methods](./img/methods.PNG)

> Don't use **Arrow-functions** as methods as it will miss-up the binding that vue makes using **"this"** keyword. Instead use ES6-methods

- **computed properties** can never be **asynchronous** as you expect value to be returned from them, UNLIKE **watchers** which are made for async actions without returning anything

---

### Event Handling (Listening to Events)

**`v-on:<event-name>`** directive, which we use its shortcut: **"@"** symbol,

- It's used to **bind events**
- To listen to DOM events and run some JavaScript when they're triggered. The usage would be `v-on:click="handlerFunction"` or with the shortcut, `@click="handlerFunction"`.
- you can have **multiple bindings**:

  ```html
  <div
    v-on="
      mousedown: func1,
      mouseup: func2
    "
  ></div>

  <!-- OR -->
  <div
    @="
      mousedown: func1,
      mouseup: func2
    "
  ></div>
  ```

#### Accessing Event Argument

> When you add event-listener and then point at a function that should be executed (when that event occurs), that function will automatically get one argument, the browser will ensure that this argument is provided, and that will be an **object describing the event that occurred**

To Access event object

- in the element (**inline**) -> `$event`
- in the methods (**external**) -> `event`

> Best Practice: use **$event**

- using `$event` special variable

  ```html
  <!-- we pass "$event as the first argument" -->
  <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
  ```

- using inline arrow function

  ```html
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">Submit</button>
  ```

```js
methods: {
  warn(event, message) {
    // now we have access to the native event
    if (event) {
      event.preventDefault() // handle submitting the form manually instead of reloading
    }
    console.log(event.target); // access data about the event
    alert(message)
  }
}
```

- **Note**: when dealing with form and want to prevent default when submitting: it's better to use [Modifiers](#modifiers)

---

## Computed Properties

In-template expressions are very convenient, but they are meant for simple operations. Putting too much logic in your templates can make them bloated and hard to maintain.

- For complex logic that includes reactive data, it is recommended to use a computed property.

> **Notes**:
>
> - Instead of a computed property, we can define the same function as a method. For the end result, the two approaches are indeed exactly the same. However, the difference is that computed properties are cached based on their reactive dependencies. A computed property will only re-evaluate when some of its reactive dependencies have changed.
> - Vue re-execute any method that you're using anywhere in your `HTML` code (between `{{}}` or with the `bind` or with the HTML-on-events) whenever anything on the screen changes(re-render), even if the method is not using the changed-value, as Vue doesn't know if this method change the value or not
> - That's why **methods** aren't the best solution for computing some dynamically calculated value.

- Also for expensive logic we use computed-property as it caches the function so that it won't be created each time **UNLESS THE VARIABLES INSIDE IT CHANGED**

- It's used when you have dependent data (Vue is aware of the dependencies in the `computed property/function`)
  - Use it for outputting data, as it only re calculate tne function if any dependency inside it changed
- it has to `return` a value
- It prevents us from writing **Imperative code**
- It should be side-effect free
  - don't make async requests or mutate the DOM inside a computed property! Think of a computed property as declaratively describing how to derive a value based on other values -
  - its only responsibility should be computing and returning that value
  - we can perform side effects in reaction to state changes with [watchers](#watchers).
- in `HTML`, it's used in `{{}}` or in `v-for` like normal properties and not in the place of **methods**

```js
export default {
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
  computed: {
    // a computed getter
    publishedBooksMessage() {
      // `this` points to the component instance
      return this.author.books.length > 0 ? "Yes" : "No";
    },
  },
};

<p>Has published books:</p>
// here it's called without ()
<span>{{ publishedBooksMessage }}</span>
```

> **You can use it with dynamic-classes or styles**

---

### Computed properties vs methods

![computed-vs-methods](./img/computed-vs-methods.png)

---

### Filters (old and deprecated)

Vue allows you to define filters that can be used to apply common text formatting.

- Filters are usable in two places: **mustache interpolations** and `v-bind` expressions. Filters should be appended to the end of the JavaScript expression, denoted by the **“pipe” ( `|` )** symbol:

  ```html
  <!-- in mustaches -->
  {{ message | capitalize }}

  <!-- in v-bind -->
  <div v-bind:id="rawId | formatId"></div>
  ```

![filters](./img/filters.png)

- It's now replaced with **Computed Properties** in Vue3

---

## Watchers

> "Computed properties" allow us to declaratively compute derived values. However, there are cases where we need to perform **"side effects"** (watching something and reacting by changing another thing) in reaction to specific-state changes
>
> - for example, mutating the DOM, or changing another piece of state based on the result of an async operation.

- usually when the computed property depends on more than one thing
- (Good for Asynchronous updates) as when you want to do something when condition happens or promise fulfilled
- Note -> the watcher will be named like the watched property (`data-item` or `computed property`)
- here we don't `return` something as we don't use `watchers` anywhere in our HTML template
- it can take 2 arguments:
  ![watchers](./img/watcher.png)
  1. new value
  2. old value

> With Options API, we can use the **`watch`** option to trigger a function whenever a **reactive property** changes

```js
export default {
  data() {
    return {
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
    };
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf("?") > -1) {
        this.getAnswer();
      }
    },
  },
  methods: {
    async getAnswer() {
      this.answer = "Thinking...";
      try {
        const res = await fetch("https://yesno.wtf/api");
        this.answer = (await res.json()).answer;
      } catch (error) {
        this.answer = "Error! Could not reach the API. " + error;
      }
    },
  },
};

<p>
  Ask a yes/no question:
  <input v-model="question" />
</p>
<p>{{ answer }}</p>
```

### Deep Watchers

**watch** is shallow by default: the callback will only trigger when the watched property has been assigned a new value - it won't trigger on nested property changes. If you want the callback to fire on all nested mutations, you need to use a **deep watcher**:

```js
export default {
  watch: {
    someObject: {
      handler(newValue, oldValue) {
        // Note: `newValue` will be equal to `oldValue` here on nested mutations
        // as long as the object itself hasn't been replaced.
      },
      deep: true
    }
  }
};
```

### Eager Watchers

**`watch`** is lazy by default: the callback won't be called until the watched source has changed. But in some cases we may want the same callback logic to be run **eagerly**

- We can force a watcher's callback to be executed immediately by declaring it using an object with a handler function and the `immediate: true` option:

```js
export default {
  // ...
  watch: {
    question: {
      handler(newQuestion) {
        // this will be run immediately on component creation.
      },

      // or when route has params and page is being created
      () => this.$route.params,
      // after getting the params, we make a fetch with the params in the payload
      () => {
        this.fetchData()
      },
      // force eager callback execution
      { immediate: true }
    }
  }
  // ...
};
```

### `this.$watch()`

It's also possible to imperatively create watchers using the `$watch()` instance method:

```js
export default {
  created() {
    this.$watch('question', newQuestion => {
      // ...
    });
  }
};
```

- This is useful when you need to **conditionally set up a watcher**, or only watch something in response to user interaction. It also allows you to stop the watcher early.

### Watcher Notes

- If you want to access the **DOM** in a `watcher` callback after Vue has updated it, you need to specify the `flush: 'post'` option:

  ```js
  export default {
    // ...
    watch: {
      key: {
        handler() {},
        flush: 'post'
      }
    }
  };
  ```

- Watchers declared using the `watch` option or the `$watch()` instance method are automatically stopped when the owner component is unmounted, so in most cases you don't need to worry about stopping the watcher yourself.

---

## Styles

### Dynamic styling

here we use

- `v-bind:style` or `:style`
- `v-bind:class` or `:class` --> you can use computed properties with it
- in the style object,
  - you can write the css-property-name in 2 ways:
    1. a normal way but in a single quotes
    2. or in a **camelCase** without quotes (recommended)
  - the css-property-value is always in quotes

```html
<div :style="{borderColor: isSelected ? 'red' : 'blue'}"></div>
<!-- OR -->
<div :style="{'border-color': isSelected ? 'red' : 'blue'}"></div>

<div :class="isActive ? 'active' : ''"></div>
<!-- Or -->
<div :class="{ active: isActive }"></div>
<!-- if you want to use class-name from a variable (Dynamic object property) -->
<div :class="{ new: item.new, [rowClasses[index]]: true }"></div>
```

- To add multiple (`dynamic` + `fixed`) classes together:

  ```html
  <div :class="['fixed-class', { active: isActive }]"></div>
  <!-- OR -->
  <div class="fixed-class" :class="{ active: isActive }"></div>
  ```

> **Note:** It's a good practice to make the dynamic-style-object as a `computed property` to prevent crowding the HTML template

---

### Scoped styling

It's to make the styles **scoped(limited)** to its component

`<style scoped>`

- it's done by giving the elements that has applied styles/selectors you write a (special attributes like: `data-v-9a9f6144`) to ensure that this styling is scoped to that HTML-element markup

  - it append the element with a custom attribute selector (hash), so it's like the selector is this:

    ```css
    /* Normal selector */
    .todo-list {
      /* styles */
    }

    /* Scoped selector */
    .todo-list[data-v-9a9f6144] {
      /* styles */
    }
    ```

  - same for binded-classes

- without it, any style you write in any component will be available for all components in the app and may result in styling conflicts

---

## Vue Transitions and Animations

`<Transition>` is a built-in component: this means it is available in any component's template without having to register it. It can be **used to apply enter and leave animations** on elements or components passed to it via its default slot.

- It works in response to changing state
- `<Transition>`
  - for applying animations when an element or component is entering and leaving the DOM.
- `<TransitionGroup>` for applying animations when an element or component is inserted into, removed from, or moved within a **v-for list**.
- another alternative is to use toggling CSS classes or state-driven animations via style bindings. (**binded-classes with transition styles**):

  ```html
  <div :class="[isShowing ? blurClass : '', bkClass]"></div>
  ```

- Transition vs animation

  ![CSS transition vs animation](./img/CSS%20transition%20vs%20animation.webp)
  ![CSS transition vs animation](./img/transition-vs-animation.gif)

---

### Vue Transition Classes

> They focus on when element is **displayed conditionally**

- `<transition>` component:

  - It can be used to apply **enter** and **leave** animations on elements or components passed to it via its default slot. The enter or leave can be triggered by: `v-if`, `v-show`, `dynamic-components`
  - `<Transition>` only supports a **single** element or component as its slot content. If the content is a component, the component must also have only one single root element.
  - EX:

    ```html
    <button @click="show = !show">Toggle</button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>

    <style>
      /* we will explain what these classes do next! */
      .v-enter-active,
      .v-leave-active {
        transition: opacity 0.5s ease;
      }

      .v-enter-from,
      .v-leave-to {
        opacity: 0;
      }
    </style>
    ```

    ![transitions](./img/transitions.png)

- **How it works:**
  ![transitions](./img/transitions2.png)

  1. Vue will automatically sniff whether the target element has CSS transitions or animations applied. If it does, a number of CSS transition classes will be added / removed at appropriate timings.
  2. If there are listeners for JavaScript hooks, these hooks will be called at appropriate timings.
  3. If no CSS transitions / animations are detected and no JavaScript hooks are provided, the DOM operations for insertion and/or removal will be executed on the browser's next animation frame.

- There are six classes applied for enter / leave transitions:

  - `v-enter-from`
  - `v-enter-active`
  - `v-enter-to`
  - `v-leave-from`
  - `v-leave-active`
  - `v-leave-to`

- `v-enter-active` and `v-leave-active` give us the ability to specify different **easing curves** for enter / leave transitions.

> Vue analyzes the css code for these classes and reads the durations of the animations/transitions and will remove the elements from the DOM once that duration is over, with these special-css-classes and the `transition` component, Vue will be able to tell if an animation is happening and how long the animation takes

- You can use **"Named Transitions"** when having multiple different `<transition>` components

  - For a named transition, its transition classes will be prefixed with its name instead of `v`. For example, the applied class for the transition will be `bounce-enter-active` instead of `v-enter-active`.
  - You can mix these classes with **Native CSS animations**

  ```html
  <Transition name="bounce">...</Transition>

  <style>
    .bounce-enter-active {
      animation: bounce-in 0.5s;
    }
    .bounce-leave-active {
      animation: bounce-in 0.5s reverse; /* Note that we use "reverse" as it make sense when leaving */
    }

    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.25);
      }
      100% {
        transform: scale(1);
      }
    }
  </style>
  ```

  - or:
    ![transition-class](./img/transition-class.png)

---

### Nested Transitions and Explicit Transition Durations

Although the transition classes are only applied to the direct child element in `<Transition>`, we can transition nested elements using nested CSS selectors:

```html
<Transition name="nested">
  <div v-if="show" class="outer">
    <div class="inner">Hello</div>
  </div>
</Transition>

<style>
  /* rules that target nested elements */
  .nested-enter-active .inner,
  .nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
  }

  .nested-enter-from .inner,
  .nested-leave-to .inner {
    transform: translateX(30px);
    opacity: 0;
  }
</style>
```

- We can even add a transition delay to the nested element on enter, which creates a staggered enter animation sequence, using `transition-delay` css property

  - > However, this creates a small issue. By default, the `<Transition>` component attempts to automatically figure out when the transition has finished by listening to the first transitionend or animationend event on the root transition element. With a nested transition, the desired behavior should be waiting until the transitions of all inner elements have finished.
  - In such cases you can specify an explicit transition duration (in milliseconds) using the duration prop on the `<transition>` component. The total duration should match the delay plus transition duration of the inner element:

    ```html
    <Transition :duration="550">...</Transition>
    ```

---

### TransitionGroup

`<Transition-group>` is a built-in component designed for animating the insertion, removal, and order change of elements or components that are rendered in a **list**.

- Difference from `<Transition>`:
  - By default, it doesn't render a wrapper element. But you can specify an element to be rendered with the `tag` prop.
  - Transition modes are not available, because we are no longer alternating between mutually exclusive elements.
  - Elements inside are always required to have a unique `key` attribute.
  - CSS transition classes will be applied to **individual elements** in the list, not to the group / container itself.

```html
<TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item">{{ item }}</li>
</TransitionGroup>

<style>
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  /* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
  .list-leave-active {
    position: absolute;
  }
</style>
```

---

### Transition Performance Considerations

You may notice that the animations shown above are mostly using properties like `transform` and `opacity`. These properties are efficient to animate because:

1. They do not affect the **document layout** during the animation, so they do not trigger expensive CSS layout calculation on every animation frame.
2. Most modern browsers can leverage GPU hardware acceleration when animating `transform`.

---

### Reusable Transitions

Transitions can be reused through Vue's component system. To create a reusable transition, we can create a component that wraps the `<Transition>` component and passes down the slot content:

```html
<!-- MyTransition.vue -->

<script>
  // JavaScript hooks logic...
</script>

<template>
  <!-- wrap the built-in Transition component -->
  <Transition name="my-transition" @enter="onEnter" @leave="onLeave">
    <slot></slot>
    <!-- pass down slot content -->
  </Transition>
</template>

<style>
  /*
  Necessary CSS...
  Note: avoid using <style scoped> here since it
  does not apply to slot content.
*/
</style>
```

- Now **MyTransition** can be imported and used just like the built-in version:

  ```html
  <MyTransition>
    <div v-if="show">Hello</div>
  </MyTransition>
  ```

---

### Transition modes

the entering and leaving of **multiple elements** that are **animated at the same time** may conflict, and we may have to make them `position: absolute` to avoid the layout issue when both elements are present in the DOM. in some cases this isn't an option, or simply isn't the desired behavior.

- We may want the leaving element to be animated out first, and for the entering element to only be inserted after the leaving animation has finished.
- we can enable this behavior by passing `<Transition>` a **"mode"** prop:
  - `in-out`-> The current element waits until the new element is done transitioning-in to fire
  - `out-in`-> The current element transitions-out and then the new element transitions-in

```HTML
<Transition mode="out-in">
  <div v-if="condition"></div>
  <div v-else"></div>
</Transition>
```

> `<Transition>` also supports `mode="in-out"`, although it's much less frequently used.

---

### Animating with JavaScript Hooks

- It makes animation more free unlike in `css`, as Javascript allows for more handles than CSS
- It's done using element-life-cycle events-hooks:
  ![animation-life-cycles](./img/animation-life-cycles.png)
  - by default the event-handler method takes the element (`el`) as the first argument
- When using JavaScript-only transitions, it is usually a good idea to add the `:css="false"`

```html
<Transition :css="false" @before-enter="onBeforeEnter">
  <!-- ... -->
</Transition>

<script>
  export default {
    // ...
    methods: {
      // called before the element is inserted into the DOM.
      // use this to set the "enter-from" state of the element
      onBeforeEnter(el) {}
    }
  };
</script>
```

![handles](./img/js-animations.png)

- if you will use it, you have to disable **css-binding**:

> The methods are from [GSAP - GreenSock](https://greensock.com/gsap/)

---

## Conditional Rendering

![conditional-lists](./img/conditional-lists.PNG)

- **`v-if` on `<template>`**

  - Because `v-if` is a directive, it has to be attached to a single element. But what if we want to toggle more than one element? In this case we can use `v-if` on a `<template>` element, which serves as an invisible wrapper. The final rendered result will not include the `<template>` element.

    ```html
    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    ```

### `v-show`

- `v-show`

  - The difference is that an element with v-show will always be rendered and remain in the DOM; v-show only toggles the `display` CSS property of the element.
  - Doesn't work with `v-else` directive
  - Doesn't work with `<template></template>` tag
  - Expensive on load
  - Cheap on toggle

- `v-if` vs `v-show`
  ![conditional](./img/conditional.png)

  - `v-if`
    - is "real" conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.
    - is also **lazy**: if the condition is false on initial render, it will not do anything - the conditional block won't be rendered until the condition becomes true for the first time.
  - `v-show`
    - is much simpler - the element is always rendered regardless of initial condition, with CSS-based toggling.

- Which to use?

  - `v-if`: if the element will appear/disappear **occasionally/rarely** from the page (if the condition is unlikely to change at runtime)
  - `v-show`: if the element will **constantly** appear/disappear from the page (toggle something very often)

    - it show/hide elements with **`CSS`**

---

### Dynamic Components

Sometimes, it's useful to dynamically switch between components, like in a **tabbed interface**(tabs):

- it's used with `<component></component>` tag

- instead of using multiple

  ```html
  <comp1>v-if="currentComponent === comp1"</comp1>
  <comp2>v-if="currentComponent === comp2"</comp2>
  <comp3>v-if="currentComponent === comp3"</comp3>
  ```

- use this:

  ```html
  <!-- Component changes when (currentTab property) changes -->
  <component :is="currentComponent"></component>

  <button @click="selected = 'comp1'"></button>
  <button @click="selected = 'comp2'"></button>
  ```

#### `Keep-alive`

When switching between multiple components with `<component :is="...">`, a component will be **unmounted(destroyed)** when it is switched away from. We can force the inactive components to stay "alive" with the built-in `<KeepAlive>` component.

**`KeepAlive` / `keep-alive`** is a built-in component that allows us to conditionally **cache** component instances when dynamically switching between multiple components. which:

1. saves performance of mounting/unmounting
2. keep whatever change we did in the component like wrote text in `input` but didn't finish

```html
<!-- Inactive components will be cached! -->
<KeepAlive>
  <component :is="activeComponent" />
</KeepAlive>
```

`Tabs` example:
![dynamic-components](./img/dynamic-components.png)

---

## Rendering Lists (looping)

```html
<li v-for="goal in goals" :key="goal.id">{{goal.name}}</li>
<li v-for="(goal,i) in goals" :key="goal.id">{{goal.name}} and index is {{i}}</li>
```

- it can also be used with (`objects` and range of numbers) instead of `arrays`

  ```html
  <li v-for="num in 5" :key="num">{{num}}</li>
  ```

- You can also use `of` as the delimiter instead of `in`, so that it is closer to JavaScript's syntax for iterators:

  ```html
  <div v-for="item of items"></div>
  ```

### Maintaining State with `key`

> When Vue is updating a list of elements rendered with `v-for`, by default it uses an **"in-place patch" strategy**. If the order of the data items has changed, instead of moving the DOM elements to match the order of the items, Vue will patch each element in-place and make sure it reflects what should be rendered at that particular index.
>
> - This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).
> - To give Vue a hint so that it can track each node's identity, and thus reuse and reorder existing elements, you need to provide a unique **key** attribute for each item:

- **`Key`**: needs to be unique, It's what Vue uses to **track the VDOM changes**
  - The key binding expects primitive values - i.e. `strings` and `numbers`. Do not use **objects** as `v-for` keys.
- when we delete an item from a list(`<li>`) in vue, Vue doesn't re-render the entire list elements, instead it just moves the content of the lists to the first list-DOM-element and other list items after that
  - this way Vue re-uses Dom-elements instead of re-render them for performance
  - so we need to give each list element in a loop a unique **key**

### `v-for` with `v-if`

It's not recommended to use `v-if` and `v-for` on the same element due to implicit precedence.

- When they exist on the same node, `v-if` has a higher priority than `v-for`. That means the `v-if` condition will not have access to variables from the scope of the `v-for`:

  ```html
  <!-- This will throw an error because property "todo" -->
  is not defined on instance.
  <li v-for="todo in todos" v-if="!todo.isComplete">{{ todo.name }}</li>
  ```

- This can be fixed by moving `v-for` to a wrapping `<template>` tag (which is also more explicit):

  ```html
  <template v-for="todo in todos">
    <li v-if="!todo.isComplete">{{ todo.name }}</li>
  </template>
  ```

### Array Mutation Methods

- Vue is able to detect when a reactive array's mutation methods (ex: `.push()`, `.pop()`, `.splice()`) are called and trigger necessary updates.
  - These methods will mutate the original array, which should be avoided in computed getters. Create a copy of the original array before calling these methods:

```js
return numbers.reverse(); // BAD
return [...numbers].reverse(); // GOOD
```

- In comparison, there are also non-mutating methods, e.g. `.filter()`, `.concat()` and `.slice()`, which do not mutate the original array but always return a new array. When working with non-mutating methods, we should replace the old array with the new one
  - > You might think this will cause Vue to throw away the existing DOM and re-render the entire list - luckily, that is not the case. Vue implements some smart heuristics to maximize DOM element reuse, so replacing an array with another array containing overlapping objects is a very efficient operation.

---

## Components

Components allow us to split the UI into independent and reusable pieces, and think about each piece in isolation. It's common for an app to be organized into a tree of nested components

![components](./img/components1.png)

- They're collection of elements that are encapsulated into a group that can be accessed through one single element
- When using a `build` step, we typically define each Vue component in a dedicated file using the `.vue` extension - known as a Single-File Component (**SFC**)

  ```html
  <script>
    export default {
      data() {
        return {
          count: 0
        };
      }
    };
  </script>

  <template>
    <button @click="count++">You clicked me {{ count }} times.</button>
  </template>
  ```

- When not using a `build` step, a Vue component can be defined as a plain JavaScript **object** containing Vue-specific options

  - > you can use named exports to export multiple components from the same file.

  ```js
  export default {
    data() {
      return {
        count: 0
      };
    },
    // not recommended; as it's not supported by code-editors and will be hard to use multi-line template code
    template: `
      <button @click="count++">
        You clicked me {{ count }} times.
      </button>`
  };
  ```

- Using a Component:
  - To use a child component, we need to import it in the parent component, then To expose the imported component to our template, we need to **register** it with the `components` option. The component will then be available as a tag using the key it is registered under.
  - each one maintains its own, separate **state**. That's because each time you use a component, a new **instance** of it is created.
  - we use **PascalCase** names when registering components
    - `<PascalCase />` makes it more obvious that this is a Vue component instead of a native HTML element in templates or a custom web-component
  - Vue supports resolving **kebab-case** tags to components registered using **PascalCase**. This means a component registered as MyComponent can be referenced in the template via both `<MyComponent>` and `<my-component>`.

---

### Single File Component (SFC)

- **SFC** is a defining feature of Vue as a framework, and is the recommended approach for using Vue in the following scenarios:
  - `Single-Page Applications (SPA)`
  - `Static Site Generation (SSG)`
- How It Works
  - Vue `SFC` is a framework-specific file format and must be pre-compiled by `@vue/compiler-sfc` into standard JavaScript and CSS. A compiled SFC is a standard JavaScript (ES) module - which means with proper build setup you can import an SFC like a `module`
  - `<style>` tags inside SFCs are typically injected as native `<style>` tags during development **to support hot updates**. For production they can be extracted and merged into a single CSS file.
- What About Separation of Concerns? - which `HTML`/`CSS`/`JS` were supposed to separate!
  - To answer this question, it is important for us to agree that separation of concerns is not equal to the separation of file types. The ultimate goal of engineering principles is to improve the maintainability of codebase.
  - instead of dividing the codebase into three huge layers that interweave with one another, it makes much more sense to divide them into loosely-coupled components and compose them. Inside a component, its template, logic, and styles are inherently coupled, and collocating them actually makes the component more cohesive and maintainable.

> More info on SFC [here](https://vuejs.org/api/sfc-spec.html)

---

### Component Registration (Global / Local)

A Vue component needs to be "registered" so that Vue knows where to locate its implementation when it is encountered in a template. There are two ways to register components: **global** and **local**.

#### Global Registration

- We can make components available globally in the entire current Vue application without importing each time using the `app.component()` method:

  ```js
  // in main.js
  import { createApp } from 'vue';
  import MyComponent from './App.vue';

  const app = createApp({});

  // arguments: (name-registered-that-will-be-used, the-actual-component)
  app.component(
    // the registered name
    'MyComponent',
    MyComponent
  );
  ```

- The `app.component()` method can be chained:

  ```js
  app
    .component('ComponentA', ComponentA)
    .component('ComponentB', ComponentB)
    .component('ComponentC', ComponentC);
  ```

- this has some downsides:
  - Global registration prevents build systems from removing unused components (a.k.a **"tree-shaking"**). If you globally register a component but end up not using it anywhere in your app, it will still be included in the final bundle.
    - > this may increase your bundle size, so be careful with global components
    - also Vue needs to load them all when the application is loaded initially and the `browser` needs to download the code for all those components initially
  - also this will crowd the `main.js` file with all the registering components code
  - Global registration makes dependency relationships less explicit in large applications. It makes it difficult to locate a child component's implementation from a parent component using it.
  - > To solve this, we register these components locally, where they are used.

#### Local Registration

Local registration scopes the availability of the registered components to the current component only. It makes the dependency relationship more explicit, and is more tree-shaking friendly.

```html
<script>
  import ComponentA from './ComponentA.vue';

  export default {
    // the key will be the registered name of the component, and the value will contain the implementation of the component.
    components: {
      ComponentA
    }
  };
</script>

<template>
  <ComponentA />
</template>
```

> **Note** that locally registered components are not also available in descendant components. In this case, ComponentA will be made available to the current component only, not any of its child or descendant components.

---

## Communicate between Components

[Guide](https://dev.to/sanchithasr/how-to-communicate-between-components-in-vue-js-kjc)

1. Using **Props** (Parent to Child Communication)
2. Using **Events-emitter** (Child to Parent Communication)
3. Using **Event Bus** (Communication between any components)
4. Using **provide/inject** (Parent to Child Communication)
5. Using **this.$refs** (Parent to Child Communication)

---

### Props

> Props always always pass data **Down** from parent to child, as we want a single source of truth of "who owns the state" + we want "one way data-flow"
>
> - this is called: **"props down .. events up"**
> - So this is why we can't modify the prop value in the `child component` as it violate the `"one directional data-flow"` patterns

- You should write props in **camelCase** but if you wrote it in **kebab case** -> Vue will transfer it to camelCase when you use it in the child component
  ![props-camelCase](./img/props-camelCase.png)

- Props are defined in the **child component** using the `props` option in **2 ways** as:

  - an **array** in the simplest form

    ```js
    props: ["title"],
    ```

  - an **object** with multiple properties for each prop (`type`, `required`?, `default`, ..)

    ```js
    props: {
        title: String
        price: {
          type: Number,
          default: 100,
          required:true
          },
      },
    ```

    - usually for **Prop Validation**
      - Components can specify requirements for their props, such as the types you've already seen. If a requirement is not met, Vue will warn you in the browser's JavaScript console.
    - **default value**: if the `default` value is an `object` or `array`; then we need the default-value to be returned from a function

      ```js
      // Object with a default value
          propE: {
            type: Object,
            // Object or array defaults must be returned from
            // a factory function. The function receives the raw
            // props received by the component as the argument.
            default(rawProps) {
              return { message: 'hello' }
            }
          },
      ```

      - default value for props can also be primitive value
      - The **Boolean** absent props will be cast to false. You can change this by setting a default for it — i.e.: default: `undefined` to behave as a non-Boolean prop.

        ```html
        <!-- equivalent of passing :disabled="true" -->
        <MyComponent disabled />

        <!-- equivalent of passing :disabled="false" -->
        <MyComponent />
        ```

    - **Validating props**:

      - inside it you can't access the component's properties as it hasn't been created yet

      ```js
      props: {
        price: {
          type: Number,
          default: 100,
          required:true,
          validator: propValue => {
          return propValue < 1200;
            },
            // or
          validator(propValue) {
          return propValue < 1200;
            }
           }
        },
      ```

- In the **parent component**:

  - if you want to pass a prop of any type other than `string` like **Boolean** -> you must write it with `v-bind:` or `:`

    ```html
    <ButtonCounter :isEnabled="true" />
    ```

    ```html
    <!-- in the child: BlogPost.vue -->
    <script>
      export default {
        props: ['title']
      };
    </script>

    <template>
      <h4>{{ title }}</h4>
    </template>

    <!-- In parent -->
    <BlogPost title="My journey with Vue" />
    <!-- Or using message-property -->
    <BlogPost :title="message" />
    ```

---

#### Mutating Object / Array Props

When objects and arrays are passed as props, while the child component cannot mutate the prop binding, it will be able to mutate the object or array's nested properties. This is because in JavaScript **objects and arrays are passed by reference**, and it is unreasonably expensive for Vue to prevent such mutations.

- The main drawback of such mutations is that it allows the child component to affect parent state in a way that isn't obvious to the parent component, potentially making it more difficult to reason about the data flow in the future. As a best practice, you should avoid such mutations unless the parent and child are tightly coupled by design.
  - In most cases, the child should **emit an event** to let the parent perform the mutation.
  - > or you can avoid mutating state by duplicating the object/array and returning the new one after mutating it without affecting the original one

---

### Component Events (Event emitter)

- A component can emit custom events directly in template expressions (e.g. in a `v-on` handler) using the built-in `$emit` method
  - The `$emit()` method is also available on the component instance as `this.$emit()`
- the first argument to `$emit` is the event-name. The follow-up arguments represent the data that we would like to pass up
- when declaring events emitted from a component, Similar to prop type validation, an emitted event can be **validated** if it is defined with the **object syntax** instead of the array syntax.

- Inline

  ```html
  <button @click="$emit('someEvent')">click me</button>
  ```

- external

  ```js
  // Emitted events can be explicitly declared on the component via the "emits" option
  emits: ['submit'], // You can also use an object of emits instead of an array, which allows us to perform runtime validation of the payload of the emitted events

  methods: {
    submit() {
      this.$emit('methodName_usedIn_parentComponent',emitted_value) //payload
    }
  },
  ```

- To emit event from the **grand-child** component to its **grand-parent** component:

  ```js
  this.$parent.$emit('submit', { somekey: somevalue });
  ```

- in parent component:

  ```html
  <child-component @eventName_usedIn_parentComponent="handling_method" />
  ```

> **Notes**:
>
> - we create an **`emits`** array/object for "documentation", so that when other developer enters the component, he knows that this component emits events.
> - Unlike native DOM events, component emitted events do not **bubble**. You can only listen to the events emitted by a direct child component. If there is a need to communicate between sibling or deeply nested components, use an external event bus

---

#### `model-value` event: using `v-model` with custom components

it's for using the directive `v-model` on custom input components other than the native `input` elements

> By default, `v-model` on a component uses `modelValue` as the prop and `update:modelValue` as the event. We can modify these names passing an argument to `v-model`

- it works by using `v-model` on the custom-component and then it will be applied as a `prop` + `event-emitter` with the name of `"model-view"` automatically

[guide](https://vuejs.org/guide/components/events.html#usage-with-v-model)

> Video 10 - part 14

![modelValue](./img/modelValue.PNG)

- **EX:**

  - in child custom component:

    ```html
    <input type="text" :value="modelValue" :placeholder="placeholder" @input="handleInput" />

    <script>
      export default {
        name: 'TextInput',
        props: {
          modelValue: {
            type: String,
            required: true
          }
        },
        emits: ['update:modelValue'],
        methods: {
          handleInput($event) {
            this.$emit('update:modelValue', $event.target.value);
          }
        }
      };
    </script>
    ```

  - in parent component:

    ```html
    <text-input v-model="role" />
    ```

Custom events can also be used to create custom inputs that work with **v-model**.

- For this to actually work though, the `<input>` inside the component must:

  - Bind the value attribute to the **modelValue** prop
  - On input, emit an event with a specific name: **update:modelValue** with the new value

  ```vue
  <!-- CustomInput.vue  (child component) -->
  <script>
  export default {
    props: ['modelValue'],
    emits: ['update:modelValue']
  };
  </script>

  <template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
  </template>
  ```

- And now in the parent component we use this:

  ```html
  <!-- in parent component -->
  <!-- instead of this -->
  <CustomInput :modelValue="searchText" @update:modelValue="newValue => searchText = newValue" />

  <!-- use this -->
  <CustomInput v-model="searchText" />
  ```

---

### Provide / Inject

They can be used instead of passing props, or emitting events(different implementation)

- instead of:
  - If there is a longer parent chain, more components would be affected along the way. This is called **"props drilling"** and definitely isn't fun to deal with.
    ![provide-inject](./img/provide1.png)
- We can solve props drilling with `provide` and `inject`. A parent component can serve as a dependency provider for all its descendants. Any component in the descendant tree, regardless of how deep it is, can inject dependencies provided by components up in its parent chain.
  ![provide-inject](./img/provide2.png)

#### Provide

- To provide data to a component's descendants, use the provide option:

  ```js
  // in the upper component
  export default {
    provide: {
      message: 'hello!'
    }
  };
  ```

- For each property in the `provide` object, the key is used by child components to locate the correct value to inject, while the value is what ends up being injected.

**Note**: If we need to provide per-instance dynamic/state property, for example data declared via the `data()`, then provide must use a function value:

```js
export default {
  data() {
    return {
      message: 'hello!'
    };
  },

  provide() {
    // use function syntax so that we can access `this`
    return {
      message: this.message
    };
  }
};
```

- In addition to providing data in a component, we can also provide at the **app level**:

  - Provide a value that can be injected in all descendant components within the application.
  - Expects the `injection` key as the first argument, and the `provided` value as the second.

  ```js
  import { createApp } from 'vue';

  const app = createApp({});

  // EX: app.provide(key, value);
  app.provide(/* key */ 'message', /* value */ 'hello!');
  ```

  > App-level **provides** are available to all components rendered in the app. This is especially useful when writing plugins, as plugins typically wouldn't be able to provide values using components.

#### Inject

- injection must be in a `child-relationship` component to the component that `provide` and can't be between neighbors components

```js
// in the lower component
export default {
  inject: ['message'],

  created() {
    console.log(this.message); // injected value
  },

  // Injections are resolved before the component's own state, so you can access injected properties in `data()`:
  data() {
    return {
      // initial data based on injected value
      fullMessage: this.message
    };
  }
};
```

---

## Slots

We have learned that components can accept `props`, which can be JavaScript values of any type. But how about **template content**? In some cases, we may want to pass a template fragment to a child component, and let the child component render the fragment within its own template.

> It allow parent-component to inject (dynamic-HTML-content) that can be received and rendered inside a child component

- The `<slot>` element is a slot outlet that indicates where the parent-provided slot content should be rendered.

  ![slots](./img/slots.png)

- Slot content is not just limited to text. It can be any valid template content.
- Slot content has access to the data scope of the **parent component**, because it is defined in the parent.
  - Slot content does not have access to the child component's data.

> **Notes**:
>
> - what is inside the slot will be the default value (**Fallback Content**)
>   ![default-slots](./img/slots2.png)
> - the scoped styles will affect the HTML markup in the child component as what in the slots is passed to the child component as a `HTML markup` and the data/properties/methods are not passed, so they won't be accessible in the child component

---

### named-slots

> **IT HAS TO BE ON A `<template>` TAGS**

![named-slots](./img/named-slot.png)

When a component accepts both a default slot and named slots, all top-level non-`<template>` nodes are implicitly treated as content for the default slot.

```html
<!-- in BaseLayout container -->
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>

  <!-- Fallback (default) Content -->
  <slot></slot>

  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

<!-- Using It -->
<BaseLayout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <!-- implicit default slot -->
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</BaseLayout>
```

#### Dynamic Slot Names

```html
<base-layout>
  <template v-slot:[dynamicSlotName]>...</template>

  <!-- with shorthand -->
  <template #[dynamicSlotName]>...</template>
</base-layout>
```

---

### Scoped Slots (slots with props)

It's a way for the child to pass data to a slot when rendering it from the parent component that uses this slot.
![v-slots](./img/vslots.svg)

- they alow a child component with a `<slot>` to pass data **up** to the parent that renders it

```html
<!-- In Child: MyComponent.vue -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>

<!-- In parent -->
<MyComponent v-slot="slotProps">{{ slotProps.text }} {{ slotProps.count }}</MyComponent>
```

- we can use any name for the prop object, not just `slotProps`
- we can use destructuring in v-slot:

  ```js
  <MyComponent v-slot='{ text, count }'>
    {{ text }} {{ count }}
  </MyComponent>
  ```

---

## Teleport Components

when using a **modal** try using [Teleport](https://vuejs.org/guide/built-ins/teleport.html)

> `<Teleport>` is a built-in component that allows us to "teleport" a part of a component's template into a DOM node that exists outside the DOM hierarchy of that component.

- With modals, Ideally, we want the modal's button and the modal itself to live within the same component, since they are both related to the open / close state of the modal. But that means the modal will be rendered alongside the button, deeply nested in the application's DOM hierarchy. This can create some tricky issues when positioning the modal via CSS.
- When using this component inside the initial HTML structure, there are a number of potential issues:
  - `position: fixed` only places the element relative to the viewport when no ancestor element has transform, perspective or filter property set.
  - The modal's **z-index** is constrained by its containing elements. If there is another element that overlaps with `<div class="outer">` and has a higher **z-index**, it would cover our modal.
- `<Teleport>` provides a clean way to work around these, by allowing us to break out of the nested DOM structure.

  ```html
  <button @click="open = true">Open Modal</button>

  <!-- The "to" target of <Teleport> expects a CSS selector string or an actual DOM node.  -->
  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
  ```

- **Notes:**
  - The teleport "**`to`**" target must be already in the DOM when the `<Teleport>` component is mounted. Ideally, this should be an element outside the entire Vue application. If targeting another element rendered by Vue, you need to make sure that element is mounted before the `<Teleport>`.
  - `<Teleport>` only alters the rendered DOM structure - it does not affect the logical hierarchy of the components. That is to say, if `<Teleport>` contains a component, that component will remain a logical child of the parent component containing the `<Teleport>`. Props passing and event emitting will continue to work the same way.

---

## Forms

### Binding input values

When dealing with forms on the frontend, we often need to sync the state of form input elements with corresponding state in JavaScript. It can be cumbersome to manually wire up value bindings and change event listeners

```html
<!-- instead of this -->
<input :value="text" @input="event => text = event.target.value" />

<!-- we do this -->
<input v-model="text" />
```

- Binding input values with `v-model` -> [v-model-2-way-binding](#v-model-2-way-binding)
- `v-model` will ignore the initial `value`, `checked` or `selected` attributes found on any form elements. It will always treat the current bound JavaScript state as the source of truth. You should declare the initial value on the JavaScript side, using the `data` option.
- when creating initial values for input elements in `data()`

  - number -> `null`
  - string -> `""`
  - dropDown-select (only one selection) -> `"one value from the options"`
  - checkboxes (multiple selections), ex: `radio buttons` -> Array `[]`

    - **Note:** we must also provide a `:value` binding so that we Vue can deal with multiple selections in the array and know what to select/selected

      ```html
      <input
        :id="organization"
        v-model="selectedOrganizations"
        :value="organization"
        type="checkbox"
      />
      ```

- single checkbox ex: `confirm to terms` -> `true/false`

- to use **buttons** in a form to select value, Use `type="button"` in the element

### Form Validation

- **manually**
  - for this you write conditions for the inputs either when finishing typing/selecting or when submitting the form
  - based on these conditions, you can show/hide different labels/modals and also change styles for input elements (ex: change border & text color to `red`)
  - **Tip**: you can use `.lazy` event modifier with large text area so that you don't annoy user when typing
- [VeeValidate](https://vee-validate.logaretm.com/v4/)
  - [VeeValidate2](https://www.section.io/engineering-education/form-validation-in-vue.js-using-veevalidate/)

---

## Modes and Environment Variables

### Modes

> There are three modes:
>
> - **development** is used by `vue-cli-service serve`
>   - for the developer writing additional code and enable some development features like: `hot-module-reloading(HMR)`
> - **test** is used by `vue-cli-service test:unit`
> - **production** is used by `vue-cli-service build` and `vue-cli-service test:e2e`
>   - for bundling the app into a single `.js` file and deploy the code on a server
>   - here also we can have other optimizations enabled like `speed`, `cache`

### Environment Variables

They help us whenever there's variation in our app that is due to the environment(Mode) that we're running, ex: main url

- we bundle up these kinds of configuration settings in a plain text files, and these files are just a collection of key-value pairs `KEY: VALUE`

  - we can have bunch of text-files in our code-base (one for development and other for production , .. test ).
  - then the `vue-cli` or the task-runner look for the corresponding file or key-value pairs based on the environment(Mode) we're on and load this file and allow that configuration file to store custom information pertaining to that environment, such as a `custom URL`

- `env` file names:

  - `.env` : loaded in all cases (apply to every environment)
  - `.env.local` : loaded in all cases, **ignored by git**
  - `.env.[mode]` : only loaded in specified mode --> ".env.development"
  - `.env.[mode].local` : only loaded in specified mode & **ignored by git**

- **Notes**:

- by default, node provide these properties that indicate the current Mode: `NODE_ENV`

  ```js
  process.env.NODE_ENV !== 'production';
  ```

  - only `NODE_ENV`, `BASE_URL`, and variables that start with **`VUE_APP`** will be statically embedded into the client bundle with `webpack.DefinePlugin`.

    - It is to avoid accidentally exposing a private key on the machine that could have the same name.
    - so don't forget to make the variable name start with `VUE_APP`

    ```sh
    VUE_APP_API_URL=http://localhost:3000
    ```

  - Don't forget to restart serve if it is currently running.

---

## Performance

### Loading data

To make the page loads with the data already loaded:

- instead of loading the data in the **created()** lifeCycle-hook, use -> **beforeRouteEnter()**
- for that you replace **this** with **vm**

---

### Code Splitting - Lazy Loading

> Usually in **router** file

- **Webpack Chunk**: a file that is separate from the bundle can still be loaded into the bundle

This is used to load components only when the page that contain the components is accessed

> **Lazy**: Don't do work(importing) until necessary

```js
// instead of this:
import a1 from '@/components/a1';
import a2 from '@/components/a2';
import b1 from '@/components/b1';
import b2 from '@/components/b2';

// use this:
const a1 = () => import('@/components/a1');
const a2 = () => import('@/components/a2');
const b1 = () => import('@/components/b1');
const b2 = () => import('@/components/b2');
```

#### Webpack Chunks

Same as above + you can group multiple imports in the same file for webpack

```js
const a1 = () => import(/* webpackChunkName: "file1" */ '@/components/a1');
const a2 = () => import(/* webpackChunkName: "file1" */ '@/components/a2');
```

---

## Progressive Web App PWA

[plugin-pwa](https://cli.vuejs.org/core-plugins/pwa.html)

---

## Plugins

Plugins are self-contained code that extract Vue code into their own reusable **modules**

> Typically used to add **app(global)-level functionality** to Vue app.

### Installing a plugin

```sh
vue add <name of the plugin>
```

- A plugin is defined as either an object that exposes an `install()` method, or simply a function that acts as the install function itself.

  - The `install()` function receives the app instance along with additional options passed to `app.use()`, if any:

  ```js
  import { createApp } from 'vue';

  const app = createApp({});

  const myPlugin = {
    install(app, options) {
      // configure the app
    }
  };
  ```

---

### Plugins use cases

common scenarios where plugins are useful include:

- Register one or more global components or custom directives with `app.component()` and `app.directive()`.
- Make a resource injectable throughout the app by calling `app.provide()`. --> [provide / inject](#provide--inject)
- Add some global instance properties or methods by attaching them to `app.config.globalProperties`.

  - EX: `$translate` function will take a string such as greetings.hello, look inside the user provided configuration and return the translated value.

    ```js
    // plugins/i18n.js
    export default {
      install: (app, options) => {
        // inject a globally available $translate() method
        app.config.globalProperties.$translate = key => {
          // retrieve a nested property in `options`
          // using `key` as the path
          return key.split('.').reduce((o, i) => {
            if (o) return o[i];
          }, options);
        };
      }
    };

    // main.js
    import i18nPlugin from './plugins/i18n';

    app.use(i18nPlugin, {
      greetings: {
        hello: 'Bonjour!'
      }
    });
    ```

- A library that needs to perform some combination of the above (e.g. **vue-router**).

> More on Plugins here -> [How to build your own VUE PLUGINS](https://www.youtube.com/watch?v=ar1fJECxbyU)

---

## Notes

- In Vue apps: Webpack is configured to replace **"@/path"** with **"src/path"**

  - This is done with Webpack `resolve.alias` configuration option and isn't specific to Vue.

    ```js
    // in webpack file
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          ...
          '@': path.resolve('src'),
        }
      },

    // The alias is used as:
    import '@/<path inside src folder>';
    ```

- only `methods` are written as object, but `data` and `lifecycle hooks` are written as `ES6-functions`

- when you want to change a property that is being rendered you should modify it and not create a new property -> to make vue **rerenders** it

  - Ex: array of items: you should use `splice` to remove item instead of using (filter as it will create new array)

- To fix **eslint** error :

  ```js
  // .eslintrc.js
  module.exports = {
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'vue/multi-word-component-names': 0
    }
  };
  ```

- in object properties Don't use `function` and use `arrow function` to prevent errors with (**this** keyword)
- In **methods**: don't use `arrow function`

  - this is also in http requests (`.then()`)

- You must mount the app **at last** to be able to use middleware

- **Methods** are functions that can be called as normal JS functions, but **computed properties** will be “re-calculated” anytime some data changes in the component.

- to use multiple classes:

```html
<p :class="["class1","class2","class3"]"></p>
```

- in `jsconfig.json` -> the **src** folder is aliased with `@` symbol

- **Hot Reloading**: is a feature that re-renders the vue app/component when code changes

- **Instances** vs **Components**
  ![Instances vs Components](./img/instances-vs-components.PNG)

  - Instances -> Are not reusable (connected to one place in the dom)
  - Components -> reusable

  - Yes, but it's better to use Vuex
  - Vuex state is mutable, hence we can directly create state variables and assign values to them. Redux uses Reducers, which are pure functions that take the previous state and action, and return the next state

- A change to Vue component's data (props or state) isn't immediately reflected in the DOM. Rather, **Vue updates DOM asynchronously**.

  - You can catch the moment when Vue updates DOM using `Vue.nextTick()`
  - A utility for waiting for the **next DOM update flush**.

  ```html
  <script>
    import { nextTick } from 'vue';

    export default {
      data() {
        return {
          count: 0
        };
      },
      methods: {
        async increment() {
          this.count++;

          // DOM not yet updated
          console.log(document.getElementById('counter').textContent); // 0

          await nextTick();
          // DOM is now updated
          console.log(document.getElementById('counter').textContent); // 1
        }
      }
    };
  </script>

  <template>
    <button id="counter" @click="increment">{{ count }}</button>
  </template>
  ```

- `v-once` and `v-pre`:
  ![v-pre](./img/v-pre.png)

  ```js
  <h1 v-pre>{{ data }}</h1> // outputs -> {{ data }}
  ```

- if you want to access the `data` object, you can use `$data`

  - this is sometimes useful for debugging

- Security Warning

  - Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to XSS(cross site scripting) vulnerabilities. Only use `v-html` on trusted content and never on user-provided content.
