# INDEX

- [INDEX](#index)
  - [CSS Variables (custom properties)](#css-variables-custom-properties)
  - [Variables inheritance](#variables-inheritance)
  - [Invalid At Computed Values Time (IACVT)](#invalid-at-computed-values-time-iacvt)
  - [variables token: Number, string, images](#variables-token-number-string-images)
  - [Css variables with Javascript](#css-variables-with-javascript)

---

## CSS Variables (custom properties)

They let us define variables in CSS that can be reused throughout the stylesheet.

- they're also called **custom properties**
  - they're called like that as they act as css-properties where they're `inherited` and they `cascade` (override based on specificity)
- **Declaring** them is usually in the `:root` selector **(global scope)**

  ```css
  :root {
    --primary: blue;
  }
  ```

  - because the `:root` pseudo-class represents the root `<html>` element and is identical to the selector `html`, except that **its specificity is higher** because `:root` is a `pseudo-class` selector and `html` is a `type` selector
    - > Note: the `<html>` element selector includes all elements and pseudo elements in the **DOM** unlike `*` selector
    - We do this so that the variable is available everywhere in the stylesheet **(Global scope)**
    - We can use them because they're **inherited** from the `root` element

- **Using** css variables is done by using the `var()` function:

  ```css
  .box {
    background-color: var(--primary);
  }
  ```

- when using the variable, We can use a **Fall-back variable/ value** after a **comma** (`,`) and you can make many fallbacks => ex:

  ```css
  div {
    color:var(--primary,black)

    /* to request the fallback value manually -> use (initial) */
    color: initial
  }
  ```

- Rules of **scope** like in Javascript also applies in css variables, but:

  - `Sass` variables are scoped on `{}` blocks (**block-scoped**) (**lexical-scoped**)
  - `CSS` variables are scoped on elements (**element(local)-scoped**) (**dynamic-scoped**)

    - this is great if you want the variable-value to only be applied in this element and elements inside it (its descendant elements) only
    - also it's great if you want to **override** the variable-value in a specific element and its descendant elements only

      - we can do this by:

        - declaring the variable in the element itself

          ```css
          div {
            --primary: red;
          }
          ```

        - or declaring it in the inlined-style of the element

          ```html
          <div style="--primary: red"></div>
          ```

        - or declaring it using javascript

          ```js
          document.documentElement.style.setProperty('--primary', 'red');
          ```

  ```css
  /* global scope */
  :root {
    --main-bg-color: coral;
  }

  /* local scope */
  #div1 {
    --main-bg-color: coral;
    background-color: var(--main-bg-color);
  }
  ```

---

## Variables inheritance

- css variables are **inherited** from the parent element if it's declared in the parent element to the (`classes` / `pseudo-elements` / `pseudo-classes` / `IDs`) in the same element

  ```css
  button {
    --color: red;
    color: var(--color);
  }

  button:hover {
    background: black;
    color: var(--color);
  }

  button.pink {
    border-color: #f06;
    color: var(--color);
  }

  button.pink:hover {
    background: #f06;
    color: var(--color);
  }
  ```

- you can disable **inheritance** by setting the property to `initial` on `*`

  ```css
  * {
    --corner-size: initial;
  }

  p {
    --corner-size: 1em; /* will not be inherited down */
  }
  ```

- another way to control or limit inheritance is to **register property** using: `@property`:

  - `@property` allows us to register our `properties` / `variables` and control how they behave, but watch out for **browser support**

  ```css
  @property --corner-size {
    syntax: '*';
    inherits: false;
    initial-value: 2em;
  }

  p {
    --corner-size: 1em;
  }
  ```

---

## Invalid At Computed Values Time (IACVT)

> **Parse time** (specified values), it's When the actual CSS code is `read`, `parsed`, and `converted` to a tree of objects (**CSSOM**). One and done operation.
>
> **computed value**: An intermediate runtime representation where most relative values are absolutized but not all.
>
> - this is when relative units are resolved to `px`
>
> **used value**: The final stage, when values are fully resolved to be used for painting.
>
> - this is when % widths are resolved to `px`

**IACVT**: it's when calling the variable result in error (due to empty value or wrong value or unsupported value by browser), so the value will be set to `unset` which is equivalent to `initial`

- Fallbacks can also trigger **IACVT**

```css
/* Ex: */
div {
  background: red;
  background: var(--accent-color, 42px);
  /* result will be (color-transparent) */
}
```

![IACVT](./img/IACVT.png)

---

## variables token: Number, string, images

![tokens](./img/tokens.png)

you can make the variable contains :

- a piece of text that is used in defining property-value, like `--to: to;`

  ```css
  html {
  --type: "linear-gradient(";
  background: var(--type) white, black );
  color: red;
  }
  ```

- a number without a unit like `--p: 65;`

  - use variables for pure-data like `65`, not css-values like `65%`

    - this way you can use the number for any css-value with any unit unlike if you made the variable with css-value
    - but watch out for numbers as string or integers as here we don't have **type-coercion**
    - **Tip:** Prefer abstract `0` to `1` percentages than absolute pixel lengths

      - 0-1 can be converted to a length:

        ```css
        calc(var(--mouse-x) * 100vw);
        /* …but the reverse isn’t possible */
        ```

- img string

  ```css
  .img1 {
    --img: 'cat1.jpg';
    background: url('imgs/'var(--img));

    /* note we can't make the url as (variable can't be URL-content) */
    --img: 'imgs/cat1.jpg';
    background: url(var(--img)); /* css bug */
  }
  ```

  ![string-variable](./img/css-variable-string.png)

---

## Css variables with Javascript

> One of the main difference between the **old sass variables** and the **new css custom properties** is that in custom-properties, you can use `Javascript` to change the variables values after the compilation and the loading in the browser which will enable more dynamic styling

You can **get / set** css-variable-value of an element in javascript by having the variable declared in the root before, then change it's value locally in the element styles:

```js
// Get variable from inline style
element.style.getPropertyValue('--foo');

// Get variable from wherever
getComputedStyle(element).getPropertyValue('--foo');

// Set variable on inline style
element.style.setProperty('--foo', 38 + 4);

// --------------------------------------------------- //

// or change it in the root element
let root = document.documentElement;

document.addEventListener('pointermove', evt => {
  let x = evt.clientX / innerWidth;
  let y = evt.clientY / innerHeight;
  root.style.setProperty('--mouse-x', x);
  root.style.setProperty('--mouse-y', y);
});
```

---
