# INDEX

- [INDEX](#index)
  - [GSAP](#gsap)
  - [CSS Animation](#css-animation)

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

---

## CSS Animation

- See [CSS Animation](../HTML-CSS/5-CSS-Animation.md) for more details about CSS animation
