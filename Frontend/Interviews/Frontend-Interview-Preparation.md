# Comprehensive Frontend Interview Preparation Guide

---

## Table of Contents

- [HTML & CSS](#html--css)
- [JavaScript](#javascript)
- [React](#react)
- [System Design](#system-design)
- [Behavioral and Non-Technical Interviews](#behavioral-and-non-technical-interviews)
- [Problem-Solving Techniques](#problem-solving-techniques)
- [Common Interview Questions](#common-interview-questions)

---

## HTML & CSS

### Semantic HTML

- Use semantic tags like `<header>`, `<footer>`, `<article>`, `<section>` for better accessibility and SEO.
- Example:

  ```html
  <article>
    <header>
      <h1>Article Title</h1>
    </header>
    <p>Content of the article...</p>
  </article>
  ```

### CSS Fundamentals

- **Box Model:** Understand `content`, `padding`, `border`, and `margin`.
- **Flexbox & Grid:** Use for responsive layouts.
- **Specificity:** Inline styles > IDs > Classes > Tags.
- Example:

  ```css
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```

---

## JavaScript

### Core Concepts

- **Closures:** Functions retain access to their lexical scope.

  ```js
  function outer() {
    let count = 0;
    return function inner() {
      count++;
      return count;
    };
  }
  const counter = outer();
  console.log(counter()); // 1
  ```

- **Event Loop:** Understand how JavaScript handles asynchronous operations.

### Advanced Topics

- **Debounce & Throttle:** Optimize event handling.

  ```js
  function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  }
  ```

- **Promises & Async/Await:** Handle asynchronous code.

  ```js
  async function fetchData() {
    try {
      const response = await fetch('/api');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  ```

---

## React

### Core Concepts

- **JSX:** Syntax extension for writing UI components.
- **State & Props:** Manage component data and behavior.
- **Lifecycle Methods:** `componentDidMount`, `useEffect`, etc.
- **Hooks:** `useState`, `useEffect`, `useContext`.

  ```js
  import React, { useState, useEffect } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `Count: ${count}`;
    }, [count]);

    return <button onClick={() => setCount(count + 1)}>Increment</button>;
  }
  ```

---

## System Design

### Frontend System Design

- **Component Architecture:** Break down UI into reusable components.
- **State Management:** Use tools like Redux, Context API.
- **Performance Optimization:** Lazy loading, code splitting, caching.

### Backend System Design

- **APIs:** Design RESTful or GraphQL APIs.
- **Scalability:** Use load balancers, caching (Redis, CDN).
- **Database Design:** Normalize data, use indexing for performance.

---

## Behavioral and Non-Technical Interviews

### STAR Technique

- **Situation:** Describe the context.
- **Task:** Explain your role.
- **Action:** Detail the steps you took.
- **Result:** Share the outcome.

### Common Questions

- "Tell me about yourself."
- "What is your biggest weakness?"
- "Describe a challenging project and how you handled it."

---

## Problem-Solving Techniques

### Steps to Solve Problems

1. **Understand the Problem:** Clarify requirements.
2. **Plan:** Break down the problem into smaller parts.
3. **Execute:** Write clean, efficient code.
4. **Review:** Test and optimize your solution.

### Example

- **Problem:** Reverse a string.

  ```js
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString('hello')); // 'olleh'
  ```

---

## Common Interview Questions

### JavaScript

- What is the difference between `==` and `===`?
- How does the `this` keyword work?
- Explain event delegation.

### React

- What are React hooks?
- How does the virtual DOM work?

### System Design

- Design a URL shortening service like TinyURL.
- How would you optimize a web application for performance?

---

This guide consolidates key topics, examples, and techniques to prepare for frontend interviews. Review each section thoroughly and practice coding problems to build confidence. Good luck!
