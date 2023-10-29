# INDEX

- [INDEX](#index)
  - [Typescript with the DOM](#typescript-with-the-dom)
  - [HTMLElement](#htmlelement)
    - [Dealing with `null` (Non-Null Assertion Operator)](#dealing-with-null-non-null-assertion-operator)
    - [Type-Assertion or Generics for HTML elements types](#type-assertion-or-generics-for-html-elements-types)
  - [Events](#events)

---

## Typescript with the DOM

- TypeScript includes a default set of type definitions for built-in JS APIs (like `Math`), as well as type definitions for things found in browser environments (like **document**).

  - TypeScript also includes APIs for newer JS features matching the target you specify; for example the definition for `Map` is available if target is `ES6` or newer.

- If your program doesn’t run in a browser, so you don’t want the `"dom"` type definitions

- But if you want to add to the `lib`, You need to add the `dom` in order to include types for browser environment (`document` object)

  - when using typescript with DOM elements, we should add it to the configuration file in `lib`:

    - > By default it includes the DOM environment

    ```json
    {
      "compilerOptions": {
        "lib": ["ES2018", "DOM"]
      }
    }
    ```

---

## HTMLElement

when querying the DOM, the type of element is usually `HTMLElement`, but it call also be `null` if the element is not found

- Typescript **infers** the type of the element by default ant it's -> `HTMLElement | null`
- The type `HTMLElement` is **inferred** from the return value of DOM querying methods like: `getElementById`
  - this is the case if you aren't using `strict null checks`.
  - If you are enforcing `strict null checks` you will find the return type of `getElementById` has changed from `HTMLElement` to `HTMLElement | null`.
    - The change makes the type more correct, because you don't always find an element.

So when using type mode, you will be encouraged by the compiler to use a type assertion to ensure you found an element. Like this:

---

### Dealing with `null` (Non-Null Assertion Operator)

The post-fix expression operator (`!`) may be used to assert that its operand cannot be `null` or `undefined` during runtime.

- The non-null assertion operator is a concise way of avoiding unnecessary `null` and `undefined` checks in our code. We should only use this when we definitely know the variable or expression can't be `null` or `undefined`.
  - It tells Typescript not to worry as this is guaranteed not to be `null`

For `HTMLElement`:

```ts
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {}); // ❌ Typescript will complain that btn could be of type null

// Solution 1: Using Optional chaining
const btn = document.getElementById('btn');
btn?.addEventListener('click', () => {}); // ✅

// Solution 2: Using Non-Null Assertion Operator
const btn = document.getElementById('btn')!;
btn.addEventListener('click', () => {}); // ✅
```

---

### Type-Assertion or Generics for HTML elements types

- Image element

  ```ts
  // Typescript infers a type of HTML Element
  const myPic = document.querySelector('profile-image');

  // But we know a more specific type, so we assert it
  const myPic = document.querySelector('profile-image') as HTMLImageElement;
  ```

- Input element

  ```ts
  // Typescript infers a type of HTMLElement
  const input = document.querySelector('todo-input');
  btn.addEventListener('click', () => {
    console.log(input.value); // ❌
    console.log((input as HTMLInputElement).value); // ✅
  });

  // or with generics
  const input = document.querySelector<HTMLInputElement>('todo-input')!;
  btn.addEventListener('click', () => {
    console.log(input.value); // ✅
  });
  ```

---

## Events

We don't have to annotate events types when using events as typescript can figure out its type, ex: `SubmitEvent` and that is only if the event-handler function is written inline and not external

```ts
btn.addEventListener('click', () => {
  /* event will be correctly typed automatically! */
});

// -----------------------------------------------------

handleSubmit = (e): void => {
  e.preventDefault();
};
btn.addEventListener('click', onChange); // ❌

// -----------------------------------------------------

// typing on RIGHT hand side of =
handleSubmit = (e: SubmitEvent): void => {
  e.preventDefault();
};
btn.addEventListener('click', handleSubmit); // ✅
```
