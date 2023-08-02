# INDEX

- [INDEX](#index)
  - [Package manager](#package-manager)
  - [NPM](#npm)
  - [Yarn](#yarn)
  - [Package manager Notes](#package-manager-notes)
  - [npm scripts](#npm-scripts)
    - [Chaining commands](#chaining-commands)
    - [Pre \& Post Scripts](#pre--post-scripts)

---

## Package manager


---

## NPM

- `npm init`
  - generate a new file named `package.json` This is a configuration file that npm uses to save all project information.
    - it can be described as a manifest of your project that includes the packages and applications it depends on, information about its unique source control, and specific metadata like the project's name, description, and author.
    - it is always structured in the JSON format, which allows it to be easily read as metadata and parsed by machines.
  - > You can use `npm init --yes` to Instantly Initialize a Project
- `npm install package-name`

  - This command does two things:
    1. first, it downloads all the package-code from the **NPM Registry** into a folder called `node_modules`.
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

## Yarn

[Different commands](https://classic.yarnpkg.com/lang/en/docs/cli/run/#toc-yarn-run-script)

---

## Package manager Notes

- **devDependency**: this saves it as a development dependency, which means it’s a package that you need in your development environment but not on your production server
  - it's done with the `--save-dev` argument or `-D`
- When a package has a version starts with **`^`**, this means that we tell tha package manager to install **the latest version**
- `Bundling` with `parcel` creates a `script` not a `module`, so in html we shouldn't write `type="module"` in `<script>`
- if you're using `windows`, don't write scripts with **single quotation** as it won't work, so you'll have to use **double quotation**
- You may notice that the `node_modules` folder contains other folders (packages) than what we installed. This is because **each package may have its own dependencies**, so they are all installed in the `node_modules` folder.
- **Symantics Versioning**: is a standard for versioning packages. It has three parts: `major.minor.patch`.
  - For example, `1.2.3` is a `SemVer` version. The `major` version is incremented when there are breaking changes, the `minor` version is incremented when there are new features, and the `patch` version is incremented when there are bug fixes.
  - More here -> [semantic-versioning](../Node.js//1-Node.md#semantic-versioning)

---

## npm scripts

It is a tool that automates different parts of the build process (Triggering Build Workflow). For frontend development, tasks include `minifying code`, `optimizing images`, `running tests`, etc.

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

### Chaining commands

- when you want to chain commands for a script like "go to folder then run `npm start`", you can use the `&&` or the `--prefix` option:

  ```sh
  cd client && npm start
  # or
  npm start --prefix client
  ```

- **`&` vs `&&`**

  - `&`: do the second command in the background and don't wait for the first one to finish
    - this is useful for commands with servers as servers stay working and don't finish
  - `&&`: do the second command after the first one finishes

### Pre & Post Scripts

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
