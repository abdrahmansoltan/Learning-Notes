# INDEX

- [INDEX](#index)
  - [System Design](#system-design)
    - [Goal of system design](#goal-of-system-design)
    - [System design core principles](#system-design-core-principles)
    - [Important concepts](#important-concepts)
  - [Browser / Client](#browser--client)
  - [DNS](#dns)
  - [CDN](#cdn)
  - [Web Server](#web-server)
  - [Proxies](#proxies)
    - [Forward Proxy](#forward-proxy)
    - [Reverse Proxy](#reverse-proxy)
  - [Load Balancer](#load-balancer)
    - [Load balancer distribution strategies](#load-balancer-distribution-strategies)
    - [Consistent Hashing](#consistent-hashing)
    - [Session Persistence](#session-persistence)
  - [Clustering](#clustering)
  - [Data Source](#data-source)
  - [Jobs](#jobs)
    - [Job server](#job-server)
    - [Job Queue](#job-queue)
  - [Services](#services)
  - [Monitoring](#monitoring)
  - [Networking](#networking)
    - [OSI Model](#osi-model)
    - [TCP/IP](#tcpip)
    - [UDP](#udp)
    - [Public vs Private IP](#public-vs-private-ip)
    - [Ports](#ports)
  - [System Design Interview](#system-design-interview)
  - [System Design Questions](#system-design-questions)

---

## System Design

**System design** is the process of designing the architecture, components, and interfaces for a system so that it meets the requirements.

![System Design](./img/system-design-1.png)

- It's a process of defining the architecture, modules, interfaces, and data for a system to satisfy specified requirements.
- It's mainly about 3 things:

  - **Move Data**: how to move data from one place to another
    - in the same server -> `RAM` to `CPU`
    - in different servers -> `Client` to `Server`
  - **Store Data**: how to store data
    - in the same server -> `RAM` to `Disk`
    - in different servers -> `Database` to `Caching Service`
    - in the cloud -> `Database` to `Cloud Storage`
  - **Process Data**: how to process & transform data

- Bad design choices are hard to change later. so, we need to make sure that we make the right design choices from the beginning.
  - Ex: choosing the wrong database, means that we'll have to change the entire system later by:
    - changing the database
    - migrating the data to the new database
    - changing the code to work with the new database
    - etc.

---

### Goal of system design

As you go up in seniority, you'll be expected to be able to design systems that are **scalable**, **reliable**, **highly available**, **secure**, **maintainable**, etc.

- Usually, we won't have the prefect solution, but we need to figure out which option is the best. by trading off between the different options.
  - > So system design is not about memorizing some facts. instead, it's about the **Thought process** by analyzing what improvements can be made and sacrifices can be made to make the system better.
- When you're junior, mid-level, or early senior, you'll usually interact with **Low-level** code. like: **"Business logic"**, **"Application logic"**, **"Database"**, **"CI/CD"**, **"Dockers"**, **"Kubernetes"**, etc.
- But when you're senior, you'll usually interact with **High-level** code. like: **"System design"**, **"Architecture"**, **"Data modeling"**, **"Microservices"**, **"Scalability"**, **"Reliability"**, **"High availability"**, **"Security"**, **"Maintainability"**, etc.

---

### System design core principles

- **Availability**: the system should be available all the time.
  ![Availability](./img/availability-1.png)
  ![Availability](./img/availability-2.png)

  - Usually we use **"The nines of availability"** to measure the availability of a system.
    ![Availability](./img/availability-3.png)
  - When we reduce the `down time`, we increase the `availability`.
    - downtime `1% -> 0.1%` -> availability `99% -> 99.9%`
    - downtime `0.1% -> 0.01%` -> availability `99.9% -> 99.99%`
    - downtime `0.01% -> 0.001%` -> availability `99.99% -> 99.999%`

- **Reliability**: the system should be reliable. (no data loss or crashes)
  ![Reliability](./img/reliability-1.png)
  ![Reliability](./img/reliability-2.png)

  - Usually we want to figure out if the system is reliable to perform its functionality without errors.
    - we do this by reducing the amount of errors. Or increasing the mean time between failures (`MTBF`).

- **Service level objective (SLO)**: is a target value or range of values for a service level that is measured by a service level indicator. (it's a way to measure the availability and reliability of a system).
- **Service level indicator (SLI)**: is a **measure** of **reliability** and **availability** of a system. (it's a way to measure the availability and reliability of a system).
  - Ex: `CPU`, `RAM`, `Disk`, `Network`, etc.
- **Service level agreement (SLA)**: is a **commitment** between a **service provider** and a **client**. (it's a way to measure the availability and reliability of a system).
  - It's usually a **contract** between the **service provider** and the **client**. (it's a way to measure the availability and reliability of a system).

---

### Important concepts

- **Latency**: the time it takes for a request to go from the client to the server and back.
  - it can be caused by: `network`, `server`, `database`, `caching service`, etc.
- **Single point of failure**: a component that if it fails, the entire system will fail.
  ![Single point of failure](./img/single-point-of-failure.png)
- **Fault tolerance**: the ability of a system to continue operating even if there's a failure in one of its components.
  - It's related to **Reliability**
- **Redundancy**: having multiple components that do the same thing. (having a backup component).
  - It's related to **Reliability**
- **Throughput**: the amount of operations or data that can be processed (handle) in a period of time.
  - ex:
    - how many users can the system handle in second (`requests per second`).
    - how many queries can the database handle in second (`queries per second`).
    - data transfer rate (`bits per second`).
  - It's related to **Scalability**

---

## Browser / Client

![Browser / Client](./img/client-1.png)

- **Client** is the **front-end** of the system, which is responsible for:
  - rendering the UI.
  - interact with the user.
  - interact with the server.
- When requesting a page, the **client** sends a **request** to the **server**. The **server** then sends back a **response** to the **client**.
  ![Browser / Client](./img/client-2.png)
- But, in order to make it scale, we need to add other components to the system. like: **Load Balancer**, **Cache**, **CDN**, etc.
  ![Browser / Client](./img/client-3.png)

---

## DNS

**DNS** is a **Domain Name System**. It's a **phone book** for the internet. It's a **distributed database** that translates **domain names** to **IP addresses**.

- usually a website has multiple servers, and each server has a different IP address. So, when a user types a domain name in the browser, the browser sends a request to the DNS server to get the IP address of the server that has the website.
- IP address from the DNS has multiple formats:
  - `IPv4`: 4 numbers separated by dots. each number has max of `255` numbers.
    - `69.63.176.13`
  - `IPv6`: 8 groups of 4 hexadecimal digits separated by colons.
    - `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
    - It was created to solve the problem of IPv4 addresses running out. as `IPv4` has only `4` billion addresses. and `IPv6` has `340` undecillion addresses.
- DNS handles which `IP` address type to use. by default, it uses `IPv4`. but, if the server has `IPv6` address, it will use it instead.

---

## CDN

**CDN** is a **Content Delivery Network**. It's a network of servers that distributes the content to the client. It's a way that we can cache data closer to the client so that we don't have to send requests across the world.

- It's goal is to bring the content closer to the client.
- It holds the files that you want to serve to the client, to prevent the client from requesting the files from the server directly in case the files are already cached in the CDN.
- It uses **"Edge servers"** to store the files. and it uses **"Load Balancer"** to distribute the traffic between the servers.

  - Without `edge servers`, the client will have to request the files from the server directly. and it will result in a high latency ❌.
    ![CDN](./img/cdn-1.png)
  - With `edge servers`, the client will request the files from the `edge server`. and it will result in a low latency ✅.
    ![CDN](./img/cdn-2.png)

- Using a CDN may result additional complexity and cost.
  - as we need to make sure that the files are up to date. and we need to make sure that the files are cached in the CDN. and we need to make sure that the files are cached in the correct `edge server`. and we need to make sure that the files are cached in the correct region. etc.
  - also, we need to pay for the CDN service.
- It's recommended to only use a CDN when the website has a high traffic and global distribution.

---

## Web Server

**Web Server** is a **server** that **serves** the **client**. It's a **software** that **handles** the **HTTP requests** sent by the **client**.

- It selects the correct data to send to the client using **"Business logic"** and **"Database"**.
  ![Web Server](./img/web-server-1.png)

> - "Business logic" is the logic when a web server has to compute a behavior that the **client** requested. like: sending an email, or sending a notification, etc.
> - "Application logic" is the logic when a web server has to compute a behavior that the **server** requested. like: sending a request to another server, or sending a request to the database, etc. It's handled in the [Job server / Job Queue](#jobs).

- a web server can be a **dedicated server** or a **shared server**.
  - **Dedicated Server**: a server that is dedicated to a single website.
  - **Shared Server**: a server that is shared between multiple websites.
- Also, it can serve multiple clients at the same time. This high traffic requires processing power and resources.
  ![Web Server](./img/web-server-2.png)
- in order to increase the performance, we can use **horizontal scaling** or **vertical scaling**.
  - **Vertical Scaling**: adding more resources to the server.
    ![Web Server](./img/web-server-3.png)
  - **Horizontal Scaling**: adding more servers, by duplicating the server.
    ![Web Server](./img/web-server-4.png)
    - Note that, we just duplicate the server (including the Application logic) and **without the database**.
      ![Web Server](./img/web-server-5.png)
- When horizontal scaling, we need to use a **Load Balancer** to distribute the traffic between the servers.

---

## Proxies

**Proxy** is a server that acts as a middleman between the client and the server.

- It **abstracts** one side from the other. so, the client won't know about the server, and the server won't know about the client.

### Forward Proxy

- It sets between the `client` and the `internet`, and it's not part of the system.
  ![Proxy](./img/proxy-1.png)
  - It communicates between:
    - `client` and `proxy`
    - `proxy` and `internet`
  - This way the client won't directly access the internet. instead, it will access it through the proxy.
- It's on the `client` side. and it's usually used for security reasons.
- The proxy can:
  - **hide** the `client` IP address ( client's details ) from the `internet`.
  - modify the request before sending it to the `internet`.
  - block certain websites.

---

### Reverse Proxy

- It sets between the `server` and the `internet`, and it's part of the system.
  ![Proxy](./img/proxy-2.png)

- It acts as an **entry point** to the system.
  - It receives the request from the `internet` before it reaches the `server`. and then it forwards the request to the `server`.
- It can:
  - **hide** the `server` details from the `internet`. as the `internet` will only see the `proxy` IP address.
- It's very similar to the **Load Balancer**. but, it's not the same.
  - **Load Balancer** is used to distribute the traffic between the servers.
    - > in fact, many **Load Balancers** are also **Reverse Proxies**. like: `Nginx`, `HAProxy`, etc.
  - **Reverse Proxy** is used to hide the `server` details from the `internet`.
    - when using a **Reverse Proxy** also as a **Load Balancer**, we get best of both worlds. as we get the **Load Balancer** functionality and the **Reverse Proxy** functionality like:
      - caching.
      - compression.

---

## Load Balancer

**Load Balancer** is a **server** that **distributes** the **traffic** between the **servers**.

- It's a type of **Reverse Proxy**. as it's used to hide the `server` details from the `internet` and distribute the traffic between the servers.
  ![Load Balancer](./img/load-balancer-0.png)
- Without it, we don't know which server to send the request to. and it may result in overloading a server.
  ![Load Balancer](./img/load-balancer-1.png)
- So, we need something to **evenly-distribute** the traffic between the servers. and that's the **Load Balancer**.

  - It acts as the **"Entry point"** for the system.
  - It knows if a server is down or not. and it can **redirect** the traffic to another server.

- Also, it's used to **horizontal scale** the system. as we can add more servers and the **Load Balancer** will distribute the traffic between them.
- Usually to prevent breaking the entire system if the **Load Balancer** is down, we use a redundant backup load balancer
  ![Load Balancer](./img/load-balancer-8.png)

- There's multiple types of **Load Balancers**:

  - **Layer 4 Load Balancer**: it's a **TCP Load Balancer**. it's used to distribute the traffic based on the `IP address` and the `port number`.
    - It's faster than the **Layer 7 Load Balancer**. as it doesn't need to look at the `URL` and the `HTTP headers` and only looks at the `IP address` and the `port number`.
  - **Layer 7 Load Balancer**: it's an **Application layer (HTTP Load Balancer)**. it's used to distribute the traffic based on the `URL` and the `HTTP headers`.
    - It's more advanced than the **Layer 4 Load Balancer**. as it can distribute the traffic based on the `URL` and the `HTTP headers`.
      - it establishes connections using the `URL` and the `HTTP headers`. So it's more expensive.
    - It's usually used for **HTTP** and **HTTPS** traffic.
    - It's slower than the **Layer 4 Load Balancer**. as it needs to look at the `URL` and the `HTTP headers` and not only the `IP address` and the `port number`.
    - It just **forwards** the request to the server. So it's cheap.

- Most common **Load Balancers** are:
  - `Nginx` -> Open source (free)
  - `HAProxy`
  - `F5`
  - `AWS ELB`
  - `Azure Load Balancer`
  - `Google Cloud Load Balancer`

---

### Load balancer distribution strategies

- **Round Robin**:
  - it sends the request evenly to the next server in the list.
    ![Load Balancer](./img/load-balancer-2.webp)
  - The problem here is that servers are independent of each other and they have no knowledge of the other servers.
    ![Load Balancer](./img/load-balancer-4.png)
    - This is an issue because often the servers have different resources and capabilities. So, it's not a good idea to send the same amount of traffic to each server.
- **Weighted Round Robin**:
  - Here, we assign a `weight` to each server. and the `weight` is based on the server's resources and capabilities ( The higher the number, the higher the resources ).
    ![Load Balancer](./img/load-balancer-5.png)
- **Least Connections**:
  - It sends the request to the server that has the least connections.
  - It depends on `sessions` or how many requests are being processed by the server. and it's usually used for **long-lived connections**. like: `WebSockets`, `HTTP Streaming`, etc.
    ![Load Balancer](./img/load-balancer-6.png)
    ![Load Balancer](./img/load-balancer-7.png)

---

### Consistent Hashing

**Consistent Hashing** is a way to distribute the traffic based on the `URL` or the `IP address`.

![Load Balancer](./img/conssistent-hashing-1.png)

- This way, we can send the traffic to the same server. and it's usually used for servers with `caching` or `in-memory caching`.
- Hashing Algorithm
  ![Load Balancer](./img/conssistent-hashing-2.png)

---

### Session Persistence

**Session Persistence** is a way to keep the `session` on the same server.

- Usually when using a distribution strategy like **Round Robin**:

  - if we use `REST` API, then it's not a problem. as the `REST` API is **stateless**. so, the server doesn't need to remember the previous request.
  - but, if we have a **stateful** `session` or the server has in-memory caching (ex: `Redis`), then it's a problem. as the server needs to remember the previous request.
    - That's where **Session Persistence** or **Consistent Hashing** comes in.

- if a client sends a request to a server, and the server sends back a response with a `session` cookie. then, the client sends another request to another server, the server won't have the `session` cookie. and it will create a new `session` for the client.
- To solve this problem, we can use **"Sticky Session"**. which is a way to keep the `session` on the same server. **(maintain persistent connection between the client and the server)**.
  - This is done by the **Load Balancer**. as it establishes a connection with the client, and then it sends the request to the server. and it keeps the connection open until the client finishes the session. (**locks** the client to the server).
    ![Load Balancer](./img/load-balancer-3.png)
- if the server (that has the `session` cookie) is down, the **Load Balancer** will redirect the client to another server. and the new server will create a new `session` for the client. or it can re-catch the `session` from the (client / load balancer).
  ![Load Balancer](./img/load-balancer-4.png)

---

## Clustering

**Clustering** is a technique to increase the amount of servers. It's where you have multiple servers that are aware of each other and work together as a complete unit for some objective.

- In `load balancing`, The servers are independent of each other and they have no knowledge of the other servers.
  ![Clustering](./img/clustering-1.png)
- `clustering` doesn't replace `load balancing`. instead, Here the servers are aware of each other and they work together as a complete unit for some objective.
  ![Clustering](./img/clustering-2.png)
  - Each of the servers in the cluster is called a `node`.
    - The `nodes` don't share the same resources. instead, each `node` has its own resources and they're identical.
  - in the system, the `cluster` is treated as a single server.
  - In `cluster`, there's a leader node that is responsible for:
    ![Clustering](./img/clustering-3.png)
    - receiving the requests.
    - distributing the requests between the nodes.
    - etc.
- `clustering` is used to increase the **reliability** and **availability** of the system. as if one of the nodes is down, the other nodes will handle the requests.
- it's used with `load balancing` to increase the performance and the reliability of the system.
  ![Clustering](./img/clustering-4.png)

---

## Data Source

[Here](./4-Data.md)

---

## Jobs

**Job** is a **background job**. It's a **task** that is **not** related to the **request**. and it's **not** required to be done **immediately**.

- Ex:

  - Sending an email.
  - Sending a notification.
  - reaching out to another server to get some data. (ex: getting the latest posts from another server)
  - etc.

- This is how jobs are requested and handled:
  1. The `web server` sends the request to the `job queue`.
  2. The `job queue` stores the job and based on the priority, it sends the job to the `job server`.
  3. The `job server` executes the job.
  4. The `job server` sends the result back to the `web server`.

---

### Job server

**Job server** is a server that **handles** the **background jobs**.

- **Background jobs** are jobs that are **not** related to the **request**. and they are **not** required to be done **immediately**.
  - They are any operations that are not "User-driven", instead they're required by the (server / application) to do some work **(Application logic)**.
- Jobs are handled in a "Job server" by writing "Application logic" code. and then the "Job server" will execute the code.

---

### Job Queue

**Job Queue** is a way to **queue** the **jobs**. (way to know how job servers should execute the jobs).

> It's also known as **"Message Queue"**

- When we have a large number of application events in a fast-paced that the `server` can't handle. we can use a `job queue` to queue the jobs. and then the `job server` will execute the jobs later.
- This would enable us to scale the system. as we can make us handle more requests by queueing the jobs so that the server can handle them later.
- Most popular `job queues` are:
  - `RabbitMQ` ✅
  - `Kafka` ✅
  - `Redis` ✅
  - `Amazon SQS`
  - `Google Cloud Pub/Sub`
  - `Azure Service Bus`

---

## Services

**Service** is another system that is not related to the current system. and it's usually a 3rd party system. **(Self contained deliverable system)**

- It's responsible for one thing.
- **Microservices** are a type of services. but, they are **smaller** and **more focused**.
- By dividing the system into services, we can make the system more **scalable and more maintainable**.
- Ex:

  - Authentication service. (like: `OAuth`, `JWT`, etc)
  - Massaging service. (like: `Twilio`, `Nexmo`, etc)
  - NewsFeed service. (like: `Mailchimp`, `Sendgrid`, etc)
  - Communities service. (like: `Facebook`, `Twitter`, etc)

- Example of entering a `NewsFeed` service:
  ![Services](./img/services-1.png)
- Example of entering a `Authentication` service:
  ![Services](./img/services-2.png)
- Example of a system that uses the 2 services:
  ![Services](./img/services-3.png)

---

## Monitoring

**Monitoring** is a way to monitor the system. It's a way to know if the system is working properly or not.

![Monitoring](./img/monitoring-1.png)

- It's usually done by seeing the **logs**. and it's usually done by a **monitoring service**.
- We can use the `logs` to create **Metrics** and **Alerts**.
  - **Metrics** are a way to measure the system. (like: `CPU`, `RAM`, `Disk`, `Network`, etc).
  - **Alerts** are a way to notify the system admin if there's a problem in the system. (like: `CPU` is high, `RAM` is high, `Disk` is full, low metrics (below the threshold), etc).

---

## Networking

- `TCP/IP` model is specific for the internet
- `OSI` model is for any communication between 2 computers( systems ).

### OSI Model

As long as 2 computers are communicating, We can use the `OSI` model to abstract the communication process.

[More Here](../Internet/Internet.md#osi-model)

---

### TCP/IP

**Transmission Control Protocol / Internet Protocol** is a **protocol** that is used to **communicate** between **computers**.

- It consists of 2 protocols:

  - **TCP**: it's a **connection-oriented** protocol. It's used to **send** and **receive** data between 2 computers. It's **reliable** and **ordered** but it's **slow**.

    - It has error-checking mechanism. (it checks if the data is received completely or not).

  - **IP**: it's a **connectionless** protocol. It's used to **send** and **receive** data between 2 computers. It's **unreliable** and **unordered**.
    - `IPv4` -> it's `32` bits. (it has `4` bytes). each byte has max of `255` numbers
      - `256.256.256.256` -> `4` billion addresses.
    - `IPv6` -> it's `128` bits. (it has `16` bytes). each byte has max of `255` numbers
      - it's used to solve the problem of `IPv4` addresses running out. as `IPv4` has only `4` billion addresses. and `IPv6` has `340` undecillion addresses.

- **How it works:**

  - It depends on **"Handshake"** to establish a connection between the `client` and the `server`. it's called: **"3-way handshake"**.
    ![TCP/IP](./img/tcp-ip-2.png)

    - The `client` sends a `SYN` (Synchronize) to the `server`. Then the `server` sends a `SYN-ACK` (Synchronize - Acknowledgement) to the `client` to let it know that it received the `SYN`. Then the `client` sends an `ACK` (Acknowledgement) to the `server` to let it know that it received the `SYN-ACK`.
      ![TCP/IP](./img/tcp-ip-3.png)
    - The process continues until the `client` and the `server` each time increase the `ISN` by `1` until they reach the `ISN` that they received from the other side.

  - Steps:
    ![TCP/IP](./img/tcp-ip-1.png)
    1. The `client` generates a `ISN` (Initial Sequence Number) and sends it to the `server`.
    2. The `server` generates a `ISN` and sends it to the `client`.
    3. Now, both the `client` and the `server` have a `ISN`. and they can start sending data to each other.
    4. The `client` sends a `SYN` (Synchronize ISN) to the `server`. Then the `server` sends a `SYN-ACK` (Synchronize ISN - Acknowledgement) to the `client` to let it know that it received the `SYN`.
    5. The process continues until the `client` and the `server` each time increase the `ISN` by `1` until they reach the `ISN` that they received from the other side.

---

### UDP

**User Datagram Protocol** is a **connection-less** protocol. (it's like yelling "HI!" and assume that the other side heard it and keep sending data like that anyway)

![UDP](./img/udp-1.png)

- It's much faster than `TCP`. as it doesn't have the error-checking mechanism. (it doesn't check if the data is received completely or not).
- It's **connection-less** means that it doesn't establish a connection between the `client` and the `server`. instead, it just sends the data to the `server` and assumes that the `server` received it.
  - This make it doesn't consume much resources. as it doesn't have to establish a connection.
- It's used in cases where we don't care about the data loss. like: `VoIP`, `Video Streaming`, `Online Gaming`, etc.
  - This is because if there's a data loss, it will get corrected in the next data packet anyway. (as it's a stream of data).
- So, we use `UDP` when we care about the speed and consistency. and we use `TCP` when we care about the reliability ( data loss ) and order.

---

### Public vs Private IP

- **Public IP** is an IP address that is **public** and **unique**. (it's the IP address that is used to communicate with the internet).

  - Ex: `Router`, `Load Balancer`, `Server`, etc.

- **Private IP** is an IP address that is **private** and **not unique**. (it's the IP address that is used to communicate with the local network).

---

### Ports

**Port** is a **communication endpoint**. It's a way to identify a specific process to which an **Internet message** or **request** is to be forwarded when it arrives at a server.

- The default port for `HTTP` is `80`.
- The default port for `HTTPS` is `443`.
  - That's why when we type `https://www.google.com` in the browser, it will send a request to `https://www.google.com:443`.
- We can't have multiple applications listening on the same port. as the port is used to identify the application.

---

## System Design Interview

It's meant to test your **ability to design scalable systems**. It's a **high-level** test to see if you can **design a system**.

- **High Level Notes**
  - There's no one right answer
  - There's no one right way to solve a problem or design a system
  - Focus on the data model
  - Don't mention the technology you're going to use
  - Draw a diagram
  - Talk
- **Steps**
  - Identify 2 core features
  - Possible implementation
  - Identify and address difficulties
  - Solution for **scaling**
    - Scaling for Users:
      - Caching -> Memory Cache -> Redis Cache -> CDN
      - Deployment Options -> Load Balancer -> Horizontal Scaling

---

## System Design Questions
