"use strict";var precacheConfig=[["/index.html","62d8055fecae84013942de907df1f8cd"],["/static/css/main.721e4ac1.css","2cc1d337a14c2b4dba78b92219eadf86"],["/static/js/main.87b9fc92.js","19198446aa28998f489ef322e2562f23"],["/static/media/_DSF9951-colored.972d4f6e.jpg","972d4f6e4ffe82a0ef9050879b0a0315"],["/static/media/avatar.f1d71f77.jpg","f1d71f777331fd7e3de116edf4ee3b67"],["/static/media/bawcon.2ca1ff38.jpg","2ca1ff381d830088304d9523d9dc84f0"],["/static/media/bg.e5241971.jpg","e52419719dd0c4c8b172136f0b625008"],["/static/media/bg7.b08234a2.jpg","b08234a2b7e8e4fb2e3c4e713252021c"],["/static/media/christian.56633ed3.jpg","56633ed3f62f39d71f571374a6409e65"],["/static/media/clem-onojegaw.c058841b.jpg","c058841b1dd64e5f79c6348b24cfb78d"],["/static/media/clem-onojeghuo.216ef03c.jpg","216ef03c54bc13771c5e1b8d8f8d5926"],["/static/media/cynthia-del-rio.9813593c.jpg","9813593cc577a319a2201342ef0fb237"],["/static/media/landing.504d8841.jpg","504d8841954c73fd90b0e07a77b89755"],["/static/media/mariya-georgieva.4575c40b.jpg","4575c40bfb8dec6713d2da51c4c4066e"],["/static/media/olu-eletu.4112cbc1.jpg","4112cbc1477d9e149033c5df66087e16"],["/static/media/profile-bg.baf6b40a.jpg","baf6b40a654b078399e93e3d9cb6d455"],["/static/media/profile.3d8833f6.jpg","3d8833f62fe95232db20d05f516ed1cb"],["/static/media/redditscraper.f74b3841.jpg","f74b3841b321efff47bb83119d348808"],["/static/media/sign.cf8b686b.jpg","cf8b686b294041d0925f4e745b1fabb9"],["/static/media/studio-1.ae0150c0.jpg","ae0150c08dbcc95e4f50458e02e5bd5c"],["/static/media/studio-2.76e2987e.jpg","76e2987ed95634136dd22d4d9e1009a7"],["/static/media/studio-3.1d5451ce.jpg","1d5451ced89eabb55683e27e070bdb60"],["/static/media/studio-4.e064d090.jpg","e064d0908dbd53b55f8980c02b3748bb"],["/static/media/studio-5.ef5c30ea.jpg","ef5c30ea69b7ad740ee6221782c73741"],["/static/media/votechain.a37a07ea.jpg","a37a07eab2d9ec8d08a4fa51c9938eaa"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});