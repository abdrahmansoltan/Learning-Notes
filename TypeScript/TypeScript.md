## INDEX

- [INDEX](#index)
- [Installing](#installing)
  - [Compiling](#compiling)
    - [Compiling one TS file](#compiling-one-ts-file)
    - [Compiling intire project with all its files](#compiling-intire-project-with-all-its-files)
  - [Configuring & Compiling TypeScript](#configuring--compiling-typescript)
    - [Compiling one TS file](#compiling-one-ts-file-1)
    - [Compiling intire project with all its files](#compiling-intire-project-with-all-its-files-1)
- [TypeScript Basics](#typescript-basics)
  - [Typing](#typing)
  - [Implicit Typing and Explicit Typing](#implicit-typing-and-explicit-typing)
- [Types](#types)
  - [`arrays`](#arrays)
  - [`enum`](#enum)
  - [`Objects and Interfaces`](#objects-and-interfaces)
    - [`Objects`](#objects)
    - [`Interfaces`](#interfaces)
  - [`unknown`](#unknown)
  - [`Union Types`](#union-types)
  - [`Literal Types`](#literal-types)
  - [Type Aliases ---(custom type)](#type-aliases----custom-type)
  - [function](#function)
    - [`function type`](#function-type)
    - [`void`](#void)
    - [`never`](#never)
- [Type Assertions / Type Casting](#type-assertions--type-casting)
- [Classes](#classes)
  - [Using Interfaces with classes](#using-interfaces-with-classes)
  - [Access Modifiers](#access-modifiers)
- [Generics](#generics)
- [Promises](#promises)
- [Decorators (not complete yet ...)](#decorators-not-complete-yet-)
  - [Decorator configuration](#decorator-configuration)
- [Namespace](#namespace)
- [Bundling Typescript with Webpack](#bundling-typescript-with-webpack)
  - [For Development](#for-development)
  - [For Production](#for-production)
- [3rd Party JS-Libraries for TypeScript](#3rd-party-js-libraries-for-typescript)

---

## Installing

- [refrence](https://classroom.udacity.com/nanodegrees/nd0067-fwd-t3/parts/cd0292/modules/c0ad589b-67b3-4791-931f-9b0fa8ac0ed3/lessons/f92490de-12fb-4c61-a74a-3889a4727954/concepts/061049c2-7fdf-4d69-868b-e51c64c7ceef)

```bash
$ npm i typescript    # save to dependencies
$ npm i typescript --save-dev    # save to devDependencies

npm i --save-dev ts-node

npm i --save-dev @types/node

```

---

### Compiling

#### Compiling one TS file

- `tsc` is the command used to compile `typescript` to `javascript`

- un `html` file -> always use the javascript file and not the `TS` file

- `watch mode` : like live-server

  ```bash
  tsc app.ts --watch   # or --w
  ```

---

#### Compiling intire project with all its files

- To use TypeScript, you need to add a script to your `package.json` file to `compile` TypeScript to JavaScript. This is generally called your "`build`" script

  - this command will `transpile` TypeScript to JavaScript

  ```json
  "scripts": {
      "build": "npx tsc"
    },
  ```

---

### Configuring & Compiling TypeScript

#### Compiling one TS file

- `tsc` is the command used to compile `typescript` to `javascript`

- un `html` file -> always use the javascript file and not the `TS` file

- `watch mode` : like live-server

  ```bash
  tsc app.ts --watch   # or --w
  ```

---

#### Compiling intire project with all its files

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
    "target": "es5",
    "module": "commonjs",
    "lib": ["ES2018", "DOM"],

    "outDir": "./build", // distination folder will have JS files

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
- `outDir` - where you want your src code to output to. Often named build, prod, or server (when using it serverside)
- `strict` - enable strict typing
- `noImplicitAny` - disallow the "any" type (covered in TypeScript Basics)
- `exclude` - directories to exclude in compiling
- for `Depuging` --> use `"sourceMap": true`

---

## TypeScript Basics

### Typing

- JavaScript is `Weakly-Typed`.

  - This means that types are assigned by the interpreter based on the data and makes an educated guess when the code's intention is ambiguous. This can lead to unintended results.

- TypeScript is a static and strong typed superset of JavaScript. When we're done with our TypeScript code, it compiles to JavaScript.

![typescript](./img/typescript.PNG)

- why use Typescript ?

![typescript](./img/whytypescript.PNG)

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

## Types

### `arrays`

```ts
// 1) Array
let arr: string[]; // array of strings
let arr2: (string | number)[]; // array of strings or numbers

// 2) Tuple
// When you know exactly what data will be in the array with a fixed length and their type-order, and you will not be adding to the array or modifying the type for any value
let arr: [string, number, string]; // ['cat', 7, 'dog']
```

### `enum`

- An enum in TypeScript is a collection of `constants`. That’s it.
- You use an enum when you have a constant set of values that will not be changed.
- it assigns labels to numbers

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

- you create an abstract class as an `interface` for creating classes. With TypeScript, interfaces are simply used as the blueprint for the shape of something. Interfaces can be used to create functions but are most commonly seen to create objects.
- Use `PascalCase` for naming `interfaces`.

```js
interface Student {
  name: string;
  age: number;
  enrolled: boolean;
}
let newStudent: Student = { name: "Maria", age: 10, enrolled: true };
```

---

### `unknown`

- used when the type of the thing being typed is `unknown`. Used heavily for `type assertion`
- Requires a `type check`
- `unknown` is recommended over `any` because it provides **safer typing** — you have to use type assertion or narrow to a specific type if you want to perform operations on unknown.

```ts
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// type assertion
if (typeof userInput === "string") {
  userName = userInput;
}
```

---

### `Union Types`

- used when more than one type can be used

```ts
let studentPhone: number | string;
studentPhone = "(555) 555 - 5555";
studentPhone = 5555555555;
```

### `Literal Types`

- A `literal` is a more concrete sub-type of a collective type. What this means is that "Hello World" is a string, but a string is not "Hello World" inside the type system.
- usually usesd with `union-types`

- There are **three** sets of literal types available in TypeScript today: `strings`, `numbers`, and `booleans`, by using literal types you can allow an exact value which a string, number, or boolean must have.
- ex :

```ts
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" // Literal Types
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
```

---

### Type Aliases ---(custom type)

Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

- Type aliases do not create a new type; they rename a type. Therefore, you can use it to type an object and give it a descriptive name.
- once a type alias is created, it can not be added to; it can only be extended.

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
// here the condition is to have 2 number-paraneters & return a number

function add(n1: number, n2: number) {
  return n1 + n2;
}

combineValues = add; // this works as (add) is a function that matches the condition
```

#### `void`

- used as a return type when the function returns **nothing**

  ```ts
  function printResult(num: number): void {
    console.log("Result: " + num);
  }
  ```

#### `never`

- used as a return type when the function will never return anything as it crashes due to an `error`, such as with functions that throw errors or infinite loops

```ts
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // or
  // while (true) {}
}
```

---

## Type Assertions / Type Casting

Type Assertions are used to tell TypeScript that even though TypeScript thinks it should be one type, it is actually a different type. Common to see when a type is unknown

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

A generic is a way to write a function that is reusable across different types.

- why not just use `any`?
  - `any` allows for any type to go in, and any type to come out.
  - Using a `generic` means a number goes in and a number comes out or a string goes in and a string comes out.
  - `Generics` introduce the `Type Variable`
    - Rather than being a variable that accepts values, it's a variable that accepts types and is denoted with angle brackets myFunc`<T>`

```js
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

## Decorators (not complete yet ...)

Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members.

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
