# INDEX

- [INDEX](#index)
  - [RxJS](#rxjs)
    - [Observables](#observables)
    - [`imperative approch`](#imperative-approch)
    - [`Declarative approch`](#declarative-approch)
      - [Flattening Operators](#flattening-operators)

---

## RxJS

It's a `library` for filtering,sorting and coordinating data.

### Observables

they are wrappers around a data-source

### `imperative approch`

```ts
import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete(); // form memory-leak
  }, 1000);
});

observable.subscribe({
  next: (value) => {
    console.log(value);
  },
  complete:()==>{
    console.log("complete called!");
  },
  error: (err)=>{
    console.error(err)
  }
});
```

### `Declarative approch`

it uses [Operators](https://rxjs.dev/guide/operators)

- it uses operators(functions)

```ts
import { interval } from "rxjs";

  const observable = interval(1000)

  observable.subscribe({
    console.log // just that simple!
  });
```

#### Flattening Operators

![operators](./img/flat.PNG)

---
