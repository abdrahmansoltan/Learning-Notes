# INDEX

- [INDEX](#index)
  - [Intro](#intro)
  - [HTML \& CSS \& Sass](#html--css--sass)
    - [HTML \& CSS](#html--css)
    - [SCSS \& Sass](#scss--sass)
    - [Tailwind CSS](#tailwind-css)
    - [Bootstrap](#bootstrap)
  - [Frontend Performance](#frontend-performance)
  - [FE Frameworks](#fe-frameworks)
    - [Vue](#vue)

---

## Intro

This file summarizes key topics in this repository (Learning Notes) to be used as a quick reference guide for interviews or study purposes.

---

## HTML & CSS & Sass

### HTML & CSS

- **What is the default mode for rendering HTML pages?**

  - The default mode for rendering HTML pages is **Quirks Mode** if no `<!DOCTYPE html>` declaration is present. This mode emulates older browser behavior for compatibility with legacy content. If a proper DOCTYPE is specified, the browser renders in **Standards Mode**.

- **Rendering Modes in Browsers:**

  - **Standards Mode (Strict Mode):** Adheres to W3C/WHATWG specifications.
  - **Quirks Mode:** Emulates older browsers for backward compatibility.
  - **Almost Standards Mode:** Similar to standards but allows some quirks (e.g., box model differences, and table cell spacing).
  - **DOCTYPE declaration** affects rendering mode:
    - `<!DOCTYPE html>` ensures "standards mode".
    - Older or missing DOCTYPE may trigger "quirks mode".
    - The `<!DOCTYPE>` declaration tells the web browser which version of HTML (or sometimes XHTML) the web page is written in. This helps the browser understand how to interpret and render the content of the page.

- **is doctype is case sensitive ?**

  - No, the `<!DOCTYPE html>` declaration is not case-sensitive. It can be written in any combination of uppercase and lowercase letters, such as `<!doctype html>`, `<!Doctype HTML>`, etc. However, it is common practice to use lowercase for consistency and readability.

- **What is HTML?**

  - HTML (HyperText Markup Language) is the standard markup language used to create web pages. It provides the structure and layout of a webpage by using various elements and tags to define content such as headings, paragraphs, images, links, and more.

- **Why "Hyper" and why "Markup"?**

  - **Hyper:** Refers to hypertext (linked documents).
  - **Markup:** Tags structure the document (e.g., `<p>`, `<h1>`, `<img>`).

  > So, "HyperText Markup Language" (HTML) essentially describes a language that allows you to create documents with text that contains links (hypertext) and to structure and format this text using tags (markup). This combination of hypertext and markup is what makes HTML such a powerful tool for creating and sharing content on the web

- **Why are semantic elements important?**

  - **Accessibility:** Helps screen readers.
  - **SEO:** Improves search engine understanding.
  - **Maintainability:** Enhances code readability.
  - **Consistency:** Encourages consistent structures.

- **Types of elements in HTML:**

  - **Block-level:** `<div>`, `<p>`, `<ul>`, etc.
    - They're elements that take up the full width available, starting on a new line.
  - **Inline:** `<span>`, `<a>`, `<img>`, etc.
    - They're elements that only take up as much width as necessary and do not start on a new line.
  - **Inline-block:** Mix of inline and block.
    - They're elements that are formatted like inline elements, and have properties of block elements, allowing you to set width and height.
  - **Void:** Self-closing (`<br>`, `<img>`, etc.).
    - They're elements that do not have a closing tag and do not contain any content.
  - **Semantic:** `<header>`, `<main>`, etc.
    - They're elements that clearly describe their meaning in a human- and machine-readable way.
  - **Form-related / Table-related**
    - They're elements used for structuring and displaying tabular or form data, such as `<form>`, `<table>`, `<tr>`, `<td>`, etc.

- **Are HTML elements and tags the same?**

  - **Tags:** Markup syntax used to define the beginning and end of an element. like `<p>` and `</p>`.
  - **Elements:** are composed of tags and the content they enclose, representing the actual
    structure and meaning within an HTML document.

- **Root of the document:**

  - `<html>` is the root container of an HTML document, enclosing all other elements.

- **Meta tag that enables media query:**

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```

  - `meta` is used to define metadata about the HTML document, such as character set, viewport settings, and more.
  - `name="viewport"` specifically controls the layout on mobile devices by setting the width and initial scale of the viewport.
  - `content="width=device-width, initial-scale=1.0"` sets the viewport width to the device's width and the initial zoom level to 1.0, ensuring proper scaling on different devices.

- **Types of `<meta>` tags:**

  - `charset`
    - Defines the character encoding for the HTML document (e.g., `<meta charset="UTF-8">`).
  - `viewport`
    - Controls the layout on mobile devices (e.g., `<meta name="viewport" content="width=device-width, initial-scale=1.0">`).
    - It is crucial for creating responsive web designs that adapt to different screen sizes and orientations.
  - `description`
    - Provides a brief description of the page's content for search engines (e.g., `<meta name="description" content="This is a sample webpage.">`).
  - `author`
    - Specifies the author of the document (e.g., `<meta name="author" content="John Doe">`).
  - `robots`
    - Controls how search engines index the page (e.g., `<meta name="robots" content="index, follow">`).
  - `refresh`
    - Automatically refreshes the page after a specified time (e.g., `<meta http-equiv="refresh" content="30">`).

- **What is meta viewport?**

  - Controls layout on mobile by defining viewport size and scale.

- **Why is meta viewport important?**

  > It's essential for ensuring that your web pages are responsive and mobile-friendly. It allows you to control how the page is displayed on different devices, optimizing the user experience across various screen sizes and orientations.

  - Enables **responsive design**.
  - Ensures **mobile optimization** and **better UX**.
    - Without the `viewport` meta tag, mobile browsers may render the page as if it were a desktop site, leading to content appearing too small or being zoomed out, which can degrade the user experience.

- **Why does HTML5 exist?**

  - HTML5 exists primarily to address the evolving needs of web developers and users, offering new features, improved functionality, and better support for multimedia and interactivity. Several key reasons why HTML5 was developed include

  - Adds support for:
    - Multimedia support (`<audio>`, `<video>`) eliminating the need for third-party plugins like `Flash`
    - Semantic tags
    - Forms enhancements (intruduced new input types like `email`, `date`, etc. and new attributes like `placeholder`, `required`, etc.)
    - Canvas and SVG -> This enables richer visualizations, interactive games, and animations without relying on external plugins.
      - `canvas` element for dynamic graphics rendering
      - `svg` for scalable vector graphics (used mainly for icons and illustrations)
    - Offline storage Capabilities
      - Local storage and session storage APIs for client-side data persistence
      - Application cache for offline web applications (`AppCache`)
    - Responsive design and cross-platform compatibility
      - HTML5 introduced features like the `viewport` meta tag, which allows developers to control how web pages are displayed on different devices, ensuring a consistent and user-friendly experience across desktops, tablets, and smartphones.
    - APIs for geolocation
      - Geolocation API for accessing user location data
    - Backward compatibility with older HTML versions
      - HTML5 was designed to be backward compatible with previous versions of HTML, allowing developers to gradually adopt new features without breaking existing content.

- **CSS `display` values:**

  - It determines how an element is displayed on the page and how it interacts with other elements in the document flow.
  - Common values include:
    - `block`: Element starts on a new line, takes full width.
    - `inline`: Element does not start on a new line, only takes as much width as necessary.
    - `inline-block`: Element behaves like an inline element but allows setting width and height.
    - `none`: Element is not displayed and does not take up space.
    - `flex`: Enables flexible box layout for responsive designs.
    - `grid`: Enables grid layout for two-dimensional layouts.
    - `table`, `list-item`, etc.: Other display types for specific use cases.

- **Difference between `display: none`, `visibility: hidden`, and `opacity: 0`:**

  - `display: none`
    - Removes element entirely from the document flow (not rendered, no space occupied, not accessible via screen readers).
    - Use case: Hiding elements that should not be displayed at all, such as in responsive designs or when toggling visibility.
  - `visibility: hidden`
    - Hides element but keeps its space in the layout (still occupies space, but not visible, accessible via screen readers as it's still in the DOM).
    - Use case: Temporarily hiding elements while maintaining layout, such as in dropdown menus or tooltips, also animations where you want to hide an element without affecting the layout.
  - `opacity: 0`
    - Makes element fully transparent but still visible in the layout (still occupies space, accessible via screen readers).
    - Use case: Creating fade-out effects or transitions where you want the element to remain in the layout but not visible to the user.

- **Difference between `inline` and `inline-block`:**

  - `inline`:
    - Cannot set width/height.
    - Does not start on a new line.
    - Margins and paddings only affect horizontal spacing.
  - `inline-block`:
    - Behaves inline but accepts block properties.
    - Can set width/height.
    - Starts on the same line but allows vertical margins and paddings.

- **CSS `position` types:**

  - `static` (default), element is positioned according to the normal document flow.
  - `relative`, element is positioned relative to its normal position.
  - `absolute`, element is positioned relative to its nearest positioned ancestor (parent with position with anyother value than `static`).
  - `fixed`, element is positioned relative to the viewport, meaning it stays in the same place even when the page is scrolled.
  - `sticky`, element toggles between relative and fixed positioning based on the scroll position.

- **Importance of `z-index`:**

  - Controls stacking order of positioned elements in z-axis.
  - Only works on positioned elements (`relative`, `absolute`, `fixed`, `sticky`).
  - Control overlapping between elements like (dropdown, tooltips, modals, dialogs) where one element needs to be appear on top of another one.

  > Note: Elements inside (flex/grid) containers with `z-index` will not stack above elements outside the container unless the container itself has a `z-index` set.

- **What is the difference between `float` and `absolute` positioning?**

  - **Float:**
    - Used for wrapping text around images or creating multi-column layouts.
    - Elements are taken out of the normal document flow but still affect surrounding elements.
    - Can lead to layout issues if not cleared properly.
  - **Absolute Positioning:**
    - Positions an element relative to its nearest positioned ancestor (not static).
    - Takes the element out of the normal document flow, and it does not affect surrounding elements.
    - Useful for creating overlays, tooltips, and modals.

- **When to use `clear` in CSS?**

  - when clearing floats to prevent overlap of floated elements.
  - Often used in clearfix patterns:

    - It's when you want to ensure that a container properly contains its floated children, preventing layout issues where the container collapses or does not expand to include the floated elements.

    ```css
    .clearfix::after {
      content: '';
      display: table;
      clear: both;
    }
    ```

  - when working with responsive designs.
  - when managing layout in complex designs with multiple floated elements.

- **Absolute vs Relative URL:**

  - The difference is in how we specify the location of a resource (like an image, script, or stylesheet) in relation to the current document.

    - **Absolute**
      - Full path including domain, and protocol (e.g., `https://example.com/images/image.jpg`).
      - Used when the resource is hosted on a different domain or when you want to ensure the resource is always fetched from the same location.
    - **Relative**
      - Based on current location of the web-page (`../images/image.jpg`)
      - Used when the resource is in the same directory or a subdirectory of the current document, making it easier to move the entire site without breaking links.

- **Types of Media Queries:**

  - `all`, `print`, `screen`, `speech` (screen readers)
  - Used to query screen/device dimensions and features or orientation.

- **Pseudo-elements vs Pseudo-classes:**

  - **Pseudo-elements:**
    - Used to style specific parts of an element.
    - `::before`, `::after`, `::first-line`
  - **Pseudo-classes:**
    - Used to style elements based on their state or position in the document.
    - `:hover`, `:nth-child`, `:focus`

- **CSS Selectors:**

  - They're patterns/rules used to select elements in an HTML document for styling.
  - Types:
    - **Element, Class, ID, Attribute**
    - **Pseudo-classes/elements**
    - **Combinators and Grouping** -> based on relationships between elements (e.g., descendant, child, sibling selectors) in the document tree.

- **CSS Units:**

  - They're used to define lengths, sizes, and dimensions in CSS.
  - Types:
    - **Absolute:** `px`, `pt`, `cm`, `in`
    - **Relative:** `%`, `em`, `rem`, `vw`, `vh`, `vmin`, `vmax`
      - `em`
        - if used with font-size, it is relative to the font size of the element itself.
        - if used with other properties, it is relative to the font size of the parent element.
      - `rem`
        - is relative to the font size of the root element (`<html>`) for all properties.
    - **Grid-specific:** `fr`

- **Flex vs Grid:**

  - **Flexbox:**
    - single-dimension layouts (row or column), offering flexibility in how items resize and wrap.
  - **Grid:**
    - 2-dimensional layouts (rows and columns), allowing for complex arrangements of items in a grid structure.

- **Flexbox Concepts:**

  - **Flex container** and **flex items**
  - Properties: `flex-grow`, `flex-shrink`, `flex-basis`, `justify-content`, `align-items`

- **Flex-grow and Flex-shrink:**

  - **Grow:** expands item to fill space
    - `flex-grow: 1` means the item can grow to fill available space.
    - `flex-grow: 0` means the item will not grow beyond its initial size.
  - **Shrink:** contracts item when space is limited
    - `flex-shrink: 1` means the item can shrink to fit within the container.
    - `flex-shrink: 0` means the item will not shrink below its initial size.

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

  - `justify-content`
    - applies to flex/grid container, controls alignment of items along the main axis.
  - `justify-items`
    - controls how grid items are aligned within their grid area, applies to grid containers only.

- **CSS Grid Attributes:**

  - It's a layout system that allows for the creation of complex, two-dimensional layouts using rows and columns.

  - `display: grid`
  - Template: `grid-template-rows`, `grid-template-columns`
  - Placement: `grid-row`, `grid-column`, `grid-area`
  - Alignment: `justify-items`, `align-items`
  - Gaps: `gap`, `row-gap`, `column-gap`

- How can we center an element?

  - **Using Flexbox:**

    ```css
    .container {
      display: flex;
      justify-content: center; /* Horizontal centering */
      align-items: center; /* Vertical centering */
    }
    ```

  - **Using Grid:**

    ```css
    .container {
      display: grid;
      place-items: center; /* Centers both horizontally and vertically */
    }
    ```

  - **Using Margin Auto (for block elements):**

    ```css
    .element {
      margin: auto; /* Centers horizontally */
      width: 50%; /* Set a width for centering */
    }
    ```

  - **Using Absolute Positioning:**

    ```css
    .element {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); /* Centers both horizontally and vertically */
    }
    ```

- **How we can make photo covered the container?**

  - To make a photo cover the entire container using CSS, you can use the backgroundsize property along with background-image on the container. This approach ensures that the image fills the entire container, scaling appropriately without distortion.
  - `background-size: cover` -> This property ensures that the background image covers the entire container, **maintaining its aspect ratio** while filling the space.

- **What is mean by mobile first design and desktop first?**

  - **Mobile-first design** is an approach where the design and development of a website or application start with the smallest screen size (mobile devices) and progressively enhance the experience for larger screens (tablets, desktops). This ensures that the core functionality and content are accessible on mobile devices before adding more complex features for larger screens. -> `min-width` media queries
  - **Desktop-first design** is the opposite approach, where the design starts with larger screens (desktops) and then adapts down to smaller screens. This can lead to a more complex experience on mobile devices, as features designed for larger screens may not translate well to smaller screens. -> `max-width` media queries

- **What is the difference between box model and box sizing ?**

  - **Box Model** refers to the way elements are structured in CSS, including content, padding, border, and margin. It defines how the size of an element is calculated and how it interacts with other elements in the layout.
  - **Box Sizing** is a CSS property that changes how the width and height of an element are calculated. The `box-sizing` property can be set to `content-box` (default) or `border-box`.
    - `content-box`: Width and height include only the content, excluding padding and border.
    - `border-box`: Width and height include padding and border, making it easier to manage layouts without worrying about additional space from padding or borders.

- **What is the difference between `margin` and `padding`?**

  - **Margin** is the space outside an element's border, creating distance between the element and its surrounding elements. It does not affect the element's size.
  - **Padding** is the space inside an element's border, creating distance between the content and the border. It increases the element's size.

- **How we can use variables in CSS?**

  - CSS variables, also known as custom properties, allow you to define reusable values that can be applied throughout your stylesheets. They are defined using the `--` prefix and can be accessed using the `var()` function.

- **what is specificity in CSS ?**

  - It determines which styles are applied when multiple rules match the same element. Specificity is calculated based on the types of selectors used:
    - Inline styles (highest specificity)
    - IDs
    - Classes, attributes, and pseudo-classes
    - Elements and pseudo-elements (lowest specificity)
  - It's a number of 4 values, each representing a different level of specificity:
    - Inline styles: `1,0,0,0`
    - IDs: `0,1,0,0`
    - Classes/attributes/pseudo-classes: `0,0,1,0`
    - Elements/pseudo-elements: `0,0,0,1`

  > The more specific a selector is, the higher its specificity score, and the more likely it is to override other styles.

- What is the difference between `rem` and `em`?

  - **`rem` (root em)**: Relative to the font size of the root element (`<html>`). It provides a consistent base for sizing elements across the entire document.
  - **`em`**: Relative to the font size of the element itself or its parent. It can lead to compounding effects if used within nested elements, making it less predictable.

- \*_What is the difference between link tag `<link>` and anchor tag `<a>`?_

  - **`<link>`**: Used to link external resources like stylesheets, icons, or other documents. It does not create a clickable link for navigation.
    - Example: `<link rel="stylesheet" href="styles.css">`
  - **`<a>`**: Used to create hyperlinks that allow users to navigate to other pages or resources. It can contain text or other elements and is clickable.
    - Example: `<a href="https://example.com">Visit Example</a>`

- **What is the difference between `id` and `class` in HTML?**

  - **`id`**: A unique identifier for a single element on a page. It should be used only once per page and is often used for targeting specific elements with JavaScript or CSS.
  - **`class`**: A reusable class that can be applied to multiple elements. It allows for grouping elements with similar styles or behaviors.

- **What is data attribute?**

  - Data attributes are custom attributes that can be added to HTML elements to store extra information. They are prefixed with `data-` and can be accessed via JavaScript or CSS.
  - Example: `<div data-user-id="123" data-role="admin"></div>`

- **How to make html more secure?**

  - Use HTTPS to encrypt data in transit (avoid man-in-the-middle attacks).
  - Validate and sanitize user input to prevent XSS and SQL injection attacks.
  - Implement Content Security Policy (CSP) to restrict resources loaded by the page.
  - Avoid `eval()` and similar functions that execute arbitrary code.
  - Use secure cookies with the `HttpOnly` and `Secure` flags.
  - Regularly update libraries and frameworks to patch vulnerabilities (Regular Security Audits).
  - Avoid inline JavaScript and styles to reduce XSS risks.
  - Educate Developers and Users about security best practices.

- **What is the difference between `GET` and `POST` methods in HTML forms?**

  - **GET**: Sends data in the URL, suitable for retrieving data. Limited in size and not secure for sensitive information.
    - Example: `<form method="GET" action="/search">`
  - **POST**: Sends data in the request body, suitable for submitting data. No size limit and more secure for sensitive information.
    - Example: `<form method="POST" action="/submit">`

- **What is best place to add script in html?**

  - The best place to add scripts in HTML is at the end of the `<body>` tag. This ensures that the HTML content is fully loaded before the script executes, preventing render-blocking and improving page load performance.
  - Example:

    ```html
    <body>
      <!-- Content goes here -->
      <script src="script.js"></script>
    </body>
    ```

  - Alternatively, you can use the `defer` or `async` attributes in the `<script>` tag to control script loading behavior without blocking rendering.

- **What is the difference between `defer` and `async` in script loading?**

  - **`defer`**: Scripts are executed in the order they appear in the document after the HTML is fully parsed. It does not block rendering.
  - **`async`**: Scripts are executed as soon as they are downloaded, without waiting for the HTML to finish parsing. The order of execution is not guaranteed.
    - This means that if you have multiple scripts with `async`, they may execute in any order, depending on which one finishes downloading first.

  > Use `defer` for scripts that depend on the DOM being fully loaded, and `async` for independent scripts that can run immediately after downloading.

- **What is BEM in CSS?**

  - BEM (Block Element Modifier) is a naming convention for classes in HTML and CSS that helps create reusable and maintainable components. It consists of three parts:
    - **Block**: Represents a standalone component (e.g., `header`, `button`).
    - **Element**: A part of a block that has no standalone meaning (e.g., `header__logo`, `button__icon`).
    - **Modifier**: A flag that changes the appearance or behavior of a block or element (e.g., `button--primary`, `header--fixed`).

  > BEM promotes clear and consistent naming, making it easier to understand the structure and relationships between components in your code.

- **What is `object-fit` property in CSS?**

  - The `object-fit` property in CSS is used to control how an element's content (such as an image or video) is resized to fit its container. It determines how the content should be scaled and positioned within the element's box.
  - Common values include:
    - `fill`: The content stretches to fill the container, potentially distorting its aspect ratio.
    - `contain`: The content scales to fit within the container while maintaining its aspect ratio, leaving empty space if necessary.
    - `cover`: The content scales to cover the entire container while maintaining its aspect ratio, cropping if necessary.
    - `none`: The content retains its original size, which may overflow the container.

- **What is SEO and How to improve it?**

  - **SEO (Search Engine Optimization)** is the practice of optimizing web content to improve its visibility and ranking in search engine results pages (SERPs). The goal is to attract organic traffic from search engines like Google, Bing, and Yahoo.
  - To improve SEO:
    - Use relevant keywords in titles, headings, and content.
    - Optimize `meta` tags (title, description) for click-through rates.
    - Ensure mobile-friendliness and fast loading times.
    - Create high-quality, valuable content that addresses user intent.
    - Use descriptive URLs and proper heading structure (H1, H2, etc.).
    - Implement internal linking to connect related content.
    - Build backlinks from reputable sources to increase authority.
    - Use alt text for images to improve accessibility and indexing.
    - Regularly update content to keep it fresh and relevant.
    - Use semantic HTML elements to improve structure and meaning.

- **How to optimize first load of project?**

  - Minimize HTTP requests by combining CSS and JavaScript files.
  - Use a CDN to serve static assets from locations closer to users.
  - Enable compression (e.g., Gzip or Brotli) to reduce file sizes.
  - Optimize images by compressing them and using appropriate formats (e.g., `WebP`, `AVIF`).
  - Lazy-load non-critical scripts.
  - Implement lazy loading for images and videos to defer loading until they are in the viewport.
    - `loading="lazy"` for images and iframes. instead of `loading="eager"` or no attribute.
  - Minify CSS, JavaScript, and HTML files to reduce file sizes.
  - Enable browser caching to store static assets locally for faster subsequent loads.
  - Use `defer` or `async` attributes for script loading to prevent render-blocking.
  - Use server-side rendering (SSR) or static site generation (SSG) for faster initial page loads.
  - Use `preload` and `prefetch` for critical resources to prioritize their loading.

    - they're used to optimize resource loading in web applications.
    - `preload` is used to load resources that are needed immediately, such as fonts or critical CSS, before the browser starts rendering the page.
    - `prefetch` is used to load resources that may be needed in the future, such as scripts or images for subsequent pages, allowing the browser to cache them for faster access later.

    ```html
    <link rel="preload" href="styles.css" as="style" />
    <link rel="prefetch" href="next-page.html" />
    ```

  - Use Progressive Web App (PWA) Techniques, which include service workers for caching and offline capabilities, to enhance performance and user experience.

- **How to convert from ordered list to un ordered list using CSS?**
  - To convert an ordered list (`<ol>`) to an unordered list (`<ul>`) using CSS, you can use the `list-style-type` property to change the bullet style.

---

### SCSS & Sass

- **What is preprocessor and postprocessor in CSS?**

  - **Preprocessor:** A tool that extends CSS with features like variables, nesting, and mixins, allowing for more dynamic and maintainable stylesheets. Examples include Sass, Less, and Stylus.
  - **Postprocessor:** A tool that processes CSS after it has been written, typically for optimization purposes, such as minification, autoprefixing, and adding vendor prefixes. Examples include PostCSS and Autoprefixer.

- **What is Sass?**

  - Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that adds features like variables, nesting, mixins, and functions to standard CSS. It allows developers to write more maintainable and modular stylesheets, making it easier to manage complex styles.
  - advantages of using Sass:
    - **Variables:** Store reusable values (e.g., colors, fonts).
    - **Nesting:** Organize styles hierarchically.
    - **Mixins:** Create reusable style blocks.
    - **Partials and Imports:** Modularize stylesheets.
    - **Functions:** Perform calculations and return values.

- **What is the difference between Sass and SCSS?**

  - Sass and SCSS are both Sass syntaxes, but they have different formats. Sass uses indentation and doesn't require semicolons or curly braces, while SCSS uses a syntax similar to CSS with curly braces and semicolons. SCSS is more popular and widely adopted as it closely resembles CSS and is easier for developers transitioning from regular CSS.

- **How can you compile Sass to CSS?**

  - You can compile Sass to CSS using various methods:

    - **Command Line:** Using the `sass` command-line tool.

      ```bash
      sass input.scss output.css
      ```

    - **Build Tools:** like Webpack, Gulp, or Grunt with appropriate plugins.

- **How you can inherit selectors in Sass/SCSS?**

  - In Sass/SCSS, you can inherit selectors using the `@extend` directive. This allows one selector to inherit the styles of another, promoting code reuse and reducing duplication.

    ```scss
    .button {
      padding: 10px;
      background-color: blue;
    }

    .primary-button {
      @extend .button;
      background-color: green; // Overrides the background color
    }

    // ------------------------------------------------------------

    // After compilation, .primary-button will have the styles of .button plus its own styles.
    .button,
    .primary-button {
      padding: 10px;
      background-color: green; // The final background color for .primary-button
    }

    .secondary-button {
      @extend .button;
      background-color: red; // Overrides the background color
    }
    ```

- **What is the difference between `@import` and `@use` in Sass/SCSS?**

  - **`@import`:** Used to include styles from one file into another. It can lead to issues with variable and mixin conflicts, as it imports everything into the global scope.
  - **`@use`:** Introduced in `Sass 1.23.0`, it allows you to load styles from another file while keeping them in a separate namespace. This prevents naming conflicts and promotes better organization of styles.

    ```scss
    // Using @import
    @import 'variables';
    @import 'mixins';

    // Using @use
    @use 'variables';
    @use 'mixins';
    ```

- **What is the difference between `mixins` and `functions` in Sass/SCSS?**

  - **Mixins:** Reusable blocks of styles that can include CSS properties and other mixins. They can accept arguments and are used to apply styles to multiple selectors.

    ```scss
    @mixin rounded-corners($radius) {
      border-radius: $radius;
    }

    .box {
      @include rounded-corners(10px);
    }
    ```

  - **Functions:** Used to perform calculations or return values. They can accept arguments and are typically used for generating values rather than applying styles directly.

    ```scss
    @function calculate-rem($pixels) {
      @return $pixels / 16 * 1rem; // Assuming base font size is 16px
    }

    .text {
      font-size: calculate-rem(24px);
    }
    ```

- **How do you import other Sass/SCSS files into your main file?**

  - You can import other Sass/SCSS files into your main file using the `@import` or `@use` directives. The `@import` directive is the traditional way, while `@use` is the newer, recommended approach.

---

### Tailwind CSS

- **What is the difference between preprocessors and frameworks?**

  - **Preprocessors:** Tools that extend CSS with features like variables, nesting, and mixins, allowing for more dynamic and maintainable stylesheets. Examples include Sass, Less, and Stylus.
  - **Frameworks:** Pre-built collections of CSS (and sometimes JavaScript) that provide a structured way to build web applications or websites. They often include a grid system, components, and utilities for rapid development. Examples include Bootstrap, Foundation, and Tailwind CSS.

- **What are the benefits of using CSS frameworks?**

  - **Rapid development:** CSS frameworks provide pre-designed components and utilities that speed up the development process, allowing developers to focus on functionality rather than styling from scratch.
  - **Consistency:** Frameworks enforce a consistent design language across the application, ensuring that styles are uniform and adhere to best practices.
  - **Cross-browser compatibility:** Most CSS frameworks are tested across various browsers, ensuring that styles render consistently, reducing the need for extensive cross-browser testing.
  - **Responsive design:** Many frameworks come with built-in responsive design features, making it easier to create layouts that adapt to different screen sizes and devices.
  - **Community support:** Popular CSS frameworks have large communities, providing extensive documentation, tutorials, and third-party plugins that can enhance development.

- **Is Tailwind CSS a framework?**

  - It's a **utility-first CSS framework** that provides a set of pre-defined utility classes for styling HTML elements. Unlike traditional CSS frameworks that offer pre-designed components, Tailwind CSS focuses on providing low-level utility classes that can be combined to create custom designs.

- **What is Tailwind CSS, and how does it differ from traditional CSS frameworks?**

  - **Tailwind CSS** is a **utility-first CSS framework** that provides a set of pre-defined utility classes that can be directly applied to HTML elements. It differs from traditional CSS frameworks by focusing on composing UIs using small, single-purpose utility classes rather than relying on pre-designed components. This gives developers more flexibility and control over the styling of their projects.
  - It differs from traditional CSS frameworks by focusing on composing UIs using small, single-purpose utility classes rather than relying on pre-designed components. This gives developers more flexibility and control over the styling of their projects.

  > Tailwind CSS is a CSS framework, while Bootstrap is an HTML, CSS, and JavaScript framework.

- **How would you explain the utility-first approach of Tailwind CSS?**

  - The utility-first approach of Tailwind CSS emphasizes the use of small, single-purpose utility classes to style elements directly in the HTML. Instead of writing custom CSS for each component, developers can apply multiple utility classes to achieve the desired design.

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

- **How do you customize or extend the default styles provided by Tailwind CSS?**

  - Tailwind CSS allows customization through its configuration file, usually named `tailwind.config.js`. In this file, you can modify various aspects such as the color palette, spacing scale, breakpoints, and more. By adjusting these settings, you can customize the default styles to match your project's design requirements.

- **How would you handle responsive design using Tailwind CSS?**

  - Tailwind CSS provides built-in responsive utility classes that allow developers to apply different styles based on screen sizes. By using classes like `sm:`, `md:`, `lg:`, etc., developers can define styles that will be applied at specific breakpoints. This approach simplifies the process of creating responsive designs.

- **What are plugins in Tailwind CSS?**

  - They're extensions that add additional functionality or utility classes to Tailwind CSS. Plugins can be used to introduce custom styles, components, or utilities that are not included in the core framework. They can be installed via npm or added directly to the configuration file.

---

### Bootstrap

- **What is Bootstrap?**

  - Bootstrap is a popular open-source front-end framework that provides a collection of pre-designed HTML, CSS, and JavaScript components for building responsive and mobile-first web applications.
  - It includes a grid system, typography, forms, buttons, navigation, and various UI components that help developers create consistent and visually appealing designs quickly.

- **What are the key features/benefits of Bootstrap?**

  - **Responsive Grid System:** Bootstrap's grid system allows developers to create flexible and responsive layouts that adapt to different screen sizes.
  - **Pre-designed Components:** It provides a wide range of pre-designed UI components such as buttons, forms, modals, alerts, and navigation bars.
  - **Customizable:** Bootstrap can be easily customized using its Sass variables and mixins, allowing developers to tailor the framework to their project's design requirements.
  - **JavaScript Plugins:** It includes various JavaScript plugins for adding interactivity, such as modals, tooltips, carousels, and dropdowns.
  - **Cross-browser Compatibility:** Bootstrap is designed to work consistently across major browsers, ensuring a uniform user experience.

- **Explain the grid system in Bootstrap?**

  - It is based on a 12-column layout, allowing developers to divide the page into up to 12 equal-width columns. which is responsive and mobile-first.
  - it uses classes like `.container`, `.row`, and `.col-*` to define the structure of the grid.

- **What is a Bootstrap Container, and how does it work?**

  - It's a fixed-width or fluid-width element that serves as a wrapper for the grid system. It provides a responsive layout by adjusting its width based on the screen size.
  - There are two types of containers:
    - **`.container`:** A fixed-width container that adapts to different screen sizes.
    - **`.container-fluid`:** A full-width container that spans the entire width of the viewport.

- **What are Bootstrap Breakpoints?**

  - Bootstrap breakpoints are predefined screen widths at which the layout of the grid system changes to accommodate different devices. They allow developers to create responsive designs that adapt to various screen sizes.
  - The default breakpoints in Bootstrap are:
    - **Extra small (xs):** `<576px`
    - **Small (sm):** `≥576px`
    - **Medium (md):** `≥768px`
    - **Large (lg):** `≥992px`
    - **Extra large (xl):** `≥1200px`
    - **Extra extra large (xxl):** `≥1400px`

- **What are Bootstrap themes?**
  - Bootstrap themes are pre-designed styles and components that can be applied to a Bootstrap-based project to change its appearance and layout. They provide a consistent design language and can include custom colors, typography, and UI elements.
  - Themes can be created by modifying the default Bootstrap styles or by using third-party themes available from various sources.

---

## Frontend Performance

- **What is frontend performance?**

  - Frontend performance refers to the speed and efficiency with which a web application or website loads and responds to user interactions. It encompasses various aspects, including page load times, rendering speed, responsiveness, and overall user experience.

- **Why is frontend performance important?**

  - Frontend performance is crucial for several reasons:
    - **User Experience:** Faster loading times and smooth interactions lead to a better user experience, reducing bounce rates and increasing user satisfaction.
    - **SEO:** Search engines consider page speed as a ranking factor, so faster sites are more likely to rank higher in search results.
    - **Conversion Rates:** Improved performance can lead to higher conversion rates, as users are more likely to complete actions on a fast-loading site.
    - **Accessibility:** Performance optimizations can enhance accessibility for users with slower connections or devices.

- **What are some common frontend performance metrics?**

  - Some common frontend performance metrics include:
    - **First Contentful Paint (FCP):** Measures the time it takes for the first piece of content to be rendered on the screen.
    - **Largest Contentful Paint (LCP):** Measures the time it takes for the largest visible content element to be rendered.
    - **Time to Interactive (TTI):** Measures the time it takes for a page to become fully interactive.
    - **Cumulative Layout Shift (CLS):** Measures visual stability by quantifying unexpected layout shifts during page load.
    - **Total Blocking Time (TBT):** Measures the total time that the main thread is blocked and unable to respond to user input.

- **What are some common frontend performance optimization techniques?**

  - **Minification and Compression:** Minifying CSS, JavaScript, and HTML files to reduce file sizes and using compression algorithms like Gzip or Brotli to further reduce payload sizes.
  - **Image Optimization:** Compressing images, using appropriate formats (e.g., WebP), and implementing responsive images with `srcset` and `sizes` attributes.
  - **Lazy Loading:** Deferring the loading of non-critical resources (e.g., images, videos) until they are needed or visible in the viewport.
  - **Code Splitting:** Breaking up large JavaScript bundles into smaller chunks that can be loaded on demand, reducing initial load times.
  - **Caching:** Implementing browser caching and server-side caching to store static assets locally for faster subsequent loads.
  - **Content Delivery Network (CDN):** Using a CDN to serve static assets from locations closer to users, reducing latency.
  - **Reducing HTTP Requests:** Combining CSS and JavaScript files, using sprites for icons, and minimizing the number of external resources.
  - **Asynchronous Loading:** Using `async` or `defer` attributes for script tags to prevent render-blocking behavior.

- **What is the critical rendering path, and how can it be optimized?**

  - The critical rendering path is the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on the screen. It includes parsing HTML, constructing the DOM, parsing CSS, constructing the CSSOM, and rendering the page.
  - To optimize the critical rendering path:
    - Minimize the number of critical resources (CSS and JavaScript).
    - Use inline critical CSS for above-the-fold content.
    - Defer non-critical JavaScript loading.
    - Reduce render-blocking resources by using `async` or `defer` attributes for scripts.
    - Optimize CSS selectors to reduce complexity and improve performance.

- **What is lazy loading, and how does it improve performance?**

  - Lazy loading is a technique that defers the loading of non-critical resources (such as images, videos, or scripts) until they are needed or visible in the viewport. This reduces the initial page load time and improves performance by only loading resources when they are required.
  - It can be implemented using the `loading="lazy"` attribute for images and iframes, or by using JavaScript libraries that handle lazy loading for other types of content.

- **What is code splitting, and how does it benefit frontend performance?**

  - Code splitting is a technique that breaks up large JavaScript bundles into smaller chunks that can be loaded on demand. This reduces the initial load time of a web application by only loading the code necessary for the current view or interaction.
  - Benefits include:
    - Faster initial page load times.
    - Reduced memory usage, as only the required code is loaded.
    - Improved user experience by allowing users to interact with the page while additional code is being loaded in the background.

- **What is the difference between synchronous and asynchronous loading of scripts?**

  - **Synchronous Loading:** Scripts are loaded in the order they appear in the HTML document, blocking the rendering of the page until the script is fully loaded and executed. This can lead to longer load times and a poor user experience.
    - Example: `<script src="script.js"></script>`
  - **Asynchronous Loading:** Scripts are loaded independently of the page rendering process, allowing the browser to continue rendering the page while the script is being downloaded. This improves performance and reduces render-blocking behavior.

    - Example: `<script src="script.js" async></script>`

  - **Deferred Loading:** Similar to asynchronous loading, but scripts are executed in the order they appear in the document after the HTML is fully parsed. This ensures that scripts do not block rendering while still maintaining the order of execution.

    - Example: `<script src="script.js" defer></script>`

- **How can you measure frontend performance?**

  - Frontend performance can be measured using various tools and metrics, including:
    - **Google Lighthouse:** An open-source tool that audits web pages for performance, accessibility, SEO, and best practices.
    - **WebPageTest:** A tool that provides detailed performance analysis, including load times, resource sizes, and rendering metrics.
    - **Chrome DevTools:** Built-in browser tools that allow developers to analyze network requests, performance timelines, and rendering performance.
    - **Performance APIs:** The `Performance` API provides methods to measure various aspects of page performance programmatically.
    - **Real User Monitoring (RUM):** Tools like Google Analytics or New Relic that collect performance data from real users in production environments.

- **Do you know monitoring and observability tools?**

  - Yes, monitoring and observability tools are essential for tracking the performance and health of web applications. They help identify issues, analyze user behavior, and optimize performance.
  - Examples include:
    - **Google Analytics:** Provides insights into user behavior, traffic sources, and page performance.
    - **New Relic:** Offers application performance monitoring (APM) to track server-side and client-side performance.
    - **Datadog:** Provides real-time monitoring and analytics for applications, infrastructure, and logs.
    - **Sentry:** Focuses on error tracking and performance monitoring for web applications.
    - **Prometheus:** An open-source monitoring system that collects metrics from configured targets at specified intervals.

- **What is the difference between monitoring and observability?**

  - **Monitoring** refers to the process of collecting and analyzing data about the performance and health of a system or application. It involves tracking metrics, logs, and events to identify issues and ensure that the system is functioning as expected.
  - **Observability** goes beyond monitoring by providing deeper insights into the internal workings of a system. It allows developers to understand how different components interact, diagnose complex issues, and gain visibility into the overall behavior of the system. Observability often involves correlating data from multiple sources (logs, metrics, traces) to provide a comprehensive view of the system's state.

- **What do you know about web analytics and tracking events?**

  - Web analytics involves collecting, measuring, and analyzing data about user interactions with a website or web application. It helps understand user behavior, traffic sources, and conversion rates.
  - Tracking events refers to capturing specific user actions (e.g., clicks, form submissions, page views) to gain insights into user engagement and performance. This data can be used to optimize user experience, improve conversion rates, and inform business decisions.
  - Common tools for web analytics and event tracking include Google Analytics, Mixpanel, Amplitude, and Segment.

---

## FE Frameworks

### Vue

- **What is Vue.js?**

  - Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, meaning you can use it to enhance existing projects or build new applications from scratch. Vue.js focuses on the view layer and provides a reactive data binding system, making it easy to create interactive and dynamic web applications.

- **What are the key features of Vue.js?**
  - **Reactive Data Binding:** Vue.js provides a reactive data binding system that automatically updates the DOM when the underlying data changes, making it easy to create dynamic user interfaces.
  - **Component-Based Architecture:** Vue.js encourages the use of reusable components, allowing developers to encapsulate functionality and styles in self-contained units.
  - **Directives:** Vue.js provides built-in directives (e.g., `v-if`, `v-for`, `v-bind`) that allow developers to manipulate the DOM declaratively.
  - **Single-File Components:** Vue.js supports single-file components (SFCs) that combine HTML, CSS, and JavaScript in a single file, promoting better organization and maintainability.
  - **Vue Router:** A powerful routing library for managing navigation and URL handling in Vue.js applications.
  - **Vuex:** A state management library for managing application state in a centralized store, making it easier to share data between components.
