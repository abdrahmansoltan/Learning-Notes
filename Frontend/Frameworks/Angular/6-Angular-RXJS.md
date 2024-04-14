# INDEX

- [INDEX](#index)
  - [RxJS](#rxjs)
    - [RxJS Terminology](#rxjs-terminology)
    - [Reference \& Docs](#reference--docs)
  - [Operators](#operators)
    - [Transform Operators](#transform-operators)
    - [Flattening Operators](#flattening-operators)
    - [Creation Operators](#creation-operators)
    - [Error Handling Operators](#error-handling-operators)
    - [Other Operators](#other-operators)
  - [Observables](#observables)
    - [Unicast (Cold) Observables](#unicast-cold-observables)
    - [Multicast (Hot) Observables](#multicast-hot-observables)
    - [Observables with Typescript](#observables-with-typescript)
    - [Error Handling in Observables](#error-handling-in-observables)
  - [Common RxJS Issues](#common-rxjs-issues)
    - [Nested Subscriptions](#nested-subscriptions)
    - [Required return value](#required-return-value)
  - [RxJS in Angular](#rxjs-in-angular)
    - [Example on how to use RxJS in Angular](#example-on-how-to-use-rxjs-in-angular)

---

## RxJS

It's a **functional reactive library** for filtering,sorting and coordinating data.

![RxJS](./img/rxjs-1.png)

- It's a library for composing asynchronous and event-based programs by using observable sequences.

  - It provides one core type, the Observable, satellite types `(Observer, Schedulers, Subjects)` and operators inspired by Array#extras `(map, filter, reduce, every, etc)` to allow handling asynchronous events as collections.

- It can be used with Angular, React, Vue, Node.js, and other frameworks. But it's mostly used with Angular for:
  - handling HTTP requests
  - event handling
  - state management

---

### RxJS Terminology

- How **event-handling** works for this code

  ```js
  const input = document.querySelector('input');
  input.addEventListener('input', event => {
    let text = event.target.value;
    text = parseInt(text);
    if (isNaN(text)) {
      throw new Error('Not a number');
    }
    console.log(text);
  });
  ```

  ![RxJS](./img/rxjs-2.png)

- How is this different in **RxJS**?

  - In RxJS, we have an **Observable** that wraps the input element and listens to the input event. **(instead of using `addEventListener` (imperative approach))**
  - In RxJS, the "pipeline processing steps" are called **Operators**. which are used to transform the data sequently by using the `pipe` method.
  - In RxJS, the `subscribe` method is used to listen to the data emitted by the observable.
  - In RxJS, the `Observer` is used to handle the data emitted by the observable.

  ```js
  import { fromEvent } from 'rxjs';
  import { map } from 'rxjs/operators';

  const input = document.querySelector('input');
  const observable = fromEvent(input, 'input').pipe(
    map(event => event.target.value),
    map(text => parseInt(text)),
    map(value => {
      if (isNaN(value)) {
        throw new Error('Not a number');
      }
      return value;
    })
  );

  // Now we can subscribe to the observable to listen to the data emitted by the input element
  observable.subscribe({
    next: value => console.log(value),
    error: err => console.error(err), // optional (to handle errors)
    complete: () => console.log('done') // optional (like finally in promises)
  });
  ```

  - **Note:** for the `error` and `complete` methods, we should use **Arrow functions** to maintain the context of `this`. (because they are called by the observable, not by us)

  ![RxJS](./img/rxjs-3.png)

---

### Reference & Docs

[Official Docs](https://rxjs.dev)

---

## Operators

![operators](./img/operators-1.png)

- Operators are functions that build on the observables foundation to enable sophisticated manipulation of collections.
- **Operator Groups**
  ![operators](./img/operators-2.png)
  - **Generic operators:** These are the operators that can be used with any type of observable.
  - **Specific operators:** These are the operators that are used with specific types of observables.
    - **Creation operators:** These are the operators that are used to create observables.
    - **Transformation operators:** These are the operators that are used to transform the data emitted by the observables.
    - **Filtering operators:** These are the operators that are used to filter the data emitted by the observables.
    - **Combination operators:** These are the operators that are used to combine the data emitted by the observables.
    - **Multicasting operators:** These are the operators that are used to multicast the data emitted by the observables.
    - **Error handling operators:** These are the operators that are used to handle the errors emitted by the observables.

---

### Transform Operators

- `map`: It is used to transform the data emitted by the observable.

  ```ts
  import { of } from 'rxjs';
  import { map } from 'rxjs/operators';

  const observable = of(1, 2, 3, 4, 5);
  observable.pipe(map(value => value * 2)).subscribe(console.log); // 2, 4, 6, 8, 10
  ```

- `tap`: It is used to perform side-effects on the data emitted by the observable.

  ```ts
  import { of } from 'rxjs';
  import { tap } from 'rxjs/operators';

  const observable = of(1, 2, 3, 4, 5);
  observable.pipe(tap(value => console.log(value))).subscribe(); // 1, 2, 3, 4, 5
  ```

- `pluck`: It is used to extract a property from the data emitted by the observable.

  ```ts
  import { of } from 'rxjs';
  import { pluck } from 'rxjs/operators';

  const observable = of({ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 });
  observable.pipe(pluck('name')).subscribe(console.log); // Alice, Bob
  ```

---

### Flattening Operators

![operators](./img/flat.PNG)

- `filter`: It is used to filter the data emitted by the observable.

  ```ts
  import { of } from 'rxjs';
  import { filter } from 'rxjs/operators';

  const observable = of(1, 2, 3, 4, 5);
  observable.pipe(filter(value => value % 2 === 0)).subscribe(console.log); // 2, 4
  ```

- `reduce`: It is used to reduce the data emitted by the observable.

  ```ts
  import { of } from 'rxjs';
  import { reduce } from 'rxjs/operators';

  const observable = of(1, 2, 3, 4, 5);
  observable.pipe(reduce((acc, value) => acc + value, 0)).subscribe(console.log); // 15
  ```

---

### Creation Operators

- `observable`: It is used to create an observable from a function **(low level)**

  ```ts
  import { Observable } from 'rxjs';

  const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    // subscriber.error('error');
    subscriber.next(5);
    subscriber.complete('done');
  });

  observable.subscribe(console.log); // 1, 2, 3, 4, 5, done
  ```

- `of`: It is used to create an observable from a list of values.

  ```ts
  import { of } from 'rxjs';

  const observable = of(1, 2, 3, 4, 5);
  observable.subscribe(console.log); // 1, 2, 3, 4, 5
  ```

---

### Error Handling Operators

- `catchError`: It is used to catch the errors emitted by the observable and return a new observable that emits the error message.

  ```ts
  import { of } from 'rxjs';
  import { catchError } from 'rxjs/operators';

  const observable = of(1, 2, 3, 4, 5).pipe(
    map(value => {
      if (value === 3) {
        throw new Error('An error occurred');
      }
      return value;
    }),
    catchError(err => of('Error occurred'))
  );

  observable.subscribe(console.log); // 1, 2, 'Error occurred'
  ```

---

### Other Operators

- `delay`: It is used to delay the data emitted by the observable.

  ```ts
  import { of } from 'rxjs';
  import { delay } from 'rxjs/operators';

  const observable = of(1, 2, 3, 4, 5).pipe(delay(1000));
  observable.subscribe(console.log); // 1, 2, 3, 4, 5 (after 1 second)
  ```

- `scan`: It is used to accumulate the data emitted by the observable.

  ```ts
  import { of } from 'rxjs';
  import { scan } from 'rxjs/operators';

  const observable = of(1, 2, 3, 4, 5);
  observable.pipe(scan((acc, value) => acc + value, 0)).subscribe(console.log); // 1, 3, 6, 10, 15
  ```

  - The `scan` operator is similar to the `reduce` operator, but it emits the accumulated value **for each value emitted** by the observable. unlike the `reduce` operator which emits the accumulated value **only once** at the end of the observable.

---

## Observables

they are wrappers around a data-source that can be subscribed to.

- **Observables** are used to handle asynchronous data streams.
- In Angular, Observables are usually subscribed to in the component class to handle asynchronous data. (**the component subscribes to the observable and listens to the data emitted by it)**

| Method      | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| `next`      | Used to emit the data.                                            |
| `subscribe` | Used to listen to the data emitted by the observable.             |
| `complete`  | Used to indicate that the observable has completed emitting data. |
| `error`     | Used to indicate that an error has occurred while emitting data.  |

- Usually, we only focus on `next` and `subscribe` methods.

  - `complete` and `error` are used to handle the completion and error scenarios. (not used frequently)

- Observables have different types:
  - Unicast and Multicast Observables (based on the number of subscribers)
    ![observables](./img/observables-0.png)
  - Hot and Cold Observables (based on the data source and event stream)
    ![observables](./img/observables-5.png)

---

### Unicast (Cold) Observables

**Unicast Observables:** They are cold observables that emit data to a single subscriber.
![unicast](./img/observables-1.png)

> **"COLD"** means that the data is emitted only when there is a subscriber.

- Example:

  ```ts
  import { Observable } from 'rxjs';

  const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
  });

  // All operators are executed for each subscriber

  // first subscriber
  observable.subscribe(console.log); // 1, 2, 3
  // second subscriber
  observable.subscribe(console.log); // 1, 2, 3
  ```

- Each subscriber gets its own data stream. which means that all operators are executed for each subscriber.
- This can lead to performance issues if the data stream is expensive to create. **(Bad practice ❌)**
  ![unicast](./img/observables-2.png)

---

### Multicast (Hot) Observables

**Multicast Observables:** They are hot observables that emit data to multiple subscribers at the same time **(share the same data stream)**.
![multicast](./img/observables-3.png)

> **"HOT"** means that the data is emitted regardless of whether there are any subscribers.

- Example:

  ```ts
  import { Subject } from 'rxjs';

  const subject = new Subject();
  subject.next(1);
  subject.next(2);
  subject.next(3);

  subject.subscribe(console.log); // 1, 2, 3
  subject.subscribe(console.log); // 1, 2, 3
  ```

- All subscribers share the same data stream. which means that all operators are executed only once for all subscribers.
  - This can lead to performance improvements if the data stream is expensive to create. **(Good practice ✅)**
    ![multicast](./img/observables-4.png)
  - **But be careful! ⚠️** because all subscribers share the same data stream, if one observer subscribes after the data stream has completed, it will not receive any data, or after some operators are executed, it will not receive the data that was emitted before it subscribed.
    ![multicast](./img/observables-6.png)
- To convert a `cold` observable to a `hot` observable, we can use the `share` operator.

  ```ts
  import { Observable } from 'rxjs';
  import { share } from 'rxjs/operators';

  const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
  }).pipe(share()); // at the end of the pipeline to share the data stream after all operators are executed

  observable.subscribe(console.log); // 1, 2, 3
  observable.subscribe(console.log); // 1, 2, 3
  ```

- One of the great features of the `subject` is that we can emit data from outside the observable (unlike the `observable` class which emits data from inside the observable).

  ```ts
  import { Subject } from 'rxjs';

  const subject = new Subject();
  subject.next(1);
  subject.next(2);
  subject.next(3);

  subject.subscribe(console.log); // 1, 2, 3
  subject.subscribe(console.log); // 1, 2, 3

  subject.next(4);
  subject.next(5);
  subject.next(6);

  subject.subscribe(console.log); // 4, 5, 6
  subject.subscribe(console.log); // 4, 5, 6
  ```

  - We can emit data from outside the observable using the `next` method of the `subject`.
  - This is useful when we want to emit data from an event handler or a callback function.

---

### Observables with Typescript

- We can use **Typescript** to define the type of the data emitted by the observable.

- This is done by using **generics** with the `Observable` class.
- Example:

  ```ts
  import { Observable } from 'rxjs';

  const observable = new Observable<number>(subscriber => {
    // the type of the data emitted by the observable is `number`
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
  });

  // Now, when we subscribe to the observable, the data emitted by the observable will be of type `number`
  observable.subscribe(value => console.log(value)); // from type-inference, value is of type `number`
  ```

- This is super useful when we have a complex data structure that we want to emit from the observable.

  ```ts
  import { Observable } from 'rxjs';

  interface Car {
    year: number;
    color: string;
    running: boolean;
    make: {
      name: string;
      dateCreated: Date;
    };
  }

  const observable = new Observable<Car>(subscriber => {
    subscriber.next({
      year: 2000,
      color: 'red',
      running: true,
      make: {
        name: 'Chevy',
        dateCreated: new Date('2000-01-01')
      }
    });
  }).pipe(pluck('make', 'name')); // extract the `name` property from the `make` property

  observable.subscribe(value => console.log(value)); // Chevy, and it's of type `string` from (type-inference)
  ```

  - Typescript understands the type of the data emitted by the observable even when we use operators to transform the data.
    ![observables](./img/observables-7.png)

---

### Error Handling in Observables

It's important to handle errors in observables to prevent the application from crashing, and to provide developers with useful information about what went wrong.

- We can use the `error` method to handle errors emitted by the observable.

  ```ts
  import { Observable } from 'rxjs';

  const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.error('An error occurred');
    subscriber.next(4);
    subscriber.complete();
  });

  observable.subscribe({
    next: value => console.log(value),
    error: err => console.error(err)
  });
  ```

- We can use the `catchError` operator to handle errors emitted by the observable.

  ```ts
  import { of } from 'rxjs';
  import { catchError } from 'rxjs/operators';

  const observable = of(1, 2, 3, 4, 5).pipe(
    map(value => {
      if (value === 3) {
        throw new Error('An error occurred');
      }
      return value;
    }),
    catchError(err => of('Error occurred'))
  );

  observable.subscribe(console.log); // 1, 2, 'Error occurred'
  ```

  - The `catchError` operator catches the error emitted by the observable and returns a new observable that emits the error message.

---

## Common RxJS Issues

### Nested Subscriptions

- **Nested subscriptions** are when we subscribe to an observable inside another subscription.

  ```ts
  import { of } from 'rxjs';

  const observable1 = of(1, 2, 3, 4, 5);
  observable1.subscribe(value => {
    console.log(value);
    const observable2 = of('a', 'b', 'c', 'd', 'e');
    observable2.subscribe(value => console.log(value));
  });
  ```

  - This can cause problems, as if the first observable was delayed, the second observable will not wait for the first observable to complete.

    - This can lead to **out of order data from the observables** (especially in `http` requests where the data is not emitted immediately).
    - This can lead to performance issues and memory leaks.
    - This can lead to the creation of multiple subscriptions that are not needed.

- **Solution**

  - Use **operators** to transform the data emitted by the observable instead of subscribing to it inside another subscription.
  - `mergeMap` operator

    ```ts
    import { of } from 'rxjs';
    import { mergeMap } from 'rxjs/operators';

    const observable1 = of(1, 2, 3, 4, 5);
    observable1
      .pipe(mergeMap(value => of('a', 'b', 'c', 'd', 'e')))
      .subscribe(value => console.log(value));
    ```

    - The `mergeMap` operator is used to subscribe to the inner observable and emit its data in the outer observable.
    - This way, we avoid nested subscriptions and the problems that come with them.

  - `switchMap` operator

    ```ts
    import { of } from 'rxjs';
    import { switchMap } from 'rxjs/operators';

    const observable1 = of(1, 2, 3, 4, 5);
    observable1
      .pipe(switchMap(value => of('a', 'b', 'c', 'd', 'e')))
      .subscribe(value => console.log(value));
    ```

    - The `switchMap` operator is used to subscribe to the inner observable and emit its data in the outer observable.
      ![nested](./img/nested-subscriptions-1.png)
    - This way, we avoid nested subscriptions and the problems that come with them.

---

### Required return value

**RxJS** operators require a return value to work properly. If you don't return a value from the operator, the observable will not emit any data.

- This is because any observable needs to be marked as `complete` to emit data, and if you don't return a value from the operator, the observable will not be marked as `complete`.
- To fix this, you can return the value from the operator, or use the `EMPTY` observable to emit no data.

  ```ts
  // ❌
  this.emailService.getEmails().catchError(err => {
    console.error(err);
  });

  // ✅
  this.emailService.getEmails().catchError(err => {
    console.error(err);
    return EMPTY;
  });
  ```

  - The `EMPTY` observable is used to emit no data and mark the observable as `complete`.

---

## RxJS in Angular

- Angular uses **RxJS** for handling asynchronous data streams (like HTTP requests, event handling, and state management).
- Angular uses:

  - **Observables** to handle asynchronous data streams.
  - **Operators** to transform the data emitted by the observables.
  - **Subjects** to multicast the data emitted by the observables.

- Usually, we use **Observables** in Angular to handle asynchronous data streams in services and components.

  - This is because most of the Angular APIs and services **return observables that emit data asynchronously**.

### Example on how to use RxJS in Angular

- Example: Fetching data from an API using an Angular service and an observable.

  ```ts
  export class FetchDataService {
    constructor(private http: HttpClient) {}

    fetchData() {
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
      // `http` returns an observable that emits the data from the API
    }
  }
  ```

  ```ts
  export class AppComponent implements OnInit {
    fetchData: string[];

    constructor(private fetchDataService: FetchDataService) {}

    ngOnInit() {
      // `fetchData()` returns an observable that emits the data from the API (we can subscribe to it to listen to the data)
      this.fetchDataService.fetchData().subscribe(data => {
        this.fetchData = data.results.search;
      });
      // Note: calling just `fetchData()` will not make the HTTP request, we need to subscribe to it to make the request and listen to the data
    }
  }
  ```

- **Improvement 1️⃣:** Using an operator to transform the data emitted by the observable and only emit what the component needs.

  ```ts
  export class FetchDataService {
    constructor(private http: HttpClient) {}

    fetchData() {
      return this.http
        .get('https://jsonplaceholder.typicode.com/posts')
        .pipe(map(data => data.results.search));
    }
  }
  ```

  - Now, the component only receives the data that it needs.

    ```ts
    export class AppComponent implements OnInit {
      fetchData: string;

      constructor(private fetchDataService: FetchDataService) {}

      ngOnInit() {
        this.fetchDataService.fetchData().subscribe(data => {
          this.fetchData = data;
        });
      }
    }
    ```

- **Improvement 2️⃣:** Using a `generic` type to define the type of the data emitted by the observable, and add error handling.

  ```ts
  interface responseData {
    results: {
      search: {
        title: string;
        snippet: string;
        pageId: number;
      }[];
    };
  }

  export class FetchDataService {
    constructor(private http: HttpClient) {}

    fetchData() {
      return this.http.get<responseData>('https://jsonplaceholder.typicode.com/posts').pipe(
        map(data => data.results.search),
        catchError(err => of('An error occurred'))
      );
    }
  }
  ```

  - As `http.get` returns an observable, we can use **generics** to define the type of the data emitted by the observable.
    - By doing this, **Typescript** will understand the type of the data emitted by the observable and provide useful information about it.
  - We can use the `catchError` operator to handle errors emitted by the observable.
  - Now, the component receives the data of type `string` and can handle errors.

    ```ts
    export class AppComponent implements OnInit {
      fetchData: string;

      constructor(private fetchDataService: FetchDataService) {}

      ngOnInit() {
        this.fetchDataService.fetchData().subscribe(data => {
          this.fetchData = data;
        });
      }
    }
    ```

---

[Back to top](#index)
