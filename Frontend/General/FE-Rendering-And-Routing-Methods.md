# INDEX

- [INDEX](#index)
  - [SSR vs CSR](#ssr-vs-csr)
    - [SSR: Server Side Rendering](#ssr-server-side-rendering)
    - [CSR: Client Side Rendering](#csr-client-side-rendering)
    - [Progressive Rendering](#progressive-rendering)
  - [Routing](#routing)
    - [Server-Side Routing (Traditional Routing)](#server-side-routing-traditional-routing)
    - [Client Side Routing](#client-side-routing)

---

## SSR vs CSR

### SSR: Server Side Rendering

It's a technique in which the HTML is pre-generated.

- The server renders the HTML code and sends it to the client, and the client renders the HTML code and display UI content with little or no activity
  - Once any activity happens, the client sends a request to the server to get the new HTML code and the server renders the HTML code and sends it to the client, and the client renders the HTML code and display UI content with little or no activity
    ![SSR](./img/SSR.png)
    - Here, there's no loading states for the data to be rendered as the server is responsible for rendering the HTML code and sending it to the client, so the end-user will have a better experience as the UI content will be displayed faster even though the data is not rendered yet or the functionality is not working yet
- The browser always asks for the entire HTML page from the server even if only a small part of the page is changed
  > When CSS and Javascript were created and used in the web, the web was designed to be a **document**. So, the browser was designed to ask for the entire HTML page from the server even if only a small part of the page is changed. This is why the server is responsible for rendering the HTML code and sending it to the client
- Ex: `Next.js` framework uses SSR by default, `WordPress`

- Pros

  - Static sites are `SEO` friendly
  - faster initial loading time

- Drawbacks:

  - It's slower than `CSR` as the server is responsible for rendering the HTML code and sending it to the client
  - Full page reloads
  - It's not suitable for applications that need a lot of user interaction
    - Ex: `Facebook` is not using SSR as it needs a lot of user interaction

- if you want to use `SSR` in `React` apps, you need to:
  1. render the view on the server -> `ReactDOMServer.renderToString()`
  2. hydrate the view on the client, which means that the client will take over the rendered HTML code from the server and continue from there by attaching event listeners and so on -> `ReactDOM.hydrate()`
- more [here](../Nextjs/1-Nextjs.md#server-side-rendering-ssr)

---

### CSR: Client Side Rendering

- As the web evolved, the web became more like an **application** than a document. So, the browser was designed to ask for only the data from the server and the client is responsible for rendering the HTML code and displaying the UI content -> **Single Page Application SPA**
- For any activity, the client sends a request to the server to get the data and the server sends the data to the client and the client renders the HTML DOM corresponding to the data and display UI content
  ![CSR](./img/CSR.png)
  - We will have **loading states** for the data to be rendered
  - No need to render the entire HTML page and reload the page
- Pros:
  - Rich interactivity as the client is responsible for rendering the HTML code and displaying the UI content
  - faster than `SSR` as the server is responsible for sending the data only
- Drawbacks:
  - It's not `SEO` friendly as the server sends the HTML code without the data and the search engine can't see the data
    - Ex: `Google` can't see the data in `React` apps
  - longer initial loading time as the client is responsible for rendering the HTML code and displaying the UI content

---

### Progressive Rendering

It's a technique that allows web content to be displayed as soon as possible. It's often achieved by splitting the rendering work and running it in multiple frames or processes.
![progressive rendering](./img/progressive-rendering.png)

- It's a solution for the problem of the long initial loading time in `CSR`, as it allows the browser to render the HTML code and display the UI content as soon as possible
- it's based on: **"render as needed"** -> "render as quickly as possible"

---

Search engine optimization is the practice of trying to help your site appear nearer the top of search engine results when people look for the topics that your website covers.

- At the heart of SEO is the idea of working out which terms people are likely to enter into a search engine to find your site and then using these terms in the right places on your site to increase the chances that search engines will show a link to your site in their results.
- SEO is often split into two areas:
  - **on-page techniques**
    - methods you can use on your web pages to improve their rating in search engines.
  - **off-page techniques**
    - Getting other sites to link to you
    - Search engines help determine how to rank your site by looking at the number of other sites that link to yours.

---

## Routing

**Routing** is the process of determining how an application responds to a client request for a specific endpoint, which is a URL (Uniform Resource Locator) or path.

> The concept of **Routing**, is how to determine what pages to render based on the URL ( match different URLs to different UI views )
>
> - This enables users to navigate between different applications screens using the browser URL
> - It keeps the UI in-sync with the current browser URL

- Routing is typically handled by a routing library or framework, which provides the necessary tools to define routes, navigate between them, and manage the application state.
  - React Router turns React projects into single-page applications. It does this by providing a number of specialized components that manage the creation of links, manage the app's URL, provide transitions when navigating between different URL locations, and so much more.

### Server-Side Routing (Traditional Routing)

- Server decides what HTML to return based on URL request, and the entire page refreshes
  ![traditional routing](./img/traditional-routing-1.png)
- clicking a `<a>` link causes browser to request a new page & replace the entire DOM
  ![traditional routing](./img/traditional-routing-2.png)
  - The standard browser behavior when the browser loads a new HTML document is that "all existing javascript code **is dumped** and we will lose access to it"

---

### Client Side Routing

- **Fake CSR**:
  ![fake-client-side-routing](./img/fake-client-side-routing.png)

  - We can actually create something closer to a client-side-routing using conditions and preventing-default-behavior on `<a>` links, and render components based on state condition, But this will not actually be routing, as we won't be able to track **history** (go back and forward...) and other more features
    ![fake-client-side-routing](./img/fake-client-side-routing-1.png)

- **Real CSR** -> **React Router**

  - Here, all the HTML, Javascript, and CSS is loaded initially, and then the browser only loads the data that is needed for the page (the functionality is handled by javascript)
    ![react router](./img/react-router-1.png)

  - Sites that exclusively use client-side routing are **single-page-applications SPA**
    ![react router](./img/spa-1.png)
    ![react router](./img/react-router-2.png)
    - It handles mapping between URL bar and the content which the user sees via browser rather than via server
      ![react router](./img/react-router-3.png)
    - here, we use Javascript to manipulate the URL bar with a web-api called **History**
      ![react router](./img/react-router-4.png)
    - also `pushState` method handles **backward button** in the browser (with maintaining the state and prevent refreshing) using the `popstate` event in `window.history`
  - The best thing is that the javascript environment is no longer being reset with navigation!

---
