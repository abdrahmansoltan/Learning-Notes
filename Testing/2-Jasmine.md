# INDEX

- [INDEX](#index)
  - [Configuring](#configuring)
    - [Installation](#installation)
  - [Jasmine Syntax](#jasmine-syntax)
  - [Testing Asynchronous Code](#testing-asynchronous-code)
    - [Using async/await](#using-asyncawait)
    - [Using promise](#using-promise)
    - [Testing promise resolution and rejection](#testing-promise-resolution-and-rejection)

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

- In the `tsconfig.json` file, add "`spec`" to the list of folders that we want to exclude as it doesn't has `ts` files it it

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
