# INDEX

- [INDEX](#index)
  - [Typescript with React](#typescript-with-react)
  - [Functional Components](#functional-components)
  - [Props](#props)
  - [Events](#events)
    - [Event handler function](#event-handler-function)
  - [Typescript with Redux](#typescript-with-redux)

---

## Typescript with React

Guide: [React TypeScript CheatSheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)

---

## Functional Components

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
