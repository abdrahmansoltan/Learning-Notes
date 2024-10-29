# INDEX

- [INDEX](#index)
  - [Notes](#notes)
  - [JavaScript Design (Architecture) Patterns](#javascript-design-architecture-patterns)
    - [MVC](#mvc)
      - [Models](#models)
      - [Views](#views)
      - [Controllers](#controllers)
      - [event handling using **Publish Subscribe Pattern**](#event-handling-using-publish-subscribe-pattern)

---

## Notes

- `config.js` : here we put all **constant variables** that :
  - will help configure the application
  - variables that are responsible for defining important data
- `helpers.js` : contains all functions that we use over and over in the application

---

## JavaScript Design (Architecture) Patterns

- [reference](https://www.patterns.dev/posts/classic-design-patterns/)
- Components of any architecture
  ![architecture](./img/architecture.png)

### MVC

`MVC` is an architectural design pattern that encourages improved application organization through a separation of concerns. It enforces the isolation of business data (Models) from user interfaces (Views), with a third component (Controllers) traditionally managing logic and user-input.
![mvc](./img/MVC3.png)
![mvc](./img/architecture-1.png)

- Example
  ![mvc](./img/architecture-2.png)
  - Usually the `model` and `controller` are **modules** that are imported in the `view`, and the `view` is a **class** that is instantiated in the `controller` and the `controller` is instantiated in the `app.js` file

> Also check the [MVC section in node.js](../../Backend/Node.js/2-Express.md#mvc-architecture-in-express-app)

#### Models

- Models manage the data for an application. They are concerned with neither the user-interface nor presentation layers but instead represent unique forms of data that an application may require.
- work with data (e.g. save, fetch)

#### Views

- Views are a visual representation of models that present a filtered view of their current state. Whilst Smalltalk views are about painting and maintaining a bitmap, JavaScript views are about building and maintaining a DOM element.

#### Controllers

- Controllers are an intermediary between models and views which are classically responsible for updating the model when the user manipulates the view.
- it also includes **Routes**

#### event handling using **Publish Subscribe Pattern**

The Publisher/Subscriber pattern, or “PubSub” for short, is a pattern that allows us to create modules that can communicate with each other without `depending directly` on each other.

This is because for example, if we want to handle an event in the `view` and do something in the `controller`, we can't do it directly because the `view` doesn't know that the `controller` exists. So, we use the `PubSub` pattern to handle this.

- usually it's used to listen to events on the `view` and do the action that is in the `controller` within `init()` function
  ![pubsub](./img/pubsub.png)

  - you can use this name-format for these functions : `addHandlerSearch`,`addHandlerAddBookmark`

  - **explain** :

    - the `view` is **imported** in the `controller`
    - the `view` doesn't even know that the `controller` exists
    - I want to use something(callback-function) in the `controller` as an argument in the `view`
    - so, I subscribe to a publisher(event-listener that need the argument) in the `view` by passing something from the subscriber(callback-function in the `controller`) in it
    - but the publisher won't have access to the subscriber `until` it's importer in the controller which is already done in **1st step**
    - this means that : **as soon as the publisher publishes an event => the subscriber will get called(notified)**

  - **example** :

    ```js
    // view.js
    class View {
      _parentElement = document.querySelector('.bookmarks__list');
      _data;
      addHandlerRender(handler) {
        window.addEventListener('load', handler);
      }
      addHandlerSearch(handler) {
        this._parentElement.addEventListener('click', function (e) {
          const btn = e.target.closest('.btn--search');
          if (!btn) return;
          handler();
        });
      }
    }

    // -----------------------------------------------------------

    // controller.js
    import View from './view.js';
    class Controller {
      _view = new View();
      init() {
        this._view.addHandlerRender(this._loadBookmarks.bind(this));
        this._view.addHandlerSearch(this._controlSearchResults.bind(this));
      }
    }
    ```
