# INDEX

- [INDEX](#index)
  - [Typescript with React](#typescript-with-react)
  - [Functional Components](#functional-components)
  - [Events](#events)
    - [Event handler function](#event-handler-function)
  - [Typescript with Redux](#typescript-with-redux)

---

## Typescript with React

Guide: [React TypeScript CheatSheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)

---

## Functional Components

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

