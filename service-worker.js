/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/choeruii_blog/Hexo/public/2020/10/01/first-piece-of-blog/index.html","0f82afea04d439e4a32b5de3bf6e3743"],["E:/choeruii_blog/Hexo/public/2020/10/01/hello-world/index.html","9fe112fd2ddf0f37274e9f19ae4e852a"],["E:/choeruii_blog/Hexo/public/2020/10/09/人工智能基本概念/index.html","ab5878f82954a018de6fcbc08fef53ab"],["E:/choeruii_blog/Hexo/public/2020/10/10/回归方法学习笔记/index.html","e914887b13d8d084de2316760614b40b"],["E:/choeruii_blog/Hexo/public/2020/10/18/什么是自动机/index.html","c099e9318641924e410d9ece1dfa5076"],["E:/choeruii_blog/Hexo/public/2021/01/26/常用的元胞自动机/index.html","2ca86b511925b687170fe0c821d1f5db"],["E:/choeruii_blog/Hexo/public/2021/08/25/机器学习&深度学习基本概念简介/index.html","e346f2829d287e8eaa3e407389beceee"],["E:/choeruii_blog/Hexo/public/2021/08/28/机器学习任务攻略/index.html","4b118dc2226ff85425f6f525202d7737"],["E:/choeruii_blog/Hexo/public/2021/10/06/生成对抗网络（GAN）/index.html","4bc47745c0f097b3ebc92c595cb6f444"],["E:/choeruii_blog/Hexo/public/archives/2020/10/index.html","985893ecabc64023b1ce9f25f3b999f0"],["E:/choeruii_blog/Hexo/public/archives/2020/index.html","5bbc446727654c63b973547d892c1091"],["E:/choeruii_blog/Hexo/public/archives/2021/01/index.html","35a37fd827b8c20d2e24e88cbb823dfa"],["E:/choeruii_blog/Hexo/public/archives/2021/08/index.html","1be7d90833217010c0a44fed22a528d4"],["E:/choeruii_blog/Hexo/public/archives/2021/10/index.html","cce25db5efdb43f73be98eeac9838537"],["E:/choeruii_blog/Hexo/public/archives/2021/index.html","83291bd3189e0b42640a9309f8a2693e"],["E:/choeruii_blog/Hexo/public/archives/index.html","95b7d07916ea8b58028baf06fb58093d"],["E:/choeruii_blog/Hexo/public/book/index.html","9c294549fac66400b08139ed2915f35e"],["E:/choeruii_blog/Hexo/public/categories/index.html","9ed9da837ec2260b5ef1e95799c72990"],["E:/choeruii_blog/Hexo/public/css/index.css","6e999d356e6c2664bdf09a1dd7da64fe"],["E:/choeruii_blog/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/choeruii_blog/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/choeruii_blog/Hexo/public/img/Avatar.jpg","dd101542f59d783568af93b1f7d57420"],["E:/choeruii_blog/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/choeruii_blog/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/choeruii_blog/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/choeruii_blog/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/choeruii_blog/Hexo/public/img/index.jpg","a62e25386b329fe8456fc63cc1a4112f"],["E:/choeruii_blog/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/choeruii_blog/Hexo/public/index.html","cf1f0e2b9f5212e601bea30385692d75"],["E:/choeruii_blog/Hexo/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/choeruii_blog/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/choeruii_blog/Hexo/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/choeruii_blog/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/choeruii_blog/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/choeruii_blog/Hexo/public/link/index.html","9d54338030cfc1387ef8db9659ee30cd"],["E:/choeruii_blog/Hexo/public/list/index.html","8149ed694c010f6b2eca21fc1b7e91c2"],["E:/choeruii_blog/Hexo/public/tags/index.html","f18d115904d184f035fc5d4e69761b7e"],["E:/choeruii_blog/Hexo/public/tags/元胞自动机/index.html","bafce9a78607ffbcb6ae3ee9ce6ce7fe"],["E:/choeruii_blog/Hexo/public/tags/拒绝废物指南/index.html","8c800d2eb9031a6445d36f7d9653ab34"],["E:/choeruii_blog/Hexo/public/tags/机器学习-李宏毅-随缘学习笔记/index.html","76f4326c74e2406288deb92127ec846d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







