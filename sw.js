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
self.addEventListener('fetch',function(e){
    e.respondWith(
        caches.match(e.request).then(function(response){
            if(response != null){
                return response
            }
            return fetch(e.request.url)
        })
    )
})
self.addEventListener('activate',function(e){
    e.waitUntil(
        //获取所有cache名称
        caches.keys().then(cacheNames => {
            return Promise.all(
                // 获取所有不同于当前版本名称cache下的内容
                cacheNames.filter(cacheNames => {
                    return cacheNames !== cacheStorageKey
                }).map(cacheNames => {
                    return caches.delete(cacheNames)
                })
            )
        }).then(() => {
            return self.clients.claim()
        })
    )
})

