// workbox 2.x 是将 workbox 核心内容放在 workbox-sw node_modules 包里维护的
// workbox 3.x 开始是将 workbox 核心 lib 放在 CDN 维护
// 当然也可以挪到自己的 CDN 维护
importScripts('.workbox.js');
if (workbox) {
  console.log(workbox)
  console.log(`Yay! workbox is loaded 🎉`);
    // 设置相应缓存的名字的前缀和后缀
    workbox.setConfig({
        debug: false,
    });
    workbox.core.setCacheNameDetails({
        prefix: 'pdf-image-vue-cache',
        suffix: 'v1.1.1',
    })
// 缓存web的css资源
    workbox.routing.registerRoute(
        // Cache CSS files
        /.*\.css/,
        // 使用缓存，但尽快在后台更新
        workbox.strategies.staleWhileRevalidate({
            // 使用自定义缓存名称
            cacheName: 'css-cache'
        })
    );

// 缓存web的js资源
    workbox.routing.registerRoute(
        // 缓存JS文件
        /.*\.js/,
        // 使用缓存，但尽快在后台更新
        workbox.strategies.staleWhileRevalidate({
            // 使用自定义缓存名称
            cacheName: 'js-cache'
        })
    );

// 缓存web的图片资源
    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|svg|ttf|woff)$/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'images',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 60,
                    maxAgeSeconds: 1 * 24 * 60 * 60 // 设置缓存有效期为30天
                })
            ]
        })
    );

// 我们很多资源在其他域名上，比如cdn、oss等，这里做单独处理，需要支持跨域
// workbox.routing.registerRoute(
//     /^https:\/\/cdn\.my\.com\/.*\.(jpe?g|png|gif|svg)/,
//     workbox.strategies.staleWhileRevalidate({
//         cacheName: 'cdn-images',
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxEntries: 60,
//                 maxAgeSeconds: 1 * 24 * 60 * 60 // 设置缓存有效期为5天
//             })
//         ],
//         fetchOptions: {
//             credentials: 'include' // 支持跨域
//         }
//     })
// );

//缓存get api请求的数据
    workbox.routing.registerRoute(
        new RegExp(/.*/),
        workbox.strategies.networkFirst({
            cacheName: 'api'
        })
    );

// 缓存post api请求的数据
    const handlerCb = async ({url, request, event, params}) => {
        const response = await fetch(request);
        // console.log(response)
        const responseBody = await response.text();
        // console.log(responseBody)
        return new Response(`${responseBody} <!-- Look Ma. Added Content. -->`, {
            headers: response.headers,
        });
    };
// workbox.routing.registerRoute(
//     new RegExp(/^http:\/\/sop-dev\.dingdao\.com\/.*/),
//     // handlerCb,
//     'POST'
// );
// const bgSyncPlugin = new workbox.backgroundSync.Plugin('api-post', {
//   maxRetentionTime: 1 * 60
// });
//
// workbox.routing.registerRoute(
//     /^http:\/\/sop-dev\.dingdao\.com\/.*/,
//     new workbox.strategies.NetworkOnly({
//          plugins: [bgSyncPlugin]
//      }),
//   'POST'
// );




// self.addEventListener('fetch', event => {
//     console.log('service worker 抓取请求成功: ' + event.request.url)
//     event.respondWith(
//         caches.open("api-post").then(function (cache) {
//             return fetch(event.request).then(function (res) {
//                 cache.put(event.request, res.clone());
//                 console.log(res)
//                 return res;
//             })
//         })
//     )
// })

}
else {
    console.log(`Boo! workbox didn't load 😬`);
}
