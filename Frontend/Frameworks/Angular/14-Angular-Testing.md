# INDEX

- [INDEX](#index)
  - [Testing in Angular](#testing-in-angular)
  - [Unit testing in Angular](#unit-testing-in-angular)

---

## Testing in Angular

When writing tests in Angular, it's important to follow best practices to ensure your tests are effective, maintainable, and reliable.

- Here are some key best practices for testing in Angular:
  1. **Use Angular Testing Utilities**: Leverage Angular's built-in testing utilities such as TestBed, ComponentFixture, and async utilities to create a robust testing environment.
  2. **Isolate Unit Tests**: Focus on testing individual components, services, or directives in isolation. Use mocks and spies to simulate dependencies and avoid testing external systems.
  3. **Write Descriptive Test Cases**: Use clear and descriptive names for your test cases to convey the purpose of each test. This helps in understanding the test's intent and makes it easier to maintain.
  4. **Test Component Interaction**: Ensure that you test how components interact with each other, including input/output properties and event handling.
  5. **Use Test Data**: Create reusable test data to avoid duplication and make your tests more readable.
  6. **Avoid Over-Mocking**: While mocking is essential, avoid over-mocking as it can lead to tests that do not accurately reflect real-world scenarios.
  7. **Run Tests Frequently**: Integrate tests into your development workflow and run them frequently to catch issues early.
  8. **Use Code Coverage Tools**: Utilize code coverage tools to identify untested parts of your codebase and ensure comprehensive test coverage.
  9. **Keep Tests Fast**: Aim for fast-running tests to maintain developer productivity. Slow tests can lead to frustration and reduced test frequency.
  10. **Review and Refactor Tests**: Regularly review and refactor your tests to improve readability, maintainability, and effectiveness.

  > By following these best practices, you can create a robust testing strategy for your Angular applications that enhances code quality and reliability.

- There're 2 main types of testing in Angular:
  1. **Unit Testing**: Focuses on testing individual components, services, or directives in isolation. It ensures that each unit of code behaves as expected.
     > Threre're also integration tests that check that more than one app can communicate. **Whereas unit tests mock dependencies, integration tests use real dependencies** to ensure that different parts of the application work together correctly.
     >
     > To turn unit tests into integration tests, you can replace mocked services with real implementations in your test setup. This allows you to verify that multiple components or services interact correctly in a more realistic scenario.
  2. **End-to-End (E2E) Testing**: Simulates real user scenarios to test the entire application flow. It verifies that all components work together as intended.

---

## Unit testing in Angular

In Angular, test suites have the same names as the files under test, adding the suffix `.spec` to the name.

- For example, the file `application.spec.ts` contains the test script for `application.ts` file.

  ```ts
  // app.spec.ts
  import { AppComponent } from './app.component';

  describe('AppComponent', () => {
    it('should create the app', () => {
      const app = new AppComponent();
      expect(app).toBeTruthy();
    });
  });
  ```

- In Angular applications, you keep each test script in the same directory as the component (or service) under test, so if you need to reuse a component in another app, all related files are located together. If you use Angular CLI for generating a component or service, the boilerplate code for tests (the `.spec.ts` file) will be generated in the same directory.

  ```bash
  ├── app
  │     ├── app.component.ts
  │     ├── app.component.spec.ts  <-- test script for app.component.ts
  │     ├── app.module.ts
  │     └── app.service.ts
  │     └── app.service.spec.ts    <-- test script for app.service.ts
  ├── assets
  ├── environments
  ├── index.html
  └── main.ts
  ```
