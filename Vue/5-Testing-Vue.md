## INDEX

- [INDEX](#index)
- [Jest with Vue](#jest-with-vue)
  - [problems of Jest for Vue](#problems-of-jest-for-vue)
  - [Solution: Testing Flow](#solution-testing-flow)
- [Installing](#installing)
  - [plugin](#plugin)
  - [Vue Test Utils](#vue-test-utils)
- [mount](#mount)
  - [Second parameter](#second-parameter)
  - [find() vs get()](#find-vs-get)
- [Events](#events)
- [Stubs and Shallow-Mount](#stubs-and-shallow-mount)
  - [Stub](#stub)
  - [Shallow-Mount](#shallow-mount)
  - [Router Mocking](#router-mocking)
    - [RouterLinkStub](#routerlinkstub)
    - [Mocking `$route` and `$router`](#mocking-route-and-router)
- [Testing Asynchronous Behavior](#testing-asynchronous-behavior)
  - [Telling Vue to rerender manually](#telling-vue-to-rerender-manually)
    - [flushPromises](#flushpromises)
  - [Async outside vue](#async-outside-vue)
- [Composable helper functions](#composable-helper-functions)
- [Testing Vuex](#testing-vuex)
  - [Testing getters](#testing-getters)
- [Testing with Composition-API](#testing-with-composition-api)

---

## Jest with Vue

### problems of Jest for Vue

- Doesn't run in the browser, runs in **node**
- Comes with its own environment built on top of JSDOM
- Doesn't understand Vue Component-files
- Limited Syntax

### Solution: Testing Flow

![flow](./img/testing-flow.PNG)

- Transformers need to be installed separately
  - **babel-jest**: to run js with latest syntax-features
  - **vue-jest**: Will compile **single-file-components** into Objects

You can use the [dependency](https://www.npmjs.com/package/vue-jest) or the [plugin](https://cli.vuejs.org/core-plugins/unit-jest.html)

---

## Installing

### plugin

![plugin](./img/jest-plugin.PNG)

### Vue Test Utils

It is a set of utility functions aimed to simplify testing Vue.js components. It provides some methods to **mount** and **interact** with Vue components in an isolated manner.

---

## mount

| mount                                                                                                                                                                                                    | shallowMount                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| takes the Vue component as a first argument and returns its vue instance along with some helper which is used to interact with a component instance like set `props`, `slots` , `trigger` `clicks`, etc. | also works similar to the `mount` method the main difference is **shallowMount doesn’t render child components** so that it allows us to test the component in isolation to make sure that child components are not included in the test. |

- `.toMatch` -> checks for a text within another piece of text (check that a string matches a regular expression)

### Second parameter

the second parameter of **mount** creates an object to modify data in the component

> Another way is to use the **setData()** method, the different here that it's Asynchronous method so the test will run first before it finishes, wo we should make the test-callbackFunction Async and also to await the setData-method

---

### find() vs get()

- **find**: Returns Wrapper of first DOM node or Vue component matching selector.
  - if item doesn't exist it will return **Undefined**, so the test won't fail
  - You should use find when searching for an element that may not exist.
- **get**: Works just like find **but will throw an error** if nothing matching the given selector is found, So the test will fail.
  - You should use this method when getting an element that should exist and it will provide a nice error message if that is not the case.

> Try to use **attributes** when finding elements/components instead of (element-selector or class/id )
> EX: `.find(["data-test=navbar"])`

- **findComponent**: It returns Wrapper of first matching Vue component, use it with:
  - [routerlinkstub](#routerlinkstub)
  - any component

---

## Events

- `trigger("click")` -> simulate a click event

---

## Stubs and Shallow-Mount

### Stub

**Stub**: is a **replacement to an existing implementation of a custom component** with a dummy component that doesn't do anything at all, which can simplify an otherwise complex test.

- We can use it to simplify tests by focusing on the component under test.
- A common examples is when you:
  - would like to test something in a component that appears very high in the component hierarchy -> **component with a lot of nested children**.
  - The component you are testing uses a **global component**

```js
test("stubs component with custom template", () => {
  const wrapper = mount(App, {
    global: {
      stubs: {
        // instead of doing a fetch
        FetchDataFromApi: {
          template: "<span />",
        },
      },
    },
  });

  console.log(wrapper.html());
  // <h1>Welcome to Vue.js 3</h1><span></span>

  expect(wrapper.html()).toContain("Welcome to Vue.js 3");
});
```

---

### Shallow-Mount

shallow are focused on a specific component. shallow can be useful for testing advanced components in complete isolation. If you just have one or two components that are not relevant to your tests, consider using mount in combination with stubs instead of shallow. **The more you stub, the less production-like your test becomes.**

- shallow mounting option that will automatically stub out all the child components:

  ```js
  test("shallow stubs out all child components", () => {
    const wrapper = mount(ComplexComponent, {
      shallow: true,
    });

    console.log(wrapper.html());
    /*
      <h1>Welcome to Vue.js 3</h1>
      <complex-a-stub></complex-a-stub>
      <complex-b-stub></complex-b-stub>
      <complex-c-stub></complex-c-stub>
    */
  });
  ```

---

### Router Mocking

#### RouterLinkStub

A component to stub the Vue Router router-link component.

> - `<router-link>` and `<router-vue>` are registered as global-components, So our tests don't understand where they are coming from.
> - As the router is in the upper level of the app and in testing each component is tested isolated, so we use stub to replace the router

- You can use this component to find a router-link component in the render tree.

```js
import { mount, RouterLinkStub } from "@vue/test-utils";

const wrapper = mount(Component, {
  stubs: {
    RouterLink: RouterLinkStub,
  },
});
expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/some/path");
```

> **Note**: You can use a beforeEach for if you are testing router-link multiple times or you can create a helper-function (factory-function):

```js
// factory-function
const createConfig = () => ({
  global: {
    stubs: {
      "router-link": RouterLinkStub,
    },
  },
});

// code
const wrapper = mount(Component, createConfig());
```

---

#### Mocking `$route` and `$router`

Sometimes you want to test that a component does something with parameters from the `$route` and `$router` objects. To do that, you can pass custom mocks to the Vue instance.

```js
import { shallowMount } from "@vue/test-utils";

const $route = {
  path: "/some/path",
};

const wrapper = shallowMount(Component, {
  mocks: {
    $route, // ES6-object-property
  },
});

wrapper.vm.$route.path; // /some/path
```

> You also can use a helper-function if you are using it multiple times

---

## Testing Asynchronous Behavior

There are two types of asynchronous behavior you will encounter in your tests:

1. Updates applied by Vue
2. Asynchronous behavior outside of Vue (ex: `promises`)

---

### Telling Vue to rerender manually

> A nice rule to follow is to
>
> - always await on mutations like **trigger** or **setProps**.
> - If your code relies on something async, like calling axios, add an **await** to the **flushPromises** call as well.

in tests, when you mount the component then do an action that should (make vue rerenders the component), it doesn't do so as you should here tell it manually to do so using **vm** and **nextTick**

```js
button.trigger("click");
await Vue.nextTick();

// It's the same as this:
await button.trigger("click");
```

---

#### flushPromises

It flushes all pending resolved promise handlers.

> makes all promises resolve then go to next line

```js
import { shallowMount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import Foo from "./Foo";
jest.mock("axios");

it("fetches async when a button is clicked", async () => {
  const wrapper = shallowMount(Foo);
  wrapper.find("button").trigger("click");
  await flushPromises();
  expect(wrapper.text()).toBe("value");
});
```

---

### Async outside vue

One of the most common asynchronous behaviors outside of Vue is API calls in **Vuex actions**. The following examples shows how to test a method that makes an API call.

```js
import { shallowMount } from "@vue/test-utils";
import Foo from "./Foo"; // the component
jest.mock("axios", () => ({
  get: Promise.resolve("value"),
}));

// This test currently fails because the assertion is called before the promise in (fetchResults) resolves.
it("fetches async when a button is clicked", () => {
  const wrapper = shallowMount(Foo);
  wrapper.find("button").trigger("click");
  expect(wrapper.text()).toBe("value");
});

// solution: We can use done in combination with $nextTick or setTimeout to ensure any promises are settled before the assertion is made.
it("fetches async when a button is clicked", (done) => {
  const wrapper = shallowMount(Foo);
  wrapper.find("button").trigger("click");
  wrapper.vm.$nextTick(() => {
    expect(wrapper.text()).toBe("value");
    done();
  });
});
```

---

## Composable helper functions

When using **Route, Router, Vuex, ..**, each time you have to initiate the thing you are using with tools like `useRouter` and others and then use **computed** function to get reactive value from them -> So you can move them to individual helper functions than can be used multiple times

```js
import { computed } from "vue";
import { useRoute } from "vue-router";

const useConfirmRoute = (routeName: any) => {
  const route = useRoute();
  return computed(() => route.name === routeName);
};

export default useConfirmRoute;
```

---

## Testing Vuex

There's 2 methods:

- Testing with a Real Vuex Store
- Testing with a Mock Store

### Testing getters

![getters](./img/test-getters.PNG)

---

## Testing with Composition-API

here when you use Router, Vuex or other outer objects, now you have to **mock** them like with **axios** instead of just mocking the `$router` object in the Options-API
