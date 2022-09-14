# INDEX

- [INDEX](#index)
  - [Big O](#big-o)
    - [O(n)](#on)
    - [O(1)](#o1)
    - [O(n^2)](#on2)
    - [O(n!)](#on-1)
    - [Rules to improve Big o](#rules-to-improve-big-o)
    - [Notes](#notes)

---

## Big O

It tells us **How well a problem is solved**, it's the language we use to telling how long the algorithm takes to run

This is done by measuring the performance (**number of steps / operations**) which varies between devices so we need something standard

- Elements of good code:
  - readable

- scalable -->
  - **speed** --> CPU --> **Time complexity** --> **Big O**
    - compare algorithms on which one is better in scale
  - **memory** --> **space complexity**:
    - heap --> store variable
    - stack --> operations

![big-o](./img/big-o.png)
> here we see when elements (input) increases, how much the algorithm slow down (how many operation do we need to do) ?

---

### O(n)

this is called **linear Time**
Ex: looping on array using `for-loop`

---

### O(1)

this is called **constant Time**
Ex:

  ```js
  // O(1)
  function(arr){
    console.log(arr[0]);
  }
  
  // O(2) -> also called O(1) as it's constant time
  function(arr){
    console.log(arr[0]);
    console.log(arr[1]);
  }
  ```

---

### O(n^2)

this is called **Quadratic Time**
Ex: usually nested loops

---

### O(n!)

this is called **Factorial Time** or **oh no!**

- you won't encounter it most likely
- means that we're adding nested loop for every input that we have
- Ex: usually nested loops

---

### Rules to improve Big o

1. worst case
   - always measure the worst case
2. remove constants
   - `O(n/2 + 124)` will be `O(n+1)`
3. different terms for inputs

    ```js
    function compressBoxesTwice (boxes, boxes2) {
      boxes.forEach(function(boxes) {
        console.log(boxes)
      })
      
      boxes2.forEach(function(boxes) {
        console.log(boxes)
      })
    }

    // result is O(n+m) and not O(n) as we have 2 different input lengths
    ```

4. drop non-dominant terms

   - `O(n^2 + n)` will be `O(n^2)`

---

### Notes

- interview question: what is the time complexity of getting the length here?

  ```js
  'sdfsdgdfsgdfgsfdg'.length;
  ```

  - answer is: it depends on how the method (`.length) works here in this language
    - for example, here we use javascript which has `length` property (not method) to each string, so it's a simple lookup --> `O(1)`
