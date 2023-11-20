'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8a2ad7869d338cf2f8935e67d1445ac",
".git/config": "0b620034dad8e2ffbcd868c74d47029a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ed4ec3190476770cc23d049d90808ae4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5f15d2943f4c8de16b37f0098e3ff2c1",
".git/logs/refs/heads/main": "a5365a8c826ce090cd4f287fae4f2073",
".git/logs/refs/remotes/origin/main": "af708a50bedb408b0b3858d7a85be0c6",
".git/objects/00/06aed7f2055bd6eafaea5d17033030f5db8700": "8bb37854b402f6431f7287961bcdf602",
".git/objects/00/4e2a03b17fa16fb031a3d90aa14792231bccb3": "dc2dca51f1dedd71e754050a297f4f36",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/00/cb793cb0fcd171bce517de4272002e679077a0": "63a61a353d5f8f38d11b4ee062a315e3",
".git/objects/02/842d69ee38d5b7e4ba6ed21c124ea4dafe04e7": "dbf4a59cd13dddffb50f62aecdfd70e9",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/f0c81adcd86d927820643e6cec5cb1e0607ebb": "02cdd91cc42f170f7935432e446e48e0",
".git/objects/0e/b3c4679ada70802d9668ca848ed8ceda125084": "3977178082203aeb1694fbc48872bcbc",
".git/objects/13/8c1acbf1d740f249c72817594c1214fea6f959": "eb3143dae4ead8dc09062ebd5792d2fa",
".git/objects/17/52b1d3cd74e76e5c116191da0eec8f30c6bd3d": "170a0d96eed2c6244437d274241d84c1",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/28/6b583725be3c2525b7c06d5f9f7f6b7024b8d9": "b625c75915e4f69f5f2c069215249b5b",
".git/objects/29/a60f00d926d8eeac1e24f983b67c6a00407605": "0eec7bfde7d05965ced00bb0ffea40ff",
".git/objects/2c/06cb5e6d0264830c06fc3f962ddd2d5cff0f79": "be85418ecbc832be0e26d4b89b21541b",
".git/objects/2d/6cf0872d7e52e28844f4070aff6988f1335074": "7e411150c0446791468d077080bc7bcd",
".git/objects/36/a3178be0b69df0da45f56ca738b053a1094c2b": "86f433dd44f04a702149c0860b1ffc3e",
".git/objects/3f/6449ee57499a18cb86a63ee772c06a69c96d17": "47bc5cd7d41c5d6b5242186ee59ddceb",
".git/objects/43/26e4f09c2b65f0646a91fcba49ab0bbb574d94": "d088eb5164145f7647fd4e422d9cae52",
".git/objects/46/d55d1440b2b2db85c0c9cdfe32b6488d11a773": "49e04db10a0622a32b0079b6d4bfaf34",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/5049ad86d5d19641ca770a49cc752a95a5a48c": "494043624c59a88d04f60786b8d4140f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/6546ad07a4bdf8aff96a4b16676dbd89a994c7": "e8fb8ec1c0cd63a706248fff3957472a",
".git/objects/63/bb9cb28fbee14542fcddaea9ba793c77238678": "bd097d4b77cb20412446a492f0dc4738",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/72/611059bf544da9fc1e25da07b26101b8b9cf8e": "45103c8cb9fbeea7dd832c0e29dccdcc",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/79/df34454ea8919ba3af85c326588d8e5bb18c7b": "9b527536aa3b08607100baca010460be",
".git/objects/81/70e2a9989d39f99a400fe25277088f3de9edd7": "e949f93d65b56b41a20a8a33eede5bb0",
".git/objects/84/aa78a1435525da052a9d6b754674381fec0cf9": "7deee86f48789f2e337cb71fd2a05c1e",
".git/objects/86/2cb37e406218bb6ce81693378cdf14d0194e83": "59a9a7818911d070aed2876cf3d413f2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/dcd9913d2de0e9465cde30f2c2c8edc0c9482a": "d0b3ed3f1516bbe4d0aff726acc1f46a",
".git/objects/97/80231132f0112d2e15adfbc18ddea18ba8452e": "de424549c9ab74a318985ad74ea49465",
".git/objects/9d/58996a4a917bd0612ace491d62d07499b4f72f": "0d2817dcc696e564f46d313fff35c0af",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a5/b7dc65c72c305460a65fa77e45a37578f03940": "b0a80d82802042660fa1623b60452902",
".git/objects/a9/d54028fcb0ac80aa3bf6415f4b46795ddc0623": "de146f0dd5ba5c6db5935501f4cf81c8",
".git/objects/b4/0565c442f9bddb5b00a673c4728ba454f9bd17": "eb4ea683c363aa60e5278c2dbaa22d8a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/912af6b7850c00fc011ebf9e5ba7e1116fa978": "79d38ab314f21558e3b154c925c550b0",
".git/objects/c3/0a52ec307942a39e588560b526256b1b50ec44": "07cde0ebb9b30cc7fb372159b048160f",
".git/objects/c7/fd7d86e171aa5a14bf2d5c21c1253b883bef89": "fe5a7e2c0c97b32cee59c0cfd5678d59",
".git/objects/cb/530fea6d2b2026445d49d5cd7b15165fc60956": "cd98dad116e9b41b53f85bd49530d1a5",
".git/objects/cb/a23d3a39927119cad8d616cf057bef6064b0f7": "d6b837979d79d8fc559c07bcba7f3dd8",
".git/objects/ce/8a0407af949b72ec28bc97f6e702c47be0e22b": "741c0973cfb90f73ec84b9b587b2014c",
".git/objects/d0/a02f9642080792408a2d357983e909e16318e3": "763e4573934ec82b1d47dbeb310b6ce8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/c4a0fa52b59c5e54c06449eb5fa7501eaebea6": "851cefa5d5f7697f8cdb06345f7fdd77",
".git/objects/e1/675fa814c8bd6c593bce4aedf51b061c37225c": "52ae3cfd3d28bec1a7ce5ed5c5441f32",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f9/2cdf7d4856ea643212d935b464fdf9b276d3ff": "3b2d55318ddc41176e8e44d0e4be3704",
".git/refs/heads/main": "fd6a2b758242202820b480c085fce512",
".git/refs/remotes/origin/main": "fd6a2b758242202820b480c085fce512",
"assets/AssetManifest.bin": "594601979697f09d50f6cf116813f4aa",
"assets/AssetManifest.bin.json": "3b8afc0af374a25be0ade8e7c66ba3bf",
"assets/AssetManifest.json": "59a4e74fe8eee93575639b4a4f06b51d",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/android.svg": "f91533128e7fc485f0cd473f6b5776af",
"assets/assets/images/dev_img.png": "076fb1f001b59e8de650b08cff19fb58",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/ruler.svg": "823f016d6be3604c32e861dbd1c862ce",
"assets/assets/images/slider.svg": "15778d585c86bb87026e3c6ad548ef50",
"assets/FontManifest.json": "9079600dd6cc1457502d9273b45170aa",
"assets/fonts/MaterialIcons-Regular.otf": "5bff5a7e295e99bcfd38fadba0c5d57c",
"assets/NOTICES": "68c3eec8058cc9e24f213534c86b9c79",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bf9dd8accb0960b2619485770f693bec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/canvaskit.js.symbols": "7bc7b816cc2ea20158b8f96a99960393",
"canvaskit/canvaskit.wasm": "2a1addcc316c372baa0080f30b85a0e3",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/chromium/canvaskit.js.symbols": "8d26e71c60c1539a22231b253ee1a999",
"canvaskit/chromium/canvaskit.wasm": "ab0a0eb3c22e0ceaf46512d4ff17545e",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/skwasm.js.symbols": "e03a50cb20ff6c262729d11295ac5454",
"canvaskit/skwasm.wasm": "feeb27aea29a9e626a87f2dac168933a",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a269cf7bcffcd7ed6cb0ca9ed509ceba",
"/": "a269cf7bcffcd7ed6cb0ca9ed509ceba",
"main.dart.js": "420c1d589a94f1a12b2cf8b1e97e666e",
"manifest.json": "aee7c4007fda52a6824c76eec5a84487",
"version.json": "cc132570d6d238130e38adc59e1f998d"};
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
