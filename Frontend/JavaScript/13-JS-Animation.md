# INDEX

- [INDEX](#index)
  - [Javascript Animation](#javascript-animation)
    - [`requestAnimationFrame`](#requestanimationframe)
  - [Animation Libraries](#animation-libraries)
    - [Web Animations API](#web-animations-api)
    - [GSAP](#gsap)
    - [Motion (Farmer motion) Library](#motion-farmer-motion-library)
    - [React Spring](#react-spring)

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

## Animation Libraries

Instead of re-inventing the wheel, you can use libraries to animate elements:

- [Web Animations API](#web-animations-api)
- [Motion](https://www.motion.dev)
- [Animate.css](https://animate.style/)
- [Hover.css](https://ianlunn.github.io/Hover/)
- [Magic Animations](https://www.minimamente.com/project/magic/)
- [Bounce.js](http://bouncejs.com/)
- [Anime.js](https://animejs.com/)
- [GreenSock Animation Platform (GSAP)](https://greensock.com/gsap/) -> it's the most powerful and flexible animation library
  - Here's an entire notes section for it: [GSAP](#gsap)
- [React Spring](https://www.react-spring.dev/) -> it's a spring-physics based animation library for React
  - Here's an entire notes section for it: [React Spring](#react-spring)

---

### Web Animations API

It's a low-level animation api built into the browser that allows you to animate elements using JavaScript. It provides a way to create animations with a high level of control over the animation process.

- It mirrors the `@keyframes` API in CSS, and uses the same low-level implementation as keyframe animations, **so their performance characteristics are identical**.
- Example:

  ```js
  const elem = document.querySelector('.box');
  const frames = [
    { opacity: 0, transform: 'translateY(100%)' },
    { opacity: 1, transform: 'translateY(0%)' }
  ];
  elem.animate(frames, {
    duration: 1000,
    iterations: Infinity
  });
  ```

  ```css
  /* Same animation in CSS */
  @keyframes pop-in {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  .box {
    animation: pop-in 1000ms infinite;
  }
  ```

- We can also apply custom timing functions to each step in the Web Animations API:

  ```js
  const elem = document.querySelector('.box');

  const frames = [
    {
      transform: 'translate(-20px, -10px)',
      easing: 'ease-out' // easing function for this step
    },
    {
      transform: 'translate(0px, 10px)',
      easing: 'ease-in' // easing function for this step
    },
    {
      transform: 'translate(20px, -10px)',
      easing: 'ease-out' // easing function for this step
    },
    { transform: 'translate(-20px, -10px)' } // no easing function for this step, use the default one
  ];

  elem.animate(frames, {
    duration: 2000,
    iterations: Infinity,
    easing: 'ease'
  });
  ```

  - This is not possible with CSS animations, as you can only apply a single timing function to the entire animation.

- **Pros & Cons:**

  - Pros:
    - It's a native API built into the browser, so no need to include external libraries or dependencies that affects the bundle size.
    - It has good performance, and won't be affected by any work happening in the JS main thread.
    - It provides a high level of control over the animation process.
    - It can be used to create complex animations that are difficult to achieve with CSS animations.
  - Cons:
    - It's not fundamentally different from CSS keyframe animations. It doesn't really let you do anything "new".
    - Frustratingly, there are lots of subtle differences between keyframe animations and the Web Animation API for you to get tripped up by. For example, the default timing function is "`linear`" instead of "`ease`". And in order to change the timing function, you set `easing` instead of `animationTimingFunction`.

---

### GSAP

GSAP (GreenSock Animation Platform) is a JavaScript library that allows you to create animations for the web. It's a powerful tool that can help you create complex animations with ease.

[GSAP](https://greensock.com/gsap/)

- GSAP is one of the oldest and most well-known animation libraries out there.
- It offers advanced Bézier-based easing (much more flexible than the `cubic-bezier` CSS function), and a timeline to manage orchestration (animating multiple elements at specific moments).

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

- **Pros & Cons:**

  - Pros:

    - Large, active community.
    - Can be used with any framework, not just React.
    - Highly optimized performance.
    - Rich plugin ecosystem for things like adding scroll-based triggers.
    - Probably lots of other things! I'm not familiar enough with it to say.

  - Cons:
    - While it can emulate spring physics in a more-accurate way than CSS transitions, it doesn't support true spring physics.
    - Because it's framework-agnostic, it won't tie in as neatly as framework-specific solutions.
    - Probably lots of other things! I'm not familiar enough with it to say.

> Here's a great guide from Sarah Drasner on how to use GSAP: [How to Animate on the Web With GreenSock](https://css-tricks.com/how-to-animate-on-the-web-with-greensock/)

---

### Motion (Farmer motion) Library

It's a production-ready library for (JS & React). It does a lot of things, but the most impressive and noteworthy thing is that it can animate CSS properties that aren't normally able to be animated.

- It works by calculating a complex sequence of transforms required to interpolate between the start and end positions. This is known as the **"FLIP"** technique.
- It uses `transform` behind the scenes, So it's **very performant and very smooth**.
- What can it do?

  - It's not limited to Flexbox, either. Framer Motion can animate just about any CSS change. If your element goes from being a child in a Grid container to setting `position: absolute; top: 50px`, Framer Motion can animate that transition.
  - It can even animate transitions between component (usually in React) states. For example, if a component goes from being collapsed to expanded, Framer Motion can animate that transition.
    - This can also happen between different components.

- **Pros & Cons:**

  - Pros:

    - It's very performant and smooth (Uses hardware-accelerated transforms for performant transitions).
    - Can animate all kinds of things that would normally not be animatable, leading to next-level user experiences. We can build stuff that would have been unimaginably complex.
    - Supports using spring physics instead of Bézier curves.
    - Ties in beautifully with **React**. Can add sophisticated animations in a remarkably small amount of code.

  - Cons:
    - All of that magic comes at a cost: according to [Bundle Phobia](https://bundlephobia.com/package/framer-motion@12.0.0), the package weighs `~49kb` **gzip**.
    - Like all JS-based animation libraries, the animation might stutter if the main thread becomes occupied.
    - Only works with React.

---

### React Spring

React Spring allows us to model our animations based on spring physics, rather than Bézier curves.

> **Spring physics** are an entirely different model for running animations. When we work with spring physics, we don't pick a duration for our animations; instead, we configure the characteristics of a spring.
>
> Why would we want to do this? Because the resulting motion is incredible. **It feels fluid and realistic**. Spring physics are modeled on the natural world, and it convinces our brain in a way that Bèzier curves can't fully imitate.
>
> More here [A Friendly Introduction to Spring Physics](https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/)

- **Pros & Cons:**

  - Pros:

    - Fluid, organic motion compared with CSS transitions / keyframe animations.
    - Highly optimized performance.
    - Relatively small: `19kb` gzip, [according to Bundle Phobia](https://bundlephobia.com/package/@react-spring/web@9.7.5).
    - A rich API with lots of advanced options, including wonderful orchestration tools.
    - Ties in with an ecosystem created by the same folks. For example, we can use it with `react-use-gesture` to create the card-grabbing animation.
    - At its core, **React Spring is a number generator**. This means it can be used for all kinds of animations, not just transitioning CSS properties.

  - Cons:
    - It can't do "magic" animations in the way that Framer Motion can. And given that Framer Motion does support spring physics, it may be the better choice for your application.
    - The learning curve is pretty steep, both with spring physics in general, and this library in particular.
    - Like all JS-based animation libraries, the animation might stutter if the main thread becomes occupied.
