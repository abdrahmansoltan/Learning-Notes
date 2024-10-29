# INDEX

- [INDEX](#index)
  - [Module Bundler](#module-bundler)
    - [History](#history)
    - [Modern JavaScript Module Bundlers](#modern-javascript-module-bundlers)
    - [Stages of a bundler](#stages-of-a-bundler)
      - [Module Representation](#module-representation)
      - [Module Map](#module-map)
      - [Dependency Resolution](#dependency-resolution)
      - [Packing](#packing)
    - [Webpack \& Vite \& Parcel](#webpack--vite--parcel)
  - [Babel](#babel)
    - [Configuring Webpack to use Babel](#configuring-webpack-to-use-babel)
    - [Configuring Babel to use polyfilling](#configuring-babel-to-use-polyfilling)

---

## Module Bundler

A tool that combines JavaScript files and their dependencies into a single file for browser use.

- **Optimization**: Reduces server requests by merging multiple JavaScript files into one.

### History

JavaScript initially lacked a module system due to its browser-only design. Code organization required loading each file with globally shared variables.

In 2009, `CommonJS` introduced a module system for JavaScript outside the browser, enabling import/export without global variables. `node.js` is a well-known implementation of `CommonJS`.

- **Example**: Using `node.js` modules:

  ```js
  // index.js
  const moment = require('moment');

  const rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log(rightNow);
  ```

  - Instead of loading all of `moment.min.js` with an `HTML` script tag, you can load it directly in the JavaScript file.

- **Browser Limitation**: This syntax doesn't work in browsers, which lack file system access. **Module bundlers** solve this problem.

---

### Modern JavaScript Module Bundlers

- **Why**:
  - In modern web development, projects are built package managers like `npm` and `yarn`, which use `CommonJS` modules. These modules can't be used directly in browsers (we can't use `require` in browsers when importing modules).
  - That's where module bundlers come in. They take `CommonJS` modules and convert them into a format that can be used in browsers.
- **Purpose**: Replaces `require` statements with actual file contents (that doesn't work in browsers) to create a single JavaScript bundle.
- **Process**:

  - It usually starts with an **entry file**, and from there it bundles up all of the code needed for that entry file.
    ![module-bundler](./img/module-bundler.png)
  - This is done in the **build process** of a project, and the output is a single JavaScript file that can be included in an HTML file.

- **Advantages**:

  - Eliminates the need for global variables and multiple `<script>` tags.
  - Improves performance with a single JavaScript bundle.
  - Enables powerful build features like **minification**, **tree shaking**, and **code splitting**.

- Popular Bundlers:
  - [Browserify](https://browserify.org/) : The first popular module bundler.
  - [Webpack](https://webpack.js.org/) : The most widely used module bundler.

---

### Stages of a bundler

There are two main stages of a bundler:

1. Dependency resolution
2. Packing

- Starting from an **entry point** (such as `app.js`), the goal of **dependency resolution** is to look for all of the dependencies of your code (other pieces of code that it needs to function) and construct a graph (called a **dependency graph**).
  ![dependency-graph](./img/dependency-graph.png)
- Once this is done, you can then **pack** or convert your dependency graph into a single file that the application can use.

---

#### Module Representation

The graph structure gets built up through recursively checking for dependencies within each file.

- We are going to need 4 things for Module Representation:
  1. The name and an identifier of the file
  2. Where the file came from (in the file system)
  3. The code in the file
  4. What dependencies that file needs
- In JavaScript, the easiest way to represent such a set of data would be an **object**.
- in the `createModuleObject` function, the notable part is the call to a function called `detective`.
  - `Detective` is a library that can “find all calls to `require()` no matter how deeply nested”, and using it means we can avoid doing our own AST traversal!

![Module Representation](./img/Module-Representation.png)

---

#### Module Map

When you import modules in Node, you can do relative imports, like `require('./utils')`. So when your code calls this, how does the bundler know what is the right `./utils` file when everything is packaged?

That is the problem the **module map** solves.

- Our module object has a unique `id` key which will be our ‘source of truth’. So when we are doing our dependency resolution, for each module, we will keep a list of the names of what is being required along with their `id`. This way, we can get the correct module at run-time.
  - This also means that we can store all of the modules in a non-nested object, using the `id` as a key.

![Module-Map](./img/Module-Map.png)

---

#### Dependency Resolution

> What is meant by ‘**resolve dependencies’**?
>
> - In `Node` there is a thing called the `require.resolve`, and it’s how Node figures out where the file that you are requiring is. This is because we can import relatively or from a `node_modules` folder.

- there’s an npm module named `resolve` which implements this algorithm for us. We just have to pass in the dependency and base URL arguments, and it will do all the hard work for us.
- At the end of the function, we are left with an array named **modules** which will contain module objects for every module/dependency in our project.

Now that we have that, we can move on to the final step: **packing**!

---

#### Packing

In the browser, there is no such thing as modules (kind of). But this means that there is no `require()` function, and no `module.exports()`. So even though we have all of our dependencies, we currently have no way to use them as modules.

- This is where `Module Factory Function` play its rule
- **Module Factory Function**:

  - A factory function is a function (that’s not a constructor) which returns an object. It is a pattern from `object oriented programming`, and one of its uses is to do `encapsulation` and `dependency injection`.
  - Using a factory function, we can both inject our own `require()` function and `module.exports()` object that can be used in our bundled code and give the module its own scope.

- **Packing Process**

  - First up is `modulesSource`. Here, we are going through each of the modules and transforming them into a string of sources.
    ![packing](./img/packing.png)
    - Now it’s a little hard to read, but you can see that the **source is encapsulated**. We are providing `modules` and `require` using the factory function as mentioned.
    - We are also including the modules map that we constructed during the [Dependency Resolution](#dependency-resolution).
  - The next string of code is an **IIFE**, which means that when you run that code in the browser (or anywhere else), the function will run immediately. IIFE is another pattern for encapsulating scope, and is used here so we don’t pollute the global scope with our require and modules.
  - After this, we are defining a `module object` that the module can populate, and passing both functions into the factory, after which we return `module.exports`.
  - Lastly, we call `require(0)` to require the module with an id of `0`, which is our entry file.

---

### Webpack & Vite & Parcel

- [Webpack](../DEV/Modules%20&%20Bundlers.md#webpack)
- [Vite](../DEV/Modules%20&%20Bundlers.md#vite)
- [Parcel](../DEV/Modules%20&%20Bundlers.md#parcel)

---

## Babel

**Babel** is a tool to convert modern JavaScript (ES6+) into a version compatible with older browsers.

- `Babel` can just convert normal `syntax` like `arrow funtion` to `function expression/declaration` (**transpiling**), **but** it can't convert new ES6 features like `class`,`promise`, so we use => (**polyfilling**).

  - **Transpiling**:

    - Converts new syntax to old syntax that can be run by older JavaScript engines.
    - Examples: Arrow functions to regular functions, nullish coalescing operator to ternary operator.

      ```js
      // Before
      height = height ?? 100;
      // After
      height = height !== undefined && height !== null ? height : 100;
      ```

  - **Polyfilling**:

    - Adds new features to older engines that may lack them.
    - Examples: `Promise` to callback functions, `Math.trunc` to `Math.ceil` and `Math.floor`.

      ```js
      if (!Math.trunc) {
        Math.trunc = function (number) {
          return number < 0 ? Math.ceil(number) : Math.floor(number);
        };
      }

      if (!Promise) {
        // Polyfill Promise
      }
      ```

- Babel works with **plugins** and **presets**.
  - **Plugins**: Small pieces of code that tell Babel how to transform your code (specific javascript feature that you want to transpile).
    - Example: `@babel/plugin-transform-arrow-functions` is a plugin that converts arrow functions to regular functions.
  - **Presets**: A set of plugins that work together to transform your code.
    - Example: `@babel/preset-env` is a preset that includes all the plugins needed to convert modern JavaScript to an older version.

---

### Configuring Webpack to use Babel

Modern project build systems, such as **webpack**, provide a means to run a transpiler automatically on every code change, so it’s very easy to integrate into the development process.

- We can configure webpack to use `babel-loader` by editing the webpack.`config.js` file as follows:

```js
// webpack.config.js
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        /* we’re telling webpack to look for any .js files (excluding ones in the node_modules folder) 
        and apply babel transpilation using babel-loader with the @babel/preset-env preset.
        */
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
```

---

### Configuring Babel to use polyfilling

- **Polyfilling** is the process of adding new features to older engines that may lack them.
- We can use the `@babel/preset-env` preset to include polyfills for features that are missing in the target environment.

```js
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // tells Babel to include polyfills for features that are missing in the target environment
        corejs: 3
      }
    ]
  ]
};
```

- Importing polyfills libraries in your entry file:

  ```js
  // index.js
  import 'core-js/stable'; // polyfills for ES6+ features
  import 'regenerator-runtime/runtime'; // polyfills for async/await
  ```
