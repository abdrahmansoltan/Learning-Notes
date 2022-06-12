## INDEX

- [INDEX](#index)
- [Progressive Web Apps PWA](#progressive-web-apps-pwa)
  - [PWA Components](#pwa-components)
    - [Manifest](#manifest)
    - [Service Workers](#service-workers)
    - [HTTPS](#https)

---

## Progressive Web Apps PWA

It's a term used to describe a set of features and APIs in the browser

PWAs are better than the mobile web and offer a much faster, reliable and engaging experience. If implemented well, they offer an integrated/immersive mobile experience

![pwa](./img/pwa.png)

- Progressive Web Apps are user experiences that have the reach of the web, and are:

  - reliable
  - fast
  - engaging

### PWA Components

![pwa](./img/pwa2.png)

#### Manifest

- It defines how the application is displayed to the user and how it gets launched. All metadata related to the app is also defined here — starting URL, full and short name, link icons, splash screen and so on.

- creating manifest -> [making app installable](https://web.dev/install-criteria/)

#### Service Workers

- It's a Javascript file that runs in the background Asynchronously
- Service workers **enable offline work mode**, background syncs and push notifications. Caching and storage APIs available to service works allow pre-caching of content. As defined on Google developer, a service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don’t need a web page or user interaction.
  ![service worker](./img/serviceworker.PNG)
- caching ![caching](./img/caching.PNG)

#### HTTPS

- For security and preventing hackers from seeing your requests
