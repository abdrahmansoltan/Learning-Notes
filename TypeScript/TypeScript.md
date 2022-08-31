## INDEX

- [INDEX](#index)
- [Installing](#installing)
  - [Compiling](#compiling)
    - [Compiling one TS file](#compiling-one-ts-file)
    - [Compiling entire project with all its files](#compiling-entire-project-with-all-its-files)
- [Typing](#typing)
  - [Statically vs dynamically typed](#statically-vs-dynamically-typed)
  - [Strongly vs weakly typed](#strongly-vs-weakly-typed)
  - [Implicit Typing and Explicit Typing](#implicit-typing-and-explicit-typing)
- [TypeScript](#typescript)
  - [why use Typescript](#why-use-typescript)
- [TypeScript Types](#typescript-types)
  - [`Array`](#array)
  - [`Tuple`](#tuple)
  - [`enum`](#enum)
  - [`Objects and Interfaces`](#objects-and-interfaces)
    - [`Objects`](#objects)
    - [`Interfaces`](#interfaces)
    - [Partial Type](#partial-type)
  - [`unknown`](#unknown)
  - [`Union & Intersection Types`](#union--intersection-types)
    - [Union types](#union-types)
    - [Intersection types](#intersection-types)
- [Type Guard](#type-guard)
  - [`Literal Types`](#literal-types)
    - [String Literal Types](#string-literal-types)
  - [Type Aliases -- (custom type)](#type-aliases----custom-type)
  - [function](#function)
    - [`function type`](#function-type)
    - [`void`](#void)
    - [`never`](#never)
    - [this keyword types](#this-keyword-types)
- [Type Assertions / Type Casting](#type-assertions--type-casting)
- [Classes](#classes)
  - [Using Interfaces with classes](#using-interfaces-with-classes)
  - [Access Modifiers](#access-modifiers)
- [Generics](#generics)
- [Promises](#promises)
- [Decorators](#decorators)
  - [Decorator configuration](#decorator-configuration)
  - [Decorator Composition](#decorator-composition)
  - [Class Decorator](#class-decorator)
- [Namespace](#namespace)
- [Bundling Typescript with Webpack](#bundling-typescript-with-webpack)
  - [For Development](#for-development)
  - [For Production](#for-production)
- [3rd Party JS-Libraries for TypeScript](#3rd-party-js-libraries-for-typescript)

---

## Installing

- [refrence](https://classroom.udacity.com/nanodegrees/nd0067-fwd-t3/parts/cd0292/modules/c0ad589b-67b3-4791-931f-9b0fa8ac0ed3/lessons/f92490de-12fb-4c61-a74a-3889a4727954/concepts/061049c2-7fdf-4d69-868b-e51c64c7ceef)

```bash
npm i typescript --save-dev    # save to devDependencies

npm i --save-dev ts-node

npm i --save-dev @types/node  # type definitions

```

---

### Compiling

#### Compiling one TS file

- `tsc` -> `TypeScript Combiler` is the command used to compile `typescript` to `javascript`

- in `html` file -> always use the javascript file and not the `TS` file

- `watch mode` : like live-server

  ```bash
  tsc app.ts --watch   # or --w
  ```

---

#### Compiling entire project with all its files

- To use TypeScript, you need to add a script to your `package.json` file to `compile` TypeScript to JavaScript. This is generally called your "`build`" script

  - this command will `transpile` TypeScript to JavaScript

  ```json
  "scripts": {
      "build": "npx tsc"
    },
  ```

- Add the default TypeScript configuration file

- to create general `tsc` (telling TS that everything in the folder is managed by Typescript):

  ```bash
  tsc --init   # this will create tsconfig.json file


  # after that run this :
  tsc  # this will tell TS to convert all (.ts) files to (.js)
  # or
  tsc --w
  ```

- `tsconfig.json` -> This config file is also where you can tell TypeScript how strict it should be while checking your code and what to ignore. If you're moving a project to TypeScript, you can gracefully integrate TS by working with the settings in this config file.

- Helpful configurations to note for in `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5", // which level of JS-support to target
    "module": "commonjs",
    "lib": ["ES2018", "DOM"],

    "outDir": "./build", // destination folder will have JS files

    "rootDir": "./src", // just include src folder that has TS files

    "strict": true,

    "noImplicitAny": true //  TypeScript will issue an error whenever it would have inferred (any)
  },
  "exclude": ["node_modules", "tests"]
}
```

- `target` - sets what version of JS TypeScript will be transpiled to.
- `module` - sets what module system will be used when transpiling. - Node.js uses the common.js module system by default
  lib - is used to say what libraries your code is using. In this case, ES2018 and the DOM API
- `outDir` - where you want your src code to output to. Often named build, prod, or server (when using it server-side)
- `strict` - enable strict typing
- `noImplicitAny` - disallow the "any" type (covered in TypeScript Basics)
- `exclude` - directories to exclude in compiling
- for `Debugging` --> use `"sourceMap": true`

---

## Typing

![typing](./img/typing.PNG)

### Statically vs dynamically typed

- `Statically-typed` do type checking at compile-time
- `dynamically-typed` do type-checking at runtime

---

### Strongly vs weakly typed

- `Weakly-typed` languages make conversions between unrelated types implicitly
- `Strongly-typed` languages don't allow implicit conversions between unrelated types.

- JavaScript is `Weakly-Typed`.

  - it allows for `type coercion`
  - This means that types are assigned by the interpreter based on the data and makes an educated guess when the code's intention is ambiguous. This can lead to unintended results.

```js
let x = 21; // type assigned as int at runtime.
let y = x + "dot";
// This code will run without any error. As Javascript is a weakly-typed language, it allows implicit conversion between unrelated types.
```

---

### Implicit Typing and Explicit Typing

- `Implicit Typing`

  - TypeScript will automatically assume types of objects if the object is not typed.

  ```js
  const myNum = 3; // TypeScript implicitly types myNum as a number based on the variable
  ```

- `Explicit Typing`

  - The developer does explicit typing. The developer explicitly applies a type to the object.

  ```js
  let myVar: number = 3; // myVar has been explicitly typed as a number
  ```

---

## TypeScript

**TypeScript** is a **static and strongly typed** superset of JavaScript. When we're done with our TypeScript code, it compiles to JavaScript.

![typescript](./img/typescript.PNG)

### why use Typescript

- It allows you, as a code author, to leave more of your intent “on the page”
- It has the potential to move some kinds of errors from **runtime** (users) to **compile time** , ex:
  - Values that are potentially absent (null or undefined)
  - Incomplete refactoring
  - Breakage around internal code contracts (e.g., an argument becomes required)
- It serves as the foundation for a great code authoring experience
  - `Example`: in-editor autocomplete

![typescript](./img/whytypescript.PNG)

---

## TypeScript Types

### `Array`

```ts
let arr: string[]; // array of strings
// or :
let arr: Array<string>;

let arr2: (string | number)[]; // array of strings or numbers
```

### `Tuple`

 When you know exactly what data will be in the array with a **fixed length** and their **type-order**, and you will not be adding to the array or modifying the type for any value

```ts
let arr: [string, number, string]; // ['cat', 7, 'dog']
```

Gautcha -> when using array-methods like `pop`, `push` typescript doesn't raise errors as it assumes that the method won't change the array-structure

### `enum`

- An enum in TypeScript is a collection of `constants` / `static strings`. That’s it.
- You use an enum when you have a constant set of values that will not be changed.
- it assigns labels to numbers
- it's like `Object.freeze`

```ts
enum Colors {
  RED = "red",
  WHITE = "white",
  BLUE = "blue",
}

console.log(Colors.RED); // red
```

### `Objects and Interfaces`

#### `Objects`

```ts
// not good and hard to read
// note that --> in object type we use `;` but in value section we use ','
let student: { name: string; age: number; enrolled: boolean } = {
  name: "Maria",
  age: 10,
  enrolled: true,
  // instead we use interfaces
};
```

#### `Interfaces`

- it's a blueprint for `object's items`
- you create an abstract class as an `interface` for creating classes. With TypeScript, interfaces are simply used as the blueprint for the shape of something. Interfaces can be used to create functions but are most commonly seen to create objects.
- types & interfaces are similar but:
  - interfaces are **extendable** from other interfaces like classes unlike `types` which are not
    - you can extend interfaces/classes using the word -> `implements`
- Use `PascalCase` for naming `interfaces`.

```js
interface Student {
  name: string;
  age: number;
  gender?: stromg; // (?) means that it's optional
  enrolled: boolean;
}
let newStudent: Student = { name: "Maria", age: 10, enrolled: true };
```

> we can use class instead with all its properties are '?' as classes are implemented in javascript unlike interfaces which is in Typescript and needs to be transpiled to Javascript

#### Partial Type

The partial type is simple to use as it only requires to pass a type **T** where **T** can be any object type regardless of whether it is a defined type.

> It generates a new type based on the input type/object/interface **with all the property-keys being optional**

```ts
Partial<MyType>
Partial<MyInterface>
Partial<{}>
```

```ts
// no need to update all the property keys to be optional
interface Blog {
  id: string;
  title: string;
  slug: string;
  categories: string[];
  tags: string[];
  featureImageUrl?: string;
  content: string;
}

// Partial<Blog> generates a new type based on Blog with all the property
// keys being optional
const draft: Partial<Blog> = {
  title: "What kind of title should I type?",
};
```

---

### `unknown`

- Requires a `type check` (**type guard**)
- used when the type of the thing being typed is `unknown`. Used heavily for `type assertion`
- `unknown` is recommended over `any` because it provides **safer typing** — you have to use type assertion or narrow to a specific type if you want to perform operations on unknown.
  - `any` -> can be used for `console.log()` content

```ts
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// type assertion or (Type Guard)
if (typeof userInput === "string") {
  userName = userInput;
}
```

---

### `Union & Intersection Types`

#### Union types

A union type has a very specific technical definition that comes from set theory, but it’s completely fine to think of it as **OR** for types.

- used when more than one type can be used
- you shouldn't use it with type `any`, as it's like multiplying by `zero` as it will equal that the type will be `any` (`zero`)

```ts
let studentPhone: number | string;
studentPhone = "(555) 555 - 5555";
studentPhone = 5555555555;
```

#### Intersection types

Intersection types also have a name and definition that comes from set theory, but they can be thought of as **AND** for types.

- Intersection types in TypeScript can be described using the `&` operator.

```ts
function makeWeek(): Date & { end: Date } {
  //⬅ return type
 
  const start = new Date()
  const end = new Date(start.valueOf() + ONE_WEEK)
 
  return { ...start, end } // kind of Object.assign
}
 
const thisWeek = makeWeek()
thisWeek.toISOString()
// --->   
        // const thisWeek: Date & {
        //     end: Date;
        // }
thisWeek.end.toISOString() // ---> (property) end: Date
```

- This is quite different than what we saw with union types — this is quite literally a `Date` and `{ end: Date}` mashed together, and we have access to everything immediately.

---

## Type Guard

**Type Guard** : protects us from doing something unless we check the type first

- it control the flow of code using the type of something
- this process is called **Narrowing**
  - as it narrows our choice with the type-guard condition
- usually used with [unknown type](#unknown) or [Union & Intersection Types](#union--intersection-types)

---

### `Literal Types`

The main idea here is that we provide **type & value** for the variable, usually using **const**

```ts
// We're making a guarantee that this variable
// helloWorld will never change, by using const.

// So, TypeScript sets the type to be "Hello World", not string
const helloWorld = "Hello World";

// On the other hand, a let can change, and so the compiler declares it a string
let hiWorld = "Hi World";
```

#### String Literal Types

- A `literal` is a more concrete sub-type of a collective type. What this means is that "Hello World" is a string, but a string is not "Hello World" inside the type system.
- usually used with `union-types`

- There are **three** sets of literal types available in TypeScript today: `strings`, `numbers`, and `booleans`, by using literal types you can allow an exact value which a string, number, or boolean must have.
- ex :

  ```ts
  type Easing = "ease-in" | "ease-out" | "ease-in-out";

  class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
      if (easing === "ease-in") {
        // ...
      } else if (easing === "ease-out") {
      } else if (easing === "ease-in-out") {
      } else {
        // It's possible that someone could reach this
        // by ignoring your types though.
      }
    }
  }

  let button = new UIElement();
  button.animate(0, 0, "ease-in");
  button.animate(0, 0, "uneasy");
  ```

---

### Type Aliases -- (custom type)

Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

- Type aliases do not create a new type; they rename a type. Therefore, you can use it to type an object and give it a descriptive name.
- it's same as `interface`
- once a type alias is created, it can't be added to.

```ts
type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 }; // this works!

// another ex

function greet(user: { name: string; age: number }) {
  console.log("Hi, I am " + user.name);
}
// to this :
type User = { name: string; age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}
```

---

### function

#### `function type`

- it's when you want a variable to be a function with specific conditions

```ts
let combineValues: (a: number, b: number) => number;
// here the condition is to have 2 number-parameters & return a number

function add(n1: number, n2: number) {
  return n1 + n2;
}

combineValues = add; // this works as (add) is a function that matches the condition
```

#### `void`

- used as a return type when the function returns **nothing**
- or means that the function's return value **should be ignored**

  ```ts
  function printResult(num: number): void {
    console.log("Result: " + num);
  }
  ```

#### `never`

- used as a return type when the function will never return anything **as it crashes due to an error**, such as with functions that throw errors or infinite loops
  - as when it's reached, it means that something that wasn't supposed to be reached (returned), was actually reached due to error in code
- it's a form of **bottom types**, which are types that describes no possible values allowed by the system
- it works when there's **nothing** left --> **never**

```ts
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // or
  // while (true) {}
}
```

#### this keyword types

- Sometimes we have a free-standing function that has a strong opinion around what `this` will end up being, at the time it is invoked.
- For example, if we had a DOM event listener for a button:

  ```html
  <button onClick="myClickHandler">Click Me!</button>
  ```

- We could define myClickHandler as follows:

  ```ts
  function myClickHandler(event: Event) {
    this.disabled = true
  // 'this' implicitly has type 'any' because it does not have a type annotation.
  }
  
  myClickHandler(new Event("click")) // seems ok
  ```

- TypeScript isn’t happy with us. Despite the fact that we know that this will be element that fired the event, the compiler doesn’t seem to be happy with us using it in this way.
  - To address the problem, we need to give this function a `this` **type**

  ```ts
  function myClickHandler(
    this: HTMLButtonElement,
    event: Event
  ) {
    this.disabled = true
            
  // (property) HTMLButtonElement.disabled: boolean
  }
  
  myClickHandler(new Event("click")) // seems no longer ok
  ```

---

## Type Assertions / Type Casting

Type Assertions are used to tell TypeScript that even though TypeScript thinks it should be one type, it is actually a different type **that you want**. Common to see when a type is unknown

- Type assertions helps you to force types when you are not in control of them.
  Typecasting refers to `type conversions`
- There are two ways to do type assertions
  - `Bracket` syntax --> `let length: number = (<string>lengthField);`
  - Use `as` --> `let length: number = (lengthField as string);`

```js
const myFunc = (student: unknown): string => {
  newStudent = student as string;
  return newStudent;
}
```

## Classes

the big difference being our variables (properties) are typed, as are the parameters and return types for our constructor and methods.

```js
class Student {
  studentGrade: number;
  studentId: number;
  constructor(grade: number, id: number) {
    this.studentGrade = grade;
    this.studentId = id;
  }
}
```

### Using Interfaces with classes

- it uses the word `implements`
- a `class` can **implement** multiple `interfaces`
- it ensures that a class follows the guideline of the interface even if we have repeated code (**repeating the type stuff**)
- in the code below, we want `Person` class to be `Greetable`

```ts
interface Greetable {
  name: string;
  age?: number; // optional parameter/property

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}
```

---

### Access Modifiers

used to declare how accessible a variable should be

- `public` : not necessary
- `private` : private properties can only be accessed and modified from the class itself.
- `protected` : protected properties can be accessed by the class itself **and child classes**.

```js
// ex :
class Student {
  protected studentGrade: number;
  private studentId: number;
  public constructor(grade: number, id: number) {
    this.studentGrade = grade;
    this.studentId = id;
  }
  id(){
    return this.studentId;
  }
}

class Graduate extends Student {
  studentMajor: string; // public by default
  public constructor(grade: number, id: number, major: string ){
    super(grade, id);
      this.studentId = id; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
      this.studentGrade = grade; // Accessable because parent is protected
      this.studentMajor = major;
  }
}

const myStudent = new Graduate(3, 1234, 'computer science');

console.log(myStudent.id()); //  prints 1234
myStudent.studentId = 1235; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
console.log(myStudent.id()); // prints 1235
```

- you can also use these access modifiers in the constructor function instead of writing them many times

```ts
class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

```

---

## Generics

A generic is a way to write a function that is reusable across different types, by using **type parameters**

>**type parameters**: can be thought of as **function arguments, but for types**
> - Functions may return different values, depending on the arguments you pass them.

- why not just use `any`?
  - `any` allows for any type to go in, and any type to come out.
  - Using a `generic` means a number goes in and a number comes out or a string goes in and a string comes out.
  - `Generics` introduce the `Type Variable`
    - Rather than being a variable that accepts values, it's a variable that accepts types and is denoted with angle brackets myFunc`<T>`

```ts
// Typed Function
const getItem = (arr: number[]): number => {
  return arr[1];
};

// Generic Function
const getItem = <T>(arr: T[]): T => {
  return arr[1];
};
```

In the first function, we have a function that takes in a number array and outputs the second number of the array. But what if we don't want to work with numbers? What if we want to work with strings? Well, we would need to create a second function. Or, we can use a generic, and whatever type we use when we call the function will translate to its return as well.

- another example

```ts
// function takes object that contains certain type(T) and another object that contains certain type(U)
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// "extends" here is a (Type Constraint)

// here first obj contains type(string) and the second obj contains type(number)
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
```

---

## Promises

- Promises in TypeScript take advantage of `generics`. This means we can explicitly state what type of Promise should be returned.

```js
// this async fun has a promise but doesn't return something
const myFunc = async ():Promise<void> => { // do stuff };

```

---

## Decorators

Decorators are a way to decorate members of a class, or a class itself, with extra functionality. When you apply a decorator to a class or a class member, you are actually calling a function that is going to receive details of what is being decorated, and the decorator implementation will then be able to transform the code dynamically, adding extra functionality, and reducing boilerplate code.

- They are a way to have `metaprogramming` in TypeScript, which is a programming technique that enables the programmer to create code that uses other code from the application itself as data.

---

### Decorator configuration

- To enable experimental support for decorators, you must enable the experimentalDecorators compiler option either on the command line or in your tsconfig.json

  ```bash
  # command line
  tsc --target ES5 --experimentalDecorators
  ```

  ```json
  // tsconfig.json:
  {
    "compilerOptions": {
      "target": "ES5",
      "experimentalDecorators": true
    }
  }
  ```

---

### Decorator Composition

Decorator Composition is an important concept as it allows us to use multiple decorators on a single class member or declarations. The evaluation of these compositions is similar to the function composition that we will see in our mathematics class `(i.e (f ∘ g)(x) is equivalent to f(g(x)))`.

- the expression for each decorator will be evaluated from `top to bottom`
- the results are called from `bottom to top`

```ts
function outer() {
  console.log("Outer: expression");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Outer: result");
  };
}

function inner() {
  console.log("Inner: expression");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Inner: result");
  };
}

class DecoratorComposition {
  @outer()
  @inner()
  run() {}
}
const decoratorComposition = new DecoratorComposition();
decoratorComposition.run();
// resu;ts:
// Outer: expression
// Inner: expression
// Inner: result
// Outer: result
```

---

### Class Decorator

Class Decorator is very similar to inheriting from another class.

- Decorators are functions that accepts functions as a parameter as it's applied to functions or classes

```ts
const classDecorator = (target: Function) => {
  // do something with your class
};

@classDecorator
class Rocket {}
```

```ts
// ---------Using Decorator--------- //
function BankCard(constructor: Function) {
  constructor.prototype.cardId = Math.floor(Math.random() * 1000);
}

@BankCard
class HSBCBankCard {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// ---------Using class extends--------- //
class BankCard {
  cardId: number;
  constructor() {
    this.cardId = Math.floor(Math.random() * 1000);
  }
}

class HSBCBankCard extends BankCard {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
}
```

---

## Namespace

look at it online

---

## Bundling Typescript with Webpack

```bash
npm install webpack webpack-cli webpack-dev-server typescript ts-loader --save-dev
```

### For Development

- in `package.json` add this script :

  ```json
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack"
    },
  ```

- For `development` --> create `webpack.config.js` file that contains this :

  ```js
  const path = require("path");

  module.exports = {
    mode: "development",
    entry: "./src/app.ts",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "dist",
    },

    // this part is for Adding TypeScript Support with the ts-loader Package

    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.ts$/, // regular expression
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
  };
  ```

---

### For Production

- in `package.json` add this script :

  ```json
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack --config webpack.config.prod.js"
    },
  ```

- install `clean-webpack-plugin` package to clean the `dist` folder whenever we **rebuild** the project

```bash
npm i --save-dev clean-webpack-plugin
```

- For `Production` --> create `webpack.config.prod.js` file that contains this :

  ```js
  const path = require("path");
  const CleanPlugin = require("clean-webpack-plugin");

  module.exports = {
    mode: "production",
    entry: "./src/app.ts",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    devtool: "none",
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    plugins: [new CleanPlugin.CleanWebpackPlugin()],
  };
  ```

---

## 3rd Party JS-Libraries for TypeScript

- search for library's name like this : `lodash types` and go to the npm page and follow the steps and it will also take you to
  [here](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types)
