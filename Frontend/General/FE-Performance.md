# INDEX

- [INDEX](#index)
  - [Performance](#performance)
  - [Minify / Minimize files](#minify--minimize-files)
    - [Minimize images](#minimize-images)
  - [Critical Render Path](#critical-render-path)
  - [Code Splitting](#code-splitting)
  - [Tree Shaking](#tree-shaking)
  - [Avoid blocking main thread](#avoid-blocking-main-thread)
  - [Avoid memory leaks](#avoid-memory-leaks)
  - [Avoid multiple re-rendering](#avoid-multiple-re-rendering)
  - [Caching](#caching)
  - [Rollup Visualizer](#rollup-visualizer)
  - [Web Vitals and Performance Score](#web-vitals-and-performance-score)
    - [Web Vitals](#web-vitals)
    - [LightHouse](#lighthouse)

---

## Performance

![performance](./img/performance.PNG)

---

## Minify / Minimize files

- `Minify`: It's the process of removing all unnecessary characters from the source code without changing its functionality.
- `Minimize`: It's the process of reducing the size of the file by changing the format of the file.

- **Minify tools**

  - usually done in frameworks automatically to minify the javascript and css files into one file in the build phase to reduce the size/number of the files and the number of requests
  - used in `webpack`, `gulp`, `rollup`, `parcel`, etc.

### Minimize images

![minimize_img](./img/min-img.PNG)

- `imigx`: tool to minimize images and reduce their size and quality + cache them by `CDN`
- Images `metadata` contains information about the image such as the size, the color profile, the number of pixels, etc.
  - This information is not needed for the image to be displayed on the web page. Therefore, it can be removed to reduce the size of the image.
  - Also, it's sometimes removed by the frameworks automatically

---

## Critical Render Path

It's how the files are handled after being downloaded from the source

It's a step in the [rendering process in the browser](./Frontend.md#web-browsers) where the browser parses the `HTML` and `CSS` files and builds the DOM and `CSSOM` trees. The browser then combines the DOM and `CSSOM` trees to form the render tree. The render tree is then used to compute the layout of each visible element and paints them on the screen.

![Critical Render PATCH](./img/critical%20render%20path.PNG)

- To improve the critical render path, we need to handle the way the browser handles the files downloading process and the way it parses the files

  - Ex: we can use `async` and `defer` attributes in the `script` tag to handle the way the browser handles the files downloading process to prevent blocking the `DOM` tree from being built

    ```html
    <script src="script.js" async></script>
    ```

  - Ex: CSS is considered a **render-blocking resource**. This means that the browser will not render any processed content until the `CSSOM` is constructed.

    - To prevent this, we can use the `preload` attribute in the `link` tag to tell the browser to download the CSS file as soon as possible without blocking the `DOM` tree from being built

      ```html
      <link rel="preload" href="style.css" as="style" />
      ```

    - Another way is to load the stylesheets manually using `JavaScript` to prevent blocking the `DOM` tree from being built

      ```js
      // add this code in the "onload" event listener of the "window" object
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'style.css';
      document.head.appendChild(link);
      ```

    - To also improve the performance from the `css` side, we can reduce complicated specificity and reduce the number of selectors to reduce the time needed to calculate these specificities.

      ```css
      /* bad */
      .container .item .title {
        color: red;
      }

      /* good */
      .title {
        color: red;
      }
      ```

- How to measure the performance of the `js` part in the critical render path?

  - We can use the `Performance` API to measure the performance of the `js` part in the critical render path

    ```js
    // add this code in the "onload" event listener of the "window" object
    const t0 = performance.now();
    // code to be measured
    const t1 = performance.now();
    console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
    ```

  - We can also use the browser `devtools` to measure the performance of the `js` part in the critical render path

    ![performance](./img/performance-1.png)

    - The `yellow` part is the `js` scripting part, it includes the **(parsing, compiling, executing)** parts
    - most of this time is from compiling and executing the code
      - for `compiling`, we can use "Ahead of Time `AOT`" compilation to reduce the time needed to compile the code instead of using "Just in Time `JIT`" compilation, like `Angular` does

---

## Code Splitting

It's an optimization technique to improve the performance of the web application by splitting the code into smaller **chunks** to reduce the size of the files and the **number of requests** (avoiding large bundles)

- With code splitting, developers can decide to load whole blocks of JavaScript only in response to some user interaction, like clicks or route changes (or other conditions).
  ![code splitting](./img/code-splitting-1.png)
  ![code splitting](./img/code-splitting-2.png)

- It's also called **"Progressive bootstrapping"** or **"Lazy loading"**
- It reduces the **execution time** of the code by loading only the required code for the current page instead of loading all the code at once
- It's done using `webpack`, `rollup`, `parcel`, etc.
  ![code splitting](./img/code-splitting-3.jpeg)
- Types:
  1. **Route-based code splitting**: splitting the code based on the routes
  2. **Component-based code splitting**: splitting the code based on the components
  3. **Dynamic code splitting**: splitting the code based on the user's actions

---

## Tree Shaking

---

## Avoid blocking main thread

---

## Avoid memory leaks

---

## Avoid multiple re-rendering

---

## Caching

Caching in client-side applications is the process of storing data in the browser for later use. This data can be fetched from the server or generated by the application itself.

- It's used to reduce the number of requests to the server and to reduce the time needed to fetch the data from the server

  - for example, caching the `js` files downloaded from the server to reduce the number of requests to the server and to reduce the time needed to fetch the `js` files from the server

    - if the bundle changed or updated, the server will send the new bundle and the browser will download it and cache it again. This is called **"cache busting"**
      ![cache busting](./img/cache-busting-1.avif)
      ![cache busting](./img/cache-busting-2.png)

  - Also, when serving static `SSR` files, they will have a different status codes based on if it's cached or not
    - `200` -> modified (First time the file is requested)
    - `304` -> not modified (The file is cached)
      - also, will have `ETag` header to check if the file is modified or not
        ![cache busting](./img/cache-busting-3.png)
  - > More, here [HTTP cache](https://web.dev/articles/http-cache)

- `storage` in the browser
  - local storage
  - session storage
- `cache`
  - cache storage
  - application cache

---

## Rollup Visualizer

Tool to Visualize and analyze your Rollup bundle to see which modules are taking up space.

- EX: [webpack bundle analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) for `webpack` and [rollup visualizer](https://www.npmjs.com/package/rollup-plugin-visualizer) for `rollup`
  ![rollup](./img/rollup.png)

---

## Web Vitals and Performance Score

### Web Vitals

They are a set of metrics that Google uses to measure the performance of a website. They are a subset of the Core Web Vitals, which are a set of metrics that Google uses to measure the performance of a website.

- **Largest Contentful Paint (LCP)**: measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.
- **First Input Delay (FID)**: measures interactivity. To provide a good user experience, pages should have a FID of less than 100 milliseconds.
- **Cumulative Layout Shift (CLS)**: measures visual stability. To provide a good user experience, pages should maintain a CLS of less than 0.1.
- **Total Blocking Time (TBT)**: measures responsiveness. To provide a good user experience, pages should have a TBT of less than 300 milliseconds.
- **Time to First Byte (TTFB)**: measures the time from the start of the initial navigation until the browser receives the first byte of the response.

---

### LightHouse

It's a tool to measure the performance of the website and give it a score

- It's a tool that runs a series of audits against a web page, and then generates a report on how well the page did.
- It's available as a Chrome extension, a web page, a Node module, and a Chrome `DevTools` audit.
- It also gives score for the **PWA** components

---

[⬆ back to top](#index)
