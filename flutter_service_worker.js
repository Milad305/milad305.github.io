'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4c4bd2eb46098f97ef1d256c16aae4dd",
"assets/AssetManifest.bin.json": "9b6df10fc09ef73f8a1eafba8d75356d",
"assets/AssetManifest.json": "52b3260cfc80c4a840c9452a2a4420d5",
"assets/assets/font/iransans.ttf": "550e81f9cd5c875d772e8a97e19bbef4",
"assets/assets/images/1-tesso%2520app%2520setting%2520icon.png": "98490a790bdfd11992614c2c11b39ac7",
"assets/assets/images/1-tesso%2520app%2520white%2520icons.png": "b159f260fc59bcd5b80bcba9bb70bb0b",
"assets/assets/images/10-tesso%2520app%2520white%2520icons.png": "bc1fc9a1b3585afa5fdda96e6c81106c",
"assets/assets/images/11-tesso%2520app%2520white%2520icons.png": "228f3f4152d3f84b1c6c51fd8ca5e24e",
"assets/assets/images/12-tesso%2520app%2520white%2520icons.png": "ee387571a2d842521635ddcd2819c9e4",
"assets/assets/images/13-tesso%2520app%2520white%2520icons.png": "ec0f088ad08c2f6274e2bef3d728a26a",
"assets/assets/images/14-tesso%2520app%2520white%2520icons.png": "2d940f74f37ea6013b790786dd3a1a6a",
"assets/assets/images/15-tesso%2520app%2520white%2520icons.png": "dc38d0c6f18db9c6f1f7ae674beb59ea",
"assets/assets/images/16-tesso%2520app%2520white%2520icons.png": "f34943cc61a326e520f3340f29d49d9a",
"assets/assets/images/17-tesso%2520app%2520white%2520icons.png": "9eb11c5680591528c1414af71701b60b",
"assets/assets/images/18-tesso%2520app%2520white%2520icons.png": "54f6829b79c46a66c5e3ac6d234fb825",
"assets/assets/images/19-tesso%2520app%2520white%2520icons.png": "538e07add090ca24d4300047bdf0d696",
"assets/assets/images/2-tesso%2520app%2520setting%2520icon.png": "0b0600c8cdb93305946696d5348c309e",
"assets/assets/images/2-tesso%2520app%2520white%2520icons.png": "37d7a9a0a8c8c9f8999121bde679f667",
"assets/assets/images/20-tesso%2520app%2520white%2520icons.png": "314e38e583d7d912e3c6b7707ac8e3db",
"assets/assets/images/21-tesso%2520app%2520white%2520icons.png": "807691ca3ce6e01dee863056b3a6c412",
"assets/assets/images/22-tesso%2520app%2520white%2520icons.png": "805fb73f8dc96e51c74c627821111fd4",
"assets/assets/images/23-tesso%2520app%2520white%2520icons.png": "35198c419536d0391abac7d71d335856",
"assets/assets/images/3-tesso%2520app%2520setting%2520icon.png": "2f733c9a3b3aaba5b564155f20acd174",
"assets/assets/images/3-tesso%2520app%2520white%2520icons.png": "ebd7a2b528467bae6022b459d428d911",
"assets/assets/images/4-tesso%2520app%2520setting%2520icon.png": "da04efb66785e1aa3ee27a9cc41206d0",
"assets/assets/images/4-tesso%2520app%2520white%2520icons.png": "8c86b7f2a413e8b108bee2d7fa26e3ec",
"assets/assets/images/5-tesso%2520app%2520setting%2520icon.png": "529561c885c420da307ca633c9cc63ab",
"assets/assets/images/6-tesso%2520app%2520setting%2520icon.png": "334f789c35b1e1a85b4a1c889318b6f2",
"assets/assets/images/6-tesso%2520app%2520white%2520icons.png": "e0a9266db82fce2a7a3d3154188830fe",
"assets/assets/images/7-tesso%2520app%2520setting%2520icon.png": "475760a3da4fc87d5adddce6e7843995",
"assets/assets/images/7-tesso%2520app%2520white%2520icons.png": "b04e8f9f1556dccf3204631ba7fbe69c",
"assets/assets/images/8-tesso%2520app%2520setting%2520icon.png": "613074bee1feefc382fa00a92e3fb7ff",
"assets/assets/images/8-tesso%2520app%2520white%2520icons.png": "86f4dba684fc7c882a0092e4358d8449",
"assets/assets/images/9-tesso%2520app%2520setting%2520icon.png": "4576cf20049103760084dd0d01eaad01",
"assets/assets/images/9-tesso%2520app%2520white%2520icons.png": "7193ebd8bbe0432e64868252858e05b7",
"assets/assets/images/background.png": "dbda88ad8d0f9ce112fcfae126a8157d",
"assets/assets/images/xxx.png": "8f993817abc923a901294534c1303574",
"assets/FontManifest.json": "11acf2bccde9313b3127607033f4da8e",
"assets/fonts/MaterialIcons-Regular.otf": "f5ba1548f2f52142cf3f531461469dbb",
"assets/NOTICES": "b25e6b2077ca8c40a2ce803cf5716414",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-1024.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6b1a61fc87f7edeb56cb1265d17d0b96",
"/": "6b1a61fc87f7edeb56cb1265d17d0b96",
"main.dart.js": "af78d0869ce463228079ea390e3f7165",
"manifest.json": "c9fa30d13cb9e9f8c2150188357c3f1f",
"service-worker.js": "b89168fc28548877ae87ac15cd9bf19e",
"version.json": "74eeb008593826c0b4bd1c870326c17c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
