# INDEX

- [INDEX](#index)
  - [Services](#services)
    - [Creating a Service](#creating-a-service)
    - [Dependency injection](#dependency-injection)
      - [`Highrarical injection`](#highrarical-injection)
      - [`@injectable`](#injectable)

---

## Services

Service is a broad category encompassing any value, function, or feature that an application needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.

![service](./img/services-1.png)

- It's something that **manages or fetches data**
  ![service](./img/services-2.png)

- It's a class that can be used in multiple components and other services

### Creating a Service

- Create a service using the following command:

  ```sh
  ng generate service services/modal
  ```

- This will create a service file in the `services` folder
- The service file will have a class with the same name as the service file
- The service class will have a decorator `@Injectable` which is used to inject the service into other components

  - The service class will have a constructor that will have the dependencies that the service needs

- The service class will have a method that will be used to fetch data or perform some operation
- The service class will be imported in the component where it is needed
- The service class will be injected in the constructor of the component
- The method of the service class will be called in the component

- Example:

  ```ts
  // services/fetch-data.service.ts
  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class FetchDataService {
    constructor() {}

    fetchData() {
      return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => data);
    }
  }
  ```

  ```ts
  // app.component.ts
  import { Component, OnInit } from '@angular/core';
  import { FetchDataService } from './services/fetch-data.service';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit {
    fetchData: any;
    constructor(private fetchDataService: FetchDataService) {}

    ngOnInit() {
      this.fetchDataService.fetchData().then(data => {
        this.fetchData = data;
      });
    }
  }
  ```

  ```html
  <!-- app.component.html -->
  <div *ngFor="let data of fetchData">
    <p>{{ data.title }}</p>
  </div>
  ```

---

### Dependency injection

- it's a system that does 2 things:

  - looks in the `[providers] array in the component` and creates instences(objects) from the service-class so that it can be used in other components
  - pass them on to our classes

- we don't create instances manually as Angular creates them **automatically**
  ![inject](./img/enj.PNG)

- in each component that uses the service, instead of creating one instance of the same class for each component, --> we use `Singleton`
  - `Singleton` is a **creational design pattern** that lets you ensure that a class has only one instance, while providing a global access point to this instance. more [here](https://refactoring.guru/design-patterns/singleton)
    ![Singleton](./img/singleton.png)

---

#### `Highrarical injection`

if service is initiates in a parent component -> it will be available for all of its children

- Highest component is the `app.module.ts` not `app.component.ts`
  - so to apply a service to the whole app you should inject it in the module-file

---

#### `@injectable`

- The injector is the main mechanism. Angular creates an application-wide injector for you during the bootstrap process, and additional injectors as needed. You don't have to create injectors.
- An injector creates dependencies and maintainsacontainer of dependency instances that it reuses, if possible.
- Aprovider is an object that tells an injector how to obtain or createadependency

---
