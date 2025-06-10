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
  - [HTML \& CSS ✅](#html--css-)
    - [HTML Overview ✅](#html-overview-)
    - [CSS: A Comprehensive Guide ✅](#css-a-comprehensive-guide-)
    - [CSS Layouts ✅](#css-layouts-)
    - [CSS Variables (Custom Properties) ✅](#css-variables-custom-properties-)
    - [CSS Animations Summary ✅](#css-animations-summary-)
    - [Responsive Web Design Summary ✅](#responsive-web-design-summary-)
    - [Web UX Design Summary ✅](#web-ux-design-summary-)
    - [Accessibility Summary ✅](#accessibility-summary-)
  - [CSS Frameworks \& Mehtodologies ✅](#css-frameworks--mehtodologies-)
    - [CSS Methodologies and Frameworks ✅](#css-methodologies-and-frameworks-)
    - [CSS Modules Overview ✅](#css-modules-overview-)
    - [CSS Preprocessors and Build Process ✅](#css-preprocessors-and-build-process-)
    - [PostCSS Overview ✅](#postcss-overview-)
    - [Sass Overview ✅](#sass-overview-)
    - [Styled Components Overview ✅](#styled-components-overview-)
    - [Tailwind CSS ✅](#tailwind-css-)
  - [JavaScript](#javascript)
    - [JavaScript Summary ✅](#javascript-summary-)
    - [OOP in JavaScript ✅](#oop-in-javascript-)
    - [Document Object Model (DOM) Summary ✅](#document-object-model-dom-summary-)
    - [Asynchronous JavaScript Summary ✅](#asynchronous-javascript-summary-)
    - [Web APIs ✅](#web-apis-)
    - [JavaScript Modules ✅](#javascript-modules-)
    - [JavaScript Bundlers ✅](#javascript-bundlers-)
    - [JavaScript Package Managers ✅](#javascript-package-managers-)
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
    - [Frameworks Overview](#frameworks-overview)
    - [Angular](#angular)
      - [Angular Framework Summary](#angular-framework-summary)
      - [Angular Modules Summary](#angular-modules-summary)
      - [Angular Router Summary](#angular-router-summary)
      - [Angular Services Summary](#angular-services-summary)
      - [Angular RxJS Summary](#angular-rxjs-summary)
      - [Angular and TypeScript Summary](#angular-and-typescript-summary)
      - [AngularJS](#angularjs)
    - [React](#react)
      - [React Summary](#react-summary)
      - [React Hooks](#react-hooks)
      - [Class Components](#class-components)
      - [React Router Summary](#react-router-summary)
      - [Redux Summary](#redux-summary)
      - [Redux Toolkit Summary](#redux-toolkit-summary)
      - [React Query Summary](#react-query-summary)
      - [React Performance Optimization Summary](#react-performance-optimization-summary)
      - [React Interview Questions Summary](#react-interview-questions-summary)
      - [Next.js Summary](#nextjs-summary)
    - [Vue](#vue)
      - [Vue Summary ✅](#vue-summary-)
      - [Vue Router Summary ✅](#vue-router-summary-)
      - [Vuex Summary ✅](#vuex-summary-)
      - [Composition API Summary ✅](#composition-api-summary-)
      - [Vue Testing Summary ✅](#vue-testing-summary-)
      - [Nuxt Summary ✅](#nuxt-summary-)
  - [Backend](#backend)
    - [Backend Summary](#backend-summary)
    - [Backend Performance Summary](#backend-performance-summary)

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

## HTML & CSS ✅

### HTML Overview ✅

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

### CSS: A Comprehensive Guide ✅

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

### CSS Layouts ✅

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

### CSS Variables (Custom Properties) ✅

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

### CSS Animations Summary ✅

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

### Responsive Web Design Summary ✅

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

### Web UX Design Summary ✅

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

### Accessibility Summary ✅

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

## CSS Frameworks & Mehtodologies ✅

### CSS Methodologies and Frameworks ✅

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

### CSS Modules Overview ✅

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

### CSS Preprocessors and Build Process ✅

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

### PostCSS Overview ✅

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

### Sass Overview ✅

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
    - `@use` loads a module once, while `@import` can load multiple times. (if used across multiple files)
  - When should you use mixins versus placeholders?
    - Use mixins for reusable styles with parameters, and placeholders for shared styles without parameters. also, placeholders are more efficient as they don't generate additional CSS unless extended.
  - How does Sass improve maintainability in large projects?

---

### Styled Components Overview ✅

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

### Tailwind CSS ✅

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

### JavaScript Summary ✅

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

### OOP in JavaScript ✅

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

### Document Object Model (DOM) Summary ✅

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

### Asynchronous JavaScript Summary ✅

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

### Web APIs ✅

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
  - How it works:
    - Establish a persistent connection between client and server.
    - Allows bidirectional data transfer without HTTP overhead.
  - Use Cases:
    - Chat applications, live updates, real-time notifications.
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

### JavaScript Modules ✅

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

### JavaScript Bundlers ✅

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

### JavaScript Package Managers ✅

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

### Frameworks Overview

- **Overview**:

  - JavaScript frameworks are tools for building scalable web applications.
  - They provide pre-written JavaScript code for standard programming features and tasks.
  - Before 2010, most web applications used server-side rendering, but modern frameworks like `React`, `Angular`, and `Vue` enable client-side rendering.
  - Frameworks improve developer experience by adding functionalities like testing and linting.

- **Problem with Vanilla JavaScript**:

  - Vanilla JavaScript refers to plain JavaScript without additional libraries or frameworks.
  - Challenges with vanilla JavaScript:
    - Hard to build complex, scalable, and maintainable applications.
    - Requires extensive DOM manipulation and traversing, leading to "spaghetti code."
    - State management is difficult, as the UI must be manually kept in sync with the application state.

- **Reactivity (Change Detection)**:

  - Reactivity allows web applications to update the UI in response to changes in data or state.
  - Modern frameworks replace manual DOM manipulation with efficient state-driven UI updates.
  - Reactivity occurs during:
    - App initialization.
    - State changes.
    - User interactions.
    - Manual triggers.
  - Some frameworks run change detection twice in development mode to ensure UI-state synchronization.

- **Types of Frameworks**:

  - **Configuration-over-convention**:
    - Easy to use with freedom to structure applications.
    - Requires additional libraries for missing features.
    - Examples: `React`, `Vue`.
  - **Convention-over-configuration**:
    - Provides structured solutions out of the box.
    - Larger learning curve.
    - Examples: `Angular`, `Next.js`, `Nuxt.js`.

- **Libraries vs Frameworks**:

  - Libraries provide reusable code, while frameworks define application design and control flow.
  - Frameworks control the flow of the app, while libraries are called by the app.
  - Key differences:
    - Frameworks offer blueprints for building applications.
    - Libraries are tools for specific tasks.
  - Caller-callee relationship:
    - Frameworks control the flow, while libraries are invoked as needed.

- **React**:

  - React is a library for UI components, often considered a framework.
  - Provides only the view layer, offering flexibility but requiring additional tools.
  - Features:
    - Fast UIs with virtual DOM for efficient updates.
    - JSX for defining UI components.

- **Angular**:

  - Angular is a component-based framework with integrated libraries and tools.
  - Features:
    - Declarative templates.
    - Dependency injection.
    - End-to-end tooling.
    - Built-in solutions for common development challenges.

- **Vue**:

  - Vue is a framework for building user interfaces with a declarative and component-based model.
  - Combines the best of React and Angular:
    - Built-in UI, routing, and state management.
    - Flexibility for additional tools.

- **Frameworks Comparison**:

  - Framework choice depends on team familiarity and project needs.
  - Larger teams benefit from opinionated frameworks like Angular.
  - Startups may prefer flexible tools like React.

- **Vue vs React**:
  1. **Optimization**:
     - React re-renders entire component sub-trees; Vue tracks dependencies for precise updates.
  2. **HTML & CSS**:
     - React uses JSX; Vue offers templates for simpler migration and readability.
  3. **Native Rendering**:
     - React Native supports iOS/Android apps; Vue collaborates with Weex.
  4. **Other Comparisons**:
     - Vue excels in configuration, animations, DOM manipulation, and dependency injection.
     - React has stronger market presence and community support.

---

### Angular

#### Angular Framework Summary

- **Overview**

  - Angular is a framework for building reactive web applications.
  - Written in TypeScript with templates using Angular-specific syntax (superset of HTML).
  - Provides built-in tools like routing, forms, and HTTP libraries.

- **Compilation**

  - Converts Angular code into JavaScript for browsers.
  - Two strategies:
    - Just-in-Time (JIT): Compiles in the browser, faster for development.
    - Ahead-of-Time (AOT): Compiles on the server, faster for production.
  - Incremental DOM: Efficient DOM updates by comparing old and new DOM states.

- **File Structure**

  - `src` folder contains all app files.
  - Key files:
    - `app/`: Components, services, and modules.
    - `assets/`: Static files like images and fonts.
    - `environments/`: Environment-specific configurations.
    - `styles.css`: Global styles.
    - `index.html`: Main HTML file.
    - `main.ts`: Bootstraps the app.
    - `angular.json`: App configuration.

- **Installation & CLI**

  - Install Angular CLI globally: `npm install -g @angular/cli`.
  - Common commands:
    - `ng new <project_name>`: Create a new project.
    - `ng serve`: Start development server.
    - `ng generate component <name>`: Generate a new component.
  - Modules generated with CLI must be imported into `app.module`.

- **Components**

  - Core building blocks of Angular applications.
  - Consist of metadata, template, and class.
  - Lifecycle hooks:
    - `ngOnInit`: Initialization logic.
    - `ngOnDestroy`: Cleanup logic.
    - `ngOnChanges`: Respond to input changes.
  - Types:
    - Presentational: Display data, use `@Input` and `@Output`.
    - Smart: Handle data and events, interact with services.

- **Styling**

  - Inline styles: `style="color: red"`.
  - External styles:
    - `styles.css`: Global.
    - Component-specific styles: Scoped to the component.
  - Dynamic classes:
    - Use `ngClass` for conditional styling.

- **Data Binding**

  - Communication between component class and template.
  - Types:
    - Property Binding: `[property]="value"`.
    - Event Binding: `(event)="method()"`.
    - Two-way Binding: `[(ngModel)]="value"`.

- **Directives**

  - Extend HTML with custom behavior.
  - Types:
    - Attribute Directives: Modify appearance or behavior.
    - Structural Directives: Change DOM structure.
    - Custom Directives: User-defined behavior.

- **Data Flow**

  - Parent to Child: Use `@Input`.
  - Child to Parent: Use `@Output`.
  - Local Reference: Template variables.
  - Content Projection: Slots for dynamic content.

- **Pipes**

  - Transform data in templates.
  - Types:
    - Built-in: e.g., `date`, `uppercase`.
    - Custom: User-defined transformations.

- **Forms**

  - Two approaches:
    - Reactive Forms: Programmatic control.
    - Template Forms: Use `ngModel` and `ngForm`.
  - Input masking for better user experience.

- **Modals**

  - Use Angular CDK for overlays and portals.

- **Notes**
  - Expressions vs String Interpolation: Differences in syntax and use cases.
  - HTML Escaping: Use Angular sanitization for security.

---

#### Angular Modules Summary

- **Overview**

  - Angular uses modules to bundle components, directives, and services into packages.
  - Modules help organize code based on functionality, improving maintainability and reusability.
  - Built-in modules include:
    - `BrowserModule`: Essential for launching apps in browsers.
    - `CommonModule`: Provides common directives like `ngIf` and `ngFor`.

- **Module Types**

  - **Domain Module**: Contains components shown at all times in the app.
  - **Routing Module**: Manages app routes and navigation.
  - **Routed Module**: Contains components displayed for specific routes.
  - **Shared Module**: Includes reusable components, directives, and pipes shared across modules.
  - **Feature Module**: Contains components, directives, and pipes for specific features or functionalities.
  - **Core Module**: Singleton services and components used throughout the app, loaded once.
  - **Lazy Loaded Module**: Loaded on demand to reduce initial load time, improving performance.
  - **Standalone Module**: A self-contained module that can be used independently without being part of a larger application.

- **Why Use Modules?**

  - **Code Organization**: Separates functionality into distinct modules.
  - **Reusability**: Allows importing modules instead of individual components.
  - **Lazy Loading**: Loads modules only when needed, reducing initial load time.

- **Creating and Using Modules**

  - Create a module: `ng generate module <module_name>`.
  - Add components to a module: `ng generate component <module_name>/<component_name>`.
  - Export components in the `exports` array to make them available in other modules.
  - Import modules in `app.module.ts` or other modules to use their components.

- **Router Module**

  - Provides routing functionality for defining app routes.
  - Create a routing module: `ng generate module <module_name> --routing`.
  - Includes route definitions and navigation rules.

- **HTTP Module**

  - Use `HttpClientModule` for HTTP requests.
  - Example:

    ```ts
    // app.module.ts
    import { HttpClientModule } from '@angular/common/http';

    @NgModule({
      declarations: [AppComponent],
      imports: [BrowserModule, HttpClientModule],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {}
    ```

    ```ts
    // app.component.ts
    import { HttpClient } from '@angular/common/http';

    export class AppComponent {
      constructor(private http: HttpClient) {
        this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
          console.log(data);
        });
      }
    }
    ```

  - Supports `HttpParams` for query strings and `HttpInterceptors` for modifying requests/responses.

- **HTTP Params**

  - Create URL parameters for HTTP requests.
  - Immutable and supports chaining key-value pairs.
  - Example:

    ```ts
    const params = new HttpParams().set('key', 'value');
    this.http.get('url', { params }).subscribe();
    ```

- **HTTP Interceptors**

  - Middleware for modifying HTTP requests and responses.
  - Common use cases:
    - Add authentication tokens to headers.
    - Handle errors globally.
  - Example:

    ```ts
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const modifiedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer token') });
      return next.handle(modifiedReq);
    }
    ```

- **Shared Module**
  - Contains reusable components, directives, and pipes.
  - Export shared items in the `exports` array.
  - Import the shared module in other modules to access its components.

---

#### Angular Router Summary

- **Adding Routing to an Angular App**

  - Generate a new app with routing: `ng new <project_name> --routing`.
  - Add routing to an existing app: `ng generate module app-routing --flat --module=app`.
  - Generates `app-routing.module.ts` for route definitions.

- **Router Configuration**

  - Use `RouterModule` and `Routes` to define routes in `app-routing.module.ts`.
  - Route properties:
    - `path`: URL path for the route.
    - `component`: Component to render for the path.
  - Special routes:
    - Home route: `path: ''`.
    - Wildcard route: `path: '**'` for unmatched routes.
  - Methods:
    - `RouterModule.forRoot(routes)`: Configures root routes.
    - `RouterModule.forChild(routes)`: Configures child routes.

- **Nested Routes**

  - Use the `children` property to define child routes.
  - Example:

    ```ts
    const routes: Routes = [
      {
        path: 'parent',
        component: ParentComponent,
        children: [
          { path: '', component: ChildComponent },
          { path: 'child', component: AnotherChildComponent }
        ]
      }
    ];
    ```

  - Use `<router-outlet>` in the parent component to display child components.

- **Using the Router**

  - Use `<router-outlet>` to display routed components.
  - Router directives:
    - `routerLink`: Specifies the route (replaces `href`).
    - `routerLinkActive`: Applies a class when the route is active.
    - `[routerLinkActiveOptions]`: Prevents partial matching with `{ exact: true }`.

- **Route Properties (Params and Query Params)**

  - Access route parameters using `ActivatedRoute` service:
    - `params`: Observable for route parameters.
    - `queryParams`: Observable for query parameters.
  - Use `ActivatedRouteSnapshot` for static access (no live updates).

- **Router Navigation**

  - Use `routerLink` directive for navigation in templates.
  - Navigate programmatically using `Router` service:

    ```ts
    this.router.navigate(['/path'], { queryParams: { key: 'value' } });
    ```

  - Use relative paths (`./`, `../`) for nested routes.

- **Lazy Loading**

  - Load modules on demand to improve performance.
  - Example:

    ```ts
    const routes: Routes = [
      { path: 'lazy', loadChildren: () => import('./lazy.module').then(m => m.LazyModule) }
    ];
    ```

- **Router Guards**

  - Protect routes and control navigation.
  - Types:
    - `CanActivate`: Prevent navigation to a route.
    - `CanActivateChild`: Prevent navigation to child routes.
    - `CanLoad`: Prevent lazy-loaded module loading.
    - `CanDeactivate`: Prevent leaving a route.
  - Example:

    ```ts
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return isAuthenticated;
    }
    ```

- **Route Resolvers**

  - Fetch data before activating a route.
  - Example:

    ```ts
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Data> {
      return this.dataService.getData();
    }
    ```

  - Add resolver to routes using `resolve` property:

    ```ts
    { path: 'route', component: Component, resolve: { data: DataResolver } }
    ```

---

#### Angular Services Summary

- **Overview**

  - Services are classes with a narrow, well-defined purpose, used to manage or fetch data.
  - They can be shared across multiple components and other services.

- **Creating a Service**

  - Use the command: `ng generate service <service_name>`.
  - The service file includes:
    - A class with the same name as the service file.
    - The `@Injectable` decorator for dependency injection.
    - Methods to fetch data or perform operations.
  - Example:

    ```ts
    @Injectable({ providedIn: 'root' })
    export class FetchDataService {
      fetchData() {
        return fetch('https://api.example.com').then(res => res.json());
      }
    }
    ```

  - Inject the service into components using the constructor:

    ```ts
    constructor(private fetchDataService: FetchDataService) {}
    ```

- **Dependency Injection**

  - Design pattern to inject dependencies at runtime, making the application loosely coupled.
  - Angular uses a hierarchical dependency injection system:
    - Services provided in a parent component are available to all child components.
    - Use `providedIn: 'root'` to make a service available application-wide.
  - Benefits:
    - **Reusability**: Share services across components.
    - **Maintainability**: Centralize service logic.
    - **Testability**: Mock services for testing.
    - **Singleton Pattern**: Ensures a single instance of the service is used.

- **How Angular Handles Dependency Injection**

  - Angular creates an application-wide injector during bootstrap.
  - The injector:
    - Creates dependencies and maintains a container of instances.
    - Uses providers to define how to create dependencies.
  - Example:

    ```ts
    @Injectable({ providedIn: 'root' })
    export class FetchDataService {}
    ```

- **Singleton Pattern**

  - Ensures only one instance of a service is created and shared across components.
  - Useful for services managing state or using observables.

- **`@Injectable` Decorator**

  - Marks a class as a service that can be injected.
  - Enables Angular to create and inject service instances.

- **Services & RxJS**

  - RxJS is used for reactive programming with observables.
  - Benefits:
    - Handle asynchronous data streams.
    - Combine data from multiple sources.
  - Common RxJS concepts:
    - Observables, Operators, Subjects, Subscriptions.

- **Auth Service**
  - Manages authentication logic and state.
  - Example features:
    - Handle sign-in state.
    - Use HTTP interceptors for token management.
    - Provide observables for signed-in state.

---

#### Angular RxJS Summary

- **Overview**

  - RxJS is a functional reactive library for handling asynchronous and event-based programs.
  - Provides core types like `Observable`, `Observer`, `Subject`, and operators for data manipulation.
  - Commonly used in Angular for HTTP requests, event handling, and state management.

- **RxJS Terminology**

  - Observables: Represent data streams that can be subscribed to.
  - Operators: Functions to transform or manipulate data streams.
  - Subscription: Mechanism to listen to data emitted by observables.
  - Subjects: Act as both observable and observer, allowing external data emission.

- **Operators**

  - **Transform Operators**:
    - `map`: Transforms data emitted by an observable.
    - `tap`: Performs side effects without altering data.
    - `pluck`: Extracts a property from emitted data.
  - **Flattening Operators**:
    - `mergeMap`: Merges data from inner observables.
    - `switchMap`: Switches to the latest observable, canceling previous ones.
  - **Creation Operators**:
    - `of`: Creates an observable from values.
    - `Observable`: Creates a custom observable.
  - **Error Handling Operators**:
    - `catchError`: Handles errors and returns a fallback observable.
  - **Other Operators**:
    - `delay`: Delays data emission.
    - `scan`: Accumulates emitted data over time.

- **Observables**

  - they are wrappers around a data-source that can be subscribed to.
  - **Types**

    - **Unicast (Cold)**:
      - Emit data only when subscribed to.
      - Each subscriber gets its own data stream.
    - **Multicast (Hot)**:
      - Emit data to multiple subscribers simultaneously.
      - Share the same data stream among subscribers.
    - **Subject Variations**:
      - `AsyncSubject`: Emits the last value upon completion.
      - `BehaviorSubject`: Emits the most recent value to new subscribers.
      - `ReplaySubject`: Emits a specified number of recent values to new subscribers.

- **Error Handling in Observables**

  - Use `error` method to handle errors during data emission.
  - Use `catchError` operator to provide fallback logic.

- **Common RxJS Issues**

  - **Nested Subscriptions**:
    - Avoid subscribing to observables within other subscriptions.
    - Use operators like `mergeMap` or `switchMap` to flatten data streams.
  - **Required Return Value**:
    - Ensure operators return values to mark observables as complete.

- **RxJS in Angular**

  - Angular leverages RxJS for handling asynchronous data streams.
  - Common use cases:
    - HTTP requests.
    - Event handling.
    - State management.
  - Example:

    ```ts
    this.http
      .get('url')
      .pipe(map(data => data))
      .subscribe(console.log);
    ```

---

#### Angular and TypeScript Summary

- **Overview**

  - Angular uses TypeScript as its primary language.
  - TypeScript provides static typing, interfaces, and modern JavaScript features.
  - By default, Angular does not use strict mode.
    - To enable strict mode, add `"strict": true` in `tsconfig.json`.

- **Decorators**

  - TypeScript feature to enhance or modify classes, properties, and methods.
  - Used to add metadata to classes, methods, and properties.
  - Angular-specific decorators:

    - `@Component`: Defines a component and its metadata.

      - Metadata includes `selector`, `templateUrl`, `styleUrls`, etc.
      - Example:

        ```ts
        @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        })
        export class AppComponent {}
        ```

    - Decorators are substitutes for directly adding metadata to a class.

      - Example:

        ```ts
        export class AppComponent {
          selector: 'app-root';
          templateUrl: './app.component.html';
          styleUrls: ['./app.component.css'];
        }
        ```

---

#### AngularJS

- **Overview**:

  - AngularJS is the older version of Angular, built on the MVC (Model-View-Controller) design pattern.
  - It is no longer widely used but provides foundational concepts for modern Angular.
  - Key features include two-way data binding, dependency injection, directives, and routing.

- **Key Concepts**:

  - **Module**: Encapsulates application components.
  - **Controller**: Defines app behavior through functions and values.
  - **Directive**: Extends HTML with new attributes for data binding and DOM manipulation.
  - **Scope**: Stores model data accessible by controllers, directives, and expressions.
  - **Expression**: Displays values within the page, linked to the scope (e.g., `{{fullName}}`).
  - **Filter**: Formats expression values for display.
  - **Service**: Provides reusable business logic independent of views.
  - **Factory**: A method to create services.
  - **Provider**: A configurable service.
  - **Dependency Injection**: Mechanism to access services.

- **Features**:

  - Two-way data binding: Synchronizes model and view instantly.
  - Templates: HTML with additional markups.
  - Dependency Injection: Simplifies development, understanding, and testing.
  - Directives: Extends HTML for data binding and DOM manipulation.
  - Routing: Enables view switching.
  - Deep Linking: Encodes application state in the URL for bookmarking.
  - Controllers: JavaScript functions augmenting the AngularJS scope.

- **AngularJS vs Angular2+**:

  - **Comparison Table**:
    - Language: JavaScript (AngularJS) vs TypeScript (Angular 2+).
    - Architecture: MVC (AngularJS) vs Components (Angular 2+).
    - Data Binding: Two-way (AngularJS) vs One-way with RxJS (Angular 2+).
    - Expression Syntax: `ng-Directives` (AngularJS) vs `()` for events and `[]` for properties (Angular 2+).
    - Dependency Injection: Present in both.
    - Routing: Present in both.
    - Mobile Support: No (AngularJS) vs Yes (Angular 2+).
    - Performance: Slower (AngularJS) vs Faster (Angular 2+).

- **Using AngularJS**:

  - **Installation**:
    - CDN: Add AngularJS script to HTML.
    - npm: Install AngularJS via npm.
    - Bower: Install AngularJS via Bower.
  - **Example**:
    - Module creation: `var app = angular.module('myApp', []);`
    - Controller definition: `app.controller('myCtrl', function ($scope) { ... });`
    - HTML integration with directives like `ng-app`, `ng-controller`, `ng-model`, `ng-click`, etc.
    - Key directives:
      - `ng-app`: Declares the AngularJS application.
      - `ng-controller`: Defines the controller.
      - `ng-init`: Initializes application data.
      - `ng-model`: Binds input field values to application variables.
      - `ng-click`: Defines click event handlers.
      - `ng-bind`: Binds HTML content to application data.
      - `ng-repeat`: Repeats HTML elements (e.g., `ng-repeat="x in grades | limitTo:3"`).
      - `ng-include`: Includes external HTML files.

- **Services**:

  - Reusable business logic independent of views.
  - Built-in services include `$http`, `$location`, `$timeout`, `$interval`, etc.
  - Custom services can be created using `service`, `factory`, and `provider` methods.

    - **Service**: Returns the service itself with methods and properties.
    - **Factory**: Returns an object with exposed methods.

    ```js
    app.service('myService', function () {
      this.myFunc = function () {
        return 'Hello World from Service!';
      };
    });

    app.factory('myFactory', function () {
      return {
        myFunc: function () {
          return 'Hello World from Factory!';
        }
      };
    });
    ```

---

### React

#### React Summary

- **Overview**:

  - React is a library for building user interfaces, often used with tools like `react-router`, `webpack`, and `redux` to form the "React Ecosystem."
  - React is declarative, component-based, and supports unidirectional data flow.
  - It focuses on the "View" layer, leaving other functionalities to external libraries.

- **React Concepts**:

  - **Declarative**: React handles the DOM updates based on the app's state.
  - **Components**: Reusable building blocks grouped to form larger components.
  - **Unidirectional Data Flow**: State changes trigger UI updates, but data flows only one way.
  - **Library, Not Framework**: React provides flexibility to mix and match tools.

- **Declarative vs Imperative**:

  - **Declarative**: Describes "what" the program does (e.g., React's state-driven UI updates).
  - **Imperative**: Describes "how" the program operates step-by-step.

- **Multi-Page vs Single-Page Applications (SPA)**:

  - **Multi-Page Applications**: Reloads the entire app for each user interaction.
  - **Single-Page Applications**: Loads the app once and updates content dynamically without reloading.

- **Client-Side Rendering (CSR) vs Server-Side Rendering (SSR)**:

  - **CSR**: React apps run in the browser, suitable for SPAs.
  - **SSR**: React components are rendered on the server before being sent to the client, improving SEO and initial load time.

- **Function Components vs Class Components**:

  - Function components with hooks have replaced class components for state and lifecycle management.

- **Installation**:

  - **Create React App**: Built on Webpack, supports hot module reloading and bundling.
  - **Vite**: Faster alternative to Create React App, requires manual ESLint configuration.

- **JSX**:

  - Syntax extension for writing HTML-like code in JavaScript.
  - Transpiled to JavaScript using Babel.
  - Supports dynamic expressions and conditional rendering.

- **Styling and CSS**:

  - Options include inline styles, CSS modules, styled-components, and CSS-in-JS.
  - CSS modules provide scoped styles by default.

- **Components**:

  - Building blocks of React, written as functions or classes.
  - Use the `key` prop for list items to optimize rendering.

- **Props**:

  - Used to pass data between components.
  - Includes `children` prop, prop validation with PropTypes, and default prop values.

- **State**:

  - Manages component-specific data.
  - Supports batch updates and derived state.
  - Enables communication between parent and child components.

- **Events**:

  - React uses synthetic events for cross-browser compatibility.
  - Event handlers are passed as props to components.

- **Forms**:

  - Supports controlled and uncontrolled components.
  - Controlled components use state to manage form inputs.

- **Side Effects and Lifecycles**:

  - Lifecycle methods manage component behavior during mounting, updating, and unmounting. Example:
    - `componentDidMount`: Invoked after the component is mounted.
    - `componentDidUpdate`: Invoked after the component updates.
  - Side effects like data fetching are handled using hooks like `useEffect`.

- **How React Works**:

  - React uses a virtual DOM to optimize UI updates.
  - Rendering phases include triggering, render, commit, and browser paint.
  - **Reconciliation** compares the virtual DOM with the real DOM to minimize updates.

    > "Reconciliation" is the process of updating the DOM efficiently by comparing the virtual DOM with the real DOM and applying only necessary changes.

  - **Diffing Algorithm**: React's algorithm compares the old and new virtual DOM trees to determine the minimal set of changes needed for the real DOM.
  - **Fiber Architecture**: React's reconciliation algorithm that allows for incremental rendering and prioritization of updates.

- **Professional React Development**:
  - Emphasizes project structure, environmental variables, and best practices.

---

#### React Hooks

- **Overview**:

  - React Hooks are special built-in functions that allow functional components to use state and lifecycle features.
  - Hooks start with the word `use` and enable access to React's internal features like state, side effects, and DOM manipulation.
  - Hooks can be composed to create custom hooks for reusing stateful logic.

- **Functional Components**:

  - Functional components are pure functions that render the same output for the same input (props).
  - They avoid side effects like network requests, timers, or DOM manipulation directly in the render logic.
  - Side effects can be handled using `useEffect` or event handlers.

- **Hooks Rules**:

  - Call Hooks only from React function components or custom hooks.
  - Do not call Hooks conditionally or inside loops.
  - Hooks rely on call order to associate state with components.

- **State Management**:

  - `useState` Hook:
    - Tracks state in functional components.
    - Returns an array with the current state and a setter function.
    - State updates are asynchronous; use functional updates for dependent state changes.
      - Don't mutate state directly; use the setter function to update it. this is because React batches state updates for performance.
    - Supports lazy initialization for expensive computations.
  - Changing state of type `object`:
    - Use the spread operator to update specific properties.
    - Commonly used for form inputs.
  - Functional state updates:
    - Use a callback function to update state based on the previous state.

- **Refs**:

  - `useRef` Hook:
    - Provides a mutable object (`.current`) that persists across renders.
    - Used for DOM manipulation, storing previous state, or avoiding re-renders.
    - Does not trigger re-renders when updated.

- **Effect Hook**:

  - `useEffect` Hook:
    - Handles side effects like data fetching, subscriptions, or DOM updates.
    - Replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
    - Dependency array controls when the effect runs (e.g., on mount, state change, or every render).
    - Cleanup function prevents memory leaks by removing event listeners, canceling subscriptions, etc.
  - `useLayoutEffect` Hook:
    - Similar to `useEffect` but fires synchronously after DOM mutations.

- **useReducer**:

  - Manages complex state logic using a reducer function `(state, action) => newState`.
  - Returns the current state and a `dispatch` function to trigger state updates.
  - Useful for managing related state updates or when state logic is complex.
  - Reducer function:
    - Pure function that takes the previous state and an action to return the next state.
    - Avoids side effects; use `useEffect` for external interactions.
  - `useReducer` vs `useState`:
    - `useReducer` is better for complex state logic or dependent state updates.

- **Context API**:

  - Solves prop drilling by providing a way to share state across components.
  - `useContext` Hook:
    - Accesses context values directly in functional components.
  - Can be combined with `useReducer` for global state management.
  - Limitations:
    - Not suitable for high-frequency updates; consider alternatives like Redux.

- **Custom Hooks**:
  - Encapsulate reusable stateful logic.
  - Examples:
    - `useInput`: Manages form input state.
    - `useKeyPress`: Handles keyboard events.
    - `useContext`: Simplifies context usage.

---

#### Class Components

- **Overview**:

  - Before React `16.8`, class components were the only way to manage `state` and `lifecycle methods`.
  - Class components extend `React.Component` and require a `render()` method to return JSX.

- **Class Component Constructor Function**:

  - Called when the component is initialized.
  - Used to declare:
    - `state` property.
    - `props` property.
    - Bind methods.
  - Must call `super(props)` to pass props to the parent class.

- **Class Component Fields**:

  - New syntax to declare properties without a constructor function.
  - Examples:

    - `state` property:

      ```jsx
      class Car extends React.Component {
        state = { color: 'red' };
        render() {
          return <h2>I am a {this.state.color} Car!</h2>;
        }
      }
      ```

    - `static` properties:

      ```jsx
      class Car extends React.Component {
        static defaultProps = { color: 'red' };
        render() {
          return <h2>I am a {this.props.color} Car!</h2>;
        }
      }
      ```

- **Props**:

  - Passed to the constructor and React.Component via `super()`.
  - Example:

    ```jsx
    class Car extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return <h2>I am a {this.props.model}!</h2>;
      }
    }
    ```

- **State**:

  - An instance attribute used to store component-specific data.
  - Always an object in class components.
  - Initialized in the constructor function.
  - Accessed using `this.state`.

- **`setState()`**:

  - Used to update state; never mutate state directly.
  - Asynchronous; use callback form for dependent updates:

    ```jsx
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
    ```

  - Triggers a re-render by invoking the `render()` method.

- **Mutating State Safely**:

  - Avoid direct mutation; create a copy of the state before updating.
  - Example:

    ```jsx
    this.setState(state => ({ ...state, isLoading: true }));
    ```

- **Callbacks in `setState()`**:

  - Useful for performing actions immediately after state updates.
  - Example:

    ```jsx
    this.setState({ title: 'New Title' }, () => {
      console.log(this.state.title);
    });
    ```

- **Designing State**:

  - Minimize state: Only include data that changes.
  - Centralize state in the parent component and pass it to children via props.

- **Context.Consumer**:

  - Subscribes to context changes within a function component.
  - Example:

    ```jsx
    <MyContext.Consumer>{value => <div>{value}</div>}</MyContext.Consumer>
    ```

- **`this` Keyword**:

  - Use arrow functions or bind methods to preserve `this` context in event handlers.
  - Example:

    ```jsx
    handleClick = () => {
      console.log(this);
    };
    ```

- **Component LifeCycles**:

  - Three phases:
    - **Mounting**: `constructor`, `render`, `componentDidMount`.
    - **Updating**: `componentDidUpdate`.
    - **Unmounting**: `componentWillUnmount`.
  - Key methods:
    - `componentDidMount`: Ideal for AJAX requests or setting up subscriptions.
    - `componentDidUpdate`: Used for side effects like syncing with localStorage.
    - `componentWillUnmount`: Cleanup tasks like removing event listeners.
  - Example:

    ```jsx
    class Clock extends React.Component {
      componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      tick() {
        this.setState({ date: new Date() });
      }
      render() {
        return <h2>{this.state.date.toLocaleTimeString()}</h2>;
      }
    }
    ```

- **LifeCycle Execution Order**:
  1. `constructor` -> Initialize state.
  2. `render()` -> Render JSX.
  3. `componentDid...` -> Perform side effects.
  4. Re-render on state/prop changes.
- **Lifecycle Methods**:
  - `componentDidMount`: Invoked after the component is mounted.
  - `componentDidUpdate`: Invoked after the component updates.
  - `componentWillUnmount`: Invoked before the component is unmounted.
  - `shouldComponentUpdate`: Determines if the component should re-render based on state or props changes.

---

#### React Router Summary

- **Routing**

  - Determines what pages to render based on the URL.
  - Enables navigation between screens using the browser URL.
  - Keeps the UI in sync with the current browser URL.
  - React Router turns React projects into single-page applications (SPAs).

- **Server-Side Routing (Traditional Routing)**

  - Server decides what HTML to return based on URL request.
  - Entire page refreshes on navigation.
  - Clicking a `<a>` link causes the browser to request a new page and replace the entire DOM.

- **Client-Side Routing (CSR)**

  - **Fake CSR**: Uses conditions and prevents default behavior on `<a>` links to render components based on state.
  - **Real CSR (React Router)**:
    - All HTML, JavaScript, and CSS are loaded initially.
    - Browser loads only the data needed for the page.
    - Uses JavaScript to manipulate the URL bar with the History API.
    - Handles backward navigation using the `popstate` event.
  - **SSR vs CSR**: Comparison of server-side and client-side rendering.

- **Set Up**

  - Install React Router: `npm install react-router-dom@6`.
  - Wrap the app in `<BrowserRouter>` in `index.js`.
  - Use `<Routes>` and `<Route>` in `App.js` to define routes.

- **Router Components**

  - **`Route` Component**
    - Matches paths to components.
    - Props: `component` (instantiates component) vs `render` (evaluates component).
    - Nested Routes: Use `<Outlet>` to define where nested components render.
    - `index` route: Default route for a parent route.
  - **`Switch` Component** (v5 only)
    - Renders the first matching route.
    - Use `exact` to ensure only one match.
    - Include a 404 route with `path="*"`.
  - **`Link` Component**
    - Replaces `<a>` to prevent page reloads.
    - Use `to` prop to specify the target URL.
  - **`NavLink` Component**
    - Similar to `Link` but adds an `active` class for the current page.
    - Use `activeStyle` or `activeClassName` for styling.

- **Dynamic Routes (URL Params)**

  - Store UI state in the URL for bookmarking and sharing.
  - Use `useParams` hook to access route parameters.
  - Use `useSearchParams` hook to access query parameters.

- **Programmatic Navigation**

  - Use `useNavigate` hook to navigate programmatically.
  - Navigate back and forward with `navigate(-1)` and `navigate(1)`.
  - In v5, use `useHistory` hook.
  - `history.push` vs `history.replace`: Adds vs replaces history records.

- **Redirection**

  - Use `<Navigate>` component to redirect based on conditions.
  - Use `replace` prop to maintain the history stack.

- **Accessing the Page's URL**

  - Use `useLocation` hook to access query parameters.

- **Fetcher**

  - Perform HTTP requests without reloading the page using `useFetcher` hook.
  - Access request state (`pending`, `success`, `error`).

- **Protected Routes (Guarding Routes)**

  - Restrict access based on authentication or permissions.
  - **Method 1**: Create a custom `ProtectedRoute` component.
    - Use `AuthContext` to manage authentication state.
    - Render the component or redirect based on authentication.
  - **Method 2**: Use a wrapper component with `useEffect` to navigate unauthenticated users.

- **Prompt**

  - Use `<Prompt>` to warn users before navigating away from a page.

- **React Router with Data Loading (v6.4+)**
  - Fetch data before rendering components using `loaders`.
  - Define routes with `createBrowserRouter` or `useRoutes`.
  - Use `useLoaderData` hook to access fetched data.
  - Handle loading and error states with `useNavigation` and `useRouteError` hooks.
  - Use `action` property in routes for `POST/PUT/DELETE` requests.

---

#### Redux Summary

- **What is Redux?**

  - A state management system for cross-component or app-wide state.
  - Core concepts:
    - Single store containing global state.
    - Dispatching plain action-objects to the store.
    - Pure reducer functions immutably updating state.
  - Can be used with React, Angular, Vue, or vanilla JS.
  - Two approaches:
    - Classic Redux.
    - Redux Toolkit (recommended).

- **When to Use Redux?**

  - Historically used in most React apps for global state.
  - Alternatives like React Query or SWR are now common for remote state.
  - Use Redux for apps requiring a lot of global UI state.

- **Core Concepts**

  - Components subscribe to store data (state).
  - State changes via `dispatch` and reducer functions.
  - Reducers manage slices of state.
  - Centralized state change via actions.

- **`useContext` + `useReducer` vs Redux**

  - `useReducer` is similar to Redux but lacks a centralized store.
  - Redux uses a single store and singular `dispatch`.
  - Context API is used internally by both.

- **Installation**

  - Install Redux core: `npm install redux`.
  - Install complementary packages: `react-redux`, `@redux-devtools/core`.

- **Setup & File Architecture**

  - Connect React to Redux using `<Provider>` in `index.js`.
  - Create state, reducers, and actions in the store.
  - Use `combineReducers` for multiple reducers.
  - Access state in components using `useSelector`.

- **Folder Structure**

  - Organize by function or feature.
  - Avoid circular imports with Redux Toolkit.

- **Store**

  - Define slices for top-level keys of the state.
  - Use `createSlice` to simplify reducers and action creators.
  - Mutate state safely using Immer.

- **Action Flow**

  - Centralized action handling via reducers.
  - Use `extraReducers` or standalone actions for shared logic.

- **Action Creators**

  - Functions that return action objects.
  - Simplified with `createSlice`.

- **Selector Functions**

  - Extract specific slices of state.
  - Use libraries like Reselect for memoized selectors.

- **Redux Hooks**

  - `useSelector`: Access state.
  - `useDispatch`: Dispatch actions.

- **Middleware**

  - Handles async logic outside reducers.
  - Allows side effects like API calls.
  - Enhances Redux with additional functionality.
  - Popular options: `redux-thunk`, `redux-saga`.

- **Redux Thunk**

  - Middleware for async actions.
  - Dispatch actions within thunks.

- **Redux Saga**

  - Side-effect manager using generator functions.
  - Actions hit reducers before sagas.

- **Saga vs Thunk**

  - Thunk: Simpler, function-based async handling.
  - Saga: More powerful, generator-based side effects.

- **Redux in Class Components**

  - Use `connect` HOC with `mapStateToProps` and `mapDispatchToProps`.

- **Redux in TypeScript**

  - Fully supported with TypeScript.

- **Redux Libraries**

  - Reselect: Memoized selectors.
  - Redux-persist: Persist state across sessions.

- **Redux DevTools**

  - Debugging tool for Redux state and actions.

- **Best Practices**
  - Use Redux Toolkit for modern development.
  - Keep reducers pure and simple.
  - Use middleware for async logic.

---

#### Redux Toolkit Summary

- **What is Redux Toolkit (RTK)?**

  - Official, recommended, and modern approach for writing Redux code.
  - Opinionated approach enforcing Redux best practices.
  - Provides utilities to simplify common Redux use cases.
  - Fully compatible with classic Redux.
  - Reduces boilerplate code (e.g., middleware setup).
  - Key features:
    - Mutates state inside reducers (converted to immutable updates via `immer`).
    - Automatically generates action creators.
    - Automatic middleware and Redux DevTools setup.

- **Why RTK is Redux Today?**

  - Eliminates boilerplate and prevents common mistakes.
  - Simplifies standard Redux tasks with key APIs:
    - `configureStore`: Combines reducers, adds middleware, and integrates Redux DevTools.
    - `createSlice`: Simplifies reducers and action creators using `immer`.
  - Easier to configure than `createStore` with named options parameters.
  - Works seamlessly with TypeScript.

- **Installation**

  - Install RTK: `npm install @reduxjs/toolkit`.
  - Complementary packages: `react-redux`, `@redux-devtools/core`.

- **Setup**

  - Use `configureStore()` instead of `createStore()`.
  - Automatically handles root reducer, `Provider`, devtools, and middleware setup.

- **RTK Methods**

  - `createSlice()`:
    - Creates a slice of global state with reducers and action creators.
    - Uses `immer` for immutable updates with mutating syntax.
    - Simplifies reducer logic (no `switch` statements or `default` cases).
    - Supports `prepare` callback for custom action creators.
  - `createActions()`:
    - Generates action creators for Redux actions.
  - `createAsyncThunk()`:
    - Simplifies async actions with promise-based logic.
    - Automatically generates `pending`, `fulfilled`, and `rejected` states.
    - Use `extraReducers` to handle thunk states.
  - `createApi()`:
    - Creates an API for client-side data fetching.

- **Handling Thunk State**

  - Use `extraReducers` to manage `pending`, `fulfilled`, and `rejected` states.
  - Example:

    ```js
    extraReducers: {
      [fetchAccountById.pending]: (state) => { state.status = 'loading'; },
      [fetchAccountById.fulfilled]: (state, action) => { state.status = 'succeeded'; state.account = action.payload; },
      [fetchAccountById.rejected]: (state, action) => { state.status = 'failed'; state.error = action.error.message; }
    }
    ```

- **Redux Toolkit Query**

  - Module for creating APIs to fetch data.
  - Handles loading state, error state, data caching, and refetching.
  - Key concepts:
    - `reducerPath`: Key name for API state in the Redux store.
    - `fetchBaseQuery`: Pre-configured `fetch` function.
    - `endpoints`: Define queries (read data) and mutations (write data).
  - Steps to use:
    1. Identify related requests.
    2. Create an API file.
    3. Add `reducerPath` for API state.
    4. Configure `baseQuery` for requests.
    5. Define `endpoints` for queries and mutations.
    6. Export generated hooks.
    7. Connect API to the store.
    8. Use hooks in components.

- **Best Practices**
  - Use RTK for modern Redux development.
  - Leverage `createSlice` and `createAsyncThunk` for simplicity.
  - Use Redux Toolkit Query for efficient data fetching.

---

#### React Query Summary

- **What is React Query (Tanstack Query)?**

  - A library for managing remote state in React.
  - Replaces Redux, MobX, Apollo Client, etc.
  - Remote state refers to data fetched from a server (e.g., REST or GraphQL APIs).
  - Key features:
    - Automatic caching of remote data in memory.
    - Provides loading and error states.
    - Re-fetches stale data in the background.
    - Supports pre-fetching data before it's needed.
    - Easy remote state mutation.
    - Offline support with `localStorage` or `IndexedDB` synchronization.
  - Part of the `Tanstack` ecosystem (works with React, Vue, Angular, etc.).

- **Setup**

  - Wrap the app with `QueryClientProvider`.
  - Create a `QueryClient` instance:

    ```jsx
    import { QueryClient, QueryClientProvider } from 'react-query';

    const queryClient = new QueryClient();

    function App() {
      return (
        <QueryClientProvider client={queryClient}>
          <div className='App'>...</div>
        </QueryClientProvider>
      );
    }
    ```

  - Pass options to `QueryClient` for default settings (e.g., `staleTime`).
  - Use `useQueryClient` to access the `QueryClient` instance for manual query invalidation.

- **Fetching Data (Queries)**

  - Use the `useQuery` hook to fetch data:

    ```jsx
    import { useQuery } from 'react-query';

    const fetchTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      return res.json();
    };

    function Component() {
      const { data, isLoading, error } = useQuery('todos', fetchTodos);

      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Something went wrong...</div>;

      return (
        <div>
          {data.map(todo => (
            <div key={todo.id}>{todo.title}</div>
          ))}
        </div>
      );
    }
    ```

  - `queryKey`: Unique identifier for the query (string or array).
  - `queryFn`: Function returning a promise that resolves to the data.
  - `useQuery` returns:
    - `data`, `isLoading`, `error`, `isFetching`, `refetch`, `isSuccess`, `isError`, `status`, etc.
  - Use `queryKey` array for dependencies.

- **Prefetching Data**

  - Fetch data before it's needed (e.g., navigation, pagination):

    ```jsx
    import { useQueryClient } from 'react-query';

    function Component() {
      const queryClient = useQueryClient();

      const handleClick = () => {
        queryClient.prefetchQuery('todos', fetchTodos);
      };

      return <button onClick={handleClick}>Prefetch</button>;
    }
    ```

- **Mutating Data (Create, Update, Delete)**

  - Use the `useMutation` hook for data mutations:

    ```jsx
    import { useMutation } from 'react-query';

    const createTodo = async todo => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
      });
      return res.json();
    };

    function Component() {
      const [mutate, { isLoading, error }] = useMutation(createTodo);

      const handleSubmit = e => {
        e.preventDefault();
        mutate({ title: 'New todo', completed: false });
      };

      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Something went wrong...</div>;

      return (
        <form onSubmit={handleSubmit}>
          <input type='text' />
          <button type='submit'>Add</button>
        </form>
      );
    }
    ```

  - `useMutation` returns:
    - `mutate`, `isLoading`, `error`, `isSuccess`, `isError`, `reset`, etc.
  - Perform actions after mutation success or failure using `onSuccess` and `onError`.
  - Example: Refetch data after mutation:

    ```jsx
    const [mutate] = useMutation(createTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      }
    });
    ```

- **React Query Custom Hooks**

  - Create custom hooks for fetching data:

    ```jsx
    // useTodos.js
    import { useQuery } from 'react-query';

    const fetchTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      return res.json();
    };

    export default function useTodos() {
      return useQuery('todos', fetchTodos);
    }
    ```

    ```jsx
    // Component.js
    import useTodos from './useTodos';

    function Component() {
      const { data, isLoading, error } = useTodos();

      // ... logic
    }
    ```

- **React Query DevTools**
  - Provides debugging tools for React Query.
  - Visualize query states, cache, and more.
  - Install with `npm install react-query-devtools`.

---

#### React Performance Optimization Summary

- **Why Optimize React Performance?**

  - React is fast by default, but optimization can address specific bottlenecks.
  - Use optimization techniques only when necessary to avoid trade-offs (e.g., memory usage).
  - Use the DevTools Profiler to identify performance bottlenecks.

- **When to Optimize?**

  - Optimize only when there is a clear performance bottleneck.
  - Optimization has trade-offs, such as increased memory usage or slower initial loads.

- **Reasons for Re-renders**

  - Component's `state` changes.
  - Parent component re-renders, causing child components to re-render.
  - A render does not always mean a DOM update; it could be a "wasted render."

- **Passing Elements as `children` or `props`**

  - Pass slow components as `children` to avoid unnecessary re-renders.
  - Example:
    - **Slow:** Passing a slow component directly.
    - **Fast:** Wrapping the slow component as a `children` prop.

- **Memoization**

  - Prevents wasted renders by caching results of expensive computations.
  - Techniques:
    - `memo()`: Memoizes components.
    - `useMemo()`: Memoizes values or return values of functions.
    - `useCallback()`: Memoizes functions.

- **`memo()`**

  - Wraps components to skip rendering if props haven't changed.
  - Use with caution for large components with many child components.
  - Watch out for reference-type props (e.g., objects, arrays).

- **`useMemo()`**

  - Memoizes values or return values of functions.
  - Use for expensive computations or dependency arrays in `useEffect()`.
  - Example:

    ```jsx
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    ```

- **`useCallback()`**

  - Memoizes functions to prevent re-creation on every render.
  - Useful for passing stable callback functions to child components.
  - Example:

    ```jsx
    const handleAddItem = useCallback(() => setItems([...items, item]), [items]);
    ```

- **Using `useCallback` to Fix `useEffect` Infinite Loops**

  - Prevents infinite re-renders caused by unstable dependencies in `useEffect`.

- **`useTransition`**

  - Allows state updates without blocking the UI.
  - Useful for heavy computations like filtering or sorting.
  - Example:

    ```jsx
    const [isPending, startTransition] = useTransition();
    startTransition(() => setValue(newValue));
    ```

- **`PureComponent`**

  - Class-based alternative to `React.memo()` for functional components.
  - Automatically implements `shouldComponentUpdate` for shallow prop comparisons.

- **Code Splitting & Dynamic Imports**

  - Splits bundles into smaller chunks for faster initial loads.
  - Use `React.lazy()` and `React.Suspense` for dynamic imports.
  - Example:

    ```jsx
    const HomeComponent = lazy(() => import('./Home'));
    <Suspense fallback={<Loading />}>
      <HomeComponent />
    </Suspense>;
    ```

- **Optimization Advices**

  - **Optimizing Context:**
    - Memoize consumer components with `memo()`.
    - Memoize context values with `useMemo()`.
  - **Optimizing Dependencies:**
    - Remove unnecessary dependencies in `useEffect` or `useCallback`.
    - Use primitive values instead of objects or arrays in dependency arrays.

- **React DevTools**
  - Inspect component rendering and interactions.
  - Use the Profiler to identify slow components and rendering issues.
  - Analyze the timeline to understand rendering behavior and performance bottlenecks.

---

#### React Interview Questions Summary

- **General Questions**

  - What happens if you use a state in JSX without defining an initial state and set it in `componentDidMount()`?
    - Results in an error because `render()` is invoked before `componentDidMount()` and no initial state is defined.
  - Why use `useEffect()` or `componentDidMount()` to change state after mounting instead of invoking the function directly in the component body?
    - Direct invocation causes re-renders, leading to a render infinite loop.

- **React Hooks**

  - Why does `useState` use `const` instead of `let`?
    - State is immutable, so `const` is used to prevent reassignment.

- **State Management**

  - Why doesn't the following code update the name on the page?

    ```jsx
    <h1
      onClick={() => {
        this.state.name = 'Ahmed';
      }}>
      Hi {this.state.name}
    </h1>
    ```

    - The state changes, but React doesn't recognize it for re-rendering.
    - Use `setState()` to trigger re-rendering:

      ```jsx
      this.setState(() => ({ name: 'Ahmed' }));
      ```

  - Why does fetching data and setting state without `componentDidMount()` or `useEffect()` cause infinite renders?
    - Fetching and setting state creates a new state object, causing re-renders repeatedly.
  - Why must the app be opened through a server in development/production modes?
    - React apps rely on a server to serve files and data, especially for SPAs.
  - Why avoid mutating objects/arrays directly when updating state?
    - React uses reference checks to determine re-renders. Mutating directly may skip re-renders.
    - Always return a new object/array with modifications.

- **Reducers**

  - Why always return the current state and override it in reducers?

    - Ensures additional features in the state are preserved.
    - Example:

      ```js
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      };
      ```

- **Context API**

  - What happens if `useContext()` is used in a component not wrapped with the context provider?
    - Returns the initial/default value of the context.

- **React Internals**
  - What is the `$$typeof` property in React elements?
    - Used to check if an object is a React element (`Symbol.for('react.element')`).
    - Protects against XSS attacks by ensuring only valid React elements are rendered.

---

#### Next.js Summary

- **Overview**

  - Framework built on top of React for scalable apps with server-side rendering.
  - Provides tooling, configuration, and optimizations for React applications.
  - Enables full-stack development with features like routing and `<Head>` management.

- **React Drawbacks**

  - Client-side rendering (CSR) impacts SEO due to empty initial HTML.

- **Key Features**

  - **Rendering Techniques**
    - Server-Side Rendering (SSR): Pre-renders React apps on the server.
    - Static Site Generation (SSG): Pre-renders at build time for performance and SEO.
    - Incremental Static Regeneration (ISR): Updates static pages after build.
    - Client-Side Rendering (CSR): Fetches data on the client side.
  - **Performance**
    - Automatic code splitting for faster load times.
    - Lazy component loading.
  - **File-Based Routing**
    - Define routes using files and folders.
  - **SEO Enhancements**
    - Optimized metadata and server-side rendering for better search engine indexing.
  - **Serverless Functions**
    - Run server-side code only when needed.

- **Installation**

  - Use `npx create-next-app` to set up a new project.
  - File structure includes `_app.js` for shared components across routes.

- **Configuration**

  - `next.config.js` for server and build phase settings.
    - Use for environmental variables, allowed domains, etc.

- **Pre-rendering**

  - Converts React components to HTML for faster initial load.
  - **Hydration**: React takes over after server-side rendering.

- **Data Fetching**

  - **Static Site Generation (SSG)**
    - Use `getStaticProps` for build-time data fetching.
    - Benefits: SEO, performance, CDN caching.
    - Issue: Increased build time for many pages.
  - **Incremental Static Regeneration (ISR)**
    - Updates static pages without rebuilding the entire site.
    - Use `getStaticProps` with `revalidate`.
    - Pros: Fast performance, less build time.
    - Cons: Initial stale time.
  - **Server-Side Rendering (SSR)**
    - Use `getServerSideProps` for request-time data fetching.
    - Benefits: Better SEO, dynamic data.
    - Drawbacks: Lower performance, no CDN caching.
  - **Client-Side Rendering (CSR)**
    - Use libraries like SWR for client-side data fetching.
    - Suitable for non-SEO-critical pages with frequently updated data.

- **File-Based Routing**

  - Dynamic routes: Use `[id].js` for parameterized routes.
  - Catch-All Routes: Use `[...slug].js` for flexible routing.
  - Custom 404 Page: Create `404.js` for custom error handling.
  - Navigation:
    - Clickable: Use `<Link>` for navigation.
    - Programmatic: Use `router.push()` for dynamic navigation.

- **Optimization**

  - **Head (Metadata)**
    - Use `<Head>` for injecting metadata into the HTML.
    - Supports global headers in `_app.js` or `_document.js`.
  - **Image Optimization**
    - Use the `Image` component for modern web optimizations.
    - Features: Lazy loading, caching, responsive images.

- **API Routes**

  - Write server-side code in the `api` folder.
  - Code is never exposed to the client side.

- **Deployment**
  - Multiple deployment options available.
  - Supports serverless and static deployments.

---

### Vue

#### Vue Summary ✅

- **What is Vue?**

  - A JavaScript framework for building user interfaces.
  - Builds on standard HTML, CSS, and JavaScript.
  - Provides a declarative and component-based programming model.
  - Comparison with other frameworks:
    - Neutral-opinionated: Tools like routing and testing are recommended but not enforced.
  - Advantages:
    - Clean (separation of concerns).
    - Semantic (write semantic HTML).
    - Declarative and reactive.
    - Easy to maintain.
  - Use `createApp()` to instantiate and mount Vue applications.

- **How Vue Works**

  - **Reactivity and Proxies**:

    > "Reactivity" it's the ability of a system to react to changes in its environment and to adjust its functioning accordingly
    >
    > "Proxy" it's an object that acts as an intermediary for another object, allowing you to intercept and redefine fundamental operations for that object, such as property access, assignment, enumeration, function invocation, etc.

    - Vue uses proxies to track changes in data properties and update the DOM reactively.
    - Proxies use `set` traps to detect changes.
    - Handles reference types (objects, arrays) with `Vue.set()` or `this.$set()`.
    - Note: Reactivity is not deep by default; it has a problem with reference-type properties, as Vue does not automatically track changes to nested properties.
      - use `Vue.set()` for nested properties to ensure reactivity.

  - **Template Syntax**:
    - HTML-based syntax for declarative binding.
    - Templates are compiled into optimized JavaScript code.
  - **Virtual DOM**:
    - Lightweight copy of the actual DOM (in memory).
    - Vue uses a virtual DOM to minimize direct DOM manipulation. as updates are made to the virtual DOM first, then compared with the real DOM.
    - Observes changes and applies minimal updates to the real DOM.
    - It's different from React's virtual DOM, as Vue's is more optimized for its reactivity system. meaning that Vue's virtual DOM is designed to work seamlessly with its reactivity system, allowing for efficient updates and rendering.

- **Ways of Using Vue**

  - Standalone Script (CDN).
  - Single-Page Application (SPA).
  - Fullstack / Server-Side Rendering (SSR).

- **Instance Lifecycle**

  - Lifecycle Hooks:
    - **Creation Hooks**:
      - `beforeCreate`: Runs before data and methods are set up.
      - `created`: Access reactive data and methods; DOM not yet mounted.
    - **Mounting Hooks**:
      - `beforeMount`: Runs before initial render; `$el` not available.
      - `mounted`: Access rendered DOM; common for side effects like data fetching.
    - **Updating Hooks**:
      - `beforeUpdate`: Runs before DOM is patched.
      - `updated`: Runs after DOM re-renders.
    - **Destroying Hooks**:
      - `beforeDestroy`: Invoked before teardown.
      - `destroyed`: Cleanup after component is destroyed.

- **Data**

  - **Interpolation**:
    - Use `{{ }}` for text interpolation.
    - Alternative: `v-text` directive.
  - **Directives**:
    - Template tokens for DOM manipulation (e.g., `v-bind`, `v-on`).
    - Shorthand: `:` for `v-bind`, `@` for `v-on`.
  - **v-model (Two-Way Binding)**:
    - Creates a two-way binding between form inputs and data properties.
    - Supports modifiers like `.trim` and `.number`.
  - **Refs**:
    - Directly access DOM elements or child components.
    - Use `ref` attribute and access via `this.$refs`.

- **Methods**

  - Use `v-on` or `@` for event handling.
  - Avoid arrow functions to preserve `this` context.

- **Computed Properties**

  - Cached based on reactive dependencies.
  - Use for complex logic to avoid bloated templates.
  - Difference from methods:
    - Computed properties are cached; methods are re-executed on every render.

- **Watchers**

  - React to changes in data properties.
  - Use for side effects or asynchronous operations.
  - Types:
    - Deep Watchers.
    - Immediate Watchers.
    - `this.$watch()` for programmatic watchers.

- **Styles**

  - Dynamic styling with data binding.
  - Scoped styles for component-specific CSS.

- **Transitions and Animations**

  - Use `<transition>` and `<transition-group>` for animations.
  - Supports JavaScript hooks and reusable transitions.

- **Conditional Rendering**

  - Use `v-if`, `v-else`, and `v-show` for conditional rendering.
  - Dynamic components with `<component>` and `keep-alive`.

- **Rendering Lists**

  - Use `v-for` for looping.
  - Maintain state with `key` attribute.
  - Avoid using `v-for` with `v-if` on the same element.

- **Components**

  - Single File Components (SFCs) for modular development.
  - Register components globally or locally.

- **Communication Between Components**

  - **Props**:
    - Pass data from parent to child.
    - Avoid mutating object/array props directly.
  - **Event Emitters**:
    - Use `$emit` to send events from child to parent.
  - **Provide/Inject**:
    - Dependency injection for sharing data across components.
    - Use with caution; not reactive by default.

- **Slots**

  - Default and named slots for content distribution.
  - Scoped slots for passing data to slot content.

- **Teleport Components**

  - Render components outside the DOM hierarchy.

- **Forms**

  - Bind input values with `v-model`.
  - Validate forms with custom logic or libraries.

- **Modes and Environment Variables**

  - Use modes for different build environments (e.g., development, production).
  - Access environment variables via `process.env`.

- **Performance**

  - Optimize with lazy loading and code splitting.
  - Use `v-once` for static content.

- **Progressive Web Apps (PWA)**

  - Build installable and offline-capable apps with Vue.

- **Plugins**

  - Extend Vue functionality with plugins.
  - Use `app.use()` to install plugins.

- **Notes & Guidelines**
  - Follow Vue's best practices for maintainable code.
  - Use Vue DevTools for debugging and performance analysis.

---

#### Vue Router Summary ✅

- **Routing**

  - Vue Router is the official router for Vue.js applications. It enables navigation between different views or components in a Vue application.
  - It allows you to define routes, map them to components, and manage navigation history.

  - Router configuration and setup

    - `main.js` setup:

      - Use `createRouter` to create the router.
      - Use `createWebHistory` for browser history.
      - Pass routes array with objects for each route and their components.
      - Register router in the app using `app.use(router)` and `<router-view />`.

    - Example:

      ```js
      const router = createRouter({
        history: createWebHistory(),
        routes: [
          { path: '/', redirect: '/teams' },
          {
            name: 'teams',
            path: '/teams',
            meta: { needsAuth: true },
            components: { default: TeamsList, footer: TeamsFooter },
            children: [
              {
                name: 'team-members',
                path: ':teamId',
                component: TeamMembers,
                props: true
              }
            ]
          },
          { path: '/:notFound(.*)', component: NotFound }
        ],
        linkActiveClass: 'active',
        scrollBehavior(_, _2, savedPosition) {
          return savedPosition || { left: 0, top: 0 };
        }
      });
      ```

    - Notes:
      - Use `alias` for multiple routes pointing to the same component.

  - History

    - Determines how the browser tracks user history.
    - Modes:

      - **Hash Mode**: Uses `#` in URLs, avoids server requests but impacts SEO.
      - **HTML5 Mode**: Uses `createWebHistory()`, requires server fallback for 404 errors.
      - **Memory Mode**: Ideal for Node/SSR, no browser history.

  - Scroll Behavior

    - Customize scroll behavior on route navigation.
    - Examples:

      - Scroll to top: `{ left: 0, top: 0 }`
      - Scroll to element: `{ el: '#main', top: -10 }`
      - Smooth scrolling: `{ el: to.hash, behavior: 'smooth' }`
      - Delayed scroll:

        ```js
        scrollBehavior() {
          return new Promise(resolve => {
            setTimeout(() => resolve({ left: 0, top: 0 }), 500);
          });
        }
        ```

- **Routes**

  - Named Routes

    - Advantages:

      - No hardcoded URLs.
      - Automatic encoding/decoding of params.
      - Prevents typos in URLs.

  - Redirecting and Alias

    - Redirect:

      ```js
      { path: '/home', redirect: '/' }
      ```

    - Alias:

      ```js
      { path: '/', component: Homepage, alias: '/home' }
      ```

  - `route` vs `router`

    - `route`: Stores current location info (e.g., queryParams, URL).
    - `router`: Tool for navigation.

  - Navigate from a link: `router-link`

    - Replaces `<a>` tags to prevent page reloads.
    - Styling:

      - Use `.router-link-active` and `.router-link-exact-active` classes.
      - Customize active class in router config.

    - Watch route changes for caching components.

  - Nested Routes (Views)

    - Use `children` in routes for nested views.

    - Example:

      ```js
      const routes = [
        {
          path: '/user/:id',
          component: User,
          children: [
            { path: 'profile', component: UserProfile },
            { path: 'posts', component: UserPosts }
          ]
        }
      ];
      ```

    - Nested Named Views:

      - Use `name` attribute for complex layouts.
      - Example:

        ```html
        <router-view name="helper" />
        ```

  - Navigate programmatically

    - Methods:

      - `push`: Navigate to a new location.
      - `replace`: Replace current location without history entry.
      - `go`: Traverse history stack.

- **Params**

  - Add params to route

    - Use `query` params:

      ```js
      this.$router.push({ name: 'JobResults', query: { role, location } });
      ```

  - Dynamic params

    - Define with `:paramName` in routes.
    - Use `props: true` to pass params as props.
    - React to param changes:

      - Watch `$route.params`.
      - Use `beforeRouteUpdate` guard.

  - Routes Matching Syntax

    - Use regex for custom matching.
    - Optional params: `:paramName?`.

  - Catch all / 404 Not Found Route

    - Example:

      ```js
      { path: '/:pathMatch(.*)*', component: NotFound }
      ```

- **Navigation Guards**

  - Types:

    - Global Guards:

      - `beforeEach`: Runs before every navigation.
      - `afterEach`: Runs after every navigation (e.g., analytics).

    - Per-Route Guard:

      - Define in route config with `beforeEnter`.

    - In-Component Guards:

      - `beforeRouteEnter`, `beforeRouteUpdate`, `beforeRouteLeave`.

  - Use `next()` to confirm/cancel navigation.

- **Route Meta Fields**
  - Attach arbitrary info to routes (e.g., access control, transition names).
  - Access via `to.meta` in guards.

---

#### Vuex Summary ✅

- **Overview**

  - Vuex is a **state management pattern + library** for Vue.js applications.
  - Centralized store for shared data, logic, and methods.
  - Ensures **unidirectional data flow** to prevent state confusion.
  - Inspired by **Flux Application Architecture** (e.g., Redux).
  - Benefits:
    - Simplifies state management in complex SPAs.
    - Eliminates prop-drilling by storing data in a centralized `state`.
    - Real-time state reflection across components.
  - When to use:
    - Multiple instances of children/siblings communicating.
    - Need to organize and visualize the entire state in one place.

- **Application Structure**

  - Typical structure:

    ```sh
    ├── index.html
    ├── main.js
    ├── api
    │   └── ... # abstractions for making API requests
    ├── components
    │   ├── App.vue
    │   └── ...
    └── store
        ├── index.js          # main store file
        ├── actions.js        # root actions
        ├── mutations.js      # root mutations
        └── modules
            ├── cart.js       # cart module
            └── products.js   # products module
    ```

- **Basic Abstract Example**

  - Example store:

    ```js
    export const store = new Vuex.Store({
      state: {
        counter: 0
      },
      getters: {
        tripleCounter: state => state.counter * 3
      },
      mutations: {
        increment: (state, num) => {
          state.counter += num;
        }
      },
      actions: {
        asyncIncrement: ({ commit }, asyncNum) => {
          setTimeout(() => {
            commit('increment', asyncNum.by);
          }, asyncNum.duration);
        }
      }
    });
    ```

  - `namespaced: true` ensures module reusability and prevents conflicts.

- **Usage in Components**

  - Use shortcuts like `mapState`, `mapGetters`, `mapMutations`, and `mapActions`.

- **State**

  - Centralized state similar to `data` in components.
  - Example:

    ```js
    const store = createStore({
      state: {
        todos: [
          { id: 1, text: '...', done: true },
          { id: 2, text: '...', done: false }
        ]
      },
      getters: {
        doneTodos(state) {
          return state.todos.filter(todo => todo.done);
        }
      }
    });
    ```

- **Getting Data from the State**

  - Direct access:

    ```js
    const Counter = {
      template: `<div>{{ count }}</div>`,
      computed: {
        count() {
          return this.$store.state.count;
        }
      }
    };
    ```

  - Use `mapState` for multiple properties:

    ```js
    import { mapState } from 'vuex';

    export default {
      computed: {
        ...mapState(['isLoggedIn'])
      }
    };
    ```

- **Getters**

  - Like computed properties for the state.
  - Benefits:
    - Memory-caching.
    - Updates only when state changes.
  - Example:

    ```js
    const store = createStore({
      getters: {
        doneTodos(state) {
          return state.todos.filter(todo => todo.done);
        }
      }
    });
    ```

  - Use `mapGetters` for components:

    ```js
    import { mapGetters } from 'vuex';

    export default {
      computed: {
        ...mapGetters(['doneTodosCount'])
      }
    };
    ```

- **Mutations**

  - Only way to change state data.
  - Must be synchronous.
  - Example:

    ```js
    const store = createStore({
      mutations: {
        increment(state, payload) {
          state.counter += payload;
        }
      }
    });
    ```

  - Use `mapMutations` for components:

    ```js
    import { mapMutations } from 'vuex';

    export default {
      methods: {
        ...mapMutations(['increment'])
      }
    };
    ```

- **Actions**

  - For asynchronous operations.
  - Example:

    ```js
    const actions = {
      FETCH_JOBS: async context => {
        const jobs = await getJobs();
        context.commit('RECEIVE_JOBS', jobs);
      }
    };
    ```

  - Use `mapActions` for components:

    ```js
    import { mapActions } from 'vuex';

    export default {
      methods: {
        ...mapActions(['FETCH_JOBS'])
      }
    };
    ```

- **Modules**

  - Organize state and logic into modules.
  - Example:

    ```js
    const moduleA = {
      state: () => ({ ... }),
      mutations: { ... },
      actions: { ... },
      getters: { ... }
    };

    const store = createStore({
      modules: {
        a: moduleA
      }
    });
    ```

- **Notes**
  - Use modularized stores for better organization.
  - Avoid direct state changes; use mutations.
  - Use getters for accessing state outside the store.
  - Register action/mutation names as constants to avoid typos.
  - Set state as a function for reusable modules.

---

#### Composition API Summary ✅

- **Overview**

  - Encapsulates functionality for reuse across components.
  - Alternative syntax for writing components.
  - Bundles component logic in a single `setup` method.
  - Can be used alongside the Options API.

- **Why Use It?**

  - Problems with Options API:
    - Logic split across `data`, `methods`, `computed`.
    - Difficult to reuse logic (mixins considered anti-pattern).
  - Benefits:
    - Write reusable functions (composables) using Vue's reactive features.
    - Better TypeScript support.
    - Improved organization: related code (data + methods) grouped together.

- **Differences from Options API**

  - No `this` keyword.
  - Must return an object with data/methods for use in templates.
  - Use `ref` for reactive state (analogous to `data`).
  - Use `computed` for reactive logic (analogous to `computed` properties).
  - Use JavaScript functions to operate on reactive data (analogous to `methods`).
  - `setup` receives reactive `props` as the first argument.
  - Use `toRefs` to make individual `props` reactive.
  - Reactive objects in HTML automatically extract their `value`.

- **Reactivity**

  - Updates templates when data changes.
  - Equivalent to `computed` and reactive data in Options API.

  - **Reactive Programming**
    - Programming with asynchronous data streams.
    - Streams are sequences of events ordered in time.
    - Vue 3 reactivity:
      1. Detect changes in values.
      2. Track functions that depend on them.
      3. Trigger updates to dependent functions.

- **`ref` Function**

  - Wraps a value in a reactive object.
  - Access/overwrite value via `.value`.
  - Example:

    ```js
    const count = ref(0);
    count.value++;
    ```

- **`computed` Function**

  - Reactive-ready function.
  - Re-invoked when referenced values change.
  - Returns a reactive object.
  - Example:

    ```js
    const sum = computed(() => a.value + b.value);
    ```

  - Read-only.

  - **Two-Way Computed Property (Form Handling)**

    - Use `getter` and `setter` for two-way binding.
    - Example:

      ```js
      const skillsSearchTerm = computed({
        get: () => store.state.skillsSearchTerm,
        set: value => store.commit('UPDATE_SKILLS_SEARCH_TERM', value)
      });
      ```

- **`reactive` Function**

  - Returns a reactive proxy of an object.
  - Cleaner than using `ref` for objects.
  - Avoids `.value` for nested properties.
  - Example:

    ```js
    const user = reactive({ name: 'John', age: 20 });
    ```

- **`toRef` Function**

  - Creates a `ref` for a single property on a reactive object.
  - Example:

    ```js
    const fooRef = toRef(state, 'foo');
    ```

- **`toRefs` Function**

  - Converts all properties of a reactive object into `refs`.
  - Allows destructuring while retaining reactivity.
  - Example:

    ```js
    const { foo, bar } = toRefs(state);
    ```

- **Composables (Hooks)**

  - Helper functions utilizing Vue's reactive features.
  - Replace mixins for reusable logic.
  - Example:

    ```js
    function useCounter() {
      const count = ref(0);
      const increment = () => count.value++;
      return { count, increment };
    }
    ```

- **Lifecycle Hooks**

  - Similar to Options API lifecycle hooks.
  - Example:

    ```js
    onMounted(() => console.log('Component mounted'));
    ```

- **Mixins**

  - Reusable functionalities for components.
  - Composition API works better with mixins due to priority conflicts.
  - Example:

    ```js
    const myMixin = {
      created() {
        console.log('Mixin created');
      }
    };
    ```

- **Props**

  - Reactive in `setup` function.
  - Use `toRefs` or `toRef` for destructuring while retaining reactivity.
  - Example:

    ```js
    const { title } = toRefs(props);
    ```

- **Context**

  - Second argument in `setup` function.
  - Provides access to `$attrs`, `$slots`, `$emit`, etc.
  - Example:

    ```js
    setup(props, { attrs, slots, emit }) {
      emit('eventName');
    }
    ```

- **Router**

  - Use `useRouter` and `useRoute` instead of `this.$router` and `this.$route`.
  - Example:

    ```js
    const router = useRouter();
    const route = useRoute();
    ```

- **Store**

  - Use `useStore` for Vuex store functionalities.

- **Notes**
  - Can mix Options API and Composition API in the same component.

---

#### Vue Testing Summary ✅

- **Jest with Vue**

  - Problems:
    - Runs in Node, not the browser.
    - Uses JSDOM, limited Vue component support.
    - Requires transformers for modern syntax and single-file components.
  - Solution:
    - Use `babel-jest` for JavaScript.
    - Use `vue-jest` for Vue components.

- **Installing**

  - Plugin:
    - Provides Jest integration for Vue.
  - Vue Test Utils:
    - Utility library for testing Vue components.
    - Allows mounting and interacting with components outside the browser.

- **Mount**

  - Simulates components as JavaScript objects for testing.
  - `mount` vs `shallowMount`:
    - `mount`: Full rendering, includes child components.
    - `shallowMount`: Stubs child components for isolated testing.
  - Second parameter:

    - Configuration object to modify component data.
    - Example:

      ```js
      const wrapper = mount(MainNav, {
        data() {
          return { company: 'Super Corp' };
        }
      });
      ```

  - `find()` vs `get()`:
    - `find`: Returns wrapper or `undefined` if not found.
    - `get`: Throws error if not found.
  - Factory functions:

    - Reduce duplication in mounting configurations.
    - Example:

      ```js
      const createConfig = {
        global: {
          stubs: { 'router-link': RouterLinkStub }
        }
      };
      ```

- **Events**

  - `trigger()`:
    - Simulates user events (e.g., `click`).
    - Asynchronous, requires `async/await`.
  - Emitted events:

    - `.emitted()` tracks emitted events and their arguments.
    - Example:

      ```js
      const message = wrapper.emitted()['update:modelValue'];
      expect(message).toEqual([['Engi'], ['eer']]);
      ```

- **Stubs and Shallow-Mount**

  - Stubs:

    - Replace child/global components with dummy components.
    - Simplify tests by focusing on the component under test.
    - Example:

      ```js
      const wrapper = mount(SubNav, {
        global: { stubs: { FontAwesomeIcon: true } }
      });
      ```

  - Shallow-Mount:

    - Automatically stubs child components.
    - Focuses on the parent component.
    - Example:

      ```js
      const wrapper = mount(ComplexComponent, { shallow: true });
      ```

- **Router Stubbing**

  - `RouterLinkStub`:

    - Stubs `<router-link>` for testing.
    - Example:

      ```js
      const wrapper = shallowMount(MainNav, {
        global: { stubs: { 'router-link': RouterLinkStub } }
      });
      ```

  - Mocking `$route` and `$router`:

    - Replace with custom objects using `mocks`.
    - Example:

      ```js
      const wrapper = shallowMount(Component, {
        mocks: { $route: { path: '/some/path' } }
      });
      ```

- **Testing Asynchronous Behavior**

  - Vue updates:

    - Use `nextTick()` to manually trigger DOM updates.
    - Example:

      ```js
      button.trigger('click');
      await Vue.nextTick();
      ```

  - Promises:

    - Use `flushPromises()` to resolve pending promises.
    - Example:

      ```js
      await flushPromises();
      ```

- **Composable Helper Functions**

  - Encapsulate reusable logic for Vue Router, Vuex, etc.
  - Example:

    ```js
    const useConfirmRoute = routeName => {
      const route = useRoute();
      return computed(() => route.name === routeName);
    };
    ```

- **Testing Vuex**

  - Real Vuex store:

    - Register with the component using `plugins`.
    - Example:

      ```js
      const store = createStore({ state: { isLoggedIn: true } });
      const wrapper = shallowMount(MainNav, { global: { plugins: [store] } });
      ```

  - Mock store:

    - Use `mocks` to replace Vuex store.
    - Example:

      ```js
      const wrapper = shallowMount(MainNav, {
        global: { mocks: { $store: { state: { isLoggedIn: true } } } }
      });
      ```

- **Testing with Composition-API**

  - Mock external objects (e.g., Router, Vuex) instead of `$router`.

- **Test Coverage**

  - Shows untested components.
  - Use simple tests for small components.
  - Example:

    ```js
    const wrapper = mount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
    ```

---

#### Nuxt Summary ✅

- **Overview**

  - Nuxt is a framework for building Vue.js applications with features like server-side rendering (SSR), static site generation, and auto-imports.

- **Installation**

  - Use `npx nuxi init app` to initialize a Nuxt project.
  - Comes with TypeScript support via `tsconfig.json`.
  - Provides "free typing functionalities" out of the box.

- **Auto Imports**

  - Automatically imports components, layouts, composables, Pinia, and `use`-methods (e.g., `useRouter`).
  - Default components are tree-shaking to prevent unused imports.

- **Server-Side Rendering (SSR)**

  - Combines the benefits of SSR and CSR (Client-Side Rendering) for "Universal Rendering."
  - Provides better SEO and faster initial page loads.

- **Components**

  - Global components:
    - Place components in a `global` folder for automatic global registration.

- **Routes**

  - Views with routes:
    - Place components in a `pages` folder.
    - `index.vue` in `pages` maps to the home route `/`.
    - Use `404.vue` for catch-all routes.
    - Replace `<router-view/>` with `<NuxtPage/>`.
    - Use `<NuxtLink/>` instead of `<RouterLink/>` for navigation.
  - Nested routes:
    - Use folders with parent route names containing child views.
  - Dynamic pages:

    - Use brackets `[ ]` for dynamic routes (e.g., `[id].vue`).
    - Double brackets `[[ ]]` for optional segments.
    - Catch-all routes:

      ```js
      File: /pages/person/[...slugs].vue

      Url: /person/spongebob/123/abc
      $route.params = { slugs: ['spongebob', '123', 'abc'] }
      ```

- **Layouts**

  - Extract common UI or code patterns (e.g., navbar, footer) into reusable layout components.
  - Place layouts in the `layouts/` directory.
  - Use `<NuxtLayout>` in `app.vue` to apply layouts.
  - Use slots for layout customization.
  - For single-layout applications, use `app.vue` directly.

- **Composables**

  - `useHead`:

    - Customize `<head>` tag properties for individual pages.
    - Example:

      ```js
      useHead({
        title: 'Page Title',
        meta: [{ name: 'description', content: 'Page description' }]
      });
      ```

  - `useState`:
    - Manage reactive state across components.
  - `useLocalStorage`:
    - Sync state with local storage.
  - `VueUse`:
    - Utility library for common Vue composables.

- **Hydration**

  > It's the process of reusing server-rendered HTML on the client side, allowing for a faster initial load and improved SEO.

  - Fixes issues with SSR apps where static HTML and data mismatch.
  - Use `<ClientOnly/>` to render components on the client side only.
  - Note: Using `<ClientOnly/>` disables SSR benefits for that component.

---

## Backend

### Backend Summary

- **Web Server**

  - A computer connected to the Internet that receives and sends requests.
  - Examples:
    - ![Server](./img/server-1.png)
    - ![Server](./img/server.PNG)

- **Backend**

  - Processes requests and manages app data.
  - Tasks unsuitable for client-side:
    - Security
    - Transactions
    - Authentication
  - **Components**:
    - `Server`: Listens to requests from the frontend.
    - `Application`: Processes requests and returns responses.
    - `Database`: Stores and organizes data.
  - Example:
    - ![Backend](./img/backend1.PNG)

- **API**

  - Interface or gateway for interacting with external programs or datasets.
  - Example:
    - ![api](./img/api.png)

- **How Does a Server Work?**

  - **Common HTTP Requests**:
    - `GET`: Retrieves data from the server.
    - `POST`: Sends data to the server.
    - `DELETE`: Removes data from the server.
    - `PUT`: Replaces data on the server.
    - `PATCH`: Updates data on the server.
  - **Query Parameters**:
    - Parameters in the URL, identified by `?`.
    - Chain multiple parameters using `&`.
    - **Interview Question**:
      - Difference between query parameters and path parameters?
        - Query parameters: Filter data, optional.
        - Path parameters: Identify specific resources, required.
    - Example:
      - ![Query](./img/Query%20Parameters.jpg)
  - **HTTP Request**:
    - Example:
      - ![http-request](./img/http-request.PNG)
  - **HTTP Response**:
    - Example:
      - ![http-response](./img/http-response.PNG)
    - **Status Codes**:
      - Example:
        - ![alt](./img/HTTP%20Response%20Status%20Codes.PNG)

- **Same Origin Policy (SOP) & CORS**

  - **SOP**:
    - Restricts access to resources from different origins unless allowed.
    - Example:
      - ![sop](./img/sop.PNG)
  - **Origin**:
    - Combination of domain, scheme, or port.
    - Different ports (e.g., `3000` & `8000`) result in CORS errors.
    - Example:
      - ![origin](./img/origin.PNG)
  - **CORS**:
    - HTTP-header mechanism allowing cross-origin resource sharing.
    - Options:
      - Access for all sites (`*`).
      - Access for specific sites (whitelisting).
    - Middleware in `EXPRESS`:
      - [cors](https://www.npmjs.com/package/cors)
    - Example:
      - ![cors](./img/cors.PNG)
    - **Problem**:
      - Preflight requests increase response time, affecting user experience.

- **Idempotency**

  - Identical requests produce the same result.
  - **Methods**:
    - `POST`: Not idempotent (adds new resources).
    - `GET`, `DELETE`, `PATCH`, `PUT`: Idempotent (act on the same resource).
  - **Security**:
    - `GET`:
      - Safe, cached, logged, stored in session history.
    - `POST`:
      - Not stored in session history, protects user data.

- **REST / RESTful API**

  - **REST**:

    - Pattern for organizing API endpoints.
    - **Routes**:
      - `GET ['/cats']`: SHOW (READ ONE).
      - `GET ['/cats/:id']`: INDEX (READ ALL).
      - `POST ['/cats']`: CREATE.
      - `PUT ['/cats/:id']`: UPDATE (EDIT).
      - `DELETE ['/cats/:id']`: DELETE.
    - **Examples**:

      - `INDEX`: List all items (`GET ['/cats']`).
      - `SHOW`: Single item by ID (`GET ['/cats/:id']`).

        - Example:

          ```ts
          app.get('/articles/:id', (_req: Request, res: Response) => {
            try {
              res.send('this is the SHOW route');
            } catch (err) {
              res.status(400);
              res.json(err);
            }
          });
          ```

      - `CREATE`: Add new resource (`POST ['/cats']`).
      - `EDIT`: Update resource (`PUT ['/cats/:id']`).
      - `DELETE`: Remove resource (`DELETE ['/cats/:id']`).

---

### Backend Performance Summary

- **Using CDN**

  - A network of servers delivering cached static content based on user location.
  - Benefits:
    - Reduces server load.
    - Improves website performance by reducing latency and server requests.
  - Mechanism:
    - Caches files and serves them from the nearest server to the user.

- **Compression (GZIP)**

  - Compresses files (`HTML`, `CSS`, `JS`) on the server before sending them to the browser.
  - Benefits:
    - Reduces file size.
    - Decreases transfer time to the browser.
  - Verification:
    - Check response headers to confirm GZIP usage.
  - Examples:
    - ![gzip](./img/gzip-1.jpeg)
    - ![gzip](./img/gzip-2.png)

- **Database Enhancements**

  - Identify and optimize inefficient queries.
  - Increase memory to speed up database queries.
  - Use `indexes` to improve query performance.
  - Techniques:
    - **Vertical Scaling**: Increase server power.
    - **Sharding**: Split the database across multiple servers to reduce load.
  - Choose a database type that fits your needs.

- **Caching**

  - Process of storing data in a cache.
  - Storage mediums:
    - `RAM`
    - `Disk`

- **Using a Load Balancer**
  - Acts as a reverse proxy to distribute network or application traffic across multiple servers.
  - Benefits:
    - Increases application capacity.
    - Enhances application reliability.
    - Improves overall performance.
