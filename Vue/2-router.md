# INDEX

- [INDEX](#index)
  - [Routing](#routing)
    - [Router configuration and setup](#router-configuration-and-setup)
      - [History](#history)
      - [Nested Routes](#nested-routes)
      - [Dynamic params](#dynamic-params)
    - [`route` vs `router`](#route-vs-router)
    - [Navigate from a link: `router-Link`](#navigate-from-a-link-router-link)
    - [Navigate programmatically](#navigate-programmatically)
    - [Scroll Behavior (Scroll To Top)](#scroll-behavior-scroll-to-top)
    - [Route Meta Fields](#route-meta-fields)
    - [Navigation Guards](#navigation-guards)
      - [Using meta for navigation guards](#using-meta-for-navigation-guards)

---

## Routing

### Router configuration and setup

- in `main.js`, we setup the `vue-router` and configure it to our app using these methods imported from `vue-router`:
  - `create-router` method to create the router
  - `createWebHistory` method to use the built-in browser mechanism to remember when the user came from/to
- we also pass the routes array which contains object for each route with its responding component
- finally we use(**register**) the router in our app using:
  - `app.use(router)` -> in `main.js` file
  - `<router-view />` in the parent route to show the place for the nested(child) route
    - it's a global component registered in the `main.js` file

```js
// in main.js
const router = createRouter({
  history: createWebHistory(), // used to enable history-mode in the browser
  routes: [
    { path: "/", redirect: "/teams" }, // redirect to another Path to show the other path in the URL
    {
      name: "teams",
      path: "/teams",
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [ // nested routes
        {
          name: "team-members",
          path: ":teamId", // without "/" in the beginning
          component: TeamMembers,
          props: true, // to tell vue that this component can take the query-parameter as a prop
        }, // /teams/t1
      ],
    }, // our-domain.com/teams => TeamsList
    {
      path: "/users",
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      // Navigation Guards
      beforeEnter(to, from, next) {
        console.log("users beforeEnter");
        console.log(to, from);
        next();
      },
    },
    { path: "/:notFound(.*)", component: NotFound }, // Fallout path
  ],
  linkActiveClass: "active", // changing default class name from vue for active-link
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 }; // scroll to top of the page
  },
});

router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    next();
  } else {
    next();
  }

router.afterEach(function(to, from) {
  // sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});
```

> **Note**: You can use `alias` instead of `redirect`, so that you can have 2 routes that point to the same component
> `alias : "/teams"`

---

#### History

It's used to track the browser history

**history: createWebHistory()**: used to enable history-mode in the browser (instead of hash # mode)

- **history-api**: it lets you interact with the **browseHistory** to change URL without refreshing the page

```js
history: createWebHistory(process.env.BASE_URL);
// BASE_URL="/" // can be modified in vue UI
```

---

#### Nested Routes

```sh
/user/johnny/profile                     /user/johnny/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

- **Note**: you must use `<router-view />` in the parent route to show the place for the nested(child) route
  - it's a global component registered in the `main.js` file

#### Dynamic params

- in routing-options for the route you can use this `props: true` to:
  - tell vue that this component can take the `params/queryParams` as a prop

---

### `route` vs `router`

**route** -> store information about where you are (`quereyParams`, `URL`, `params`)

**router** -> the tool that allows user to navigate anywhere in the app

---

### Navigate from a link: `router-Link`

Instead of the built-in anchor `<a>` tag where it loads a different page (and reload the entire app) and hence loose the current `state`, but instead a special anchor tag where the browser default of loading a different page is prevented and instead, the `view-router` takes over and analyzes the link the user clicked and that downloads the appropriate component and updates the URL

- it internally uses `slots` so that we can type what to show as link text

- `<router-link>` takes `to` directive instead of href

  - `to="/"` -> for string route

- **Styling**:

  - `<router-link></router-link>` acts like `<a>` in **css**
  - There're special css-classes added by router-link to the created anchor-tag `<a>`:
    - `.router-link-active`
      - applied automatically when its target route is matched (contains part of the route).
    - `.router-link-exact-active`
      - applied automatically when its target route is an exact-match
  - or you can make an **alias** for this class with different name in the router options (change the default classes for the active state)

    ```js
    routes=[],
    linkExactActiveClass:"text-yellow-500", // replacing the active class with this class instead of the: `.router-link-active`
    ```

  - By default, Vue sets an active-class (`router-link-active`) on the clicked link -> so we can style it in **CSS** using this class

    - also in the link you can set the active class for this link only using `exact-active-class="no-active"`, (usually with the page logo in the navbar):

      ```js
      <router-link to='/' exact-active-class='no-active'></router-link>
      ```

    - `:to="{name : Home}"` for binding route (not string)

- **caching components of routes (watching the route)**:

  - when we a `<router-link>` for the same component but different params to be displayed in the component, the `$router` doesn't destroy the component (it just changes the URL), so we need to **watch** any change in the route using a **Watcher**

  ```js
  watch: {
    $route(newRoute){
      // the code in the created life-cycle or any handling changes code
    }
  }
  ```

---

### Navigate programmatically

```js
// literal string path
this.$router.push('/users/eduardo');

// object with path
this.$router.push({ path: '/users/eduardo' });

// named route with params to let the router build the url --> (params="/:username")
this.$router.push({ name: 'user', params: { username: 'eduardo' } });

// with query, resulting in /register?plan=private
this.$router.push({ path: '/register', query: { plan: 'private' } });

// with hash, resulting in /about#team
this.$router.push({ path: '/about', hash: '#team' });
```

---

### Scroll Behavior (Scroll To Top)

When using client-side routing, we may want to **scroll to top when navigating to a new route**, or **preserve the scrolling position of history entries** just like real page reload does.

- Vue Router allows you to achieve these and even better, **allows you to completely customize the scroll behavior on route navigation**.

```js
// in the router configuration
scrollBehavior() {
    return { left: 0, top: 0 }; // scroll to top of the page
  },
```

---

### Route Meta Fields

Sometimes, you might want to **attach arbitrary information to routes** like transition names, who can access the route, etc. This can be achieved through the meta property which accepts an object of properties and can be accessed on the route location and navigation guards.

```js
const routes = [
  {
    path: '/posts',
    component: PostsLayout,
    children: [
      {
        path: 'new',
        component: PostsNew,
        // only authenticated users can create posts
        meta: { requiresAuth: true }
      },
      {
        path: ':id',
        component: PostsDetail,
        // anybody can read a post
        meta: { requiresAuth: false }
      }
    ]
  }
];
```

---

### Navigation Guards

Here we have **global-guards** & **local-guards** & **Per-Route Guard**

They are used to guard navigation. either by redirecting it or canceling it. There are a number of ways to hook into the route navigation process: globally, per-route, or in-component (locally).

> it can be in the route-object or in the component's script or the router-file outside the route-object

- Global Guards (in the router file but outside its configuration):

  - `beforeEach()`

- In-Component Guards (local guards):

  - `beforeEnter()`

- Per-Route Guard (in routes array):

  - `beforeRouteLeave()`
  - `beforeRouteEnter()`
  - `beforeRouteUpdate()`

- We use `next()` to confirm/cancel navigation:

  ```js
  // to confirm navigation:
  next(); // Or
  next(true);

  // ---------------------------------- //
  // to cancel navigation:
  next(false);

  // ---------------------------------- //
  // to cancel navigation and redirect to another route:
  next('/teams');
  // Or
  if (to.name === 'teams') {
    next();
  } else {
    next({ name: 'teams' });
  }
  ```

#### Using meta for navigation guards

instead of this:
![alt](./img/routes.PNG)

we use this:
![alt](./img/meta.PNG)

---
