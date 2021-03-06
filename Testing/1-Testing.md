## INDEX

- [INDEX](#index)
- [Testing](#testing)
  - [Testing Pyramid](#testing-pyramid)
  - [Snapshot Testing](#snapshot-testing)
  - [Sanity Test](#sanity-test)
  - [(AAA) Pattern](#aaa-pattern)
  - [BDD vs TDD](#bdd-vs-tdd)
    - [Behavior Driven Development (BDD)](#behavior-driven-development-bdd)
    - [Test-Driven Development (TDD)](#test-driven-development-tdd)
  - [Test Design Best Practices](#test-design-best-practices)
  - [Testing Setup](#testing-setup)
- [Suites and Specs](#suites-and-specs)
  - [Matchers](#matchers)
    - [Comparisons](#comparisons)
    - [Truthiness](#truthiness)
    - [Numerical Matchers](#numerical-matchers)
    - [Negating](#negating)
    - [Exceptions (error handling)](#exceptions-error-handling)
    - [othermatchers](#othermatchers)
- [Backend: Endpoint Testing (HTTP assertions)](#backend-endpoint-testing-http-assertions)
  - [Framework for Endpoint Testing](#framework-for-endpoint-testing)
- [Testing Hooks](#testing-hooks)
  - [Teardown of Suites](#teardown-of-suites)
  - [`beforeEach` and `afterEach`](#beforeeach-and-aftereach)
  - [`beforeAll` and `afterAll`](#beforeall-and-afterall)
  - [Skipping or Specifying Tests](#skipping-or-specifying-tests)
- [Spies & Mocks (SideEffects)](#spies--mocks-sideeffects)
  - [Spies](#spies)
  - [Mock Testing](#mock-testing)

---

## Testing

**Testing**: is the process of checking that an application is functioning as expected

- 2 Types of tests:

  - Manual
  - Automated

- `Unit tests` test individual pieces of code.

  ![unit-test](./img/unit-test.PNG)

### Testing Pyramid

![Testing Pyramid](./img/Testing%20Pyramid.PNG)

- Jasmine works well with `Unit Testing` and `Integration Testing`.

  - the difference between Unit Testing and Integration Testing is the use of third-party integration.

- Jasmine/Jest can be used for `End-to-End Testing` with a tool call `Selenium` to emulate user interactions.

### Snapshot Testing

- Snapshot tests assert that the current output is same as the output before.
- The main difference between snapshot testing and functional/unit tests is, snapshot tests never assert the correct behavior of the application functionality but does an output comparison instead.

### Sanity Test

is just a casual term to mean that you're testing/confirming/validating something that should follow very clear and simple logic. It's asking someone else to confirm that you are not **insane** and that what seems to make sense to you also makes sense to them

- Usually at the beginning of the testing process

```js
expect(true).toBe(true);
```

---

### (AAA) Pattern

**Arrange** - **Act** - **Assert**

![aaa](./img/aaa.JPG)
![aaa](./img/aaa2.png)

---

### BDD vs TDD

#### Behavior Driven Development (BDD)

- tests are focused on how the `user` interacts with the application
- A development style built on `Test Driven Development` where the focus is **user interaction and stakeholders**.
- `Jasmine` is recognized as a Behavior Driven Development testing framework.

#### Test-Driven Development (TDD)

- A development style where tests are written `before` development
- It focuses on writing unit and integration tests that produce expected results.
- Test Driven Development Cycle

  ![alt](./img/tdd2.png)
  ![alt](./img/tdd.png)
  ![alt](./img/TDD3.PNG)

  > Refactor here is for the code-implementation to find more optimized solution, and **not refactor the test**

---

### Test Design Best Practices

- Test file structure and file names should match the app.
- Describe and name the tests to be easy to read and maintain.
- Write short tests that allow you to pinpoint why the test is failing.
  - write tests with an `object` with data that `should pass` and test each value in the object.
  - Try this again with an object with data that should `fail`
- Tests should only fail when there are bugs in the tested code.

---

### Testing Setup

![test-setup](./img/test-setup.PNG)

---

## Suites and Specs

- `Spec`: an individual test
- `Suite`: a collection of similar tests related to one function

![spec](./img/spec.PNG)

---

### Matchers

#### Comparisons

- `.toEqual(expected value)` -> checks if the tested object is the same object
  - it's like `==`
- `toBe()(expected value)` -> checks if the tested object is the same object (same location in memory)
  - it's like `===`

#### Truthiness

![alt](./img/truthness.PNG)

#### Numerical Matchers

- `.toBeCloseTo(expected value, precision)`
  - Passes if a value is within a specified `precision` of the expected value
  - `precision` is optional and is represented the number of decimal points to check (defaults to 2)
- .toBeGreaterThan(expected value)
- .toBeLessThan(expected value)
- .toBeGreaterThanOrEqual(expected value)
- .toBeLessThanOrEqual(expected value)

#### Negating

![alt](./img/Negating.PNG)

#### Exceptions (error handling)

- `.toThrow(expected value)`
- `.toThrowError(expected value, expected message`

- expected value and expected message are optional

#### othermatchers

- `.toContain(expected value)`
- `.toMatch(expected value)`
- `.toBeDefined()`
- `.toBeUndefined()`
- `.toBeNull()`
- `.toBeNan()`

---

## Backend: Endpoint Testing (HTTP assertions)

- `endpoint`

  - is the `URL` of the REST API with the method that (gets, adds to, or modifies) the data of an API in some way.

- Benefits of Endpoint Testing

  - Confirms that the server is working.
  - Confirms that endpoints are configured properly.
  - More efficient than manual testing.

### Framework for Endpoint Testing

- [Supertest](https://www.npmjs.com/package/supertest)
  - tests the status of responses from servers.

```bash
# here we install it as a dependency as it's done after combiling from TS to JS
npm i supertest

npm i --save-dev @types/supertest  #  compile without TypeScript errors.
```

- ex

```ts
import supertest from "supertest"; // the module
import app from "../index"; // the file that have the server code

const request = supertest(app); // telling supertest where the server is

describe("Test endpoint responses", () => {
  it("gets the api endpoint", async (doneCallback) => {
    const response = await request.get("/api");
    expect(response.status).toBe(200); // success code
    doneCallback(); // it tells supertest to close the server-calling
  });
});
```

---

## Testing Hooks

### Teardown of Suites

- These Jasmine features allow you to

  - Connect to a `database` before a test
  - Connect to a different database for specific tests
  - Run only a specific test
  - Skip one or more tests

### `beforeEach` and `afterEach`

- `beforeEach` takes a callback function where we can tell the test to perform a task before each test is run.

- `afterEach` is used if there is a task to be run after each test is complete.

  ![alt](./img/before-each-and-after-each.jpg)

  ```js
  describe("", () => {
    beforeEach(function () {
      // callback function
      foo = 1;
    });

    it("", () => {
      expect(foo).toEqual(1);
      foo += 1;
    });

    it("", () => {
      expect(foo).toEqual(2);
    });
  });
  ```

### `beforeAll` and `afterAll`

- perform an operation once before/after **all the specs** in a suite

  ![alt](./img/beforeall-and-afterall.jpg)

- Handling Multiple Suites with `beforeAll` and `afterAll`

  ![alt](./img/muliple.jpg)

---

### Skipping or Specifying Tests

![Skipping](./img/Skipping.PNG)

Here the idea is to eliminate any **pollution** (any test that affect the result of another test)

```js
xdescribe("A spec", function () {
  it("is just a function, so it can contain any code", () => {
    expect(foo).toEqual(1);
  });
});

fdescribe("A spec", function () {
  it("is just a function, so it can contain any code", () => {
    expect(foo).toEqual(1);
  });
});
```

---

## Spies & Mocks (SideEffects)

![spies-mocks](./img/spies-mocks.PNG)

### Spies

It's when you want to see if the function was called, but aren't interested in what the function does.

- `The Jest Object`:
  - It keeps track to the changes in the function
  - It is automatically in scope within every test file. The methods in the jest object help create mocks and let you control Jest's overall behavior.

```js
import { jest } from "jest";
const mockFn = jest.fn();
mockFn();
expect(mockFn).toHaveBeenCalled();
```

---

### Mock Testing

![mock](./img/mock.jpg)

Mock testing is an approach to unit testing that lets you make assertions about how the (code under test) is interacting with other system modules. In mock testing, the dependencies(Ex:database) are replaced with objects that simulate the behavior of the real ones.

- The purpose of mocking is to isolate and focus on the code being tested and not on the behavior or state of external dependencies.
  - it does so by changing the functionality of the function to take a **shortcut**.
- It's used if a function takes a long time to be executed or a promise with a lot of data

[mock function in Jest](https://jestjs.io/docs/mock-functions)
