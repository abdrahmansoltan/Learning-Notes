# INDEX

- [INDEX](#index)
  - [Figma](#figma)
  - [Build Blocks of Figma](#build-blocks-of-figma)
    - [Layers](#layers)
    - [Frames](#frames)
    - [Groups](#groups)
    - [Layout Grids](#layout-grids)
    - [Auto Layout](#auto-layout)
      - [Responsive Auto Layout](#responsive-auto-layout)
  - [Styles and Typography](#styles-and-typography)
  - [Useful Shortcuts and tips](#useful-shortcuts-and-tips)

---

## Figma

Figma is a web-based design tool used for interface design, prototyping, and collaboration. It allows designers to create user interfaces, wireframes, and prototypes directly in the browser, making it easy to share and collaborate with team members in real-time.

- Why Figma for Developers?

  - to inspect designs, measure distances, and extract CSS code for implementation.
  - to collaborate with designers and provide feedback on designs in handoffs.

- Key Features:
  - Vector Networks: Figma uses a unique vector network system that allows for more flexible and intuitive design creation.
  - Prototyping: Figma allows designers to create interactive prototypes with transitions and animations.
  - Collaboration: Multiple users can work on the same design file simultaneously, making it easy to collaborate and share feedback.
  - Plugins: Figma supports a wide range of plugins that can extend its functionality, including tools for design systems, accessibility, and more.
  - Version Control: Figma automatically saves versions of your design files, allowing you to revert to previous versions if needed.

[References](https://stevekinney.com/courses/figma)

---

## Build Blocks of Figma

### Layers

- In Figma, layers are individual elements that make up a design. They can be shapes, text, images, or groups of elements. Layers can be organized in a hierarchy, allowing designers to manage complex designs more easily.

### Frames

- Frames are a special type of layer in Figma that can contain other layers. They are used to create groups of elements and can be resized and manipulated as a single unit. Frames are often used to define the layout of a design and can be nested within each other to create complex structures.
  ![layers and frames](./img/layers-and-frames-1.png)
  ![layers and frames](./img/layers-and-frames-2.png)
- A frame can have min and max size, and we can set constraints for child elements inside the frame to control how they behave when the frame is resized.

### Groups

- Groups are another way to organize layers in Figma. They allow designers to combine multiple layers into a single unit, making it easier to move and manipulate them together. Groups can be nested within frames or other groups, providing additional flexibility in organizing designs.
  ![groups](./img/groups-1.png)

### Layout Grids

- Layout grids are a powerful tool in Figma that help designers create consistent and organized layouts. They can be applied to frames and provide a visual guide for aligning elements within the design. Layout grids can be customized with different column counts, gutter sizes, and margins to suit the needs of the design.
  ![layout grids](./img/layout-grids.avif)
  ![layout grids](./img/layout-grids-1.gif)
- We can save custom grid styles to reuse them across different frames and projects.

### Auto Layout

- Auto Layout is a feature in Figma that allows designers to create responsive designs that adapt to different screen sizes and content changes. With Auto Layout, designers can define how elements should behave when the size of the frame changes, such as resizing, spacing, and alignment.
  ![auto layout](./img/auto-layout-2.gif)

- More here in this article:
  - [Ultimate Guide to Mastering Auto Layout in Figma](https://www.uiprep.com/blog/ultimate-guide-to-mastering-auto-layout-in-figma)
- It's similar to using **Flexbox in CSS**, where you can set properties like direction, spacing, and alignment to control how elements are arranged within a container.
  ![auto layout](./img/auto-layout-1.jpg)
  - We can have nested auto layout frames to create more complex layouts.
- It's used for creating buttons, cards, lists, and other UI components that need to adapt to different content sizes and screen dimensions and need to be aligned consistently.
- It's used heavily by `Shift + A` shortcut to wrap selected elements in an auto layout frame.

#### Responsive Auto Layout

- Responsive Auto Layout is an advanced feature in Figma that allows designers to create designs that adapt to different screen sizes and orientations. With Responsive Auto Layout, designers can define how elements should behave when the size of the frame changes, such as resizing, spacing, and alignment.

---

## Styles and Typography

- Styles in Figma are reusable design elements that can be applied to multiple layers or components. They can include colors, typography, effects, and grids. By using styles, designers can maintain consistency across their designs and make it easier to update and manage design elements.

- Shared styles allow you to store information about the color, text properties, shadows, or layouts into reusable styles. This is cool because if you update that style, then anything that points to that style will also update accordingly.
  ![shared styles](./img/shared-styles.png)

- You can create shared styles for any of the following:

  - Colors
  - Text
    ![text styles](./img/text-styles.png)
    ![text styles](./img/text-styles-1.png)
  - Effects (e.g. shadows and blurs)
  - Layout Grids

- We can use a plugin like:

  - [Styler](https://www.figma.com/community/plugin/820660579767995949/styler)

    - To create a style guide from the existing styles in a Figma file.
    - it bulk-applies styles to selected elements.
    - it lists all the styles in a file and shows where they are used.
    - Note that it generate names and group styles **based on their properties and layer-names**.

  - [Themer](https://www.figma.com/community/plugin/731176732337510831/themer)
    - To manage and apply themes to your designs.

---

## Useful Shortcuts and tips

- To measure distances between elements: hold `Alt` (or `Option` on Mac) and hover over an element to see the distance to other elements.
  ![measuring distances](./img/measuring-distances.gif)

- To align elements: select multiple elements and use the alignment options in the toolbar or right-click menu.
  ![aligning elements](./img/aligning-elements.png)
  ![aligning elements](./img/aligning-elements-1.webp)

- To modify the space evenly between multiple elements: select the elements, then use the distribute spacing options in the toolbar or right-click menu.

- To smartly select similar elements: select an element, then from the `edit` menu, choose `Select all with same...` and pick the attribute you want to match (e.g., fill color, stroke color, etc.).
  ![selecting similar elements](./img/selecting-similar-elements.png)

- We can lock scaling of a child element while resizing a frame in the **"constraints"** section of the right sidebar.
  ![lock scaling](./img/lock-scaling.png)

- To quickly create a auto layout frame: select the elements you want to include, then press `Shift + A` to wrap them in an auto layout frame.
