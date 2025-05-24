# INDEX

- [INDEX](#index)
  - [Typescript with React](#typescript-with-react)
  - [Functional Components](#functional-components)
  - [Props](#props)
  - [Refs](#refs)
  - [Events](#events)
    - [Event handler function](#event-handler-function)
  - [Typescript with Redux](#typescript-with-redux)

---

## Typescript with React

Guide: [React TypeScript CheatSheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)

---

## Functional Components

- for functional components we use `React.FC` type

  ```tsx
  import React from 'react';

  export const Hello: React.FC = () => <h1>Hello World</h1>;
  ```

  - `React.FC` is a **Generic type** that takes a type argument, which is the type of props that the component is going to receive

- Example with props -> [Props](#props)

---

## Props

- for props we use `React.FC<Props>` type

  ```tsx
  type Props = {
    name: string;
  };

  export const Hello: React.FC<Props> = ({ name }) => <h1>Hello {name}</h1>;
  ```

- `React.FC` is a generic type that takes a type argument, which is the type of props that the component is going to receive
- This is great, as we don't need to use props validation libraries like `prop-types` to validate the props passed to the component, as Typescript will do that for us.
- If we pass a prop that is not defined in the `Props` type, Typescript will throw an error

---

## Refs

- for refs we use the html element types like:

  - `HTMLInputElement`, `HTMLButtonElement`, `HTMLDivElement`, etc.

  ```tsx
  import React, { useRef } from 'react';

  export const Input: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () => {
      // Here we must check if the ref is not null before using it
      if (inputRef.current) {
        inputRef.current.focus();
      }

      // or use `!` operator to tell Typescript that the ref is not null
      inputRef.current!.focus();
    };

    return (
      <div>
        <input ref={inputRef} type='text' />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
  };
  ```

---

## Events

### Event handler function

- for this we use `ChangeEventHandler` type

  ```tsx
  import {ChangeEventHandler} from 'react'
  type Props = {
    onChange: ChangeEventHandler<HTMLInputElement>
  }

  export Input:React.FC<Props> ({onChange}) => (
    <input type="tex" onChange={onChange} />
  )
  ```

- or you can define your own function definition for the event handler

  ```ts
  import {ChangeEvent} from 'react';
  type Props = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  }

  export Input:React.FC<Props> ({onChange}) => (
    <input type="tex" onChange={onChange} />
  )
  ```

---

## Typescript with Redux
