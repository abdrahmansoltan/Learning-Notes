## INDEX

- [INDEX](#index)
- [Lazy loading React components](#lazy-loading-react-components)
- [Scripts](#scripts)
- [Hosting](#hosting)

---

## Lazy loading React components

Lazy loading is a `design pattern` for optimizing web and mobile apps. The concept of lazy loading is simple: **initialize objects that are critical to the user interface first and quietly render noncritical items later**.

- `React.lazy()`
  - is a function that enables you to render a dynamic import as a regular component. Dynamic imports are a way of code-splitting, which is central to lazy loading.
  - React.lazy() takes as its argument a function that must return a promise by calling import() to load the component. The returned promise resolves to a module with a default export containing the React component.

```js
//Without React.lazy()
import OtherComponent from './OtherComponent';
const MyComponent = () => ( >
 <div>
   <OtherComponent />
 </div>

// With React.lazy()
const OtherComponent React.lazy(() => import('./OtherComponent'));
const MyComponent () => (
 <div>
   <OtherComponent />
 </div>
```

- `React.Suspense`
  - enables you to specify the loading indicator in the event that the components in the tree below it are not yet ready to render.
  - The Suspense component takes a `fallback` prop that accepts the React elements you want rendered as placeholder content while all the lazy components get loaded.

```js
import React, { Suspense } from 'react';
const LazyComponent React.lazy(() => import('./OtherComponent'));
const MyComponent () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  </div>
```

---

## Scripts

- `npm run build` => creates a `build` folder

---

## Hosting

- [firebase](https://dzone.com/articles/react-apps-firebase)
  - make sure that the public directory is `build` and not `public`
