const staticCacheName = 'site-static-v4';
const dynamicCacheName = 'site-dynamic-v4';
const assets = [
  '/',
  '/index.html',
  '/content.html',
  '/copyright.html',
  '/inner.html',
  '/puzzle.html',
  '/draw.html',

  '/forchildren/index.html',
  '/android/index.html',

  '/MobileTem.css',
  '/css/cover.css',
  '/css/th.css',
  '/css/connect.css',
  '/css/style_new.css',
  '/css/biz.css',
  '/css/profile.css',
  '/css/comic.ttf',
  '/css/comicbd.ttf',
  '/css/comici.ttf',
  '/css/comicz.ttf',
  '/css/trebuc.ttf',
  '/css/trebucbd.ttf',
  '/css/tt0142m_.ttf',
  
  'js/propeller.js',
  'js/biz.js',
  'js/connect.js',

  '/js/jq.js',
  '/js/nav.js',
  
  '/images/1x1.png',
  '/images/1x1x128.png',
  '/images/1x1x144.png',
  '/images/1x1x152.png',
  '/images/1x1x192.png',
  '/images/1x1x384.png',
  '/images/1x1x512.png',
  '/images/1x1x72.png',
  '/images/1x1x96.png',
  '/images/2x.png',
  '/images/3.png',
  '/images/5.png',
  '/images/6.png',
  '/images/acti.png',
  '/images/b.png',
  '/images/bg.png',
  '/images/bg_book.png',
  '/images/bul.png',
  '/images/bul2.png',
  '/images/oxbrand.png',
  '/images/oxbrand2.png',
  '/images/pg_number.png',
  '/images/wh.png',

  '/images/4.jpg',
  '/images/4x1.jpg',
  '/images/4x2.jpg',
  '/images/4x3.jpg',
  '/images/7.jpg',
  '/images/Scan code.jpg',
  '/images/a.jpg',
  '/images/b.jpg',
  '/images/bg.jpg',
  '/images/bg_book2.jpg',
  '/images/bible.jpg',
  '/images/bible2.jpg',
  '/images/c.jpg',
  '/images/correctx.jpg',
  '/images/cover2.jpg',
  '/images/d.jpg',
  '/images/e.jpg',
  '/images/f.jpg',
  '/images/g.jpg',
  '/images/h.jpg',
  '/images/i.jpg',
  '/images/j.jpg',
  '/images/k.jpg',
  '/images/l.jpg',
  '/images/m.jpg',
  '/images/n.jpg',
  '/images/o.jpg',
  '/images/p.jpg',
  '/images/puzzle.jpg',
  '/images/q.jpg',
  '/images/r.jpg',
  '/images/s.jpg',
  '/images/t.jpg',
  '/images/u.jpg',
  '/images/v.jpg',
  '/images/w.jpg',
  '/images/wrongx.jpg',
  '/images/x.jpg',
  '/images/y.jpg',
  '/images/z.jpg',
  '/images/finger.png',
  './images/puzzle2.jpg',
  'images/starRev.png',
/*
  '/js/app.js',
  '/js/ui.js',
  '/js/materialize.min.js',
  '/css/styles.css',
  '/css/materialize.min.css',
  '/img/dish.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
  '/pages/fallback.html'
*/
];

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('/caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
    }).catch(() => caches.match('/'))
  );
});