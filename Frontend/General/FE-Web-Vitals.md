# INDEX

- [INDEX](#index)
  - [Frontend Performance](#frontend-performance)
    - [Frontend performance introduction](#frontend-performance-introduction)
    - [Frontend Performance Issues (Main challenges)](#frontend-performance-issues-main-challenges)
    - [Performance Types](#performance-types)
    - [Performance Metrics](#performance-metrics)
    - [The importance of measurement](#the-importance-of-measurement)
    - [Performance Notes](#performance-notes)
  - [JavaScript Performance](#javascript-performance)
    - [The cost of JavaScript](#the-cost-of-javascript)
    - [How to measure JS performance](#how-to-measure-js-performance)
    - [Optimizing the cost of JavaScript](#optimizing-the-cost-of-javascript)
  - [CSS Performance](#css-performance)
  - [Minify / Minimize files](#minify--minimize-files)
    - [Minimize images](#minimize-images)
    - [Font Optimization (minimize font files)](#font-optimization-minimize-font-files)
  - [Critical Render Path Optimization](#critical-render-path-optimization)
  - [Code Splitting (Lazy Loading)](#code-splitting-lazy-loading)
  - [Tree Shaking](#tree-shaking)
  - [Avoid blocking main thread](#avoid-blocking-main-thread)
  - [Avoid memory leaks](#avoid-memory-leaks)
  - [Avoid multiple re-rendering](#avoid-multiple-re-rendering)
  - [Reducing number of concurrent requests](#reducing-number-of-concurrent-requests)
  - [Caching](#caching)
    - [Why do we need caching?](#why-do-we-need-caching)
    - [HTTP cache (`cache-control` headers)](#http-cache-cache-control-headers)
    - [`content-addressable` storage](#content-addressable-storage)
    - [Application cache](#application-cache)
  - [Rollup Visualizer](#rollup-visualizer)
  - [Web Vitals and Performance Score](#web-vitals-and-performance-score)
    - [Web Vitals](#web-vitals)
      - [Core Web Vitals](#core-web-vitals)
    - [LightHouse](#lighthouse)

---

## Web Vitals and Performance Score

### Web Vitals

![web vitals](./img/web-vitals-1.png)

They are a set of metrics that Google (created 2020) uses to measure the performance of a website. They are used to **measure the user experience of a website (in a deterministic way) and to help developers understand how to improve the performance of their website**.

Each metric focusses on a specific aspect of the user experience, like (loading performance, interactivity, visual stability, etc.).

> Google usually changes/updates the web vitals metrics every year, so it's good to keep an eye on the updates and changes to the web vitals metrics to know how to improve the performance of your website.

#### Core Web Vitals

![core web vitals](./img/web-vitals-2.png)

They are a subset of the web vitals metrics that are considered the most important for measuring the user experience of a website and Search Engine Optimization (SEO).

> They are used by Google to rank websites in search results and to determine the performance score of a website.
>
> So, now Search Engines like Google don't just care about the content of the website, but also care about the performance of the website and how it affects the user experience.

Google choose these 3 metrics as the core web vitals because they are the most important metrics that affect the user experience of a website as they focus on 3 main aspects of the user experience: **(loading performance, interactivity, visual stability)**, and also gave them specific thresholds to help developers understand how to improve the performance of their website and to provide a good user experience.

![core web vitals](./img/web-vitals-3.png)

- **Largest Contentful Paint (LCP)**
  - measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.
  - It depends on 2 metrics: **First Contentful Paint (FCP)** and **Time to Interactive (TTI)**
- **Interaction to Next Paint (INP)**
  - measures interactivity. To provide a good user experience, pages should have an INP of less than 200 milliseconds.
  - It was introduced in 2023 to replace the **"First Input Delay (FID)"** metric because it provides a more accurate measurement of interactivity by measuring the time from when the user interacts with the page until the next paint after the interaction, rather than just measuring the time from when the user interacts with the page until the browser is able to respond to that interaction (which is what FID measures).
  - It depends on 2 metrics: **Time to Interactive (TTI)** and **Total Blocking Time (TBT)**
- **Cumulative Layout Shift (CLS)**
  - measures visual stability. To provide a good user experience, pages should maintain a CLS of less than 0.1.
  - It is a measure of how much movement there is on the page, typically in the first few seconds as the page is loading.
  - The CLS metric measures two things: how many items move, and how significant the shift is. A small icon moving by a few pixels won't be judged as harshly as a big element popping into view and pushing all of the content down.
  - There are two reasons that it's important to optimize for CLS:
    - **Layout shifts** are unpleasant! They're jarring and chaotic, and they can cause you to accidentally click on the wrong thing.
    - Starting in 2021, Google has incorporated CLS into its search ranking algorithm, meaning that focusing on CLS can help improve SEO.

  - How to improve it:
    - [Scroll Optimization in CSS file](../HTML-CSS/2-CSS.md#scroll-optimization)
    - Fixed image sizes
      - Unless you give images a `width` and `height`, the browser won't know their dimensions until the image finishes loading. As a result, images will default to being `0px` wide and `0px` tall, and a big layout shift will occur when the image loads!
      - To prevent this, we need to specify two of the following CSS properties: `width`, `height`, `aspect-ratio`
        - It does mean that you'll need to know the image's intrinsic dimensions before the image loads. This can be tricky if the image is dynamic, but you can solve this by storing the image dimensions in your data model (eg. if blog posts have images, **be sure to store the width and height in the DB, not just the `src`!**).
      - If all else fails, you can always prescribe a fixed size, and use `object-fit: cover` to ensure it doesn't get squashed!
    - Grouped loading
      - If you're loading in a bunch of content at once, try to group it together so that the layout shift is contained to a single area.
      - For example, if you're loading in a bunch of images, try to load them all in a single container, rather than sprinkling them throughout the page.
      - This is a tradeoff; we reduce the number of layout shifts, but it also means that the user won't get to see any images until they've all loaded; on a slow connection, this can make a big difference!
      - In the future, tools like **React Suspense** will help with this problem. For now, you'll need to come up with the right tradeoff for your particular use case.

- **Total Blocking Time (TBT)**: measures responsiveness. To provide a good user experience, pages should have a TBT of less than 300 milliseconds.
- **Time to First Byte (TTFB)**: measures the time from the start of the initial navigation until the browser receives the first byte of the response.

---

[⬆ back to top](#index)
