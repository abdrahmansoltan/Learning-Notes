# INDEX

- [INDEX](#index)
  - [Computer architecture](#computer-architecture)
  - [Disk](#disk)
  - [RAM](#ram)
  - [CPU](#cpu)
    - [Cache](#cache)
  - [Distributed systems](#distributed-systems)

---

## Computer architecture

It's the science and art of selecting and interconnecting hardware components to create computers that meet functional, performance and cost goals.

- It's the design of the hardware components of a computer system.
- Computers are machines that process data and do a program:

  - **fixed program**: it's a program that can't be changed, do only one task and it's not flexible (e.g. calculator)
  - **stored program**: it's a program that can be changed, do multiple tasks and it's flexible by storing and executing instructions (e.g. computer)

- Components:
  ![Computer architecture](./img/computer-architecture.png)

  - `Disk`
    - It stores **persisted** data
  - `RAM (memory))`
    - It stores **volatile** data and instructions that the `CPU` needs to execute
  - `CPU`
    - It's the brain of the computer, it executes instructions and has a `program counter` that points to the next instruction to execute in `RAM`
  - `ALU (Arithmetic Logic Unit)`
    - It's a part of the `CPU` that performs arithmetic and logic operations

- The computer takes a sequence of instructions from `RAM` and executes them one by one (in order) and can do predefined primitive instructions:

  - Arithmetic and logic operations
  - Data movement operations
  - Control operations
  - Input and output operations

  > So, any computable problem can be solved by a computer by breaking it down into primitive instructions and **if computed in one language, it can be computed in any other language**

---

## Disk

It stores **persisted** data

- `HDD` - Hard Disk Drive (slower than SSD)
- `SSD` - Solid State Drive (faster than HDD)
- measures in hundreds of GBs or TBs
  - TB - Terabyte -> `10^12` bytes

---

## RAM

It stores **volatile** data

- `RAM` - Random Access Memory
- measures in hundreds of MBs or GBs
  - GB - Gigabyte -> `10^9` bytes
  - MB - Megabyte -> `10^6` bytes
- It's more expensive than `disk` in term of cost per byte
- But it's cheaper than `disk` in term of resources per byte (writing and reading)
  - `RAM` is faster than `disk` in writing and reading data

---

## CPU

**Central Processing Unit**: it's the brain of the computer

- It's used to:

  - writing data to `disk` or `RAM`
  - reading data from `disk` or `RAM`
  - processing data (executing instructions)

- It's measured in `GHz` (Gigahertz)
- For faster reading from `RAM`, we can use `Cache`

### Cache

- It's a small amount of `RAM` that is closer to the `CPU` than the main `RAM`
- It's smaller than `RAM` and `Disk`
  - it's measured in `MB` (Megabytes)
- It's a lot faster than `RAM` and `Disk`
  - as it's closer to the `CPU` and it has a scale of `nano-seconds` (`10^-9` seconds)
- The `CPU` uses `Cache` to store data that it needs to access **frequently**
- The drawback of `Cache` is that it's **not persistent**

---

## Distributed systems

- As the speed of `CPU` won't increase much in the future, we need to use multiple `CPUs` to increase the speed of processing data
- We can use multiple `CPUs` in a single computer, but it's not enough, instead we need to use multiple computers
  - This is called `distributed systems`

---
