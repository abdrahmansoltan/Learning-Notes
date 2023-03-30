# INDEX

- [INDEX](#index)
  - [Progressive Web Apps PWA](#progressive-web-apps-pwa)
    - [PWA Components](#pwa-components)
      - [Manifest](#manifest)
      - [Service Workers](#service-workers)
      - [HTTPS](#https)
  - [Performance](#performance)
    - [Minimize images](#minimize-images)
    - [Critical Render PATCH](#critical-render-patch)
    - [Rollup Visualizer](#rollup-visualizer)
  - [Gulp.js](#gulpjs)
    - [Gulp vs Webpack](#gulp-vs-webpack)
  - [Pug.js](#pugjs)
  - [SEO](#seo)

---

## Progressive Web Apps PWA

It's a term used to describe a set of features and APIs in the browser

PWAs are better than the mobile web and offer a much faster, reliable and engaging experience. If implemented well, they offer an integrated/immersive mobile experience

![pwa](./img/pwa.png)

- It's a term used to describe a set of features and APIs in the browser
- Progressive Web Apps are user experiences that have the reach of the web, and are:

  - reliable
  - fast
  - engaging

- Guide to install a PWA:
  - [What does it take to be installable?](https://web.dev/install-criteria/)

### PWA Components

![pwa](./img/pwa2.png)

#### Manifest

- It defines how the application is displayed to the user and how it gets launched. All metadata related to the app is also defined here — starting URL, full and short name, link icons, splash screen and so on.

- creating manifest -> [making app installable](https://web.dev/install-criteria/)

#### Service Workers

- It's a Javascript file that runs in the background Asynchronously (separate from our code and can run in a separate thread in the background)
- Service workers **enable offline work mode**, background syncs and **push notifications**. **Caching** and **storage APIs** available to service works allow pre-caching of content. As defined on Google developer, a service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don’t need a web page or user interaction.
  ![service worker](./img/serviceworker.PNG)
- Limitations:
  - unable to access the DOM
  - limited browser supports
- caching ![caching](./img/caching.PNG)
- How to create service worker:
  - option 1: manually
  - option 2: using [Workbox](https://developer.chrome.com/docs/workbox/) which is usually added to PWA plugins

#### HTTPS

- For security and preventing hackers from seeing your requests

---

## Performance

![performance](./img/performance.PNG)

### Minimize images

![minimize_img](./img/min-img.PNG)

### Critical Render PATCH

It's how the files are handled after being downloaded from the source

![Critical Render PATCH](./img/critical%20render%20path.PNG)

### Rollup Visualizer

Tool to Visualize and analyze your Rollup bundle to see which modules are taking up space.

![rollup](./img/rollup.png)

---

## Gulp.js

A toolkit (**Task Runner**) to automate & enhance your workflow to automate slow, repetitive workflows and compose them into efficient build pipelines.
![gulp](./img/gulp.PNG)

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

![Gulp vs Webpack](./img/Gulp-vs-Webpack-info.jpg.jpg)

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
