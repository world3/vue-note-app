# vue-note-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Add Service Worker
1. manifest.json
   * manually create or use the online tool to create the manifest.json file; add to /public folder;
   * add link in /public/index.html file:
```html
   <link rel="manifest" href="/manifest.json">
```

2. service worker with workbox
   * install workbox
  ```console
  npm install workbox-cli --global
  ```
   * run workbox
  ```console 
  workbox wizard
  ```
   * run npm build
```console
npm run build
```
   * run workbox, generateSW (this must be run each time after npm build)
```console
workbox generateSW workbox-config.js
```
   * save sw.js file in /dist folder
   * register service worker, add the following to /public/index.html
```javascript
<script>
     if ('serviceWorker' in navigator) {
       window.addEventListener('load', function() {
         navigator.serviceWorker.register('/sw.js');
       });
     }
</script>
```

3. Run production service locally: 
    1. install serve
```
npm install -g serve
```
    2. run production service
```
serve -s dist
```

### Manifest file
1. name
2. short_name
3. theme_color
4. background_color
5. description
6. display: fullscreen, standalone, minimal-ui, browser
7. orientation: any, natural, landscape, landscape-primary, landscape-secondary, portrait, portrait-primary, portrait-secondary
8. scope: a string that defines the navigation socpe. Out of scope url will open in a different browser tab. If the scope is a relative URL, the base URL will be the URL of the manifest.
9.  start_url
10. icons

### Service Worker: 
0. Requirement: 
   1. browser support
   2. HTTP in server (except localhost)
   
1. Life Cycle: (has call backs)
   1. installing
   2. activated
   3. idle
   4. terminated
   5. fetch/post message

2. Core Tech: Promises
   1. Promise has three states: pending (initital), fulfilled, rejected.
   2. Fetch API
   3. Cache (storage of the server file in local)
      1. cache.addAll()
      2. cache.delete()
      3. cache.match()
      4. cache.put()

### Caching Strategies
1. When to store information
   1. best at "install" life cycle
2. When to update
   1. use a version number
   2. Strategies: 
      1. cacheFirst
      2. cacheOnly
      3. networkFirst
      4. stale-while-revalidate
3. Tools: 
```
vue add @vue/pwa
```
This installs Workbox along with the official plug-in.


