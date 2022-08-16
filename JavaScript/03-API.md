## INDEX

- [INDEX](#index)
- [Notes](#notes)
- [APIs Resources](#apis-resources)
- [Geolocation API](#geolocation-api)
- [Leaflet API](#leaflet-api)
  - [installation](#installation)
  - [code](#code)
- [Local Storage](#local-storage)

---

## Notes

- if you are using hosted version of an Api => don't forget to put `defer` in the `<script>` part of it in the HTML `<head>`

---
## APIs Resources
- [puplic-Api repo](https://github.com/public-apis/public-apis)

---

## Geolocation API

- [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples)
- The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.
- retrieve a user's location information in your web app, for example to plot their location on a map, or display personalized information relevant to their location.
- The developer can now access this location information in a couple of different ways:
  - `Geolocation.getCurrentPosition()`: Retrieves the device's current location.
  - `Geolocation.watchPosition()`: Registers a handler function that will be called automatically each time the position of the device changes, returning the updated location.
- In both cases, the method call takes up to three arguments:
  - A **mandatory** `success callback`: If the location retrieval is successful, the callback executes with a `GeolocationPosition` object as its only parameter, providing access to the location data.
  - An **optional** `error callback`: If the location retrieval is unsuccessful, the callback executes with a `GeolocationPositionError` object as its only parameter, providing access information on what went wrong.
  - **optional** object which provides options for retrieval of the position data.

```javascript
navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log(position);

    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);
  },
  function () {
    alert("Could not get your position");
  }
);
```

---

## Leaflet API

- [documentation](https://leafletjs.com/SlavaUkraini/)
- it's a library for mobile-friendly interactive `maps`

### installation

- go to [download](https://leafletjs.com/SlavaUkraini/download.html) page and choose to ues hosted version or `NPM`
- go to [tutorial](https://leafletjs.com/SlavaUkraini/examples.html) page and follow the steps

### code

```javascript
// map from (L) object
map = L.map("map").setView(coords, zoomLevel);
// setView method takes 2 parameters :
// 1. coords => array of [latitude, longitude]
// 2. zoomLevel => number of how much to set the zoom of the view

L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
// the href can be change for different looks of the map

// see (marker) on the documentation

// Handling clicks on map
map.on("click", callbackFunction);
```

---

## Local Storage

- The `localStorage` read-only property of the `window` interface allows you to access a `Storage` object for the Document's origin; the stored data is saved across browser sessions. ![local storage](./img/localStorage.png)
- The keys and the values stored with localStorage are always in the `UTF-16 DOMString format`, which uses two bytes per character. As with objects, integer keys are automatically converted to `strings`.
- localStorage is `Blocking`, so it can slow down the app
- _note_ : when you `get` items from `localStorage`, they lose the `prototype Chain` they had

```javascript
// ---------------add data item to localStorage //object--------------- //
localStorage.setItem("myCat", "Tom");

// ---------------reading the localStorage item--------------- //
const cat = localStorage.getItem("myCat");

// ---------------removing the localStorage item--------------- //
localStorage.removeItem("myCat");

// ---------------removing all the localStorage //items--------------- //
localStorage.clear();

/////////////////////////////////////////////////
// if value is not a string (here (workouts) is an array) => convert it using ( JSON.stringify() )
localStorage.setItem('workouts', JSON.stringify(workouts));
// then to read the item => use ( JSON.parse() )
const data = JSON.parse(localStorage.getItem('workouts'));
```

---
