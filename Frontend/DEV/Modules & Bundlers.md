# INDEX

- [INDEX](#index)
  - [Modules](#modules)
    - [Problems with script loading](#problems-with-script-loading)
    - [History of Modules](#history-of-modules)
      - [CommonJS](#commonjs)
      - [EcmaScript Modules (ESM)](#ecmascript-modules-esm)
  - [Parcel](#parcel)
  - [Webpack](#webpack)
  - [Vite](#vite)
    - [Why Vite](#why-vite)
      - [The Problems](#the-problems)
        - [Slow Server Start](#slow-server-start)
        - [Slow Updates](#slow-updates)
    - [Bundle-based vs Native-ESM-based Dev server](#bundle-based-vs-native-esm-based-dev-server)
      - [Bundle-based Dev Server](#bundle-based-dev-server)
      - [Native-ESM-based Dev Server](#native-esm-based-dev-server)
    - [Why Bundle for Production](#why-bundle-for-production)
    - [Why Not Bundle with esbuild?](#why-not-bundle-with-esbuild)
    - [Browser Support](#browser-support)
  - [esbuild](#esbuild)
  - [Difference between Vite and Webpack](#difference-between-vite-and-webpack)

---

## Modules

As our application grows bigger, we want to split it into multiple files, so called “modules”. A module may contain a class or a library of functions for a specific purpose.

### Problems with script loading

- We have some problems when trying to run javascript in the browser:

  - too many scripts
    - that exceeds the max number of default simultaneous persistent connections per server/proxy
  - unmaintainable scripts
    - `scope`, `size`, `readability`, `fragility`, `monolith files`

- solution:
  - using **IIFE's**, as we treat each file as IIFE (revealing module), also this enables us to (**concatenate** files together): we can safely combine files without concern of scope collision!
- we had other problems:
  - "Full rebuilds every time there's a change"
  - lots of IIFE's are **slow** -> [The cost of small modules](https://nolanlawson.com/2016/08/15/the-cost-of-small-modules/)

---

### History of Modules

When scripts became more and more complex, so the community invented a variety of ways to organize code into modules, special libraries to load modules on demand:

- **AMD** – one of the most ancient module systems, initially implemented by the library `require.js`.
- **CommonJS** – the module system created for `Node.js` server.
- **UMD** – one more module system, suggested as a universal one, compatible with `AMD` and `CommonJS`.

#### CommonJS

- With the creation of `Node.js`, we needed a way to run Javascript outside of the browser, this is where `commonJS` was born

  ```js
  const path = require('path');
  ```

- `NPM` was created as a package strategy to share **commonJS node modules** across the entire ecosystem
- Modules also had problems:
  - No live bindings
  - No browser support for commonJS
  - slow module loader (slow) -> as it's **synchronous**
- this is where **bundlers** and **linkers** started to get popular, but they also had problems
- this led to a solution which is -> **ESM**

#### EcmaScript Modules (ESM)

It's a standard pattern for importing JavaScript modules.

```js
import { uniq, forOf, bar } from 'lodash-es';
import * as utils from 'utils';

export const uniqConst = uniq([1, 2, 2, 4]);
```

- it's different from **ES2015**
- it's still not fully compatible with `Node.js`
- but you may ask: "How do they work in the browser?"
  - the answer is: "they're incredibly **SLOW**"; it's like unusable after 10 modules

> **This is where WEBPACK was born**

---

## Parcel

`parcel` is a **zero configuration** build tool for the web. It combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.

- results will be in `dist` folder
- [parcel installation](https://parceljs.org/getting-started/webapp/)

  ```sh
  npm i parcel --save-dev # or
  npm i parcel -D

  npx parcel index.html  # this will run parcel in development mode
  ```

  - It's a dev dependency not a production one

- Using it

  - run `npx parcel index.html` in the terminal, we specify an entry point `index.html` which is the main file of our project (it's the file that we want to start with).
  - you can import something from a `package` and parcel will automatically find the path for the module, and even more : if `package` isn't installed => parcel will install it

    ```js
    // instead of this
    import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

    // use this
    import cloneDeep from 'lodash-es';
    ```

  - importing any static assets like `images, icons,...` that are not `programming-files` when importing them (as its location is change when Bundling) => we do it like this:

    ```js
    import icons from '../img/icons.svg'; // Parcel version 1
    import icons from 'url:../../img/icons.svg'; // Parcel version 2 (now)

    // using it
    const markup = `
      <svg>
        <use xlink:href="${icons}#icon-${iconName}"></use>
      </svg>
    `;
    ```

    - This is to solve the problem of the path of the image when bundling the files, as the path of the image will change when bundling the files to be in the `dist` folder and not in the `src` folder

- `parcel` is also capable of bundling `sass` files into `css` files

  - this is done by `npm i sass`, and making sure that you are referencing the sass file in the `index.html` file

    ```html
    <link rel="stylesheet" href="src/sass/main.scss" />
    ```

- Results

  - `parcel` will create a `dist` folder that contains the bundled files (`html` file with `js` script tag (module) and `css` link tag)

    - starter files will be like this:

      ```html
      <script type="module" src="src/index.js"></script>
      <link rel="stylesheet" href="src/sass/main.scss" />
      ```

    - build files will be like this:

      ```html
      <script type="module" src="src.1e7b7b7e.js"></script>
      <link rel="stylesheet" href="src.1e7b7b7e.css" />
      ```

  - `parcel` will also create a `cache` folder that contains the cache files that are used to speed up the bundling process

---

## Webpack

[Webpack](./Webpack.md)

---

## Vite

> Fun fact: It's a french word meaning **"Fast / Quick"**

It's a build tool (module bundler) that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

1. A **dev server** that provides rich feature enhancements over `native ES modules`, for example extremely fast `Hot Module Replacement (HMR)`.
2. A **build command** that bundles your code with `Rollup`, pre-configured to output highly optimized static assets for production.

in summary, Vite tries to let the browser do more work for us

### Why Vite

![why vite](./img/why-vite.png)

#### The Problems

- Before ES modules were available in browsers, developers had no native mechanism for authoring JavaScript in a **modularized** fashion. This is why we are all familiar with the concept of **"bundling"**: using tools that `crawl`, `process` and `concatenate` our source modules into files that can run in the browser.
- Over time we have seen tools like `webpack`, `Rollup` and `Parcel`, which greatly improved the development experience for frontend developers.
- It is not uncommon for large scale projects to contain thousands of modules. We are starting to hit a performance bottleneck for JavaScript based tooling: it can often take an unreasonably long wait (sometimes up to minutes!) to spin up a dev server, and even with `Hot Module Replacement (HMR)`, file edits can take a couple of seconds to be reflected in the browser.

Vite aims to address these issues by leveraging new advancements in the ecosystem: the availability of native **ES modules in the browser**, and the rise of **JavaScript tools written in compile-to-native languages**

---

##### Slow Server Start

- When cold-starting the dev server, a bundler-based build setup has to eagerly crawl and build your entire application before it can be served.
- Vite improves the dev server start time by first dividing the modules in an application into two categories: **dependencies** and **source code**.
  - **dependencies**: are mostly plain JavaScript that do not change often during development. Dependencies may also be shipped in various module formats (e.g. `ESM` or `CommonJS`).
    - **Vite** pre-bundles dependencies using [esbuild](https://esbuild.github.io/). `esbuild` is written in `Go` and pre-bundles dependencies **10-100x** faster than JavaScript-based bundlers.
  - **Source code**: often contains non-plain JavaScript that needs transforming (e.g. `JSX`, `CSS` or `Vue/Svelte components`), and **will be edited very often**. - Also, not all `source code` needs to be loaded at the same time (e.g. with **route-based code-splitting**). - Vite serves `source code` over [native ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). This is essentially letting the browser take over part of the job of a bundler: **Vite only needs to transform and serve source code on demand, as the browser requests it**. - This means that Code behind conditional dynamic `imports` is only processed if actually used on the current screen.

---

##### Slow Updates

- When a file is edited in a bundler-based build setup, it is inefficient to rebuild the whole bundle for obvious reasons: the **update speed will degrade linearly with the size of the app**.
- In some bundlers, the dev server runs the bundling in memory so that it only needs to invalidate part of its module graph when a file changes (like in `Virtual DOM`), but it still needs to re-construct the entire bundle and reload the web page.
- Reconstructing the bundle can be expensive, and reloading the page blows away the current `state` of the application. This is why some bundlers support `Hot Module Replacement (HMR)`: **"allowing a module to "hot replace" itself without affecting the rest of the page"**. This greatly improves DX - however, in practice we've found that even HMR update speed deteriorates significantly as the size of the application grows.
  - In Vite, `HMR` is performed over `native ESM`. When a file is edited, Vite only needs to precisely invalidate the chain between the edited module and its closest HMR boundary (most of the time only the module itself), making HMR updates consistently fast regardless of the size of your application.
- Vite also leverages **HTTP headers** to speed up full page reloads (again, let the browser do more work for us): source code module requests are made conditional via `304 Not Modified`, and dependency module requests are strongly cached via `Cache-Control: max-age=31536000`,immutable so they don't hit the server again once cached.

---

### Bundle-based vs Native-ESM-based Dev server

#### Bundle-based Dev Server

![bundle-based-dev-server](./img/bundle-based-dev-serverpng.png)

1. bundles all your code/files (`entry-file`, `routes`, `modules`) into a single bundle
2. this single bundle will be served into a server, so that the browser can download this specific bundle (every time you make a development change)

#### Native-ESM-based Dev Server

![native-esm-based-dev-server](./img/native-esm-based-dev-server.png)

1. At first, we have the server ready for us (the start point)
2. Vite only provide the server with the `entry file`, ex: `index.js`
3. (Optional) -> you can do now `bundle-splitting`, `dynamic-imports`, `lazy-loading`,....
4. as now most of the browsers supports `ESM modules` (`import`/`export` instead of common.js), so we use it for only loads what we need
   - The server takes care of loading the files we want to run separately on every single request (only loads the routes that it needs)

---

### Why Bundle for Production

- Even though `native ESM` is now widely supported, shipping unbundled ESM in production is still inefficient (even with `HTTP/2`) due to the additional network round trips caused by nested imports.
- To get the optimal loading performance in production, it is still better to bundle your code with `tree-shaking`, `lazy-loading` and `common chunk splitting` (for better caching).

---

### Why Not Bundle with esbuild?

- While `esbuild` is extremely fast and is already a very capable bundler for libraries, some of the important features needed for bundling applications are still work in progress - in particular `code-splitting` and `CSS handling`.
- For the time being, **Rollup** is more mature and flexible in these regards.

---

### Browser Support

- The default build targets browsers that support `native ES Modules`, `native ESM dynamic import`, and `import.meta`.
- Legacy browsers can be supported via the official [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy)

---

## esbuild

It's an extremely fast JavaScript bundler

It's written in **Go** Language, this is ok as you may use whatever language other than Javascript for **Tooling**. but the language on the web is still Javascript

---

## Difference between Vite and Webpack

- while debugging in **devTools**, you will find that:
  - Webpack has one js file with its custom configuration, the problem is it may be difficult to read and understand
  - Vite on the other hand, requests all the used files as they are in your local files, so they are very easy to read and debug
- Webpack has more custom configuration as it's more mature
