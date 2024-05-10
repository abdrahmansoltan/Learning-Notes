# INDEX

- [INDEX](#index)
  - [Cascading Style Sheets (CSS)](#cascading-style-sheets-css)
    - [Styling Types](#styling-types)
    - [Starter CSS Code (Global Reset / Normalize)](#starter-css-code-global-reset--normalize)
  - [How CSS works](#how-css-works)
    - [Visual Formatting Model](#visual-formatting-model)
  - [Selectors](#selectors)
    - [Selectors Types](#selectors-types)
      - [Descendant selectors](#descendant-selectors)
      - [`[attribute]` Selector](#attribute-selector)
      - [Other selectors](#other-selectors)
    - [Selector specificity](#selector-specificity)
    - [Selectors Notes](#selectors-notes)
  - [Pseudo Elements/Classes](#pseudo-elementsclasses)
    - [pseudo elements](#pseudo-elements)
    - [pseudo classes](#pseudo-classes)
  - [Inheritance](#inheritance)
  - [Box Model](#box-model)
    - [Box Sizing (width \& height calculation)](#box-sizing-width--height-calculation)
    - [Outline](#outline)
    - [Types of boxes](#types-of-boxes)
    - [Collapsing-Margins Problem](#collapsing-margins-problem)
    - [How to center an element](#how-to-center-an-element)
    - [Box model notes](#box-model-notes)
  - [Display \& Visibility](#display--visibility)
  - [Colors](#colors)
    - [HSL Colors](#hsl-colors)
    - [Color Notes](#color-notes)
  - [Font](#font)
    - [TypeFaces](#typefaces)
    - [Units of Type Size](#units-of-type-size)
    - [Alignment](#alignment)
    - [Text-Wrap and Overflow](#text-wrap-and-overflow)
    - [Font and Units Notes](#font-and-units-notes)
  - [Shadow](#shadow)
    - [box-shadow](#box-shadow)
    - [text-shadow](#text-shadow)
  - [images](#images)
    - [`object-fit` property](#object-fit-property)
    - [`background-` properties](#background--properties)
      - [`background-image` property](#background-image-property)
        - [Linear Gradient](#linear-gradient)
        - [`background-image` notes](#background-image-notes)
      - [`background-size` property](#background-size-property)
      - [`background-clip` property](#background-clip-property)
      - [`background-attachment` property](#background-attachment-property)
      - [`background` shorthand property](#background-shorthand-property)
    - [image filter](#image-filter)
    - [clip-path](#clip-path)
    - [Images Notes](#images-notes)
  - [Positioning \& Prospective](#positioning--prospective)
    - [`position` property](#position-property)
    - [`z-index`](#z-index)
  - [Calculations Built in Functions](#calculations-built-in-functions)
    - [`calc()`](#calc)
    - [`clamp()`](#clamp)
  - [icons - SVG](#icons---svg)
  - [Animation \& Transitions](#animation--transitions)
    - [What to animate? (Animation Performance)](#what-to-animate-animation-performance)
    - [transform](#transform)
    - [transition](#transition)
      - [Animating(transitioning) background](#animatingtransitioning-background)
    - [CSS Animation](#css-animation)
      - [Animation properties](#animation-properties)
      - [Animation Keyframes](#animation-keyframes)
      - [Animation choreograph](#animation-choreograph)
    - [data state animation](#data-state-animation)
    - [Animation Notes](#animation-notes)

---

## Animation & Transitions

### What to animate? (Animation Performance)

Note that animation in an expensive process of CPU/GPU and specially on CPU, and it's related to how the browser rendering engine works:
![browser render](./img/browser-render.png)

Here are some guidelines (CSS triggers):

- **Composite** ✅ -> It's for blending things together like with: `transform`, `opacity`
  - If you change a property that requires neither layout nor paint, and the browser jumps to just do compositing.
  - This final version is the cheapest and most desirable for high pressure points in an app's lifecycle, like `animations` or `scrolling`.
    ![browser render](./img/browser-render-3.png)
  - > You can find more here: [Stick to Compositor](https://web.dev/stick-to-compositor-only-properties-and-manage-layer-count/)
- **Painting** 🤞 -> `color`, `background`
  - browser skips layout, but it will still do paint.
    ![browser render](./img/browser-render-2.png)
  - it's not too expensive for rendering
- **Layouts** ❌ -> one that changes an element’s geometry, like its `height`, `width`, `left`, `right`, `margin`, `padding` etc (**things that trigger layouts**)
  - the browser will have to check all the other elements and “reflow” the page. Any affected areas will need to be repainted
    ![browser render](./img/browser-render-1.png)
  - it's very costly so try to avoid it
  - instead use `transform: translate()`

---

## transform

- used for `translate()`, `scale()`, `rotate()`, `skew()`

![transform](./img/transform.png)
![skew](./img/transform-skew.png)

- To change the origin of the transform, use `transform-origin` property
  ![transform-origin](./img/transform-origin.png)

> To generate 3D transform -> [CSS 3D Transform Generator](https://www.cssportal.com/css-3d-transform-generator/)

---

## transition

- `transition` property consists of multiple properties:
  ![transition](./img/transition-1.png)

  - `transition-property`

    - used to specify which css-properties to apply the transition data on them.
    - if you have multiple different properties and want to make their transition different:

      - you can declare each on in the block where it happens

        ```css
        button {
          opacity: 0.5;
        }

        button:active {
          transition-duration: 0.5;
          opacity: 1;
        }
        ```

      - you can declare multiple values in the `transition-property` separated by comma

        ```css
        button {
          transition-property: background, border-radius;
          transition-duration: 4s, 2s;
        }
        ```

  - `transition-delay` -> it's the time before the transition starts

  - `transition-duration` -> it's the time the transition takes

    - must specify the unit (`s`), even it's zero seconds

  - `transition-timing-function` -> it's how the transition takes place
    - `ease` - default = slow start, fast, slow end
    - `linear` = same speed start to end
    - `ease-in` = slow start
    - `ease-out` = slow end
    - `ease-in-out` = slow start, fast, slow end

### Animating(transitioning) background

You can't use `background` with `transition` property, so if you want to animate the background you can use `box-shadow` with `inset` instead:

```css
button {
  transition: 1s;
}

button:hover {
  box-shadow: 0 0 0 2em red inset;
}
```

---

## CSS Animation

Applying animation to an element is done by 2 steps:

1. Define the animation -> `@keyframes`
2. Apply the animation -> `animation` name and properties

### Animation properties

`animation` property consists of multiple properties:

- `animation-name`
- `animation-duration`
- `animation-delay`
  - note that it's for each single `iteration`
- `animation-iteration-count`
- `animation-direction`
- `animation-timing-function`
- `animation-fill-mode`
  - it's what happens when the animation finishes or before it starts (before the first iteration)
    ![CSS-Animation-Fill-mode](./img/CSS-Animation-Fill-mode.webp)
  - values:
    - `none` -> default -> go to initial state (`0%`) before start and go to final state (`100%`) after finish
    - `forwards` -> **stick to final state (100%)**
    - `backwards` -> default -> go to initial state (`0%`) after finish
    - `both` -> `forwards` + `backwards` -> **stick to final state (100%)** + go to initial state (`0%`) after finish

### Animation Keyframes

They're used to define the animation states and the time between them (the animation steps)
![animation keyframes](./img/animation-keyframes-1.png)

`keyframes` are different from `transition` as:

- they define what happens between state **A** and state **B**

```css
div {
  animation-name: move;
  animation-duration: 10s;
  animation-iteration-count: 3;

  /* or using the shorthand */
  animation: move 10s infinite;
}

@keyframes move {
  0% {
    transform: translateX(20px);
  }
  50% {
    transform: translateX(100px);
    background: red;
  }
  75% {
    transform: translateX(-200px);
    background: yellow;
  }
  100% {
    transform: translateX(20px);
    background: green;
  }
}

/* or when we have one start point and one end point */

@keyframes move {
  from {
    transform: translateX(20px);
  }
  to {
    transform: translateX(100px);
    background: red;
  }
}
```

- Ex: converting hamburger `menu` icon to `close` icon using `animation` and `keyframes`
  ![hamburger](./img/hamburger-icon.png)
  - [Codepen example 1](https://codepen.io/designcouch/pen/ExvwPY)
  - [Codepen example 2](https://codepen.io/Danilo06/pen/PoNNvGm)

---

### Animation choreograph

it's to use the `nth-child` selector and **CSS variables** to choreograph animations between multiple elements.

```scss
.balls-container {
  --duration: 1s;
  animation: move-right var(--duration) both;

  &:nth-child(2) {
    animation-delay: calc(var(--duration) - 0.1s);
  }
  &:nth-child(3) {
    animation-delay: calc(var(--duration) * 2 - 0.1s * 2);
  }
}
```

---

## data state animation

You can use `data-state` attribute to define state and make css values established based on current data-state

- you change data.state in Javascript which then reflects in the `data-state` HTML attribute, then define which css property will be shown

```css
.container[data-state='success'] {
  animation: slide-up 1s both;
}
```

---

## Animation Notes

- don't use hover or any effect without using `transition` property
- instead of writing different final state in `100%`, you can call it any name and use `to <name>`
- to see animation for an element in **DevTools** -> **ctrl + shift + p** and type **animation**
- **Interview question**: "What if you add the `transition` in the `:hover` body instead of the normal body?"
  - it will work but it's not recommended as it will make the transition happen when the mouse leaves the element and not when it enters it
- `transform` is more efficient than `position` for animation
- to change anchor point of element => `transform-origin`, find more [here](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)

  ![transform-origin](./img/transform-origin2.png)
  ![transform-origin](./img/transform-origin.png)

- when using 3d animation / transform => use `perspective` property on the parent element
- to disable animation (some users prefer no animation), we can use this media-query:

  ```css
  /*
    If the user has expressed their preference for
    reduced motion, then don't use animations on buttons.
  */
  @media (prefers-reduced-motion: reduce) {
    button {
      animation: none;
    }
    /* or */
    * {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  }
  ```

---
