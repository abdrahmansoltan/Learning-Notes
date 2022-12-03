# INDEX

- [INDEX](#index)
  - [Css Framework](#css-framework)
  - [Bootstrap](#bootstrap)
  - [Examples](#examples)
  - [Installation](#installation)
    - [Download Files](#download-files)
  - [Colors](#colors)
    - [Font Color](#font-color)
    - [Background Color](#background-color)
  - [Buttons](#buttons)
    - [Button size](#button-size)
  - [Typography](#typography)
    - [Headings](#headings)
    - [Text Alignment](#text-alignment)
  - [Jumbotron](#jumbotron)
  - [Layouts](#layouts)
    - [Breakpoints](#breakpoints)
    - [Container](#container)
    - [Grid System](#grid-system)
    - [Columns](#columns)
    - [Gutters (gaps)](#gutters-gaps)
  - [Notes](#notes)

---

## Css Framework

A CSS framework is a library allowing for easier, more standards-compliant web design using the Cascading Style Sheets language. Most of these frameworks contain at least a grid. More functional frameworks also come with more features and additional JavaScript based functions, but are mostly design oriented and focused around interactive UI patterns. This detail differentiates CSS frameworks from other JavaScript frameworks.

- CSS frameworks offer different modules and tools:

  - reset style sheet
  - grid especially for responsive web design
  - web typography
  - set of icons in sprites or icon fonts
  - styling for tooltips, buttons, elements of forms
  - parts of graphical user interfaces like accordion, tabs, slideshow - or modal windows (Lightbox)
  - equalizer to create equal height content
  - often used CSS helper classes (left, hide)

---

## Bootstrap

- **The Good:**
  - Fast Development -> They provide code that you just don’t need to write from scratch every time, like `resets`.
  - Browser Compatibility -> They relieve cross-browser concerns.
  - It helps you build good habits.
    - Like including a print stylesheet in your projects.
  - Responsive Layouts -> They encourage grid based design.
    - Which is a good thing. Grids don’t mean boring! They just help you achieve better readability, scalability, balance visual weight, flexibility, expandability, and just overall page page cohesiveness.
  - They come with documentation.
- **The Bad:**
  - They can be bloat.
    - There may be CSS styles set up in a framework to accommodate tons of different layouts that you’ll never use. If you are concerned about every byte of a web page, you are going to end up doing a lot of stripping away of unused code, which ruins the point of the framework.
- Bootstrap 4 vs 3
![bootstrap](./img/bootstrap4.png)

---

## Examples

[Bootstrap 5 Interactive CheatSheet](https://bootstrap-cheatsheet.themeselection.com/)
[Bootstrap 5 Learning Kit](./Bootstrap-Learning%20Kit/index.html)

---

## Installation

![installation](./img/bootstrap-installation.png)

### Download Files

- Compiled CSS and JS

  - ready-to-use compiled code to easily drop into the project.
  - usually use:
    - `bootstrap.min.css`
    - `bootstrap.bundle.min.js`

- Source files
  - Compiling Bootstrap with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling
  - here, we will need to manually select the files we want to copy to our project directory:
    - css folder has different `.css` files to choose from
    - js folder has different `.js` files to choose from
    - sass folder has different `.scss` files to choose from
  - ex:

    ```sh
    bootstrap/
    ├── dist/
    │   ├── css/
    │   └── js/
    ├── docs/
    │   └── examples/
    ├── js/
    └── scss/

    # ------------------------------------------------------------ #

    bootstrap/
    ├── css/
    │   ├── bootstrap.css
    │   ├── bootstrap.css.map
    │   ├── bootstrap.min.css
    │   ├── bootstrap.min.css.map
    │   ├── bootstrap-grid.css
    │   ├── bootstrap-grid.css.map
    │   ├── bootstrap-grid.min.css
    │   ├── bootstrap-grid.min.css.map
    │   ├── bootstrap-reboot.css
    │   ├── bootstrap-reboot.css.map
    │   ├── bootstrap-reboot.min.css
    │   └── bootstrap-reboot.min.css.map
    └── js/
        ├── bootstrap.bundle.js
        ├── bootstrap.bundle.min.js
        ├── bootstrap.js
        └── bootstrap.min.js
    ```

---

## Colors

### Font Color

- here colors-classes don't explicitly mention the color, but they mention the state, which then we can modify color for each state with utilities
  ![bootstrap-colors](./img/bootstrap-colors.webp)
- Ex:

  ```html
  <h1 class="text-primary"></h1>
  ```

---

### Background Color

  ![bootstrap-colors](./img/bootstrap-colors1.png)

---

## Buttons

![bootstrap-buttons](./img/bootstrap-buttons.png)
Bootstrap includes several predefined styles, each serving its own semantic purpose, with a few extras thrown in for more control.

- these classes also work with `<a>` tags
- Ex:

  ```html
  <button class="btn btn-primary"></button>
  ```

### Button size

Add `.btn-lg` or `.btn-sm` for additional sizes.

```html
<button type="button" class="btn btn-primary btn-lg">Large button</button>
```

---

## Typography

### Headings

- Normal headings -> `h1` to `h6`

  ```html
  <h1>h1. Bootstrap heading</h1>
  <!-- Or -->
  <p class="h1">h1. Bootstrap heading</p>
  ```

- Display headings
  - Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a display heading—a larger, slightly more opinionated heading style.

  ```html
  <h1 class="display-1">Display 1</h1>
  ```

### Text Alignment

Use text utilities as needed to change the alignment of your text.

```html
<p class="text-center">content</p>
```

---

## Jumbotron

Lightweight, flexible component for showcasing **hero** section unit style content.

```html
<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
```

- To make the jumbotron full width, and without rounded corners, add the `.jumbotron-fluid` modifier class and add a `.container` or `.container-fluid` within.

---

---

## Layouts

### Breakpoints

Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.

- Breakpoints are the building blocks of responsive design. Use them to control when your layout can be adapted at a particular viewport or device size.
- Use **media queries** to architect your CSS by breakpoint.
  - Media queries are a feature of CSS that allow you to conditionally apply styles based on a set of browser and operating system parameters.
  - We most commonly use `min-width` in our media queries.
- **Mobile first**, responsive design is the goal. Bootstrap’s CSS aims to apply the bare minimum of styles to make a layout work at the smallest breakpoint, and then layers on styles to adjust that design for larger devices.
  - This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.

- Bootstrap is broken into 6 different breakpoints sometimes referred to as **"grid tiers"**, for building responsively.

  - These breakpoints can be customized if you’re using our source `Sass` files.

  ![Breakpoints](./img/breakpoints.PNG)
  ![breakpoints](./img/Bootstrap-4-Breakpoints.png)

### Container

inside it you determine the `max-width`

- **fluid**: no max width -> will take `100%` of the width
  - ex: `class="container-fluid"`

### Grid System

- 12 Columns in the grid
- 6 grid tiers based on minimum width
- `col` classes with device-infixes and numbers -> **Breakpoint & with of column**
  - if not specified the col takes `1fr`
  - `"col-lg-3 col-md-6"`: means that the column will take 3 spans on **large screens** and 6 spans on **medium screens**
- You can use the number on the **row itself** and it will apply to all columns inside it
- You can nest a grid inside of a grid (row inside a row)

### Columns

- you can **offset** the column by how many cols you want
  - ex: `class="col-3 offset-4"`

align, justify, wrapping, order, ...

### Gutters (gaps)

it goes from **1** (smallest) to **5** (biggest)

- `g`: for gap in both axises
- `gx`: column-gap (x-axis) -> ex; `class="gx-4"`
- `gy`: row-gap (y-axis)

---

## Notes

- remember that whenever you want to use a utility-modifier to a class, we need to use the class in combination with the modifier

  ```html
  <!-- Wrong -->
  <div class="container-fluid"></div>

  <!-- correct -->
  <div class="container container-fluid"></div>
  ```
