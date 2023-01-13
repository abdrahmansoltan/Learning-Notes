# INDEX

- [INDEX](#index)
  - [Routing](#routing)
    - [Router configuration and setup](#router-configuration-and-setup)
      - [History](#history)
        - [History Modes](#history-modes)
      - [Scroll Behavior (Scroll To Top)](#scroll-behavior-scroll-to-top)
  - [Routes](#routes)
    - [Named Routes](#named-routes)
    - [Redirecting and Alias](#redirecting-and-alias)
      - [Redirecting](#redirecting)
      - [Alias](#alias)
    - [`route` vs `router`](#route-vs-router)
    - [Navigate from a link: `router-Link`](#navigate-from-a-link-router-link)
    - [Nested Routes (Views)](#nested-routes-views)
      - [Nested Named Views](#nested-named-views)
    - [Navigate programmatically](#navigate-programmatically)
  - [Params](#params)
    - [add params to route](#add-params-to-route)
    - [Dynamic params](#dynamic-params)
      - [Reacting to Params Changes](#reacting-to-params-changes)
    - [Routes Matching Syntax](#routes-matching-syntax)
    - [Catch all / 404 Not found Route](#catch-all--404-not-found-route)
  - [Navigation Guards](#navigation-guards)
    - [Global Guards](#global-guards)
      - [Global Before Guards](#global-before-guards)
      - [Global After Guards](#global-after-guards)
    - [Per-Route Guard](#per-route-guard)
    - [In-Component Guards](#in-component-guards)
  - [Route Meta Fields](#route-meta-fields)
    - [Using meta for navigation guards](#using-meta-for-navigation-guards)
  - [Lazy Loading Routes](#lazy-loading-routes)

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

// 0. Create the router instance and pass the `routes` option
const router = createRouter({
  // 1. enable hash-history-mode in the browser
  history: createWebHistory(),

  // 2. Define some routes
  routes: [
    // Each route should map to a component.
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

  // 3. changing default class name from vue for active-link
  linkActiveClass: "active",

  // 4. Modify scrolling behavior
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

// 5. Create and mount the root instance.
const app = Vue.createApp({})

// 6. Make sure to _use_ the router instance to make the whole app router-aware.
app.use(router)

app.mount('#app')

```

> **Note**: You can use `alias` instead of `redirect`, so that you can have 2 routes that point to the same component
> `alias : "/teams"`

---

#### History

The history option when creating the router instance allows us to choose among different history modes.

- It's used to determine how the browser is going to track the user history (what routes the user has been on)
- **history-api**: it lets you interact with the **browseHistory** to change URL without refreshing the page

##### History Modes

- Hash Mode:
  - It uses a hash character (`#`) before the actual URL that is internally passed.
  - Because this section of the URL is never sent to the server, it doesn't require any special treatment on the server level.
  - It does however have a bad impact in **SEO**. If that's a concern for you, use the HTML5 history mode.
- HTML5 Mode:

  - **history: createWebHistory()**: used to enable history-mode in the browser (instead of hash `#` mode)

    ```js
    history: createWebHistory(process.env.BASE_URL);
    // BASE_URL="/" // can be modified in vue UI
    ```

  - The URL will look "normal," e.g. `https://example.com/user/id`.
  - But, Since our app is a **single page client side app**, without a proper server configuration, the users will get a `404` error if they access `https://example.com/user/id` directly in their browser. Now that's ugly.
  - To fix the issue, all you need to do is add a simple `catch-all` fallback route to your server.
    - If the URL doesn't match any static assets, it should serve the same `index.html` page that your app lives in. Beautiful, again!

- Memory mode:
  - The memory history mode doesn't assume a browser environment and therefore doesn't interact with the URL nor automatically triggers the initial navigation.
  - This makes it **perfect for Node environment and SSR**
  - > While it's not recommended, you can use this mode inside Browser applications but note there will be no history, meaning you won't be able to go back or forward.

---

#### Scroll Behavior (Scroll To Top)

When using client-side routing, we may want to scroll to top when navigating to a new route, or preserve the scrolling position of history entries just like real page reload does.

- Vue Router **allows you to completely customize the scroll behavior on route navigation**.

  ```js
  // in the router configuration
  scrollBehavior (to, from, savedPosition) {
    // return desired position
    // "savedPosition", is only available if this is a "popstate navigation" (triggered by the browser's back/forward buttons).
  }
  // EX:
  scrollBehavior() {
      return { left: 0, top: 0 }; // scroll to top of the page
    },
  ```

- You can also pass a CSS selector or a DOM element via `el` option. In that scenario, `top` and `left` will be treated as relative offsets to that element.

  ```js
    scrollBehavior(to, from, savedPosition) {
      // always scroll 10px above the element #main
      return {
        el: '#main',
        // OR: el: document.getElementById('main'),
        top: -10,
      }
    },

    // EX: scroll to anchor
    scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // if the browser supports it
      }
    }
  },
  ```

- Delaying the scroll:

  ```js
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  }
  ```

---

## Routes

### Named Routes

Alongside the `path`, you can provide a `name` to any route. This has the following advantages:

- No hardcoded URLs
- Automatic encoding/decoding of params
- Prevents you from having a typo in the url

---

### Redirecting and Alias

#### Redirecting

Redirecting is also done in the routes configuration. To redirect from `/home` to `/`:

```js
const routes = [{ path: '/home', redirect: '/' }];
// or
const routes = [{ path: '/home', redirect: { name: 'homepage' } }];
```

> **Note** that [Navigation Guards](#navigation-guards) are not applied on the route that redirects, only on its target. e.g. In the above example, adding a `beforeEnter` guard to the `/home` route would not have any effect.

#### Alias

A **redirect** means when the user visits `/home`, the URL will be replaced by `/`, and then matched as `/`. But what is an **alias**?

- An alias of `/` as `/home` means when the user visits `/home`, the URL remains `/home`, but it will be matched as if the user is visiting `/`.

  ```js
  const routes = [{ path: '/', component: Homepage, alias: '/home' }];
  ```

- Note about **SEO**: when using aliases, make sure to define [canonical links](https://support.google.com/webmasters/answer/139066?hl=en).

---

### `route` vs `router`

**route** -> store information about where you are (`quereyParams`, `URL`, `params`)

**router** -> the tool that allows user to navigate anywhere in the app

---

### Navigate from a link: `router-Link`

Instead of using regular `<a>` tags, we use a custom component `router-link` to create links. This allows Vue Router to change the URL without reloading the page, handle URL generation as well as its encoding.

> Instead of the built-in anchor `<a>` tag where it loads a different page (and reload the entire app) and hence loose the current `state`, but instead a special anchor tag where the browser default of loading a different page is **prevented** and instead, the `view-router` takes over and analyzes the link the user clicked and that downloads the appropriate component and updates the URL

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

### Nested Routes (Views)

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

- A rendered component can also contain its own, nested `<router-view>`. For example, if we add one inside the User component's template:

  ```html
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <!-- corresponding nesting route component will be rendered here -->
    <router-view></router-view>
  </div>
  ```

- To render components into this nested `router-view`, we need to use the `children` option in any of the routes:

  ```js
  const routes = [
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'profile',
          component: UserProfile
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ];
  ```

- **Note**: you must use `<router-view />` in the parent route to show the place for the nested(child) route
  - it's a global component registered in the `main.js` file and used in the top-parent component e.g. `App.vue`
  - > it's responsible for watching the URL and swapping the dynamic content on the screen based on what is in the route file

#### Nested Named Views

It is possible to create complex layouts using named views with nested views. When doing so, you will also need to give nested `router-view` a **name**:

```sh
/settings/emails                                       /settings/profile
+-----------------------------------+                  +------------------------------+
| UserSettings                      |                  | UserSettings                 |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
| | Nav | UserEmailsSubscriptions | |  +------------>  | | Nav | UserProfile        | |
| |     +-------------------------+ |                  | |     +--------------------+ |
| |     |                         | |                  | |     | UserProfilePreview | |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
+-----------------------------------+                  +------------------------------+

# Nav is just a regular component
# UserSettings is the parent view component
# UserEmailsSubscriptions, UserProfile, UserProfilePreview are nested view components
```

```html
<!-- UserSettings.vue -->
<div>
  <h1>User Settings</h1>
  <NavBar />
  <router-view />
  <router-view name="helper" />
</div>

<script>
    {
    path: '/settings',
    // You could also have named views at the top
    component: UserSettings,
    children: [{
      path: 'emails',
      component: UserEmailsSubscriptions
    }, {
      path: 'profile',
      components: {
        default: UserProfile,
        helper: UserProfilePreview // this is what the "name" attribute uses
      }
    }]
  }
</script>
```

---

### Navigate programmatically

Aside from using `<router-link>` to create anchor tags for declarative navigation, we can do this programmatically using the `$router` instance methods.

- Navigate to a different location:

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

- Replace current location:

  - It acts like `router.push`, the only difference is that **it navigates without pushing a new history entry**, as its name suggests - it replaces the current entry.

  ```js
  router.replace({ path: '/home' });
  // equivalent to
  router.push({ path: '/home', replace: true });
  ```

- Traverse history:

  - This method takes a single integer as parameter that indicates by how many steps to go forward or go backward in the history stack, similar to `window.history.go(n)`.

  ```js
  // go forward by one record, the same as router.forward()
  router.go(1);

  // go back by one record, the same as router.back()
  router.go(-1);

  // go forward by 3 records
  router.go(3);

  // fails silently if there aren't that many records
  router.go(-100);
  router.go(100);
  ```

> **Note:** You may have noticed that `router.push`, `router.replace` and `router.go` are counterparts of `window.history.pushState`, `window.history.replaceState` and `window.history.go`, and they do imitate the [window.history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API).

---

## Params

### add params to route

- this is done by the `query` params

  ```js
  this.$router.push({
    name: 'JobResults',
    query: {
      role: this.role,
      location: this.location
    }
  });
  ```

---

### Dynamic params

```js
const routes = [
  // dynamic segments start with a colon
  { path: '/users/:id', component: User }
  // Now URLs like "/users/johnny" and "/users/jolyne" will both map to the same route.
];
```

- in routing-options for the route you can use this `props: true` to:
  - tell vue that this component can take the `params/queryParams` as a prop so we can use it in the component without using the `$route.params` object to reach it as we can define it directly as a prop in the component

```js
const User = {
  // make sure to add a prop named exactly like the route param
  props: ['id'],
  template: '<div>User {{ id }}</div>' // instead of $route.params.id
};
const routes = [{ path: '/user/:id', component: User, props: true }];
```

#### Reacting to Params Changes

One thing to note when using routes with `params` is that when the user navigates from `/users/johnny` to `/users/jolyne`, **the same component instance will be reused**. Since both routes render the same component, this is more efficient than destroying the old instance and then creating a new one. However, **this also means that the lifecycle hooks of the component will not be called**.

- **Important:** To react to `params` changes in the same component:

  1. you can simply `watch` anything on the `$route` object, in this scenario, the `$route.params`:

     ```js
     const User = {
       template: '...',
       created() {
         this.$watch(
           () => this.$route.params,
           (toParams, previousParams) => {
             // react to route changes...
           }
         );
       }
     };
     ```

  2. Or, use the `beforeRouteUpdate` navigation guard,

---

### Routes Matching Syntax

When defining a `param` like `:userId`, we internally use the following regex `([^/]+)` (at least one character that isn't a slash `/`) to extract params from URLs. This works well unless you need to differentiate two routes based on the param content. Imagine two routes **`/:orderId`** and **`/:productName`**, both would match the exact same URLs, so we need a way to differentiate them.

- The easiest way would be to add a static section to the path that differentiates them:

  ```js
  const routes = [
    // matches /o/3549
    { path: '/o/:orderId' },
    // matches /p/books
    { path: '/p/:productName' }
  ];
  ```

- But in some scenarios we don't want to add that static section `/o/p`. However, `orderId` param is always a number while `productName` param can be anything, so we can specify a **custom regex for a param in parentheses**:

  ```js
  const routes = [
    // /:orderId -> matches only numbers
    { path: '/:orderId(\\d+)' }, // Make sure to escape backslashes (\) like we did with \d (becomes \\d) to actually pass the backslash character in a string in JavaScript.

    // /:productName -> matches anything else
    { path: '/:productName' }
  ];
  ```

  - Now, going to `/25` will match `/:orderId` while going to anything else will match `/:productName`. The order of the routes array doesn't even matter!

- **Optional parameters:** You can also mark a parameter as optional by using the `?` modifier:

  ```js
  const routes = [
    // will match "/users" and "/users/posva"
    { path: '/users/:userId?' },
    // will match /users and /users/42
    { path: '/users/:userId(\\d+)?' }
  ];
  ```

---

### Catch all / 404 Not found Route

Regular `params` will only match characters in between url fragments, separated by `/`. If we want to match anything, we can use a custom param **regexp** by adding the **regexp** inside parentheses right after the param:

```js
const routes = [
  // will match everything and put it under `$route.params.pathMatch`
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

  // OR: Fallout path
  { path: '/:notFound(.*)', component: NotFound },

  // will match anything starting with `/user-` and put it under `$route.params.afterUser`
  { path: '/user-:afterUser(.*)', component: UserGeneric }
];
```

---

## Navigation Guards

Used to guard navigations either by redirecting it or canceling it. There are a number of ways to hook into the route navigation process: **globally (global-guards)**, **in-component (local-guards)** or **Per-Route Guard**

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

    // This is wrong:
  }
  if (to.name === 'teams') {
    next();
  }
  next({ name: 'teams' }); // if the user is not authenticated, `next` is called twice
  ```

### Global Guards

#### Global Before Guards

```js
const router = createRouter({ ... })

router.beforeEach((to, from) => {
  // ...
  // explicitly return false to cancel the navigation
  return false
})
```

- can optionally return any of the following values:

  - `false`: cancel the current navigation. If the browser URL was changed (either manually by the user or via back button), it will be reset to that of the from route.
  - A Route Location: Redirect to a different location by passing a route location as if you were calling `router.push()`, which allows you to pass options like `replace: true` or `name: 'home'`.

    - The current navigation is dropped and a new one is created with the same `from`.

    ```js
    router.beforeEach(async (to, from) => {
      const canAccess = await canUserAccess(to);

      if (
        // make sure the user is authenticated
        !canAccess &&
        // ❗️ Avoid an infinite redirect
        to.name !== 'Login'
      ) {
        // redirect the user to the login page
        return { name: 'Login' };
      }
    });
    ```

#### Global After Guards

You can also register global `after` hooks, however unlike guards, these hooks do not get a `next()` function and cannot affect the navigation:

```js
router.afterEach((to, from) => {
  sendToAnalytics(to.fullPath);
});
```

- They are useful for **analytics**, changing the title of the page, accessibility features like announcing the page and many other things.

---

### Per-Route Guard

You can define `beforeEnter` guards directly on a route's configuration object:

```js
const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: (to, from) => {
      // reject the navigation
      return false;
    }
  }
];
```

- **Notes:**

  - `beforeEnter` guards only trigger when entering the route, they don't trigger when the `params`, `query` or `hash` change e.g. They are only triggered when navigating from a different route.
  - You can also pass an array of functions to beforeEnter, this is useful when reusing guards for different routes:

    ```js
    beforeEnter: [removeQueryParams, removeHash],
    },
    ```

---

### In-Component Guards

- You can add the following options to route components:

  - `beforeRouteEnter`

    - called before the route that renders this component is confirmed.
    - does NOT have access to `this` component instance because it has not been created yet when this guard is called!
    - However, you can access the instance by passing a callback to `next()`. The callback will be called when the navigation is confirmed, and the component instance will be passed to the callback as the argument `vm`:

      ```js
      beforeRouteEnter (to, from, next) {
        next(vm => {
          // access to component public instance via `vm`
        })
      }
      ```

      - Note that `beforeRouteEnter` is the only guard that supports passing a callback to `next()`. For `beforeRouteUpdate` and `beforeRouteLeave`, `this` is already available, so passing a callback is unnecessary and therefore not supported:

- `beforeRouteUpdate`
  - called when the route that renders this component has changed, but this component is reused in the new route.
    - EX: when we navigate between `/users/1` and `/users/2`
  - Because the component is mounted while this happens, the navigation guard has access to `this` component instance.
- `beforeRouteLeave`

  - called when the route that renders this component is about to be navigated away from.
  - it has access to `this` component instance.
  - It's usually used to prevent the user from accidentally leaving the route with unsaved edits. The navigation can be canceled by returning `false`.

    ```js
    beforeRouteLeave (to, from) {
      const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      if (!answer) return false
    }
    ```

---

## Route Meta Fields

Sometimes, you might want to **attach arbitrary information to routes** like "transition names", "who can access the route", etc. This can be achieved through the `meta` property which accepts an object of properties and can be accessed on the route location and navigation guards.

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

// using meta fields
router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !auth.isLoggedIn()) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath }
    };
  }
});
```

### Using meta for navigation guards

instead of this:
![alt](./img/routes.PNG)

we use this:
![alt](./img/meta.PNG)

---

## Lazy Loading Routes

When building apps with a bundler, the JavaScript bundle can become quite large, and thus affect the page load time. It would be more efficient if we can split each route's components into separate chunks, and only load them when the route is visited.

- Vue Router supports **dynamic imports** out of the box, meaning you can replace static imports with dynamic ones:

  ```js
  // replace:
  // import UserDetails from './views/UserDetails'

  // with:
  const UserDetails = () => import('./views/UserDetails.vue');

  const router = createRouter({
    // ...
    routes: [{ path: '/users/:id', component: UserDetails }]
  });
  ```

- When using a bundler like **webpack**, this will automatically benefit from **code splitting**

  - you can also use webpack for Grouping Components in the Same Chunk:

    ```js
    const UserDetails = () => import(/* webpackChunkName: "group-user" */ './UserDetails.vue');
    const UserDashboard = () => import(/* webpackChunkName: "group-user" */ './UserDashboard.vue');
    ```
