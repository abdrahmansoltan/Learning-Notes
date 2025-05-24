# INDEX

- [INDEX](#index)
  - [Typescript with Node.js](#typescript-with-nodejs)
    - [TS with Express](#ts-with-express)
      - [Solution 1: Adding type annotation when needed in Express](#solution-1-adding-type-annotation-when-needed-in-express)
      - [Solution 2: Twist Express library to work with TS classes](#solution-2-twist-express-library-to-work-with-ts-classes)
  - [Using Decorators](#using-decorators)
    - [Wrong way of using decorators](#wrong-way-of-using-decorators)
    - [Using Decorators with Metadata (common approach)](#using-decorators-with-metadata-common-approach)
  - [Controller Decorator](#controller-decorator)
    - [Route path](#route-path)
    - [Route Binder](#route-binder)
  - [The `use` Decorator](#the-use-decorator)

---

## Typescript with Node.js

- In order to have good coupling between Typescript and Node.js, we need to use `Decorators`
  - Decorators are a feature of Typescript that allow us to annotate classes, methods, properties, parameters, etc. with metadata
- `ts-node` is a package that allows us to run Typescript code directly in Node.js without the need to compile it to JavaScript first

### TS with Express

The issue with using Typescript with Express is that Express is a library that is mostly written in JavaScript, and it doesn't have good support for Typescript out of the box.

- The main issue is that the type definition files for Express are not always accurate, and they don't always match the actual implementation of the library
- This can lead to issues when using Express with Typescript, as we might get errors that are not actually errors, or we might not get errors when we should
- So, we need to be careful when using Express with Typescript, and we need to make sure that we're using the correct types for the library

#### Solution 1: Adding type annotation when needed in Express

```sh
# Install express types declaration file
npm i -D @types/express
```

- Simple type annotation with the help of type declaration file

  ```ts
  import express, { Request, Response } from 'express';

  const app = express();

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
  });
  ```

- The issue with integrating TS and express usually comes from using `Middlewares`

  - Because usually middlewares are implemented in javascript, and then Typescript won't be able to know the type of properties that might get (added / removed / modified) to/from the express library through the middlewares
  - Even sometimes the type definition files may have types because they're assuming that we're using specific middlewares, which may cause errors and problems if we didn't follow the assumption and didn't use these middlewares, for example:

    ```ts
    // The Request interface has a "body" type with type "any" in the declaration file, even though it won't have the "body" property if we didn't use the "bodyparser" middleware

    app.use(bodyParser.urlencoded({ extended: true }));
    // ...
    app.post('/', (req: Request, res: Response) => {
      const { email, password } = req.body; // HERE

      res.send(email + password);
    });
    ```

- The issue with that the type definition isn't always accurate also in this example:

  ```ts
  // The Request interface has a "body" type with type "any" in the declaration file, So, we won't be able to check if the "body" object contains the correct properties or not (email, password)

  app.post('/', (req: Request, res: Response) => {
    const { email, password } = req.body; // HERE
    // TS gives no error, even if the "body" object doesn't contain the "email" or "password" properties, or contains them in different keys like ("mail", "pass")

    res.send(email.toLowerCase()); // Assuming that "email" is a string, TS won't give an error if it's not a string
  });
  ```

  - A bad solution to this problem is to modify the type declaration file to make the type of the "body" property to be an object with the correct properties, but this is a bad solution because we're modifying the type declaration file which is a 3rd party file, and we shouldn't modify it ❌
  - A better solution is to create custom types that extend the original types from the type declaration file, and then use these custom types instead of the original types

    ```ts
    // Create a custom type that extends the original type from the type declaration file
    interface RequestWithBody extends Request {
      body: { [key: string]: string | undefined }; // { email: string, password: string }
    }

    // Use the custom type instead of the original type
    app.post('/', (req: RequestWithBody, res: Response) => {
      const { email, password } = req.body; // HERE
      // TS gives an error if the "body" object doesn't contain the "email" or "password" properties, or contains them in different keys like ("mail", "pass")

      res.send(email.toLowerCase()); // TS gives an error if "email" is not a string

      // OR use a type guard to check if the "body" object contains the correct properties or not
      if (email) {
        res.send(email.toLowerCase());
      } else {
        res.send('Email is required');
      }
    });
    ```

- Note:

  - Some middlewares type declaration files might be written in a good way that doesn't cause any problems, like the `cookie-session` middleware, as it actually extends the `Request` interface and adds the `session` property and other properties to it, so we don't need to create a custom type for it

    ```ts
    // cookie-session type declaration file
    declare namespace Express {
      interface Request extends CookieSessionInterfaces.CookieSessionRequest {}
    }
    // ...
    declare namespace CookieSessionInterfaces {
      interface CookieSessionRequest {
        session?: any;
        [propertyName: string]: any; // out of the box
      }
    }
    ```

---

#### Solution 2: Twist Express library to work with TS classes

Here, we want to make express (which is mostly written in a functional way) to work with classes (which is the OOP way that TS uses)

- 2 ways:
  ![twist express](./img/ts-with-express-1.png)

  - The easy way just adds an outer layer of code that uses express in a functional way, and then we use this outer layer in our classes

    ```ts
    class Server {
      private app: express.Application;

      constructor() {
        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(router);
      }
      // ...
      start(): void {
        this.app.listen(3000, () => {
          console.log('Listening on port 3000');
        });
      }
    }
    ```

    - This is not recommended because we're adding an extra layer of code that we don't need, and will make the developer experience worse

  - The hard way is to modify the express library itself to work with classes, and then we use the modified express library in our classes
    - This is the best solution, but it's hard and time consuming, and we need to be very familiar with the express library code
    - If done correctly it will significantly enhance the developer experience and make it easier to work with express
    - It usually involves using [Decorators](./1-TypeScript.md#decorators) to modify the express library code

---

---

## Using Decorators

### Wrong way of using decorators

- We can use multiple decorators to annotate a class, method, etc.

- For example, we can use decorators to annotate a class as a controller, and then annotate methods within that class as `routes`

  ```ts
  const router = Router();

  class LoginController {
    @get('/login') // Decorator to annotate a method as a route
    getLogin(req: Request, res: Response): void {
      res.send('Hello');
    }
  }

  // Decorator to annotate a class as a controller
  function get(path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      router.get(path, target[key]);
    };
  }

  // ------------------------------------------------------------
  // This is equivalent to:

  class LoginController {
    getLogin(req: Request, res: Response): void {
      res.send('Hello');
    }
  }

  loginController = new LoginController();
  router.get('/login', loginController.getLogin);
  ```

- The problem with this approach is that the order in which the decorators are executed is not guaranteed and can lead to unexpected results

  - For example, if we have a decorator that is executed before the decorator that annotates a method as a route, then the route will not be registered
  - This is because the decorator that annotates a method as a route is executed before the decorator that annotates a class as a controller
  - This is common when we want to use `middleware` in our routes

  - EX:

    ```ts
    const router = Router();

    class LoginController {
      @get('/login') // Decorator to annotate a method as a route
      @use(logger) // Decorator to annotate a method as a middleware
      getLogin(req: Request, res: Response): void {
        res.send('Hello');
      }
    }

    // Decorator to annotate a class as a controller
    function get(path: string) {
      return function (target: any, key: string, desc: PropertyDescriptor) {
        router.get(path, target[key]);
      };
    }

    // Decorator to annotate a method as a middleware
    function use(middleware: RequestHandler) {
      return function (target: any, key: string, desc: PropertyDescriptor) {
        router.use(target[key]); // This will be executed before the decorator that annotates a method as a route
      };
    }
    ```

- As you can see, we need to track the order in which the decorators are executed, which is not ideal, and can lead to unexpected results

---

### Using Decorators with Metadata (common approach)

- This is the same approach used in the [ts-express-decorators](https://www.npmjs.com/package/ts-express-decorators) library

- Steps:
  ![Steps](./img/metadata-decorators-1.png)
- **Metadata** is data about data
  ![Metadata](./img/metadata-decorators-2.png)

  - In this case, we want to store data about the classes, methods, etc. that we annotate with decorators
  - We can store this data in the `Reflect` object

- In order to use metadata, we need to :

  1. enable the `experimentalDecorators` and `emitDecoratorMetadata` options in the `tsconfig.json` file

     ```json
     {
       "compilerOptions": {
         // ...
         "experimentalDecorators": true, // Enable decorators
         "emitDecoratorMetadata": true // Enable metadata
       }
     }
     ```

  2. Install the `reflect-metadata` package, which is a polyfill for the `Reflect` object

     ```bash
     npm i reflect-metadata
     ```

     - It adds a new variable `Reflect` to the **global scope**

- How `metadata` work?

  - It allows us to store data about the objects/classes that will be invisible to the Typescript compiler and only accessible when calling the `Reflect` object

    ```ts
    import 'reflect-metadata'; // Import the polyfill

    const plane = {
      color: 'red'
    };

    // Add metadata to the plane object
    Reflect.defineMetadata('note', 'hi there', plane);

    // Get the metadata from the plane object
    const note = Reflect.getMetadata('note', plane);
    console.log(note); // hi there

    console.log(plane); // { color: 'red' } -> the metadata is not visible to the Typescript compiler
    ```

    ![Metadata](./img/metadata-decorators-3.png)

  - So, it let us attach data to an object that is not visible to the Typescript compiler

- Example of using metadata with class methods:

  ```ts
  import 'reflect-metadata';

  class LoginController {
    @get('/login')
    getLogin(req: Request, res: Response): void {
      res.send('Hello');
    }
  }

  // Decorator to annotate a method as a route
  function get(path: string) {
    Reflect.defineMetadata('path', path, target, key);
  }

  // Get the metadata from the LoginController class
  const path = Reflect.getMetadata('path', LoginController.prototype, 'getLogin');
  console.log(path); // '/login'
  ```

- Now, we can use metadata to store data about the classes, methods, etc. that we annotate with decorators, which will help us to avoid the problem of the order in which the decorators are executed

  ```ts
  import 'reflect-metadata';

  class LoginController {
    @get('/login')
    @printMetadata
    getLogin(req: Request, res: Response): void {
      res.send('Hello');
    }
  }

  // Decorator to annotate a method as a route
  function get(path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
    };
  }

  // Decorator to print the metadata
  function printMetadata(target: any) {
    // loop through all the methods in the target class and print the metadata
    for (let key in target.prototype) {
      const path = Reflect.getMetadata('path', target.prototype, key);
      console.log(path); // '/login'
    }
  }
  ```

---

## Controller Decorator

- We can create a decorator that will be executed when we annotate a class as a controller

### Route path

```ts
import 'reflect-metadata';

const router = Router();

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send('Hello');
  }
}

// Decorator to annotate a class as a controller (Will be executed when we annotate a class as a controller after the class method decorators)
function controller(routePrefix: string) {
  return function (target: Function) {
    for (let key in target.prototype) {
      // Register the route
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler); // '/auth/login'
      }
    }
  };
}

// Decorator to annotate a method as a route
function get(path: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata('path', path, target, key);
  };
}
```

---

### Route Binder

It is common to have multiple methods in a controller class, so we can create a decorator that will be executed when we annotate a class as a controller, and will register all the routes **with different HTTP methods**

- Option 1: separate decorators for each HTTP method

  ```ts
  import 'reflect-metadata';

  const router = Router();

  @controller('/auth')
  class LoginController {
    @get('/login')
    getLogin(req: Request, res: Response): void {
      res.send('Hello');
    }

    @post('/login')
    postLogin(req: Request, res: Response): void {
      res.send('Hello');
    }
  }

  function controller(routePrefix: string) {
    return function (target: Function) {
      for (let key in target.prototype) {
        // Register the route
        const routeHandler = target.prototype[key];
        const path = Reflect.getMetadata('path', target.prototype, key);
        const method: Methods = Reflect.getMetadata('method', target.prototype, key); // to handle different HTTP methods not just "GET"

        if (path) {
          router[method](`${routePrefix}${path}`, routeHandler); // '/auth/login'
        }
      }
    };
  }

  function get(path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', 'get', target, key);
    };
  }
  function post(path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', 'post', target, key);
    };
  }
  ```

- Option 2: use a generic decorator for all HTTP methods ✅

  ```ts
  import 'reflect-metadata';

  const router = Router();

  @controller('/auth')
  class LoginController {
    @routeBinder('get', '/login')
    getLogin(req: Request, res: Response): void {
      res.send('Hello');
    }

    @routeBinder('post', '/login')
    postLogin(req: Request, res: Response): void {
      res.send('Hello');
    }
  }

  function controller(routePrefix: string) {
    return function (target: Function) {
      for (let key in target.prototype) {
        // Register the route
        const routeHandler = target.prototype[key];
        const path = Reflect.getMetadata('path', target.prototype, key);
        const method: Methods = Reflect.getMetadata('method', target.prototype, key); // to handle different HTTP methods not just "GET"

        if (path) {
          router[method](`${routePrefix}${path}`, routeHandler); // '/auth/login'
        }
      }
    };
  }

  // Generic decorator for all HTTP methods
  function routeBinder(method: Methods, path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  }
  ```

  - Usually, the `routeBinder` decorator is defined in a separate file

    ```ts
    // routes-decorators.ts
    import 'reflect-metadata';

    export enum Methods {
      get = 'get',
      post = 'post',
      put = 'put',
      patch = 'patch',
      delete = 'delete'
    }

    function controller(routePrefix: string) {
      return function (target: Function) {
        for (let key in target.prototype) {
          // Register the route
          const routeHandler = target.prototype[key];
          const path = Reflect.getMetadata('path', target.prototype, key);
          const method: Methods = Reflect.getMetadata('method', target.prototype, key); // to handle different HTTP methods not just "GET"

          if (path) {
            router[method](`${routePrefix}${path}`, routeHandler); // '/auth/login'
          }
        }
      };
    }

    function routeBinder(method: Methods, path: string) {
      return function (target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata('path', path, target, key);
        Reflect.defineMetadata('method', method, target, key);
      };
    }

    export const get = routeBinder(Methods.get, path);
    export const post = routeBinder(Methods.post, path);
    export const put = routeBinder(Methods.put, path);
    export const patch = routeBinder(Methods.patch, path);
    export const del = routeBinder(Methods.delete, path);
    ```

    ```ts
    // login-controller.ts
    import { get, post, controller } from './routes-decorators';

    @controller('/auth')
    class LoginController {
      @get('/login')
      getLogin(req: Request, res: Response): void {
        res.send('Hello');
      }

      @post('/login')
      postLogin(req: Request, res: Response): void {
        res.send('Hello');
      }
    }
    ```

---

## The `use` Decorator

- We can create a decorator that will be executed when we annotate a method as a middleware

  ```ts
  import 'reflect-metadata';

  const router = Router();

  @controller('/auth')
  class LoginController {
    @get('/login')
    getLogin(req: Request, res: Response): void {
      res.send('Hello');
    }

    @use(logger)
    @post('/login')
    postLogin(req: Request, res: Response): void {
      res.send('Hello');
    }
  }

  function controller(routePrefix: string) {
    return function (target: Function) {
      for (let key in target.prototype) {
        // Register the route
        const routeHandler = target.prototype[key];
        const path = Reflect.getMetadata('path', target.prototype, key);
        const method: Methods = Reflect.getMetadata('method', target.prototype, key); // to handle different HTTP methods not just "GET"

        const middlewares = Reflect.getMetadata('middlewares', target.prototype, key) || []; // get the middlewares from the metadata

        if (path) {
          router[method](`${routePrefix}${path}`, ...middlewares, routeHandler); // Here, we add the middlewares array (in the order it was inserted in) to the route by using the spread operator
        }
      }
    };
  }

  function routeBinder(method: Methods, path: string) {
    // same as before
  }

  // Decorator to annotate a method as a middleware
  function use(middleware: RequestHandler) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      const middlewares = Reflect.getMetadata('middlewares', target, key) || []; // Create array of middlewares if it doesn't exist so that we can use multiple middlewares ⚠️
      Reflect.defineMetadata('middlewares', [...middlewares, middleware], target, key); // add the new middleware to the middlewares array in the metadata
    };
  }
  ```

---

[Back to top](#index)
