# INDEX

- [INDEX](#index)
  - [Networking](#networking)
    - [Client-Server Architecture](#client-server-architecture)
  - [Network Models](#network-models)
    - [OSI Model](#osi-model)
      - [OSI layers in details](#osi-layers-in-details)
      - [OSI Examples](#osi-examples)
      - [Shortcomings of the OSI model](#shortcomings-of-the-osi-model)
    - [TCP/IP Model](#tcpip-model)
  - [Host to Host Communication](#host-to-host-communication)
  - [IP Protocol](#ip-protocol)
    - [IP Address](#ip-address)
    - [Port Number](#port-number)
    - [Subnet Mask](#subnet-mask)
    - [Default Gateway](#default-gateway)
    - [IP Packet](#ip-packet)
    - [Internet Control Message Protocol (ICMP)](#internet-control-message-protocol-icmp)
    - [ARP (Address Resolution Protocol)](#arp-address-resolution-protocol)

---

## Networking

- Here's the network steps in order:
  ![networking](./img/networking-1.jfif)
  1. `Modem` -> converts the signal from the `ISP` to a signal that the router can understand.
  2. `Router` -> it's the device that connects your devices to the internet
  3. `Switch` -> it's the device that connects your devices to the router (it's like a router but for local network) -> it sends the data to the right device
  4. `Network Interface Card (NIC)` -> it's the device that connects your device to the switch
  5. `Home router` -> it's the device that connects your devices to the internet
     - It's a multi-functional device -> `modem` + `router` + `switch`

---

### Client-Server Architecture

- **Client**: is a device that requests data from a server.
  - it's not only a browser, it can be a mobile app, a desktop app, another server, ...
- **Server**: is a device that provides data to clients (responds to requests from clients)
  - it's not only a server, it can be a database, a file, another client, ...

> **Client-Server Architecture:**
>
> - Application is separated into two parts:
>   - **Client**: where they call servers to perform expensive tasks, but also they can perform lightweight operations like data validation, UI rendering, etc. -> Can run on cheap machines
>   - **Server**: handles the heavy lifting (database queries, business logic, etc.) -> requires expensive machines
>
> That's where **Remote Procedure Call (RPC)** comes from. It's just a concept or an architecture that is used to communicate between clients and servers
>
> However, **we need a communication model** to define how clients and servers communicate with each other -> [OSI Model](#osi-model)

They communicate using **[Application Protocols](./Internet.md#application-protocols)**.

---

## Network Models

### OSI Model

**Open System Interconnection (OSI)**: It's a standard that defines the steps of the network communication between two systems.
![OSI Model](./img/osi-model.png)

- Why do we need a communication model?
  - Agnostic applications
    - To have agnostic applications that can run on any system without worrying about the underlying hardware and software (without knowing how the communication happens, like having different versions of the same application that can run on different connection like wifi, 4G, 5G, ... without worrying about the underlying communication)
  - Network equipment management (routers, switches, firewalls, load balancers, ...)
    - Without a standard model, upgrading network equipment would be a difficult task. Each manufacturer would have its own way of communicating with the equipment, and it would be difficult to manage and maintain the network.
    - With a standard model, we can have network equipment that can work together and communicate with each other regardless of the manufacturer or the underlying technology.
  - Decoupled innovation
    - To have decoupled innovation (different layers can be developed and improved independently without affecting the other layers)

- When entering a website, the data goes through all the layers of the OSI model like this:

  ```
  Layer 7 - Application - HTTP/FTP/gRPC
  Layer 6 - Presentation - Encoding, Serialization and Encryption - serializing JSON to byte-string
  Layer 5 - Session - Connection establishment - TLS, State management, handshakes
  Layer 4 - Transport - End-to-end communication - TCP/UDP - Ports and Sockets (choose the right port for the right service)
  Layer 3 - Network - Inter-network communication - IP
  Layer 2 - Data-link - Frames, Mac address - Ethernet / WiFi
  Layer 1 - Physical - Transmission of raw bits - Cables, Fiber, ...
  ```

#### OSI layers in details

1. **Application layer** -> the data is in the form of a message (ex: `HTTP` request)
   - Here, it processes the data and adds the **header** to it + it resolves the `domain` name to the `ip` address
2. **Presentation layer** -> It's the layer that converts the data to a format that the application can understand
   - The encryption happens here (if the website is using `HTTPS`) using **TLS** (formerly known as **SSL**) protocol

   ```sh
    # Before encryption
    GET / HTTP/1.1
    Host: www.example.com
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0
    Upgrade-Insecure-Requests: 1

    # After encryption
    GET / HTTP/1.1
    JRPKJSDFDAADSFHDUASFHADJSHFDSALFGUEAHGFJDSEANFJADHUFHEUFGAESYBFGHES
    Host: 196.145.54.11
    JRPKJSDFDAADSFHDUASFHADJSHFDSALFGUEAHGFJDSEANFJADHUFHEUFGAESYBFGHES
   ```

3. **Session layer** -> It's the layer that creates and manages (opens / closes) the connection between the client and the server
   - It's possible to directly work with this layer to handle the connection (as a frontend developer)

4. **Transport layer** -> It's the layer that is responsible for the **End to End** connection between devices (Making sure that the actual communication happens after the connection is established in the `session` layer)
   - It splits the data into `packets` and sends them to the server
   - this is done in the `TCP` protocol (it's a protocol that ensures that the data is sent and received correctly)
   - the size of the `TCP` packet (segment) is `64kb` (it's the maximum size of the packet) and sometimes it's less than that based on the network speed and the size of the data

5. **Network layer** -> It's the layer that is responsible for the communication between **inter & intra** networks (it's the layer that connects the `local` network to the `internet`)
   - It adds the `ip` address to the `packet` and sends it to the server

6. **Data-link layer** -> It's the layer that facilitates the communication between the **devices in the same network**. -> frames and `mac` address
   - It connects the `switch` to the `router` using the `mac` address
     - `mac` address is the address of the device (it's unique for each device), and it's the lowest level of addressing in the network (it's used to identify the device in the local network)
   - It adds the `mac` address to the `packet` and sends it to the server
   - `frame` is a data-link layer protocol that is used to encapsulate the `packet` and add the `mac` address to it

7. **Physical layer** -> It's the layer that is responsible for transferring `bits` of data over the network using the `cable`, or the `wireless` connection (wifi, 4G, 5G, ...)
   - It sends the `packet` to the server using the `cable` (electric signals, fiber, radio waves, ...)
   - At this stage the data is in this form:
     ![packet](./img/osi-model-1.png)
     1. `http data` -> from the `application` layer
     2. `tcp segment` -> from the `transport` layer
     3. `ip packet` -> from the `network` layer
     4. `Ethernet frame` -> from the `data link` layer
   - The cable is made of `copper` or `fiber` (fiber is faster than copper)

- Notes:
  - When we say "the app is a layer-5 app", it means that the app is working on the `session` layer (it handles the connection between the client and the server), and so on for the other layers.
  - Most of the applications we use are working on the `application` layer, but some of them are working on the `session` layer (like `TLS`) and some of them are working on the `transport` layer (like `TCP`).
  - Most apps deal with layer (4 to 7) and the lower layers are handled by the operating system and the network equipment (routers, switches, ...) mainly with devops.
  - Every layer is independent of the other layers, and they can be developed and improved independently without affecting the other layers (decoupled innovation).
    - For example layer 3 (network layer) doesn't care or know about the packets and if they arrive in the right order or not, it just cares about routing the packets to the right destination based on the `ip` address like `192.168.1.1`. On the other hand, layer 4 (transport layer) cares about the order of the packets and if they arrive or not, but it doesn't care about the `ip` address and how to route the packets to the right destination.
    - For example:
      - **"Switch"** is a layer 2 device, it doesn't care about the `ip` address and how to route the packets to the right destination, it just cares about the `mac` address and how to forward the packets to the right destination based on the `mac` address.
      - **"Router"** is a layer 3 device, it cares about the `ip` address and how to route the packets to the right destination based on the `ip` address.
        ![OSI Model](./img/osi-sender-receiver-3.png)
      - **Proxy/Firewall** is a layer 4 device, it cares about the order of the packets and if they arrive or not and the connection details (ports, headers), but it doesn't care about the `ip` address and how to route the packets to the right destination.
      - **Load Balancer/CDN** is a layer 7 device, it cares about the content of the packets and how to route the packets to the right destination based on the content of the packets (like the URL, headers, ...), but it doesn't care about the `ip` address and how to route the packets to the right destination.
        - CDNs need to cache the data retrieved from the backend server and to do that it needs to fully decrypt the content and understand it so it has to be a Layer 7 application
        - CDN or Load Balancer are layer 7 devices because they need to look at the content of the packets to decide where to route them, for example if the URL is `/images` it will route the packet to the image server, if the URL is `/api` it will route the packet to the API server, and so on.
          ![OSI Model](./img/osi-sender-receiver-4.png)
      - **VPN** is a layer 3 device, it takes the ip and wraps it in another ip and encrypts the data, so it cares about the `ip` address and how to route the packets to the right destination based on the `ip` address, but it doesn't care about the order of the packets and if they arrive or not.
        - That's why the ISP can't see the content of the packets when using a VPN, because the data is encrypted and wrapped in another `ip` address, so the ISP can only see the `ip` address of the VPN server and not the actual destination of the packets.
  - We don't need to go through all the layers for every request, for example if we are still in the process of establishing the connection (handshake) we don't need to go to the `application` layer, we can stay in the `session` layer until the connection is established and then we can go to the `application` layer.
  - The order in which the layers are executed is different between the sender and the receiver.
    ![packet](./img/osi-model-2.png)
    - The sender starts from the `application` layer and goes down to the `physical` layer, while the receiver starts from the `physical` layer and goes up to the `application` layer.
    - See [OSI Examples](#osi-examples) for more details.
  - The more layers we go through, the longer it takes for the data to be transmitted, That's why "routers" (layer 3) are faster than "CDN/Load Balancer" (layer 7) because they don't need to look at the content of the packets and they don't need to go through all the layers, they just need to look at the `ip` address and route the packets to the right destination.

---

#### OSI Examples

- Sender example

  ```
  Example sending a POST request to an HTTPS webpage

  ● Layer 7 - Application
    ○ POST request with JSON data to HTTPS server
  ● Layer 6 - Presentation
    ○ Serialize JSON to flat byte strings
  ● Layer 5 - Session
    ○ Request to establish TCP connection/TLS(because it's HTTPS)
  ● Layer 4 - Transport
    ○ Sends SYN request target port 443 (default port for HTTPS) and waits for SYN-ACK response from server to establish connection
  ● Layer 3 - Network
    ○ SYN is placed an IP packet(s) and adds the source/dest IPs
  ● Layer 2 - Data link
    ○ Each packet goes into a single frame and adds the source/dest MAC addresses
  ● Layer 1 - Physical
    ○ Each frame becomes string of bits which converted into either a radio signal (wifi), electric signal (ethernet), or light (fiber)
  ```

- Receiver example

  ```
  Receiver computer receives the POST request the other way around

  ● Layer 1 - Physical
    ○ Radio, electric or light is received and converted into digital bits
  ● Layer 2 - Data link
    ○ The bits from Layer 1 is assembled into frames
  ● Layer 3 - Network
    ○ The frames from layer 2 are assembled into IP packet.
  ● Layer 4 - Transport
    ○ The IP packets from layer 3 are assembled into TCP segments
    ○ Deals with Congestion control/flow control/retransmission in case of TCP (order, loss, duplicates)
    ○ If Segment is SYN we don’t need to go further into more layers as we are still processing the connection request
  ● Layer 5 - Session
    ○ The connection session is established or identified
    ○ We only arrive at this layer when necessary (three way handshake is done)
  ● Layer 6 - Presentation
    ○ Deserialize flat byte strings back to JSON for the app to consume
  ● Layer 7 - Application
    ○ Application understands the JSON POST request and your express json or apache request receive event is triggered
  ```

- Diagram explaining the OSI model layers in client (sender) and server (receiver)
  ![OSI Model](./img/osi-sender-receiver-1.png)
  ![OSI Model](./img/osi-sender-receiver-2.png)

---

#### Shortcomings of the OSI model

- The OSI model is a theoretical model that was developed in the 1980s, and it has some shortcomings:
  - It is not widely used in practice, as most of the internet protocols are based on the [TCP/IP model](tcp-ip-model.md), which is a simpler model that was developed around the same time as the OSI model.
  - It is too complex and has too many layers, which makes it difficult to implement and understand.
  - It does not account for the fact that some protocols can operate at multiple layers (for example, `HTTP` can operate at both the `application` layer and the `transport` layer).
  - It does not account for the fact that some protocols can operate at different layers depending on the context (for example, `TLS` can operate at both the `session` layer and the `presentation` layer).

- Despite its shortcomings, the OSI model is still a useful tool for understanding the different layers of the network and how they interact with each other. It provides a common language and framework for discussing network protocols and technologies, and it can help developers and network engineers to design and troubleshoot network applications and systems.

---

### TCP/IP Model

**Transmission Control Protocol/Internet Protocol (TCP/IP)**: is a set of rules that governs the connection of devices on the internet and provides a reliable, ordered, and error-checked delivery of data.

- Compared to the OSI model, the TCP/IP model is a simpler model that has only 4 layers:
  1. Application layer (layer 5, 6, 7 in OSI)
  2. Transport layer (layer 4 in OSI)
  3. Internet layer (layer 3 in OSI)
  4. Network access layer (layer 2 in OSI)
  5. Physical layer is not included in the TCP/IP model, as it is assumed to be handled by the underlying hardware and network infrastructure.

---

## Host to Host Communication

- **How messages are sent from one computer to another?**
  - When a client wants to communicate with a server (or server wants to communicate with another server), it needs to know the `ip` address of the server and the `port` number of the service it wants to access (for example, `HTTP` uses port `80`, `HTTPS` uses port `443`, ...).
  - Each host (client or server) has:
    - a unique `ip` address that identifies it on the network, and each service (like `HTTP`, `FTP`, `SSH`, ...) has a unique `port` number that identifies it on the host.
    - a network card that has a unique `mac` address that identifies it on the local network (Media Access Control address) -> e.g. `00:1A:2B:3C:4D:5E`
  - The client sends a request to the server using the `ip` address and the `port` number, and the server responds to the client using the same `ip` address and `port` number.
  - The communication between the client and the server is done using the `TCP` protocol, which ensures that the data is sent and received correctly, and it also handles the congestion control, flow control, and retransmission in case of packet loss.
  - If "A" sends a message to "B" specifying the `MAC` address of "B", then the message will be sent to everyone in the local network, but only "B" will receive the message and process it, while the other devices will ignore it.

    > ⚠️ That's why in public wifi, the attacker can sniff the traffic and see the messages sent by other devices in the same network, because they are sent to everyone in the local network, but only the intended recipient will process the message.

  - 💡 So, we need a way to eliminate the need to send messages to everyone in the local network, and that's where the `ip` address comes in, it allows us to send messages directly to the intended recipient without sending them to everyone in the local network. -> **Routability**

- **Routability**: is the ability to send messages directly to the intended recipient without sending them to everyone in the local network. This is achieved by using the `ip` address, which allows us to route the messages to the right destination based on the `ip` address.

- That's a good interview question: _"Why do we need `ip` address if we already have `mac` address?"_
  - Because `mac` address is only used for communication within the local network, while `ip` address is used for communication between different networks (like the internet). The `ip` address allows us to route the messages to the right destination based on the `ip` address, while the `mac` address only allows us to identify the device in the local network.
  - Without `ip` address, we don't know where to send the message in the world, because most likely the recipient is not in the same local network as the sender, so we need a way to route the message to the right destination, and that's where the `ip` address comes in.
  - Think of it as "index in databases", we need an index to quickly find the data we want, without it we would have to scan the entire database to find the data we want, which is inefficient and slow. Similarly, without `ip` address, we would have to send the message to everyone in the local network and hope that the intended recipient receives it and processes it, which is inefficient and slow.

---

## IP Protocol

### IP Address

![IP Address](./img/ip-address-1.png)

- A protocol that provides logical addressing to devices on a network.
- It's a layer 3 protocol (Network layer)
- Used for routing packets across networks.
- It's built in 2 parts:
  1. Network part: Identifies the network to which the device belongs -> **To eliminate many networks when sending messages to each other -> We need to know the network part of the ip address to route the message to the right network**
  2. Host part: Identifies the device within the network -> **To identify the device within the network** (each network has a finite range of host ip addresses)

> 💡 **To know the network part and the host part of an ip address, we use the subnet mask** -> In IPv4, subnet mask is 32-bits long, it's built in 2 parts, network part and host part, the network part is the part that identifies the network to which the device belongs, and the host part is the part that identifies the device within the network. In IPv6, subnet mask is 128-bits long, it's built in 2 parts, network part and host part, the network part is the part that identifies the network to which the device belongs, and the host part is the part that identifies the device within the network.

- Two main versions: IPv4 and IPv6.
  - **IPv4**: 32-bit addresses, commonly written in dotted-decimal notation (e.g., 192.168.1.1).
  - **IPv6**: 128-bit addresses, written in hexadecimal notation (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).

> 💡 I think that it's clear now what is `localhost` that we see when running a server on our machine -> It's just the `ip` address of our machine `127.0.0.1` (for IPv4) or `[IP_ADDRESS]` (for IPv6). meaning that we're sending/receiving messages to our own machine and nobody else can access it even in the same network.

- Example: Host `192.168.1.3` wants to talk to `192.168.2.2`.

  ![IP Address](./img/ip-address-2.png)
  - If they are in the same local network (subnet), then the host can send the message directly to the recipient using the `mac` address.
  - If they are in different local networks (subnets), then the host needs to send the message to the router, which will then forward the message to the recipient's local network.
  - **What is `/24` in `192.168.1.0/24`? -> see image above**
    - It's a **subnet mask**, it tells us the network part and the host part of the ip address.
    - 💡 Note that each 4 digits/bits are 1 byte, so each part between the dot `.` is 1 byte.
    - `/24` tells us that the first 24 bits **(3 bytes)** are the **network part**, and the remaining 8 bits are the **host part** -> `IPV4`
    - `/64` tells us that the first 64 bits are the **network part**, and the remaining 64 bits are the **host part** -> `IPV6`

- **"But my host has many apps, how do I know which app to send the message to?"** -> **Port Number** ⬇️

### Port Number

![Port Number](./img/port-number-1.png)

- It's an integer number that identifies the **application** that the message should be sent to -> `1-65535`
- Each app has a unique port number, and the operating system uses the port number to deliver the message to the correct application.
- You can send an HTTP request on port `80`, a DNS query on port `53`, an SSH connection on port `22`, ...
- Example: Host `192.168.1.3` has 2 apps: App A on port `80` and App B on port `443`.

### Subnet Mask

It's a 32-bit number (for IPv4) that is used to determine the network part and the host part of an IP address.

- The subnet is **`192.168.0.0/24`**
- The subnet haas a mask **`255.255.255.0`**
- The subnet mas is used to determine whether an IP is in the same subnet or not.
  ![Subnet Mask](./img/subnet-mask-1.png)
  - 💡 Two IPs are in the same subnet if their network part is the same.
  - if it has the same subnet, it's then in the same network as the sender, so we can send the message directly to the recipient using the `mac` address.
  - if it has a different subnet, it's then in a different network from the sender, so we need to send the message to the router, which will then forward the message to the recipient's network.

### Default Gateway

![Default Gateway](./img/default-gateway-1.png)

- It's the **IP address of the router** that the host uses to send messages to recipients in different networks.
- It's the **entry point to the internet** for the host.

### IP Packet

> See [Packet](./Internet.md#packet) to understand what is packet and how it works

- **IP Packet** is just a **Packet** with **Header IP**
  ![packet-1](./img/packet-1.png)

- The `ip` header is 20 bytes long and contains the following information:
  ![packet-2](./img/packet-2.png)
  - **Version**: The version of the IP protocol (IPv4 or IPv6)
  - **IHL**: Header Length
  - **DSCP**: Differentiated Services Code Point -> for Quality of Service (QoS)
  - **ECN**: Explicit Congestion Notification -> to notify the sender about congestion (which is the condition when too much data is sent to a network)
  - **Total Length**: The total length of the IP packet (header + data)
  - **Identification**: A unique identifier for the IP packet
  - **Flags**: Flags that control the behavior of the IP packet
  - **Fragment Offset**: The offset of the fragment
  - **Time to Live**: The time to live of the IP packet
  - **Protocol**: The protocol that the IP packet is carrying (TCP, UDP, etc.)
  - **Header Checksum**: The checksum of the IP header
  - **Source IP Address**: The IP address of the sender
  - **Destination IP Address**: The IP address of the recipient
  - **Options**: Optional fields

### Internet Control Message Protocol (ICMP)

It's a IP-level protocol used to send information from the source host to the destination host about the status of the IP packet.

![ICMP](./img/icmp-1.png)

- It's a protocol that is used to send error messages and other information between IP hosts
  - Errors like (Host unreachable, network unreachable, TTL expired, Packet expired, etc)
- It's a layer 3 protocol (Network layer)
  - Doesn't require listeners or ports to be opened because it's not a transport layer protocol.
- It's built in 2 parts:
  1. Message Type: Identifies the type of the ICMP message
  2. Message Code: Identifies the code of the ICMP message

> 💡 If it's blocked by a firewall or any router in the path, then we won't get any response from the destination host. -> so we know that the host is unreachable or blocked.

- **Ping** is an application that uses ICMP to test the reachability of a host.
  - It sends an `ICMP Echo Request` to the destination host and waits for an `ICMP Echo Reply`.
  - If the destination host is reachable, it will send an `ICMP Echo Reply` back to the sender.
  - If the destination host is not reachable, it will send an `ICMP Echo Reply` back to the sender with an error message.

  ```bash
  ping 192.168.1.1 # Send a ping to the default gateway (first router ip in the network -> Your router ip)

  ping 192.168.1.1 -c 4 # Send a ping to the default gateway (first router ip in the network) 4 times

  ping google.com # Send a ping to google.com (it will resolve the ip address of google.com and send a ping to it)
  ```

  ![ping](./img/ping-1.png)

  > As you can see from the image below of an example of using `ping`, everything in the layer 3 is dealing with **IP Packets** only.
  > ![ping](./img/ping-2.png)
  > ![ping](./img/ping-3.png)

- **Traceroute** is a tool that uses ICMP to trace the route that packets take to reach a destination host.
  - It sends a series of `ICMP Echo` Requests to the destination host with increasing Time to Live (TTL) values.
  - Each router along the path forwards the packet and decrements the TTL value. When the TTL value reaches 0, the router sends an ICMP Time Exceeded message back to the sender.
  - This allows the sender to see the IP addresses of all the routers along the path to the destination.

  ```bash
  traceroute google.com # Trace the route to google.com (it will resolve the ip address of google.com and trace the route to it)

  traceroute google.com -m 10 # Trace the route to google.com with a maximum of 10 hops
  ```

---

### ARP (Address Resolution Protocol)

> In most of the situations, you know the IP address, but you need to know the MAC address to send the message to the recipient.
> You need the MAC address because you are in the same local network (subnet), so you can send the message directly to the recipient using the MAC address.
>
> That's when ARP comes in handy.

It's a layer 2 (Data Link layer) protocol used to resolve the MAC address of a host given its IP address.

![arp](./img/arp-2.png)

- In the beginning, hosts have no information about the MAC addresses of other hosts. Then they need to send an **ARP Request/Broadcast** to the network to know the MAC address of the destination host, and then it's going to respond with an **ARP Reply** containing its MAC address and caching it in the ARP table. After that, we can send messages directly to the recipient using the MAC address as the MAC address of the destination host is now known and added to the frames (packets).

- **ARP Table:** It's a table that stores/caches the IP address and MAC address mappings of the hosts in the local network.

  ```bash
  arp -a # Show the ARP table
  ```

- How it works
  ![arp](./img/arp-1.png)

- **ARP Poisoning:** It's a type of attack that exploits the ARP protocol to send spoofed ARP messages to a LAN (local area network) and associate the attacker's MAC address with the IP address of another host. (The attacker impersonates the gateway (Default Router) → Man in the middle)
  - It can be used to intercept network traffic, modify it, or inject malicious data into it.

- **ARP Dump:** It's a tool that is used to capture and display ARP messages on the network.
  ```bash
  tcpdump -i eth0 arp # Capture and display ARP messages on eth0
  ```