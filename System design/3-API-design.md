# INDEX

- [INDEX](#index)
  - [APIs](#apis)
    - [REST API](#rest-api)
    - [WebSockets](#websockets)
    - [GraphQL](#graphql)
    - [gRPC](#grpc)
  - [API design](#api-design)
  - [API Caching](#api-caching)
    - [Caching on the client side](#caching-on-the-client-side)
    - [Caching on the server side](#caching-on-the-server-side)
    - [Caching policies](#caching-policies)

---

## APIs

**Application Programming Interface (API)**: is a set of rules that governs the communication between two systems. It's used to transfer data between applications.

- the difference between it and a protocol is that a protocol is a set of rules that governs the communication between two systems, while an API is a set of rules that governs how a developer can interact with an application.

  - **APIs** are used to transfer data between applications, while **protocols** are used to transfer data between systems.

---

### REST API

**Representational State Transfer (REST)**: is a set of rules that governs the communication between clients and servers on the internet. It's used to transfer data between clients and servers.

- It's a misconception that `REST` is the same as `HTTP`.
  - `REST` is a set of rules that governs the communication between clients and servers on the internet.
  - `HTTP` is a protocol that is used to transfer data between clients and servers.
- It's stateless (it doesn't remember the previous request)
  - it means that there's no `state` stored in the server
  - it can store data outside the server (ex: `database`)
  - it can have `state` in the client side (ex: `cookies`)
- Example of stateless:

  - in pagination, the server doesn't remember the previous page you were in. So, you need to send the page number in the request.

    ```sh
    # ex:
    GET /posts?page=2

    # Wrong ❌
    GET /posts
    ```

- The most common data format used in `REST` is `JSON` (JavaScript Object Notation).

---

### WebSockets

**WebSockets** is a protocol that allows for **full-duplex** communication between a client and a server over a single `TCP` connection.

- **Full-duplex**: means that both the client and the server can send and receive data at the same time.
- It's used in cases where the client needs to receive **real-time updates** from the server.
  - ex: live chat, live score, ...
- to get real-time updates without using `WebSockets`, the client needs to send a request to the server every few seconds to check for updates.
  - this is called **polling** and it's not efficient as it creates a lot of unnecessary requests and establishes a new connection every time.
    ![WebSockets](./img/websockets-1.png)
- `WebSockets` solves this problem by establishing only one connection between the client and the server that remains open as long as the client is connected to the server.

  - this allows the server to send data to the client whenever it needs to without the client having to send a request first (whenever there's new data available)

- **Notes:**
  - `WebSockets` uses **"Bi-directional"** communication. This is something that `HTTP` doesn't do. but `HTTP/2` does by introducing **Server Push / Streaming**. which makes `websockets` not that important anymore.
  - it's called `ws` in the `network` tab
    - to get data -> `message` event

---

### GraphQL

**GraphQL** is a query language for `APIs` and a runtime for fulfilling those queries with your existing data.

- GraphQL provides a complete and understandable description of the data in your API, **gives clients the power to ask for exactly what they need and nothing more**, makes it easier to evolve APIs over time, and enables powerful developer tools.
  - So, It's used to prevent **"Overfetching"** and **"Underfetching"**.
- It's built on top of `HTTP` protocol, specifically `POST` method as it's used to send data in the `body` to the server (`GET` doesn't have a `body`)
  - one drawback to this is that `POST` requests can't be cached by the browser.
- it was open-sourced by facebook in `2015`
- More, [here](../Databases/GraphQL.md)

---

### gRPC

**gRPC** is a modern, open source, high-performance remote procedure call (RPC) framework that can run anywhere.

> gRPC -> **g**oogle **R**emote **P**rocedure **C**all

- It enables client and server applications to communicate transparently, and makes it easier to build connected systems.
- It's built on top of `HTTP/2` protocol, as it needs some features from it.
  - features like: `streaming`, `bi-directional`, `header compression`, `multiplexing`, ...
- it can't be used natively in the browser, but you can use it using `gRPC-web` (it's a proxy library that allows you to use `gRPC` in the browser)
  - This is because it requires some controls over the `HTTP/2` protocol that the browser doesn't allow.
- So, It's used for **Server-to-Server** communication.
- It's faster and more efficient than `REST` api, because it sends data in `protocol buffers` format instead of `JSON` format.
  - `protocol buffers` is a binary format that is smaller in size and faster to parse than `JSON`.
  - it uses `schema` to define the data structure which makes it easier to validate the data and smaller in size.
- It doesn't have status codes like `REST` api, instead it has a `status` field and `message` in the response.
- It's not used as much, because it's new and it's not supported in the browser natively.
  - it was open-source by google in `2016`

---

## API design

It's the process of designing the interface of the `API` that will be used by the clients (The **contract** between the client and the server).

- Public-API design is very important in order to be backward-compatible (to not break the old clients when adding new features). To do this, you need to use `versioning` in the `url`
  - ex: `/api/v1/posts`
- In order to prevent requesting large amount of data from the server, you need to use `pagination` and `filtering` in the `url` for the endpoints that return a list of data.
  - ex: `/api/v1/posts?page=2&limit=10&category=tech`
  - as we're sending these parameters in the URL, it will be a `GET` request.

---

## API Caching

**Caching** is the process of storing data in a cache. A **cache** is a temporary storage area.

- It's based on the concept of `cache-hit` and `cache-miss`.
  - `cache-hit`: means that the data is already stored in the cache, so we don't need to request it from the server.
  - `cache-miss`: means that the data is not stored in the cache, so we need to request it from the server.

---

### Caching on the client side

- It's used to improve the performance of the application by reducing the number of requests to the server.
- For example, javascript bundles are cached in the browser to avoid downloading them every time the user visits the website.

  ```sh
  # ex:
  GET /main.cf3a2b.js
  ```

  - This will be cached in the browser for a certain period of time (ex: 1 day) and the browser will send a request to the server only if the cache is expired or the bundle is updated.
    ![API Caching](./img/api-caching-1.png)
  - Caching is controlled by the `Cache-Control` header in the response.
    - `Cache-Control: max-age=86400` -> 1 day
    - `Cache-Control: no-cache` -> don't cache
    - `Cache-Control: no-store` -> don't cache and don't store in the disk

---

### Caching on the server side

- It's used to improve the performance of the application by reducing the time it takes to process the request.

- For example, instead of reading in the server from the `disk`, we can use `in-memory` caching to read from the `RAM` which is faster (ex: `Redis`)

---

### Caching policies

- **Cache-Aside** (Lazy loading): is a caching pattern where the application is responsible for reading and writing from the cache.
  ![Cache-Aside](./img/cache-policy-1.png)

  - When the application needs to read data, it first checks the cache, if the data is not found in the cache, it reads it from the database and then stores it in the cache.
  - When the application needs to write data, it first writes it to the database, then it invalidates the cache.
  - This pattern is used when the data is not expected to change frequently.

- **Write-Through**: is a caching pattern where the cache is updated every time the database is updated.
  ![Write-Through](./img/cache-policy-2.png)

  - When the application needs to write data, it first writes it to the cache, then it writes it to the database.
  - This pattern is used when the data is expected to change frequently.

- **Write-Back**: is a caching pattern where the cache is updated immediately, but the data is written to the database later.
  ![Write-Back](./img/cache-policy-3.png)

- **Eviction policies**: are used to determine which data should be removed from the cache when the cache is full.
  - **First In First Out (FIFO)**: removes the oldest data from the cache.
  - **Least Recently Used (LRU)**: removes the least recently used data from the cache.
  - **Least Frequently Used (LFU)**: removes the least frequently used data from the cache.
  - **Time To Live (TTL)**: removes the data from the cache after a certain period of time.
