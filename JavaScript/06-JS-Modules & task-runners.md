# INDEX

- [INDEX](#index)
  - [Notes](#notes)
  - [Module](#module)
    - [Module Features](#module-features)
    - [Module scripts](#module-scripts)
  - [Exporting \& Importing code](#exporting--importing-code)
    - [Exporting](#exporting)
      - [Named Exports (Zero or more exports per module)](#named-exports-zero-or-more-exports-per-module)
      - [Default Exports (One per module)](#default-exports-one-per-module)
    - [Importing](#importing)
    - [Re-exporting](#re-exporting)
      - [Re-exporting the default export](#re-exporting-the-default-export)
  - [modular pattern](#modular-pattern)
  - [Old vs Modern Javascript with Package managers](#old-vs-modern-javascript-with-package-managers)
  - [Build Tools](#build-tools)
    - [Build Tools Steps](#build-tools-steps)
  - [Deployment](#deployment)
    - [CI/CD](#cicd)
      - [CI/CD using netlify](#cicd-using-netlify)

---

## Notes

- As our program grows bigger, it may contain many lines of code. Instead of putting everything in a single file, you can use `modules` to separate codes in separate files as per their functionality. This makes our code organized and easier to maintain.
- `Module` is a file that contains code to perform a specific task. A module may contain variables, functions, classes etc.
- As of `ES2022`, `Top-level await` is supported in modules. This means that we can use `await` at the top level of a module without any wrapper function with `async` keyword.
  - Note that this will only work if the module is loaded as an `ES module` (using `import` or `type="module"`).
  - also, note that this will block the execution of the module until the promise is resolved. (not recommended ❌)
    - one use of it is to await the return of a promise from a function in the module. so that the module will be loaded only after the promise is resolved and we won't need to use `.then()` in the main script.

---

## Module

> More on modules here -> [Modules & Bundlers](../DEV/Modules%20%26%20Bundlers.md)

Modules let us split big codebase into multiple small files that can be loaded and executed on demand.

![module](./img/modules-1.png)

- A **module** is a reusable piece of code (file) that encapsulates implementation details.
- Modules can load each other and use special directives `export` and `import` to interchange functionality, call functions of one module from another one:

  - `export` keyword labels variables and functions that should be accessible from outside the current module.
  - `import` allows the import of functionality from other modules.

- Browsers don't support modules, so we must do a "Build Process" after writing our code to convert it to a format that browsers understand. This includes 3 steps:
  1. `Bundling` - Combining all the modules into a single file. -> `Webpack / Parcel`
  2. `Transpiling` - Converting the code to a format that browsers understand. -> `Babel`
     - This is done by changing the syntax of the code to an older version of JavaScript that is supported by all browsers.
     - ex: `arrow functions` to `normal functions`
  3. `Polyfilling` - Adding code to support older browsers. -> `Babel`
     - This is done by adding a piece of code that adds the missing functionality to the browser.
     - This is done with new features that wasn't available in older browsers. (new features and not syntax)
     - ex: `Promise` to `callback functions`
- As modules support special keywords and features, we **must** tell the browser that a script should be treated as a module, by using the attribute `<script type="module">`.

  - The browser automatically fetches and evaluates the imported module (and its imports if needed), and then runs the script.

  ```html
  <script type="module" defer src="script.js"></script>
  ```

- Modules work only via **HTTP(s)**, not locally as it requires `CORS` access and other protocols
  - That's why we use a local web-server, such as “live server” and can't open it locally without a server, as it pretends to be a real server and provides the `http` protocol
    - This is because when sending a request to a server, the browser adds a special header `Origin` to it, with the current domain (origin) in it. The server then may reply with the header `Access-Control-Allow-Origin` with the allowed origin, or with the header `Access-Control-Allow-Origin: *` to allow access from everywhere.
  - The `file://` protocol is not a part of the `origin`, so it can’t be used with modules.
  - **Summary:** the modules files need to be sent from the same **origin** (`domain`, `protocol`, `port`), otherwise they won’t work.

---

### Module Features

- Why modules?
  1. **compose** software from separate modules that can be developed, updated, and maintained independently.
  2. **isolate** components.
  3. **abstract** code (low-level code in modules)
  4. **organize** code
  5. **re-use** code
- Always **“use strict”**
- Module-level scope (It creates a local scope in a module)

  - Each module has its own top-level scope. In other words, top-level variables and functions from a module are not seen in other scripts.

- A module code is evaluated only the first time when imported

  - If the same module is imported into multiple other modules, its code is executed only once, upon the first `import`. Then its exports are given to all further `importers`.

    ```js
    // 📁 alert.js
    alert("Module is evaluated!");

    // Import the same module from different files

    // 📁 1.js
    import `./alert.js`; // "Module is evaluated!"

    // 📁 2.js
    import `./alert.js`; // (shows nothing)
    ```

- In a module, **“this”** is undefined

  - Compare it to non-module `scripts`, where this is a `window` object:

    ```html
    <script>
      alert(this); // window
    </script>

    <script type="module">
      alert(this); // undefined
    </script>
    ```

---

### Module scripts

- Module scripts are deferred

  - downloading external module scripts `<script type="module" src="...">` doesn’t block HTML processing, they load in parallel with other resources.
  - module scripts wait until the HTML document is fully ready (even if they are tiny and load faster than HTML), and then run.
  - relative order of scripts is maintained: scripts that go first in the document, execute first.

- **Async** works on inline scripts

  - For non-module scripts, the `async` attribute only works on external scripts. Async scripts run immediately when ready, independently of other scripts or the HTML document.
  - in this example, It performs the `import (fetches ./analytics.js)` and runs when ready, even if the HTML document is not finished yet, or if other scripts are still pending.

    ```html
    <!-- all dependencies are fetched (analytics.js), and the script runs -->
    <!-- doesn't wait for the document or other <script> tags -->
    <script async type="module">
      import { counter } from './analytics.js';

      counter.count();
    </script>
    ```

- **External scripts:** External scripts that have type="module" are different in two aspects:

  1. External scripts with the same src run only once:

     ```html
     <!-- the script my.js is fetched and executed only once -->
     <script type="module" src="my.js"></script>
     <script type="module" src="my.js"></script>
     ```

  2. External scripts that are fetched from another origin (e.g. another site) require **CORS** headers

     - In other words, if a module script is fetched from another origin, the remote server must supply a header **Access-Control-Allow-Origin** allowing the fetch.
     - That ensures better security by default.

     ```html
     <!-- another-site.com must supply Access-Control-Allow-Origin -->
     <!-- otherwise, the script won't execute -->
     <script type="module" src="http://another-site.com/their.js"></script>
     ```

---

## Exporting & Importing code

JavaScript initially lacked a code `import` feature due to its limited browser-based functionality. Organizing JavaScript code across multiple files required loading each file with globally shared variables. In 2009, the `CommonJS` project introduced modules to enable code `import`/`export` in JavaScript, bringing it in line with other programming languages. `Node.js` is a popular implementation of `CommonJS` modules.

### Exporting

- The `export` statement is used when creating JavaScript modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the import statement.
- Exported modules are in `strict mode` whether you declare them as such or not.
- exports must happen in top-level code (global scope)

There are two types of exports

1. **Named Exports**
2. **Default Exports**

#### Named Exports (Zero or more exports per module)

- Single import statement can get both `default` + `named` exports
- Named exports can't be renamed when imported
- note that `export` before a class or a function does not make it a function expression. It’s still a function declaration, albeit exported.
- Most JavaScript style guides don’t recommend semicolons after function and class declarations.

```js
// Exporting individual features
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export function functionName(){...}
export class ClassName {...}

// multiple exports with Renaming exports
const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity as tq };

// Exporting destructured assignments with renaming
export const { name1, name2: bar } = obj;
```

#### Default Exports (One per module)

They're used with Modules that declare a single entity, e.g. a module `user.js` exports only `class User`.

- This approach is preferred, so that every “thing” resides in its own module.
- Naturally, that requires a lot of files, as everything wants its own module, but that’s not a problem at all. Actually, code navigation becomes easier if files are well-named and structured into folders.
- There may be only one export default per file. And then `import` it without curly braces
- here we don't export `declaration` or `variables` but we export `values` or `(expressions that already return values)`

  ```javascript
  // 📁 user.js
  export default class User {
    // just add "default"
    constructor(name) {
      this.name = name;
    }
  }
  ```

- Technically, we may have both default and named exports in a single module, but in practice people usually don’t mix them. A module has either named exports or the default one.

  - Here’s how to import the default export along with a named one:

    ```js
    // 📁 main.js
    import { default as User, sayHi } from './user.js';

    new User('John');
    ```

---

### Importing

[reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports)

- How ES6 modules are imported: They're imported **asynchronously**

  - which means that they wait for the imported module to load fully before they can be evaluated. (somehow **Hoisted**)
  - Also this is done to make imports known before a script executes (at compile time), so that the compiler can better optimize code.
    - This makes `bundling and`dead code elimination` possible.

  ```js
  // 📁 module.js
  console.log('Module is evaluated');

  // 📁 main.js
  console.log('Main is evaluated');
  import './module.js';

  // Result:
  // Module is evaluated
  // Main is evaluated
  ```

- Imports are not copies of the exported values, they are **live connections** (bindings) to them.

  - When we import a value from a module, the connection is created, and we may use it, but the value itself is not copied.
  - If the external module changes its value or exports something else, then the import gets the new value immediately.

![import-export](./img/import-export.png)
![import-export](./img/import-export-1.png)

- At first sight, “import everything” `import * as say from ./say.js` seems such a cool thing, short to write, why should we ever explicitly list what we need to import?
  - Explicitly listing what to import gives shorter names: `sayHi()` instead of `say.sayHi()`.
  - Explicit list of imports gives better overview of the code structure: what is used and where. It makes code support and refactoring easier.
- Don’t be afraid to import too much
  - Modern build tools, such as **webpack** and others, bundle modules together and optimize them to speedup loading. They also removed unused imports.

1. for Named Exports

   - It's preferred for large libraries like `lodash` and `reactDom` to reduce size, So you only import what you need from them.
   - import needs curly braces for named exports

   ```javascript
   // creating a `name-space` from importing => to use in the file
   import * as myModule from 'module-name';
   // now "myModule" will act as an object which has properties & methods we can use
   myModule.moduleFunc();

   // Import a single export from a module
   // "export1" must be the same name in the module
   import { export1 } from 'module-name';
   import { export1 as alias1 } from 'module-name';

   // Import multiple exports from module
   import { export1, export2 } from 'module-name';
   ```

2. Import a module for its **side effects** only

   - This runs the module's global code, but doesn't actually import any values.
   - you can do this with importing **css files** into javascript files

   ```javascript
   import 'module-name';

   // example : This works with dynamic imports
   (async () => {
     if (somethingIsTrue) {
       // import module for side effects
       await import('/modules/my-module.js');
     }
   })();
   ```

3. Importing defaults

- team members may use different names to import the same thing, and that’s not good.

  - Usually, to avoid that and keep the code consistent, there’s a rule that imported variables should correspond to file names, e.g:

    ```js
    import User from './user.js';
    import LoginForm from './loginForm.js';
    ```

  - Still, some teams consider it a serious drawback of default exports. So they prefer to always use named exports. Even if only a single thing is exported, it’s still exported under a name, without default.

```javascript
// here we can name it whatever we want as it was exported without a name
import myDefault from '/modules/my-module.js';
```

1. Importing (defaults + named) exports

   ```javascript
   import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
   // here (add) is the default import
   ```

2. Dynamic Imports

   - The standard import syntax is static and will always result in all code in the imported module being evaluated at load time. In situations where you wish to load a module conditionally or on demand, you can use a dynamic import instead.

   - To dynamically import a module, the `import` keyword may be called as a `function`. When used this way, it returns a `promise`.

   ```javascript
   import('/modules/my-module.js').then(module => {
     // Do something with the module.
     module.loadPageInto(main);
   });

   // or using "await" keyword
   let module = await import('/modules/my-module.js');
   ```

- No “bare” modules allowed

  - In the browser, `import` must get either a relative or absolute URL. Modules without any path are called **“bare” modules**. Such modules are not allowed in `import`.

    ```js
    import { sayHi } from 'sayHi'; // Error, "bare" module
    // the module must have a path, e.g. './sayHi.js' or wherever the module is
    ```

---

### Re-exporting

“Re-export” syntax `export ... from ...` allows to import things and immediately export them (possibly under another name), like this:

```js
export { sayHi } from './say.js'; // re-export sayHi

export { default as User } from './user.js'; // re-export default
```

- Why would that be needed?

  - Imagine, we’re writing a “package”: a folder with a lot of modules, with some of the functionality exported outside, and many modules are just “helpers”, for internal use in other package modules.
  - We’d like to expose the package functionality via a single entry point.

    - In other words, a person who would like to use our package, should import only from the “main file” `auth/index.js`.

      ```js
      import { login, logout } from 'auth/index.js';
      //The “main file”, auth/index.js exports all the functionality that we’d like to provide in our package.
      ```

  - The idea is that outsiders, other programmers who use our package, should not meddle with its internal structure, search for files inside our package folder. We export only what’s necessary in auth/index.js and keep the rest hidden from prying eyes.

    ```js
    // 📁 auth/index.js

    // import login/logout and immediately export them
    import { login, logout } from './helpers.js';
    export { login, logout };

    // import default as User and export it
    import User from './user.js';
    export { User };
    ```

  - The syntax `export ... from ...` is just a shorter notation for such `import`-`export`:

    ```js
    // 📁 auth/index.js
    // re-export login/logout
    export { login, logout } from './helpers.js';

    // re-export the default export as User
    export { default as User } from './user.js';
    ```

#### Re-exporting the default export

The default export needs separate handling when re-exporting.

- We can come across two problems with it:

  1. `export User from './user.js'` won’t work. That would lead to a syntax error.

     - To re-export the default export, we have to write

       ```js
       export {default as User}
       ```

  2. `export * from './user.js'` re-exports only named exports, but ignores the default one.

  - If we’d like to re-export both named and default exports, then two statements are needed:

  ```js
  export * from './user.js'; // to re-export named exports
  export { default } from './user.js'; // to re-export the default export
  ```

> Such oddities of re-exporting a default export are one of the reasons why some developers don’t like default exports and prefer named ones.

---

## modular pattern

The module pattern is a special Design pattern in which we use IFFI (Immediately invoked function expression), and we return an object. Inside of that object, we can have functions as well as variables.

> note that the thing that make this possible (reaching what the IIFE-function returns after it was self-invoked) is => `closures`

- Private methods or functions are members of given entity than can be seen only within said entity. Public ones can be accessed from the outside of given entity.

  ```javascript
  // IIFE
  const Formatter = (function () {
    const log = message => console.log(`[${Date.now()}] Logger: ${message}`);
  })();

  // using it
  Formatter.log('Hello');
  ```

---

## Old vs Modern Javascript with Package managers

- in old javascript development when we wanted to include a library, we needed to download its `.js` file and include it before our main `.js` file in the `html` file
  - The good thing was that it was easy enough to understand. The bad thing was that it was annoying to find and download new versions of libraries every time they would update.
- Starting around 2010, several competing JavaScript package managers (`npm`, `yarn`, `Bower`) emerged to help automate the process of downloading and upgrading libraries from a central repository
  - Note that `npm` was originally a package manager made specifically for `node.js`, a JavaScript runtime designed to run on the **server**, not the frontend (in the browser).
  - Using package managers generally involves using a command line, which in the past was never required as a frontend dev

---

## Build Tools

In real-life, browser modules are rarely used in their “raw” form. Usually, we bundle them together with a special tool such as Webpack and deploy to the production server.

- One of the benefits of using bundlers – they give more control over how modules are resolved, allowing bare modules and much more, like CSS/HTML modules.

### Build Tools Steps

1. Take a “main” module, the one intended to be put in `<script type="module">` in HTML.
2. Analyze its dependencies: imports and then imports of imports etc.
3. Build a single file with all modules (or multiple files, that’s tunable), replacing native `import` calls with bundler functions, so that it works. “Special” module types like HTML/CSS modules are also supported.
4. In the process, other transformations and optimizations may be applied:

   - Unreachable code removed.
   - Unused exports removed (“tree-shaking”).
   - Development-specific statements like `console` and `debugger` removed.
   - Modern, bleeding-edge JavaScript syntax may be transformed to older one with similar functionality using **Babel**.
   - The resulting file is minified (spaces removed, variables replaced with shorter names, etc).

> If we use bundle tools, then as scripts are bundled together into a single file (or few files), import/export statements inside those scripts are replaced by special bundler functions. So the resulting “bundled” script does not contain any import/export, it doesn’t require type="module", and we can put it into a regular script:
>
> ```html
> <!-- Assuming we got bundle.js from a tool like Webpack -->
> <script src="bundle.js"></script>
> ```

You can find more in depth here -> [Modules & Bundlers](../DEV/Modules%20%26%20Bundlers.md)

---

## Deployment

- the `dist` folder is the one that will be moved in the deployment-service like [netlify](https://www.netlify.com/)

### CI/CD

![CI/CD](./img/CI-CD.png)

[reference](https://resources.github.com/ci-cd)

#### CI/CD using netlify

- first :
  - deploy the `dist` folder in [netlify](https://www.netlify.com/)
  - you pushed the project files **(wirhout `dist` folder)** into a repository in github
- second :
  - in the project settings in `netlify` go to CI/CD
  - link the github repo of the project
- third :
  - in `netlify => build settings` : write the same build script used in `package.json` file
  - In publish-directory => write : `dist`
