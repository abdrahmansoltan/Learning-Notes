# INDEX

- [INDEX](#index)
  - [Best Practices](#best-practices)

---

## Best Practices

- importing services

  - Sometimes, you will find that the import statement (path) for services or other files is too long and complex.
  - To avoid this, you can use **barrel files** (index.ts) to simplify imports.
  - Create an `index.ts` file in the folder where your services are located.
  - In the `index.ts` file, export all the services from that folder.
  - Example:

    - Bad practice ❌

      ```ts
      // Component file
      import { UserService } from '../../services/user.service';
      import { AuthService } from '../../services/auth.service';
      ```

    - Good practice ✅

      ```ts
      // services/index.ts
      export * from './user.service';
      export * from './auth.service';

      // ----------------------------------------

      // Component file
      import { UserService, AuthService } from '../../services';
      ```

    - If you have only one service, it would be overkill to create a barrel file just for that. In that case, it's better to import the service directly.

- Using interfaces over classes for types

  - It's better to define types as **interfaces** rather than `class`es when possible. Because javascript doesn't have interfaces, So the compiled code won't include any extra code for interfaces. But classes will be compiled to javascript code (classes or functions), which adds unnecessary code to the final bundle.

    ```ts
    // Bad practice ❌
    export class User {
      id: number;
      name: string;
      email: string;
    }

    // Good practice ✅
    export interface User {
      id: number;
      name: string;
      email: string;
    }
    ```

- Defining types and interfaces

  - It's a good practice to define types and interfaces in separate files, rather than defining them in the same file as the component or service.
  - This improves organization and maintainability of the codebase.
  - Create a folder named `models` or `types` to store all your type and interface definitions.
  - Example:

    - Bad practice ❌

      ```ts
      // user.component.ts
      export interface User {
        id: number;
        name: string;
        email: string;
      }
      ```

    - Good practice ✅

      ```ts
      // models/user.model.ts
      export interface User {
        id: number;
        name: string;
        email: string;
      }

      // ----------------------------------------

      // user.component.ts
      import { User } from '../models/user.model';
      ```
