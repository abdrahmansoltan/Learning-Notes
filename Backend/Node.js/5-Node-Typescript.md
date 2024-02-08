# INDEX

- [INDEX](#index)
  - [Typescript with Node.js \& Express](#typescript-with-nodejs--express)
  - [Using Decorators](#using-decorators)
    - [Wrong way of using decorators](#wrong-way-of-using-decorators)
    - [Using Decorators with Metadata (common approach)](#using-decorators-with-metadata-common-approach)
  - [Controller Decorator](#controller-decorator)
    - [Route path](#route-path)
    - [Route Binder](#route-binder)
  - [The `use` Decorator](#the-use-decorator)

---

## Typescript with Node.js & Express

- Read this first: [TS with Express](../../Frontend/TypeScript/5-TS-Dev.md#ts-with-express)

- In order to have good coupling between Typescript and Node.js, we need to use `Decorators`
  - Decorators are a feature of Typescript that allow us to annotate classes, methods, properties, parameters, etc. with metadata

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
