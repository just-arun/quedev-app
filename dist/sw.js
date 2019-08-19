importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/workbox-sw.js')

// --------------------------------------------------
// Configure
// --------------------------------------------------

// Set workbox config
workbox.setConfig({
  "debug": false
})

// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()

workbox.precaching.cleanupOutdatedCaches()

// Enable offline Google Analytics tracking
workbox.googleAnalytics.initialize()

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets

workbox.precaching.precacheAndRoute([
  "/",
  "/create/",
  "/trending/"
], {
  "cacheId": "client-prod",
  "directoryIndex": "/"
})

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
workbox.routing.registerRoute(new RegExp(''), new workbox.strategies.NetworkFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp(''), new workbox.strategies.NetworkFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp(''), new workbox.strategies.NetworkFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp(''), new workbox.strategies.NetworkFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp(''), new workbox.strategies.NetworkFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp(''), new workbox.strategies.NetworkFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/_nuxt/'), new workbox.strategies.CacheFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/'), new workbox.strategies.NetworkFirst ({}), 'GET')
