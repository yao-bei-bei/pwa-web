/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("/pwa-web/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/pwa-web/workbox-v3.6.3"});

importScripts(
  "/pwa-web/precache-manifest.ac6d594be42b1fb620af9b39d7d8644a.js"
);

workbox.core.setCacheNameDetails({prefix: "nippon-color"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("undefined/index.html", {
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});

workbox.routing.registerRoute(/.*\.js/, workbox.strategies.networkFirst({ "cacheName":"my-js-cache","matchOptions":{"ignoreSearch":true}, plugins: [{ cacheWillUpdate: () => { console.log(`%c js cacheWillUpdate`, `color:#006DCB;`); }, cacheDidUpdate: () => { console.log(`%c js cache update`, `color:#006DCB;`); }, cachedResponseWillBeUsed: () => { console.log(`%c js cachedResponseWillBeUsed`, `color:#006DCB;`); }, requestWillFetch: () => { console.log(`%c js cache requestWillFetch`, `color:#006DCB;`); }, fetchDidFail: () => { console.log(`%c js cache fetchDidFail`, `color:red;`); } }, new workbox.expiration.Plugin({"maxEntries":5,"maxAgeSeconds":60,"purgeOnQuotaError":false}), new workbox.backgroundSync.Plugin("my-jsqueue-name", {"maxRetentionTime":3600}), new workbox.broadcastUpdate.Plugin("my-jsupdate-channel"), new workbox.cacheableResponse.Plugin({"statuses":[200]})] }), 'GET');
workbox.routing.registerRoute(/.*/, workbox.strategies.networkFirst({ "cacheName":"my-api-cache","matchOptions":{"ignoreSearch":true}, plugins: [{ cacheDidUpdate: () => { console.log(`%c api cache update`, `color:#006DCB;`); } }, new workbox.expiration.Plugin({"maxEntries":5,"maxAgeSeconds":60,"purgeOnQuotaError":false}), new workbox.backgroundSync.Plugin("my-queue-name", {"maxRetentionTime":3600}), new workbox.cacheableResponse.Plugin({"statuses":[200]})] }), 'GET');
