# INDEX

- [INDEX](#index)
  - [Styled Components](#styled-components)
    - [Why Styled Components?](#why-styled-components)
    - [Installation and Configuration](#installation-and-configuration)
  - [Extending Styles](#extending-styles)
  - [Props in Styled Components](#props-in-styled-components)
    - [The "as" Polymorphic Prop](#the-as-polymorphic-prop)
  - [Attributes in Styled Components](#attributes-in-styled-components)
  - [Animation](#animation)
  - [Global Styling](#global-styling)
  - [Other cases](#other-cases)
  - [Debugging](#debugging)

---

## Styled Components

[styled-components](https://styled-components.com/) package

- `Styled-components` is a library built for React and React Native developers. It allows you to use component-level styles in your applications. Styled-components leverage a mixture of JavaScript and CSS using a technique called `CSS-in-JS`.

> In React’s own words, styled components are “visual primitives for components”, and their goal is to give us a flexible way to style components. The result is a tight coupling between components and their styles.

- `Styled-components` are based on `tagged template literals`, meaning actual CSS code is written between backticks when styling your components.

- With styled-components, there is no need to map your created components to external CSS styles.

- [more info](https://www.section.io/engineering-education/working-with-styled-components-in-react/#what-are-Styled-components)
- for pseudo elements/classes, we can use **"nesting"** using `&` like in `sass`

### Why Styled Components?

Apart from helping you to scope styles, styled components include the following features:

- **Automatic vendor prefixing**
  - You can use standard CSS properties, and styled components will add vendor prefixes should they be needed.
  - write your CSS to the current standard and let styled-components handle the rest.
- **Unique class names**
  - Styled components are independent of each other, and you do not have to worry about their names because the library handles that for you.
- **Elimination of dead styles**
  - Styled components remove unused styles, even if they’re declared in your code.

---

### Installation and Configuration

```bash
npm install --save styled-components
# Or
yarn add styled-components
```

```js
// in file.styles.jsx

import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

//-------------------------------------------------------------//

// in file.component.jsx

// import {Title, Wrapper} from ..

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>Hello World!</Title>
  </Wrapper>
);
```

---

## Extending Styles

We can reuse and inherit and override styles. It’s more or less like how the spread operator works

```js
const StyledContainer = styled.section`
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`;

// Inherit StyledContainer in StyledSmallContainer
const StyledSmallContainer = styled(StyledContainer)`
  padding: 0 10px;
`;

function Home() {
  return (
    <StyledContainer>
      <h1>The secret is to be happy</h1>
    </StyledContainer>
  );
}

function Contact() {
  return (
    <StyledSmallContainer>
      <h1>The road goes on and on</h1>
    </StyledSmallContainer>
  );
}
```

---

## Props in Styled Components

> Styled components are **functional**, so we can easily style elements dynamically.

- Using props to determine the css property value instead of (using inline styles to use the props)

  ```jsx
  // Adapting the colors based on primary prop
  const Button = styled.button`
    background-color: ${props => (props.primary ? 'red' : 'white')};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  render(
    <div>
      <Button>Normal Color</Button>
      <Button primary>Primary Color</Button>
    </div>
  );
  ```

- Using props to declare css code block

  ```jsx
  // we must import the "css" module to let it know that we're inserting a css-code-block
  import styled, { css } from 'styled-components';

  const Button = styled.button`
    background-color: ${props => (props.primary ? 'red' : 'white')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

    // This is considered a Mixin
    ${props () => css`
      ${() => type === primary && `background-color: red;`}
      ${() => type === secondary && `background-color: blue;`}
    `}
  `;

  render(
    <div>
      <Button>Normal Color</Button>
      <Button type="primary">red Color</Button>
      <Button type="secondary">blue Color</Button>
    </div>
  );
  ```

---

### The "as" Polymorphic Prop

- With the `as` polymorphic prop, you can swap the end element that gets rendered. One use case is (when you inherit styles), for example, you’d prefer a `div` to a `section` for a reusable styled-component, you can pass the as prop to your styled component with the value of your preferred element, like so:

  ```jsx
  function Home() {
    return (
      <StyledContainer>
        <h1>It’s business, not personal</h1>
      </StyledContainer>
    );
  }

  function Contact() {
    return (
      <StyledSmallContainer as='div'>
        <h1>Never dribble when you can pass</h1>
      </StyledSmallContainer>
    );
  }
  ```

- You could even have a custom component as your value

  ```jsx
  <StyledSmallContainer as='{StyledContainer}'>
    <h1>Never dribble when you can pass</h1>
  </StyledSmallContainer>
  ```

---

## Attributes in Styled Components

An extended syntax lets us manage props using the `attrs` constructor.

- to mimic `<a target="_blank"></a>`

  ```js
  const styledAlink = styled.a.attrs(() => ({ target: '_blank' }))`
  ... css code
  `;
  ```

- to get attribute-value dynamically from props:

  ```js
  const StyledContainer = styled.section.attrs(props => ({
    width: props.width || '100%',
    hasPadding: props.hasPadding || false
  }))`
    --container-padding: 20px;
    width: ${props => props.width}; // Falls back to 100%
    padding: ${props => (props.hasPadding && 'var(--container-padding)') || 'none'};
  `;
  ```

---

## Animation

Styled components have a **keyframes** helper that assists with constructing (reusable) animation keyframes. The advantage here is that the keyframes will be detached from the styled components and can be exported and reused wherever needed.

```js
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Toast = styled.div`
  animation: ${slideIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  border-radius: 5px;
  padding: 20px;
  position: fixed;
`;
```

---

## Global Styling

We have a helper function — `createGlobalStyle` — whose sole reason for existence is global styling.

- One thing we can use `createGlobalStyle` for is to **normalize the CSS**:

  ```js
  import { createGlobalStyle } from 'styled-components';

  const GlobalStyle = createGlobalStyle`
      /* Your css reset here */
  `;

  // Use your GlobalStyle
  function App() {
    return (
      <div>
        <GlobalStyle />
        <Routes />
      </div>
    );
  }
  ```

- Styles created with `createGlobalStyle` do not accept any children.
- `createGlobalStyle` injects styles but does not render any actual elements. If you look at the last example closely, you’ll notice we didn’t specify any `HTML` element to render. This is cool because we might not actually need the element. After all, we’re concerned with global styles. We are targeting selectors at large, not specific elements.

---

## Other cases

- react-router

  ```js
  import { Link } from 'react-router-dom';

  const NavLink = styled(Link)`
    /* style for Link Component */
  `;
  ```

- Sass `Mixins`

  ```js
  import { css } from "react-router-dom";

  const shlabel = css`
    /* style for the mixin */
  `;

  // in other component
  @include shlabel
  ```

---

## Debugging

- When debugging, you will notice that it's difficult to differentiate the styled-component in the `Dev-tools`, EX:

  - By default, styled components render `LoginButton` as `<button class="LoginButton-xxxx xxxx">Login</button>` in the `DOM`, and as LoginButton in React Developer Tools, which makes debugging easier. We can toggle the displayName boolean if we don’t want this behavior. This requires a Babel configuration.
  - that's in fact a drawback of Styled-components

- There's a workaround; by configuring **Babel**, In the documentation, the package `babel-plugin-styled-components` is specified, as well as a .babelrc configuration file. The issue with this is that, because we’re using **create-react-app**, we can’t configure a lot of things unless we eject.
  - This is where **Babel macros** come in.
- We’ll need to install `babel-plugin-macros` with `npm` or `Yarn`, and then create a `babel-plugin-macros.config.js` at the root of our application, with the content:

  ```js
  module.exports = {
    styledComponents: {
      displayName: true,
      fileName: false
    }
  };
  ```

  - With the fileName value inverted, the displayName will be prefixed with the file name for even more unique precision.
  - We also now need to import from the macro:

    ```js
    // Before
    import styled from 'styled-components';

    // After
    import styled from 'styled-components/macro';
    ```

You can find more [Here](https://styled-components.com/docs/tooling)
