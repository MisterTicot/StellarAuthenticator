!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=72)}({0:function(t,e,r){t.exports=r(16)},1:function(t,e){function r(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)})}}},10:function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},16:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",f="executing",p="completed",m={};function d(){}function v(){}function g(){}var y={};y[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(N([])));b&&b!==r&&n.call(b,i)&&(y=b);var x=g.prototype=d.prototype=Object.create(y);function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){var e;this._invoke=function(r,o){function i(){return new Promise(function(e,i){!function e(r,o,i,a){var c=u(t[r],t,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){s.value=t,i(s)},function(t){return e("throw",t,i,a)})}a(c.arg)}(r,o,e,i)})}return e=e?e.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return v.prototype=x.constructor=g,g.constructor=v,g[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(j.prototype),j.prototype[a]=function(){return this},t.AsyncIterator=j,t.async=function(e,r,n,o){var i=new j(s(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},k(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},7:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},72:function(t,e,r){var n=r(73),o=r(74);new n(o.name,o.version,"verbose").fromCache(["/","index.css","index.html","index.js","stellar-sdk.js","browserconfig.xml","manifest.json","favicon.ico","icons/16x16.png","icons/32x32.png","icons/192x192.png","icons/512x512.png","icons/apple-touch.png","icons/mstile.png","icons/safari.svg"]).precache().register()},73:function(t,e,r){var n=r(0),o=r(1),i=r(7),a=r(10),c=2e3,s=t.exports=function(){"use strict";function t(e,r,n){i(this,t),this.name=e,this.version=r,this.verbose=n,this.hostname=location.host.replace(/:.*/,""),this.enabled="localhost"!==this.hostname&&"127.0.0.1"!==this.hostname,this.root="".concat(location.protocol,"//").concat(location.host,"/"),this.startByRoot=new RegExp("^"+this.root),this.timeout=c,this.cacheName="".concat(e,"-").concat(r),this.files={},this.get=[]}return a(t,[{key:"log",value:function(t){this.verbose&&console.log(t)}},{key:"precache",value:function(){return this.get=Object.keys(this.files),this}},{key:"register",value:function(){var t=this;self.addEventListener("install",function(e){var r,n;t.log("Installing ".concat(t.cacheName,"...")),e.waitUntil((r=t,n=t.get,caches.open(r.cacheName).then(function(t){return t.addAll(n)})).then(function(){return self.skipWaiting()}).then(function(){return t.log("".concat(t.cacheName," installed"))}))}),self.addEventListener("activate",function(e){var r;e.waitUntil((r=t.cacheName,caches.keys().then(function(t){return Promise.all(t.map(function(t){t!==r&&caches.delete(t)}))})))}),self.addEventListener("fetch",function(e){if(t.enabled&&"GET"===e.request.method&&e.request.url.match(t.startByRoot)){var r=new Request(e.request.url.replace(/\?.*$/,"")),n=r.url.replace(t.startByRoot,"")||"index.html",o=t.files[n];o&&u[o]?e.respondWith(u[o](t,r,n)):e.respondWith(u.fromNetwork(t,r,n))}})}}]),t}();var u={};function l(t,e,r){var n=r.clone();caches.open(t.cacheName).then(function(t){return t.put(e,n)})}u.fromCache=function(t,e,r){return t.log("Looking for ".concat(r," into ").concat(t.cacheName," cache...")),caches.open(t.cacheName).then(function(t){return t.match(e)})},u.fromNetwork=function(t,e,r){return t.log("Downloading ".concat(r,"...")),new Promise(function(r,n){var o=setTimeout(n,t.timeout);return fetch(e).then(function(t){clearTimeout(o),r(t)})})},u.cacheOrNetwork=function(){var t=o(n.mark(function t(e,r,o){var i,a;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.fromCache(e,r,o);case 2:if(!(i=t.sent)){t.next=5;break}return t.abrupt("return",i);case 5:return t.next=7,u.fromNetwork(e,r,o);case 7:return a=t.sent,l(e,r,a),t.abrupt("return",a);case 10:case"end":return t.stop()}},t)}));return function(e,r,n){return t.apply(this,arguments)}}();var h=function(t){s.prototype[t]=function(e){var r=this;return e.forEach(function(e){return r.files[e]=t}),this}};for(var f in u)h(f)},74:function(t){t.exports=JSON.parse('{"name":"stellar-authenticator","version":"1.0.0","description":"An application to easily & securely sign Stellar transactions","author":"MisterTicot <mister.ticot@cosmic.plus>","homepage":"https://stellar-authenticator.org","repository":"github:cosmic-plus/webapp-stellar-authenticator","license":"MIT","keywords":["cryptocurrency","stellar","authenticator","safe","wallet"],"scripts":{"test":"echo \\"Error: no test specified\\" && exit 1","get":"git submodule update -i --recursive","clean":"rm -rf web/*","prettier":"prettier --write --no-semi \'src/**/*.{js,json,md}\' \'*.{js,json,md}\'","eslint":"eslint --fix \'src/**/*.js\' \'*.js\'","lint":"npm run prettier && npm run eslint","set-dev":"sh setenv.sh -d","set-prod":"sh setenv.sh -p","build-js":"webpack -p && cp -f node_modules/stellar-sdk/dist/stellar-sdk.min.js web/stellar-sdk.js","build-scss":"node-sass style/index.scss -o web -t compressed","build-css":"npm run build-scss && autoprefixer-cli web/index.css","build-static":"cp -a static/. web","build-misc":"cp -f *.md package-lock.json web","build-all":"for i in js css static misc; do npm run build-$i || return; done","build":"npm run clean && npm run set-prod && npm run build-all","rebuild":"npm run get && cp -f web/package-lock.json . && npm ci && npm run build","check":"npm run rebuild && cd web && git status && [ ! \\"$(git status -z)\\" ]","watch-css":"node-sass style/index.scss -wo web","watch-js":"webpack -d --watch","watch-static":"cp -fl static/*.* web","watch":"npm run watch-static && npm run watch-css & npm run watch-js","serve":"npm run set-dev && npm run watch & cd web && live-server --no-browser","commit-web":"cd web && git ci -am \\"$message\\"","commit-main":"git ci -am \\"$message\\"","commit-all":"[ \\"$version\\" ] && npm run commit-web && npm run commit-main","commit-release":"export message=\\"Release $version\\" && npm run commit-all","tag-web":"cd web && git tag -s \\"$version\\" -m \\"$message\\"","tag-main":"git tag -s \\"$version\\" -m \\"$message\\"","tag-all":"[ \\"$version\\" -a \\"$message\\" ] && npm run tag-web && npm run tag-main","tag-release":"export version message=\\"Release $version\\" && npm run tag-all","push-release":"cd web && git push --follow-tags && cd .. && git push --follow-tags","make-release":"npm update && npm run build && npm run commit-release","publish-release":"npm run check && npm run tag-release && npm run push-release"},"devDependencies":{"@babel/core":"^7.5.5","@babel/plugin-transform-runtime":"^7.5.5","@babel/preset-env":"^7.5.5","@babel/runtime":"^7.5.5","autoprefixer-cli":"^1.0.0","babel-loader":"^8.0.6","eslint":"^5.16.0","live-server":"^1.2.1","node-sass":"^4.12.0","prettier":"^1.18.2","webpack":"^4.39.1","webpack-cli":"^3.3.6"},"dependencies":{"@cosmic-plus/base":"^2.0.5","@cosmic-plus/domutils":"^2.0.2","@cosmic-plus/jsutils":"^2.0.2","cosmic-lib":"^1.6.0","normalize.css":"^8.0.1","scrypt-async":"^2.0.0","tweetnacl":"^1.0.1","tweetnacl-util":"^0.15.0"}}')}});
//# sourceMappingURL=worker.js.map