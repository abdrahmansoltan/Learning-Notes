# INDEX

- [INDEX](#index)
  - [Intro](#intro)
  - [HTML \& CSS](#html--css)
  - [Tailwind CSS](#tailwind-css)

---

## Intro

This file summarizes key topics in this repository (Learning Notes) to be used as a quick reference guide for interviews or study purposes.

---

## HTML & CSS

- **Default mode for rendering HTML pages:**

  - **Standards Mode (Strict Mode):** Adheres to W3C/WHATWG specifications.
  - **Quirks Mode:** Emulates older browsers for backward compatibility.
  - **Almost Standards Mode:** Similar to standards but allows some quirks.
  - **DOCTYPE declaration** affects rendering mode:
    - `<!DOCTYPE html>` ensures standards mode.
    - Older or missing DOCTYPE may trigger quirks mode.

- **Why "Hyper" and why "Markup"?**

  - **Hyper:** Refers to hypertext (linked documents).
  - **Markup:** Tags structure the document (e.g., `<p>`, `<h1>`, `<img>`).

- **Why are semantic elements important?**

  - **Accessibility:** Helps screen readers.
  - **SEO:** Improves search engine understanding.
  - **Maintainability:** Enhances code readability.
  - **Consistency:** Encourages consistent structures.

- **Types of elements in HTML:**

  - **Block-level:** `<div>`, `<p>`, `<ul>`, etc.
  - **Inline:** `<span>`, `<a>`, `<img>`, etc.
  - **Inline-block:** Mix of inline and block.
  - **Void:** Self-closing (`<br>`, `<img>`, etc.).
  - **Semantic:** `<header>`, `<main>`, etc.
  - **Form-related / Table-related**

- **Are HTML elements and tags the same?**

  - **Tags:** Markup syntax like `<p>` and `</p>`.
  - **Elements:** Tag + content + optional end tag.

- **Root of the document:**

  - `<html>` is the root container of an HTML document.

- **Meta tag that enables media query:**

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```

- **Types of `<meta>` tags:**

  - `charset`, `viewport`, `description`, `author`, `robots`, `refresh`, etc.

- **What is meta viewport?**

  - Controls layout on mobile by defining viewport size and scale.

- **Why is meta viewport important?**

  - Enables **responsive design**.
  - Ensures **mobile optimization** and **better UX**.

- **Why does HTML5 exist?**

  - Adds support for:
    - Multimedia (`<audio>`, `<video>`)
    - Semantic tags
    - Forms enhancements
    - Canvas and SVG
    - Offline storage
    - Responsive design and cross-platform compatibility

- **CSS `display` values:**

  - `block`, `inline`, `inline-block`, `none`, `flex`, `grid`, `table`, `list-item`, etc.

- **Difference between `display: none`, `visibility: hidden`, and `opacity: 0`:**

  - `none`: Removes element entirely from flow.
  - `hidden`: Keeps space but hides content.
  - `opacity: 0`: Transparent but interactive and occupies space.

- **Difference between `inline` and `inline-block`:**

  - `inline`: Cannot set width/height.
  - `inline-block`: Behaves inline but accepts block properties.

- **CSS `position` types:**

  - `static` (default)
  - `relative`: relative to itself
  - `absolute`: relative to nearest positioned ancestor
  - `fixed`: relative to viewport
  - `sticky`: switches between relative and fixed on scroll

- **Importance of `z-index`:**

  - Controls stacking of positioned elements.
  - Only works on positioned elements (`relative`, `absolute`, `fixed`, `sticky`).

- **When to use `clear` in CSS?**

  - Used to prevent float overlaps.
  - Often used in clearfix patterns:

    ```css
    .clearfix::after {
      content: '';
      display: table;
      clear: both;
    }
    ```

- **Absolute vs Relative URL:**

  - **Absolute:** Full path (`https://domain.com/image.jpg`)
  - **Relative:** Based on current location (`../images/image.jpg`)

- **Types of Media Queries:**

  - `all`, `print`, `screen`, `speech`
  - Used to query screen/device dimensions and features

- **Pseudo-elements vs Pseudo-classes:**

  - **Pseudo-elements:** `::before`, `::after`, `::first-line`
  - **Pseudo-classes:** `:hover`, `:nth-child`, `:focus`

- **CSS Selectors:**

  - **Element, Class, ID, Attribute**
  - **Pseudo-classes/elements**
  - **Combinators and Grouping**

- **CSS Units:**

  - **Absolute:** `px`, `pt`, `cm`, `in`
  - **Relative:** `%`, `em`, `rem`, `vw`, `vh`, `vmin`, `vmax`
  - **Grid-specific:** `fr`

- **Flex vs Grid:**

  - **Flexbox:** 1D layouts (row or column)
  - **Grid:** 2D layouts (rows and columns)

- **Flexbox Concepts:**

  - **Flex container** and **flex items**
  - Properties: `flex-grow`, `flex-shrink`, `flex-basis`, `justify-content`, `align-items`

- **Flex-grow and Flex-shrink:**

  - **Grow:** expands item to fill space
  - **Shrink:** contracts item when space is limited

- **Flex direction:**

  - `row` (default), `row-reverse`, `column`, `column-reverse`

- **Centering with Flex:**

  ```css
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```

- **`justify-content` vs `justify-items`:**

  - `justify-content`: applies to flex/grid container
  - `justify-items`: applies to individual grid items

- **CSS Grid Attributes:**
  - `display: grid`
  - Template: `grid-template-rows`, `grid-template-columns`
  - Placement: `grid-row`, `grid-column`, `grid-area`
  - Alignment: `justify-items`, `align-items`
  - Gaps: `gap`, `row-gap`, `column-gap`

---

## Tailwind CSS

- **What is CSS frameworks?**

  - CSS frameworks are pre-prepared software frameworks that are meant to allow for easier, more standards-compliant web design using the Cascading Style Sheets language. Most of these frameworks contain at least a grid. More functional frameworks also come with more features and additional JavaScript-based functions, but are mostly design-oriented and unobtrusive. This differentiates these from functional and full JavaScript frameworks.

- **What is the difference between preprocessors and frameworks?**

  - **Preprocessors:** Tools that allow you to generate CSS from the preprocessor's own unique syntax. They typically provide variables, mixins, functions, and other tools to make it easier to generate CSS.
  - **Frameworks:** Tools that provide prebuilt CSS for you to use in your projects. They typically provide a grid system, a set of components, and other tools to make it easier to build websites.

- **What is the difference between postprocessors and preprocessors?**

  - **Postprocessors:** CSS optimizers that typically provide features like minification, vendor prefixing, and more. An example tool is the Koala🐨 application.

- **What are the benefits of using CSS frameworks?**

  - **Responsive web design aspects:**
    - Media queries
    - Fluid grid
    - Flexible-sized elements and images
    - Media object (advanced float)
    - Off-canvas layout
    - Lightbox
    - Responsive typography, navigation, tables, images, embed content, iframes, advertising banners, forms
  - **Web applications aspects:**
    - CSS base, components, utilities, layout, print, themes, grid, reset, typography, tables, forms, buttons, navigation, pagination, lists, breadcrumbs, tooltips, alerts, progress bars, media object, columns, tables, icons, sprites, animations
  - **Web typography aspects:**
    - Font stacks, sizing, weight, rendering, smoothing, embedding, icons
  - **CSS preprocessors aspects:**
    - CSS preprocessors, postprocessors, mixins, variables, functions, mixins libraries, variables libraries
  - **Modules and tools:**
    - Reset style sheet
    - Grid especially designed for web interfaces
    - Web typography
    - Set of icons in sprites format
    - Styling for tooltips, buttons, elements of forms
    - Parts of graphical interface used in web applications (such as accordion, tabs, pagination, etc.)
  - **CSS architecture aspects:**
    - CSS architecture, naming conventions, methodologies, object-oriented, components, utilities

- **What are examples of CSS frameworks?**

  - Bootstrap, Foundation, Semantic UI, Pure, Skeleton, Bulma, Emotion, Styled Components
  - Materialize, UIkit, Milligram, Susy, Material UI, Gumby, Cardinal

- **Is Tailwind CSS a framework?**

  - Tailwind CSS is a highly customizable, **low-level CSS framework** with **low-level utility classes** that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. It lets you build completely custom designs without ever leaving your HTML.

  - 💡 Tailwind is different from frameworks like Bootstrap, Foundation, or Bulma in that it's **not a UI kit.** It doesn't have a **default theme, and there are no built-in UI components.** It comes with a menu of predesigned widgets to build your site with but doesn't impose design decisions that are difficult to undo.
  - Tailwind is different from **CSS-in-JS systems** like Emotion, Glamor, or Styled Components in that it's plain CSS, but with superpowers. You get all the benefits of authoring plain CSS without the tedium of writing all of the utility classes.

- **What is Tailwind CSS, and how does it differ from traditional CSS frameworks?**

  - **Tailwind CSS** is a **utility-first CSS framework** that provides a set of pre-defined utility classes that can be directly applied to HTML elements. It differs from traditional CSS frameworks by focusing on composing UIs using small, single-purpose utility classes rather than relying on pre-designed components. This gives developers more flexibility and control over the styling of their projects.

  - 💡 **Tailwind CSS is a CSS framework, while Bootstrap is an HTML, CSS, and JavaScript framework.**

- **How would you explain the utility-first approach of Tailwind CSS?**

  - The utility-first approach in Tailwind CSS means that it provides a comprehensive set of utility classes that represent individual CSS properties. Developers can combine these utility classes to create custom styles and layouts without writing any CSS from scratch. This approach promotes rapid development and simplifies the process of making changes to the UI.

- **What are some advantages of using Tailwind CSS in a project?**

  - **Rapid development:** With its extensive set of utility classes, developers can quickly build UI components and layouts without writing custom CSS.
  - **Consistent styling:** Tailwind CSS provides a standardized set of utility classes, ensuring consistency throughout the project.
  - **Easy customization:** Developers can easily customize the default styles by modifying the configuration file or by adding their own utility classes.
  - **Smaller file size:** Tailwind CSS optimizes the generated CSS file by purging unused classes, resulting in smaller file sizes compared to traditional CSS frameworks.

- **How can we use Tailwind CSS in a project?**

  - Using CDN
  - Using NPM
  - Using PostCSS
  - Using Gulp
  - Using Webpack

  **NPM Way:**

  - Install Tailwind via npm:

    ```bash
    npm install tailwindcss
    ```

  - Create your configuration file:

    ```bash
    npx tailwind init
    ```

  - Create your stylesheet:

    ```bash
    npx tailwind build styles.css -o output.css
    ```

  - Include Tailwind in your CSS:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

  - Compile your CSS:

    ```bash
    npx tailwindcss build styles.css -o output.css
    ```

  - Include Tailwind in your HTML:

    ```html
    <link href="output.css" rel="stylesheet" />
    ```

  - Start using Tailwind's utility classes to style your content:

    ```html
    <div class="flex justify-center items-center h-screen">
      <h1 class="text-blue-500 text-5xl font-bold">Hello, world!</h1>
    </div>
    ```

  - Customize your configuration:

    ```javascript
    module.exports = {
      theme: {
        extend: {
          colors: {
            // Add custom colors here
          }
        }
      }
    };
    ```

  - Rebuild your CSS:

    ```bash
    npx tailwindcss build styles.css -o output.css
    ```

  - Use your new custom color in your HTML:

    ```html
    <div class="flex justify-center items-center h-screen">
      <h1 class="text-cyan-500 text-5xl font-bold">Hello, world!</h1>
    </div>
    ```

- **How do you customize or extend the default styles provided by Tailwind CSS?**

  - Tailwind CSS allows customization through its configuration file, usually named `tailwind.config.js`. In this file, you can modify various aspects such as the color palette, spacing scale, breakpoints, and more. By adjusting these settings, you can customize the default styles to match your project's design requirements.

- **What is the purpose of the utility classes "hover" and "focus" in Tailwind CSS?**

  - The `hover` and `focus` utility classes in Tailwind CSS allow developers to apply styles to elements when they are being hovered over or focused. These classes enable interactivity and help in creating engaging user experiences.

- **How would you handle responsive design using Tailwind CSS?**

  - Tailwind CSS provides built-in responsive utility classes that allow developers to apply different styles based on screen sizes. By using classes like `sm:`, `md:`, `lg:`, etc., developers can define styles that will be applied at specific breakpoints. This approach simplifies the process of creating responsive designs.

- **What are plugins in Tailwind CSS?**

  - In Tailwind CSS, plugins are modules or extensions that allow you to customize or extend the default functionality of the framework. Plugins enable you to add new utilities, components, variants, or configuration options to Tailwind CSS. They offer a way to tailor Tailwind CSS to suit your specific project requirements.
