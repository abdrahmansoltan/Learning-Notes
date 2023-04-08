# INDEX

- [INDEX](#index)
  - [React Fundamentals](#react-fundamentals)
    - [React Concepts](#react-concepts)
    - [Declarative vs imperative](#declarative-vs-imperative)
    - [multi-page application](#multi-page-application)
    - [single-page application (SPA)](#single-page-application-spa)
  - [installation](#installation)
    - [Folder Structure and Assets](#folder-structure-and-assets)
    - [`react` and `react-dom` modules(libraries)](#react-and-react-dom-moduleslibraries)
  - [JSX](#jsx)
    - [Dynamic expressions in JSX](#dynamic-expressions-in-jsx)
  - [Virtual DOM vs Real DOM](#virtual-dom-vs-real-dom)
    - [How does it work?](#how-does-it-work)
  - [Styling and CSS](#styling-and-css)
    - [Inline style](#inline-style)
    - [Dynamic classes](#dynamic-classes)
    - [Styled-components](#styled-components)
    - [CSS Modules](#css-modules)
      - [CSS Modules In React Application](#css-modules-in-react-application)
  - [Components](#components)
    - [why components](#why-components)
    - [component tree](#component-tree)
    - [List Components (Looping)](#list-components-looping)
      - [update list-items](#update-list-items)
  - [Custom Components (fragment)](#custom-components-fragment)
    - [fragment](#fragment)
    - [Portals](#portals)
      - [Modal notes](#modal-notes)
    - [Smart vs Dumb components](#smart-vs-dumb-components)
  - [Forms: Controlled vs uncontrolled components](#forms-controlled-vs-uncontrolled-components)
    - [Controlled components](#controlled-components)
      - [Controlled Form with FormData API](#controlled-form-with-formdata-api)
    - [Uncontrolled components](#uncontrolled-components)
  - [Props](#props)
    - [single prop](#single-prop)
    - [Multiple props](#multiple-props)
    - [passing default props through components (implicitly)](#passing-default-props-through-components-implicitly)
    - [Validating Props (propTypes)](#validating-props-proptypes)
    - [Default Prop Values](#default-prop-values)
  - [Communicating Between Components](#communicating-between-components)
    - [From Parent to Child](#from-parent-to-child)
    - [From Child to Parent](#from-child-to-parent)
    - [lifting the state up](#lifting-the-state-up)
  - [React Composition](#react-composition)
    - [Why Use React Composition?](#why-use-react-composition)
  - [Handling Events](#handling-events)
    - [Events in HTML vs React](#events-in-html-vs-react)
    - [DocumentWide event handlers (Refs)](#documentwide-event-handlers-refs)
    - [Data binding](#data-binding)
  - [Forms](#forms)
    - [Controlled Forms](#controlled-forms)
      - [Form-Input](#form-input)
    - [Form Validation](#form-validation)
  - [Environmental Variables](#environmental-variables)

---

## React Fundamentals

It's a library not a framework. However, few people use react on its own, but when combined with things/tools like `react-router`, `webpack`, `redux` -> ("React Ecosystem"), then it become more like a framework

> there's an actual framework built around React -> **Next.js**

---

### React Concepts

React is based on these concepts:

1. Don't touch the DOM, I'll do it --> **Declarative**
   - This idea of declarative style, means that we don't have to directly say "do this and if this happens then do that and so on...", Instead we tell React that this is the state of our app and React will automatically just does the rest for us.
2. Build websites like lego blocks --> **Components**
   - React is designed on the concept of reusable-components that are grouped together to form bigger components
3. Unidirectional(One way) data-flow --> **State(data) can never move up**
   - Anytime we want something to change on our page, the state has to change, so that React "reacts" to this change and use the new state to update the DOM (the data flows only in one way)
4. React handles the UI (View) and the rest in on you --> **library and not framework**
   - React only handles the View using the virtual-dom, Everything else that you need, You can use other modules and libraries and mix and match whatever you want customized to your need.
   - React is not like a kitchen, It's like a stove

---

### Declarative vs imperative

- Functional Programming is a declarative programming paradigm, in contrast to imperative programming paradigms.

  - `Declarative programming` is a paradigm describing `WHAT` the program does, without explicitly specifying its control flow.
    - allows you to control flow and state in your application by saying `"the state should look like this" and React will handle the rest`
  - `Imperative programming` is a paradigm describing `HOW` the program should do something by explicitly specifying each instruction (or statement) step by step, which mutate the program's state.
    - allows you to control your application by saying `"This is what you should do"`

- React's declarative approach
  - Define the desired target state(s) and let React figure out the actual JavaScript DOM instructions ![declarative](./img/imperative_declarative.PNG)

---

### multi-page application

- As the name suggests, a multi-page application (MPA) is an app that has more than one page. It works in a traditional way, requiring the app to reload entirely every time a user interacts with it.

---

### single-page application (SPA)

![spa](./img/spa%20vs%20mpa.jpg)
![How react works](./img/how-react-works.png)

- Why? -> it's to make application more **"reactive"** like `mobile-apps` and `desktop-apps` which things happen instantly (you don't wait for new pages or responses to load or actions to start)
- `Single-page applications` can work in different ways. One way a single-page app loads is by downloading the entire site's contents all at once. This way, when you're navigating around on the site, everything is already available to the browser, and it doesn't need to refresh the page. Another way single-page apps work is by downloading everything that's needed to render the page the user requested. Then when the user navigates to a new page, asynchronous JavaScript requests are made for just the content that was requested.

  - Another key factor in a good single-page app is that the URL controls the page content. Single-page applications are highly interactive, and users want to be able to get back to a certain state using just the URL. --> [React Router](./4-React-router.md)

- The browser downloads the entire app data when you visit SPA web applications. Thus, you can browse through different parts of the app seamlessly and the page won’t reload every time you click on something.

- This is because a single page application executes the logic in the browser, instead of a server. It does so with JavaScript frameworks that can lift this heavy data on the client-side. JavaScript also enables an SPA to reload only those parts of the app that a user requests for, not the entire app. As a result, SPAs are known to deliver fast and efficient performance.

---

## installation

- **`npx`** is a command that lets you run **(execute)** code built with Node.js and published through the NPM registry without installing it first locally (It's a Node.js package runner). It's used to execute commands without installing dependencies (**install latest version of something and run it immediately**)

```bash
npx create-react-app my-app # equivalent to installing react globally first then >> creating react app

# to run it again
cd my-app
npm install
npm start
```

- **create-react-app** is built on top of **Webpack**, which:
  - Enables module importing/exporting
    - packages/bundles up all css/images/js into a single file for the browser
    - reduce number of HTTP requests for performance
  - **HMR**, hot module reloading (when changing a source file, automatically reloads(only reloads relevant files))
  - Enables easy testing & deployment
- **Vite** can also be used instead of `create-react-app`
  - with `vite`, the starting file will be `main.jsx` instead of `index.js`
- one `HTML` file is delivered => `index.html`
- When using the `Create-React-App` tool you are provided with a handy script(command) `eject` that allows you to configure Webpack among other features at your heart content.

  - > if you use the script `npm run eject`, it will get you `config` folder which is everything that `create-react-app` does, and it's not recommended to change it or even to `eject` as the configuration is made by people who figured out the best configuration

- in `index.js` you render the app to `index.html`

  ```js
  // we tell ReactDOM to render something (<App>) in the place of ("root" id)
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  ```

> **StrictMode**: It's a tool for highlighting potential problems in the app. It provides additional checks and warnings for its descendence-components when using legacy or soon to be deprecated code.
>
> - It only runs in dev-mode and may result **rendering twice** so that it can catch any weird behaviors that might occur in the side-effects inside the functional component, and **won't run in production mode** so no logs will be shown there
> - also the re-render happens when the props change, which is the case when providing props

---

### Folder Structure and Assets

- **Folder structure**
  ![folder-structure](./img/react-folder-structure.png)
- **Images**
  - external images (hosted on different server) -> just need url
  - local images **(public folder)** -> less performant
  - local images **(src folder)** -> better solution for assets, since under the hood they get optimized

---

### `react` and `react-dom` modules(libraries)

These 2 libraries from React are critical for React to work, these 2 combined is what actually allows us to build web application in React

- `react`: is the engine which does all of the work of how React functions works and be built -> **Application Builder**
  - > How react works
- `react-dom`: is related to the Web-DOM being the document-object-model, which is the different tools that help us actually build web-applications
  - > what react renders
  - It specifies that the engine should be directed towards web related applications

---

## JSX

![jsx](./img/jsx-1.png)
![jsx](./img/jsx.jpg)

- **JSX** = "HTML in JavaScript"
- it's a Syntactic sugar (syntax extension of javascript which extends the functionality of javascript), does not run in the browser like this!
- It's not legal Javascript; It has to be transpiled to Javascript using **Babel**
- It's like functions as when react sees them it **invokes them**
- in older versions of react : to use `JSX` you had to write this in the file :

  ```js
  import React from 'react';
  // we don't have to write it anymore after V17
  ```

- what [Babel](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.17.9&externalPlugins=&assumptions=%7B%7D) do to jsx :

```js
// jsx that we write
<p title='Intro text'>React.js is a library for building user interfaces.</p>;

// Babel converts it to this
React.createElement(
  'p',
  { title: 'Intro text' },
  'React.js is a library for building user interfaces.'
);
```

- **Notes:**
  - if you don't have attributes you can use `{}` or `null` instead
  - to have multiple child elements -> use an array
  - Don't use objects as react can't show an object as text content (string interpolation)
  - JSX attributes rules:
    ![jsx-attributes](./img/jsx-attributes.png)

### Dynamic expressions in JSX

- to write javascript expressions in JSX => `{your_expression}`
- it must be **expressions** and not **declarations** or **blocks**
- **NOTE** : when you write a `array` in JSX, the JSX automatically `joins` the `array`, that's why you can't use `forEach`

  ```js
  const names = ["ahmed", "esraa", "mona"];
  return (
      <Fragnent>
          <p>
            {names}
          </p>
      </Fragent>
  )
  // results : ahmedesraamona
  ```

---

## Virtual DOM vs Real DOM

**Dom Manipulation** can be very slow and heavy. For example, if you have several image tags inside a div and you replace one of the **images**

- external images (hosted on different server) -> inside with a just need url
- external images (hosted on different server) -> inside with a just need url
- external images (hosted on different server) -> inside with a just need url
  different image source, the DOM re-renders the entire div. What would happen if you frequently update and make a lot of transformations? To address this problem, the React developers came up with an idea to manipulate the VDOM instead which is faster since nothing gets drawn on your browser.

- **Virtual DOM (VDOM)**: is a concept where a virtual representation of a UI is kept in `memory` as an object **(snapshot of what the real DOM looks like)**, and synced with the real DOM by a library (such as ReactDOM). which makes changes to the virtual DOM and not the Real DOM

  - You can simply think of it as a lightweight copy of the Real DOM.
  - It's a tree-like object that gives react a blueprint of how it should update the actual DOM

![react-dom](./img/react-dom.png)

- `ReactDOM`: React takes a look at what specific transformations need to be made to the initial DOM and updates them very quickly.
  - React re-renders only the parts that need to be updated compared to the initial DOM.

### How does it work?

![dom](./img/dom.png)

1. React generates a new Virtual DOM for our application.
2. React compares the initial Virtual DOM (representing the current html DOM) to the new Virtual DOM.
3. Based on the comparison above, React runs its **Diffing Algorithm** to calculate the minimum number of operations to update the initial Virtual DOM to the new Virtual DOM.
4. it update the new DOM by **unmounting**(removing from the DOM tree) the changed things that differ and re-render them with the new data
   ![react-dom](./img/vdom-1.png)
5. then React compares the difference between the DOM-snapshot and the real-DOM and update the real-DOM accordingly
   ![react-dom](./img/vdom-2.png)

> **Re-Evaluating Components !== Re-Rendering the DOM** > ![rerender](./img/rerender.PNG)

---

## Styling and CSS

### Inline style

The style attribute accepts a JavaScript `object` with `camelCased` properties rather than a CSS string.

- **NOTE**: in `style=` -> first `{}` is for writing JavaScript in JSX, and the second `{}` is for the object that contains the styles

```js
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')'
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}

// or
function HelloWorldComponent() {
  return (
    <div
      style={{
        color: 'blue',
        backgroundImage: 'url(' + imgUrl + ')'
      }}>
      Hello World!
    </div>
  );
}
```

---

### Dynamic classes

To add classes based on certain values, we can use normal conditions `if..else` or short-circuiting `&&` or we can use [classnames](https://www.npmjs.com/package/classnames) package

![classnames](./img/classnames.png)

---

### Styled-components

[StyledComponents File](../CSS%20Frameworks%20%26%20Mehtodologies/StyledComponents.md)

---

### CSS Modules

CSS Modules are “CSS files in which all class names and animation names are scoped locally by default”

- CSS Modules are not specs or an implementation in the browser, but rather a process in a **build step** (with the help of `Webpack` or `Browserify`) that changes class names and selectors to be scoped (kinda like **namespaced**).

  - Our build step would then process both these things into new, separate `HTML` and `CSS` files, with a new string of characters replacing both the HTML class and the CSS selector class. Now the `HTML` and `CSS` generated by our build tool might look like this:

    ```html
    <!-- Before -->
    <h2 class="${styles.greeting}">Good Morning</h2>

    <!-- After -->
    <h2 class="_styles_greeting_344389">Good Morning</h2>
    ```

- CSS Modules is a great approach for making CSS locally scoped and for preventing naming clashes in medium to large projects.
- It creates a **unique namespace** for each class/style that you use in the component

#### CSS Modules In React Application

There are two different ways of using CSS Modules in a React application.

1. When using the `Create-React-App` tool you are provided with a handy script(command) `eject` that allows you to configure Webpack among other features at your heart content.

   - more info [here](https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2)

2. This option only requires that you name and import your CSS files differently.

   - you must give the css-file this format : `[name].module.css`
   - This lets React and Webpack know that we are using CSS Modules.

   ```css
   /* in Button.module.css */

   .errorMessage {
     background-color: red;
   }
   ```

   ```js
   // in button.component.jsx

   import styles from "./Button.module.css"; // Import styles object from the css file

   const Button = () => {
   export   return <button className={styles.errorMessage}>Error Button</button>;
     // note: if the class name is not  a single word like "btn--inner" we then use bracket notation for the styles object => className={styles["btn--inner"]}
   };

   // Result
   <button class="Button_error_ax7yz">Error Button</button>;
   ```

**Notes**:

- we use `className` word instead of `class` because in Javascript, `class` word is reserved for ES6 Classes
- There's a gotcha (tradeoff) when using css-modules, which is that it doesn't affect **elements selectors**

  ```css
  /* this won't be namespaced */
  ul li {
    font-style: italic;
  }

  /* solution */
  .list li {
    font-style: italic;
  }
  ```

---

## Components

They are the building blocks of React

- They are classes / functions that know how to render themselves into HTML
- They start with a capital letter `<ContactList/>` to let react differentiate it with HTML elements which start with lower-case letter `<div>`

### why components

![comp](./img/components.PNG)

### component tree

![tree](./img/components_tree.PNG)

---

### List Components (Looping)

- we can use the array `map` method to iterate over our list items to map them from JavaScript primitive to HTML elements.

- Each element must receive a **mandatory** `key` attribute

- `Keys` : Keys help React identify which items have changed, been added, or been removed. so that react only updates this item and not the whole list of items.

  - this makes us do the minimum update possible to the HTML from the rendering as React compares the keys on each list item to the keys from the previous render

  - Keys should be given to the elements inside the array to give the elements a stable identity.
  - If you don't have unique `Id` for rendered items, You may use the iteration **index** as a `key` as a last resort:

    - This is not recommended, only use it if you know that the list won't change

      ```js
      const listItems = numbers.map((number, index) => <li key={index}>{number}</li>);
      ```

```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => <li key={number.toString()}>{number}</li>);
```

#### update list-items

```js
const initialList = [];

const List = () => {
  const [list, setList] = React.useState(initialList);

  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
```

---

## Custom Components (fragment)

- they must start with an `UPPERCASE letter` : `<Expenses />`

### fragment

- Each custom component must return only `one root element`, so you should wrap it's contents in a :
  - empty brackets `<> </>` : not recommended as vs-code won't know how to organize the code
  - Fragment `<React.Fragment> </React.Fragment>`

---

### Portals

Portals provide a first-class way to render children into a DOM node that exists **outside the DOM hierarchy** of the parent component.

- it helps for more `semantic HTML`
- usually with **modals**
- we use it with **modals** as a modal will only work correctly when it doesn't have a CSS-Positioned parent element, so that the parent will be `<body>` element, but Real projects use CSS-positioned-parents and this is solved with **Portals**
  ![portal](./img/portals-1.png)
  - the modal `div` will never have a CSS-Positioned-Parent. so the modal will be positioned relative to the HTML document, and will always fill the entire screen

Implementation:

- without portals ![portal](./img/portals.PNG)
- with portals ![portal](./img/portals2.PNG)

Portals need 2 things:
![portal](./img/portals-2.png)

- the child is a React element
- (the container): the DOM location(node) to which the portal should be injected

```js
import ReactDOM from 'react-dom';

ReactDOM.createPortal(child, container);
```

#### Modal notes

- when showing the modal, We should prevent scrolling in the page, and this can be done with `useEffect` hook:

  ```js
  function Modal({...}){
    useEffect(() => {
      // using tailwind class
      document.body.classList.add('overflow-hidden');

      // cleanup function when closing the modal
      return () => {
        document.body.classList.remove('overflow-hidden');

      }
    }, [])
    return ReactDom.createPortal(...)
  }
  ```

- when you want to make the modal appear where you are currently and not in the beginning of the page, use `position: fixed` instead of `absolute`

---

### Smart vs Dumb components

**Dumb components** are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it.

**Smart components** (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.

---

## Forms: Controlled vs uncontrolled components

In React, there are two ways to handle **Form data** in our components.

### Controlled components

Controlled components are those in which form data is handled by the component’s state.

> **Controlled Inputs:** are input elements where we provide both the `value` and `onChange` props

It is the one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".

```jsx
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function onSubmit() {
    console.log('Name value: ' + name);
    console.log('Email value: ' + email);
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='name'
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type='email'
        name='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input type='submit' value='Submit' />
    </form>
  );
}
```

---

#### Controlled Form with FormData API

> more onn FormData [here]('../../../JavaScript/01-JS.md#formdata-api')

It can be used to automatically create a object-ready format for a form in the state without

```jsx
import { useState } from 'react';

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget); // get values one by one

    const name = formData.get('name');
    console.log(name); // get all of them
    const newUser = Object.fromEntries(formData); // do something (post request, add to list, etc)

    // Gotcha - re-render won't clear out the values
    setValue(value + 1);

    // Reset values
    e.currentTarget.reset();
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name='name' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name='email' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' name='password' />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;
```

---

### Uncontrolled components

Uncontrolled components are those for which the form data is handled by the DOM itself. **"Uncontrolled"** refers to the fact that these components are not controlled by React state.

It is the one that stores its own state internally, and you query the DOM using a [ref](./2-Hooks.md#refs) to find its current value when you need it. This is a bit more like traditional HTML.

> components that use **ref** are uncontrolled, as they aren't controlled by React

```js
function App() {
  function onSubmit() {
    console.log('Name value: ' + window.name.value);
    console.log('Email value: ' + window.email.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type='text' name='name' id='name' required />
      <input type='email' name='email' id='email' required />
      <input type='submit' value='Submit' />
    </form>
  );
}
```

---

## Props

![props](./img/props.PNG)

[reference](https://dmitripavlutin.com/react-props/)

- They are used for configuring your component
- they are **immutable** (can't change component's props)
- they make components more `flexible`

### single prop

- ex: add the `who` prop to `<Message>` component

```js
// 1) Make the function of your component read the props from the props parameter
function Hello(props) {
  return <div>Hello, {props.who}!</div>;
}
/* Now Hello function has a parameter props. When rendering the component,
React will make sure to assign to props object all the props you assign to the component.*/

// 2) When rendering the component, add the prop to the component using the attribute-like syntax who="Earth"
<Hello who="Earth" />
// Output
<div>Hello, Earth!</div>
```

### Multiple props

```js
// using destructuring
function Message({ greet, who }) {
  return (
    <div>
      {greet}, {who}!
    </div>
  );
}

// Render
<Message greet="Welcome" who="Aliens" />
// Output
<div>Welcome, Aliens!</div>
```

---

### passing default props through components (implicitly)

Instead of passing default props explicitly like passing `onClick` prop from a custom `<Button/>` element to a `<button>` element inside it, we can use the `rest` parameter:

![rest props](./img/rest-props-1.png)
![rest props](./img/rest-props-2.png)

```js
<Button primary onClick={handleClick} />

// inside:
const {children, ...rest} = props
<button {...rest} >{children}</button>
// instead of: <button onClick={rest.onClick} >{children}</button>
```

---

### Validating Props (propTypes)

This is done using the library [prop-types](https://www.npmjs.com/package/prop-types)

- it used to be very popular. Now **Typescript** does almost the same thing (and more)
- if someone passes down the incorrect kind of value (number instead of boolean), a warning will appear in console
  ![prop-types](./img/prop-types.png)

- It can also be used to create custom validations other than checking the type of props, by creating a method in the `component.protoTypes` and return a `new Error()` for the custom condition

---

### Default Prop Values

You can define default values for your props by assigning to the special `defaultProps` property

- The `defaultProps` will be used to ensure that the prop-item will have a value if it was not specified by the parent component. - The `propTypes` typechecking happens after `defaultProps` are resolved, so typechecking will also apply to the `defaultProps`.

```jsx
import PropTypes from 'prop-types';

function HelloWorldComponent({ name }) {
  return <div>Hello, {name}</div>;
}

HelloWorldComponent.propTypes = {
  name: PropTypes.string
};

HelloWorldComponent.defaultProps = {
  name: 'World'
};
```

---

## Communicating Between Components

[reference](https://www.pluralsight.com/guides/react-communicating-between-components)

### From Parent to Child

- use [props](#props)

### From Child to Parent

- use Callbacks :
  - child component must first receive a mechanism to communicate back from its parent.
  - parents pass data to children through `props`.
  - A "special" prop of type `function` can be passed down to a child. At the time of a relevant event, the child can then call this function as a callback.

```js
// in BookTitle component file (CHILD)
// It receives a "onTitleChange" function in the props, sent from its parent.
function BookTitle(props) {
  return (
    <label>
      Title:
      <input onChange={props.onTitleChange} value={props.title} />
    </label>
  );
}
```

```js
// in BookEditForm component file (PARENT)
// the parent, "BookEditForm", has reference to this function, it can receive the "arguments" that are passed to the function:
function BookEditForm(props) {
  const [title, setTitle] = useState(props.book.title);
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  return (
    <form>
      <BookTitle onTitleChange={handleTitleChange} title={title} />
    </form>
  );
}
```

### lifting the state up

![state](./img/liftingStateUp.png)

---

## React Composition

React Composition is a development pattern based on React's original component model where we build components from other components using explicit defined props or the implicit `children` prop.

![children](./img/children.png)

### Why Use React Composition?

- This technique prevents us from building too many `similar` components containing duplicate code and allows us to build fewer components that can be reused anywhere within our application, making them easier to understand and maintain for your team.

```js
function Card(props) {
  const classes = 'card ' + props.className;
  // idea is to use {props.children}
  return <div className={classes}>{props.children}</div>;
}

export default Card;

///////////////////////////////////////////////////////

// then in the file that we will use the card-component
import Card from '../UI/Card';

const Expenses = props => {
  return (
    <div>
      <Card className='expenses'>
        <components />
      </Card>
    </div>
  );
};
```

---

## Handling Events

- React events are named using **camelCase**, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.
- You should pass the event handler callback-function without invoking it
  - > **reason:** when invoking it, we won't have a reference to it anymore which is the main reason why we pass it as a reference, as it will be called by someone else in the future

---

### Events in HTML vs React

```html
<!-- in html -->
<button onclick="activateLasers()">Activate Lasers</button>
```

```js
// in React
<button onClick={activateLasers}>Activate Lasers</button>
// always try to use the callback function like this instead of defining it in the {} as this improves performance as you won't create it each time you do a (click)
```

- Another difference is that you cannot `return false` to prevent default behavior in React. You must call `preventDefault` explicitly. For example, with plain HTML, to prevent the default form behavior of submitting, you can write:

---

### DocumentWide event handlers (Refs)

React have a way to handle events on DOM elements by accessing DOM properties directly instead of the plain javascript way
![refs](./img/refs-1.png)

- **Plain Javascript way:**
  ![refs](./img/refs-2.png)

`useRef` hook is explained in the [Refs section in Hooks file](./02-Hooks.md#refs)

---

### Data binding

Data binding in React can be achieved by using a `controlled input`. A controlled input is achieved by binding the `value` to a `state variable` and an `onChange` event to change the state as the `input value` changes.

```js
// 2 way data-binding because of (value={value})
const App = () => {
  const [value, setValue] = useState('Hello World');
  const handleChange = e => setValue(e.target.value);
  return (
    <div>
      <input type='text' value={value} onChange={handleChange} />
      <p>{value}</p>
    </div>
  );
};
```

---

## Forms

Great library for forms in React -> [formik.org](https://formik.org/)

### Controlled Forms

![controlled-forms](./img/controlled-forms.png)

- What we do by this is **stealing control (of the input value) from the browser and putting the (input value) under the control of a state system**

#### Form-Input

- To access input-value:

  - use **state**
    - this is preferred if you will do something on the input-value (like resetting the input-value after submitting)
  - use **refs**
    - if you want to just access the value without modifying it

- Handling multiple inputs

  ![controlled-forms](./img/controlled-forms-1.png)

- for `label` element, use the `htmlFor` attribute instead of `for`

---

### Form Validation

![validation](./img/forms.PNG)

---

## Environmental Variables

in `.env` file:

- You must create custom environment variables beginning with `REACT_APP_`
- [Docs](https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env)

---