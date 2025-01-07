# INDEX

- [INDEX](#index)
  - [Javascript Animation](#javascript-animation)
    - [`requestAnimationFrame`](#requestanimationframe)
  - [GSAP](#gsap)

---

## Javascript Animation

### `requestAnimationFrame`

`requestAnimationFrame` is a method that tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next **repaint**. The method takes a callback as an argument to be invoked before the repaint.

- It's used to:
  - optimize the performance of animations by allowing the browser to schedule the animation when it's ready to render the next frame. instead of running the animation at a fixed frame rate.
  - create more efficient animations by avoiding unnecessary repaints when the page is not visible or when the tab is in the background.
  - create more smooth animations by synchronizing the animation with the browser's refresh rate. (e.g., `60FPS`).
- Here's an example of how you can use `requestAnimationFrame` to create a simple animation:

  ```js
  let position = 0;
  const box = document.querySelector('.box');

  function moveBox() {
    position += 1;
    box.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(moveBox);
  }

  moveBox();
  ```

  - In this example, the `moveBox` function is called recursively using `requestAnimationFrame` to move the box element to the right by `1px` on each call.

- Here's another example of how you can use `requestAnimationFrame` to create a more complex animation **with a stop condition**:

  ```js
  let position = 0;
  const box = document.querySelector('.box');

  function moveBox() {
    position += 1;
    box.style.transform = `translateX(${position}px)`;

    if (position < 100) {
      requestAnimationFrame(moveBox);
    }
  }
  ```

- Note: it's not only used for animations, but also for other tasks that require a high refresh rate, such as games, audio visualization, etc.
- Examples:

  - Scroll to top animation with `requestAnimationFrame`:

    ```js
    function smoothScrollToTop() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 8); // scroll to top by 1/8 of the current scroll value
      }
    }
    ```

---

## GSAP

GSAP (GreenSock Animation Platform) is a JavaScript library that allows you to create animations for the web. It's a powerful tool that can help you create complex animations with ease.

[GSAP](https://greensock.com/gsap/)

- Here're examples of how you can use GSAP to create a simple animation:

  - Example 1: Move an element to the right by `100px` with a duration of `1` second

    ```js
    import { gsap } from 'gsap';

    gsap.to('.box', {
      duration: 1,
      x: 100,
      rotation: 360,
      ease: 'bounce'
    });
    ```

  - Example 2: Create a timeline to animate multiple elements by revealing sections of a webpage by sliding them in from the right

    ```js
    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: 'power2.inOut' }
    });
    slideTl.fromTo(revealImg, { x: '0%' }, { x: '100%' }); // from 0% to 100% of the width
    slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, '-=1'); // -=1 means 1 second before the end of the animation so that both animations can run at the same time
    slideTl.fromTo(revealText, { x: '0%' }, { x: '100%' }, '-=0.75');
    ```

  - See [animated-landing-page project](https://github.com/abdrahmansoltan/aminated-landing-page) for a full working example.
