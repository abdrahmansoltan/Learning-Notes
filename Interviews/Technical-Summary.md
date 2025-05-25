# INDEX

- [INDEX](#index)
  - [Object-Oriented Programming (OOP)](#object-oriented-programming-oop)
  - [SOLID Principles](#solid-principles)
  - [Design Patterns](#design-patterns)
  - [The Internet](#the-internet)
  - [HTTP (HyperText Transfer Protocol)](#http-hypertext-transfer-protocol)
  - [Frontend Basics \& Concepts](#frontend-basics--concepts)

---

## Object-Oriented Programming (OOP)

- **Introduction**: Object-Oriented Programming (OOP) structures programs using **objects**, focusing on data and behaviors bundled into single units.

---

- **Four Core Pillars**:

  - **Encapsulation**: Protects internal state via access modifiers (`private`, `public`, `protected`). Forces interaction through public methods.
  - **Abstraction**: Hides internal implementation details and shows only what is necessary to the user.
  - **Inheritance**: Promotes code reuse. Child classes inherit methods and properties from parent classes.
  - **Polymorphism**: Allows one interface to be used for many types. Supports method overloading and method overriding.

---

- **Class vs Object**:

  | Class                | Object              |
  | -------------------- | ------------------- |
  | Blueprint            | Instance of a class |
  | No memory allocation | Memory is allocated |

---

- **Access Modifiers**:

  - `private`: Only within the same class
  - `protected`: Within the same package and subclasses
  - `public`: Accessible from anywhere

---

- **Advantages of OOP**:

  - Modularity
  - Reusability
  - Scalability
  - Maintainability

---

- **Real-World Example**:

```java
class BankAccount {
    private double balance;

    public void deposit(double amount) { balance += amount; }
    public void withdraw(double amount) { balance -= amount; }
    public double getBalance() { return balance; }
}
```

- Encapsulation: `balance` is private
- Abstraction: Only public methods are exposed
- Inheritance-ready: Extend for other account types
- Polymorphism: Override `getBalance()` if needed

---

- **Study Notes**:

  - Encapsulation: data hiding using access modifiers.
  - Abstraction: expose only what’s essential.
  - Inheritance: reuse logic across classes.
  - Polymorphism: multiple behaviors via one method/interface.
  - Classes are blueprints.
  - Objects are instances.
  - Access modifiers control scope.

---

- **Practice Questions**:

  - **Q1**: What is Encapsulation?

    - **A**: Bundling data and methods and restricting access via modifiers like `private`.

  - **Q2**: Abstraction vs Encapsulation?

    - **A**: Abstraction hides _complexity_; encapsulation hides _implementation details_.

  - **Q3**: Overloading vs Overriding?

    - **A**: Overloading uses the same method name with different parameters (compile-time). Overriding changes superclass method behavior in a subclass (run-time).

  - **Q4**: Best access modifier for subclass access?

    - **A**: `protected`

  - **Q5**: Java Inheritance Example:

```java
class Animal {}
class Dog extends Animal {}
```

- **Q6**: True/False: Java supports multiple class inheritance?

  - **A**: False

---

## SOLID Principles

- **Definition**: SOLID is an acronym for five principles of object-oriented design that lead to more understandable, flexible, and maintainable software.

- **S - Single Responsibility Principle (SRP)**:

  - A class should have only one reason to change.
  - Each class should focus on a single functionality.
  - Example: Separate `InvoiceManager` (business logic) from `InvoicePrinter` (UI concerns).

- **O - Open/Closed Principle (OCP)**:

  - Software entities should be open for extension but closed for modification.
  - Behavior should be extended without modifying existing code.
  - Achieved using abstractions like interfaces and inheritance.
  - Example: Instead of modifying a `PaymentProcessor`, create new subclasses like `CreditCardProcessor`.

- **L - Liskov Substitution Principle (LSP)**:

  - Subtypes must be substitutable for their base types.
  - Objects of a superclass should be replaceable with objects of its subclasses without altering desirable properties of the program.
  - Violation example: If `Bird` has `fly()` and `Penguin` extends `Bird`, calling `fly()` on `Penguin` breaks expectations.

- **I - Interface Segregation Principle (ISP)**:

  - Clients should not be forced to depend on methods they do not use.
  - Create smaller, more specific interfaces instead of large, general-purpose ones.
  - Example: Split `IMultifunctionDevice` into `IPrinter`, `IScanner`, etc.

- **D - Dependency Inversion Principle (DIP)**:

  - High-level modules should not depend on low-level modules; both should depend on abstractions.
  - Abstractions should not depend on details; details should depend on abstractions.
  - Use interfaces or abstract classes to decouple high- and low-level components.
  - Example: `OrderService` depends on `IPaymentGateway`, not a concrete `StripePayment` class.

---

## Design Patterns

- **Definition**: Design patterns are general, reusable solutions to common problems in software design. They're not code, but templates that guide software structure.

- **Purpose**:

  - Encourage best practices.
  - Improve code reusability and scalability.
  - Provide a common language for design communication.

---

- **Creational Patterns** (Object creation focused):

  - **Singleton**: Ensures only one instance exists and provides a global point of access.
  - **Factory Method**: Lets subclasses decide which class to instantiate.
  - **Abstract Factory**: Creates families of related objects without specifying classes.
  - **Builder**: Constructs complex objects step by step.
  - **Prototype**: Clones existing objects instead of creating new ones from scratch.

- **Structural Patterns** (Object composition focused):

  - **Adapter**: Converts one interface into another that clients expect.
  - **Bridge**: Separates abstraction from implementation.
  - **Composite**: Composes objects into tree structures to represent hierarchies.
  - **Decorator**: Adds responsibilities to objects dynamically.
  - **Facade**: Provides a unified interface to a subsystem.
  - **Flyweight**: Shares objects to support large numbers of fine-grained instances efficiently.
  - **Proxy**: Controls access to another object.

- **Behavioral Patterns** (Object interaction focused):

  - **Observer**: Notifies dependent objects when state changes.
  - **Strategy**: Enables selecting an algorithm's behavior at runtime.
  - **Command**: Encapsulates requests as objects.
  - **State**: Allows an object to alter its behavior when internal state changes.
  - **Chain of Responsibility**: Passes requests along a chain until handled.
  - **Visitor**: Lets you define new operations on object structures without modifying them.

---

- **Practice Questions**:

  - **Q1**: What problem does the Singleton pattern solve?

    - **A**: It ensures a class has only one instance and provides a global access point.

  - **Q2**: When would you use a Factory Method pattern?

    - **A**: When you want to defer instantiation logic to subclasses and promote loose coupling.

  - **Q3**: What’s the difference between Adapter and Decorator?

    - **A**: Adapter changes the interface of an existing object. Decorator adds new behavior while keeping the same interface.

  - **Q4**: Where would you apply the Observer pattern?

    - **A**: In systems where multiple parts need to be updated in response to one part's state changes (e.g., GUI event handling).

  - **Q5**: Compare Strategy vs State pattern.

    - **A**: Strategy changes behavior based on algorithm selection; State changes behavior based on internal object state.

---

## The Internet

- **What is the Internet?**

  - A global network of interconnected computers that use the **TCP/IP protocol** for communication.
  - Originally developed as **ARPANET** in 1969.

- **How it Works**:

  - Data is broken into packets.
  - Packets are routed independently via routers.
  - Reassembled at destination using TCP/IP stack.

- **Internet Backbone**:

  - High-capacity data routes that carry internet traffic across countries and continents.
  - Run by Tier 1 ISPs (e.g., AT\&T, Tata).

- **ISPs (Internet Service Providers)**:

  - Companies that provide internet access to consumers.
  - Connect end-users to the internet via regional or local networks.

- **Key Protocols**:

  - **IP (Internet Protocol)**: Addresses and routes packets.
  - **TCP (Transmission Control Protocol)**: Ensures packet delivery with reliability.
  - **UDP (User Datagram Protocol)**: Fast, connectionless transmission (no delivery guarantee).
  - **DNS (Domain Name System)**: Resolves domain names to IP addresses.
  - **HTTP/HTTPS**: Protocols for web communication.

- **Client-Server Model**:

  - **Client**: Requests resources (e.g., browser).
  - **Server**: Provides resources (e.g., website).

- **Ports**:

  - Logical endpoints for communication.
  - Examples:

    - HTTP: Port 80
    - HTTPS: Port 443
    - DNS: Port 53

- **IP Addresses**:

  - **IPv4**: 32-bit (e.g., 192.168.1.1)
  - **IPv6**: 128-bit (e.g., 2001:0db8:85a3::8a2e:0370:7334)

- **NAT (Network Address Translation)**:

  - Allows multiple devices on a local network to share one public IP address.

- **Firewall**:

  - Controls traffic to/from networks for security.

- **CDN (Content Delivery Network)**:

  - Distributed servers that deliver content based on user’s location to reduce latency.

---

## HTTP (HyperText Transfer Protocol)

- **What is HTTP?**

  - An application-layer protocol for transferring hypermedia documents, such as HTML.
  - Stateless and based on a request-response model between client and server.

- **HTTP Versions**:

  - **HTTP/1.0**: Each request/response requires a separate connection.
  - **HTTP/1.1**: Introduced persistent connections, chunked transfers, and pipelining.
  - **HTTP/2**: Adds multiplexing (multiple requests on one connection), header compression, and prioritization.
  - **HTTP/3**: Uses QUIC instead of TCP for faster and more reliable communication.

- **Request Methods**:

  - **GET**: Retrieve data from a server (safe and idempotent).
  - **POST**: Submit data to be processed (e.g., form submission).
  - **PUT**: Replace a resource.
  - **PATCH**: Partially update a resource.
  - **DELETE**: Remove a resource.
  - **HEAD**: Same as GET but returns only headers.
  - **OPTIONS**: Describes communication options for the resource.

- **Status Codes**:

  - **1xx**: Informational (e.g., 100 Continue)
  - **2xx**: Success (e.g., 200 OK, 201 Created)
  - **3xx**: Redirection (e.g., 301 Moved Permanently, 302 Found)
  - **4xx**: Client errors (e.g., 400 Bad Request, 404 Not Found, 401 Unauthorized)
  - **5xx**: Server errors (e.g., 500 Internal Server Error, 503 Service Unavailable)

- **Headers**:

  - Metadata sent with requests and responses.
  - Examples:

    - `Content-Type`: media type of the body
    - `Authorization`: credentials
    - `Cache-Control`: caching behavior
    - `User-Agent`: info about the client

- **Cookies**:

  - Small pieces of data stored on the client to maintain session state.
  - Set by the `Set-Cookie` header.

- **Sessions**:

  - Mechanism to persist data across multiple requests.
  - Commonly managed using cookies or tokens.

- **Statelessness**:

  - Each request is independent.
  - No memory of previous requests—handled using cookies or sessions.

- **Idempotency**:

  - An operation can be applied multiple times without changing the result.
  - **GET, PUT, DELETE** are idempotent; **POST** is not.

- **Caching**:

  - Improves performance by storing copies of responses.
  - Controlled with headers like `Cache-Control`, `ETag`, and `Last-Modified`.

- Questions to Consider:

  - **Q1**: What is the difference between HTTP and HTTPS?

    - **A**: HTTPS is HTTP over SSL/TLS, providing encryption and security.

  - **Q2**: What is a RESTful API?

    - **A**: An architectural style using HTTP methods and status codes to create stateless, client-server interactions.

  - **Q3**: How does caching work in HTTP?

    - **A**: Caching stores responses to reduce server load and improve speed, controlled by headers like `Cache-Control`.

  - **Q4**: What is the purpose of the `OPTIONS` method?

    - **A**: It retrieves allowed methods for a resource without performing any action.

  - **Q5**: Explain the concept of idempotency in HTTP methods.

    - **A**: Idempotent methods can be called multiple times without changing the resource state (e.g., GET, PUT).

  - **Q6**: What is the role of cookies in HTTP?

    - **A**: Cookies store session data on the client to maintain state across requests.

  - **Q7**: How does HTTP/2 improve performance over HTTP/1.1?

    - **A**: HTTP/2 introduces multiplexing, header compression, and prioritization, allowing multiple requests over a single connection and reducing latency.

  - **Q8**: What is the difference between `GET` and `POST` methods and `PUT` and `PATCH` methods?

    - `GET` vs `POST`

      - `GET`:
        - **retrieve** data from the server
        - it can be used to send small amounts of data to the server using the query string (in the URL)
        - it doesn't have a request `body`, it only has `headers`
        - Sending data through the query string is **not secure** and should be avoided
        - requests can be cached and bookmarked -> `Proxy`
          - this is because `GET` requests are **idempotent** (multiple identical requests have the same effect as one single request)
        - limited amount of data can be sent
      - `POST`:
        - **send** data to the server
        - it can be used to send large amounts of data to the server using the request `body`
        - more secure than `GET` because the data is not visible in the URL
        - requests are never cached and cannot be bookmarked -> `No Proxy`
        - unlimited amount of data can be sent and bigger `payload` size
        - Must have a request `body` (even if it's empty `{}`)

    - `PUT` vs `PATCH`
      - `PUT`: **replace** a source in collection
      - `PATCH`: **modify** a source in collection

---

## Frontend Basics & Concepts

- **Web Rendering**:

  - **SSR (Server-Side Rendering)**: Content rendered on the server. Improves SEO and initial load speed. Common in Next.js.
  - **CSR (Client-Side Rendering)**: Content rendered in the browser. Initial load is slower but smoother transitions (e.g., React, Vue).
  - **SSG (Static Site Generation)**: Content pre-rendered at build time. Fastest load; used with blogs/docs.
  - **ISR (Incremental Static Regeneration)**: Mix between SSG and SSR. Some pages rebuilt in the background.

- **Accessibility (a11y)**:

  - Make web usable by people with disabilities.
  - Use semantic HTML (e.g., `<button>`, `<nav>`).
  - Support keyboard navigation (focus, tab index).
  - Add `aria-*` attributes when necessary.
  - Always provide alt text for images.

- **Web Performance**:

  - **LCP (Largest Contentful Paint)**: Measures loading performance.
  - **FID (First Input Delay)**: Measures interactivity.
  - **CLS (Cumulative Layout Shift)**: Measures visual stability.
  - Tools: Lighthouse, WebPageTest, Chrome DevTools.
  - Optimizations:

    - Image compression
    - Lazy loading
    - Code splitting
    - Minification
    - CDN usage
    - Efficient asset loading

- **Frontend Architecture**:

  - Use modular and reusable components.
  - Keep concerns separated (e.g., UI logic vs business logic).
  - Manage state with centralized solutions (Redux, Vuex, Zustand).
  - Apply atomic design principles.

- **General Best Practices**:

  - Maintain folder structure (e.g., components, utils, services).
  - Write testable code.
  - Use TypeScript for type safety.
  - Prefer composition over inheritance in UI libraries.
  - Keep styles scoped (CSS Modules, Styled Components).

- **Frontend Security**:

  - Prevent XSS by sanitizing user input.
  - Use HTTPS.
  - Implement Content Security Policy (CSP).
  - Validate inputs on both client and server sides.
  - Avoid storing sensitive data in localStorage.

---

- **Frontend Interview Questions**:

  - **Q1**: What are the differences between SSR, CSR, and SSG?

    - **A**: SSR renders HTML on the server; CSR renders in the browser; SSG pre-renders pages at build time.

  - **Q2**: How do you improve page performance?

    - **A**: Lazy load images/components, code splitting, minify files, compress assets, use CDN, reduce render-blocking resources.

  - **Q3**: What tools do you use to measure web performance?

    - **A**: Lighthouse, Chrome DevTools, WebPageTest, PageSpeed Insights.

  - **Q4**: What is CLS and how do you fix it?

    - **A**: CLS (Cumulative Layout Shift) measures unexpected shifts in layout. Fix by setting image/video dimensions and avoiding dynamic content injection.

  - **Q5**: How do you handle state management in large apps?

    - **A**: Use centralized stores (Redux, Zustand, Vuex), keep logic modular, and isolate side-effects.

  - **Q6**: How do you handle accessibility in components?

    - **A**: Use semantic HTML, `aria-*` attributes, keyboard navigation, and visible focus indicators.

  - **Q7**: How do you secure frontend apps?

    - **A**: Escape inputs, use HTTPS, CSP, secure cookies, and avoid storing sensitive info in localStorage.

  - **Q8**: How web pages are built in the browser in detail?
    - **A**: The browser parses HTML, builds the DOM tree, applies CSS to create the CSSOM, combines them into a render tree, lays out elements, and finally paints pixels on the screen. This process involves multiple steps like parsing, style calculation, layout, and painting. Tools like DevTools can help visualize this process.

---
