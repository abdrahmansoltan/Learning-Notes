# INDEX

- [INDEX](#index)
  - [When to use Sass over CSS](#when-to-use-sass-over-css)
  - [Preprocessing](#preprocessing)
    - [SCSS vs SASS](#scss-vs-sass)
  - [Architecture](#architecture)
    - [Partials](#partials)
    - [Importing](#importing)
  - [Variables](#variables)
    - [css variables vs sass variables](#css-variables-vs-sass-variables)
  - [Placeholder](#placeholder)
  - [Control-flow](#control-flow)
  - [Comments](#comments)
  - [Interpolation](#interpolation)
  - [Loop](#loop)
  - [Mixins](#mixins)
    - [Mixins null values](#mixins-null-values)
    - [passing declaration block (like slots)](#passing-declaration-block-like-slots)
  - [Operators](#operators)
  - [Sass in BEM](#sass-in-bem)

---

## When to use Sass over CSS

in general

- it depends on many factors like
  - team preference
  - browser support

variables:

- use sass for global values that don't typically change: `color`, `font-family`, etc
- use **custom properties** for values that will change in the media queries: `font-size`, `margin`, `padding`, `widths`, `flex-basis`, etc

---

## Preprocessing

Sass is a CSS preprocessor, an extension of CSS that
adds power and elegance to the basic language.

Sass has features that don't exist in CSS yet like nesting, mixins, inheritance that help you write robust, maintainable CSS.

- Once Sass is installed, you can compile your Sass to CSS using the sass command. You'll need to tell Sass which file to build from, and where to output CSS to.

  ```sh
  sass --watch input.scss output.css
  ```

### SCSS vs SASS

![scss](./img/sass-scss.jpg)

---

## Architecture

- **7-1** pattern ![7-1 pattern](./img/sass-architecture.jpg)

### Partials

These're scss files that starts with `_`, ex: `_layout.scss`

- partials are designed to be **imported** into other scss files and they **won't become css files** by themselves
- sass will ignore any file that starts with `_`
- The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file.
- Sass partials are used with the @use rule.

### Importing

- old: `@import ""`
- new: `@use ""`

> **Note**: thing imported will be accessible only in the scope it was imported in

---

## Variables

![scss variables](./img/sass-variables.png)

- starts with `$`
- there's global and local variables
  - you can **convert local** variables to **global variables** with `!global`
  - `!default` -> means that it will be used if the variable isn't declared in the file with different value

```scss
$primary-color: #eee !global;
```

### css variables vs sass variables

![variables comparison](./img/css-variables1.png)
![variables comparison](./img/css-variables2.png)

---

## Placeholder

- it's like inheritance in OOP
- it's like [Mixins](#mixins) but without parameters
- `@extend` in Sass that allows for sharing of CSS properties from one selector to another.

```scss
%main-box {
  // code
}

.article {
  @extend %main-box;
  // rest of code
}

// it can also work with normal selectors
.btn {
  // code
}

.btn-danger {
  @extend .btn;
}
```

---

## Control-flow

![sass-control_flow](./img/sass-control_flow.png)

```scss
.main {
  @if $theme == "light" {
    // code
  } @else {
    // code
  }
}
```

---

## Comments

- `//` -> won't show in css file
- `/* */` -> will show in css file

---

## Interpolation

It's like function with arguments

```scss
$company == "google";

.ad #{$company}{
  // code
  background-image:url('img/#{$company}.png');
  // code
}
```

---

## Loop

```scss
@for $i from 1 through 10 {
  .class-#{$i} {
    font-size: #{$i + 10px};
  }
}

$mylist: 0 0 2px #000;
.foo{
  @each $i in $mylist {
    // code
  }
}
```

---

## Mixins

It's like a variable for a block of style-code (allow for re-use of style)

- A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. It helps keep your Sass very **DRY**.
- mixins are used using `@include`
- You can even pass in values (**arguments**) to make your mixin more flexible.
  - this is one of the main purposes of mixin
  - if you want to re-use a block of style without **arguments**, you should use [Placeholder](#placeholder)

```scss
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, 0.25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
```

### Mixins null values

if mixin has a property that doesn't apply to a specific element, the element will only take what is possible and ignore the null values

![mixins-null_values](./img/mixins.png)

### passing declaration block (like slots)

You can pass declaration block inside the mixin when invoking it using `@content`
![mixins-blocks](./img/mixins-blocks.png)

---

## Operators

Doing math in your CSS

```scss
@use "sass:math";

.container {
  display: flex;
}

article[role="main"] {
  width: math.div(600px, 960px) * 100%;
}

aside[role="complementary"] {
  width: math.div(300px, 960px) * 100%;
  margin-left: auto;
}
```

---

## Sass in BEM

![sass-BEM](./img/sass-bem.png)
