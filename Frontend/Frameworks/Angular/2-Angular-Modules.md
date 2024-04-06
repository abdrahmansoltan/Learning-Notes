# INDEX

- [INDEX](#index)
  - [Modules](#modules)
    - [Module Types](#module-types)
    - [Why use Modules ?](#why-use-modules-)
  - [Creating and using modules](#creating-and-using-modules)
    - [Creating modules](#creating-modules)
    - [Using modules](#using-modules)
  - [Router module](#router-module)
  - [Shared Module](#shared-module)

---

## Modules

Angular uses modules to `bundle` different components into packages

- A single app can have multiple modules, each module can have multiple components, and each component can have multiple services.
  ![structure](./img/modules-1.png)

- It's where we import components so that Angular knows that they exist

  - `BrowserModule`
    - provides services that are essential to launch the app in the browser
    - it's imported in the `app.module.ts` file
  - `CommonModule`
    - provides common directives like `ngIf` and `ngFor`
    - It's re-exported by `BrowserModule`, so when we import `BrowserModule` we actually import `CommonModule` as well

- **Shared Modules**

  - Instead of importing these common modules and components in every feature module, you can create a shared module that has all these modules and components. Import them into a shared module and import this shared module into all feature modules. This will save imports and a lot of coding lines.

### Module Types

![module](./img/modules-2.png)

- **Domain Module**
  - Contains the components that will be shown at all times in the app
- **Routing Module**
  - Contains the routes of the app and routing configuration/rules on how to navigate between the components
- **Routed Module**
  - Contains the components that will be shown when the user navigates to a specific route
- **Shared (Widget) Module**
  - Contains the common components, directives, and pipes that are used in multiple modules

---

### Why use Modules ?

- **Code Organization**
  - Modules help in organizing the code in a better way
  - It helps in separating the code into different modules based on their functionality
- **Reusability**
  - Modules can be reused in different parts of the application, as a module can contain multiple components and services, and **they can be used in different parts of the application by only importing the module and not the individual components**
  - It helps in reducing the code duplication
- **Lazy Loading**
  - Modules can be lazy-loaded, which means they are loaded only when they are needed
  - This helps in reducing the initial load time of the application

---

## Creating and using modules

### Creating modules

- To create a module, use the `ng generate module` command

  ```bash
  ng generate module modules/modal
  # or
  ng g m modules/modal
  ```

- This will create a new module in the `modules` folder

  ```ts
  // modules/modal/modal.module.ts
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';

  @NgModule({
    declarations: [], // to declare components
    imports: [CommonModule], // to import other modules
    exports: [] // to export components to other modules
  })
  export class ModalModule {}
  ```

- To add a component to the module, use the `ng generate component` command with the module name

  ```bash
  ng generate component modules/modal/modal
  # or
  ng g c modules/modal/modal
  ```

---

### Using modules

One of the main advantages of using modules is that they can be reused in different parts of the application. This is done by exporting the components from the module and importing the module in the required module.

- **First step** is to manually list all the components/services that you want to export in the `exports` array of the module

  ```ts
  // modules/modal/modal.module.ts
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { ModalComponent } from './modal.component';

  @NgModule({
    declarations: [ModalComponent],
    imports: [CommonModule],
    exports: [ModalComponent] // export the component here
  })
  export class ModalModule {}
  ```

- **Second step** is to import the module in the required module

  ```ts
  // app.module.ts
  import { ModalModule } from './modules/modal/modal.module';

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ModalModule], // add the module here
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
  // Now, the `ModalComponent` can be used in the `AppComponent` and other components of the app (without importing it explicitly) ✅
  ```

- The `@NgModule` decorator of the Module is used to define the module and its properties
  ![module](./img/modules-3.png)

---

## Router module

It's a module that provides the `routing` functionality to the Angular app and is used to define the routes of the app.

- To include the router inside of your new app

  ```sh
  ng g module <Module_name> --routing
  ```

- For example to create a new module called `app-routing` with routing

  ```bash
  ng g module app-routing --routing
  ```

- This will generate 2 files `app-routing.module.ts` and `app-routing-routing.module.ts`

  - `app-routing.module.ts`
    - It will contain the routes of the app
  - `app-routing-routing.module.ts`
    - It will contain the routing module configuration

- **Router Configuration ->** [Router configuration](./4-Angular-Router.md#router-configuration)

---

## Shared Module

A shared module is a module that contains the common components, directives, and pipes that are used in multiple modules

- **Creating a shared module**

  ```bash
  ng g module shared
  ```

  - This will create a new module in the `shared` folder
  - The shared module can contain the common components, directives, and pipes that are used in multiple modules

- **Exporting the common components**

  - To export the common components, add them to the `exports` array of the module

    ```ts
    // shared/shared.module.ts
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { HeaderComponent } from './header/header.component';
    import { FooterComponent } from './footer/footer.component';

    @NgModule({
      declarations: [HeaderComponent, FooterComponent],
      imports: [CommonModule],
      exports: [HeaderComponent, FooterComponent] // export the components here
    })
    export class SharedModule {}
    ```

  - Now, by importing the `SharedModule`, we have access to the `HeaderComponent` and `FooterComponent` and all the other components that are exported from the `SharedModule`

    ```ts
    // app.module.ts
    import { SharedModule } from './shared/shared.module';

    @NgModule({
      declarations: [AppComponent],
      imports: [BrowserModule, SharedModule], // import the SharedModule here
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {}
    ```
