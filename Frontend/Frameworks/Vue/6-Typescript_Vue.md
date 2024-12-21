# INDEX

- [INDEX](#index)
  - [Vue](#vue)
    - [Props](#props)
    - [Typing Provide / Inject](#typing-provide--inject)
  - [Mock functions in Tests](#mock-functions-in-tests)
  - [Testing Vuex](#testing-vuex)
    - [Mutations](#mutations)
  - [Vuex](#vuex)
    - [State](#state)
    - [Getters](#getters)
    - [Actions](#actions)
  - [Composition API](#composition-api)
    - [Ref](#ref)
    - [`useStore` with Typescript](#usestore-with-typescript)
    - [Vuex Composables (composition API)](#vuex-composables-composition-api)
    - [Vuex Composables Testing](#vuex-composables-testing)
    - [Typing useStore Composition Function](#typing-usestore-composition-function)
  - [Notes](#notes)

---

## Vue

### Props

use `PropType<T>` -> Used to annotate a prop with more **advanced types** when using runtime props declarations.

```ts
import { PropType } from 'vue';

interface Book {
  title: string;
  author: string;
  year: number;
}

export default {
  props: {
    book: {
      // provide more specific type to `Object`
      type: Object as PropType<Book>,
      required: true
    },
    uniqueValues: {
      type: Set as PropType<Set<string>>,
      required: true
    }
  }
};
```

---

### Typing Provide / Inject

> Using provide/inject in your production app automatically forces you to use TypeScript. You and your teammates won’t memorize what each injection will give you.

- Problems of not using Typescript with provide/inject:

  - Let's say your teammates worked on the user cart feature, and just added it to the project. You are using JavaScript in that project. You want to use that injection to display the product count. For example:

    ```vue
    <template>
      <p>You have {{ cart.items.length }} in your cart</p>
    </template>
    <script setup>
    import { inject } from 'vue';
    import { USER_CART_KEY } from '@/injectionKeys';
    const cart = inject(USER_CART_KEY);
    // does `cart.items` actually exist?
    // what if the injected user cart is the array itself?
    </script>
    ```

    - Even though you are using constant keys to refer to your injection, it has 0 information about the injection value itself. It can be anything.
    - So you will be forced to hunt down the `provide(USER_CART, ...)` line in your codebase to figure out what is being injected. From a productivity concern, this is a nightmare and If you plan to use them a lot in your project it will backfire and waste a lot of your time figuring stuff out. Honestly, if you want to use injections in your project use TypeScript or don’t use them.

- So how to use TypeScript with injections?

  - Vue exposes a type called `InjectionKey<TValue>` which magically lets `provide/inject` infer and check the type of the values passed around. Here is a simple example:

    ```ts
    // types.ts
    interface UserCartContext {
      items: CartItem[];
      total: number;
    }
    // injectionKeys.ts
    import { InjectionKey } from 'vue';
    import { UserCartContext } from '@/types';
    const CART_KEY: InjectionKey<UserCartContext> = Symbol('User Cart Context');
    ```

  - This will give you type checks at both the provide and inject levels, which is not something you should give up.

    ```ts
    import { provide, inject, reactive } from 'vue';
    import { CART_KEY } from '@/injectionKeys';
    // ❌ Type Error
    provide(CART_KEY, {});
    const cart = reactive({ items: [], total: 0 });
    // ✅
    provide(CART_KEY, cart);

    const cart = inject(CART_KEY);
    // ❌ Type Error
    cart?.map(...);
    // ✅
    cart?.items.map(...)
    ```

- Provide and inject are usually performed in separate components. To properly type injected values, Vue provides an `InjectionKey` interface, which is a generic type that extends `Symbol`. It can be used to sync the type of the injected value between the provider and the consumer:

  ```ts
  import { provide, inject } from 'vue';
  import type { InjectionKey } from 'vue';

  const key = Symbol() as InjectionKey<string>;

  provide(key, 'foo'); // providing non-string value will result in error ⚠️

  const foo = inject(key); // type of foo: string | undefined
  ```

- When using string injection keys, the type of the injected value will be unknown, and needs to be explicitly declared via a `generic` type argument:

  ```ts
  const foo = inject < string > 'foo'; // type: string | undefined

  // and with a default value will only be string
  const foo = inject<string>('foo', 'default'); // type: string
  ```

- If you are sure that the value is always provided, you can also force **cast** the value:

  ```ts
  const foo = inject('foo') as string;
  ```

---

## Mock functions in Tests

Typescript may not recognize `jest.mock` method, in this case:

- When using mock-function we use **type-casting** to tell for its type which is `jest.Mock`

```ts
import getJobs from '@/api/getJobs';
jest.mock('@/api/getJobs');
const getJobsMock = getJobs as jest.Mock;
//....
beforeEach(() => {
  getJobsMock.mockResolvedValue([
    {
      id: 1,
      title: 'Dev'
    }
  ]);
});
```

---

## Testing Vuex

### Mutations

In mutations, we have to access the store's state when invoking a mutation-function

- in Testing: when using initial dummy state for vuex, use **partial-type**
- also we can create factory-functions to help us with reaching the state in tests

```ts
// Utils.ts
import state from '@/store/state'; // the actual state
import { GlobalState } from '@/store/types'; // state-type/interface

export const createState = (config: Partial<GlobalState> = {}): GlobalState => {
  const initialState = state();
  return { ...initialState, ...config };
};

// to use it: -> in test file
import mutations from '@/store/mutations';
import { GlobalState } from '@/store/types';
import { createState } from './utils';

describe('mutations', () => {
  describe('LOGIN_USER', () => {
    it('logs the user in', () => {
      //const state = { isLoggedIn: false } as GlobalState; // -> wrong
      //const startingState = state();
      const startingState = createState({ isLoggedIn: false });
      mutations.LOGIN_USER(startingState);
      expect(startingState.isLoggedIn).toBe(true);
    });
  });
});
```

---

## Vuex

### State

We can use an interface to define complex object types such as (Vuex store state) -> **`GlobalState`**

```ts
interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  selectedOrganizations: string[];
  selectedJobTypes: string[];
}
```

### Getters

when calling another getters inside of a getter, we can use interface to define the getters inside like here:

```ts
interface IncludeJobGetters {
  INCLUDE_JOB_BY_ORGANIZATION: (job: Job) => boolean;
  INCLUDE_JOB_BY_JOB_TYPE: (job: Job) => boolean;
  INCLUDE_JOB_BY_DEGREE: (job: Job) => boolean;
  INCLUDE_JOB_BY_SKILL: (job: Job) => boolean;
}

const getters = {
  [UNIQUE_ORGANIZATIONS](state: GlobalState) {
    const uniqueOrganizations = new Set<string>();
    state.jobs.forEach(job => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
  // here we use getters inside another getter
  [FILTERED_JOBS](state: GlobalState, getters: IncludeJobGetters) {
    return state.jobs
      .filter(job => getters.INCLUDE_JOB_BY_ORGANIZATION(job))
      .filter(job => getters.INCLUDE_JOB_BY_JOB_TYPE(job))
      .filter(job => getters.INCLUDE_JOB_BY_DEGREE(job))
      .filter(job => getters.INCLUDE_JOB_BY_SKILL(job));
  }
};
```

---

### Actions

we can create an interface for the **context** that has a method: **commit** which its type is imported from `Vuex`

```js
import { Commit } from 'vuex';

interface Context {
  commit: Commit;
}
```

---

## Composition API

### Ref

when using refs, use **generic type**

```ts
import { ref } from 'vue';
import type { Ref } from 'vue';

const year: Ref<string | number> = ref('2020');

year.value = 2020; // ok!
```

---

### `useStore` with Typescript

To enable type checking for the Vuex store, create a **key**. we must configure it in the file where we connect the vue app to Vuex. We must pass it to every invocation of the `useStore` composable function

- find instructions here [typing-usestore-composition-function](https://vuex.vuejs.org/guide/typescript-support.html#typing-usestore-composition-function)

---

### Vuex Composables (composition API)

- When using `computed` function, it takes a **type-generic argument** of what will be returned (the reactive value)

```ts
export const useFilteredJobs = () => {
  const store = useStore(key);
  // Here
  return computed<Job[]>(() => store.getters[FILTERED_JOBS]);
};
```

---

### Vuex Composables Testing

here we use type-casting with the function-mocked

```ts
import { useStore } from 'vuex';
jest.mock('vuex');

const useStoreMock = useStore as jest.Mock;
```

---

### Typing useStore Composition Function

[Official Guide](https://vuex.vuejs.org/guide/typescript-support.html#typing-usestore-composition-function)

---

## Notes

- To utilize Typescript in a vue-component:
  1. add a `lang = "ts"` attribute to the `<script>` tag.
  2. import the `defineComponent` function from `vue` and pass the component configuration object into it.
- When importing files, you may encounter an error because when compiling ts file it may think the file-imported in **.ts-extension** but it's **.vue**
  - So you may have to write `.vue` manually
- if you have an object-property that uses union-type `(unified | otherType)`, instead you can use optional property: `?`
- `this.$event` has a built-in type: `Event`

  - also the target is unknown for TS, but we know it's from the `input` element, so we use type-casting

    ```ts
    (event.target as HTMLInputElement).value;
    ```

- There're types for functions from external libraries like **axios**, and Typescript requires that their methods accept a generic type-argument that represent the response type

  ```ts
  const response = await axios.get<Job[]>(`${baseUrl}/jobs`);
  ```
