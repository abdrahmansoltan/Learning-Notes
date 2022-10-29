# INDEX

- [INDEX](#index)
  - [Notes](#notes)
  - [Exporting & Importing code](#exporting--importing-code)
    - [Exporting](#exporting)
    - [Importing](#importing)
  - [modular pattern](#modular-pattern)
  - [Old vs Modern Javascript with Package managers](#old-vs-modern-javascript-with-package-managers)
  - [Task runners](#task-runners)
    - [NPM](#npm)
    - [npm scripts](#npm-scripts)
      - [Pre & Post Scripts](#pre--post-scripts)
    - [Yarn](#yarn)
    - [Package manager Notes](#package-manager-notes)
  - [Deployment](#deployment)
    - [CI/CD](#cicd)
      - [CI/CD using netlify](#cicd-using-netlify)

---

## Notes

- to use modules specify the script type => in `html` file => in the `<head>`

  ```html
  <script type="module" defer src="script.js"></script>
  ```

- As our program grows bigger, it may contain many lines of code. Instead of putting everything in a single file, you can use `modules` to separate codes in separate files as per their functionality. This makes our code organized and easier to maintain.
- `Module` is a file that contains code to perform a specific task. A module may contain variables, functions, classes etc.

---

## Exporting & Importing code

Most programming languages provide a way to import code from one file into another. JavaScript wasn’t originally designed with this feature, because JavaScript was designed to only run in the browser, with no access to the file system of the client’s computer (for security reasons). So for the longest time, organizing JavaScript code in multiple files required you to load each file with variables shared globally.

In 2009, a project named CommonJS was started with the goal of specifying an ecosystem for JavaScript outside the browser. A big part of CommonJS was its specification for **modules**, which would finally allow JavaScript to import and export code across files like most programming languages, without resorting to global variables. The most well-known of implementation of CommonJS modules is **node.js**.

---

### Exporting

- The `export` statement is used when creating JavaScript modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the import statement.
- Exported modules are in `strict mode` whether you declare them as such or not.
- exports must happen in top-level code (global scope)

There are two types of exports

1. Named Exports (Zero or more exports per module)

   ```javascript
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

2. Default Exports (One per module)

   - here we don't export `declaration` or `variables` but we export `values` or `(expressions that already return values)`

   ```javascript
   // Default exports
   export default (expression like "ternary operator","arrow function", "short circuiting" );
   export default function (…) { … } // also class, function*
   export default function name1(…) { … } // also class, function*
   ```

---

### Importing

[reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports)

1. for Named Exports

   - It's preferred for large libraries like `lodash` and `reactDom`
     - so you only import what you need from them

   ```javascript
   // creating a `name-space` from importing => to use in the file
   import * as myModule from 'module-name';
   // now "myModule" will act as an object which has properties & mehtods we can use
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

   ```javascript
   // here we can name it whatever we want as it was exported without a name
   import myDefault from '/modules/my-module.js';
   ```

4. Importing (defaults + named) exports

   ```javascript
   import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
   // here (add) is the default import
   ```

5. Dynamic Imports

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

## Task runners

### NPM

- `npm init`
  - generate a new file named `package.json` This is a configuration file that npm uses to save all project information.
    - it can be described as a manifest of your project that includes the packages and applications it depends on, information about its unique source control, and specific metadata like the project's name, description, and author.
    - it is always structured in the JSON format, which allows it to be easily read as metadata and parsed by machines.
  - > You can use `npm init --yes` to Instantly Initialize a Project
- `npm install package-name`

  - This command does two things:
    1. first, it downloads all the code from the package into a folder called `node_modules`.
    2. Second, it automatically modifies the `package.json` file to keep track of the package as a project dependency.

> This is useful later when sharing a project with others — instead of sharing the `node_modules` folder (which can get very large), you only need to share the `package.json` file and other developers can install the required packages automatically with the command `npm install`

- now to use the library/package, we have 2 choices:

  1. **Use the `.js` file in the `node_modules/package_name` directory**

     - This means we can link to the npm downloaded version of the package in the `index.html` file as follows:

     ```html
     <script src="node_modules/package_name.js"></script>
     <script src="index.js"></script>
     ```

     - So the good thing is that we can now use npm to download and update our packages through the command line. The bad thing is right now we’re digging through the `node_modules` folder to find the location of each package and manually including it in our HTML. That’s pretty inconvenient

  2. **Using a JavaScript module bundler (webpack)**

     - using `node.js` modules. Instead of loading all of `package_name.js` with an HTML script tag, you can load it directly in the JavaScript file as follow:

       ```js
       // index.js
       var moment = require('moment');

       // rest of the main code
       ```

     - This is all great for `node.js`, but if we tried to use the above code in the browser, we get an error saying `require` is not defined. The browser doesn’t have access to the file system, which means loading modules in this way is very tricky — loading files has to be done dynamically, either synchronously (which slows down execution) or asynchronously (which can have timing issues).
     - This is where a module bundler comes in. **A JavaScript module bundler is a tool that gets around the problem with a build step (which has access to the file system) to create a final output that is browser compatible (which doesn’t need access to the file system)**.
       - In this case, we need a module bundler to find all require statements (which is invalid browser JavaScript syntax) and replace them with the actual contents of each required file. The final result is a single bundled JavaScript file (with no require statements)!
     - > The most popular module bundler was [Browserify](https://browserify.org/), Around 2015, [webpack](https://webpack.js.org/) eventually became the more widely used module bundler (fueled by the popularity of the **React** frontend framework, which took full advantage of webpack’s various features).
     - Now that we have webpack’s **dist/main.js** output, we are going to use it instead of `index.js` in the browser, as it contains invalid require statements. This would be reflected in the `index.html` file as follows:

       ```html
       <script src="dist/main.js"></script>
       ```

- Bundling with [Parcel](https://parceljs.org/)
- writing `scripts`

---

### npm scripts

It is a tool that automates different parts of the build process. For frontend development, tasks include `minifying code`, `optimizing images`, `running tests`, etc.

- The `"scripts"` property of your `package.json` file supports a number of built-in scripts and their preset life cycle events as well as arbitrary scripts. These all can be executed by running `npm run-script <stage>` or `npm run <stage>` for short.
- Pre and post commands with matching names will be run for those as well (e.g. `premyscript`, `myscript`, `postmyscript`). Scripts from dependencies can be run with `npm explore <pkg> -- npm run <stage>`.

> In 2013, [Grunt](https://gruntjs.com/) was the most popular frontend task runner, with [Gulp](https://gulpjs.com/) (more about Gulp in [FrontEnd.md file](../Internet/FrontEnd.md)) following shortly after. Both rely on plugins that wrap other command line tools. Nowadays the most popular choice seems to be using the scripting capabilities built into the **npm package manager** itself, which doesn’t use plugins but instead works with other command line tools directly.

it's the `entries` in the `scripts` field of the `package.json` file. The scripts field holds an object where you can specify various commands and scripts that you want to expose.

> ![npm-scripts](./img/npm-scripts.png) > ![npm-lifecycle](./img/npm-lifecycle.png)
>
> - **shell/bash**: it's good at:
>
>   - file i/o
>   - chaining tasks
>   - running tasks in series/parallel>
>
> - **node**: we can replace shell commands with node-implementations, like
>   - `bash` -> `node`
>   - `cat` -> `catw`
>   - `mkdir` -> `mkdirp`
>   - `rm` -> `rimraf`
>   - `&` -> `npm-run-all -parallel`
>
> This is achievable because most packages come with shell commands

- This is very useful when we have repetitive tasks and we have to automate them.

- how it work -> there is a folder called `.bin`, in `node_modules`. this folder contains **binary-executables** for each installed module/package, which we can run using scripts

- [reference](https://docs.npmjs.com/cli/v8/using-npm/scripts)

- in `package.json` :

  ```json
  // you may have to remove the ("main" line) above "scripts" in the file or replace it with "default"
  {
    "default": "index.html",

    "scripts": {
      "start": "parcel index.html",
      "build": "parcel build index.html --dist-dir ./dist"
    }
  }
  ```

> Note that the scripts in `package.json` can run webpack without having to specify the full path `./node_modules/.bin/parcel`, since `node.js` knows the location of each npm module path
> ![npm-path](./img/npm-path.png)

- These can be executed using the following command :

  ```bash
  # npm run <script-name>

  npm run start
  # or
  npm start

  # run this after finishing development and removed (dist, modules) folders and you are ready for deployment
  npm run build
  ```

#### Pre & Post Scripts

To create "**pre**" or "**post**" scripts for any scripts defined in the "scripts" section of the `package.json`, simply create another script with a matching name and add "`pre`" or "`post`" to the beginning of them.

- They're also called **npm lifehooks commands**:

  ```json
  {
    "scripts": {
      "precompress": "{{ executes BEFORE the `compress` script }}",
      "compress": "{{ run command to compress files }}",
      "postcompress": "{{ executes AFTER `compress` script }}"
    }
  }
  ```

---

### Yarn

[Different commands](https://classic.yarnpkg.com/lang/en/docs/cli/run/#toc-yarn-run-script)

---

### Package manager Notes

- **devDependency**: this saves it as a development dependency, which means it’s a package that you need in your development environment but not on your production server
  - it's done with the `--save-dev` argument
- `Bundling` with `parcel` creates a `script` not a `module`, so in html we shouldn't write `type="module"` in `<script>`
- if you're using `windows`, don't write scripts with **single quotation** as it won't work, so you'll have to use **double quotation**

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
