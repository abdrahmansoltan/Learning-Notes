# INDEX

- [INDEX](#index)
  - [CSS Animation](#css-animation)
    - [What to animate? (Animation Performance)](#what-to-animate-animation-performance)
    - [Transition vs Animation](#transition-vs-animation)
  - [`transform` property](#transform-property)
  - [Transition](#transition)
  - [CSS Animation](#css-animation-1)
    - [Animation properties](#animation-properties)
    - [Animation Keyframes](#animation-keyframes)
    - [Animation choreograph](#animation-choreograph)
  - [data state animation](#data-state-animation)
  - [Animation Examples](#animation-examples)
    - [Loading spinner](#loading-spinner)
    - [Converting hamburger-menu icon to close icon](#converting-hamburger-menu-icon-to-close-icon)
  - [Animation Notes](#animation-notes)

---

## CSS Animation

### What to animate? (Animation Performance)

Note that animation in an expensive process of CPU/GPU and specially on CPU, and it's related to how the browser-rendering-engine works:
![browser render](./img/browser-render.png)

Here are some guidelines (CSS triggers):

- **Composite** ✅ -> It's for blending things together like with: `transform`, `opacity`

  - If you change a property that requires neither layout nor paint, and the browser jumps to just do compositing.
  - This final version is the cheapest and most desirable for high pressure points in an app's lifecycle, like `animations` or `scrolling`.
    ![browser render](./img/browser-render-3.png)

  > You can find more here: [Stick to Compositor](https://web.dev/stick-to-compositor-only-properties-and-manage-layer-count/)

- **Painting** 🤞 -> `color`, `background`
  - browser skips layout, but it will still do paint.
    ![browser render](./img/browser-render-2.png)
  - it's not too expensive for rendering
- **Layouts** ❌ -> one that changes an element’s geometry, like its `height`, `width`, `left`, `right`, `margin`, `padding` etc (**things that trigger layouts**)
  - the browser will have to check all the other elements and “reflow” the page. Any affected areas will need to be repainted
    ![browser render](./img/browser-render-1.png)
  - it's very costly because it forces the browser to recalculate the layout of the page, **So try to avoid it as much as possible**
    - instead use `transform: translate()`

---

### Transition vs Animation

![transition vs Animation](./img/transition-vs-keyframes.webp)

| Transition                                                                                        | Animation                                                                                                              |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| It's used for simple animations, like hover effects                                               | It's used for more complex animations, like loading spinners                                                           |
| It's used for changing the state of an element from one to another                                | It's used when you want to define multiple states for an element, or when you want to define the steps of an animation |
| It can't be reused, you have to define it for each state for each element and each/all properties | It can be reused, you can define it once and use it multiple times for different elements                              |

---

## `transform` property

It's used to change the shape, size, and position of an element (usually for animation purposes)

- It's the best way to animate elements in CSS, because it's more efficient as it doesn't trigger layout or paint
- It's used for `translate()`, `scale()`, `rotate()`, `skew()`

  ![transform](./img/transform.png)
  ![skew](./img/transform-skew.png)

- To change the origin of the transform, use `transform-origin` property
  ![transform-origin](./img/transform-origin.png)

> To generate 3D transform -> [CSS 3D Transform Generator](https://www.cssportal.com/css-3d-transform-generator/)

---

## Transition

`transition` property is used to animate the changes in css properties

- It works by applying the changes in the css properties over a period of time

- The `transition` shorthand property consists of multiple properties:
  ![transition](./img/transition-1.png)

- There're also different properties for `transition` separately:

  - `transition-property` -> it's the css-properties that will be animated
  - `transition-duration` -> it's the time the transition takes

    - must specify the unit (`s`), even it's zero seconds

  - `transition-timing-function` -> it's how the transition takes place (rate of change)
    ![transition-timing-function](./img/transition-2.png)

    - `ease` - default = slow start, fast, slow end
    - `linear` = same speed start to end
    - `ease-in` = slow start
    - `ease-out` = slow end
    - `ease-in-out` = slow start, fast, slow end

  - `transition-delay` -> it's the time before the transition starts (postponing the transition)

    - must specify the unit (`s`), even it's zero seconds

- If you have multiple different properties and want to make their transition different, you can:

  - Declare each on in the block where it happens

    ```css
    button {
      opacity: 0.5;
    }

    button:active {
      transition-duration: 0.5;
      opacity: 1;
    }
    ```

  - Or, declare multiple values in the `transition-property` separated by comma

    ```css
    button {
      transition-property: background-color, border-radius;
      transition-duration: 4s, 2s;
    }
    ```

- **Animating(transitioning) background issue**

  - You can't use `background` with `transition` property, so if you want to animate the background you can either:

    - use `background-color` or `background-image` instead.

    - use `box-shadow` with `inset` instead:

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

   ```css
   @keyframes move {
     from {
       transform: translateX(20px);
     }
     to {
       transform: translateX(100px);
     }
   }
   ```

2. Apply the animation -> `animation-name` and properties

   ```css
   div {
     animation-name: move;
     animation-duration: 10s;
     animation-iteration-count: 3;

     /* or using the shorthand */
     animation: move 10s infinite;
   }
   ```

### Animation properties

`animation` property consists of multiple properties:

- `animation-name`
- `animation-duration`
- `animation-delay`
  - It's the time before the animation starts (for each iteration)
- `animation-iteration-count`
  - It's the number of times the animation will run
    - `1` -> it will run once
    - `2` -> it will run twice
    - `n` -> it will run `n` times
    - `infinite` -> it will run forever (common for loading-state animations)
- `animation-direction`
  - It's the direction of the animation
    - `normal` -> default -> from `0%` to `100%`
    - `reverse` -> from `100%` to `0%`
    - `alternate` -> from `0%` to `100%` then from `100%` to `0%`
    - `alternate-reverse` -> from `100%` to `0%` then from `0%` to `100%`
- `animation-timing-function`

  - It's how the animation takes place (rate of change)
    ![transition-timing-function](./img/transition-2.png)

    - `ease` - default = slow start, fast, slow end
    - `linear` = same speed start to end
    - `ease-in` = slow start
    - `ease-out` = slow end
    - `ease-in-out` = slow start, fast, slow end

- `animation-fill-mode`
  - it's what happens when the animation finishes or before it starts (before the first iteration)
    ![CSS-Animation-Fill-mode](./img/CSS-Animation-Fill-mode.webp)
    - `none` -> default -> go to initial state (`0%`) before start and go to final state (`100%`) after finish
    - `forwards` -> **stick to final state (100%)**
    - `backwards` -> default -> go to initial state (`0%`) after finish
    - `both` -> `forwards` + `backwards` -> **stick to final state (100%)** + go to initial state (`0%`) after finish

---

### Animation Keyframes

They're used to define the animation states and the time between them (the animation steps)
![animation keyframes](./img/animation-keyframes-1.png)

- `keyframes` are different from `transition` as they're not just the start and end points, but they're the steps between them

- `keyframes` can be defined in percentage or by `from` and `to`:

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

- If you have multiple keyframes steps that have the same properties, you can combine them using comma (`,`):

  ```css
  @keyframes move {
    0%,
    100% {
      transform: translateX(20px);
    }
    50% {
      transform: translateX(100px);
    }
  }
  ```

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

## Animation Examples

### Loading spinner

```css
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}
```

### Converting hamburger-menu icon to close icon

![hamburger](./img/hamburger-icon.png)

- [Codepen example 1 (transition)](https://codepen.io/designcouch/pen/ExvwPY)
- [Codepen example 2](https://codepen.io/Danilo06/pen/PoNNvGm)
- To do it with pure CSS, use `input[type=checkbox]` to toggle the state

  ```html
  <input type="checkbox" id="menu" />
  <label for="menu">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </label>
  ```

  ```css
  input[type='checkbox'] {
    display: none;
  }

  label {
    display: block;
    width: 50px;
    height: 50px;
    background: #333;
    position: relative;
    cursor: pointer;
  }

  label div {
    width: 30px;
    height: 5px;
    background: #fff;
    position: absolute;
    left: 10px;
    transition: 0.5s;
  }

  input[type='checkbox']:checked + label div:nth-child(1) {
    transform: rotate(45deg);
    top: 22px;
  }
  ```

---

## Animation Notes

- Don't use hover or any effect without using `transition` property
- **Question:** what will happen if you use `transition` property inside the `:hover` body?

  ```css
  button {
    background-color: red;
  }

  button:hover {
    transition: background-color 1s;
    background-color: blue;
  }
  ```

  - it will make the transition happen when the mouse enters the element and **not** when it leaves it

- instead of writing different final state in `100%`, you can call it any name and use `to <name>`
- to see animation for an element in **DevTools** -> **ctrl + shift + p** and type **animation**
- **Interview question**: "What if you add the `transition` in the `:hover` body instead of the normal body?"
  - it will work but it's not recommended as it will make the transition happen when the mouse leaves the element and not when it enters it
- `transform` is more efficient than `position` for animation
- to change anchor point of element => `transform-origin`, find more [here](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)

  ![transform-origin](./img/transform-origin2.png)
  ![transform-origin](./img/transform-origin.png)

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
