# INDEX

- [INDEX](#index)
  - [Typescript with Angular](#typescript-with-angular)
  - [Decorators](#decorators)
  - [Components](#components)
  - [Props](#props)
  - [Events](#events)
  - [Typescript with Redux](#typescript-with-redux)

---

## Typescript with Angular

Guide: [Angular Typescript](https://angular.io/guide/typescript-configuration)

- Angular uses Typescript as its primary language.
- Angular by default doesn't use strict mode.
  > To enable strict mode, add `"strict": true` in `tsconfig.json`.

---

## Decorators

They're a typescript feature that allows you to **enhance or modify** classes and their properties and methods. They're used to add metadata to classes, methods, and properties.

- Decorators are a design pattern that is used to separate modification or decoration of a class without modifying the original class.
- Decorators are used to add metadata to a class, method, or property.
- Angular has a set of decorators that attach metadata to classes so that the Angular framework knows what to do with them.

- `@Component`

  - This decorator is used to define a component and its metadata.
  - It takes a metadata object that tells Angular how to create and use the component.
  - The metadata object can have properties like `selector`, `templateUrl`, `styleUrls`, etc.
  - Example:

    ```ts
    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {}
    ```

  - decorators are just substitutes adding metadata to a class directly.

    ```ts
    // same as above
    export class AppComponent {
      selector: 'app-root';
      templateUrl: './app.component.html';
      styleUrls: ['./app.component.css'];
    }
    ```

---

## Components

---

## Props

---

## Events

---

## Typescript with Redux
