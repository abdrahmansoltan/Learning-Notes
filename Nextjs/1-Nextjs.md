## INDEX

- [INDEX](#index)
- [Next.js](#nextjs)
  - [React Drawbacks](#react-drawbacks)
  - [Next.js Features](#nextjs-features)
- [Install](#install)
- [Prerender](#prerender)
  - [Solution](#solution)
    - [Static Site Generation (SSG)](#static-site-generation-ssg)

---

## Next.js

It's a React framework for production

- By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.

![alt](img/nextjs.PNG)

[NEXT.JS VS REACT](https://pagepro.co/blog/nextjs-vs-react/)

### React Drawbacks

- client-side-rendering **CSR** can cause problems like in Search-engine-optimization **SEO** as in the beginning the html page is empty so that is bad for SEO

  ![csr](./img/csr.png)

---

### Next.js Features

- Built-in Server Side Rendering **SSR** : prerendering react apps in the server
  ![ssr](./img/ssr.png)

- File-baser routing

  - define pages and routes with files and folders instead of code

- Fullstack capabilities
  - ability to add backend (server-side) code to the app

---

## Install

```sh
npx create-next-app@latest
```

---

## Prerender

**Pre-rendering** to HTML means that we will convert the React Component to an HTML file and send the HTML file to the client so it can quickly show that to our user without much processing or bandwidth.

Next.js by default doesn't wait for the data to be fetched even if it's in `useEffect()` instead it renders the data with the initial state

- `Hydration`: it means that react takes over once page is loaded from server-side
  - in this step react then start **fetching** for required data if needed

### Solution

![prerender](./img/prerender.png)

#### Static Site Generation (SSG)

![ssg](./img/ssg.png)

Static Generation describes the process of compiling and rendering a website or app **at build time**.

So it doesn't have to do it for every request, and neither does the browser have to do it on the client-side.

- Benefit:

  - `SEO`

  - `Speed` : HTML page is much faster for the end-user because the browser doesn't have to do much processing upfront. The pre-rendering makes it easy for the browser to fetch the HTML and render it straight up.

  - `Caching with CDNs`

Next.js provides a few different APIs to fetch data including `getStaticProps` and `getServerSideProps`, which determines how Next.js will build your app.

- `getStaticProps` -> fetch that data at build time
- `getServerSideProps` -> the app requires a server to render those pages.

the code in these 2 function won't happen on Client-Side as it will be in the server and after they are done the component will be rendered (after data has been fetched), ususally they return a **props object** + we can control how often the page gets regenerated if there's a changing data
