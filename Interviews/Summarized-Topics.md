# INDEX

- [INDEX](#index)
  - [Intro](#intro)
  - [OOP](#oop)
    - [Fundamentals of OOP (A-P-I-E)](#fundamentals-of-oop-a-p-i-e)
    - [Design Patterns and SOLID Principles](#design-patterns-and-solid-principles)
  - [Internet](#internet)
    - [Internet and Networking Summary](#internet-and-networking-summary)
    - [HTTP Summary](#http-summary)
  - [Frontend](#frontend)
    - [General Frontend Topics](#general-frontend-topics)
    - [Frontend Performance Summary](#frontend-performance-summary)
    - [Frontend Rendering Methods](#frontend-rendering-methods)
    - [UI Components \& Libraries](#ui-components--libraries)
    - [Progressive Web Apps (PWA)](#progressive-web-apps-pwa)
  - [HTML \& CSS](#html--css)
    - [HTML Overview](#html-overview)
    - [CSS: A Comprehensive Guide](#css-a-comprehensive-guide)
    - [CSS Layouts](#css-layouts)
    - [CSS Variables (Custom Properties)](#css-variables-custom-properties)
    - [CSS Animations Summary](#css-animations-summary)
    - [Responsive Web Design Summary](#responsive-web-design-summary)
    - [Web UX Design Summary](#web-ux-design-summary)
    - [Accessibility Summary](#accessibility-summary)
  - [CSS Frameworks \& Mehtodologies](#css-frameworks--mehtodologies)
    - [CSS Methodologies and Frameworks](#css-methodologies-and-frameworks)
    - [CSS Modules Overview](#css-modules-overview)
    - [CSS Preprocessors and Build Process](#css-preprocessors-and-build-process)
    - [PostCSS Overview](#postcss-overview)
    - [Sass Overview](#sass-overview)
    - [Styled Components Overview](#styled-components-overview)
    - [Tailwind CSS](#tailwind-css)
  - [JavaScript](#javascript)
    - [JavaScript Summary](#javascript-summary)
    - [OOP in JavaScript](#oop-in-javascript)
    - [Document Object Model (DOM) Summary](#document-object-model-dom-summary)
    - [Asynchronous JavaScript Summary](#asynchronous-javascript-summary)
    - [Web APIs](#web-apis)
    - [JavaScript Modules](#javascript-modules)
    - [JavaScript Bundlers](#javascript-bundlers)
    - [JavaScript Package Managers](#javascript-package-managers)
    - [JavaScript Advanced Concepts](#javascript-advanced-concepts)
    - [JavaScript Interview Questions and Tricks](#javascript-interview-questions-and-tricks)
  - [Typescript](#typescript)
    - [TypeScript Overview](#typescript-overview)
    - [TypeScript Types](#typescript-types)
    - [Advanced TypeScript Concepts](#advanced-typescript-concepts)
    - [TypeScript and the DOM](#typescript-and-the-dom)
    - [Using TypeScript with JavaScript Libraries](#using-typescript-with-javascript-libraries)
  - [Git](#git)
    - [Git Essentials](#git-essentials)
    - [GitHub Essentials](#github-essentials)
  - [Web Security](#web-security)
  - [Testing](#testing)
    - [Testing](#testing-1)
    - [Jest](#jest)
    - [Cypress](#cypress)
  - [FE DEV](#fe-dev)
    - [Authentication](#authentication)
    - [Linters and Code Formatting](#linters-and-code-formatting)
    - [Modules and Bundlers](#modules-and-bundlers)
  - [FE Frameworks](#fe-frameworks)

---

## Intro

This file summarizes key topics in this repository (Learning Notes) to be used as a quick reference guide for interviews or study purposes.

---

## OOP

### Fundamentals of OOP (A-P-I-E)

- **Abstraction**: Hides internal details, shows only functionality. Reduces complexity, improves maintainability.

  - Why is abstraction important?
  - How does abstraction help in reducing complexity?

- **Polymorphism**: Same interface for different data types.

  - **Method Overloading**: Same method name, different parameters.
    - Can you give an example of method overloading?
  - **Method Overriding**: Child class redefines parent class method.
    - How does method overriding differ from overloading?

- **Inheritance**: Reuse code by creating new classes from existing ones.

  - **Inheritance**: `is-a` relationship (e.g., Dog is an Animal).
    - What is the difference between inheritance and composition?
  - **Composition**: `has-a` relationship (e.g., Dog has an Animal object).
    - When would you prefer composition over inheritance?

- **Encapsulation**: Wraps data and code together, protects data from outside access. Use getter and setter methods to access private data.

  - Why is encapsulation important for data protection?
  - How does encapsulation improve code maintainability?

- **Interfaces**: Define method signatures without implementation. Similar to abstract classes but contain only abstract methods.

  - What is the difference between an interface and an abstract class?
  - Why are interfaces useful in OOP?

  ```py
  from abc import ABC, abstractmethod

  class IShape(ABC):
      @abstractmethod
      def draw(self):
          pass

  class Circle(IShape):
      def draw(self):
          print("Drawing a circle")
  ```

- **UML (Unified Modeling Language)**: Visual language for documenting and modeling systems.

  - What are the key components of UML diagrams?
  - How does UML help in system design?

- **OOD Principles**:
  - **DRY**: Avoid repetition.
    - How does DRY improve code quality?
  - **KISS**: Keep it simple.
    - Why is simplicity important in software design?
  - **YAGNI**: Don't add unnecessary functionality.
    - How does YAGNI prevent overengineering?

---

### Design Patterns and SOLID Principles

- **Design Patterns**:
  - General reusable solutions to common problems in software design.
  - Categorized into:
    1. **Creational Patterns**: Deal with object creation.
    2. **Structural Patterns**: Deal with class/object composition.
    3. **Behavioral Patterns**: Deal with communication between classes/objects.
  - Why are design patterns important?
  - Can you give examples of each category?

---

- **SOLID Principles**:

  - Best practices for writing clean, maintainable, and loosely coupled code.
  - Acronym for five principles by Robert C. Martin (Uncle Bob).

  1. **Single Responsibility Principle (S.R.P)**:

     - A class should have only one reason to change (one responsibility).

     ```py
     class EmailSender:
         def send_email(self, message):
             pass
     ```

     - Why is having multiple responsibilities in a class problematic?
     - How does SRP improve maintainability?

  2. **Open-Closed Principle (O.C.P)**:

     - Classes should be open for extension but closed for modification.

     ```py
     class Shape:
         def draw(self):
             pass
     ```

     - Why is it important to avoid modifying existing code?
     - How does the decorator pattern help achieve OCP?

  3. **Liskov Substitution Principle (LSP)**:

     - Objects of a superclass should be replaceable with objects of a subclass without affecting program behavior.
     - Why is LSP an extension of OCP?
     - What happens if a subclass violates LSP?

  4. **Interface Segregation Principle (ISP)**:

     - Many client-specific interfaces are better than one general-purpose interface.

     ```py
     class IShape:
         def draw(self):
             pass
     ```

     - Why is it important to avoid forcing classes to implement unused methods?
     - How does ISP reduce coupling?

  5. **Dependency Inversion Principle (D.I.P)**:

     - High-level modules should not depend on low-level modules. Both should depend on abstractions.

     ```py
     class Service:
         def save_data(self, data):
             pass
     ```

     - Why is it important to depend on abstractions?
     - How does dependency injection achieve DIP?

---

- **Law of Demeter**:

  - Principle of Least Knowledge: A module should not know about the internal workings of the objects it manipulates.
  - Reduces coupling by limiting object access to one level (one dot `.`).

  ```py
  class Cat:
      def get_favorite_toy_color(self):
          return "red"
  ```

  - Why is it better to reduce object access layers?
  - How does the Law of Demeter improve code maintainability?

---

## Internet

### Internet and Networking Summary

- **Networking**:
  - Communication between systems follows the OSI Model:
    1. **Application Layer**: Processes data and resolves domain names to IP addresses.
    2. **Presentation Layer**: Converts data to a format the application can understand.
    3. **Session Layer**: Manages connections between client and server.
    4. **Transport Layer**: Ensures end-to-end communication (e.g., TCP).
    5. **Network Layer**: Handles communication between networks (adds IP address).
    6. **Data-Link Layer**: Facilitates communication within the same network (adds MAC address).
    7. **Physical Layer**: Transfers data as bits over cables (fiber or copper).
  - Why is the OSI Model important?
  - How does each layer contribute to data transmission?

---

- **Internet**:
  - A global network of computers communicating using protocols.
  - Data is broken into packets and routed through routers and switches.
  - Core protocols:
    - **IP**: Routes packets to their destination.
    - **TCP**: Ensures reliable and ordered data transmission.
    - **DNS**: Translates domain names to IP addresses.
    - **SSL/TLS**: Encrypts data for secure transmission.
  - How does TCP ensure reliability?
  - Why is DNS essential for the internet?

---

- **Important Concepts**:
  - **Client/Server**:
    - **Client**: Requests data (e.g., browser, app).
    - **Server**: Provides data (e.g., database, file server).
    - How do clients and servers communicate?
  - **Bandwidth & Latency**:
    - **Bandwidth**: Maximum data transfer rate (bps).
    - **Latency**: Time for data to travel (ms).
    - Why are both important for performance?
  - **IP Address**:
    - Unique identifier for devices on a network.
    - IPv4 vs IPv6: IPv6 allows more unique addresses.
    - Why is IPv6 necessary?
  - **Packet**:
    - Small unit of data sent over the internet.
    - Contains metadata (e.g., source, destination).
    - How do packets ensure data integrity?

---

- **Encryption**:
  - **Symmetric Encryption**: One key for encryption and decryption.
  - **Asymmetric Encryption**: Public key for encryption, private key for decryption.
  - **Hashing**: One-way function to ensure data integrity.
  - Why is encryption critical for internet security?

---

- **Web Servers vs Application Servers**:
  - **Web Server**: Handles static content (e.g., HTML, images).
  - **Application Server**: Handles dynamic content and business logic.
  - Examples: `nginx` (web server), `node.js` (application server).
  - How do these servers complement each other?

---

- **SSH (Secure Shell)**:
  - Protocol for secure remote access to servers.
  - Uses public/private key pairs for authentication.
  - Why is SSH preferred over password-based access?

---

- **Performance**:
  - Factors affecting performance:
    - Bandwidth, latency, server response time.
  - Tools for optimization:
    - Gzip compression, caching, load balancing.
  - How can performance be improved for web applications?

---

### HTTP Summary

- **Key Concepts**:

  - **HTTP (Hypertext Transfer Protocol)**:
    - A stateless protocol for transferring files between a client and a server.
    - Operates on the application layer of the OSI model.
    - Statelessness means each request is independent; sessions are used to maintain state.
    - Why is HTTP stateless, and how do sessions help?

- **HTTP History**:

  - **HTTP/0.9**: Only supported `GET` for HTML documents.
  - **HTTP/1.0**: Added `POST`, `HEAD`, and headers for multimedia support.
  - **HTTP/1.1**: Introduced persistent connections, caching, and more methods (`PUT`, `DELETE`).
  - **HTTP/2**: Binary protocol, multiplexing, server pushing, and header compression.
  - **HTTP/3**: Uses QUIC for improved performance and security.
    - Why was HTTP/3 introduced, and how does QUIC improve efficiency?

- **HTTP Request Methods**:

  - **GET**: Retrieve data; idempotent; data sent via URL query string.
  - **POST**: Send data; not idempotent; data sent in the request body.
  - **PUT**: Replace a resource.
  - **PATCH**: Modify a resource.
  - **HEAD**: Retrieve headers without the body.
  - **OPTIONS**: Discover server-supported methods.
  - **TRACE**: Debugging; echoes the request.
  - **`GET` vs `POST`**:
    - `GET` is used to **retrieve** data, while `POST` is used to **send** data.
    - `GET` sends data via the URL query string, making it less secure, while `POST` sends data in the request body, offering better security.
    - `GET` requests are idempotent, cacheable, and bookmarkable, whereas `POST` requests are not.
    - `GET` has a limited payload size, while `POST` supports larger payloads.
  - **`PUT` vs `PATCH`**:
    - `PUT` is used to **replace** a resource entirely, while `PATCH` is used to **modify** parts of a resource.
    - `PUT` requires the full resource data, whereas `PATCH` only requires the fields to be updated.

- **HTTP Status Codes**:

  - **1xx**: Informational
    - Example: `100 Continue`
  - **2xx**: Success
    - Examples: `200 OK`, `201 Created`
  - **3xx**: Redirection
    - Examples: `301 Moved Permanently`, `304 Not Modified`
  - **4xx**: Client errors
    - Examples: `400 Bad Request`, `404 Not Found`
  - **5xx**: Server errors
    - Examples: `500 Internal Server Error`, `503 Service Unavailable`
    - Questions:
      - What does `304 Not Modified` mean?
      - How do `4xx` and `5xx` codes differ?

- **HTTP Headers**:

  - Contain metadata about the request/response (e.g., content type, user agent).
  - **Cookies**:
    - Small pieces of data stored by the client to maintain state.
    - Question: Why are cookies essential for HTTP?

- **HTTPS (HTTP Secure)**:

  - Adds encryption using **TLS** for privacy, integrity, and identification.
  - **Handshake**:
    - Negotiates a secure connection between client and server.
    - Questions:
      - Why is HTTPS preferred over HTTP?
      - How does the SSL/TLS handshake work?

- **Modern HTTP Features**:
  - **Persistent Connections**:
    - Reuse connections for multiple requests.
  - **Multiplexing**:
    - Send multiple requests over a single connection (HTTP/2).
  - **Server Push**:
    - Server preemptively sends resources (HTTP/2).
    - Question: How do these features improve performance?

---

## Frontend

### General Frontend Topics

- **Web Dev Fundamentals**:

  - **Frontend**:
    - The part of the website that users interact with, including fonts, colors, dropdown menus, and sliders.
  - **How Web Development Works**:
    1. User types a URL in the browser.
    2. Browser sends an HTTP `GET` request to the server for the `HTML` file.
    3. Server prepares and sends required files (`HTML`, `CSS`, `JS`, images).
    4. Browser parses `HTML` and `CSS` to create `DOM` and `CSSOM` trees, combines them into the `Render Tree`, and paints the layout.
  - **Static vs Dynamic Websites**:
    - **Static Websites**: Served as-is, created using `HTML`, `CSS`, and `JS`.
    - **Dynamic Websites**: Generated on the server, often using a database.
  - **What Happens When Accessing a Web Server**:
    1. **URL Access**: User types a URL.
    2. **TCP/IP Connection**: Established between browser and server.
    3. **HTTP Request**: Sent by the browser.
    4. **HTTP Response**: Server sends data back.
    5. **Request/Response Cycle**: Browser makes multiple requests for assets.
  - **Building Good Websites**:
    - Focus on performance, accessibility, and user experience.

- **Web Browsers**:

  - **Architecture**:
    - **User Interface**: Interacts with visual elements (e.g., address bar, buttons).
    - **Browser Engine**: Bridges the user interface and rendering engine.
    - **Rendering Engine**: Renders web pages by interpreting `HTML`, `CSS`, and images.
    - **Networking**: Manages network calls using protocols like `HTTP`.
    - **JavaScript Interpreter**: Parses and executes JavaScript code.
    - **UI Backend**: Draws basic widgets using OS methods.
    - **Data Storage**: Stores data locally (e.g., cookies, IndexedDB).
  - **Roles of Rendering Engine**:
    1. Parses `HTML` into a `DOM` tree.
    2. Creates a `Render Tree` combining `DOM` and `CSSOM`.
    3. Calculates layout positions (reflow).
    4. Paints elements on the screen.
  - **How Web Pages Are Built**:
    1. Browser sends a `GET` request for the `HTML` file.
    2. Parses `HTML` into a `DOM` tree and `CSS` into a `CSSOM` tree.
    3. Combines `DOM` and `CSSOM` into a `Render Tree`.
    4. Calculates layout and paints elements.
    5. Executes JavaScript for interactivity.

- **Web Components**:

  - **Definition**: Custom, reusable, encapsulated `HTML` tags.
  - **Core Technologies**:
    - **Custom Elements**: Define new `HTML` tags.
    - **Shadow DOM**: Encapsulates styles and markup.
    - **HTML Templates**: Reusable markup templates.
    - **Scoped Styles**: Styles scoped to specific components.
    - **ES Modules**: Import/export JavaScript modules.
  - **Usage**:
    - Create custom elements (e.g., `<my-element>`).
    - Reuse components from libraries (e.g., `two-up`, `generic-components`).
    - Integrate with frameworks like `React`, `Vue`, `Svelte`.

- **Gulp.js**:

  - **Definition**: A task runner to automate workflows (e.g., compiling Sass, minifying files).
  - **Gulp vs Webpack**:
    - **Gulp**: Task runner.
    - **Webpack**: Module bundler with additional features like hot reloading.

- **Pug.js**:

  - **Definition**: A template engine for rendering `HTML` with reusable components and dynamic data.

- **SEO**:
  - **Definition**: Optimizing websites to rank higher in search engine results.
  - **Techniques**:
    - **On-page**: Use relevant keywords in content and metadata.
    - **Off-page**: Build backlinks and improve domain authority.

---

### Frontend Performance Summary

- **Performance**:

  - **Why Performance Matters**:
    - **User Experience**: Faster websites improve user satisfaction and reduce bounce rates.
      - `0.1s`: Feels instantaneous.
      - `1s`: Noticeable delay but flow remains uninterrupted.
      - `10s`: Users lose focus and may abandon the task.
    - **SEO & Revenue**: Performance impacts search rankings and conversions.
      - `1s` delay: `11%` fewer page views, `7%` loss in conversions.
      - `53%` of users leave if a mobile page takes longer than `3s` to load.
    - **Challenges**: Complexity, cost, and trade-offs in optimizing performance.
  - **Performance Types**:
    - **Network Load**: Minify, cache, and reduce requests.
    - **Parsing & Compiling**: Optimize `HTML`, `CSS`, and `JS` processing.
    - **Rendering**: Avoid blocking the main thread and optimize reflows.
  - **Performance Metrics**:
    - Use the `RAIL` model as a guide.
    - Focus on incremental improvements (`10%` better, not `100%`).
  - **Importance of Measurement**:
    - Always measure in **Production Mode**.
    - Tools: `Lighthouse`, `WebPageTest`, `PageSpeed Insights`, `Chrome DevTools`.

- **JavaScript Performance**:

  - **Cost of JavaScript**:
    - Parsing, compiling, and executing `JS` can be resource-intensive.
    - Use tools like `@babel/preset-env` to reduce unnecessary polyfills.
  - **Optimizations**:
    - Ship less code (e.g., lazy parsing, tree shaking).
    - Avoid nested functions and optimize objects.
    - Use tools like `webpack`, `rollup`, `parcel`, and `esbuild`.

- **CSS Performance**:

  - Reduce specificity and unused styles.
  - Avoid reflows by batching `DOM` changes and using `requestAnimationFrame`.
  - Tools: `purgecss`, `uncss`, `cssnano`.

- **Minify/Minimize Files**:

  - **Minify**: Remove unnecessary characters from code.
  - **Minimize Images**: Use tools like `imigx` to compress images.
  - **Font Optimization**:
    - Use `Google Fonts` for optimized font delivery.
    - Apply font subsetting to reduce unused characters.

- **Critical Render Path**:

  - Optimize file handling with `async`, `defer`, and `preload` attributes.
  - Minimize render-blocking resources.

- **Code Splitting (Lazy Loading)**:

  - Split code into smaller chunks to reduce bundle size.
  - Load code dynamically based on user interactions.
  - Tools: `react-loadable`, `webpack-bundle-analyzer`.

- **Tree Shaking**:

  - Remove unused code during the build process.
  - Tools: `rollup-plugin-visualizer`, `webpack`.

- **Caching**:

  - **Why Caching Matters**:
    - Reduces server load and improves load times.
  - **Types**:
    - `HTTP Cache`: Use `cache-control` headers.
    - `Content-Addressable Storage`: Store files based on their content hash.
    - `Application Cache`: Cache assets for offline use.

- **Avoiding Performance Pitfalls**:

  - Avoid blocking the main thread.
  - Prevent memory leaks and multiple re-rendering.
  - Reduce concurrent requests.

- **Web Vitals and Performance Score**:
  - **Web Vitals**: Core metrics for user experience (e.g., LCP, FID, CLS).
  - **Lighthouse**: Tool for measuring and improving performance.

---

### Frontend Rendering Methods

- **SSR vs CSR**

  - **SSR: Server Side Rendering**

    - HTML is pre-generated on the server and sent to the client.
    - The client renders the HTML and displays UI content with minimal activity.
    - Full page reloads are required for updates, as the browser requests the entire HTML page from the server.
    - Example frameworks: `Next.js` (default), `WordPress`.
    - **Pros:**
      - SEO-friendly.
      - Faster initial loading time.
    - **Drawbacks:**
      - Slower than CSR for user interactions.
      - Not suitable for highly interactive applications (e.g., `Facebook`).
      - Requires full page reloads.
    - **Implementation in React:**
      1. Render the view on the server using `ReactDOMServer.renderToString()`.
      2. Hydrate the view on the client using `ReactDOM.hydrate()`.
    - More details: [Next.js SSR](../Nextjs/1-Nextjs.md#server-side-rendering-ssr).

  - **CSR: Client Side Rendering**
    - The browser requests only data from the server, and the client renders the HTML and UI content.
    - Commonly used in Single Page Applications (SPAs).
    - **Pros:**
      - Rich interactivity.
      - Faster than SSR for subsequent interactions.
    - **Drawbacks:**
      - Not SEO-friendly (e.g., search engines like Google may not see data in React apps).
      - Longer initial loading time.

- **Progressive Rendering**

  - Allows web content to be displayed as soon as possible by splitting rendering work into multiple frames or processes.
  - Solves the long initial loading time issue in CSR.
  - Based on the principle of "render as needed" or "render as quickly as possible."

- **SEO (Search Engine Optimization)**
  - Improves site ranking in search engine results by optimizing content and structure.
  - **On-page techniques:**
    - Use relevant terms in strategic places on web pages.
  - **Off-page techniques:**
    - Increase backlinks from other sites.

---

### UI Components & Libraries

- **Overview**

  - UI component libraries speed up development and improve design quality.
  - Examples:
    - [Material-UI](https://mui.com/)
    - [Ant Design](https://ant.design/)
  - **Challenges:**
    - Opinionated libraries may limit customization.
    - Custom designs may require additional code.
  - **Solution:**
    - Use non-opinionated libraries like [Reach UI](https://reach.tech/) for flexibility.

- **Common Components**
  - **Breadcrumb**
    - Navigation aid to track user location within a website.
    - Example implementation using `styled-components`.
  - **Button**
    - Clickable element triggering actions.
    - Variants: Fill, Outline, Ghost.
    - Example implementation with customizable styles.
  - **Progress Bar**
    - Visual indicator of operation progress.
    - HTML's native `progress` element is limited in styling.
    - Customizable implementation using `styled-components`.
    - **Issue:** Bar not fully filled at near-end values (e.g., 99%).
      - **Solution:** Use `overflow: hidden` on the parent element.
  - **Select**
    - Dropdown menu for selecting options.
    - Example implementation with styled components and helper functions.

---

### Progressive Web Apps (PWA)

- **Overview**

  - PWAs enable web applications to be installed on devices and work offline, mimicking native mobile apps.
  - Offer faster, reliable, and engaging user experiences.
  - Key features:
    - Reliable
    - Fast
    - Engaging
  - Components:
    1. Manifest
    2. Service Workers
    3. HTTPS
  - Accessible via browser `devtools` -> `Application` tab.
  - Guide: [Installable PWAs](https://web.dev/install-criteria/).

- **Manifest**

  - Defines app display, launch behavior, and metadata (e.g., name, icons, theme color).

- **Service Workers**

  - JavaScript scripts running asynchronously in the background.
  - Act as a proxy server between web apps, browsers, and networks.
  - Use cases:
    - Offline mode
    - Background syncs
    - Push notifications
    - Caching and storage APIs
    - Pre-caching content
  - Limitations:
    - Cannot access the DOM.
    - Limited browser support (mostly resolved).
  - Implementation options:

    1. Manually
    2. Using [Workbox](https://developer.chrome.com/docs/workbox/)
    3. During build phase (e.g., `webpack`, `rollup`).

  - Example `webpack` configuration:

    ```js
    const { GenerateSW } = require('workbox-webpack-plugin');
    module.exports = {
      plugins: [new GenerateSW()]
    };
    ```

- **HTTPS**
  - Ensures security and prevents data interception by hackers.

---

## HTML & CSS

### HTML Overview

- **HTML Basics**

  - Stands for **HyperText Markup Language**.
  - Used to create the structure of a web page.
  - Not a programming language, but a **markup language**.
  - Key concepts:
    - **HyperText**: Links documents and resources.
    - **Markup Language**: Annotates text to provide additional meaning.
    - **Void Elements**: HTML elements with no content or closing tag.

- **HTML Document Structure**

  - Correct structure includes `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>` tags.
  - Key properties:
    - `<!DOCTYPE html>`: Specifies HTML version (e.g., HTML5). Without it, the browser enters **Quirks Mode**, which may cause inconsistent rendering.
      - **Quirks Mode**: A legacy rendering mode for older web pages that do not follow modern standards.
    - `<html>`: Root element with optional `lang` attribute.
    - `<head>`: Contains metadata (e.g., `<meta>`, `<title>`).
      - `<meta charset="UTF-8">`: Specifies character encoding.
      - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Ensures responsive design.
    - `<body>`: Contains visible content.
  - Notes:
    - Maintain correct tag hierarchy for better browser understanding.
    - Missing tags may lead to unexpected behavior.

- **HTML5 Changes**

  - Introduced new semantic elements (e.g., `<article>`, `<section>`).
  - Deprecated older elements (e.g., `<font>`).
  - Enhanced multimedia support with `<audio>` and `<video>`.
  - Improved form controls with new input types (e.g., `email`, `date`).
  - Added APIs like Geolocation and Web Storage.

- **HTML Elements**

  - Elements define specific purposes or functions on a webpage.
  - Key concepts:
    - **Attributes**: Provide additional information about elements (e.g., `href`, `alt`).
    - **HTML Entities**: Represent special characters (e.g., `&copy;`, `&nbsp;`).
    - Inline vs Block Elements:
      - Inline: Flow with text (e.g., `<a>`, `<span>`).
      - Block: Start on a new line (e.g., `<div>`, `<p>`).

- **Semantic HTML**

  - Semantic elements clearly describe their meaning (e.g., `<article>`, `<section>`).
  - Benefits:
    - **SEO**: Improves search engine ranking.
    - **Accessibility**: Enhances usability for assistive technologies.
    - **Maintainability**: Easier to read and maintain code.
    - **Separation of Concerns**: Encourages CSS for styling.
  - Examples:
    - Use `<strong>` instead of `<b>` for emphasis.
    - Use `<em>` instead of `<i>` for italics.

- **Forms**

  - `<form>`: Groups related controls and collects user input.
  - Key elements:
    - `<label>`: Associates text with form controls.
    - `<input>`: Collects user input (e.g., text, radio, checkbox).
    - `<textarea>`: Allows multi-line text input.
    - `<select>`: Dropdown menu for options.
    - `<fieldset>`: Groups related controls with a `<legend>`.
    - `<button>`: Triggers form actions (e.g., submit, reset).
  - Features:
    - **Autofill**: Uses `autocomplete` attribute for saved data.
    - **Validation**: Attributes like `required`, `minlength`, and `pattern` ensure valid input.
    - **Input Masking**: Formats input for clarity (e.g., phone numbers).
  - Data transfer:
    - `action`: Specifies server URL for form submission.
    - `method`: Defines HTTP method (`GET` or `POST`).

- **Images**

  - `<img>` attributes:
    - `src`: Image source (required).
    - `alt`: Alternative text for accessibility.
    - `width`/`height`: Specifies dimensions.
    - `srcset`: Provides multiple image versions for different devices.
    - `loading`: Controls loading behavior (`lazy`, `eager`).
  - Formats:
    - **JPEG**: Best for photos with many colors.
    - **PNG**: Best for images with few colors or transparency.

- **Semantic Tags**

  - Examples:
    - `<section>`: Groups related content.
    - `<article>`: Represents self-contained content.
    - `<nav>`: Contains navigation links.
    - `<main>`: Represents the main content of a document.
    - `<aside>`: Contains related but non-essential content.
    - `<footer>`: Contains footer information (e.g., copyright).
    - `<figure>`: Groups media with captions.
    - `<iframe>`: Embeds another webpage.
    - `<blockquote>`: Represents a block of quoted text.
    - `<address>`: Provides contact information.
    - `<time>`: Represents dates and times in machine-readable format.
    - `<details>` and `<summary>`: Create collapsible content.

- **Notes & Tricks**

  - Use semantic tags for better SEO and accessibility.
  - Avoid using non-semantic tags like `<div>` and `<span>` unnecessarily.
  - Use `role` attributes for screen readers when needed.

- **Important Questions**
  - What is the purpose of the `<!DOCTYPE html>` declaration?
    - It specifies the version of HTML being used (e.g., HTML5). Without it, the browser may enter **Quirks Mode**, which can cause inconsistent rendering.
  - How does Quirks Mode affect rendering?
    - Quirks Mode is a legacy rendering mode used by browsers to support older web pages. It does not follow modern web standards, leading to potential layout and styling issues.
  - What are the benefits of using semantic HTML?
    - Improves **SEO** by helping search engines understand the content structure.
    - Enhances **accessibility** for assistive technologies like screen readers.
    - Makes code easier to read, maintain, and style.
    - Encourages separation of content and presentation.
  - How do `<meta>` tags improve user experience?
    - `<meta charset="UTF-8">` ensures proper character encoding.
    - `<meta name="viewport" content="width=device-width, initial-scale=1.0">` enables responsive design for mobile devices.
    - Other `<meta>` tags provide metadata for search engines and social media platforms.
  - What are the new features introduced in HTML5?
    - New semantic elements like `<article>`, `<section>`, `<nav>`.
    - Multimedia support with `<audio>` and `<video>`.
    - Enhanced form controls with new input types (e.g., `email`, `date`).
    - APIs like Geolocation, Web Storage, and Canvas for advanced functionality.

---

### CSS: A Comprehensive Guide

- **Cascading Style Sheets (CSS)**

  - CSS defines the visual style and layout of web content.
  - "Cascading" resolves conflicts between multiple stylesheets.
  - CSS rules consist of selectors, properties, and values.

- **Styling Types**

  - Inline Style: Applied directly to elements using the `style` attribute (not recommended).
  - Internal Style: Defined within `<style>` tags in the `<head>` section.
  - External Style: Linked via `<link>` tags to external CSS files (best practice).
  - Priority Order: Inline > Internal > External.

- **Starter CSS Code (Global Reset / Normalize)**

  - Removes browser-specific default styles for consistency.
  - Use `body` for inherited properties and `*` for non-inherited ones.

- **How CSS Works**

  - Browser parses HTML and CSS to build the DOM and CSSOM trees.
  - DOM and CSSOM combine into a render tree for layout and painting.
  - **Key Concepts**:
    - **CSSOM**: CSS Object Model, similar to DOM but for CSS.
    - **Render Tree**: Combines DOM and CSSOM for rendering.

- **Visual Formatting Model**

  - Determines layout using block and inline directions.
  - Factors: box dimensions, positioning, stacking context, viewport size.

- **Inheritance**

  - Typography-related properties (e.g., `color`, `font-family`) are inherited.
  - Use `inherit` keyword to force inheritance (not recommended).

- **Selectors**

  - Types: Element, Class, ID, Attribute, Universal.
  - Relationships: Descendant, Child, Adjacent Sibling, General Sibling.
  - States: `:hover`, `:focus`, `:checked`, etc.
  - Content: `:empty`, `:not()`, `:has()`, `:is()`.

- **Combinators**

  - Combine selectors to target elements based on relationships.
  - Examples: Descendant (`div p`), Child (`div > p`), Adjacent Sibling (`div + p`), General Sibling (`div ~ p`).

- **Attribute Selectors**

  - `[attr]`: Matches elements with a specific attribute.
  - `[attr=value]`: Matches elements with a specific attribute value.
  - `[attr^=value]`: Matches elements whose attribute value starts with a specific string.
  - `[attr$=value]`: Matches elements whose attribute value ends with a specific string.

- **Pseudo Elements/Classes**

  - Pseudo Classes: Style elements based on state or position (e.g., `:hover`, `:nth-child(n)`).
  - Pseudo Elements: Style parts of elements (e.g., `::before`, `::after`).

- **Cascade and Specificity**

  - Specificity determines which rule is applied when multiple rules target the same element.
  - `!important` overrides specificity but follows the "last rule principle."

- **Box Model**

  - Elements are rectangular boxes with content, padding, border, and margin.
  - `box-sizing`: Controls whether padding and border are included in width/height.

- **Key Questions**
  - What is the difference between `content-box` and `border-box`?
    - `content-box` excludes padding and border from width/height.
    - `border-box` includes padding and border in width/height.
  - How does specificity work in CSS?
    - Specificity is calculated based on the type of selectors used (ID > Class > Element).
  - What is the purpose of CSS resets?
    - To remove inconsistent default styles across browsers.

---

### CSS Layouts

- **Definition**: CSS layouts determine how elements are arranged on a web page. They can be general layouts for the entire page or specific layouts for sections/components.

- **Layout Types**:

  - **Fixed Width Layout**:
    - Design does not change size when the viewport changes.
    - Example: Static designs that do not adapt to screen resizing.
  - **Liquid Layout**:
    - Design stretches and contracts as the viewport changes.
    - Uses percentages for flexibility.
    - Example: Responsive designs.

- **Box Types (Block vs Inline)**:

  - **Block-level Elements**:
    - Create blocks of text or arrange boxes into layouts.
    - Support margins, padding, borders, and `width`/`height` properties.
  - **Inline Elements**:
    - Highlight text selections.
    - Support margins, padding, and borders only for left/right directions.
    - Do not respect `width`/`height` unless converted to `inline-block`.
  - **Inline-block Elements**:
    - Behave like a mix of block and inline elements.
    - Support margins, padding, borders, and `width`/`height`.
    - Do not line-wrap like inline elements.

- **Positioning Schemes**:

  - **Float**:
    - Removes elements from normal flow and allows wrapping around them.
    - Commonly used for multi-column layouts.
    - Issues:
      - **Collapsed Height**: Parent containers may collapse if they only contain floated elements.
      - **Fix**: Use `clear: both`, `overflow: auto`, or clearfix techniques.
    - **Floating Shapes**:
      - Use `shape-outside` to define custom shapes for text wrapping (e.g., `circle()`, `polygon()`).
  - **Position Property**:
    - **Static**: Default value; elements follow normal flow.
    - **Relative**: Moves elements relative to their normal position.
    - **Absolute**: Positions elements relative to the nearest positioned ancestor.
    - **Fixed**: Positions elements relative to the viewport; unaffected by scrolling.
    - **Sticky**: Toggles between `relative` and `fixed` based on scroll position.
  - **`z-index` (Stacking Context)**:
    - Determines the elevation of elements along the Z-axis.
    - Higher `z-index` values appear above lower ones.
    - Notes:
      - Only works on positioned elements.
      - Use `isolation: isolate` to create a new stacking context.

- **Flexbox**:

  - **Definition**: A layout method for arranging items in a single dimension (row or column).
  - **Key Properties**:
    - **Flex Direction**:
      - `row` (default): Items laid out horizontally.
      - `column`: Items laid out vertically.
      - `row-reverse`/`column-reverse`: Reverse the order of items.
    - **Alignment**:
      - `justify-content`: Aligns items along the main axis.
      - `align-items`: Aligns items along the cross axis.
      - `align-content`: Aligns multiple lines of items along the cross axis.
      - `align-self`: Overrides alignment for individual items.
    - **Wrapping**:
      - `nowrap` (default): Single line; may cause overflow.
      - `wrap`: Allows items to flow into multiple lines.
      - `wrap-reverse`: Wraps items in the opposite direction.
    - **Order**:
      - Controls the visual order of items.
      - Default: `order: 0`.

- **CSS Grid**:

  - **Definition**: A layout system for arranging items in two dimensions (rows and columns).
  - **Key Concepts**:
    - **Grid Container**:
      - Defines the grid structure using `display: grid` or `inline-grid`.
      - Properties:
        - `grid-template-rows`/`grid-template-columns`: Define row/column sizes.
        - `grid-gap`: Sets spacing between grid items.
    - **Grid Items**:
      - Placed within the grid container using `grid-row` and `grid-column`.
      - Alignment:
        - `align-self`: Aligns individual items along the cross axis.
        - `justify-self`: Aligns individual items along the main axis.
    - **Implicit vs Explicit Grids**:
      - Explicit: Defined using `grid-template` properties.
      - Implicit: Automatically created by the browser for extra items.
    - **Subgrid**:
      - Allows nested grids to inherit the parent grid's structure.

- **Multi-Column Layout**:

  - **Definition**: A layout method for creating columns of text.
  - **Key Properties**:
    - `column-count`: Specifies the number of columns.
    - `column-gap`: Sets spacing between columns.
    - `column-rule`: Adds a line between columns.

- **Questions**:
  1. **What is the difference between `relative` and `absolute` positioning?**
     - `relative`: Moves elements relative to their normal position; space is still reserved in the flow.
     - `absolute`: Positions elements relative to the nearest positioned ancestor; removed from normal flow.
  2. **How does `z-index` work?**
     - Determines the stacking order of elements along the Z-axis. Higher values appear above lower ones.
  3. **What is the difference between Flexbox and Grid?**
     - Flexbox: One-dimensional layout (row or column).
     - Grid: Two-dimensional layout (rows and columns).
  4. **How does `float` affect layout?**
     - Removes elements from normal flow and allows wrapping around them. May cause collapsed height issues.
  5. **What is the purpose of `align-items` in Flexbox?**
     - Aligns items along the cross axis (e.g., vertically for `row` direction).

---

### CSS Variables (Custom Properties)

- **Definition**: CSS variables, also known as custom properties, allow defining reusable variables in CSS. They are inheritable and cascade like CSS properties.

  - Enable abstraction and dynamic styling, similar to props in React.
  - Example:

    ```html
    <div style="--primary: red"></div>
    ```

    ```css
    div {
      color: var(--primary);
    }
    ```

- **Difference Between CSS Variables and Sass Variables**:

  - CSS variables are dynamic and can be manipulated with JavaScript.
  - Sass variables are static and scoped to blocks.

- **How to Use**:

  - **Declaration**:

    - Use the `:root` selector for global scope.

      ```css
      :root {
        --primary: blue;
      }
      ```

    - Use element-specific declarations for local scope.

  - **Usage**:

    - Access variables with the `var()` function.

      ```css
      .box {
        background-color: var(--primary);
      }
      ```

- **Scope**:

  - CSS variables are scoped to elements and their descendants (dynamic-scoped).
  - Example:

    ```css
    :root {
      --main-bg-color: coral;
    }

    #div1 {
      --main-bg-color: lightblue;
      background-color: var(--main-bg-color);
    }
    ```

- **Fallbacks (Default Values)**:

  - Provide fallback values if a variable is undefined or invalid.

    ```css
    div {
      color: var(--primary, orange);
    }
    ```

  - Use `@property` to define initial values and syntax.

    ```css
    @property --primary {
      syntax: '<color>';
      inherits: true;
      initial-value: orange;
    }
    ```

- **Inheritance**:

  - CSS variables are inheritable by default.
  - Disable inheritance using `initial` or `@property`.

    ```css
    @property --text-color {
      syntax: '<color>';
      inherits: false;
      initial-value: black;
    }
    ```

- **Invalid at Computed Values Time (IACVT)**:

  - Occurs when a variable has an invalid or unsupported value.
  - Example:

    ```css
    div {
      --accent-color: 42deg; /* Invalid color */
      background: var(--accent-color, orange);
    }
    ```

- **Space Toggles Hack**:

  - Use a space character to toggle between two values.

- **Tokens**:

  - Variables can store numbers, strings, or images but cannot mix types.
  - Example:

    ```css
    :root {
      --height-scale: 100;
      --height: calc(var(--height-scale) * 1vh);
    }
    ```

- **CSS Variables with JavaScript**:

  - Dynamically update variables using JavaScript.

    ```js
    document.documentElement.style.setProperty('--primary', 'red');
    ```

  - Reactivity: Changes to variables automatically update dependent styles.

- **Common Use Cases**:

  - CSS resets:

    ```css
    :root {
      --primary: #333;
      --secondary: #f06;
    }
    ```

  - Responsive design:

    ```css
    body {
      font-size: calc(90% * var(--font-size-scale));
    }
    ```

  - Dynamic color palettes:

    ```css
    article {
      --hue: calc(50 - var(--intensity) * 10);
      --color: hsl(var(--hue, 200) 70% 40%);
      background: var(--color);
    }
    ```

- **Working with Unsupported Browsers**:

  - Use `@supports` to check for CSS variable support.

    ```css
    @supports (--css: variables) {
      .box {
        background: var(--primary);
      }
    }
    ```

  - Use PostCSS to convert variables to static values.

---

### CSS Animations Summary

- **Transforms (`transform` property):**

  - Allows changing an element's appearance without triggering layout or paint.
  - Transform Functions:
    - `translate()`: Moves an element along the x or y axis without affecting layout.
      - Percentages refer to the element's size, not the parent's size.
    - `scale()`: Scales an element and its content proportionally.
      - More efficient than `width` for animations as it avoids reflow.
    - `rotate()`: Rotates an element using `deg` or `turn` units.
    - `skew()`: Skews an element along the x and y axes.
    - `transform-origin`: Sets the pivot point for transformations.
    - `perspective`: Adds a 3D effect to elements.
    - `transform-style`: Enables 3D rendering for nested elements.
  - Notes:
    - Combine multiple operations using `transform` shorthand.
    - Transformations don't work on inline elements; use `inline-block` or `block`.

- **Transitions:**

  - Animates changes in CSS properties over time.
  - Key Properties:
    - `transition-property`: Specifies the properties to animate.
    - `transition-duration`: Duration of the transition.
    - `transition-timing-function`: Controls the rate of change (e.g., `ease`, `linear`).
    - `transition-delay`: Delays the start of the transition.
  - Notes:
    - Avoid using `all` for `transition-property` to prevent unintended animations.
    - Use `cubic-bezier` for custom timing functions.
    - Common issues:
      - "Doom flicker": Separate hover triggers from effects.
      - Background animation: Use `background-color` or `box-shadow` instead of `background`.

- **CSS Keyframe Animations:**

  - Defined using `@keyframes` to specify animation steps.
  - Steps:
    1. Define the animation with `@keyframes`.
    2. Apply it using `animation-name` and related properties.
  - Key Properties:
    - `animation-name`, `animation-duration`, `animation-delay`.
    - `animation-iteration-count`: Number of times the animation runs.
      - Use `infinite` for continuous animations.
    - `animation-direction`: Controls the order of keyframes (e.g., `normal`, `reverse`).
    - `animation-timing-function`: Rate of change for each step.
    - `animation-fill-mode`: Defines behavior before/after animation (e.g., `forwards`, `backwards`).
    - `animation-play-state`: Pauses or resumes the animation.
  - Notes:
    - Use percentages or `from`/`to` for keyframe steps.
    - Combine keyframes with the same properties using commas.

- **Animation Choreography:**

  - Use `nth-child` and CSS variables to stagger animations.

- **Dynamic Animation Updates with JavaScript:**

  - Add or modify `animation` properties dynamically.
  - Notes:
    - Removing `animation` reverts the element to its default CSS.

- **Data State Animation:**

  - Use `data-state` attributes to trigger animations based on state changes.

- **Animation Performance:**

  - Optimize by animating properties like `transform` and `opacity`.
  - Avoid animating properties that trigger layout or paint, such as `width`, `height`, `top`, `left`, `margin`, and `padding`.
  - Use `will-change` for hardware acceleration, but only when necessary to avoid memory overhead.

- **The Pixel Pipeline:**

  - Steps in the browser rendering process:
    1. **Recalculate Styles:** Determines applicable CSS rules.
    2. **Layout:** Calculates element positions and sizes.
    3. **Paint:** Fills in pixels with colors and textures.
    4. **Composite:** Combines layers for final rendering.
  - Notes:
    - Composite operations (`transform`, `opacity`) are the most efficient.
    - Layout operations (`width`, `height`, `margin`) are the most expensive.

- **What to animate?**

  - **Composite Operations (Best Performance):**
    - `transform` -> `translate`, `rotate`, `scale`, `skew`
    - `opacity`
  - **Paint Operations (Medium Performance):**
    - `border-radius`, `background`, `color`, `box-shadow`
  - **Layout Operations (Worst Performance):**
    - `width`, `height`, `position`, `margin`, `padding`
  - Pro Tip: Stick to composite operations whenever possible.
  - Flexibility: Some layout recalculations (e.g., height of absolutely-positioned elements) are less expensive.

- **Designing Animations:**

  - Action-Driven Animations:
    - Modal animations (open/close).
    - Button animations (hover, depress, release).
  - Orchestration:
    - Coordinate multiple animations for a cohesive effect.

- **Animation Accessibility:**

  - Respect user preferences for reduced motion.
  - Access in:
    - CSS: Use `@media (prefers-reduced-motion)`.
    - JavaScript: Check `window.matchMedia`.
    - React: Use libraries like `react-reduced-motion`.

- **Examples:**

  - Loading spinner.
  - Hamburger menu to close icon.
  - Photo card flip.
  - Navigation link flip-up.

- **Animation Libraries:**
  - Use libraries like `Framer Motion` or `GSAP` for advanced animations.

---

### Responsive Web Design Summary

- **Responsive User Interface Design:**

  - Challenges:
    - Wide range of screen sizes, device types, input methods, user preferences, and network speeds.
    - Flexible and resilient interfaces are essential.
  - Evolution:
    - Adaptive Design: Different HTML/CSS for each device.
    - Responsive Design: Same HTML/CSS adapts to all devices.

- **Responsive Web Design (RWD):**

  - Key Elements:
    - Fluid layouts: Use `%`, `vw`, `vh` instead of fixed `px`.
    - Responsive units: Use `em`/`rem` for scalable spacing and font sizes.
    - Flexible images: Use `%` or `max-width` for responsiveness.
    - Media queries: Define styles for different devices and screen sizes.
  - Meta Tag:
    - `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` ensures proper rendering on mobile devices.

- **Responsive vs Adaptive Design:**

  - Responsive: Single HTML adapts via CSS.
  - Adaptive: Multiple templates for different devices.

- **Media Queries:**

  - Tools for overriding styles based on device characteristics.
  - Syntax:
    - `@media (condition) { /* styles */ }`
    - Use `min-width` for mobile-first and `max-width` for desktop-first approaches.
  - Features:
    - Boolean logic: `and`, `or`, `not`.
    - Interaction features: `hover`, `pointer`.
    - Preference-based: `prefers-color-scheme`, `prefers-reduced-motion`.
  - Notes:
    - Avoid mixing mobile-first and desktop-first in the same project.
    - Use `em`/`rem` for breakpoints to respect user font size preferences.

- **Layouts:**

  - Responsive Layouts:
    - Use media queries to adapt layout based on screen size.
  - Fluid Layouts:
    - Use relative units (`%`, `vw`) or techniques like flexbox/grid for flexibility.

- **Responsive Typography:**

  - Body text: Consistent size across devices (minimum `16px`).
  - Headlines: Smaller on mobile for better fit.
  - Form fields: Larger on mobile to avoid zooming.
  - Use `em`/`rem` for scalable font sizes.

- **Responsive Images:**

  - Serve appropriate images for screen sizes and resolutions.
  - Techniques:
    - Use `srcset` and `sizes` attributes.
    - Use CSS `background-size` for decorative images.

- **Testing Responsive Designs:**

  - Tools:
    - Chrome DevTools for emulating devices.
    - Access localhost from other devices for real-world testing.
    - Remote debugging for troubleshooting.

- **Tips:**
  - Use content-specific breakpoints instead of device-specific ones.
  - Ensure designs are accessible and respect user preferences.

---

### Web UX Design Summary

- **Web Design:**

  - Process of creating websites, including layout, content production, and graphic design.
  - Ingredients:
    - Typography, Color, Images, Icons, Shadows, Border-radius, Whitespace, Visual Hierarchy, User Experience, Components/Layouts.

- **Typography:**

  - Art of arranging type for readability and appeal.
  - Typeface:
    - Serif: Traditional, formal, used for long texts.
    - Sans-Serif: Modern, informal, used for short texts.
  - Font:
    - Includes size, weight, and style (e.g., Regular, Bold).
    - Guidelines:
      - Font sizes: `16px-32px` for normal text, `50px+` for headings.
      - Line height: `1.5` for normal text, `2` for headings.
      - Limit lines to `75` characters.

- **Color:**

  - Choose colors matching website personality.
  - Establish a color system with main, grey, and accent colors.
  - Use colors strategically for emphasis and accessibility.

- **Images:**

  - Types: Product photos, storytelling photos, illustrations, patterns.
  - Guidelines:
    - Use relevant, high-quality images.
    - Compress images for performance.
    - Ensure text on images is readable (e.g., darken images, use text shadows).

- **Icons:**

  - Use consistent icon packs (e.g., Phosphor, ionicons).
  - Guidelines:
    - Use icons for visual assistance and bullet points.
    - Ensure icons match website personality.

- **Shadows:**

  - Create depth and emphasize elements.
  - Use sparingly and adjust based on element size.

- **Border-radius:**

  - Adds playfulness and matches typeface roundness.
  - Use on buttons, images, and standout sections.

- **Whitespace:**

  - Enhances design clarity and modernity.
  - Guidelines:
    - Use ample whitespace between sections and elements.
    - Start with more whitespace and adjust as needed.

- **Visual Hierarchy:**

  - Arranges elements by importance.
  - Guidelines:
    - Position important elements at the top.
    - Use font size, weight, and color to emphasize text.
    - Use background color, shadow, or borders for emphasis.

- **Website Personalities:**

  - Types:
    - Serious/Elegant: Serif fonts, gold/black colors.
    - Minimalist: Sans-serif fonts, simple layouts.
    - Bold/Confident: Bright colors, bold fonts.
    - Playful/Fun: Hand-drawn icons, colorful images.

- **User Experience (UX):**

  - UI: Focuses on graphical interface aesthetics.
  - UX: Ensures ease of use and aligns user goals with business goals.
  - Rules:
    - Use familiar patterns and descriptive call-to-actions.
    - Provide feedback for user actions (e.g., form errors).
    - Break up long text with headings and bullet points.

- **Components and Layout Patterns:**

  - Elements: Text, buttons, images, input fields.
  - Components: Breadcrumbs, pagination, feature boxes, forms.
  - Layouts: Grid, Z-pattern, single column, sidebar.

- **Design Inspiration:**

  - Resources: Land Book, One Page Love, Awwwards.

---

### Accessibility Summary

- **Accessibility:**

  - Ensures web content is usable by everyone, including people with disabilities.

- **Keyboard Events:**

  - `Tab` key navigation:
    - `tab`: Moves forward through interactive elements.
    - `shift + tab`: Moves backward.
    - Focus indicators are essential for sighted keyboard users.
  - `tabindex` attribute:
    - Makes elements tabbable and defines tab order.
    - Negative values allow focus management via JavaScript.
  - Keyboard event types:
    - `keydown`, `keypress`, `keyup`.

- **Screen Readers:**

  - Use `alt` attributes for images:
    - Empty `alt=""` skips the image for screen readers.
    - Avoid phrases like "picture of" as screen readers announce it automatically.
  - Hide elements visually but keep them accessible using `.visually-hidden`.

- **Accessible HTML:**

  - Semantic elements:
    - Examples: `<aside>`, `<footer>`, `<header>`.
  - Labels for form fields:
    - Explicit: `<label for="id">`.
    - Implicit: Wrap input with `<label>`.
    - Use `aria-label` for non-labelable elements.

- **Accessible CSS:**

  - Visually hidden elements:

    - Use CSS to hide elements visually but keep them accessible to screen readers.
    - Example:

      ```css
      .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
      ```

- **ARIA Roles:**

  - Provide semantic meaning to content for assistive technologies.
  - Live region roles:
    - `assertive`: Announces updates immediately.
    - `polite`: Announces updates when idle.
    - `off`: Ignores updates.
  - `aria-label`:
    - Adds annotations for screen readers.

- **Colors:**

  - Contrast ratios:
    - `4.5:1` for normal text, `3:1` for large text.
    - Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
  - Simulate color blindness using Chrome DevTools.

- **Accessibility Tools:**

  - [WAVE](https://wave.webaim.org/): Evaluates web accessibility.

---

## CSS Frameworks & Mehtodologies

### CSS Methodologies and Frameworks

- **Modern Component Architecture & Methodologies**

  - CSS lacks a built-in scoping mechanism; everything is global.
  - CSS methodologies solve scalability and maintainability issues by modularizing styles.
  - Key guidelines include:
    - CSS and HTML best practices
    - Class- and ID-naming conventions
    - Ordering and grouping of CSS style rules
    - Code formatting
  - No single "best" methodology; different approaches suit different projects.

- **Object-Oriented CSS (OOCSS)**

  - Focuses on reducing duplication and maintaining DRY stylesheets.
  - Separates structure (layout) from skin (visual properties).
  - Avoids descendant selectors; uses class selectors exclusively.
  - Pros: Reusable, readable, maintainable.
  - Cons: Can lead to many classes, making maintenance harder.

- **Block Element Modifier (BEM)**

  - Divides UI into independent blocks with clear naming conventions.
  - Naming structure:
    - `.block`, `.block__element`, `.block--modifier`, `.block__element--modifier`
  - Benefits:
    - Avoids specificity issues.
    - Provides clear, descriptive class names.
  - File structure:
    - Blocks, elements, and modifiers organized into directories/files.
  - Criticisms:
    - Long, non-intuitive class names for beginners.

- **Scalable and Modular Architecture for CSS (SMACSS)**

  - Focuses on categorization, naming conventions, and decoupling CSS from HTML.
  - Categories:
    - Base: Default styles for HTML elements.
    - Layout: Structural layout of pages (e.g., grids, containers).
    - Modules: Reusable components (e.g., buttons, forms).
    - State: Current state of elements (e.g., active, hidden).
    - Themes: Style rules for user preferences or contexts.
  - Notes:
    - Use `shame.css` for temporary custom classes.

- **ITCSS (Inverted Triangle CSS)**

  - Organizes CSS into layers:
    - Settings: Fonts, colors.
    - Tools: Mixins, functions.
    - Generic: Resets, box-sizing.
    - Elements: Bare HTML elements.
    - Objects: Class-based selectors for design patterns.
    - Components: Specific UI components.
    - Utilities: Helper classes with `!important` overrides.

- **BEMIT**

  - Combines BEM with ITCSS principles.
  - Adds namespaces for clarity:
    - `c-` for Components
    - `o-` for Objects
    - `u-` for Utilities
    - `is-` / `has-` for States
  - Introduces responsive suffixes (e.g., `@md`, `@lg`).

- **Key Questions for Interview Preparation**
  - How do CSS methodologies address scalability and maintainability?
  - What are the pros and cons of OOCSS, BEM, and SMACSS?
  - How does ITCSS differ from other methodologies?
  - When should you use BEMIT over traditional BEM?

---

### CSS Modules Overview

- **What are CSS Modules?**

  - A tool to write vanilla CSS and import it into JS files.
  - Not a browser feature but a build step using tools like `Webpack` or `Browserify`.
  - Changes class names and selectors to be scoped (namespaced).
  - Prevents naming clashes and ensures locally scoped styles.
  - Often used with **PostCSS** for features like autoprefixing and transpiling.

- **How it Works**

  - **Step 1**: Create a CSS file with `.module` in the extension and write styles normally.

    ```css
    /* styles.module.css */
    .greeting {
      color: green;
    }
    ```

  - **Step 2**: Import the CSS file into a JS file and use the `styles` object to access class names.

    ```jsx
    import styles from './styles.module.css';

    function Greeting() {
      return <h2 className={styles.greeting}>Good Morning</h2>;
    }
    ```

- **Pros and Cons**

  - **Pros**:
    - Solves scoping and specificity issues by generating globally unique class names.
    - Familiar syntax, feels like writing plain CSS.
    - Supports `composes` for extending existing CSS classes.
  - **Cons**:
    - Lacks modern convenience features like autoprefixing.
    - Difficult to share data between CSS and JS.

- **Key Questions for Interview Preparation**
  - How do CSS Modules ensure locally scoped styles?
  - What are the advantages of using CSS Modules in large projects?
  - How do CSS Modules differ from other CSS-in-JS solutions?

---

### CSS Preprocessors and Build Process

- **CSS Preprocessors**

  - Extend CSS with scripting capabilities and compile into standard CSS.
  - Key features:
    - Variables, loops, if/else statements, mixins, nesting, importing.
    - Write less code and use logic for maintainable styles.
  - Popular preprocessors:
    - `Sass`: Built on Ruby, supports frameworks like Gumby and Foundation.
    - `Less`: Runs in Node.js and supports real-time compilation in the browser.
    - `Stylus`: Built on Node.js, offers flexible syntax and powerful functions.

- **Reasons to Use a CSS Preprocessor**

  - Faster development and easier maintenance with variables, mixins, and functions.
  - DRY (Don't Repeat Yourself) principles for organized and reusable CSS.
  - Adds missing features like variables and mixins.

- **Value and Limitations of Preprocessors**

  - Value:
    - Introduce file partials, nesting, variables, and mixins.
    - Useful for managing large codebases and maintaining consistency.
  - Limitations:
    - Not extendable or limitable; functionality is predefined.
    - Requires specific syntax that browsers cannot parse natively.

- **Pros and Cons of CSS Preprocessors**

  - **Pros**:
    - Powerful tools like loops, mixins, and nesting.
    - High developer satisfaction compared to vanilla CSS.
  - **Cons**:
    - Requires a build step, slower in development.
    - Global by nature, lacks component scoping.
    - Limited real-time capabilities compared to CSS variables.
    - Dependency issues and naming clashes with native CSS features.

- **CSS Build Process**

  - Transforms preprocessor source code into browser-compatible CSS.
  - Steps:
    - **Compilation**: Converts preprocessor code to CSS (e.g., `main.sass` -> `main.css`).
      - Server-side (e.g., Gulp, Webpack) or client-side compilation.
    - **Concatenation**: Combines multiple CSS files into one to reduce HTTP requests.
    - **Prefixing**: Adds vendor prefixes for cross-browser compatibility (e.g., Autoprefixer).
    - **Compressing/Minification**: Reduces file size by removing unnecessary characters (e.g., cssnano).
  - Full build process example:
    - Using NPM scripts or Webpack for tasks like compilation, concatenation, prefixing, and minification.

- **Key Questions for Interview Preparation**
  - What are the advantages of using CSS preprocessors?
  - How do preprocessors differ from native CSS features?
  - What are the steps in the CSS build process, and why are they important?

---

### PostCSS Overview

- **What is PostCSS?**

  - A tool for transforming CSS with JavaScript using plugins.
  - Not a pre-processor or post-processor but a transpiler.
  - Enhances CSS by creating an abstract syntax tree and processing it with plugins.
  - Commonly used with preprocessors like Sass for optimization and post-processing.

- **Why PostCSS?**

  - Ensures CSS compatibility with older browsers (e.g., transpiling `inset` to `top`, `bottom`, `left`, `right`).
  - Modular and configurable with plugins for specific needs.
  - Allows custom configurations for each project.
  - Lightweight and efficient setup.

- **How PostCSS is Used**

  - Applied via:
    - `npm` or `yarn` scripts.
    - Task runners like `Gulp` or `Grunt`.
    - Build tools like `Webpack` or `Rollup`.
    - Frameworks like `TailwindCSS`.
  - Often paired with preprocessors like Sass for complementary functionality.

- **Installation**

  - Requires `Node.js` and can be installed via `npm`:

    ```sh
    npm install postcss postcss-cli postcss-import
    ```

  - Example usage:

    ```sh
    postcss ./src/main.css --use postcss-import --output ./styles.css
    ```

  - Supports plugins like `autoprefixer` for browser compatibility.

- **Source Maps**

  - Inline source maps are enabled by default for debugging.
  - External source maps can be created with `--map`.
  - Disable source maps for production with `--no-map`.

- **Automatic Builds**

  - Use the `--watch` option to rebuild CSS automatically on file changes.

    ```sh
    postcss ./src/main.css --use postcss-import --watch --verbose
    ```

- **PostCSS Configuration File**

  - Create a `postcss.config.cjs` file for plugin and environment-specific settings.
  - Example configuration:

    ```js
    module.exports = cfg => {
      const devMode = cfg.env === 'development';
      return {
        map: devMode ? 'inline' : null,
        plugins: [
          require('postcss-import')(),
          require('autoprefixer')(),
          devMode ? null : require('cssnano')()
        ]
      };
    };
    ```

- **PostCSS Plugins**

  - Plugins extend functionality (e.g., `minify`, `autoprefix`, `nesting`, `variables`).
  - Example: Adding `nesting` support:

    ```js
    module.exports = {
      plugins: [require('postcss-nesting')]
    };
    ```

- **Using PostCSS**

  - Example 1: Adding features to CSS with plugins like `postcss-import`, `autoprefixer`, `postcss-nested`.
  - Example 2: Optimizing CSS with plugins like `cssnano` (minification) and `purgecss` (removing unused styles).

- **Key Questions for Interview Preparation**
  - How does PostCSS differ from preprocessors like Sass?
  - What are the advantages of using PostCSS plugins?
  - How can PostCSS be integrated into modern build tools?

---

### Sass Overview

- **What is Sass?**

  - A CSS preprocessor that compiles to vanilla CSS.
  - Extends CSS with features like nesting, variables, mixins, and iteration.
  - Operates similarly to TypeScript: valid CSS is valid Sass, and it compiles at build-time.

- **Why Use Sass?**

  - Adds features not available in CSS:
    - Variables, nesting, mixins, inheritance, modules, importing, math operators, color functions, loops, conditionals, and custom functions.
  - Organizes code into multiple files using partials and modules.
  - Reduces repetitive code and improves maintainability.

- **When to Use Sass Over CSS**

  - Supports two syntaxes:
    - `SCSS`: CSS-like syntax, fully CSS-compliant.
    - `Sass`: Indented syntax, more compact and flexible.
  - Choose based on team preference and browser support.

- **Sass Compilers**

  - **Dart Sass**: Official, recommended, faster, and up-to-date.
  - **Ruby Sass**: Original, slower, no longer maintained.
  - **Node Sass**: Deprecated and no longer maintained.

- **Installation Methods**

  - **Using Extensions**: Use updated `live sass compiler` extension with proper settings.
  - **Using Task Runners (Preferred)**:
    - `npm` scripts: Install `sass` and add a compile script.
    - Task runners like `gulp` or `grunt`.
    - Bundlers like `webpack` with `sass-loader`.
  - **Starter Project**: Use a pre-configured `package.json` for compiling, autoprefixing, and live-reloading.

- **7-1 Pattern (Folder Structure)**

  - Organizes `scss` files into seven folders (e.g., abstracts, base, components, layout, pages, themes, vendors) and one main file for imports.

- **Partials**

  - Files starting with `_`, ignored during compilation.
  - Use `@use` (recommended) or `@import` (deprecated) to import partials.

- **Key Features**

  - **Nesting Selectors**: Use `&` for parent selectors and nest media queries.
  - **Variables**: Define reusable values with `$`, support global and local scopes.
  - **Control Flow**: Use `@if` and `@else` for conditional logic.
  - **Loops and Iteration**: Use `@for`, `@each`, and `@while` for generating styles dynamically.
  - **Mixins**: Reusable blocks of code with optional arguments, invoked using `@include`.
  - **Placeholders**: Reusable styles without arguments, invoked using `@extend`.
  - **Functions**: Built-in and custom functions for returning values.

- **Key Questions for Interview Preparation**
  - What are the advantages of using Sass over CSS?
  - How do `@use` and `@import` differ?
  - When should you use mixins versus placeholders?
  - How does Sass improve maintainability in large projects?

---

### Styled Components Overview

- **What are Styled Components?**

  - A library for React and React Native developers to use component-level styles.
  - Uses `CSS-in-JS` technique with tagged template literals.
  - Styles are applied at runtime, not build time, and injected into the document's `<head>`.

- **Why Styled Components?**

  - Automatic vendor prefixing for browser compatibility.
  - Sass-like preprocessing capabilities (e.g., nesting, mixins).
  - Unique class names to avoid conflicts.
  - Eliminates unused styles.
  - Allows JavaScript usage in CSS for dynamic styling.
  - Centralizes styles for easier maintenance and debugging.

- **Installation**

  - Install via `npm` or `yarn`:

    ```sh
    npm install --save styled-components
    ```

  - Optional Babel plugin for better debugging:

    ```sh
    npm install --save-dev babel-plugin-styled-components
    ```

  - Editor integration with `vscode-styled-components` for syntax highlighting and auto-complete.

- **Syntax and Usage**

  - Uses tagged template literals to style components:

    ```js
    const Title = styled.h1`
      font-size: 1.5em;
      color: palevioletred;
    `;
    ```

  - Supports pseudo-elements/classes and nesting with `&`.

- **How it Works**

  - Creates a React component with styles attached.
  - Generates unique hashed class names.
  - Injects styles into the document's `<head>`.

- **Extending Styles (Composition)**

  - Reuse and override styles by extending styled components:

    ```js
    const PrimaryButton = styled(Base)`
      background: blue;
    `;
    ```

- **Props for Dynamic Styling**

  - Pass props to styled components for dynamic styles:

    ```js
    const Button = styled.button`
      background-color: ${props => (props.primary ? 'red' : 'white')};
    `;
    ```

- **Dynamic Tags (`"as"` Prop)**

  - Change the rendered tag dynamically:

    ```js
    <Wrapper as='a' href='/'>
      Link
    </Wrapper>
    ```

- **Attributes in Styled Components**

  - Use `attrs` to set static or dynamic attributes:

    ```js
    const Link = styled.a.attrs({ target: '_blank' })`
      color: blue;
    `;
    ```

- **Media Queries**

  - Define media queries within component styles:

    ```js
    const Button = styled.button`
      @media (min-width: 768px) {
        font-size: 2em;
      }
    `;
    ```

- **Themes**

  - Use `ThemeProvider` to pass down theme values:

    ```js
    <ThemeProvider theme={{ main: 'mediumseagreen' }}>
      <App />
    </ThemeProvider>
    ```

- **Animation**

  - Create reusable animations with `keyframes`:

    ```js
    const fadeIn = keyframes`
      from { opacity: 0; }
      to { opacity: 1; }
    `;
    ```

- **Global Styling**

  - Use `createGlobalStyle` for global styles:

    ```js
    const GlobalStyle = createGlobalStyle`
      body { margin: 0; }
    `;
    ```

- **Debugging**

  - Use Babel macros or plugins for better debugging in DevTools.

- **Server-Side Rendering**

  - Use `ServerStyleSheet` for SSR support.

- **Key Questions for Interview Preparation**
  - How does styled-components differ from traditional CSS or preprocessors like Sass?
  - What are the advantages of using `CSS-in-JS`?
  - How do styled-components handle dynamic styling and theming?

---

### Tailwind CSS

- **Overview**

  - Utility-first CSS framework for building custom UIs directly in markup.
  - Emphasizes "Atomic CSS" with single-purpose classes.
  - Optimized for small CSS bundle sizes, responsive design, and customizability.
  - Resources: [TailwindCSS](https://tailwindcss.com/), [Playground](https://play.tailwindcss.com/).

- **Tailwind Layers**

  - `base`: Default styles for raw HTML elements (e.g., `h1`, `p`).
  - `components`: Styles for reusable components (e.g., `.btn`, `.card`).
  - `utilities`: One-off utility classes for specific properties (e.g., `margin`, `padding`).

- **Comparison: TailwindCSS vs. Bootstrap**

  - TailwindCSS: Utility-first, no pre-styled UI components, highly customizable.
  - Bootstrap: UI kit with pre-styled components, less customizable, sites often look similar.

- **PurgeCSS**

  - Removes unused CSS at build time to reduce file size.
  - Configuration example:

    ```js
    purge: {
      enabled: true,
      content: ['./**/*.html']
    }
    ```

- **Configuration**

  - Installation: Avoid CDN for production; configure `tailwind.config.js`.
  - Adding custom colors/fonts:

    - Use `extend` to add new values while keeping defaults.
    - Example:

      ```js
      theme: {
        extend: {
          colors: { primary: '#3490dc' },
          fontFamily: { main: ['Roboto', 'sans-serif'] }
        }
      }
      ```

  - Configuring variants: Enable specific variants for core plugins (e.g., `margin: ['first']`).

- **Basic Styling**

  - Sizing and spacing: Utility classes for `margin`, `padding`, `width`, `height`.
  - Text sizing: Predefined classes (e.g., `text-xs`, `text-lg`).
  - Colors: Utility classes for text and background colors (e.g., `text-blue-500`).
  - Custom values: Use bracket notation for specific values (e.g., `h-[400px]`).

- **Variants**

  - Pseudo-classes: Apply styles based on state (e.g., `hover:bg-blue-700`).
  - Form elements: Style placeholders, outlines, accents, and validation states.
  - Peer modifiers: Style elements based on sibling states (e.g., `peer-invalid`).
  - Group modifier: Style children based on parent states (e.g., `group-hover`).
  - Before/After: Use `content` for pseudo-elements.
  - Dark mode: Enable via `darkMode: 'class'` in `tailwind.config.js`.

- **Layout Styles**

  - Columns: Create masonry-like layouts with `columns-{value}`.
  - Flexbox: Utility classes for flex properties (e.g., `flex-row`, `justify-center`).
  - Grid: Utility classes for grid properties (e.g., `grid-cols-3`, `gap-4`).

- **Functions and Directives**

  - `@apply`: Inline utility classes into custom CSS for reusability.

- **Responsive Design**

  - Mobile-first approach with `min-width` media queries.
  - Responsive classes: `{{screen}}:{{property}}-{{value}}` (e.g., `sm:text-left`).
  - Customize breakpoints in `tailwind.config.js`.

- **Animations and Transitions**

  - Built-in animations: `pulse`, `spin`, `bounce`.
  - Example:

    ```html
    <div class="animate-pulse">...</div>
    ```

---

## JavaScript

### JavaScript Summary

- **Overview**

  - High-level, interpreted, dynamic, single-threaded, object-oriented programming language.
  - Weakly and dynamically typed, multi-paradigm (supports procedural, object-oriented, and functional programming).

- **ECMAScript (ES)**

  - Standard for scripting languages to standardize JavaScript.
  - Backward-compatible versions released annually.
  - Modern JavaScript usage examples provided.

- **Adding JavaScript to HTML**

  - Use `<script>` tag with `src` attribute for external files.
  - Inline scripts are written directly in the `<script>` tag.
  - Benefits of external files: caching and reduced traffic.
  - A single `<script>` tag cannot have both `src` and inline code.

- **Variables**

  - Naming guidelines: no digits at the start, no reserved keywords, uppercase for constants.
  - **`var` vs `let` & `const`**:
    - `var`: Function-scoped, tolerates re-declarations, hoisted but undefined until assigned, global scope accessible via `window`.
    - `let` & `const`: Block-scoped, safer and modern alternatives.

- **Memory Management**

  - **Garbage Collection**:
    - Automatic, uses "Mark-and-Sweep" algorithm.
    - Objects are removed when unreachable.
  - **Memory Leaks**:
    - Common causes: global variables, event listeners, closures, timers, DOM elements.
    - Example: Changing variable types without clearing memory.

- **Functions**

  - Reusable blocks of code executed when invoked.
  - **Function Declaration vs Expression**:
    - Declarations: Hoisted, can be called before definition.
    - Expressions: Not hoisted, can be anonymous or named.
  - **Arrow Functions**:
    - Shorter syntax, no `this`, limitations include no `arguments` object and cannot be called with `new`.
  - **IIFE (Immediately Invoked Function Expression)**:
    - Runs as soon as defined, avoids global scope pollution, less common now due to `let` and `const`.
  - **Function Binding**:
    - Solutions for losing `this`: Wrapper, `bind`, or arrow functions.

- **Iteration & Loops**

  - **For Loop**: Runs a specific number of times.
  - **For..of Loop**: Iterates over iterables (e.g., arrays, strings).
  - **For..in Loop**: Iterates over object keys, slower for arrays.
  - **For await..of Loop**: Iterates over async iterables.

- **Data Structures**

  - **Strings**:
    - Methods and operations, regular expressions.
  - **Arrays**:
    - Destructuring, transformation methods (`map`, `filter`, `reduce`).
  - **Objects**:
    - Methods, destructuring, transformations.
  - **Sets & Maps**:
    - WeakSet and WeakMap for memory efficiency.

- **Numbers**

  - Math operations, special numbers, internationalization.

- **Dates**

  - Operations, internationalization, third-party libraries.

- **Operators**

  - Types, precedence, spread/rest operators, nullish coalescing (`??`).

- **Errors**

  - Error object, custom errors, extending `Error`, handling strategies.

- **Forms**

  - Elements (`input`, `textarea`, `select`), event handlers, validation, FormData API.

- **Cross-Site Scripting (XSS)**

  - Causes and defense mechanisms.

- **Implementations**

  - Examples: Lazy loading, slider pagination.

- **Writing Documentation**
  - Best practices for clear and maintainable documentation.

---

### OOP in JavaScript

- **Object-Oriented Paradigm**

  - Encapsulates data and methods into objects, replacing procedural paradigms.
  - Benefits:
    - Readable and maintainable code.
    - Easier feature addition.
    - Efficient memory usage.
  - Objects are self-contained units of code and data, interacting through public interfaces.
  - **Class**: Blueprint for objects, describing properties and methods.

- **OOP Principles**

  - **Abstraction**: Hides unnecessary details, focusing on the big picture.
  - **Encapsulation**: Keeps properties/methods private, exposing only public APIs.
  - **Inheritance**: Enables child classes to inherit from parent classes for code reuse.
  - **Polymorphism**: Allows child classes to override parent methods.

- **Object**

  - Collection of properties and methods modeling real-world objects.
  - **Accessor Properties**:

    - `get` and `set` methods for controlled property access.
    - Example:

      ```js
      let user = {
        get fullName() {
          return `${this.name} ${this.surname}`;
        },
        set fullName(value) {
          [this.name, this.surname] = value.split(' ');
        }
      };
      ```

  - **Smarter Getters/Setters**:
    - Perform operations or validations before setting/returning values.

- **Prototypes**

  - Objects linked to a prototype object for shared methods and properties.
  - **Prototype Chain**:
    - Ends at `null`.
    - Default prototype is `Object.prototype`.
  - **`__proto__`**:
    - Hidden property linking objects to prototypes.
    - Use `Object.getPrototypeOf`/`Object.setPrototypeOf` instead.
  - **Why Prototypes?**:
    - Avoids duplicating methods for each object instance.
    - Shared methods improve performance.

- **Constructor Function**

  - Function creating object types, called with `new` keyword.
  - Steps:
    1. Creates an empty object and assigns it to `this`.
    2. Links `__proto__` to the constructor's `prototype`.
    3. Executes the function body.
    4. Returns the object.
  - Example:

    ```js
    function User(name) {
      this.name = name;
    }
    User.prototype.sayHi = function () {
      alert(this.name);
    };
    ```

- **`object.create()`**

  - Creates objects inheriting directly from a prototype.
  - Example:

    ```js
    const proto = {
      greet() {
        console.log('Hello');
      }
    };
    const obj = Object.create(proto);
    obj.greet();
    ```

- **ES6 Classes**

  - Modern syntax for constructor functions and prototypal inheritance.
  - **Constructor**: Special method for initializing objects.
  - **Getters/Setters**: Define controlled access to properties.
  - **Static Methods/Properties**: Belong to the class, not instances.
  - **Encapsulation**: Public, private, and protected properties/methods.
  - **Method Chaining**: Enables chaining multiple method calls.

- **Class Inheritance**

  - Methods:
    - `Constructor/Factory Function` (Old).
    - `new` keyword (Old).
    - `ES6 Classes` (New).
    - `Object.create()`.
  - **Mixins**: Reuse methods across unrelated classes.

- **Notes**
  - Avoid modifying native prototypes unless polyfilling.
  - Use prototypal inheritance for shared methods to optimize memory.

---

### Document Object Model (DOM) Summary

- **Overview**

  - Represents all page content as objects that can be modified.
  - The `document` object is the main entry point for interacting with the DOM.
  - DOM is part of the browser environment (Web API), not JavaScript itself.

- **Object Model**

  - **Browser Object Model (BOM)**: Represents the browser window/tab, including history and screen objects.
  - **Document Object Model (DOM)**: Structured representation of an HTML document, enabling JavaScript to access, manipulate, and delete elements.
  - **Node Types**:
    - `document`: Entry point into the DOM.
    - `element nodes`: HTML tags forming the DOM tree structure.
    - `text nodes`: Contain text.
    - `comments`: Invisible to users but accessible via JavaScript.

- **Creating and Manipulating Elements**

  - Steps:
    - Create: `document.createElement()`.
    - Add content: `textContent` or `innerHTML`.
    - Insert: `append`, `before`, `insertAdjacentHTML`.
    - Remove: `element.remove()`.
  - Notes:
    - Moving an element automatically removes it from its old location.
    - `insertAdjacentHTML` parses HTML strings and inserts nodes at specified positions.

- **DOM Collections**

  - **HTMLCollection**:
    - Contains only element nodes.
    - Live collection (updates with DOM changes).
  - **NodeList**:
    - Can contain any node type (elements, text, comments).
    - Often static (does not update with DOM changes).
  - Use `Array.from()` to convert collections into arrays for array methods.

- **Cloning and Importing Nodes**

  - `Node.cloneNode(deep)`: Clones a node; `deep` clones descendants.
  - `document.importNode(node, deep)`: Imports a node from another document.

- **DOM Traversing**

  - Navigate between elements based on relationships (parent, child, sibling).
  - Element-only navigation methods: `firstElementChild`, `nextElementSibling`, etc.
  - `closest(selector)`: Finds the nearest ancestor matching the selector.

- **Searching Elements**

  - Methods:
    - `getElementById(id)`: Single element by ID.
    - `getElementsByTagName(name)`: Collection by tag name.
    - `getElementsByClassName(name)`: Collection by class name.
    - `querySelector(selector)`: First element matching CSS selector.
    - `querySelectorAll(selector)`: Static collection matching CSS selector.
  - Notes:
    - `querySelector` supports complex selectors.
    - `getElementsBy*` methods return live collections.

- **Node Properties**

  - `innerHTML`: HTML content as a string.
  - `innerText`: Text content with applied CSS.
  - `textContent`: Plain text without tags.
  - `outerHTML`: Full HTML of the element, including the element itself.

- **HTML Attributes**

  - Standard attributes create corresponding DOM properties (e.g., `id`, `class`).
  - Non-standard attributes can be accessed via `getAttribute` and `setAttribute`.
  - `data-*` attributes:
    - Reserved for custom data.
    - Accessible via `dataset` property.

- **Styles and Classes**

  - **Element Style**:
    - `elem.style`: Inline styles as an object.
    - `getComputedStyle`: Resolved styles, usually in `px`.
  - **Element Classes**:
    - `className`: Replaces all classes.
    - `classList`: Methods to add, remove, toggle, and check classes.

- **Element/Window Size and Scrolling**

  - Geometry properties: `offsetWidth`, `clientHeight`, etc.
  - Window sizes: `window.innerWidth`, `window.innerHeight`.
  - Scrolling:
    - Manual: `scrollTo`, `scrollBy`.
    - Smooth scrolling: CSS or JavaScript.

- **Shadow DOM**

  - Encapsulation for elements and styles.
  - Shadow tree: Isolated DOM subtree.

- **Virtual DOM**

  - Efficiently updates the real DOM by comparing changes.

- **Events**

  - **Event Handling**:
    - Add: `addEventListener`.
    - Remove: `removeEventListener`.
  - **Event Propagation**:
    - Bubbling: Event propagates from target to ancestors.
    - Capturing: Event propagates from ancestors to target.
    - Delegation: Use a common ancestor to handle events for multiple elements.
  - **Custom Events**:
    - Dispatch: `dispatchEvent`.
    - Create: `new Event(type)`.

- **Script Loading and Lifecycle**
  - Attributes:
    - `async`: Loads script asynchronously, executes immediately.
    - `defer`: Loads script asynchronously, executes after HTML parsing.
  - Lifecycle events: `DOMContentLoaded`, `load`, `beforeunload`, `unload`.

---

### Asynchronous JavaScript Summary

- **Overview**

  - JavaScript is synchronous and single-threaded by default.
  - Asynchronous behavior is enabled via browser APIs (e.g., `setTimeout`, `fetch`) or Node.js APIs.
  - Asynchronous code allows tasks to run independently of the main program flow.

- **How Asynchronous Code Works**

  - **Concurrency Model**:
    - JavaScript engine handles multiple tasks using the event loop.
    - Worker threads handle background tasks without blocking the main thread.
  - **Event Loop**:
    - Continuously checks if the call stack is empty.
    - Executes tasks from the callback queue and microtasks queue.
    - Microtasks (e.g., promises) have higher priority than macrotasks (e.g., `setTimeout`).

- **Callbacks**

  - Functions passed as arguments to other functions, executed after a task completes.
  - Example:

    ```js
    function loginUser(email, callback) {
      setTimeout(() => callback({ email }), 2000);
    }
    loginUser('test@test.com', user => console.log(user));
    ```

  - **Callback Hell**: Deeply nested callbacks make code hard to read and maintain.

- **Scheduling**

  - **`setTimeout`**: Executes a function once after a delay.

    - Example:

      ```js
      setTimeout(() => console.log('Hello'), 1000);
      ```

    - Cancel with `clearTimeout(timerId)`.

  - **`setInterval`**: Repeats a function at specified intervals.
    - Cancel with `clearInterval(timerId)`.
  - **Nested `setTimeout`**: More precise than `setInterval` for scheduling repeated tasks.

- **Promises**

  - Represent the future result of an asynchronous operation.
  - States: `pending`, `fulfilled`, `rejected`.
  - Example:

    ```js
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Success'), 1000);
    });
    promise.then(result => console.log(result));
    ```

  - Avoids callback hell by chaining `.then()` and handling errors with `.catch()`.

- **Promise Chaining**

  - Sequence:
    - Chain `.then()` to execute tasks in order.
  - Parallel:
    - Use `Promise.all()` to run tasks concurrently.
  - Race:
    - Use `Promise.race()` to resolve/reject based on the first settled promise.

- **Async/Await**

  - Modern syntax for consuming promises.
  - Example:

    ```js
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    ```

- **Error Handling**

  - **Promises**:
    - Use `.catch()` for rejected promises.
    - Use `.finally()` for cleanup tasks.
  - **Async/Await**:
    - Use `try...catch` for error handling.
  - **Global Error Handling**:
    - Handle unhandled rejections with `process.on('unhandledRejection')` (Node.js).

- **Concurrency and Parallelism**

  - **Web Workers**:

    - Run scripts in background threads.
    - Example:

      ```js
      const worker = new Worker('worker.js');
      worker.postMessage('Start');
      worker.onmessage = event => console.log(event.data);
      ```

- **Network Requests**

  - **AJAX**:
    - Use `XMLHttpRequest` for asynchronous HTTP requests.
  - **Fetch API**:

    - Modern alternative to `XMLHttpRequest`.
    - Example:

      ```js
      fetch('https://api.example.com')
        .then(response => response.json())
        .then(data => console.log(data));
      ```

  - **Axios**:
    - Promise-based HTTP client with additional features (e.g., interceptors, custom instances).

- **Notes**
  - JavaScript timers (`setTimeout`, `setInterval`) are browser features, not part of the language.
  - Use `queueMicrotask` for scheduling microtasks.

---

### Web APIs

- **API**

  - Application Programming Interface allows software components to communicate.
  - Types:
    - DOM API: Manipulate the DOM.
    - Fetch API: Make network requests.
    - Web Storage API: Store data in the browser.
    - Online APIs: Interact with online services.
  - Key Concepts:
    - Endpoints: URLs for sending/receiving data.
    - Data Formats: JSON (preferred) and XML.
    - JSON Methods:
      - `JSON.stringify`: Convert objects to JSON.
      - `JSON.parse`: Convert JSON to objects.

- **HTML5 APIs**

  - Browser-implemented APIs for specific functionalities.
  - Examples:
    - Geolocation: User location.
    - LocalStorage & SessionStorage: Store data in the browser.
    - History: Access browser history.

- **Storing Data in the Browser**

  - **Cookies**
    - Strings of data stored in the browser, often used for authentication.
    - Options:
      - `path`, `domain`, `expires`, `secure`, `samesite`.
    - Access via `document.cookie`.
  - **LocalStorage & SessionStorage**
    - Key/value storage objects.
    - LocalStorage persists across sessions; SessionStorage is session-specific.
    - Methods: `setItem`, `getItem`, `removeItem`, `clear`.
    - Use JSON for structured data.
  - **IndexedDB**
    - Browser database for large, structured data.
    - Features:
      - Asynchronous, supports transactions, and key range queries.
      - Suitable for offline apps.

- **History API**

  - Update browser history without page reloads.
  - Methods: `pushState`, `replaceState`.

- **Location API**

  - Access and manipulate the current URL.
  - Example: `window.location.href` for redirection.

- **Intersection Observer API**

  - Detect element visibility in the viewport.
  - Use Cases:
    - Lazy loading, infinite scrolling, sticky navigation.
  - Efficient alternative to `scroll` events.

- **Media APIs**

  - **MediaStream API**: Access media devices like cameras and microphones.
  - **Web Audio API**: Process and synthesize audio.

- **Canvas API**

  - Draw graphics and animations on a web page.

- **Notifications API**

  - Display notifications to users.

- **WebSockets API**

  - Enable real-time communication.
  - Techniques:
    - Client Pull: Short/Long Polling.
    - Server Push: WebSockets, Server-Sent Events.

- **Third-party APIs**

  - Examples:
    - Leaflet API: Interactive maps.
    - Public APIs: Free APIs for various services.

- **Key Questions**
  - What are the differences between LocalStorage, SessionStorage, and Cookies?
  - When should you use IndexedDB over LocalStorage?
  - How does the Intersection Observer API improve performance compared to `scroll` events?

---

### JavaScript Modules

- **Notes**

  - Modules help organize and maintain code by separating functionality into different files.
  - A module can contain variables, functions, and classes.
  - `Top-level await` (ES2022): Allows `await` at the top level of a module without an `async` wrapper.
    - Works only in ES modules (`import` or `type="module"`).
    - Blocks module execution until the promise resolves (not recommended).

- **Modular Pattern**

  - Uses IIFE (Immediately Invoked Function Expression) to return an object with functions and variables.
  - Benefits:
    - Avoids polluting the global namespace.
    - Encapsulates code and exposes an interface.
    - Prevents naming collisions.
  - Problems:
    - Dependency order is hard to manage.
    - Difficult to test private methods.
  - Solution: Use `CommonJS` or `ES6 modules` for better dependency management.

- **Revealing Modular Pattern**

  - Defines private variables and functions, returning an object with pointers to public functionality.
  - Uses closures to maintain private scope.

- **Modules**

  - Split large codebases into smaller, reusable files.
  - Directives:
    - `export`: Makes variables/functions accessible outside the module.
    - `import`: Imports functionality from other modules.
  - Requires a build process (e.g., bundling, transpiling, polyfilling) for browser compatibility.
  - Use `<script type="module">` to load modules in browsers.
    - Must use HTTP(s) due to CORS restrictions.

- **Module Features**

  - Compose, isolate, abstract, organize, and reuse code.
  - Always in "strict mode."
  - Module-level scope: Variables/functions are not visible outside the module.
  - Code is evaluated only once, even if imported multiple times.
  - `this` is `undefined` in modules.
  - Comparison: ES6 Modules vs Scripts:
    - Modules have module-level scope, strict mode by default, and asynchronous file downloading.

- **Module Scripts**

  - Deferred by default: Load in parallel and execute after the HTML document is ready.
  - External scripts with the same `src` run only once.
  - Require CORS headers for cross-origin scripts.

- **Exporting & Importing Code**

  - `CommonJS` introduced modules in JavaScript, enabling `require` and `module.exports`.
  - **Exporting**:
    - `Named Exports`: Multiple exports per module, cannot be renamed when imported.
    - `Default Exports`: One per module, used for single entities (e.g., a class or function).
  - **Importing**:
    - Synchronous: Modules load fully before evaluation.
    - Live connections: Changes in the module reflect immediately in the import.
    - Types:
      - Default Imports: Import the default export.
      - Named Imports: Import specific exports.
      - Mixed Imports: Combine default and named imports.
      - Namespace Imports: Import all exports as an object.
      - Side Effects Imports: Import a module for its side effects only.
      - Dynamic Imports: Import modules conditionally or on demand.

- **Re-exporting**

  - Import and immediately export functionality from another module.
  - Useful for creating a single entry point for a package.
  - Re-exporting default exports requires special handling.

- **Key Questions**
  - What are the differences between `Named` and `Default` exports?
  - How do `CommonJS` and `ES6 modules` differ?
  - Why is `Top-level await` not recommended in modules?

---

### JavaScript Bundlers

- **Module Bundler**

  - Combines JavaScript files and dependencies into a single file for browser use.
  - Optimizes performance by reducing server requests.

- **History**

  - JavaScript initially lacked a module system, requiring global variables for code organization.
  - `CommonJS` introduced modules for JavaScript outside the browser, enabling import/export without global variables.
  - Example: Using `node.js` modules with `require`.
  - Browser limitation: Browsers lack file system access, solved by module bundlers.

- **Modern JavaScript Module Bundlers**

  - Purpose: Convert `CommonJS` modules into a browser-compatible format.
  - Process:
    - Starts with an entry file and bundles all dependencies.
    - Output: A single JavaScript file for inclusion in HTML.
  - Advantages:
    - Eliminates global variables and multiple `<script>` tags.
    - Enables minification, tree shaking, and code splitting.
  - Popular Bundlers: `Browserify`, `Webpack`.

- **Stages of a Bundler**

  - **Dependency Resolution**:
    - Constructs a dependency graph starting from an entry point.
  - **Packing**:
    - Converts the dependency graph into a single file for browser use.

- **Module Representation**

  - Represents modules as objects with:
    - Name, identifier, file location, code, and dependencies.
  - Uses libraries like `detective` for dependency detection.

- **Module Map**

  - Solves the problem of resolving relative imports (e.g., `require('./utils')`).
  - Uses unique `id` keys to map dependencies.

- **Dependency Resolution**

  - Resolves dependencies using tools like `resolve`.
  - Outputs an array of module objects for all dependencies.

- **Packing**

  - Uses a Module Factory Function to inject `require()` and `module.exports()`.
  - Encapsulates code using IIFE to avoid polluting the global scope.

- **Webpack, Vite, Parcel**

  - Popular bundlers with unique features for modern web development.

- **Babel**

  - Converts modern JavaScript (ES6+) into older versions for browser compatibility.
  - **Transpiling**:
    - Converts new syntax (e.g., arrow functions) to old syntax.
  - **Polyfilling**:
    - Adds new features (e.g., `Promise`) to older engines.
  - Works with plugins and presets:
    - Plugins: Transform specific features (e.g., arrow functions).
    - Presets: Combine plugins for broader transformations.

- **Configuring Webpack to Use Babel**

  - Use `babel-loader` in `webpack.config.js` to transpile JavaScript files.

- **Configuring Babel to Use Polyfilling**

  - Use `@babel/preset-env` with `useBuiltIns: 'usage'` to include necessary polyfills.
  - Import polyfill libraries (e.g., `core-js`, `regenerator-runtime`) in the entry file.

- **Key Questions**
  - What are the differences between transpiling and polyfilling?
  - How does a module bundler optimize performance?
  - Why is dependency resolution important in bundling?

---

### JavaScript Package Managers

- **Old vs Modern JavaScript**

  - **Old Way**:
    - Libraries were manually downloaded and included in HTML files.
    - Challenges:
      - Difficult to find and update library versions.
      - Required manual linking in the correct order.
  - **Modern Way**:
    - Package managers like `npm` and `yarn` automate library management.
    - Benefits:
      - Centralized repositories for easy access.
      - Command-line tools for installation and updates.

- **Package Managers**

  - **NPM**:
    - Automates downloading and installing packages from the NPM Registry.
    - Commands:
      - `npm init`: Creates a `package.json` file.
      - `npm install <package>`: Installs a package and updates `package.json`.
      - `npx`: Runs package executables without global installation.
    - Use with module bundlers (e.g., Webpack) for browser compatibility.
  - **Yarn**:
    - Alternative to NPM with improved performance and reliability.
  - **Notes**:
    - `dependencies`: Required for production.
    - `devDependencies`: Required for development only.
    - Semantic Versioning: `major.minor.patch`.
    - Tools like `Volta` manage Node.js and package versions across environments.

- **NPM Scripts**

  - Automates tasks like building, testing, and deploying.
  - Defined in the `scripts` section of `package.json`.
  - Supports pre/post hooks (e.g., `prebuild`, `postbuild`).
  - Example:

    ```json
    "scripts": {
      "start": "parcel index.html",
      "build": "parcel build index.html --dist-dir ./dist"
    }
    ```

  - Commands:
    - `npm run <script>`: Runs the specified script.
    - `&&` vs `&`: Sequential vs parallel execution.

- **Build Tools**

  - Automate bundling, transpiling, and optimizing code.
  - Steps:
    1. Analyze dependencies.
    2. Bundle modules into a single file.
    3. Apply optimizations (e.g., tree-shaking, minification).
  - Output:

    ```html
    <script src="bundle.js"></script>
    ```

- **Deployment**

  - Use the `dist` folder for deployment.
  - **CI/CD**:
    - Automates build and deployment processes.
    - Example: Deploying with Netlify.
      - Link GitHub repo in Netlify settings.
      - Configure build settings to match `package.json` scripts.

- **Key Questions**
  - What are the differences between `dependencies` and `devDependencies`?
  - How does semantic versioning work?
  - Why use `npx` instead of global installations?

---

### JavaScript Advanced Concepts

- **JavaScript Engine**

  - A program that reads and executes JavaScript code.
  - Popular engines: V8 (Chrome, Node.js), SpiderMonkey (Firefox), Chakra (Edge).
  - **Compiler vs Interpreter vs JIT**:
    - Compiled: Converts code to machine code before execution (e.g., Babel, TypeScript).
    - Interpreted: Executes code line-by-line (e.g., Node.js).
    - JIT: Combines both, optimizing frequently used code during runtime.
  - **Inside V8 Engine**:
    - Uses JIT compilation for performance.
    - Steps: Parsing → Compiling → Execution.
    - Components:
      - **Call Stack**: Tracks function calls and execution order.
      - **Memory Heap**: Stores variables and objects dynamically.
    - Profiler flags frequently used code for optimization.

- **Types**

  - **Primitive vs Reference Types**:
    - Primitive: Immutable, copied by value (e.g., number, string).
    - Reference: Mutable, copied by reference (e.g., objects, arrays).
  - **Pass by Value vs Reference**:
    - Value: Creates a copy of the value.
    - Reference: Shares the same memory location.
  - **`null` vs `undefined`**:
    - `null`: Intentional absence of value.
    - `undefined`: Variable declared but not assigned.
  - **Strict vs Loose Equality**:
    - `===`: Compares value and type.
    - `==`: Performs type coercion before comparison.
  - **Type Conversion**:
    - Explicit: `Number()`, `String()`, `Boolean()`.
    - Implicit: Coercion by JavaScript engine.
  - **Type Coercion**:
    - Implicit conversion of types during operations.
    - Examples: `1 + '2'` → `'12'`, `true + 1` → `2`.

- **Execution Context**

  - Environment where JavaScript code is executed.
  - Types:
    - Global: Default context for code outside functions.
    - Functional: Created when a function is called.
  - Components:
    - Memory: Stores variables and functions.
    - Thread: Executes code in the call stack.
  - **Scope**:
    - Lexical: Determined by variable declaration location.
    - Types: Global, function, block.
    - Scope chain: Order of variable lookup.
  - **Hoisting**:
    - Moves declarations to the top of their scope.
    - Variables (`var`) initialized as `undefined`.
    - `let` and `const` are hoisted but not initialized.

- **Functional Programming**

  - **Currying**: Converts a function with multiple arguments into a series of functions with one argument each.
  - **Closure**: Function with access to its outer scope even after the outer function has returned.
    - Benefits: Encapsulation, maintaining state.
  - **Pure Functions**: No side effects, always returns the same output for the same input.
  - **Higher-Order Functions**: Functions that take other functions as arguments or return them.
    - Examples: `map`, `filter`, `reduce`.
  - **Recursion**: Function calling itself, useful for tasks like traversing trees.
  - **Composition**: Combining multiple functions into a single function.

- **Generators**

  - Functions that can pause and resume execution.
  - Use `function*` and `yield`.
  - Applications: Iterables, async code, and real-life use cases like pagination.

- **Miscellaneous**

  - **Mutation Observer**: Tracks changes to the DOM.
  - **Selection and Range**: Manipulates text selections in the DOM.

- **Key Questions**
  - How does JIT compilation improve performance?
  - What are the differences between `null` and `undefined`?
  - How do closures work and why are they useful?
  - What is the difference between `call stack` and `memory heap`?

---

### JavaScript Interview Questions and Tricks

- **`this` Keyword**

  - Dynamically evaluated method calls can lose `this`.

    - Example:

      ```js
      let user = {
        name: 'John',
        hi() {
          alert(this.name);
        },
        bye() {
          alert('Bye');
        }
      };
      (user.name == 'John' ? user.hi : user.bye)(); // Error!
      ```

    - Solution: Use `func.bind()` to bind the correct context.

  - Differences in `this` behavior between objects and classes.
    - Classes run in strict mode by default, causing `this` to be `undefined`.
  - Fixing `this` in asynchronous functions:
    - Use arrow functions or `bind()`.

- **Functions**

  - JavaScript does not auto-insert semicolons before brackets `()`.

    - Example:

      ```js
      let user = {
        name: 'John',
        go: function () {
          alert(this.name);
        }
      }(user.go)(); // Error!
      ```

    - Solution: Add a semicolon after the object declaration.

  - Skipping parameters in function calls:
    - Use `undefined` for default parameters.
  - **Inline Caching**:
    - Optimizes property access by caching lookups.

- **Interview Questions**

  - **What is a program?**
    - A set of instructions executed by a computer.
    - JavaScript uses memory heap, call stack, and event loop.
  - **What are `call()` and `apply()`?**
    - Methods to invoke functions with a specific `this` context.
    - `call()`: Accepts arguments separately.
    - `apply()`: Accepts arguments as an array.
  - **How to check if an image is loaded?**
    - Use the `complete` property of the image element.
  - **What is event delegation?**
    - Adding event listeners to a parent element to handle events for its children.
  - **Optimizing style changes:**
    - Use `classList`, `cssText`, or `requestAnimationFrame()`.
  - **What is a worker?**
    - A background JavaScript process for CPU-intensive tasks.
  - **Implementing `bind()` function:**

    - Example:

      ```js
      Function.prototype.bind = function (scope) {
        const fn = this;
        return function () {
          return fn.apply(scope, arguments);
        };
      };
      ```

  - **Debounce vs Throttle:**
    - **Debounce**: Delays function execution until after a specified time.
    - **Throttle**: Limits function execution to once per interval.
  - **Finding an element in identical DOM trees:**
    - Traverse upwards to the root, then downwards in the other tree.
  - **Moving an element (Rendering Performance):**
    - Use `requestAnimationFrame()` for smooth animations.
  - **Converting a callback to a Promise:**

    - Example:

      ```js
      function getData() {
        return new Promise(resolve => setTimeout(() => resolve('data'), 1000));
      }
      ```

  - **What are `[[prototype]]` properties?**
    - Internal properties accessible indirectly.
  - **Getting the last element of an array:**
    - Use `arr[arr.length - 1]`, `arr.slice(-1)[0]`, or `arr.at(-1)`.
  - **Using `forEach` on a `Set`:**
    - Iterates over values where `key` equals `value`.
  - **Why avoid arithmetic comparisons with strings?**
    - Comparisons are based on Unicode values.
  - **Returning multiple values from a function:**
    - Use arrays or objects.
  - **Deep copying an object:**
    - Use `JSON.parse(JSON.stringify(obj))` or libraries like `lodash`.
  - **Checking if a value is a number:**
    - Use `typeof` or `Number.isNaN()`.
  - **What is a closure?**
    - A function with access to its outer scope even after the outer function has returned.
  - **Classical vs Prototypal Inheritance:**
    - Classical: Inherits from classes.
    - Prototypal: Inherits directly from objects.

- what is `requestAnimationFrame`?
  - A method that tells the browser to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.
  - It provides a smoother animation experience by synchronizing with the browser's refresh rate.

---

## Typescript

### TypeScript Overview

- **What is TypeScript?**

  - A static and strongly typed superset of JavaScript.
  - Compiled to JavaScript for execution.
  - Exists only in development; no runtime performance optimization.

- **Why Use TypeScript?**

  - Detects errors before runtime using type annotations.
  - Ensures correct usage of properties and methods.
  - Improves code readability and collaboration.
  - Moves errors from runtime to compile-time (e.g., handling `null` or `undefined`).
  - Enhances developer experience with features like in-editor autocomplete.

- **Installation and Configuration**

  - Refer to [TS-Dev 📄](./6-TS-Dev.md).

- **Typing**

  - **Statically vs Dynamically Typed**:
    - Statically typed: Type checking at compile-time (e.g., TypeScript).
    - Dynamically typed: Type checking at runtime (e.g., JavaScript).
  - **Strongly vs Weakly Typed**:
    - Strongly typed: No implicit type conversions.
    - Weakly typed: Allows implicit type coercion (e.g., JavaScript).
  - **Implicit vs Explicit Typing**:
    - Implicit: TypeScript infers the type based on the value.
    - Explicit: Developer explicitly defines the type.

- **Type Annotations vs Type Inference**
  - **Type Annotations**: Explicitly specify the type of a variable.
  - **Type Inference**: TypeScript infers the type based on the assigned value.
  - **When to Use Type Annotations?**:
    - Functions returning `any` type (e.g., `JSON.parse()`).
    - Variables declared separately from initialization.
    - Variables requiring union types (e.g., `boolean | number`).

---

### TypeScript Types

- **`any`**

  - Most flexible type; allows any value assignment.
  - Avoid using as it defeats TypeScript's purpose.

- **Array**

  - Syntax: `string[]` or `Array<string>`.
  - Multi-dimensional arrays: `number[][]`.
  - Use union types for mixed arrays, e.g., `(number | string)[]`.

- **Tuple**

  - Fixed-length, ordered array with specific types.
  - Represents a record structure, e.g., `[string, number, string]`.
  - Limitation: Tuples allow push/pop operations without errors.

- **Enum**

  - Defines a set of named constants.
  - Syntax: `enum Colors { RED = 'red', BLUE = 'blue' }`.
  - Use for small, constant sets of values (e.g., days of the week).
  - Alternatives: Objects or literal types.

- **Objects**

  - Typed by declaring structure in annotations.
  - Excess property checking ensures no extra properties.
  - Index properties allow flexible key-value pairs.

- **`unknown` (type guard)**

  - Requires type checks before usage.
  - Safer alternative to `any`.

- **`this` keyword types**

  - Used to define the type of `this` in functions.
  - Example: `function myClickHandler(this: HTMLButtonElement, event: Event)`.

- **Type Aliases (`type`)**

  - Create reusable, descriptive types.
  - Useful for complex types like unions or tuples.

- **Literal Types**

  - Represents specific values, e.g., `'Monday' | 'Tuesday'`.
  - Combine with union types for fine-tuned options.

- **Interfaces**

  - Define object/class structure or function shapes.
  - More flexible than type aliases; supports extension.
  - Differences from `type`:
    - Interfaces can be extended and reopened.
    - Type aliases support unions and literals.
  - Interview Tip: Use `interface` for objects/classes, `type` for unions/tuples.

- **Function**

  - Specify parameter and return types.
  - Use function types or interfaces for reusable signatures.
  - Overloading allows multiple signatures for a single function.

- **`void`**
  - Indicates a function returns nothing.
  - Different from `undefined` or `null`.

---

### Advanced TypeScript Concepts

- **Type Assertions / Type Casting**

  - Used to override TypeScript's type inference.
  - Commonly used with `unknown`, `union`, or `enum` types.
  - Syntax:

    ```ts
    // 'as' syntax
    let length: number = lengthField as string;

    // Bracket syntax (not compatible with JSX/TSX)
    let length: number = <string>lengthField;
    ```

  - Example:

    ```ts
    const myFunc = (student: unknown): string => {
      const newStudent = student as string;
      return newStudent;
    };
    ```

- **Combining Types**

  - **Union Types**
    - Allows a variable to hold values of different types (logical OR).
    - Syntax: `let studentPhone: number | string;`
    - Use Type Guards to narrow down the type.
  - **Intersection Types**
    - Combines multiple types into one (logical AND).
    - Syntax: `type ColorfulCircle = Circle & Colorful;`
  - **Extending Interfaces**

    - Use `extends` to inherit properties from other interfaces.
    - Example:

      ```ts
      interface Person {
        name: string;
        age: number;
      }
      interface Student extends Person {
        enrolled: boolean;
      }
      ```

- **Generics**

  - Enables reusable functions and classes for multiple types.
  - Syntax:

    ```ts
    function myFunc<T, U>(arg1: T, arg2: U): [T, U] {}
    ```

  - Examples:

    - Generic Function:

      ```ts
      const getItem = <T>(arr: T[]): T => arr[1];
      ```

    - Generic Class:

      ```ts
      class DataStorage<T> {
        data: T[] = [];
        addItem(item: T) {
          this.data.push(item);
        }
      }
      ```

  - Constraints:

    - Use `extends` to restrict types, e.g., `T extends Lengthy`.
    - Example:

      ```ts
      function printLength<T extends { length: number }>(arg: T): T {
        console.log(arg.length);
        return arg;
      }
      ```

- **Generic Utility Types**

  - **Partial**: Makes all properties optional.

    ```ts
    const draft: Partial<Blog> = { title: 'Draft Title' };
    ```

  - **Readonly**: Makes all properties read-only.

    ```ts
    const names: Readonly<string[]> = ['John', 'Doe'];
    ```

- **Type Guard (Narrowing)**

  - Protects against invalid operations by checking types.
  - Methods:
    - `typeof` for primitives.
    - `in` operator for object properties.
    - `instanceof` for classes.
    - Type Predicates for custom checks.
    - Discriminated Unions for common properties.
  - Example:

    ```ts
    function calculateTax(price: number | string, tax: number) {
      if (typeof price === 'string') {
        price = parseFloat(price.replace('$', ''));
      }
      return price * tax;
    }
    ```

- **Declaration Merging**

  - Combines multiple declarations with the same name.
  - Use Cases:
    - Extend existing types or modules.
    - Add properties to global interfaces.
  - Example:

    ```ts
    function greet(name: string): string {
      return `Hello, ${name}`;
    }
    namespace greet {
      export const version = '1.0.0';
    }
    ```

- **Exhaustiveness Checks with `never`**

  - Ensures all cases in a union are handled.
  - Example:

    ```ts
    const getArea = (shape: Circle | Square): number => {
      switch (shape.type) {
        case 'circle':
          return Math.PI * shape.radius ** 2;
        case 'square':
          return shape.sideLength ** 2;
        default:
          const _exhaustiveCheck: never = shape;
          return _exhaustiveCheck;
      }
    };
    ```

- **Decorators**

  - Functions that modify the behavior of classes, methods, or properties.
  - Requires `experimentalDecorators` in `tsconfig.json`.
  - Example:

    ```ts
    function Logger(target: any, propertyName: string | Symbol) {
      console.log('Property decorator!');
    }
    ```

---

### TypeScript and the DOM

- **TypeScript with the DOM**

  - Includes type definitions for built-in JS APIs (e.g., `Math`) and browser environments (e.g., `document`).
  - APIs for newer JS features are available based on the `target` specified (e.g., `Map` for `ES6`).
  - To include browser types, add `"dom"` to the `lib` in `tsconfig.json`:

    ```json
    {
      "compilerOptions": {
        "lib": ["ES2018", "DOM"]
      }
    }
    ```

- **DOM Elements Types**

  - **`HTMLElement`**

    - Default type for DOM elements, inferred as `HTMLElement | null`.
    - Use type assertions or type guards to handle `null` values.
    - Examples:

      ```ts
      const btn = document.getElementById('btn');
      if (btn) btn.addEventListener('click', () => {}); // ✅

      const btn = document.getElementById('btn')!; // Non-Null Assertion Operator
      btn.addEventListener('click', () => {}); // ✅
      ```

  - **Type-Assertion or Generics for HTML Elements**

    - Example for `HTMLImageElement`:

      ```ts
      const myPic = document.querySelector('profile-image') as HTMLImageElement;
      ```

    - Example for `HTMLInputElement`:

      ```ts
      const input = document.querySelector<HTMLInputElement>('todo-input')!;
      ```

  - **`DocumentFragment`**

    - Lightweight version of `Document` for creating and manipulating DOM structures in memory.
    - Example:

      ```ts
      const frag: DocumentFragment = document.createDocumentFragment();
      const p: HTMLParagraphElement = document.createElement('p');
      p.textContent = 'Hello World';
      frag.appendChild(p);
      document.body.appendChild(frag);
      ```

- **Events**

  - TypeScript infers event types automatically for inline event handlers.
  - For external handlers, explicitly type the event:

    ```ts
    handleSubmit = (e: SubmitEvent): void => {
      e.preventDefault();
    };
    btn.addEventListener('click', handleSubmit); // ✅
    ```

- **Handling Types of Variables Declared in Other Scopes**

  - Use `declare` to inform TypeScript about variables defined in other files or global scopes.
  - Example:

    ```ts
    declare const google: any;
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: { lat: -34.397, lng: 150.644 }
    });
    ```

---

### Using TypeScript with JavaScript Libraries

- **Type Declaration Files**

  - Files ending with `.d.ts` provide type information for JavaScript libraries.
  - Install type declarations for libraries without built-in types:

    ```bash
    npm i --save-dev @types/lodash
    ```

  - Example:

    ```ts
    import axios, { AxiosResponse } from 'axios';

    axios.get(url).then((response: AxiosResponse) => {
      console.log(response.data);
    });
    ```

- **TS with Express**

  - Use adapter libraries like `ts-express-decorators` for better integration.

- **TS with Webpack**

  - Install `ts-loader` to handle TypeScript files.

- **TS with React**
  - Use tools like `React TypeScript Cheatsheet` for setup and best practices.

---

## Git

### Git Essentials

- **Version Control System (VCS)**

  - Tracks and manages changes to files over time.
  - Allows revisiting earlier versions, comparing changes, and reverting to previous states.

- **Git**

  - A distributed version control system (VCS) focused on tracking changes.
  - Advantages of distributed VCS:
    - No need for a central server.
    - Encourages collaboration and discipline.
    - No single point of failure; repositories are independent.
  - Key features:
    - Uses SHA-1 for unique commit IDs.
    - Stores all data in the `.git` directory.

- **Git Repository (Workflow)**

  - **Working Directory**: Contains untracked or modified files.
  - **Staging Index**: Prepares changes for commit.
    - Commands:
      - `git add`: Moves changes to the staging area.
      - `git rm --cached`: Removes files from the staging area.
  - **Repository**: Tracks committed changes.

- **Diff**

  - `git diff`: Shows unstaged changes.
  - `git diff --staged`: Compares staged changes to the last commit.
  - Compare branches: `git diff branch1..branch2`.
  - Compare commits: `git diff commit1..commit2`.

- **Commits**

  - Snapshots of code changes.
  - Guidelines:
    - Use atomic commits (focus on a single change).
    - Write clear, present-tense messages (<50 characters).
  - Metadata:
    - Includes author, date, and parent commit.
    - Use `git cat-file -p <SHA>` to view commit details.

- **Branches**

  - Pointers to specific commits.
  - Commands:
    - `git branch`: List branches.
    - `git checkout -b <branch>`: Create and switch to a branch.
    - `git branch -d <branch>`: Delete a branch.
  - Stashing:
    - Temporarily save uncommitted changes.
    - Commands:
      - `git stash`: Save changes.
      - `git stash pop`: Apply and remove stash.

- **Merging**

  - Combines changes from different branches.
  - Types:
    - Fast-forward: No merge commit if changes are linear.
    - No fast-forward: Creates a merge commit.
  - Resolve conflicts manually if needed.

- **Rebase**

  - Rewrites commit history for a linear structure.
  - Use `git rebase -i HEAD~n` for interactive rebase.
  - Merge vs Rebase:
    - Merge: Combines changes with a merge commit.
    - Rebase: Moves branch base to a new commit.

- **Modifying Commits**

  - `git commit --amend`: Modify the last commit.
  - Reset:
    - `--hard`: Removes commits and changes.
    - `--soft`: Removes commits but keeps changes.
  - Revert:
    - Creates a new commit to undo changes.

- **Tags**

  - Labels for specific commits (e.g., version releases).
  - Commands:
    - `git tag -a <tag>`: Create an annotated tag.
    - `git push --tags`: Push tags to remote.

- **Ignore Files**

  - Use `.gitignore` to exclude files from tracking.
  - Add `.gitkeep` to track empty directories.

- **Reflogs**

  - Tracks updates to branch tips and references.
  - Commands:
    - `git reflog`: View reference logs.

- **Useful Notes**

  - Always make atomic commits for easier debugging.
  - Use `git log --oneline --graph` for a visual commit history.

- Questions
  - What is the difference between `git merge` and `git rebase`?
    - `git merge` combines branches with a merge commit, while `git rebase` rewrites commit history for a linear structure.

---

### GitHub Essentials

- **Git vs GitHub**

  - `Git`: A Version Control System (VCS) for tracking project history and collaboration.
  - `GitHub`: A hosting service for Git repositories, enabling easier collaboration.

- **Configuration**

  - Set up user details:

    ```bash
    git config --global user.name "user"
    git config --global user.email "user@example.com"
    ```

- **GitHub Workflow**

  - GitHub hosts repositories in the cloud for collaboration.
  - Not a replacement for Git; both have unique capabilities.

- **Working with Remotes**

  - `git remote`: Manage remote repositories.
  - `git remote -v`: View remote URLs and shortnames (e.g., `origin`).
  - Add a remote:

    ```bash
    git remote add origin <url>
    ```

  - **Remote Tracking Branch**:
    - Tracks the state of a branch on the remote.
    - Example: `origin/master` points to the last known commit on the remote master branch.

- **Sending Commits (Pushing)**

  - Push changes to a remote repository:

    ```bash
    git push origin master
    ```

  - Always specify the remote and branch explicitly.

- **Pulling/Fetching Changes**

  - `git fetch`: Retrieves changes from the remote without merging.
  - `git pull`: Fetches and merges changes from the remote.

- **Forking a Repository**

  - Creates a duplicate of a repository under your account.
  - Used for contributing to open-source projects.

- **Git Collaboration Workflows**

  - **Centralized Workflow**:
    - All work is done on a single branch (e.g., `master`).
    - Simple but prone to conflicts.
  - **Feature Branch Workflow**:
    - Develop features on separate branches.
    - Merge to `master` after review and testing.
  - **Fork & Clone Workflow**:

    - Fork a repository, clone it locally, and contribute changes.
    - Add the original repository as `upstream` to stay in sync:

      ```bash
      git remote add upstream <url>
      ```

- **Pull Requests**

  - Request to merge changes from your branch into another repository.
  - Facilitates code review and discussion.

- **Notes**
  - **HTTPS vs SSH Cloning**:
    - HTTPS requires a password for each push/pull.
    - SSH uses keys for authentication, avoiding repeated password entry.
  - Use GitHub shortcuts for efficiency.

---

## Web Security

- **Content Security Policy (CSP):**

  - Added layer of security to mitigate attacks like XSS and data injection.
  - Allows control over resource loading via HTTP headers or `<meta>` elements.
  - Key Features:
    - Whitelisting domains and protocols (e.g., HTTPS).
    - Prevents inline scripts, unsigned CSS, and dynamic code execution.
    - Enforces HTTPS with `block-all-mixed-content`.
  - Importance:
    - Mitigates XSS by restricting script execution to trusted sources.
    - Prevents packet sniffing by enforcing HTTPS.
    - Reduces vulnerabilities like unsigned inline CSS/JS and dynamic code.
  - Usage:
    - Recommended for complex applications handling sensitive data.
    - Not ideal for static apps or those with unresolved XSS vulnerabilities.
  - Implementation:
    - Use `Content-Security-Policy` HTTP header, `<meta>` tag, or middleware.
    - Directives:
      - `default-src`: Default policy for loading content.
      - `script-src`, `style-src`, `img-src`, etc.: Restrict specific resource types.
    - Example Policies:
      - Allow all content from the same origin: `default-src 'self'`.
      - Allow images from any origin but restrict scripts to a specific domain.
  - Fixing CSP Errors:
    - Check `Content-Security-Policy` headers in browser dev tools.
    - Modify headers or meta tags to match requests.

- **Cross-Origin Resource Sharing (CORS):**

  - Mechanism to allow resource sharing across different origins.
  - Key Features:
    - Uses `Access-Control-Allow-Origin` header to permit specific origins.
    - Prevents unauthorized access to sensitive data.
    - Supports preflight requests for non-standard methods (e.g., POST, DELETE).
  - How It Works:
    - Adds HTTP headers to requests and responses.
    - Preflight requests use `OPTIONS` method to verify safety.
    - Allows credential sharing with `Access-Control-Allow-Credentials`.
  - Common Use Cases:
    - APIs (`fetch`, `XMLHttpRequest`) requiring cross-origin access.
    - Web fonts, WebGL textures, images, and videos.
  - Fixing CORS Errors:
    - Check `Access-Control-Allow-Origin` and `Access-Control-Allow-Methods` headers.
    - Update server configurations to include proper headers.
    - Use middleware like `cors` in ExpressJS for easy setup.
  - Debugging Tips:
    - CORS errors don’t occur in tools like Postman or curl.
    - Browsers enforce CORS for security; developer tools don’t.

- **Same-Origin Policy (SOP):**
  - Security measure to restrict web pages from accessing resources from different origins.
  - Key Features:
    - Origin defined by protocol, domain, and port.
    - Prevents cross-site scripting (XSS) attacks.
  - Allows access to resources from the same origin.
  - Blocks access to resources from different origins unless explicitly allowed (e.g., CORS).
- **Cross-Site Scripting (XSS):**
  - Security vulnerability allowing attackers to inject malicious scripts into web pages.
  - Types:
    - **Stored XSS**: Malicious script stored on the server (e.g., in a database).
    - **Reflected XSS**: Script reflected off a web server, often via URL parameters.
    - **DOM-based XSS**: Manipulates the DOM to execute scripts.
  - Prevention:
    - Use CSP to restrict script execution.
    - Sanitize user inputs and outputs.
    - Avoid inline scripts and dynamic code execution.

---

## Testing

### Testing

- **Definition:**

  - Testing ensures an application functions as expected.
  - Differentiates between testing (checking correctness) and debugging (finding errors).

- **Types of Tests:**

  - Manual
  - Automated

- **Unit Tests:**

  - Test individual pieces of code.
  - Dependencies should be mocked or stubbed.

- **Testing Pyramid:**

  - UI testing (manual) at the top, unit tests at the base.
  - Higher levels take more time (e.g., E2E testing).
  - Tools:
    - Jasmine for unit and integration testing.
    - Selenium for E2E testing.

- **Snapshot Testing:**

  - Compares current output to previous snapshots.
  - Focuses on output comparison, not functionality.

- **Sanity Test:**

  - Validates simple logic and ensures the testing environment works.

- **(AAA) Pattern:**

  - Arrange, Act, Assert.

- **BDD vs TDD:**

  - **Behavior Driven Development (BDD):**
    - Focuses on user interaction and stakeholders.
    - Example: Jasmine.
  - **Test-Driven Development (TDD):**
    - Write tests before development.
    - Benefits:
      - Higher test coverage.
      - Easier refactoring.
      - Avoids duplicate tests.

- **Glass-box vs Black-box Testing:**

  - **Glass-box Testing:**
    - Tester has access to source code.
    - Covers all code paths (path-complete).
    - Also called white-box testing.
  - **Black-box Testing:**
    - Tester has no access to source code.
    - Tests functionality via specifications.
    - Also called functional testing.

- **Test Design Best Practices:**

  - Match test file structure to the app.
  - Write short, descriptive, and maintainable tests.
  - Use objects with passing and failing data for clarity.

- **Testing Setup:**

  - Ensure proper environment and configuration.

- **Suites and Specs:**

  - **Spec:** Individual test.
  - **Suite:** Collection of related tests.

- **Matchers:**

  - **Comparisons:** `.toEqual()`, `.toBe()`.
  - **Truthiness:** `.toBeTruthy()`, `.toBeFalsy()`.
  - **Numerical Matchers:** `.toBeGreaterThan()`, `.toBeLessThan()`.
  - **Negating:** `.not.toBe()`.
  - **Exceptions:** `.toThrow()`, `.toThrowError()`.
  - **Other Matchers:** `.toContain()`, `.toBeDefined()`.

- **Backend: Endpoint / API Testing:**

  - Tools:
    - Jest for test runner.
    - Supertest for HTTP assertions.
  - Benefits:
    - Confirms server and endpoint configurations.
    - Efficient compared to manual testing.

- **Testing Hooks:**

  - **Teardown of Suites:**
    - Connect to databases or run specific tests.
  - **`beforeEach` and `afterEach`:**
    - Run tasks before or after each test.
  - **`beforeAll` and `afterAll`:**
    - Run tasks once before or after all tests.
  - **Skipping or Specifying Tests:**
    - Use `xdescribe` or `fdescribe` to skip or focus tests.

- **Spies & Mocks:**
  - **Spies:**
    - Track function calls without affecting functionality.
  - **Mocks:**
    - Replace dependencies with simulated objects.
    - Focus on code under test, not external dependencies.

---

### Jest

- **Definition:**

  - A testing framework for JavaScript.
  - Complete and easy-to-setup testing solution.
  - Works with any test runner and assertion library.

- **Configuring Jest:**

  - **Installation:**
    - Install Jest as a dev dependency: `npm install --save-dev jest`.
  - **Configuration:**

    - Test files should be placed next to component files.
    - Restrict search to specific folders to avoid `node_modules`.

  - **Linting:**
    - Add `jest: true` to the `env` in `.eslintrc.js` to avoid linting errors.

- **Jest Syntax:**

  - Use `describe` for test suites and `it` for individual tests.
  - Example:

    ```js
    describe('suite description', () => {
      it('describes the spec', () => {
        expect(true).toBe(true);
      });
    });
    ```

- **Testing Asynchronous Code:**

  - **Promises:** Return a promise from the test.
  - **Async/Await:** Use `async` keyword for async tests.
  - **Callbacks:** Use `done` callback to signal test completion.
  - **Assertions:** Use `expect.assertions(number)` to verify the number of assertions.

- **Concurrent Tests:**

  - Use `test.concurrent` or `describe.concurrent` for parallel execution.

- **Testing React Components:**

  - Use tools like `enzyme` for rendering components.
  - **Snapshot Testing:**
    - Ensures UI does not change unexpectedly.
  - **Redux Testing:**
    - Test reducers (pure functions) and actions.

- **Mock Testing:**

  - Replace external services with mock functions using `jest.mock`.
  - Use `jest.fn()` for creating mock functions.
  - TypeScript Note:
    - Use type-casting to access mock methods like `mockReturnValue`.
  - Example:

    ```ts
    jest.mock('vuex');
    const useStoreMock = useStore as jest.Mock;
    useStoreMock.mockReturnValue({ getters: { FILTERED_JOBS: [{ id: 1 }] } });
    ```

- **Timer Mocks:**

  - Use `jest.useFakeTimers` to mock timer functions (e.g., `setTimeout`).
  - Use `jest.useRealTimers` to restore native implementations.

- **HTTP Requests (axios):**

  - Mock API requests to avoid actual network calls.
  - Example:

    ```js
    jest.mock('axios', () => ({
      get: () => Promise.resolve({ data: [{ val: 1 }] })
    }));
    ```

  - Use `mockReset()` in `afterEach` to clear custom mock implementations.

---

### Cypress

- **Definition:**

  - JavaScript-based end-to-end testing framework built on Mocha.
  - Uses BDD/TDD assertion library and runs directly in the browser.

- **Advantages:**

  - Works on real browsers, not headless ones.
  - Readable and user-friendly.

- **Disadvantages:**

  - Only runs inside real browsers with JavaScript.
  - Cannot visit more than one superDomain in a single test.

- **Configuration:**

  - Use `cypress.json` to change default settings.
  - Access environment variables with `cypress.env(name_of_variable)`.
  - Set `baseUrl` in `cypress.json` for easier navigation.

- **File Structure:**

  - `cypress.json`: Configuration file.
  - `plugin` folder: Extend Cypress functionality.
  - `fixtures` folder: Store test data and mocked objects.
  - `support` folder: Store custom commands and reusable files.

- **Selecting Elements:**

  - Use data attributes (e.g., `data-cy=""`) for selectors.
  - **Aliasing Elements:**
    - Use `.as()` to assign aliases for later use.
    - Reference aliases with `@` prefix (e.g., `cy.get('@alias')`).
  - **Xpath:**
    - Use xpath as an alternative selector.

- **Actions:**

  - **Click:**
    - Use `click({ force: true })` to bypass hidden element errors.
  - **Trigger:**
    - Trigger DOM events (e.g., `cy.get('a').trigger('mousedown')`).

- **Assertions:**

  - Uses Chai assertion library (e.g., `should('have.text', 'value')`).
  - Supports regular expressions for text matching.

- **Synchronous Behavior:**

  - Cypress commands are asynchronous.
  - Use `.then()` for chaining commands and handling synchronous code.

- **Variables:**

  - Cannot directly assign Cypress command return values.
  - Use `.then()` or aliases to handle variables.

- **Iteration Through Elements:**

  - Use `.each()` to iterate through elements.
  - Wrap elements with `cy.wrap()` for Cypress commands.

- **Traversal:**

  - Navigate through DOM elements using traversal commands.

- **File Upload:**

  - Use `cypress-file-upload` plugin.
  - Command: `cy.get(selector).attachFile(filePath)`.

- **Hooks:**

  - `before`, `after`, `beforeEach`, `afterEach` for setup and teardown.

- **Fixture:**

  - Load fixed data sets using `cy.fixture(filePath)`.

- **API Tests:**

  - **`.request()` Command:**
    - Send HTTP requests (e.g., `cy.request('GET', '/api/endpoint')`).
    - Supports multiple attributes and options.
  - **Getting Data from Requests:**
    - Use `.then()` to access response attributes (e.g., `status`, `body`).
  - **`.intercept()` Command:**
    - Spy and stub network requests and responses.
    - Successor to `cy.route()`.

- **Custom Commands:**

  - Create reusable commands in `cypress/support/commands.js`.
  - Example: `Cypress.Commands.add('login', (email, pw) => {...})`.

- **General Features:**
  - **Handling Multiple Tabs:**
    - Remove `target="_blank"` attribute to prevent test failures.
  - **Same-Origin Policy:**
    - Set `chromeWebSecurity` to `false` in `cypress.json` to bypass restrictions.
  - **Handling Alerts:**
    - Use `cy.on('window:alert', callback)` for assertions.
  - **Timeouts:**
    - Configure globally in `cypress.json` or per command/test suite.
  - **Viewport:**
    - Control screen size and orientation with `cy.viewport(width, height)`.

---

## FE DEV

### Authentication

- **Definition:**

  - Methods to verify the identity of a user or system to grant access to protected resources.
  - Common strategies:
    - Basic Authentication
    - Session-Based Authentication
    - Token-Based Authentication
    - JWT Authentication
    - OAuth
    - SSO (Single Sign-On)

- **Basic Authentication:**

  - Uses `Authorization` header with `Basic` keyword and base64-encoded `username:password`.
  - Credentials are sent with every request (insecure).
  - Example:
    - Client sends encoded credentials in the header.
    - Server decodes and validates credentials.

- **Session-Based Authentication:**

  - Server creates a session after login and sends a session ID as a cookie.
  - Session is stored on the server (e.g., in memory or database).
  - Example:
    - Client sends session ID in cookies for subsequent requests.
    - Server validates session ID and responds.

- **Token-Based Authentication:**

  - Server generates a token after login and sends it to the client.
  - Token is sent in the `Authorization` header for subsequent requests.
  - Stateless: Server does not store tokens.
  - Examples:
    - SWT (Simple Web Token)
    - JWT (JSON Web Token)
    - OAuth
    - SAML

- **JWT Authentication:**

  - Self-contained token with three parts: header, payload, and signature.
  - Header: Token type and hashing algorithm.
  - Payload: Claims (data).
  - Signature: Verifies authenticity and integrity.
  - Example:
    - Client sends JWT in the `Authorization` header.
    - Server verifies JWT using a secret key.

- **OAuth:**

  - Open standard for access delegation.
  - Allows third-party apps to access user data without sharing credentials.
  - Versions:
    - OAuth 1.0 (older)
    - OAuth 2.0 (newer)
  - Grant types:
    - Authorization code grant
    - Implicit grant
    - Client credentials grant
    - Password grant
    - Device grant
  - Example:
    - Client redirects user to authorization server.
    - Authorization server issues an access token.

- **SSO (Single Sign-On):**
  - Allows a user to log in once and access multiple related services.
  - Example:
    - Use Google account to log in to YouTube, Gmail, etc.
  - Benefits:
    - Simplifies user experience.
    - Reduces password fatigue.

---

### Linters and Code Formatting

- **Definition:**

  - Linters analyze source code to detect problems and enforce style guidelines.
  - Valuable for interpreted languages like JavaScript.

- **Types of Checks Linters Provide:**

  - Syntax Errors.
  - Code Standards Adherence.
  - Potential Problems (Code Smells).
  - Security Checks.

- **Advantages of Linting:**

  - Reduces errors in production.
  - Ensures readable, maintainable, and consistent code.
  - Minimizes code style discussions during reviews.
  - Improves security and performance.

- **Examples of Linters:**

  - Static Analysis: StandardJS.
  - Security: LGTM.
  - Code Formatting: Prettier.

- **Prettier:**

  - Opinionated code formatter for JavaScript and other languages.
  - Eliminates debates over code styles.
  - Configuration:
    - Use `.prettierrc` file for consistent team settings.
    - Common options: `singleQuote`, `semi`, `tabWidth`.
  - Usage:
    - Install via `npm install --save-dev prettier`.
    - Add scripts in `package.json` for formatting.
    - Supports configuration overrides for specific file types.

- **Configuring Prettier with ESLint:**

  - Install `eslint-config-prettier` and `eslint-plugin-prettier`.
  - Update `.eslintrc` to include Prettier plugin and rules.

- **ESLint:**

  - JavaScript linting utility to catch errors and enforce rules.
  - Allows custom rules and supports plugins for frameworks like Vue.js.
  - Installation:
    - Install via `npm install eslint --save-dev`.
    - Initialize with `npx eslint --init`.
  - Configuration:
    - Use `.eslintrc` file to define rules.
    - Example rule: `"semi": ["error", "always"]`.

- **Differences Between ESLint and Prettier:**

  - Prettier: Simplifies code formatting.
  - ESLint: Catches bugs and enforces coding standards.
  - Best practice: Run Prettier before ESLint.

- **Methods for Linting and Formatting:**

  - Remove conflicting rules and run Prettier and ESLint serially.
  - Use tools like `prettier-eslint` for unified execution.
  - Avoid running Prettier as an ESLint rule (not recommended).

- **Enforcing Linting with Husky Pre-commit Hooks:**
  - Husky simplifies Git hooks for pre-commit checks.
  - Example:
    - Add `"pre-commit": "npm run prettier-format && npm run lint"` in `package.json`.
  - Ensures code is linted and formatted before commits.

---

### Modules and Bundlers

- **Modules:**

  - Allow splitting applications into multiple files for better organization.
  - **Problems Before Modules:**

    - Too many scripts causing connection limits.
    - Unmaintainable scripts due to scope, size, and readability issues.
    - Full rebuilds and slow performance with IIFEs.

  - **History of Modules:**
    - **Old Way:**
      - **AMD:** Asynchronous and non-blocking module system for browsers (e.g., RequireJS).
      - **CommonJS:** Synchronous and blocking module system for Node.js.
      - **UMD:** Universal module system compatible with AMD and CommonJS.
    - **New Way:**
      - **ESM (EcmaScript Modules):**
        - Standardized import/export syntax.
        - Supported by modern browsers but slow without bundlers.

- **Bundlers:**

  - Combine multiple files into one for better browser performance.
  - Solve issues like HTTP connection limits and enable features like tree-shaking and code-splitting.

  - **Parcel:**

    - Zero-configuration build tool.
    - Supports static assets, Sass, and automatic dependency installation.
    - Creates a `dist` folder with bundled files.

  - **Webpack:**

    - A module bundler that compiles various module formats and assets into a single file for browser use.
    - Handles CommonJS, AMD, ES6 modules, images, CSS imports, and more.

    - **Why Webpack:**

      - Simplifies scaling by managing dependencies and bundling files.
      - Improves maintainability by avoiding manual script ordering.
      - Provides scoping and encapsulation to prevent global variable conflicts.
      - Enables tree-shaking to remove unused code.
      - Supports dynamic loading and code splitting.
      - Integrates with the npm ecosystem for library management.

    - **How Webpack Works:**

      - Bundles files into a single output file.
      - Manages dependencies and uses loaders to process non-JavaScript files.
      - Uses plugins to extend functionality.
      - Creates a dependency graph to determine module relationships.

    - **Configuring Webpack:**

      - Install via `npm install webpack webpack-cli webpack-dev-server --save-dev`.
      - Configuration options:
        - **Entry:** Starting point for dependency graph.
        - **Output:** Final bundled file location.
        - **Loaders:** Transform files (e.g., TypeScript to JavaScript, Sass to CSS).
        - **Plugins:** Extend Webpack's capabilities (e.g., optimization, minification).

    - **Core Concepts:**

      - **Entry and Output:**
        - Entry: First file to load (e.g., `src/index.js`).
        - Output: Bundled file (e.g., `dist/main.js`).
      - **Loaders:**
        - Transform files using rules (e.g., `css-loader`, `file-loader`).
        - Execute from right to left.
      - **Plugins:**
        - Modify the bundling process (e.g., `UglifyJsPlugin`, `HtmlWebpackPlugin`).

    - **Hot Module Replacement (HMR):**

      - Updates modules in a running application without a full page reload.
      - Useful for development with `webpack-dev-server`.

    - **Code Splitting:**

      - Avoids large bundles by splitting code into smaller chunks.
      - Methods:
        - Multiple Entry Points.
        - SplitChunks optimization.
        - Dynamic Imports.

    - **Preloading and Prefetching:**

      - **Preloading:** Load resources needed immediately for the current navigation.
      - **Prefetching:** Load resources likely needed for future navigation.

    - **Caching:**

      - Uses unique hashes to invalidate browser cache when files change.
      - Cache busting ensures users receive updated files.

    - **Webpack Modes:**

      - **Development:** Focuses on speed and debugging.
      - **Production:** Optimized for performance and size.
      - **Common:** Shared configuration for both modes.

    - **Additional Features:**
      - **Environment Variables:** Customize builds based on environment.
      - **Monitoring Performance:** Analyze build speed and bundle size.
      - **Webpack Bundle Analyzer:** Visualize bundle content and size.

  - **Vite:**

    - Focuses on speed and modern development experience.
    - **Why Vite:**
      - Addresses slow server start and updates in traditional bundlers.
      - Uses native ESM for faster development.
    - **Dev Server Types:**
      - **Bundle-based:** Combines all files into a single bundle.
      - **Native-ESM-based:** Serves only requested modules dynamically.
    - **Production Bundling:**
      - Bundling is still necessary for optimal performance with tree-shaking and lazy-loading.
    - **Why Not Use esbuild for Production:**
      - Lacks advanced features like code-splitting and CSS handling.

  - **esbuild:**

    - Extremely fast JavaScript bundler written in Go.

  - **Difference Between Vite and Webpack:**
    - Vite uses native ESM for easier debugging.
    - Webpack offers more mature and customizable configurations.

---

## FE Frameworks
