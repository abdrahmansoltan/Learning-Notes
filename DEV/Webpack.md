# INDEX

- [INDEX](#index)
  - [Webpack](#webpack)
    - [Why Webpack](#why-webpack)
  - [Webpack core concepts](#webpack-core-concepts)
    - [Entry and Output](#entry-and-output)
    - [Loaders](#loaders)
      - [How loaders work](#how-loaders-work)
    - [Plugins](#plugins)
  - [Installation and Configuration](#installation-and-configuration)
  - [Webpack different modes (Splitting Dev & Production)](#webpack-different-modes-splitting-dev--production)
    - [For Development](#for-development)
    - [webpack-dev-server](#webpack-dev-server)
    - [For Production](#for-production)
  - [Webpack Notes](#webpack-notes)

---

## Webpack

It's a **module bundler** that lets you write any module format (mixed bunch of different assets/files **of different types**), compiles them for working in the **browser**.

![webpack](./img/webpack.png)

There're 2 main things webpack does:

1. it bundles our code/assets together
2. it manages dependencies (modules)

- supports static Async bundling
- The most performant way to ship Javascript

> some people say that the problem of webpack is "that there isn't one way to do things" , and that is exactly why we have webpack in the web where everything is different as if every web application was created the same way, we wouldn't even need webpack but this is not the case

---

### Why Webpack

when you use different Javascript files that depend on each other, before we used to add multiple `<script>` tags to our `index.html` file with the correct order; Ex:

```html
<body>
  <!-- code -->
  <script src="./src/app/alert.service.js"></script>
  <script src="./src/app/utils/inputs-are-valid.js"></script>
  <script src="./src/app/utils/parse-inputs.js"></script>
  <!-- app.js must be the last one so that the other files are loaded already -->
  <script src="./src/app/app.js"></script>
</body>
```

- This will become tedious with managing more and more files and dependencies
- so we import files using ES6 imports/exports and then import the top level into an **entry file** that runs our code and webpack uses this file to create the **main javascript file** in the `dist` folder to be used in the `<script>` tag in the `index.html` file
- so we tell webpack how files are dependent on each other using `imports`/`exports`, and Webpack takes care of the rest making sure that everything is **loaded** in a valid order

---

## Webpack core concepts

### Entry and Output

- **Entry**: the first Javascript file to load to "kick-off" your app

  - Webpack uses this as the starting point

  ![webpack-entry](./img/webpack-entry.png)

- **Output**: tells webpack where and how to distribute bundles (compilations)
  ![webpack-output](./img/webpack-output.png)

- **Cache Busting**:
  ![cache busting](./img/cache-busting.png)

  - When a static file (like `main-output.js` file) gets cached it can be stored for very long periods of time before it ends up expiring. This can be an annoyance in the event that you make an update to a site (use new output js file that contains new or updated logic)
    - however, since the cached version of the file is **stored in your visitors' browsers**, they may be unable to see the changes made.
    - This is due to the fact that a visitor's browser will locally store a cached copy of your static assets given that your website is configured to leverage browser caching.
      ![cache busting](./img/cache-busting2.png)
  - Cache busting solves the browser caching issue by using a **unique file version identifier** to tell the browser that a new version of the file is available. Therefore the browser doesn't retrieve the old file from cache but rather makes a request to the origin server for the new file.
  - Cache busting is useful because it **allows your visitors to receive the most recently updated files without having to perform a hard refresh or clear their browser cache**. From a developer's point of view, using cache busting is beneficial so that the latest changes can be pushed out and become available to everyone immediately.
  - > So to summaries: **we bust outdated caches**
  - How to do it in webpack:

    ```js
    // webpack.config.js

    module.exports = {
      output: {
        path: '/dist',
        filename: 'bundle.[contentHash].js' // will be called like bundle.e883ce503b831d4dde09.js
      }
    };
    ```

  - You may think that this will cause another problem: **"How the html file is going to know what js file name it needs to use in the `<script>` tag ?"**
    - the answer is that now we won't be adding the `<script>` tag in the `html` file manually like we did; instead we will make Webpack build our `HTML` file and put it in the `dist` folder using [Plugins](#plugins) -> [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)

---

### Loaders

webpack by default bundles Javascript files, so when we want to bundle **non-javascript-files**, we use **loaders**

> **Loaders**: are the transformations that are applied on the source code of a module. They allow you to **pre-process** files as you `import` or `load` them. Thus, loaders are kind of like (**tasks** in other build tools) and provide a powerful way to handle frontend build steps, or like (allowing you to `import` css files directly from your Javascript modules).
>
> Loaders can transform files from a different language like:
>
> - Typescript to Javascript
> - inline images to data URLs

**Loaders**: tells webpack how to interpret and translate files (on a per-file basis) before adding to the `dependency-graph`

- here, we define **rules** on how we want to treat:
  - (**files that are not Javascript**) or files that match what's in the loaders
  - `use` to apply(use) the specified loader to the matching files
    - we can add loaders to the `use` key as an array with loaders name
    - or we can use an object to add options to the loader
- they're also javascript **modules** (functions) that takes the `source file` and return it in a `modifies state`
- you can find built-in loaders [here](https://webpack.js.org/loaders/)

- Example for using loaders for css files

  ```js
  // webpack.config.js

  module.exports = {
    // as we said; It's a module
    module: {
      rules: [
        {
          test: /\.css$/i, // REGEX expression: if we used a file ends with ".css" in a javascript file
          use: ['style-loader', 'css-loader'] // use these loaders
          // here we need these 2 loaders (with the right order) to work together, as:
          // css-loader : translate CSS to Javascript
          // style-loader : take the translated Javascript and injects it to the DOM
        }
      ]
    }
  };
  ```

- Example for using loaders for images files and **"src" attributes** in the `<img>` tags in html files
  - it uses the [html-loader](https://webpack.js.org/loaders/html-loader/)
- Example for using loaders with `options` key:

  ```js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]', // change the output image file name as you like
            outputPath: 'imgs'
          }
        }
      ]
    }
  };
  ```

  ![loader](./img/webpack-loader1.png)

---

#### How loaders work

- if webpack comes across something that matches one of the regular-expressions in the rule sets, then it applies (uses) the corresponding `node-module` to transform files while creating the `dependency-graph`
- This is a **per file process** and it doesn't happen in bulks

  ![webpack-loader](./img/webpack-loader.png)

- There're different kinds of features that help you filter/include/exclude/ignore/.. when you want to transform files
  ![webpack-loader](./img/webpack-loader2.png)
  ![webpack-loader](./img/webpack-loader3.png)

- **Chaining Loaders**:

  - loaders execute from **right to left**
    ![webpack-loader](./img/webpack-loader4.png)
    ![webpack-loader](./img/webpack-loader4.1.png)
    ![webpack-loader](./img/webpack-loader4.2.png)
    ![webpack-loader](./img/webpack-loader4.3.png)

    ```js
    // it's like calling multiple functions:
    style(css(less()));
    ```

---

### Plugins

They're instances of **Objects** with `apply` property, and they allow you to **hook into** the entire compilation lifecycle of events (the build process).

They add additional functionality to Compilations(optimized bundled modules). More powerful w/ more access to CompilerAPI. Does everything else you’d ever want to in webpack.

> - They work on a **bundle-level** and not file-level
>
> - A plugin is an ES5 ‘class’ which implements an apply function.
> - any built-it plugin begins with `webpack.` -> `new webpack.pluginName()`

- **How to use Plugins**:

  1. install the plugin
  2. `require()` plugin from `node_modules` into config.
  3. add **new instance** of plugin to plugins key in config object.
  4. provide additional info (data) for arguments

  ```js
  // require() from node_modules or webpack or local file
  var BellOnBundlerErrorPlugin = require(‘bell-on-error’);
  var webpack = require(‘webpack’);

  module.exports = {
    //...
    plugins: [
  new BellOnBundlerErrorPlugin(),

  // Just a few of the built in plugins
  new webpack.optimize.CommonsChunkPlugin(‘vendors’),
  new webpack.optimize.UglifyJsPlugin()
    ]
    //...
  }
  ```

---

## Installation and Configuration

```bash
# installation
npm install webpack webpack-cli webpack-dev-server --save-dev
```

How to use it ? -> three ways to use Webpack: `Webpack config`, `Webpack CLI`, and `Node API`

- **webpack.config.js**

  - It's afile with an exported object; yes, it's a module too!!!
  - it needs **entry(input)**, and **output**
  - without it, it will use default **vendors**(entry-file) (`.src/index.js`)
    - and if we have both it will load both -> (**Multiple Entrypoints**)

  ```js
  module.exports = {
    entry: {
      main: './src/main.browser.ts'
      vendor: './src/vendors.ts',
    },
    output: {
      filename: 'main.js',
      path: 'dist/'
    }
  };
  ```

  - now when you run webpack, you pass to it the config parameter:

    ```sh
    webpack --config webpack.config.js
    ```

- **Webpack CLI**

  ```sh
  webpack <entry.js> <result.js> --colors --progress

  webpack-dev-server --port=9000
  ```

- **Node API**

  ```js
  var webpack = require('webpack');

  // returns a Compiler instance
  webpack(
    {
      // configuration object here!
    },
    function (err, stats) {
      // …
      // compilerCallback
      console.error(err);
    }
  );
  ```

---

## Webpack different modes (Splitting Dev & Production)

![webpack.prod.js](./img/webpack-modes.png)

- Usually we have 2 modes (`development`, `production`), so we usually have 3 files:

  - `webpack.common.js` : this will have the common configuration between dev and prod
  - `webpack.dev.js` : this will have the development configuration
  - `webpack.prod.js` : this will have the production configurations

- To merge all these files; we will `require` a merge function from `webpack-merge`. This merge function will allow us to merge configurations from different files

  ```js
  const { merge } = require('webpack-merge');
  ```

- Now, to merge both files (`dev + common` or `prod + common`), we add the following syntax to the end of the file:

  ```js
  module.exports = merge(commonConfig, devConfig);
  ```

> You can find more here: [Webpack for Common, Development, and Production](https://www.linkedin.com/pulse/webpack-common-development-production-rany-elhousieny-phd%25E1%25B4%25AC%25E1%25B4%25AE%25E1%25B4%25B0/) and here: [Webpack Documentation](https://webpack.js.org/guides/production/)

---

### For Development

when you are in development mode, webpack does this:

- run the webpack tool that was installed in the `node_modules` folder, start with the `index.js` file, find any `require()` statements, and replace them with the appropriate code to create a single output file (which by default is **dist/main.js**).

  - The `--mode=development` argument is to keep the JavaScript readable for developers, as opposed to a minified output with the argument `--mode=production`.

  ```sh
  ./node_modules/.bin/webpack index.js --mode=development
  ```

- Note that we’ll need to run the webpack command each time we change `index.js`. This is tedious, Webpack can read options from a config file in the root directory of the project named webpack.`config.js`

  - create `webpack.config.js` file that contains this :

  ```js
  // webpack.config.js
  const path = require('path');

  module.exports = {
    mode: 'development', // here we specify the mode
    entry: './index.js',
    output: {
      filename: 'main.js',
      publicPath: 'dist'
    }
  };
  ```

  - Now each time we change `index.js`, we can run webpack with the command:

    ```sh
    ./node_modules/.bin/webpack
    ```

- and to use it with a task-runner, in `package.json` add this script :

  ```json
  // (--progress) option to show the percent progress
  "scripts": {
    "build": "webpack --progress --mode=production",
    "watch": "webpack --progress --watch"
    },
  ```

---

### webpack-dev-server

You can also use **webpack-dev-server**, a separate tool which provides a simple web server with live reloading. To install it as a development dependency:

```sh
npm install webpack-dev-server --save-dev
```

```json
// package.json
"scripts": {
  "build": "webpack --progress -p",
  "watch": "webpack --progress --watch",
  "serve": "webpack-dev-server --open" // Here (starts the server + Opens the web page for us)
  },
```

> **Note:** Each time you make changes to `.config` file, you need to restart the server

- How it works:
  - it creates a live server based on (**webpack-dev-middleware** + **Express**), and saves the bundle in memory
  - it creates a **webSocket** to compare the bundle in memory and send a notification if the bundle changed
  - read more online...

---

### For Production

- in `package.json` add this script :

  ```json
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack --config webpack.config.prod.js"
    },
  ```

- install `clean-webpack-plugin` package to clean the `dist` folder whenever we **rebuild** the project

```bash
npm i --save-dev clean-webpack-plugin
```

- For `Production` --> create `webpack.config.prod.js` file that contains this :

  ```js
  const path = require('path');
  const CleanPlugin = require('clean-webpack-plugin');

  module.exports = {
    mode: 'production',
    entry: './src/app.ts',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'none',
    plugins: [new CleanPlugin.CleanWebpackPlugin()]
  };
  ```

- Try to use commonJS imports and exports(default & named)

  - on example is in the `config` file where the config object is exporting using commonJS exports

    ```js
    module.exports = {
      // configs
    };
    ```

- try to only import what you're using instead of general imports or importing the entire file/library; as webpack bundles leverages this information to only bundle these information
  - This is called **Tree Shaking**
    - > (only use the things that we're accessing and get rid of anything else) which can prune out individual blocks of code (e.g. class, functions) that aren’t actually ever referenced.
      > [tree shaking video](https://media.slid.es/videos/75854/SElQtz0d/cleanshot_2020-09-17_at_07.mp4)
  - as it removes unused things
- if you saw the resulted bundled `.js` file, you would find that modules are treated as **IIFE** or **Array of IIFE's** to control scope.
  - this is sometimes called -> **"webpackBootstrap"**
- usually objects in resulted file are frozen (to prevent modifying it), so they use `getters` to get data
- in `production mode`, output files will be minified unlike in `development mode`

---

## Webpack Notes

- **Loaders**: process files that aren't Javascript (ex: `sass` to `css`) using rules
  - loaders are combined in the `use` array in the `rules`
- **Plugins**: tap into the entire compilation of the bundler lifecycle

- **Extract CSS & Minify HTML/CSS/JS**

  - In **production**, with the use of normal loaders for css like ['style-loader'](https://webpack.js.org/loaders/style-loader/), we find that the css is loaded(injected) into the internal `<styles>` tag in the `html` file (DOM) **(After it's loaded)**, which may cause (**flash of content**) due to the loading of the html file and displaying it before we inject the css in it which will display the page at first without styles
  - to avoid this behavior, we use a plugin called ["mini-css-extract-plugin"](https://www.npmjs.com/package/mini-css-extract-plugin), which will create external `css` file and add it to the `<link>` tag in our `html` file during the compilation process
  - > note that it's normal to use the `"style-loader"` in development mede, so we add it to the `webpack.dev.js` file and remove it from `webpack.prod.js`

- We don't minify in development mode, we do it only in production

---
