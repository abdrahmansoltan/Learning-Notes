# INDEX

- [INDEX](#index)
  - [Notes](#notes)
  - [Scheduling: setTimeout and setInterval](#scheduling-settimeout-and-setinterval)
    - [setTimeout](#settimeout)
    - [Canceling with clearTimeout](#canceling-with-cleartimeout)
    - [setInterval](#setinterval)
    - [Garbage collection and setInterval/setTimeout callback](#garbage-collection-and-setintervalsettimeout-callback)
  - [Is JavaScript a `synchronous` or `asynchronous` ?](#is-javascript-a-synchronous-or-asynchronous-)
  - [Building a Promise](#building-a-promise)
    - [creating a promise](#creating-a-promise)
  - [consume promise : (Old Way)](#consume-promise--old-way)
    - [AJAX Call : `XMLHttpRequest`](#ajax-call--xmlhttprequest)
    - [Callback Hell (Callback in callback)](#callback-hell-callback-in-callback)
  - [consume promise : (Modern Way)](#consume-promise--modern-way)
    - [Promises / Fetch API](#promises--fetch-api)
      - [Consumers: `then`, `catch`](#consumers-then-catch)
      - [Cleanup: `finally` method](#cleanup-finally-method)
  - [consume promise (ES7)](#consume-promise-es7)
    - [Promisification (promisify)](#promisification-promisify)
    - [Consuming Promises with Async/Await](#consuming-promises-with-asyncawait)
  - [Error Handling](#error-handling)
    - [Handling uncaught error](#handling-uncaught-error)
    - [Handling Rejected Promises (2 ways)](#handling-rejected-promises-2-ways)
      - [1. Pass a second callback function in `.then()` method](#1-pass-a-second-callback-function-in-then-method)
      - [2. using `.catch()` at the end of the promise chain](#2-using-catch-at-the-end-of-the-promise-chain)
    - [Error Handling With try...catch](#error-handling-with-trycatch)
      - [try…catch…finally](#trycatchfinally)
    - [Global Error Handling (Global catch)](#global-error-handling-global-catch)
  - [Sequence promises vs Parallel promises](#sequence-promises-vs-parallel-promises)
    - [Sequence promises](#sequence-promises)
    - [Promise methods](#promise-methods)
      - [`Promise.all()`](#promiseall)
      - [`Promise.allSettled()`](#promiseallsettled)
      - [`Promise.race()`](#promiserace)
      - [`Promise.any()`](#promiseany)
      - [Promise.resolve/reject](#promiseresolvereject)
  - [Microtasks](#microtasks)
    - [Microtasks queue](#microtasks-queue)
  - [Working with data from other servers (Proxy)](#working-with-data-from-other-servers-proxy)

---

## Notes

- if you are using hosted version of an Api => don't forget to put `defer` in the `<script>` part of it in the HTML `<head>`
- in `event loop` :
  - `callback functions` that are coming from **promises** go to **microTasks queue** not the `callback queue`.
  - **microTasks queue** has priority over **callback queue** in `event loop`

---

## Scheduling: setTimeout and setInterval

- There are two methods for it:

  - `setTimeout` allows us to run a function once after the interval of time.
  - `setInterval` allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

### setTimeout

```js
// syntax
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
```

**Notes:**

- If the first argument is a **string**, then JavaScript creates a function from it.

  ```js
  setTimeout("alert('Hello')", 1000); // This will work
  ```

- But using **strings** is not recommended, use arrow functions instead of them, like this:

  ```js
  setTimeout(() => alert('Hello'), 1000);
  ```

- Pass a function, but don’t run it

  ```js
  // wrong!
  setTimeout(sayHi(), 1000);
  ```

  - That doesn’t work, because `setTimeout` expects a **reference to a function**. And here `sayHi()` runs the function, and the result of its execution is passed to setTimeout. In our case the result of `sayHi()` is undefined (the function returns nothing), so nothing is scheduled.

- **Time goes on while `alert` is shown**

  - In most browsers, the internal timer continues while showing `alert`/`confirm`/`prompt`.
  - this is as `alert` blocks the Synchronous operations and not the Async ones

- The method `setTimeout` in-browser is a little special:
  - it sets `this = window` for the function call
    - for `Node.js`, `this` becomes the **timer object**.

---

### Canceling with clearTimeout

A call to `setTimeout` returns a “timer identifier” **timerId** that we can use to cancel the execution.

```js
let timerId = setTimeout(...);
clearTimeout(timerId);
```

---

### setInterval

You can do intervals using `setInterval()` or with **nested setTimeOut()**:

```js
/** instead of "setInterval":
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);
// The setTimeout above schedules the next call right at the end of the current one (*).
```

- The **nested setTimeout** is a more flexible method than `setInterval`. This way the next call may be scheduled differently, depending on the results of the current one.

  - For instance, we need to write a service that sends a request to the server every 5 seconds asking for data, but in case the server is overloaded, it should increase the interval to 10, 20, 40 seconds…

    ```js
    let delay = 5000;

    let timerId = setTimeout(function request() {
      ...send request...

      if (request failed due to server overload) {
        // increase the interval to the next run
        delay *= 2;
      }

      timerId = setTimeout(request, delay);

    }, delay);
    ```

- Nested `setTimeout` allows to set the delay between the executions more precisely than `setInterval`.

  - `setInterval`

    ```js
    // setInterval
    let i = 1;
    setInterval(function () {
      func(i++);
    }, 100);
    ```

    ![setIntervals](./img/setIntervals.png)

    - The real delay between func calls for setInterval is less than in the code!. because the time taken by func's execution “consumes” a part of the interval.
    - It is possible that func's execution turns out to be longer than we expected and takes more than `100ms`.
    - In this case the engine waits for func to complete, then checks the scheduler and if the time is up, runs it again immediately.

  - nested `setTimeout`

  ```js
  let i = 1;
  setTimeout(function run() {
    func(i++);
    setTimeout(run, 100);
  }, 100);
  ```

  ![nested-setTimeOut](./img/nested-setTimeOut.png)

  - The nested `setTimeout` guarantees the fixed delay (here `100ms`).
    - That’s because a new call is planned at the end of the previous one.

---

### Garbage collection and setInterval/setTimeout callback

When a function is passed in `setInterval`/`setTimeout`, an internal **reference** is created to it and saved in the scheduler. It prevents the function from being garbage collected, even if there are no other references to it.

```js
// the function stays in memory until the scheduler calls it
setTimeout(function() {...}, 100);
```

> For **setInterval** the function stays in memory until **clearInterval** is called.

There’s a side effect. A function references the outer lexical environment, so, while it lives, outer variables live too. They may take much more memory than the function itself. So when we don’t need the scheduled function anymore, it’s better to cancel it, even if it’s very small.

---

## Is JavaScript a `synchronous` or `asynchronous` ?

- JavaScript is always `synchronous` & `single-threaded`, and it has no Asynchronous ability
- **but** when `js` runs on certain environments like **browser** or **node.js** --> it allows us to write `asynchronous functionality` like `setTimeOut()` which is not from `javascript` but it's from `window / global` object in the **browser** or in **Node.js**
- so **Javascript has no timer**, as the timer-function is **Web-browser feature**

> **Async** means that "we don't have it right now"

---

## Building a Promise

- when you create a new promise you put an `execution function` which takes `2` callback functions `(resolve, reject)` as parameters
  - what is returned from `(resolve, reject)` functions will be the fulfilled / rejected value that we handle them using `.then() / .catch()`

### creating a promise

```javascript
// creating the promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

// using the promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
```

---

## consume promise : (Old Way)

### AJAX Call : `XMLHttpRequest`

**Ajax** is a technique for loading data into part of a page without having to refresh the entire page. The data is often sent in a format called JavaScript Object Notation `JSON`.

- The ability to load new content into part of a page improves the user experience because the user does not have to wait for an entire page to load if only part of it is being updated. This has led to a rise in so-called **single page web applications** (web-based tools that feel more like software applications, even though they run in the browser).
- Historically, **AJAX** was an acronym for the technologies used in asynchronous requests like this. It stood for **Asynchronous JavaScript And XML**. Since then, technologies have moved on and the term **Ajax** is now used to refer to a group of technologies that offer asynchronous functionality in the browser.
- **Data formats:** Servers typically send back `HTML`, `XML`(which the browser turns into `HTML`), or `JSON`
  - Browsers only let Ajax load `HTML` and `XML` from the **same domain name** as the rest of the page,
    - but `JSON` can be called from any domain **(JSON-P/CORS)**
  - **XML** -> The tags in an `XML` file should describe the data they contain. As a result, even if you have never seen the code to the left. you can see that the data describes information about several events. The `<events>` element contains several individual events. Each individual event is represented in its own `<event>` element.
  - **JSON** :
    - When `JSON` data is sent from a server to a web browser, it is transmitted as a **string**.
    - When it reaches the browser, your script must then convert the string into a JavaScript object. This is known as **deserializing an object**.
      - This is done using the `parse()` method of a built-in object called `JSON`. This is a global object, so you can use it without creating an instance of it first.
    - The JSON object also has a method called `stringify()`, which converts objects into a string using `JSON` notation so it can be sent from the browser back to a server. This is also known as serializing an object.

> To create an Ajax request, browsers use the `XMLHttpRequest` object.
> When the server responds to the browser's request, the same `XMLHttpRequest` object will process the result.

```javascript
const getCountryData = function (country) {
  const request = new XMLHttpRequest(); // An instance of the  Object
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`); //  prepares the request
  // 3 parameters --> (methodType, url of the page that will handle the request, A Boolean indicating if if should be asynchronous)
  request.send(); // sends the prepared request to the server
  // we can't do this : const data = request.send();  because the results aren't there yet and we have to wait for it

  // instead we add eventListener on it for when it (loads)
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // THEN => use the data object to get what you want in its properties
  });
};
```

### Callback Hell (Callback in callback)

> That’s called a **“callback-based” style of asynchronous programming**. A function that does something asynchronously should provide a callback argument where we put the function to run after it’s complete.

- As calls become more nested, the code becomes deeper and increasingly more difficult to manage.
- Callback Hell: It's when we have a lot of nested callbacks in order to execute asynchronous tasks in sequence (**Pyramid of Doom**).
- in fact, this happens for all asynchronous tasks, which are handled by callbacks And not just AJAX calls.

```javascript
// AJAX call country 1
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/Egypt`);
request.send();

request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);

  // Get neighbor country (2)
  const [neighbor] = data.borders;

  if (!neighbor) throw new Error('No neighbor found!');

  // AJAX call country 2
  const request2 = new XMLHttpRequest();
  request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
  request2.send();

  request2.addEventListener('load', function () {
    const data2 = JSON.parse(this.responseText);
    console.log(data2);

    renderCountry(data2, 'neighbor');
  });
});

// another example
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```

---

## consume promise : (Modern Way)

### Promises / Fetch API

- `Promise` : An object that is used as a placeholder for the future result of an asynchronous operation.
- or: it's an object that may produce a single value some time in the future, either a resolved-value or a (reason that it's rejected)
- The function passed to new Promise is called the **"executor"**.
  - When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result.
  - Its arguments `resolve` and `reject` are callbacks provided by JavaScript itself. Our code is only inside the executor.
  - When the `executor` obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

    - `resolve(value)` — if the job is finished successfully, with result value.
    - `reject(error)` — if an error has occurred, error is the error object.
      - it's internally the same as `throw new Error()`
  - The promise object returned by the new Promise constructor has these internal properties:

    - `state` — initially "`pending`", then changes to either "`fulfilled`" when resolve is called or "`rejected`" when reject is called.
    - `result` — initially `undefined`, then changes to `value` when `resolve(value)` is called or `error` when `reject(error)` is called.
- The constructor syntax for a promise object is:

  ```js
  let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")
  });
  ```

  ![promise](./img/promise.png)
  ![promise](./img/promise_state_inspect.png)

- In frontend programming, promises are often used for network requests. and we use the `fetch` method to load the information from the server.
- **fetch()**: doesn't has Execution context like other functions as it's a "facade" function (not from JavaScript)
- **fetch()**: returns a **promise object** which has 3 properties:
  ![fetch](./img/fetch.png)
  - `value` --> at first it's empty (`undefined`)
  - `onFulfilled` --> it's an **array** that has the code (functions) that will Javascript run when `value` property gets filled
  - `onRejection` --> it's an **array** that has the code (functions) that will Javascript run when error occurs
- Benefits of `promises`
  - We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results
  - Instead of nesting callbacks, we can chain promises for a
    sequence of asynchronous operations: escaping `callback-hell`
- _note_ : whatever we `return` from a `promise` will be the `fulfilled` value of that promise (which will be used in the `.then()` method), that's why `arrow-functions` are usually used with promises.
- explanation code :

  ```javascript
  fetch(`https://restcountries.eu/rest/v2/name/Egypt`)
    .then(response => {
      console.log(response); // promise object
      if (!response.ok) throw new Error(`Country not found (${response.status})`);
      return response.json();
      // (.json()) is a method available on all response objects that are coming from (fetch()) function, It reads the remote data and parses it as JSON
      // also (.json()) returns a new promise => so we have to return it like we did
    })
    .then(data => {
      // the data we want
      //  do what you want with data object in this function
    });
  ```

- clean code :

  ```javascript
  fetch(`https://restcountries.eu/rest/v2/name/Egypt`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  ```

- There can be only a single result or an error:

  ```js
  // The executor should call only one resolve or one reject. Any state change is final.
  let promise = new Promise(function(resolve, reject) {
    resolve("done");

    reject(new Error("…")); // ignored
    setTimeout(() => resolve("…")); // ignored
  });
  ```

#### Consumers: `then`, `catch`

A Promise object serves as a link between the executor (the “producing code”) and the consuming functions, which will receive the result or error. Consuming functions can be registered (subscribed) using the methods `.then` and `.catch`.

- `.then`

  ```js
  promise.then(
    function(result) { /* handle a successful result */ },
    function(error) { /* handle an error */ }
  );

  // -----------------------------------------------
  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });

  // resolve runs the first function in .then
  promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
  );
  ```

- `.catch`
  - If we’re interested only in errors, then we can use `null` as the first argument: `.then(null, errorHandlingFunction)`. Or we can use `.catch(errorHandlingFunction)`, which is exactly the same:

  ```js
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });

  // .catch(f) is the same as promise.then(null, f)
  promise.catch(alert); // shows "Error: Whoops!" after 1 second
  ```

- **Note:** Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?

    ```js
    promise.then(f1).catch(f2); // 1
    promise.then(f1, f2); // 2
    ```

  - answer is **NO**, The difference is that:
    - in `1`: if an error happens in `f1`, then it is handled by `.catch`
    - in `2`: .then passes results/errors to the next `.then`/`catch`. So in the first example, there’s a `catch` below, and in the second one there isn’t, so the error is unhandled.
      - so it should be:

          ```js
          promise.then(f1).then(null, f2)
          ```

#### Cleanup: `finally` method

Just like there’s a finally clause in a regular `try {...} catch {...}`, there’s finally in promises.

- The idea of `finally` is to set up a handler for performing cleanup/finalizing after the previous operations are complete.
- used for something that happens no matter the promise is `fulfilled` or `rejected`

```javascript
// after then & catch
.finally(() => { // any function
       countriesContainer.style.opacity = 1;
       });
```

- **Notes:**
  - A `finally` handler doesn’t get the outcome of the previous handler (it has no arguments). This outcome is passed through instead, to the next suitable handler.
  - A `finally` handler “passes through” the result or error to the next suitable handler. For instance, here the result is passed through `finally` to `then`:

    ```js
    new Promise((resolve, reject) => {
      setTimeout(() => resolve("value"), 2000);
    })
      .finally(() => alert("Promise ready")) // triggers first
      .then(result => alert(result)); // <-- .then shows "value"
    ```

  - A `finally` handler also shouldn’t `return` anything. If it does, the returned value is silently ignored.
    - The only exception to this rule is when a `finally` handler throws an error. Then this error goes to the next handler, instead of any previous outcome.

---

## consume promise (ES7)

### Promisification (promisify)

“Promisification” is a long word for a simple transformation. It’s the conversion of a function that accepts a callback into a function that returns a promise.

- Such transformations are often required in real-life, as many functions and libraries are callback-based. But promises are more convenient, so it makes sense to promisify them.
- For instance, we have `loadScript(src, callback)`:

  ```js
  // with callbacks
  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
  }
  // usage:
  loadScript('path/script.js', (err, script) => {...})

  // -------------------------------------------------------------- //

  // with promisification
  function promisify(f) {
    return function (...args) { // return a wrapper-function (*)
      return new Promise((resolve, reject) => {
        function callback(err, result) { // our custom callback for f (**)
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }

        args.push(callback); // append our custom callback to the end of f arguments

        f.call(this, ...args); // call the original function
      });
    };
  }
  // usage:
  let loadScriptPromise = promisify(loadScript);
  loadScriptPromise(...).then(...);
  ```

> **Note**: Promisification is a great approach, especially when you use async/await, but not a total replacement for callbacks.

---

### Consuming Promises with Async/Await

![await](./img/async_await.PNG)

- by using the word `async` before a function, you convert it to an `asyncronous function`
  - which will keep running in the background while performing the code inside of it, than when it's done => it returns a `promise`
  - Other values are wrapped in a resolved promise automatically.
  - We could explicitly return a promise, which would be the same.

  ```js
  async function f() {
    return 1;
  }
  f().then(alert); // 1

  // same as
  async function f() {
    return Promise.resolve(1);
  }
  f().then(alert); // 1
  ```

- the word `await` awaits the `result` of the promise (stops code-execution of the function until the promise is settled (fulfilled)) and give us the ability to store the fulfilled value in a variable without `then()/callbacks` 👌

  ```js
  // works only inside async functions
  let value = await promise;
  ```

  - `await` literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.
  - If we try to use `await` in a `non-async` function, there would be a syntax error
  - In the case of an error, the control jumps to the `catch` block.

- Inside an async function you can use the `await` keyword before a call to a function that returns a promise. This makes the code wait at that point until the promise is `settled`, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown.
- This enables you to write code that uses asynchronous functions but looks like synchronous code.

```javascript
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling...');
  const result = await resolveAfter2Seconds();
  console.log(result); // "resolved"
  // this is the same as
  resolveAfter2Seconds().then(res => console.log(result));
}

asyncCall();
```

- If we try to use `await` **in / without** a `non-async` function, there would be a `syntax error`,so => use `IIFE`

  ```javascript
  (async function () {
    try {
      const result = await resolveAfter2Seconds();
      console.log(result); // "resolved"
    } catch (err) {
      console.error(`2: ${err.message} 💥`);
    }
  })();
  ```

---

## Error Handling

### Handling uncaught error

- this is usually used to customize the `error message`
  - what we write in `Error()` must be a string, so we use `template literals`

```javascript
// Throwing Errors Manually (as it may not consider it an error if (response) isn't "ok")
if (!response.ok) throw new Error(`error is : (${response.status})`);
```

---

### Handling Rejected Promises (2 ways)

#### 1. Pass a second callback function in `.then()` method

- this second callback function will be executed when promise is `rejected`

```javascript
fetch(`https://restcountries.eu/rest/v2/name/Egypt`)
  .then(
    response => {
      if (!response.ok) throw new Error(`Country not found (${response.status})`);

      return response.json();
    },
    err => alert(err.message)
  )
  .then(
    data => {
      console.log(data);
    },
    err => alert(err.message)
  );
```

- problem is thet you will have to do it in every `.then()` method which is a pain, instead we use the second way

---

#### 2. using `.catch()` at the end of the promise chain

- the `.catch()` methods catches any `error` that occures anywhere in the `promise-chain`

  ```javascript
  fetch(`https://restcountries.eu/rest/v2/name/Egypt`)
    .then(response => {
      // Throwing Errors Manually
      if (!response.ok) throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(`${err} 💥💥💥`);
    });
  ```

- there’s an "implicit(hidden) `try..catch`" around the executer-function code. So all **synchronous** errors are handled.
  - But if the error is generated not while the executor is running, but later (e.g. Asynchronously). then the promise can’t handle it.

    ```js
    new Promise(function(resolve, reject) {
      setTimeout(() => {
        throw new Error("Whoops!");
      }, 1000);
    }).catch(alert); // this won't trigger
    ```

---

### Error Handling With try...catch

`try...catch` can only handle errors that occur in valid code. Such errors are called **“runtime errors”** or, sometimes, **“exceptions”**.

- If a promise resolves normally, then `await promise` returns the result. But in the case of a `rejection`, it throws the error, just as if there were a throw statement at that line.

  ```javascript
  async function f() {
    await Promise.reject(new Error('Whoops!'));
  }

  // …is the same as this:

  async function f() {
    throw new Error('Whoops!');
  }
  ```

- We can catch that error using `try..catch`, the same way as a regular `throw`

  ```javascript
  async function f() {
    try {
      let response = await fetch('/no-user-here');
      let user = await response.json();
    } catch (err) {
      // catches errors both in fetch and response.json
      alert(err);
      console.error(`Error is : ${err.message} 💥`);
    }
  }

  f();
  ```

- to specify what error-type you want to handle in the `catch` block, we can use **"re-throwing technique**:

  ```js
  function readData() {
    let json = '{ "age": 30 }';

    try {
      blabla(); // error!
    } catch (err) {
      if (!(err instanceof SyntaxError)) {
        throw err; // rethrow (don't know how to deal with it)
      }
      // else
      alert('JSON Error: ' + err.message);
    }
  }

  try {
    readData();
  } catch (err) {
    alert('External catch got: ' + err); // caught it!
  }
  ```

- `try...catch` works synchronously

  - If an exception happens in “scheduled” code, like in `setTimeout`, then `try...catch` won’t catch it:

    ```js
    try {
      setTimeout(function () {
        noSuchVariable; // script will die here
      }, 1000);
    } catch (err) {
      alert("won't work");
    }
    ```

  - That’s because the function itself is executed later, when the engine has already left the try...catch construct.

- If we don’t have `try..catch`, then the promise generated by the call of the **async function** `f()` becomes rejected. We can append `.catch` to handle it:

  ```js
  async function f() {
    let response = await fetch('http://no-such-url');
  }
  // f() becomes a rejected promise
  f().catch(alert); // TypeError: failed to fetch // (*)
  ```

- Optional `“catch”` binding, (recent addition).

  - If we don’t need `error` details, `catch` may omit it:

    ```js
    try {
      // ...
    } catch {
      // <-- without (err)
      // ...
    }
    ```

#### try…catch…finally

- If it exists, it runs in all cases:

  - after `try`, if there were no errors,
  - after `catch`, if there were errors.

```js
try {
   ... try to execute the code ...
} catch (err) {
   ... handle errors ...
} finally {
   ... execute always ...
}
```

---

### Global Error Handling (Global catch)

Let’s imagine we’ve got a fatal error outside of `try...catch`, and the script died. Like a programming error or some other terrible thing.

- in the **browser** we can assign a function to the special **`window.onerror`** property, that will run in case of an uncaught error.
- The is not a part of the core JavaScript, as it works on the Browser engine.

```js
window.onerror = function (message, url, line, col, error) {
  // message: Error message
  // url: URL of the script where error happened.
  // line, col: Line and column numbers where error happened.
  // error: Error object
};

// ex:
window.onerror = function (message, url, line, col, error) {
  alert(`${message}\n At ${line}:${col} of ${url}`);
};
```

- The role of the global handler `window.onerror` is usually not to recover the script execution – that’s probably impossible in case of programming errors, but to send the error message to developers.

> What happens when a regular error occurs and is not caught by **try..catch**? The script dies with a message in the console. A similar thing happens with unhandled promise rejections.
>
> - The JavaScript engine tracks such rejections and generates a global error in that case.
> - In the browser we can catch such errors using the event **"unhandledrejection"** event
> - In any case we should have the "unhandledrejection" event handler (for browsers, and analogs for other environments) to track unhandled errors and inform the user (and probably our server) about them, so that our app never “just dies”.
>
> ```js
> // EX:
> let promise = Promise.reject(new Error("Promise Failed!"));
> setTimeout(() => promise.catch(err => alert('caught')), 1000);
> 
> // Error: Promise Failed!
> window.addEventListener('unhandledrejection', event => alert> (event.reason));
> ```

---

## Sequence promises vs Parallel promises

### Sequence promises

- they depend on each other in their order as if one failed, then all fail as well ![Sequence promises](./img/Sequence%20promises.PNG)

  ```javascript
  const get3Countries = async function (c1, c2, c3) {
    try {
      const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
      const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
      const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
      console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);
    } catch (err) {
      console.error(err);
    }
  };
  get3Countries('portugal', 'canada', 'tanzania');
  ```

---

### Promise methods

There are 6 static methods in the `Promise` class:

- [Promise.all](#promiseall)
- [Promise.allSettled](#promiseallsettled)
- [Promise.race](#promiserace)
- [Promise.any](#promiseany)
- [Promise.resolve/reject](#promiseresolvereject)

#### `Promise.all()`

- It takes an **iterable** (usually, an array of `promises`) and returns a new `promise`. The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.

    ```js
    Promise.all([
      new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
      new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
      new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
    ]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member
    ```

  - > Note that the order of the resulting array members is the same as in its source promises. Even though the first promise takes the longest time to resolve, it’s still first in the array of results.

- takes an iterable (`array`) of promises as an input, and returns a single Promise that resolves to an `array` of the results of the input promises which you can use array methods like `map()` on it, **but** notice that in `map()` it returns array of `promises and not values`, so we should use `promise.all()` again on this array to get the values

  ```js
  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];

  // map every url to the promise of the fetch
  let requests = urls.map(url => fetch(url));

  // Promise.all waits until all jobs are resolved
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => alert(`${response.url}: ${response.status}`)
    ));
  ```

- If any of the promises is rejected, the promise returned by `Promise.all` immediately rejects with that error.
  - > if one promise fails, the others will still continue to execute, but `Promise.all` won’t watch them anymore. They will probably settle, but their results will be ignored.
  - > `Promise.all` does nothing to cancel them, as there’s no concept of “cancellation” in promises.

- `Promise.all(iterable)` allows non-promise “regular” values in iterable
  - Normally, Promise.all(...) accepts an iterable (in most cases an array) of promises. But if any of those objects is not a promise, it’s passed to the resulting array “as is”.

    ```js
    Promise.all([
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
      }),
      2,
      3
    ]).then(alert); // 1, 2, 3
    ```

- `async`/`await` works well with `Promise.all`

  ```js
  // wait for the array of results
  let results = await Promise.all([
    fetch(url1),
    fetch(url2),
    ...
  ]);
  ```

#### `Promise.allSettled()`

- It waits for all promises to settle, regardless of the result. The resulting array has:

  - `{status:"fulfilled", value:result}` for successful responses,
  - `{status:"rejected", reason:error}` for errors.
- returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
- It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.

```javascript
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    alert(results); 
    /*
    [
      {status: 'fulfilled', value: ...response...},
      {status: 'fulfilled', value: ...response...},
      {status: 'rejected', reason: ...error object...}
    ]
    */
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });
```

#### `Promise.race()`

Similar to `Promise.all`, but waits only for the first settled promise and gets its result (or error).

- returns a promise that **fulfills or rejects** as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(value => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
```

#### `Promise.any()`

Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. If all of the given promises are rejected, then the returned promise is rejected with `AggregateError`

- takes an iterable of Promise objects. It returns a single promise that resolves as soon as **any of the promises in the iterable fulfills**

```javascript
const promise1 = Promise.reject(0); // the fastest but isn't resolved :(
const promise2 = new Promise(resolve => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise(resolve => setTimeout(resolve, 500, 'slow'));
const promiseArr = [promise1, promise2, promise3];

Promise.any(promiseArr).then(value => console.log(value));
// expected output: "quick"
```

#### Promise.resolve/reject

Methods `Promise.resolve` and `Promise.reject` are rarely needed in modern code, because `async/await` syntax

- `Promise.resolve(value)` creates a resolved promise with the result value.

  ```js
  // same as:
  let promise = new Promise(resolve => resolve(value));
  ```

  - The method is used for compatibility, when a function is expected to return a promise.
- `Promise.reject(error)` creates a rejected promise with error.

  ```js
  // same as:
  let promise = new Promise((resolve, reject) => reject(error));
  ```

```javascript
// immediately resolve /reject a promise using thees methods from (promise) object
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x)
```

---

## Microtasks

- Promise handlers `.then`/`.catch`/`.finally` are always **Asynchronous**.
  - Even when a Promise is immediately resolved

  ```js
  let promise = Promise.resolve();
  promise.then(() => alert("promise done!"));
  alert("code finished"); // this alert shows first
  ```

### Microtasks queue

Asynchronous tasks need proper management. For that, the **ECMA** standard specifies an internal queue `PromiseJobs`, more often referred to as the “microtask queue” (V8 term).

- The queue is first-in-first-out **(FIFO)**: tasks enqueued first are run first.
- Execution of a task is initiated only when nothing else is running.
- Or, to put it more simply, when a promise is ready, its `.then`/`catch`/`finally` handlers are put into the queue; they are not executed yet. When the JavaScript engine becomes free from the current code, it takes a task from the queue and executes it.

> - Remember the **"unhandledrejection"** event from (Error handling with promises)? Now we can see exactly how JavaScript finds out that there was an unhandled rejection:
> - **An “unhandled rejection” occurs when a promise error is not handled at the end of the microtask queue.**

---

## Working with data from other servers (Proxy)

**Ajax** works smoothly with data from your own server but - for security reasons - browsers do not load Ajax responses from other domains (known as **cross-domain requests**). There are three common workarounds:

- **PROXY** file on the web server
  - The first way to load data from a remote server is to create a file on your server that collects the data from the remote server (using a server-side language such as `ASP.net`, `PHP`, `NodeJS`, or `Ruby`). The other pages on your site then request the data from the file on your server (which in turn gets it from the remote server). This is called a **proxy**, because it acts on behalf of the other page.
- **JSONP** (JSON with padding)
  - involves adding a `<script>` element into the page, which loads the JSON data from another server. This works because there are no restrictions on the source of script in a `<script>` element.
- **CROSS-ORIGIN RESOURCE SHARING (CORS)**
  - involves adding extra information to the **HTTP headers** to let the browser and server know that they should be communicating with each other.