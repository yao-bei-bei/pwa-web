importScripts('workbox.js');
var cacheStorageKey = 'minimal-pwa-2'
var cacheList=[
    '/',
    'favicon.png',
    'index.html',
]
self.addEventListener('install', function(e) {
    console.log('Cache event!')
    // waitUntil用于在安装成功之前做一些预装逻辑
    // 安装内容建议轻量级，避免安装失败
    e.waitUntil(
        // 使用 cache API 打开指定的 cache 文件
        caches.open(cacheStorageKey).then(function(cache) {
            console.log('Adding to Cache:', cacheList)
            // 添加要缓存的文件
            // 缓存文件全部安装成功后，installing会变成installed，安装失败进入redundant状态
            return cache.addAll(cacheList)
        }).then(function() {
            // 跳过waiting,直接进入active
            console.log('Skip waiting!')
            return self.skipWaiting()
        })
    )
});

self.addEventListener('activate', function(e) {
    console.log('Activate event')
    e.waitUntil(
        Promise.all(
            caches.keys().then(cacheNames => {
                return cacheNames.map(name => {
                    if (name !== cacheStorageKey) {
                        return caches.delete(name)
                    }
                })
            })
        ).then(() => {
            console.log('Clients claims.')
            // 通过clients.claim方法，更新客户端上的server worker
            return self.clients.claim()
        })
    )
})
self.addEventListener('fetch',function(e){
    e.respondWith(
        caches.match(e.request).then(function(response){
            if(response != null){
                return response
            }
            return fetch(e.request.url)
        })
    )
});

// 消息体的 title
self.addEventListener('push', event => {
    const title = "Credit Card";
    const options = {
        // 主内容
        "body": "Did you make a $1,000,000 purchase at Dr. Evil...",
        // 视觉配置，如 icon，Badge，image 等，不同的视觉配置展示的位置也不同
        // 详情参看 https://lavas.baidu.com/pwa/engage-retain-users/notification/notification-display
        "icon": "favicon.png",
        // 震动设置，其中的数字以2个为一组，分别表示震动的毫秒数，和不震动的毫秒数
        "vibrate": [200, 100, 200, 100, 200, 100, 400],
        // 铃声
        "sound": "path/to/sound.mp3",
        // 标签，用于客户端消息归类
        "tag": "request",
        // actions，用户操作后会将结果反馈给浏览器
        "actions": [
            { "action": "yes", "title": "Yes", "icon": "images/yes.png" },
            { "action": "no", "title": "No", "icon": "images/no.png" }
        ]
    }
    // 激活通知
    self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', event => {
    // Do something with the event
    event.notification.close();
});

self.addEventListener('notificationclose', event => {
    // Do something with the event
});

// self.addEventListener('activate',function(e){
//     e.waitUntil(
//         //获取所有cache名称
//         caches.keys().then(cacheNames => {
//             return Promise.all(
//                 // 获取所有不同于当前版本名称cache下的内容
//                 cacheNames.filter(cacheNames => {
//                     return cacheNames !== cacheStorageKey
//                 }).map(cacheNames => {
//                     return caches.delete(cacheNames)
//                 })
//             )
//         }).then(() => {
//             return self.clients.claim()
//         })
//     )
// })

