# INDEX

- [INDEX](#index)
  - [Development vs Production in Angular](#development-vs-production-in-angular)
    - [Key Differences](#key-differences)
  - [Production Build Steps](#production-build-steps)
    - [Client-side rendering (CSR)](#client-side-rendering-csr)
    - [Server-side rendering (SSR)](#server-side-rendering-ssr)
    - [Static Site Generation (SSG)](#static-site-generation-ssg)
  - [Angular Built-in Deployment Tools](#angular-built-in-deployment-tools)

---

## Development vs Production in Angular

When deploying an Angular application, it's crucial to understand the difference between development and production builds. Development builds are optimized for debugging and development speed, while production builds are optimized for performance and size.

### Key Differences

1. **Build Optimization**:

   - Development: Includes source maps, detailed error messages, and is not minified or optimized for size.
   - Production: Minified, no source maps, optimized for performance, and includes tree-shaking to remove unused code.

2. **Environment Configuration**:

   - Development: Uses `environment.ts` with development settings.
   - Production: Uses `environment.prod.ts` with production settings.

3. **Debugging**:
   - Development: Easier debugging with detailed logs and error messages.
   - Production: Limited debugging information to protect sensitive data.

---

## Production Build Steps

- To create a production build of your Angular application, follow these steps:

  1. **Update Environment Configuration**:
     Ensure that your `environment.prod.ts` file is correctly configured with production settings.
  2. **Build the Application**:
     Run the following command to create a production build:

     ```sh
     ng build --prod
     ```

     - This command will optimize the build for production, including minification and tree-shaking.
     - The output will be placed in the `dist/` folder 📁 of your Angular project.

  3. **Deploy the Application**:
     After the build is complete, deploy the contents of the `dist/` folder to your web server or hosting platform.

- Angular supports different types of deployment, including:
  - static file hosting
  - server-side rendering
  - client-side rendering **(default)**

---

### Client-side rendering (CSR)

In CSR, the Angular application is loaded in the browser, and the rendering happens on the client side. This is done by first requesting the `index.html` file, which contains the Angular application (script files & links). The browser then downloads the necessary JavaScript files, executes them, and renders the application.

- When serving this type of application, ensure that your web server is static and is configured to serve the `index.html` file for all routes.
  - This is important because Angular uses the HTML5 History API for routing, and the server needs to return the `index.html` file for any route that does not match a static file.
- Example of hosting websites for CSR:
  - **Firebase Hosting**
  - **Netlify**
  - **Apache/Nginx**: Requires specific configuration to handle Angular routes correctly.

---

### Server-side rendering (SSR)

SSR involves rendering the Angular application on the server and sending the fully rendered HTML to the client. This can improve performance and SEO, as the initial page load is faster and search engines can index the content more effectively.

- Here:

  - Angular app routes are **rendered on-demand** on the server, allowing for faster initial loads and better SEO.
  - Browser receives the finished, rendered page, improving the user experience.
  - The web app is **hydrated (activated)** on the client side, enabling interactivity and dynamic content **(becomes a SPA after initial rendering)**.

- Here **Dynamic web server is required** to handle requests and serve the appropriate content.

  > This is different from [static file hosting](https://angular.io/guide/deployment#static-file-hosting) where the server simply serves static files without any dynamic processing.

- **How to Implement SSR in Angular**:

  - Steps here in the [documentation](https://angular.dev/guide/ssr)
  - mainly it's done by adding the `@angular/ssr` tool and configuring the server to use it.
    - it does a lot of things like creating `server.ts` file and setting up the necessary middleware, and modifying `angular.json` to include server-side rendering options.

- **Issues you may encounter with SSR**:

  - Increased complexity in the application architecture.
  - Potential performance overhead on the server.
  - Challenges with caching and state management.
  - Common Errors:

    - **Error 1**: some browser APIs may not be available during server-side rendering like `localStorage` or `window`.

      - Solution:

        - Use Angular's `isPlatformBrowser` function to check if the code is running in the browser before accessing these APIs.
        - or use `afterNextRender` to defer access to these APIs until after the initial render.

          ```ts
          // Before (works on CSR but not on SSR) ❌
          export class TasksService {
            constructor() {
              const tasks = localStorage.getItem('tasks');
              if (tasks) {
                this.tasks = JSON.parse(tasks);
              }
            }
          }

          // After (works on CSR and SSR) ✅
          export class TasksService {
            constructor() {
              afterNextRender(() => {
                const tasks = localStorage.getItem('tasks');
                if (tasks) {
                  this.tasks = JSON.parse(tasks);
                }
              });
            }
          }
          ```

          > `afterNextRender` is a utility function that allows you to defer the execution of a function until after the next rendering cycle. This is useful for accessing browser-specific APIs that may not be available during server-side rendering.
          >
          > It's a safe place that guarantees the code will run in the browser context even if it was triggered during server-side rendering because the next rendering cycle will always occur in the browser.

---

### Static Site Generation (SSG)

- SSG is a technique where HTML pages are generated **at build time**, rather than at runtime.

  - This can lead to faster load times and improved SEO, as the content is readily available to search engine crawlers.
  - Here, also the app is **hydrated** on the client side, meaning that Angular takes over and makes the static content interactive.

- **How to Implement SSG in Angular**:

  - Mainly it's done using the `prerender` key in `angular.json` file where you can specify the routes to be pre-rendered.

    ```json
    {
      "prerender": {
        "routes": ["/", "/about", "/contact"] // any routes other than these will not be pre-rendered
      }
    }
    ```

  - You can find the pre-rendered `html` files in the `dist/browser` directory after building the application, as they are generated during the build process.

- Angular supports SSG through tools like [Scully](https://scully.io/), which can pre-render Angular applications into static HTML.

---

## Angular Built-in Deployment Tools

Angular provides several built-in tools and features to facilitate deployment:

1. **Angular CLI**: The Angular Command Line Interface (CLI) includes commands for building and deploying Angular applications. The `ng build --prod` command creates an optimized production build.

   - More details here [in the documentation](https://angular.dev/tools/cli/deployment)

2. **Angular Universal**: This is a technology that allows for server-side rendering (SSR) of Angular applications, improving performance and SEO.

3. **Deployment Scripts**: Angular projects can include custom scripts for deployment in the `package.json` file, allowing for automated deployment processes.

4. **Environment Configuration**: Angular's environment files (`environment.ts` and `environment.prod.ts`) allow for easy configuration of different settings for development and production environments.
