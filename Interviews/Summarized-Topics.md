# INDEX

- [INDEX](#index)
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
