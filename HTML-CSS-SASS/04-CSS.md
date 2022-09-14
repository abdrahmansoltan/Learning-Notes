## INDEX

- [INDEX](#index)
- [styling Types](#styling-types)
- [selectors](#selectors)
  - [`[attribute]` Selector](#attribute-selector)
  - [css selector specificity](#css-selector-specificity)
    - [Calculation](#calculation)
    - [Selectors Notes](#selectors-notes)
- [styling (hyperlinks / buttons)](#styling-hyperlinks--buttons)
- [Box Model](#box-model)
- [Display](#display)
  - [pseudo Elements/Classes](#pseudo-elementsclasses)
- [Color](#color)
  - [HSL Colors](#hsl-colors)
- [Font](#font)
  - [TypeFaces](#typefaces)
    - [Units of Type Size](#units-of-type-size)
  - [Alignment](#alignment)
  - [Font Notes](#font-notes)
- [Box Shadow](#box-shadow)
- [images](#images)
  - [background image property](#background-image-property)
    - [background property](#background-property)
  - [background size property](#background-size-property)
  - [image filter](#image-filter)
  - [clip-path](#clip-path)
- [LAYOUTS](#layouts)
  - [Fixed width vs Liquid Layouts](#fixed-width-vs-liquid-layouts)
  - [Position](#position)
  - [Float](#float)
  - [Flexbox](#flexbox)
    - [flex-wrap](#flex-wrap)
  - [GRID](#grid)
    - [Old Grid (960 pixel grid)](#old-grid-960-pixel-grid)
    - [CSS3 Grid](#css3-grid)
- [Variables (custom properties)](#variables-custom-properties)
  - [Variables inheritance](#variables-inheritance)
  - [Invalid At Computed Values Time (IACVT)](#invalid-at-computed-values-time-iacvt)
  - [variables token: Number, string, images](#variables-token-number-string-images)
  - [Css variables with Javascript](#css-variables-with-javascript)
- [calc()](#calc)
  - [Advantages](#advantages)
- [icons - SVG](#icons---svg)
- [Animation](#animation)
  - [What to animate?](#what-to-animate)
  - [transition](#transition)
    - [Animating background](#animating-background)
  - [Animation Keyframes](#animation-keyframes)
    - [choreograph](#choreograph)
  - [data state](#data-state)
  - [Animation Notes](#animation-notes)
- [data attributes](#data-attributes)
- [Table](#table)
- [Form](#form)
- [media queries](#media-queries)
- [Scrolling](#scrolling)
- [Modules (multiple style sheets)](#modules-multiple-style-sheets)
- [Notes](#notes)

---

## styling Types

1. inline style
2. internal style
3. external style

> **Cascading**: Process of combining different stylesheets and resolving conflicts between different CSS rules and declarations, when more than one rule applies to a certain element.
>
> - **cascade** is the algorithm for solving conflicts where multiple CSS rules apply to an HTML element.

---

## selectors

- Type(element) selectors => p,div,..
- Class selectors
- ID selectors
- descendant selectors => selector in a selector, ex: `p em`
- **Examples** from [reference](https://www.w3schools.com/cssref/css_selectors.asp)

  - `.name1.name2` => Selects all elements with both name1 and name2 set within its class attribute
  - `p.intro` => Selects all `<p>` elements with class="intro"
  - `div > p` => Selects all `<p>` elements where the parent is a `<div>` element (direct child)
  - `div p` => Selects all `<p>` elements where the parent is a `<div>` element (even if there are other elements nested between them)
  - `div + p` => Selects the first `<p>` element that is placed **immediately** after `<div>` elements
  - `p ~ ul` => Selects every `<ul>` element that is preceded by a `<p>` element (siblings)
    - **All** `<ul>` after `<p>`
  - `[target]` => Selects all elements with a target attribute
  - `:not(p)` => Selects every element that is not a `<p>` element
  - `:nth-child(n)` => [nthmaster](http://nthmaster.com/)
  - `owl selector` -> applies to the elements with is not the first one
    ![owl-selector](./img/owl-selector.png)

### `[attribute]` Selector

- `[]` selector -> Matches a specific attribute (whatever its value)
  - ex: `p[class]`
- `[=]` selector -> Matches a specific attribute with a specific value
  - ex: `p[class="dog"]`
- `[~=]` selector -> Matches a specific attribute whose value appears in a space-separated list of words
  - ex: `p[class~="dog"]`
- `[*=]` selector -> Matches a specific attribute whose value contains a specific substring
  - ex: `p[attr*"do"]`
- `[$=]` selector -> Matches a specific attribute whose value **ends** with a specific string
  - ex: `p[attr$"g"]`
- The `[attribute^=value]` selector matches every element whose attribute value **begins** with a specified value.

  ```css
  div[class^='test-'] {
    background: #ffff00;
  }
  ```

### css selector specificity

If there are two or more CSS rules that point to the same element, the selector with the highest specificity value will "win", and its style declaration will be applied to that HTML element.

#### Calculation

- Start at 0
- add 100 for each ID value
- add 10 for each class value (or pseudo-class or attribute selector)
- add 1 for each element selector or pseudo-element.

![specificity](./img/specificity.svg)
![specificity](./img/specificity2.png)

#### Selectors Notes

- `*` has **no specificity** and gets **0 points**.
- `!important` gets a specificity score of **10,000 points**. This is the highest specificity that one individual item can get.

- Specificity in CSS only concerns selectors, not their associated declarations. **!important** applies to a declaration, so it alone plays no role in specificity.

---

## styling (hyperlinks / buttons)

Always use these (pseudo classes) with `<a>`, `<button>` elements:

- `a:link` => `<a>` that have link in its **href** and hasn't yet been visited
- `a:visited` => `<a>` that has been clicked on
- `a:hover` => `<a>` when we are **hovering**
- `a:active` => `<a>` when we are **clicking**
- `a:focus` => `<a>` when we are **tab focusing**

---

## Box Model

- margin can be negative as it's related to the surrounding elements and not the element itself
- **auto margin trick**: ![autoMargin](./img/autoMargin.png)
- **outline** is outside of the margin (and it may overlap with other elements)
- inline elements respect padding & margin **only** for (right/left)
- to make global reset for margin/padding => use `*` and not `body`
- **Collapsing margins** : it's when we have 2 margins(only vertical margins) that occupied the same space, so only one of them will be visible to the page which is the larger one and **not** their sum ![Margin Collapse](./img/MarginCollapse.png)
  - this is not the same for **padding** as they get added together
- **Border collapse** : sets whether table borders should collapse into a single border or be separated as in standard HTML => `border-collapse: separate;` ![border collapse](./img/border-collapse.png)
- between sections use padding not margin

> **THE VISUAL FORMATTING MODEL**: Algorithm that calculates boxes and determines the layout of theses boxes, for each element in the render tree, in order to determine the final layout of the page.

---

## Display

- `visibility:hidden` => hide the element but reserves it's place (leaves a space where the element would have been)
- `display:none` => hide the element and hide it's place

  - _note_ => it doesn't work for `animation/transition` (for Javascript usually), instead use:

    ```css
    /* ALL THESE FOR MIMIKING [display:none;] */

    /* 1) Hide it visually */
    opacity: 0;

    /* 2) Make it unaccessible to mouse and keyboard */
    pointer-events: none;

    /* 3) Hide it from screen readers */
    visibility: hidden;
    ```

- `display: block` --> can be used to make `<a>` element take full width of its container -> for user clicking accessibility
- `display: inline-block` --> causes a block-level element to flow like an inline element, while retaining other features of a block-level element.

### pseudo Elements/Classes

- _note_ : **pseudo elements** are inline elements, so you can convert them to `inline-block` to control padding
- _note_ : you can't add **pseudo elements** like `::before` to `img` element, instead use it on a `div` that contains the `img`
- _note_ : you can't hover on something that have a negative `z-index`
- _note_ : when you have a sliding item (animate from right to center like a **sidebar**) => use this :

  ```css
  body,
  html {
    overflow-x: hidden;
  }
  ```

- when you have `pseudo element` like `::before` that has no content, you have 2 choices :

  - `width` / `height` in `px,rem`
  - `width` / `height` in `%` relative to the **parent element**

  - for this we use padding-top/bottom to simulate height
    ![pseudo element](./img/pseudo%20element.PNG)

    ```css
    /* outer circle */
    .step-img-box::before {
      width: 60%;

      this mimik -> "height: 60%;"
      padding-bottom: 60%;

      background-color: #fdf2e9;
      z-index: -2;
    }
    ```

> You can use `::before` and `::after` to write content after repeated elements like in **tables** or **lists**
>
> - like unit after the number -> **kg**, **meter**,...
> - like words before number -> **weight:**, **length:**,...
>
> ```css
> td:nth-of-type(3)::after {
>   content: 'kg';
> }
> ```

---

## Color

![color](./img/color.png)

### HSL Colors

It's a way to specify colors using **hue**, **saturation**, and **lightness** values.
![hsl](./img/hsl.png)

```css
body {
  background-color: hsl(0, 0%, 78%);
}

p {
  /* hsla color property adds a fourth value which represents transparency (a for alpha). */
  background-color: hsla(0, 100%, 100%, 0.5);
}
```

---

## Font

### TypeFaces

> When choosing a typeface, it is important to understand that a browser will usually only display it if it's installed on that user's computer.

![typeFace](./img/typeface.png)

- Browsers are supposed to support at least one typeface from each of the groups above. For this reason, it is common to add the generic font name after your preferred choice of typefaces.

  - For example, if you wanted **serif type**:

    ```css
    font-family: Georgia, Times, serif;
    ```

- `@font-face` -> allows you to use a font, even if it is not installed on the computer of the person browsing, by allowing you to specify a path to a copy of the font, which will be downloaded if it is not on the user's machine.

  ```css
  @font-face {
    font-family: 'ChunkFiveRegular';
    src: url('fonts/chunkfive.eot');
  }
  h1,
  h2 {
    font-family: ChunkFiveRegular, Georgia, serif;
  }
  ```

  - Google also provides open source fonts. Rather than adding the `@font-face` rule to your own style sheet, you link to a CSS file and font files on their servers

- to make text `uppercase / lowercase / capitalize`, you can use `text-transform` property

#### Units of Type Size

- Setting font size in **pixels** is the best way to ensure that the type appears at the size you intended (because percentages and ems are more likely to vary if a user has changed the default size of text in their browser).

  - You can also use pt for point sizes instead of px for pixels, but you should only do this when creating style sheets for printer-friendly versions of pages.

- `line-height` is a term to control **Leading (pronounced ledding)**

  - it is a term typographers use for the vertical space between lines of text.
  - In a typeface, the part of a letter that drops beneath the baseline is called a **descender**, while the highest point of a letter is called the **ascender**. Leading is measured from the bottom of the descender on one line to the top of the ascender on the next.
    ![leading](./img/leading.png)
  - Increasing the line-height makes the vertical gap between lines of text larger.
  - if we didn't use a unit then it's relevant to the **font size**

- `letter/word-spacing` : **Kerning** is the term typographers use for the space between each letter. You can control the space between each letter with the letter-spacing property.
  - When you specify a value for these properties, it should be given in **em**
    - The default gap between words is set by the typeface around `0.25em`

---

### Alignment

- `vertical-align`:
  - is a common source of confusion. It is not intended to allow you to vertically align text in the middle of block level elements such as `<p>` and `<div>,` **although** it does have this effect when used with **table cells** (the `<td>` and `<th>` elements).
  - It is more commonly used with inline elements such as `<img>,` `<em>,` or `<strong>` elements. When used with these elements, it performs a task very similar to the HTML align attribute used on the `<img>` element

---

### Font Notes

- `white-space: no wrap` => this forces it to automatically go to next line when reaching max-width
- `text-overflow:ellipsis` => when text passes the max-width, it shows this `...`at the max-width limit as indication of more text available
- in the `html` element we set the `font-size` to 62.5% and not 10px => because we want to respect the user's font-size settings.
- `rem` (root element) vs `em` (parent element) : ![rem-em](./img/rem-em.png)
  - **em** ->
    - em are measured relative to their **parent font-size**, if used to specify **font-size**
    - em are measured relative to the **current font-size within element**, if used to specify **lengths (spacing)**
      - as length/gap/spacing using `em` in `<p>` will be smaller than in `<h1>`
  - **rem** -> is relative to the html (root) font-size
- for more fun font use => [Rubik](https://fonts.google.com/specimen/Rubik)

![units](./img/units.PNG)

For font-size scales -> [type-scale.com](https://type-scale.com/)

---

## Box Shadow

![shadow](./img/shadow.webp)

- `x-offset`: means in x-direction (horizontal)
- `y-offset`: means in y-direction (vertical)
- `blur-radius`: strength of blueness (Optional)
  - If omitted, the shadow is a solid line like a border
- `spread-radius`: expand or grow the radius of the shadow in all directions (Optional)
- `color`: the color of box-shadow (Optional)
- `inset` to add border from the inside and not outside (Optional) => ex:

```css
box-shadow: inset 0 0 0 3px #fff;
```

---

## images

### background image property

- By default, a background image will repeat to fill the entire box. to control that, you can use `background-repeat` property

  ```css
  body {
    background-image: url('images/header.gif');
    background-repeat: repeat-x;
    /* or: The image is only shown once.
    background-repeat: no-repeat;
    */
  }
  ```

  - When an image is not being repeated, you can use the `background-position` property to specify where in the browser window the background image should be placed.

    - This property usually has a pair of values. The first represents the horizontal position and the second represents the vertical. -> ex:

      ```css
      body {
        background-image: url('images/tulip.gif');
        background-repeat: no-repeat;
        background-position: 50% 0%;
        /* or */
        background-position: center top;
      }
      ```

      - If you only specify one value, the second value will default to **center**.

- the `background-attachment` property specifies whether a background image should stay in one position or move as the user scrolls up and down the page. It can have one of two values:

  - `fixed`
  - `scroll`

- we have the ability to specify a **gradient** for the background of a box. The gradient is created using the `background-image` property:

  ```css
  div {
    /* background image (with darkening-overlay) */
    background-image: linear-gradient(rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.6)), url(hero.jpg);
  }
  ```

- when you have an empty div that have a `background-image` and want to make it available for screen readers for **SEO** -> add these attributes: [`role`, `aria-label`], ex:

  ```html
  <div class="cta-img-box" role="img" aria-label="Woman enjoying food ></div>
  ```

#### background property

The background property acts like a shorthand for all of the other background properties you have just seen, and also the background-color property

```css
body {
  background: #ffffff url('images/tulip.gif') no-repeat top right;
}
```

---

### background size property

- `background-size` property :
  ![backgroundSize](./img/background-size-cover-contain.svg)

- **contain** : Scale the image, while preserving its intrinsic aspect ratio (if any), to the largest size such that both its width and its height can fit inside the background positioning area.
- **cover** : Scale the image, while preserving its intrinsic aspect ratio (if any), to the smallest size such that both its width and its height can completely cover the background positioning area.

- `img` is an **inline element**, so it's effected by `text-align`

---

### image filter

- change color of image from `filter` property

  - make image color **black** => `filter: brightness(0);`
  - make image color **grey** =>

    ```css
    filter: brightness(0);
    opacity: 50%;
    ```

  - also you can try `filter: greyscale/blur/invert`

---

### clip-path

- `clip-path` => [clippy](https://bennettfeely.com/clippy/)
  ![clip-path](./img/clip-path.webp)

---

## LAYOUTS

### Fixed width vs Liquid Layouts

- **Fixed width layout** : designs do not change size as the user increases or decreases the size of their browser window. Measurements tend to be given in **pixels**.
  ![fixed layout](./img/fixed-layout.png)
- **Liquid layout** : designs stretch and contract as the user increases or decreases the size of their browser window. They tend to use **percentages**.
  ![liquid layout](./img/liquid-layout.png)

---

### Position

- `position: static;` is the default value
- **Relative positioning :** moves an element in relation to where it would have been in normal flow.
- `position: fixed;` is a type of **absolute positioning**
- **stacking context** --> `z-index` : as if the blocks have been stacked on top of each other on a z axis

---

### Float

- float is sometimes used to create Multi-Column Layouts

  ```css
  .column1of3,
  .column2of3,
  .column3of3 {
    width: 300px;
    float: left;
    margin: 10px;
  }
  ```

- `float:left` => means tha the element will be on the left and the elements after it will **flow** around it from its right ![float](./img/float.png)
- **IMPORTANT**: when element is floating it acts like it's not in the page like `position:absolute`, this means that if the element next to it has padding => the padding will override the floating element and not start at its end.
- **Collapse Height**:
  - If this parent element contained only contains floated elements, some browsers will treat it as if it is zero pixels tall (**the height of it would literally collapse to nothing**). This isn’t always obvious if the parent doesn’t contain any visually noticeable background, but it is important to be aware of. ![collapse](./img/collapseFloat.webp)
  - 2 solutions:
    - to fix it we use `clear:both` on the parent element
    - to fix it we use `clear:both` on the parent element
- The `clear` property allows you to say that no element (within the same containing element) should touch the left or right-hand sides of a box.
- `Clear` has four valid values (**it's like to ignore any floated item from specified direction**):
  - `Both` is most commonly used, which clears floats coming from either direction.
  - `left`
  - `right`
  - `None` is the default (Elements can touch either side)
    ![clear](./img/clear.webp)
- we use `clear` property when we want the surrounding element to not be floated around element with a `float` property
- there's a new way to clear float --> `display: flow-root`
  - The element generates a **block container** box, and lays out its contents using flow layout. It always establishes a new block formatting context for its contents. It provides a better solution to the most use cases of the "clearfix" hack.
  - It always establishes a new block formatting context for its contents.

---

### Flexbox

- default value for `align-items` is **stretch**
- for flexItems => `flex-grow/shrink` if set to zero, this means that the item is not allowed to grow/shrink
- **justify-content**:
  ![flex-justify-content](./img/flex-justify-content.png)
- **flex-basis** -> use it instead of `width` for **flex-items**:
  - for flexItems => `flex-basis` is used as a width-percentile if row-direction, and a height if column-direction, (by default it's set to `auto`)
  - for flexItems => try not to use `width` and use `flex-basis` with remembering that if it doesn't work that means that the `flex-shrink` is set to 1 not 0
    ![basis](./img/flex-basis1.gz)
    ![basis](./img/flex-basis2.gz)
- flex containers act as a **Block element**, so note this when you apply it to a small item in order to center its contents, you can change it using `display: inline-flex`

#### flex-wrap

It defines whether the flex items are forced in a single line or can be flowed into multiple lines (**wrapped into new line**). If set to multiple lines, it also defines the cross-axis which determines the direction new lines are stacked in.

> The **cross axis** is the axis perpendicular to the main axis.

- **nowrap** (default): single-line which may cause the container to overflow
  ![wrap](./img/nowrap.PNG)
  - It means that when the end of line is reached, make the items smaller to fit the line together
- **wrap**: multi-lines, direction is defined by flex-direction
  ![wrap](./img/wrap.PNG)
  - It means that when the end of line is reached, make the items keep their width and go to next line
- **wrap-reverse**: multi-lines, opposite to direction defined by flex-direction
  ![wrap](./img/wrap-reverse.PNG)

---

### GRID

#### Old Grid (960 pixel grid)

- It's a 960 pixel wide, 12 column grid, each of which is is **60 pixels** wide
- Each column has a margin set to 10 pixels, which creates a a gap of **20 pixels** between each column and 10 pixels to the left and right-hand sides of the page.

![960 grid](./img/960-grid.png)

**CSS frameworks** aim to make your life easier by providing the code for common tasks, such as creating layout grids,

- They save you from repeatedly writing code for the same tasks.
- They will have been tested across different browser versions (which helps avoid browser bugs).

---

#### CSS3 Grid

- some css grid terms:

  - **gutter**: another name for the gap.
  - **grid track**: multiple connected grid cells

- instead of px or fr you can use `minmax()` => ex: `minmax(20px, auto)`

  - It's used to prevent grid cells from gitting too **small** / **big**
  - note: using a 1fr as the max value will ensure that the track expands and takes up the available space
  - `minmax` can’t handle responsive design by itself. We need to handle that by ourselves

- `grid-area` property specifies a grid item's size and location in a grid layout

  - `grid-area: 2 / 1 / span 2 / span 3;` => start on row 2 column 1, and span 2 rows and 3 columns

- `grid-template-areas` is used to name the rows and columns of a grid and to set its layout, **then** you assign the named area to each element according to whare you want it to be shown on the grid , this is done by => `grid-area`

  - if there is a column you want it to be empty => use `.` instead of the area name

- `auto` vs `fr`

  - `auto` is shy (just takes the required space that fits its content)
  - `fr` is greedy (take the remaining space available)

- `fr` could be used with any values to determine relationship between rows/columns like:

  ```css
  grid-template-columns: 55fr 45fr;
  ```

- if you don't know the size of page but you know the number of columns:

  ```css
  grid-template-column: repeat(auto-fill, minmax(200px, 1fr));
  ```

- **overlapping grid items**:
  - Grid allows cells to overlap with each other
    ![overlapping grid items](./img/overlapping%20grid%20items.png)

---

## Variables (custom properties)

- they're also called **custom properties**
  - they're called like that as they act as css-properties where they're `inherited` and they `cascade` (override based on specificity)
- usually in the `:root` selector
  - because the `:root` pseudo-class selector resolve to the `<html>` element which includes all elements and pseudo elements in the **DOM** unlike `*` selector
    - in **HTML** --> `:root`=`html` but with higher specificity
- when using the variable, I can use a **Fall-back variable/ value** after a **comma** (`,`) and you can make many fallbacks => ex:

  ```css
  div {
    color:var(--primary,black)

    /* to request the fallback value manually -> use (initial) */
    color: initial
  }
  ```

- rules of **scope** like in Javascript also applies in css variables, but:
  - Sass variables are scoped on `{}` blocks (**block-scoped**) (**lexical-scoped**)
  - css variables are scoped on elements (**element-scoped**) (**dynamic-scoped**)
    - this is great if you want the variable-value to only be applied in this element only

```css
:root {
  --main-bg-color: coral;
}

#div1 {
  background-color: var(--main-bg-color);
}
```

---

### Variables inheritance

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

- you can disable inheritance by setting the property to `initial` on `*`

  ```css
  * {
    --corner-size: initial;
  }

  p {
    --corner-size: 1em;
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

### Invalid At Computed Values Time (IACVT)

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

### variables token: Number, string, images

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

### Css variables with Javascript

You can **get / set** css-variable-value of an element in javascript by having the variable declared in the root before, then change it's value locally in the element styles:

```js
// Get variable from inline style
element.style.getPropertyValue('--foo')

// Get variable from wherever
getComputedStyle(element).getPropertyValue('--foo')

// Set variable on inline style
element.style.setProperty('--foo', 38 + 4)

// --------------------------------------------------- //

// or change it in the root element
let root = document.documentElement

document.addEventListener('pointermove', evt => {
  let x = evt.clientX / innerWidth
  let y = evt.clientY / innerHeight
  root.style.setProperty('--mouse-x', x)
  root.style.setProperty('--mouse-y', y)
})
```

---

## calc()

it's the ability to do math in css

- compatible with `length`, `frequency`, `angle`, `time`, `number` and `integer`

### Advantages

- can mix different units when performing calculations (not possible in `Sass`)

  ```css
  .thing {
    width: 60%; /* fallback if needed */
    width: calc(100% -3em);
  }
  ```

- make math easier to understand

  ```css
  /* instead of this*/
  .column-1-7 {
    width: 14.2857%;
  }

  /* we can do this*/
  .column-1-7 {
    width: calc(100% / 7);
  }
  ```

---

## icons - SVG

- [Hero Icons](https://heroicons.com/) here we use `stroke` or `fill` properties **not** color
- [Ionicons](https://ionic.io/ionicons) here we use `color` property

---

## Animation

### What to animate?

note that animation in an expensive process of CPU/GPU and specially on CPU, so these are some guidelines:

- ✅ -> `transform`, `opacity`
- 🤞 -> `color`, `background`
- ❌ -> `height`, `width`, `left`, `right`, `margin`, `padding` etc (**things that trigger layouts**)
  - instead use `transform: translate()`

---

### transition

- `transition` property consists of multiple properties:

  - `transition-property`
  - `transition-delay`
  - `transition-duration` -->

    - it can have different values for different transition-properties which can be declared in the state which happens

      ```css
      button:active {
        transition-duration: 0.5;
        opacity: 1;
      }
      ```

    - must specify the unit (`s`), even it's zero seconds

  - `transition-timing-function` --> default value: `ease`

#### Animating background

you can't use `background` with `transition` property, so if you want to animate the background you can use `box-shadow` with `inset` instead:

```css
button {
  transition: 1s;
}

button:hover {
  box-shadow: 0 0 0 2em red inset;
}
```

---

### Animation Keyframes

`keyframes` are different from `transition` as:

- they define what happens between state **A** and state **B**

- `animation` property consists of multiple properties:
  - `@keyframes`
  - `animation-name`
  - `animation-duration`
  - `animation-delay`
    - note that it's for each single `iteration`
  - `animation-iteration-count`
  - `animation-direction`
  - `animation-timing-function`
  - `animation-fill-mode`
    - `forwards` -> **stick to final state (100%)**
    - `backwards` -> go to initial state (0%) after finish
    - `both`

> **Notes**:
>
> - instead of writing different final state in `100%`, you can call it any name and use `to <name>`
> - to see animation for an element in **DevTools** -> **ctrl + shift + p** and type **animation**

#### choreograph

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

### data state

You can use `data-state` attribute to define state and make css values established based on current data-state

- you change data.state in Javascript which then reflects in the `data-state` HTML attribute, then define which css property will be shown

```css
.container[data-state='success'] {
  animation: slide-up 1s both;
}
```

---

### Animation Notes

- don't use hover or any effect without using `transition` property
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

## data attributes

**data attributes** are plain HTML attributes, you can access them from CSS.

- For example to show the parent data on the article you can use generated content in CSS with the `attr()` function:

- HTML :

  ```html
  <article id="electric-cars" data-columns="3" data-index-number="12314" data-parent="cars">
    ...
  </article>
  ```

- CSS

  ```css
  article::before {
    /* use value from data-attribute */
    content: attr(data-parent);
  }

  /* select element based on data-attribute */
  article[data-columns='3'] {
    width: 400px;
  }
  ```

> note: you can't set value of data attribute to **false** (in HTML or Javascript), instead you delete it

---

## Table

- **empty-cells :** If you have empty cells in your table, then you can use the `empty-cells` property to specify whether or not their borders should be shown.

  ```css
  table.one {
    empty-cells: show;
  }
  table.two {
    empty-cells: hide;
  }
  ```

  ![empty-cells](./img/empty-cells.png)

- **Gaps Between Cells :** The `border-spacing` property allows you to control the distance between adjacent cells. By default, browsers often leave a small gap between each table cell, so if you want to increase or decrease this space then the `border-spacing` property allows you to control the gap.

  ```css
  table.one {
    border-spacing: 5px 15px;
  }
  table.two {
    border-collapse: collapse;
  }
  ```

  ![cells-gaps](./img/cells-gaps.png)

---

## Form

- _note_ => `input`, `select`, `placeholder` don't inherit font properties from their parent, so you will have to do it manually using `inherit` for the value of the properties.

  ```css
  .cta-form input,
  .cta-form select {
    font-family: inherit;
    color: inherit;
  }
  ```

- to select the `input-placeholder` in css we use `pseudo element` --> `input::placeholder`

  ```css
  .cta-form input::placeholder {
    color: #aaa;
  }
  ```

---

## media queries

- before anything make sure that you write this in the `head`

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```

  Because without this meta, responsive web design won't work on physical mobile devices as their browser will zoom the page out by default until it fits the screen, and by writing this line of code we make sure that it will fit their screen width

- there's a value of `landscape / portrait` instead of `max-width` for **media queries**

- **Bugs** : `rem` and `em` do NOT depend on html font-size in **media queries**! Instead, 1rem = 1em = 16px => so use `em`

  ```css
  /* BELOW 1344px(84*16px) (Smaller desktops) */

  @media (max-width: 84em) {
    .hero {
      max-width: 120rem; // it's ok to use (rem) inside it as normal
    }
  }
  ```

we do breaks when **design breaks**
![responsive](./img/responsive.PNG)

---

## Scrolling

- **2 ways**

  - **using CSS** => (doesn't work on older versions of _safari_ )

    ```css
    html {
      scroll-behavior: smooth;
    }
    ```

  - **using JS** => (work with all)

    - add this library to html file (for safari)

      ````html
      <script
        defer
        src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
      ></script>
      ```
      ````

    - then in JS file :

      ```javascript
      const allLinks = document.querySelectorAll('a:link')

      allLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault()
          const href = link.getAttribute('href')

          // Scroll back to top
          if (href === '#')
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })

          // Scroll to other links
          if (href !== '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href)
            sectionEl.scrollIntoView({ behavior: 'smooth' })
          }
        })
      })
      ```

---

## Modules (multiple style sheets)

Some web page authors split up their CSS style rules into separate style sheets. For example, they might use one style sheet to control the layout and another to control fonts, colors and so on.

There are two ways to add multiple style sheets to a page:

- Your HTML page can link to one style sheet and that stylesheet can use the `@import` rule to import other style sheets.

  ```css
  @import url('tables.css');
  @import url('typography.css');
  body {
    color: #666666;
    background-color: #f8f8f8;
    text-align: center;
  }
  #page {
    width: 600px;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #d6d6d6;
    padding: 20px;
  }
  ```

  - If a styesheet uses the `@import` rule, it should appear before the other rules.

- In the HTML you can use a separate `<link>` element for each style sheet.

  ```html
  <head>
    <title>Multiple Style Sheets - Link</title>
    <link rel="stylesheet" type="text/css" href="css/site.css" />
    <link rel="stylesheet" type="text/css" href="css/tables.css" />
    <link rel="stylesheet" type="text/css" href="css/typography.css" />
  </head>
  ```

---

## Notes

- By default, most browsers add a margin to the top of the `<h1>` element. This is why there is a gap between the top of the browser and the box containing the `<h1>` element.
- to center an inline element on the page:

  ```css
  img.align-center {
    text-align: center;
  }

  /* or */
  img.align-center {
    display: block;
    margin: 0px auto;
  }
  ```
