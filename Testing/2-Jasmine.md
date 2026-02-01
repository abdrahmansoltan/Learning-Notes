# INDEX

- [INDEX](#index)
  - [Jasmine](#jasmine)
  - [Configuring](#configuring)
    - [Installation](#installation)
  - [Jasmine Syntax](#jasmine-syntax)
  - [Testing examples and tips](#testing-examples-and-tips)
    - [Testing classes](#testing-classes)
  - [Testing Asynchronous Code](#testing-asynchronous-code)
    - [Using async/await](#using-asyncawait)
    - [Using promise](#using-promise)
    - [Testing promise resolution and rejection](#testing-promise-resolution-and-rejection)

---

## Jasmine

It's a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

- Even though it comes with a test runner, you can also run Jasmine tests using other test runners like **Karma**, that can be integrated with build tools and CI/CD pipelines.

---

## Configuring

### Installation

- bash

  ```bash
  npm i jasmine

  # Add a reporter for outputting Jasmine results to the terminal
  npm i jasmine-spec-reporter

  # Add type definitions for Jasmine
  npm i --save-dev @types/jasmine
  ```

- json

  ```json
  "scripts": {
    "build" : "npx tsc",
    "jasmine": "jasmine",
    "test": "npm run build && npm run jasmine" // this will ensures that (build) commend is ran first then (jasmin) commend
  },
  ```

- File Structure

  ```bash
  ├── node_modules
  ├── spec
  │      └── support
  │           └── jasmine.json
  ├── src
  │     ├──  tests
  │     │     ├── helpers
  │     │     │      └── reporter.ts
  │     │     └── indexSpec.ts
  │     └── index.ts
  ├── package-lock.json
  ├── package.json
  └── tsconfig.json
  ```

- configure the reporter to display Jasmine results to your terminal application -> [reporter.ts](../1-Backend%20Development%20with%20Node.js/Configuring%20Jasmine/reporter.ts)

- configurations for a basic Jasmine configuration -> [jasmine.json](../1-Backend%20Development%20with%20Node.js/Configuring%20Jasmine/jasmine.json)

- In the `tsconfig.json` file, add "`spec`" to the list of folders that we want to exclude as it doesn't have `ts` files it it

  ```json
    "exclude": ["node_modules", "./dist", "spec"]
  ```

- we write the tests in `indexSpec.ts` file

---

## Jasmine Syntax

- Use the `describe` keyword followed by a short description of what the suite is testing and one or more specs.
- A best practice is to start a sentence with `“it”` and then complete the sentence with the description of what the suite is testing.

  ```js
  describe('suite description', () => {
    it('describes the spec', () => {
      const myVar = true;
      expect(myVar).toBe(true);
    });
  });
  ```

---

## Testing examples and tips

### Testing classes

When testing classes, each spec should test an **isolated piece of functionality**. This means each spec creates its own instance of the class and invokes **only one** method to test it.

Let's say we have a `Counter` class with one property and two methods:

```ts
export class Counter {
  counter = 0; // A class property

  increment() {
    // A method to increment the value
    this.counter++;
  }

  decrement() {
    // A method to decrement the value
    this.counter--;
  }
}
```

**What to test?**
We want to make sure that the `increment()` method increments the counter by one, and the `decrement()` method decrements it by one.

#### First Attempt - Code Duplication

```ts
import { Counter } from './counter';

describe('Counter', () => {
  it('should increment the counter by 1', () => {
    let cnt = new Counter(); // Create instance
    cnt.increment(); // Invoke method
    expect(cnt.counter).toBe(1); // Assert result
  });

  it('should decrement the counter by 1', () => {
    let cnt = new Counter(); // Create instance again (duplication!)
    cnt.decrement(); // Invoke method
    expect(cnt.counter).toBe(-1); // Assert result
  });
});
```

This works, but we have **code duplication**—we're creating a new `Counter` instance in each spec.

#### Second Attempt - Moving Instantiation Outside ❌ Wrong

Let's try to remove the duplication by creating the instance once outside the specs:

```ts
import { Counter } from './counter';

describe('Counter', () => {
  let cnt = new Counter(); // Instantiate Counter before the specs

  it('should increment the counter by 1', () => {
    cnt.increment();
    expect(cnt.counter).toBe(1); // ✓ Pass: counter is 1
  });

  it('should decrement the counter by 1', () => {
    cnt.decrement();
    expect(cnt.counter).toBe(-1); // ✗ Fail: counter is 0, not -1!
  });
});
```

**Why does this fail?**
Because the test suite creates **one instance** of `Counter`, and the first spec changes the counter value to `1`. When the second spec runs, it expects the counter to be `-1`, but it's actually `0` (because it decremented from `1` to `0`).

**The problem:** The specs are **not isolated**—they share the same instance and affect each other!

#### Correct Approach - Using `beforeEach()` ✓

The solution is to use Jasmine's `beforeEach()` function to create a **fresh instance** before each spec:

```ts
import { Counter } from './counter';

describe('Counter', () => {
  let cnt: Counter;

  beforeEach(() => (cnt = new Counter())); // Create fresh instance before each spec

  it('should increment the counter by 1', () => {
    cnt.increment();
    expect(cnt.counter).toBe(1); // ✓ Pass: counter is 1
  });

  it('should decrement the counter by 1', () => {
    cnt.decrement();
    expect(cnt.counter).toBe(-1); // ✓ Pass: counter is -1 (from fresh instance)
  });
});
```

**Why this works:**
Now Jasmine creates a **new instance** of `Counter` before running each spec. Each spec starts with a fresh `counter = 0`, ensuring they're completely isolated from each other.

**Key Takeaway:** Always use `beforeEach()` to set up a fresh state for each spec, ensuring tests don't interfere with each other.

---

## Testing Asynchronous Code

The key to testing async code is letting Jasmine know `when` it’s ready to be tested.

### Using async/await

- Add async before the asynchronous function call
- Add await before the return
- Testing occurs after the return

```js
it('expects asyncFun () result to equal value', async () => {
  const result = await asyncFun();
  expect(result).toEqual(value);
});
```

### Using promise

- Promise values are included in the return statement
- Test is run in the .then() statement that is chained to the return value

```js
it('expects asyncFunc result to equal value', ()
=> {
   return asyncFunc (). then ( result => {
       expect (result).toEqual (value);
   });
});
```

### Testing promise resolution and rejection

- `.toBeResolved()` tests if a promise is resolved and will return true if the promise is resolved

- `.toBeRejected()` tests if a promise is rejected and will return true if the promise is rejected

- `.toBeRejectedWith(expected value)` tests if the expected error is returned

---
