# INDEX

- [INDEX](#index)
  - [Browser environment, specs](#browser-environment-specs)
  - [Document Object Model (DOM)](#document-object-model-dom)
    - [object model](#object-model)
    - [Steps for creating an element](#steps-for-creating-an-element)
    - [`insertAdjacentHTML()`](#insertadjacenthtml)
    - [DOM collections: (HTMLCollection vs NodeList)](#dom-collections-htmlcollection-vs-nodelist)
    - [Node.cloneNode()](#nodeclonenode)
    - [DOM Traversing ( relation between elements )](#dom-traversing--relation-between-elements-)
      - [Siblings and the parent](#siblings-and-the-parent)
      - [Element-only navigation](#element-only-navigation)
    - [Searching: `getElement(s)By*`, `querySelector*`](#searching-getelementsby-queryselector)
    - [creating connection between `DOM` \& `js-code`](#creating-connection-between-dom--js-code)
  - [Node properties: type, tag and contents](#node-properties-type-tag-and-contents)
    - [`innerHTML` vs `innerText`](#innerhtml-vs-innertext)
    - [Styles](#styles)
  - [virtual DOM](#virtual-dom)
    - [methods to compare nodes](#methods-to-compare-nodes)
    - [steps](#steps)
  - [Events](#events)
    - [Event Flow (Delegation / Propagation)](#event-flow-delegation--propagation)
    - [Event Handling](#event-handling)
    - [Events Notes](#events-notes)
  - [Storage](#storage)

---

## Browser environment, specs

The JavaScript language was initially created for **web browsers**. Since then, it has evolved into a language with many uses and platforms. Each of the different platforms provides platform-specific functionality. The JavaScript specification calls that a **host environment**.

> **host environment :** provides its own objects and functions in addition to the language core.
>
> - Web browsers give a means to control web pages.
> - Node.js provides server-side features, and so on.

![host environment](./img/host-environment.png)

- There’s a “root” object called **window**. It has two roles:

  1. First, it is a `global object` for JavaScript code.

     ```js
     function sayHi() {
       alert('Hello');
     }

     // global functions are methods of the global object:
     window.sayHi();
     // same as
     sayHi();
     ```

  2. Second, it represents the “browser window” and provides methods to control it.

     ```js
     alert(window.innerHeight); // inner window height
     ```

---

## Document Object Model (DOM)

> The Document Object Model represents all page content as objects that can be modified.
>
> - The **document** object is the main “entry point” to the page. We can change or create anything on the page using it.

### object model

is a group of objects, each of which represent related things from the real world. Together they form a model of something larger.

- **BOM (Browser Object Model)**: contains objects that represent the current `browser window` or `tab`. It contains objects that model things like `browser history` and the `device's screen`.
  ![object-model](./img/object-model.png)

  - `window object` is treated as the default object if none is specified. ex: `alert()` is used instead of `window.alert()`

    ```js
    let gLet = 5;
    alert(window.gLet); // undefined (doesn't become a property of the global object)
    ```

    ```js
    // make current user information global, to let all scripts access it
    window.currentUser = {
      name: 'John'
    };

    // somewhere else in code
    alert(currentUser.name); // John

    // or, if we have a local variable with the name "currentUser"
    // get it from window explicitly (safe!)
    alert(window.currentUser.name); // John
    ```

- **DOCUMENT OBJECT MODEL**: uses objects to create a representation of the current page. It creates a new object for each element (and each individual section of text) within the page.
  ![object-model](./img/object-model2.png)

  - specifies how browsers should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window.
  - The DOM is neither part of HTML, nor part of JavaScript; it is a separate set of rules. It is implemented by all major browser makers
  - The DOM is called an object model because the model (the DOM tree) is made of objects.

    - All these objects are accessible using JavaScript, and we can use them to modify the page.
    - The topmost tree nodes are available directly as `document` properties:
    - For example:
      - `<html>` = `document.documentElement`
      - `<body>` = `document.body`
      - `<head>` = `document.head`
    - In the DOM-world, `null` means “doesn’t exist” or “no such node”.

  - **Autocorrection:**

    - If the browser encounters malformed HTML, it automatically corrects it when making the DOM.
    - For instance, the top tag is always `<html>`. Even if it doesn’t exist in the document, it will exist in the DOM, because the browser will create it. The same goes for `<body>`.

  - **Node Types:**

    - Tags become element nodes and form the structure of the DOM tree.
    - There are 12 node types. In practice we usually work with 4 of them:
      - `document` – the “entry point” into DOM.
      - `element nodes` – HTML-tags, the tree building blocks.
      - `text nodes` – contain text.
      - `comments` – sometimes we can put information there, it won’t be shown, but JS can read it from the DOM.
        - If we have a comment-node, labeled as `#comment`, between two text nodes. We may think – why is a comment added to the DOM? It doesn’t affect the visual representation in any way. But there’s a rule -> **"if something’s in HTML, then it also must be in the DOM tree"**.

  - > The DOM an Application Programming Interface (**API**). User interfaces let humans interact with programs; APls let programs (and scripts) talk to each other. The DOM states what your script can "ask the browser about the current page, and how to tell the browser to update what is being shown to the user

- **GLOBAL JAVASCRIPT OBJECTS**: represent things that the JavaScript language needs to create a model of. For example, there is an object that deals only with dates and times.

  - The names of the global objects usually start with a capital letter, e.g., `String`, `Date`, `Math` objects

  - allows us to make `javascript` interact with the browser by creating a model of the page and stores it **in memory**
  - `DOM-Tree` is generated from HTML document which we can interact with

  > WEB BROWSERS ARE PROGRAMS BUILT USING OBJECTS (**window-object** , **document-object**)
  > ![window-document-objects](./img/window-document-objects.png)
  >
  > - The browser represents each window or tab using a window object. The location property of the window object will tell you the URL of the current page.
  > - The current web page loaded into each window is modelled using a document object.

---

### Steps for creating an element

**DOM manipulation**: refers to using a set of methods and properties to access, create, and update elements and text nodes. (If you have to make a lot of changes to the content of a page, it is slower than `innerHTML`. )

- when we store elements in variables, we're really storing the **location** of the element in the DOM tree in the variable, the properties and methods of that element node work on the variable
  - this saves the browser from looking through the DOM tree to find the same element again. this is known as **caching the selection**

```javascript
//------------------------Create element------------------------//
const element = document.createElement('.div');
message.classList.add('cookie-message');

//----------------------------Content----------------------------//
message.textContent = 'We use cookied for improved functionality and analytics.';
// or
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//---------------inserting element in the document---------------//
header.append(message); // inside the element (will be a its child)
// or
header.insertAdjacentHTML('beforeend', message);

header.before(message); // before the element (will be a its sibling)
//------------------------Remove element------------------------//
message.remove();
```

### `insertAdjacentHTML()`

- parses a piece of HTML text and inserts the resulting nodes into the DOM tree at a specified position
  ![insertAdjacentHTML](./img/JavaScript-insertAdjacentHTML.png)

### DOM collections: (HTMLCollection vs NodeList)

- Both interfaces are collections of DOM nodes. They differ in the methods they provide and in the type of nodes they can contain.
  | HTMLCollection | NodeList |
  | ------------------------------------------------------------------------ | ---------------------------------------------------------- |
  | supposed to only contain Element nodes | can contain any node type ( including text nodes ) |
  | HTMLCollection items can be accessed by their name, id, or index number. | NodeList items can only be accessed by their index number. |
  | HTMLCollection is always a **live collection**, when your script updates the page, the NodeList is updated at the same time. | NodeList is most often a **static collection**, If the script changes the content of the page, the NodeList is not updated to reflect those changes |
  | `getElementsByClassName()` `getElementsByTagName()` `children` | `querySelectorAll()` `childNodes` |

- **Notes:**

  - It’s iterable -> we can use `for..of` to iterate over it

    - Don’t use `for..in` to loop over collections, as it iterates over all enumerable properties. And collections have some “extra” rarely used properties that we usually do not want to get

  - Array methods won’t work, because it’s not an array

    - We can use `Array.from` to create a “real” array from the collection, if we want array methods:

      ```js
      alert(Array.from(document.body.childNodes).filter(=> ...)); // function
      ```

  - DOM collections are read-only
    - We can’t replace a child by something else by assigning `childNodes[i] = ....`

---

### Node.cloneNode()

- The `cloneNode()` method creates a copy of a node, and returns the clone.
- The `cloneNode()` method clones all attributes and their values.
- Set the `deep` parameter to `true` if you also want to clone descendants (children).

```javascript
let p = document.getElementById('para1');
let p_prime = p.cloneNode(true);
```

---

### DOM Traversing ( relation between elements )

- Traversing the DOM can be difficult because some browsers add a **text node** whenever they come across **whitespace** between elements.
  ![dom-white-space](./img/dom-white-space.png)

#### Siblings and the parent

```js
// parent of <body> is <html>
alert(document.body.parentNode === document.documentElement); // true

// after <head> goes <body>
alert(document.head.nextSibling); // HTMLBodyElement

// before <body> goes <head>
alert(document.body.previousSibling); // HTMLHeadElement
```

#### Element-only navigation

Navigation properties listed above refer to all nodes. For instance, in childNodes we can see both text nodes, element nodes, and even comment nodes if they exist. But for many tasks we don’t want text or comment nodes. We want to manipulate element nodes that represent tags and form the structure of the page.

- navigation links that only take element nodes into account:

  ![element-only-navigation](./img/element-only-navigation.png)

- The `parentElement` property returns the “element” parent, while `parentNode` returns “any node” parent. These properties are usually the same: they both get the parent.
- Questions:

  - Is it true that `elem.lastChild.nextSibling` is always `null`?

    - **Yes**, true. The `element elem.lastChild` is always the last one, it has no `nextSibling`.

  - Is it true that `elem.children[0].previousSibling` is always `null` ?
    - **No**, wrong, because `elem.children[0]` is the first child among elements. But there may exist non-element nodes before it. So `previousSibling` may be a **text node**.

---

### Searching: `getElement(s)By*`, `querySelector*`

![dom-search](./img/dom-search.png)

- The `id` must be unique
  - If there are multiple elements with the same `id`, then the behavior of methods that use it is unpredictable, e.g. `document.getElementById()` **may return any of such elements at random**. So please stick to the rule and keep id unique.
- `getElementsBy*` is another method to look for nodes by a `tag`, `class`, etc.
  - Today, they are mostly history (old), as `querySelector` is more powerful and shorter to write.
  - **Note:** Don’t forget the "`s`" letter!
    - The "`s`" letter is absent in `getElementById`, because it returns a single element. But `getElementsByTagName` returns a collection of elements, so there’s "`s`" inside.
- `elem.matches(css)` to check if elem matches the given CSS selector.
- `elem.closest(css)` to look for the nearest **ancestor(parent)** that matches the given CSS-selector. The elem itself is also checked.

---

### creating connection between `DOM` & `js-code`

- this is done by using `custom data` attributes.

- Reading the values of these attributes out in JavaScript is simple.

  - You could use `getAttribute()` with their full HTML name to read them.
  - but the standard defines a simpler way: a `DOMStringMap` you can read out via a `dataset` property.

    - To get a data attribute through the dataset object, get the property by the part of the attribute name after `data-` (note that `dashes` are converted to `camelCase`).

    ```html
    <!-- html file -->
    <article
      id="electric-cars"
      data-columns="3"
      data-index-number="12314"
      data-parent="cars"
    ></article>
    ```

    ```js
    // js file
    const article = document.querySelector('#electric-cars');

    article.dataset.columns; // "3"
    const { columns } = article.dataset; // to get the value

    article.dataset.indexNumber; // "12314"
    article.dataset.parent; // "cars"
    ```

---

## Node properties: type, tag and contents

Different DOM nodes may have different properties. For instance, an element node corresponding to tag `<a>` has link-related properties, and the one corresponding to `<input>` has input-related properties and so on. Text nodes are not the same as element nodes. But there are also common properties and methods between all of them, because all classes of DOM nodes form a single hierarchy.

- For DOM elements
  - `console.log(elem)`: shows the element DOM tree
  - `console.log(elem)`: shows the element as a DOM object, good to explore its properties.
  - For instance, if the tag is `<body id="page">`, then the DOM object has `body.id="page"`.

### `innerHTML` vs `innerText`

- `innerHTML`

  - allows to get the HTML inside the element as a string.
  - only valid for element nodes.
    - Other node types, such as text nodes, have their counterpart: `nodeValue` and `data` properties.
  - lets you work with HTML rich text (in HTML format) and doesn't automatically encode and decode text and doesn't apply `css` related to the text (if a word was hidden by css then it won't be included in the innerHTML).
  - "`innerHTML+=`" does a full overwrite

    ```js
    elem.innerHTML += "...";
    // is a shorter way to write:
    elem.innerHTML = elem.innerHTML + ".
    ```

  - > **Scripts don’t execute:** If `innerHTML` inserts a `<script>` tag into the document – it becomes a part of HTML, but doesn’t execute.

- `outerHTML`

  - contains the full HTML of the element. That’s like (innerHTML plus the element itself).
  - unlike `innerHTML`, writing to `outerHTML` does not change the element. Instead, it replaces it in the DOM.

    ```html
    <div>Hello, world!</div>

    <script>
      let div = document.querySelector('div');
      // replace div.outerHTML with <p>...</p>
      div.outerHTML = '<p>A new element</p>'; // here is what happens:
      /*
       1. div was removed from the document.
       2. Another piece of HTML <p>A new element</p> was inserted in its place.
       3. div still has its old value. The new HTML wasn’t saved to any variable.
      */

      alert(div.outerHTML); // <div>Hello, world!</div> (**)
    </script>
    ```

- `innerText` retrieves and sets the content of the tag as plain text with applying `css`
- `textContent` provides access to the text inside the element: only text, **minus all `<tags>`**.
  - In most cases, we expect the text from a user, and want to treat it as text. We don’t want unexpected HTML in our site. An assignment to `textContent` does exactly that.

---

### Styles

- to change a property (css-variable) in the `:root` element

  ```javascript
  document.documentElement.style.setProperty('--color-primary', 'orangered');
  ```

- to change style based on previous value of a style property : use `getComputedStyle()`

  ```javascript
  message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
  // it returns a string so we use parse Float/int
  ```

- to add multiple styles (css text block) :

  ```javascript
  element.style.cssText = 'color:red; height:50px; ...';
  // or using (setAttribute)
  element.setAttribute('style', 'color:red; height:50px; ...');
  ```

- to get a non standard Attribute :

  - Before you work with an attribute, it is good practice to check whether it exists. This will save resources if the attribute cannot be found. -> `.hasAttribute()`

  ```javascript
  const designer = logo.getAttribute('designer'); // returns the value of the "designer" attribute,
  // also you can set an Attribute
  logo.setAttribute('company', 'Bankist'); //(attribute_name,value)
  ```

---

## virtual DOM

Virtual DOM is in-memory representation of Real DOM. It is lightweight JavaScript object which is `copy` of Real DOM.

- The `virtual DOM` is a tree based on JavaScript objects created with `React` that resembles a DOM tree. Each time you need to change something in the DOM, `React` employs a different algorithm that exclusively re-renders the DOM nodes that have changed. Meaning, `React` allows developers to write code as if the entire page is rendered on each change while in the underhood `React` ONLY renders sub-components that have actually changed.
- Virtual DOM duty among other things is to abstract real DOM operations we would need to do

### methods to compare nodes

- to compare the (content) of the 2 nodes

  ```js
  node1.isEqualNode(node2); // true/false
  ```

- checking the value (**for textNodes nodes that contains only text and not elements like `<em> or <li>`**) => [nodeValue](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue) is empty or not

  ```js
  node1.firstChild?.nodeValue.trim() !== '';
  ```

> **NOTE**:
> ![text-node](./img/text-node.png)
>
> - In order to use **nodeValue** property, you must be on a text node, not the element that contains the text.
> - The **textContent** property allows you to collect or update just the text that is in the containing element (and its children).

### steps

```js
// (1) create a copy of the document(DOM)
let newDOM = document.createRange();
// (2) convert the string(newMarkup) to a real-DOM-object
newDOM = newDOM.createContextualFragment(newMarkup);
// 1,2 in one step =>
const newDOM = document.createRange().createContextualFragment(newMarkup);
// now newDOM is like a big object of (virtual-DOM) that lives in memory NOT tha page

// (5) selecting all elements that lives in our virtual-DOM and converting it to an array so that we can compare it with the real-DOM
const newElements = Array.from(newDOM.querySelectorAll('*'));

// (6) selecting all elements that lives in our real-DOM and converting it to an array so that we can compare it with the virtual-DOM
const curElements = Array.from(this._parentElement.querySelectorAll('*'));

// (7) looping over the 2 arrays at the same time so that we can compare them
newElements.forEach((newEl, i) => {
  const curEl = curElements[i];

  // (8) Updates changed TEXT
  if (
    // comparing the (content) of the 2 nodes
    !newEl.isEqualNode(curEl) &&
    newEl.firstChild?.nodeValue.trim() !== ''
  ) {
    // change the part that differ in the virtual-DOM
    curEl.textContent = newEl.textContent;
  }

  // (9) Updates changed Attributes
  if (!newEl.isEqualNode(curEl))
    Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));
});
```

---

## Events

### Event Flow (Delegation / Propagation)

HTML elements nest inside each other elements. if you hover or click on a link, you will also be hovering or clicking on its parent elements.

![event flow](./img/event-flow.png)

Event handlers/listeners can be bound to the containing `<li>`, `<ul>`, `<body>` and `<html>` elements, plus the document object and the window object. **The order in which the events fire is known as "event flow"**

- the flow of events only matters when your code has event handlers on an element and one of its ancestor or descendant elements
- events flow in 2 directions:
  - event bubbling
  - event capturing
- the final parameter in the `addEventListener()` method lets you choose the direction to trigger events
  - `true` -> capturing phase
  - `false` -> bubbling phase (default value)

![delegation](./img/javascript-event-propagation-5.webp)

Creating event listeners for a lot of elements can slow down a page, but event flow allows you to listen for an event on a parent element.

- like that we are **delegating** the job of the event listener to a parent of the elements.
- `Event delegation` is a special kind of event handling, in which an event handler of the parent of an element handles events for that element.
- used to prevent event listener to create a lot of callback functions listening to all the items in `forEach`, so we use `event.target` as it shows **where the event happened**

  1. Add event listener to common parent element
  2. Determine what element originated the event => `e.target`
  3. if the element has children inside it => use `.closest(element)` to prevent wrong selection

  ```javascript
  tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab'); // goes up from the element and checks each of parents. If it matches the selector, then the search stops, and the ancestor is returned.
    // Don't use `e.target.parentElement`

    // Guard clause (as if you clicked on other than '.operations__tab' element )
    if (!clicked) return;}
  ```

---

### Event Handling

- **binding event to a DOM node**: Indicate which event on the selected node(s) will trigger the response.
- There're 3 ways to bind an event to an element:

  - HTML EVENT HANDLERS (**bad practice**)
    - This method of event handling is **no longer used** because it is better to separate the JavaScript from the HTML.
  - TRADITIONAL DOM EVENT HANDLERS

    - The main drawback is that you can only attach a single function to any event

    ```js
    el.onblur = checkUsername; // the parentheses are omitted
    ```

  - DOM LEVEL 2 EVENT LISTENERS ✅
    - They can deal with more than one function at a time, but they are not supported in older browsers.

- `this` in callbacks refers to the selected element in the event `but` => `this` doesn't work like that if you used an `arrow function`, and if so, you should use `bind`

- `addEventListener()` vs `onclick()`

  | addEventListener                                                                                       | onclick                                                                                     |
  | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
  | addEventListener can add multiple events to a particular element.                                      | can add only a single event to an element. It is basically a property, so gets overwritten. |
  | addEventListener can take a third argument that can control the event propagation.                     | Event propagation cannot be controlled by onclick.                                          |
  | addEventListener can only be added within `<script>` elements or in external JavaScript file.          | onclick can be added as an HTML attribute also.                                             |
  | addEventListener does not work in older versions of Internet explorer, which uses attachEvent instead. | onclick works in all browsers.                                                              |
  | addEventListener can do multiple things when event is triggered                                        | onclick can only do one task when event is triggered                                        |
  | can be on an element that doesn't exist yet (ex : `event.target`)                                      | can't do that                                                                               |

- to make a callback function listen to more that one event :

  ```js
  ['click', 'load'].forEach(event => window.addEventListener(event, callback_function));
  ```

- with event handlers and listeners, you wrap the function call (with the arguments) in an **anonymous function**.
- **The Event object :** When an event occurs, the event object tells you information about the event, and the element it happened upon.
  - Every time an event fires, the The event object is passed to event object contains helpful any function that is the event data about the event, such as:
    - `Which element the event happened on`
    - `Which key was pressed for a keypress event`
    - `What part of the viewport the user clicked`
      ![event-object](./img/event-object.png)
  - the event-object is passed to any function that is the event handler or listener as an argument
    ![event-object](./img/event-object2.png)

---

### Events Notes

- The `mousedown` and `mouseup` events separate out the press and release of a mouse button. They are commonly used for adding **drag and drop functionality**, or to add controls in game development.
- the **event** object can tell you where the cursor was positioned when an event was triggered
  ![event-position](./img/event-position.png)
  ![event-position](./img/event-position2.png)

---

## Storage

- `local storage` : always stays
- `session storage` : gets closed when window or tab are closed

---
