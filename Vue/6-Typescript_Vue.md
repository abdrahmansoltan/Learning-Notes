# INDEX

- [INDEX](#index)
  - [Vue](#vue)
    - [Props](#props)
  - [Mock functions in Tests](#mock-functions-in-tests)
  - [Testing Vuex](#testing-vuex)
    - [Mutations](#mutations)
  - [Vuex](#vuex)
    - [Getters](#getters)
    - [Actions](#actions)
  - [Composition API](#composition-api)
    - [Ref](#ref)
    - [Vuex Composables (composition API)](#vuex-composables-composition-api)
    - [Vuex Composables Testing](#vuex-composables-testing)
    - [Typing useStore Composition Function](#typing-usestore-composition-function)
  - [Notes](#notes)

---

## Vue

### Props

use `PropType<T>` -> Used to annotate a prop with more **advanced types** when using runtime props declarations.

```ts
import { PropType } from "vue";

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
      required: true,
    },
  },
};
```

---

## Mock functions in Tests

Typescript may not recognize `jest.mock` method, in this case:

- When using mock-function we use **type-casting** to tell for its type which is `jest.Mock`

```ts
import getJobs from "@/api/getJobs";
jest.mock("@/api/getJobs");
const getJobsMock = getJobs as jest.Mock;
//....
beforeEach(() => {
  getJobsMock.mockResolvedValue([
    {
      id: 1,
      title: "Dev",
    },
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
import state from "@/store/state"; // the actual state
import { GlobalState } from "@/store/types"; // state-type/interface

export const createState = (config: Partial<GlobalState> = {}): GlobalState => {
  const initialState = state();
  return { ...initialState, ...config };
};

// to use it: -> in test file
import mutations from "@/store/mutations";
import { GlobalState } from "@/store/types";
import { createState } from "./utils";

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
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
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
  // here we use getters inside another getter
  [FILTERED_JOBS](state: GlobalState, getters: IncludeJobGetters) {
    return state.jobs
      .filter((job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job))
      .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job))
      .filter((job) => getters.INCLUDE_JOB_BY_DEGREE(job))
      .filter((job) => getters.INCLUDE_JOB_BY_SKILL(job));
  },
};
```

---

### Actions

we can create an interface for the **context** that has a method: **commit** which its type is imported from `Vuex`

```js
import { Commit } from "vuex";

interface Context {
  commit: Commit;
}
```

---

## Composition API

### Ref

when using refs, use **generic type**

```ts
import { ref } from "vue";
import type { Ref } from "vue";

const year: Ref<string | number> = ref("2020");

year.value = 2020; // ok!
```

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
import { useStore } from "vuex";
jest.mock("vuex");

const useStoreMock = useStore as jest.Mock;
```

---

### Typing useStore Composition Function

[Official Guide](https://vuex.vuejs.org/guide/typescript-support.html#typing-usestore-composition-function)

---

## Notes

- To utilize Typescript in a vue-component:
  - add a `lang = "ts"` attribute to the `<script>` tag.
  - import the `defineComponent` function from Vue and pass the component configuration object into it.
- When importing files, you may encounter an error because when compiling ts file it may think the file-imported in **.ts-extension** but it's **.vue**
  - So you may have to write `.vue` manually
- if you have an object-property that uses union-type `(unified | otherType)`, instead you can use optional property: `?`
- `this.$event` has a built-in type: `Event`
  - also the target is unknown for TS, but we know it's from the `input` element, so we use type-casting
  ```ts
  (event.target as HTMLInputElement).value;
  ```
