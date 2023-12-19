# INDEX

- [INDEX](#index)
  - [Web Browsers](#web-browsers)
    - [Architecture of web browser](#architecture-of-web-browser)
    - [Roles of Rendering Engine](#roles-of-rendering-engine)
  - [Web Components](#web-components)
  - [Gulp.js](#gulpjs)
    - [Gulp vs Webpack](#gulp-vs-webpack)
  - [Pug.js](#pugjs)
  - [SEO](#seo)

---

## Web Browsers

> Reference: [How browsers work](https://web.dev/howbrowserswork/)

Web browser is a software application that enables a user to access and display web pages or other online content through its graphical user interface.

### Architecture of web browser

![BrowserEngine](./imb/../img/BrowserEngine.png)

- **User Interface**: This component allows end-users to interact with all visual elements available on the web page. The visual elements include the `address bar`, `home button`, `next button`, and all other elements that fetch and display the web page requested by the end-user.
- **Browser Engine**: It is a core component of every web browser. The browser engine functions as an intermediary or a bridge between the user interface and the rendering engine. It queries and handles the rendering engine as per the inputs received from the user interface.
- **Rendering Engine**: It's responsible for rendering a specific web page requested by the user on their screen. It interprets `HTML` and `XML` documents along with `images` that are styled or formatted using `CSS`, and a final layout is generated, which is displayed on the user interface.
- **Networking**: This component is responsible for managing network calls using standard protocols like `HTTP` or `FTP`. It also looks after security issues associated with internet communication.
- **JavaScript Interpreter**: It's responsible for parsing and executing the JavaScript code embedded in a website.
  - Once the interpreted results are generated, they are forwarded to the rendering engine for displaying on the user interface.
- **UI Backend**: This component uses the user interface methods of the underlying operating system. It is mainly used for drawing basic widgets (windows and combo boxes).
- **Data Storage/Persistence**: It is a persistent layer. A web browser needs to store various types of data locally, for example, `cookies`. As a result, browsers must be compatible with data storage mechanisms such as `WebSQL`, `IndexedDB`, `FileSystem`, etc.

---

### Roles of Rendering Engine

![render-engine](./img/render-engine.png)
Once a user requests a particular document, the rendering engine starts fetching the content of the requested document. This is done via the networking layer. The rendering engine starts receiving the content of that specific document in chunks of `8 KBs` from the networking layer. After this, the basic flow of the rendering engine begins.

The four basic steps include:

1. The requested HTML page is parsed in chunks, including the external CSS files and in style elements, by the rendering engine. The HTML elements are then converted into DOM nodes to form a “content tree” or “**DOM tree**”
2. Simultaneously, the browser also creates a **render tree**. This tree includes both the styling information as well as the visual instructions that define the order in which the elements will be displayed. The render tree ensures that the content is displayed in the desired order.
3. Further, the render tree goes through the **layout process**. When a render tree is created, the position or size values are not assigned. The entire process of calculating values for evaluating the desired position is called a **layout process**.
   - In this process, every node is assigned the exact coordinates. This ensures that every node appears at an accurate position on the screen.
4. The final step is to **paint** the screen, wherein the render tree is traversed, and the renderer’s `paint()` method is invoked, which paints each node on the screen using the UI backend layer.

> **NOTE**: every browser has its own unique rendering engine. So naturally, every browser has its own way of interpreting web pages on a user’s screen. Here’s where a challenge arises for web developers regarding the cross-browser compatibility of their website.

---

## Web Components

It's a set of web platform APIs that allow you to create new **custom**, **reusable**, **encapsulated** `HTML` tags to use in web pages and web apps.

- It enables us to reuse code without fear of code collisions and conflicts with other code on the page
- It consists of 3 main technologies:

  - **Custom Elements**:
    - A set of JavaScript APIs that allow you to define custom elements and their behavior, which can then be used as desired in your user interface.
    - This is done by creating a `class` that extends the `HTMLElement` class with the desired behavior and then registering the new element using the `customElements.define()` method
    - Each custom element has also `life cycle hooks` that can be used to add some functionality to the element
      - create, insert, remove, attribute change, etc.
  - **Shadow DOM**:
    - A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality.
    - In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document. **(Isolate DOM fragments (`HTML` / `CSS`)from the main document DOM tree)**
    - This is done by creating a `shadowRoot` using the `attachShadow()` method and then adding the desired elements to it
  - **HTML Templates**:
    - The `<template>` and `<slot>` elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure.
    - This is done by creating a `<template>` element and adding the desired elements to it

- This is the main idea behind `React`, `Vue`, `Angular`, etc. frameworks. They are all based on the idea of creating **reusable** `HTML` components

- Example:

  ```js
  class MyElement extends HTMLElement {
    constructor() {
      super();
      // Create a shadow root
      const shadow = this.attachShadow({ mode: 'open' });

      // Create elements
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'wrapper');

      const icon = document.createElement('span');
      icon.setAttribute('class', 'icon');
      icon.setAttribute('tabindex', 0);

      const info = document.createElement('span');
      info.setAttribute('class', 'info');

      // Take attribute content and put it inside the info span
      const text = this.getAttribute('text');
      info.textContent = text;

      // Insert icon
      let imgUrl;
      if (this.hasAttribute('img')) {
        imgUrl = this.getAttribute('img');
      } else {
        imgUrl = 'img/default.png';
      }

      const img = document.createElement('img');
      img.src = imgUrl;
      icon.appendChild(img);

      // Create some CSS to apply to the shadow dom
      const style = document.createElement('style');

      style.textContent = `
        .wrapper {
          position: relative;
        }
        .info {
          font-size: 0.8rem;
          width: 200px;
          display: inline-block;
          border: 1px solid black;
          padding: 10px;
          background: white;
          border-radius: 10px;
          opacity: 0;
          transition: 0.6s all;
          position: absolute;
          bottom: 20px;
          left: 10px;
          z-index: 3;
        }
        img {
          width: 1.2rem;
        }
        .icon:hover + .info, .icon:focus + .info {
          opacity: 1;
        }
      `;

      // Attach the created elements to the shadow dom
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
      wrapper.appendChild(icon);
      wrapper.appendChild(info);
    }
  }

  // Define the new element
  customElements.define('my-element', MyElement);
  // or window.customElements.define('my-element', MyElement);
  ```

  ```html
  <my-element img="img/1.png" text="Hello World!"></my-element>

  <!--  it will be rendered as: -->
  <div class="wrapper">
    <span class="icon" tabindex="0">
      <img src="img/1.png" />
    </span>
    <span class="info">Hello World!</span>
  </div>
  ```

> More Here: [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)

---

## Gulp.js

A toolkit (**Task Runner**) to automate & enhance your workflow to automate slow, repetitive workflows and compose them into efficient build pipelines.

> It's like creating the **build** folder in frameworks

Example of repeated tasks:

- Sass -> css
- Pug.js-code -> HTML-code
- minify (css, js) files
- compress images for smaller size
- automatic writing of css-prefixes
- legacy code -> ES6 code

---

### Gulp vs Webpack

Webpack is a **bundler** whereas Gulp is a **task runner**

- Simply put, Webpack is such a powerful tool that it can already perform the vast majority of the tasks you’d otherwise do through a task runner. For instance, Webpack already provides options for minification and sourcemap for your bundle. In addition, Webpack can be run as middleware through a custom server called webpack-dev-server, which supports both live reloading and hot reloading

![Gulp vs Webpack](./img/Gulp-vs-Webpack-info.jpg)

---

## Pug.js

It's a **template engine** designed to render HTML in server-side technologies such as Node.js. Like any JavaScript template engine, `Pug.js` supports writing **reusable** HTML code and rendering dynamic data.

> A template engine is a program which is responsible for compiling a template (that can be written using any one of a number of languages) into HTML. The template engine will normally receive data from an external source, which it will inject into the template it’s compiling.

- It's another way for writing HTML code with ability to write **HTML components**

---

## SEO

Search engine optimization is the practice of trying to help your site appear nearer the top of search engine results when people look for the topics that your website covers.

- At the heart of SEO is the idea of working out which terms people are likely to enter into a search engine to find your site and then using these terms in the right places on your site to increase the chances that search engines will show a link to your site in their results.
- SEO is often split into two areas:
  - **on-page techniques**
    - methods you can use on your web pages to improve their rating in search engines.
  - **off-page techniques**
    - Getting other sites to link to you
    - Search engines help determine how to rank your site by looking at the number of other sites that link to yours.