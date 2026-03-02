# INDEX

- [INDEX](#index)
  - [Performance in Angular](#performance-in-angular)
  - [Lazy Loading](#lazy-loading)
    - [Route-based Lazy Loading (used in old versions)](#route-based-lazy-loading-used-in-old-versions)
    - [Deferrable Views (used in Angular 17+)](#deferrable-views-used-in-angular-17)
      - [Examples of Deferrable Views](#examples-of-deferrable-views)

---

## Performance in Angular

Performance in Angular can be optimized through various techniques, such as:

- **Change Detection Strategy**: Use `OnPush` change detection strategy to reduce the number of checks Angular performs.
- **TrackBy in ngFor**: Use `trackBy` to optimize rendering of lists by tracking items by a unique identifier.
- [Lazy Loading](#lazy-loading): Load feature modules only when needed to reduce the initial load time.
- **AOT Compilation**: Use Ahead-of-Time (AOT) compilation to pre-compile templates and reduce runtime overhead.
- **Tree Shaking**: Remove unused code during the build process to reduce bundle size.
- **Service Workers**: Implement service workers for caching and offline capabilities, which can improve perceived performance.
- **Optimizing Change Detection**: Use `ChangeDetectorRef` to manually trigger change detection when necessary, rather than relying on Angular's automatic change detection.
- **Avoiding Memory Leaks**: Unsubscribe from observables and event listeners to prevent memory leaks that can degrade performance over time.
- **Using Pure Pipes**: Use pure pipes to optimize data transformations in templates, as they only re-evaluate when their inputs change.
- **Minimizing DOM Manipulations**: Reduce direct DOM manipulations and use Angular's templating features to handle dynamic content efficiently.
- **Using Web Workers**: Offload heavy computations to web workers to keep the UI responsive.
- **Profiling and Monitoring**: Use tools like Angular DevTools and Chrome DevTools to profile performance and identify bottlenecks in your application.

---

## Lazy Loading

Lazy loading is a design pattern that defers the loading of resources until they are needed. In Angular, this is typically used to load feature modules only when the user navigates to a specific route.

> The default way of loading route's modules/components is called **Eager Loading**. In this case, all modules are loaded at the start of the application, which can lead to longer initial load times and larger bundle sizes.

- Advantages of Lazy Loading:

  - **Smaller Initial Bundle Size**: Reduces the amount of code loaded at startup, leading to faster initial rendering.
  - **Improved Initial Load Time**: Reduces the amount of code loaded at startup, leading to faster initial rendering.
  - **Reduced Memory Usage**: Only loads the necessary modules, which can lower memory consumption.
  - **Better User Experience**: Users can start interacting with the application sooner, as not all features are loaded upfront.

- How to Implement Lazy Loading in Angular:

  - Angular provides 3 ways to implement lazy loading:
    1. **Using the Angular Router**: Define routes with the `loadChildren` property to specify the module to be lazy loaded.
    2. **Using Dynamic Imports**: Use dynamic imports in your code to load modules on demand.
    3. **Deferrable Views**: Use Angular's `ngIf` or `ngSwitch` directives to conditionally load components or modules based on user interaction.

- When to Use Lazy Loading:

  - Use lazy loading when you have large feature modules that are not needed immediately on application startup.
  - It is particularly useful for applications with multiple features or sections that can be loaded independently.

- When not to Use Lazy Loading:
  - Do not use lazy loading for critical features that should be available immediately to the user. **like Home, Login, or Dashboard modules**. as they are essential for the initial user experience.
  - Avoid lazy loading for small modules that are always needed at startup, as it can add unnecessary complexity.

---

### Route-based Lazy Loading (used in old versions)

Route-based lazy loading is the most common method in Angular, where feature modules are loaded when the user navigates to a specific route.

- To implement route-based lazy loading, you need to:

  1. Create a feature module that you want to lazy load.
  2. Define a route in your main routing module that uses the `loadChildren` property to specify the path to the feature module.
  3. Use the `import()` syntax to dynamically import the module.

- Example of Route-based Lazy Loading:

  - Lazy loading modules: (old way)

    ```ts
    import { Routes } from '@angular/router';
    import { FeatureModule } from './feature/feature.module';

    const routes: Routes = [
      {
        path: 'feature',
        loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
      }
    ];
    ```

  - Lazy loading components: (new way)

    ```ts
    import { Routes } from '@angular/router';

    const routes: Routes = [
      {
        path: 'feature',
        loadComponent: () => import('./feature/feature.component').then(m => m.FeatureComponent)
      }
    ];
    ```

  - Lazy loading child-routes:

    ```ts
    import { Routes } from '@angular/router';

    // Assuming you have a user-routes file that exports userRoutes
    /*
    const userRoutes: Routes = [
      { path: 'profile', component: UserProfileComponent },
      { path: 'settings', component: UserSettingsComponent }
    ];
    */

    const routes: Routes = [
      {
        path: 'user',
        // children: userRoutes
        loadChildren: () => import('./user-routes').then(m => m.userRoutes)
      }
    ];
    ```

  > **Note:** Here `m` stands for the module or component that is being imported. This syntax allows Angular to load the specified module or component only when the user navigates to the `feature` route.

- **Notes:**

  - If you faced issue with the (`service` used in the lazy-loaded component/module) not being found, you can fix it by providing the service in the `providers` array of the lazy-loaded module.

    ```ts
    import { Routes } from '@angular/router';
    import { FeatureService } from './feature.service';

    const routes: Routes = [
      {
        path: 'feature',
        providers: [FeatureService], // Provide the service here
        loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
      }
    ];
    ```

- More here [Angular-Router#LazyLoading](./3-Angular-Router.md#lazy-loading).

---

### Deferrable Views (used in Angular 17+)

Deferrable views are a new feature introduced in Angular 17 that allows developers to load components or modules on demand, improving performance and user experience.

> It's from the `defer` script tag, which allows you to load components or modules only when they are needed, rather than at the initial load time.

- It's similar to lazy loading, but it provides more flexibility and control over when and how components are loaded.
- It can be used to load components or modules based on user interaction, such as clicking a button or scrolling to a specific section of the page.

- To implement deferrable views, you can use the `ngIf` or `ngSwitch` directives to conditionally load components or modules based on user interaction.
- It's done using `@defer` directive
  - The `@defer` directive allows you to specify a component or module that should be loaded when a certain condition is met.
  - By default, if no condition is specified, the component or module will be loaded deferrable **when the browser is idle (after the initial rendering and loading of critical resources)**.
  - You can also specify a condition to load the component or module only when a specific event occurs, such as a button click or a scroll event.

#### Examples of Deferrable Views

> You can find all the examples in the [official documentation](https://angular.dev/guide/templates/defer#on).

- **Deferrable View when idle**

  - Here, the component will be loaded when the browser is idle.
  - Here, no condition/parameter is specified to the `@defer` directive.
  - We must provide a `@placeholder` component to be displayed while the deferrable view is loading.

  ```ts
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    template: `
      <section>
        <h1>Welcome to My App</h1>
        <div>long content......</div>
      </section>

      <!-- Deferrable View that will load when the browser is idle -->
      @defer {
      <app-feature-component />
      } @placeholder {
      <p>We are loading the feature component...</p>
      }
    `
  })
  export class AppComponent {
    // Component logic here
  }
  ```

- **Deferrable View when component is visible in the viewport:**

  - Here, the component will be loaded when it becomes visible in the viewport.
  - We must provide a `@placeholder` component to be displayed while the deferrable view is loading.

  ```ts
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    template: `
      <section>
        <h1>Welcome to My App</h1>
        <div>long content......</div>
      </section>

      <!-- Deferrable View that will load when it's visible in the viewport -->
      @defer(on viewport) {
      <app-feature-component />
      } @placeholder {
      <p>We are loading the feature component...</p>
      }
    `
  })
  export class AppComponent {
    // Component logic here
  }
  ```

- **Deferrable View on interaction:**

  - Here, the component will be loaded when the user interacts with the `@placeholder` component.
  - We must provide a `@placeholder` component to be displayed while the deferrable view is loading.

  ```ts
  import { Component } from '@angular/core';
  @Component({
    selector: 'app-root',
    template: `
      <section>
        <h1>Welcome to My App</h1>
        <div>long content......</div>
      </section>

      <!-- Deferrable View that will load on interaction -->
      @defer(on interaction) {
      <app-feature-component />
      } @placeholder {
      <button>Load Feature Component</button>
      }
    `
  })
  export class AppComponent {
    // Component logic here
  }
  ```
