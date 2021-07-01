'use strict';mix_d("P13NSCCards__p13n-desktop-carousel:p13n-desktop-carousel__Rxg3G7zq","exports tslib @c/aui-carousel @c/dom @c/remote-operations @c/scoped-dom @p/A @p/a-carousel-framework @c/logger @c/aui-utils @c/aui-untrusted-ajax".split(" "),function(r,d,v,w,x,y,z,A,B,J,K){function f(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var C=f(v),D=f(x),q=f(y),l=f(z),E=f(A),m=f(B),t=/(?=[ \-\/])|(?=[\u3105-\u312F])|(?=[\u31A0-\u31BA])|(?=[\u4E00-\u9FD5])|(?=[\u3400-\u4DB5])|(?=[\uF900-\uFAFF])|(?=[\u3040-\u309F])|(?=[\u30A0-\u30FF])|(?=[\u3190-\u319F])/,
u=/[^\/\-\[\]():\s]/,G=function(a){var b=l["default"].$("<div>")[0];b.classList.add("p13n-sc-offscreen-truncate");var h=parseInt(a.getAttribute("data-rows")||"2",10),d=function(){var b=a.innerHTML;a.innerHTML="&hellip;";var g=a.clientHeight;a.innerHTML=b;return g}();if(h){if(d){var f=function(a){b.innerHTML=a;return Math.round(b.clientHeight/d)<=h},p=function(c,g){c=c.split(g);var e=Math.floor(a.clientWidth/12),F=function(k){b.classList.add("p13n-sc-offscreen-truncate");b.style.overflow="hidden";
b.textContent=k;a.appendChild(b);k=a.clientWidth>=a.scrollWidth;a.removeChild(b);return k},d=function(a){var b=a.length-e;a.trim().length>e&&!F(a)&&Array.prototype.slice.call(a).map(function(a,c){return c>e&&c<=b&&u.test(a)?"&shy;"+a:a});return a};return c.map(function(a){return d(a)}).join("")};return{truncate:function(){var c=a.innerHTML.trim(),g=a.textContent||"";c=p(c,t);a.appendChild(b);if(f(c))a.removeChild(b),a.innerHTML=c;else{var e=c.split(t);for(var d=1,h=e.length,k,l,n=0;d!==h;)if(k=Math.floor((h+
d)/2),l=e.slice(0,k).join("")+"&hellip;",f(l)){if(1>=h-k){for(n=k;0<n&&!u.test(e[n-1]);)n--;break}d=k}else h=k;e=0===n?void 0:e.slice(0,n).join("")+"&hellip;";e?(a.innerHTML=e,a.setAttribute("title",g)):(m["default"].log("Unable to successfully truncate line "+c,"ERROR"),a.removeChild(b))}}}}m["default"].log("Truncation element does not have a line height or it is zero","ERROR")}else m["default"].log("Truncation element missing necessary line number data","ERROR")},H=function(a){a=a.getElementsByClassName("p13n-sc-truncate");
Array.prototype.slice.call(a).map(function(a){var b=G(a);b&&(b.truncate(),a.classList.add("p13n-sc-truncated"),a.classList.remove("p13n-sc-truncate"),a.className=a.className.replace(/p13n-sc-line-clamp-\d/g,""))})},I={initCarousel:function(a){return d.__awaiter(void 0,void 0,void 0,function(){var b,h,f,m,p,c,g;return d.__generator(this,function(e){switch(e.label){case 0:b=q["default"].cardRoot.classList.contains("p13n-sc-shoveler")?q["default"].cardRoot:q["default"].cardRoot.getElementsByClassName("p13n-sc-shoveler")[0];
h=D["default"].setup(["getCarouselItems"]);if(!b)return[2];f=E["default"].getCarousel(w.unscope(b));m=C["default"].getCarousel(b);p=b.dataset||{};c=f.getAttr("name");g=function(){l["default"].loadDynamicImage("[data-name]='"+c+"' .p13n-sc-dynamic-image");H(b);null===a||void 0===a?void 0:a(b)};return[4,m.initialized];case 1:return e.sent(),l["default"].on("a:carousel:"+c+":change:pageSize",g),l["default"].on("a:carousel:"+c+":change:loading",g),l["default"].on("a:carousel:"+c+":change:animating",g),
l["default"].on("a:carousel:"+c+":change:fetchedItems",g),g(),m.attachRemoteOperation(function(a){var b=a.indexes;a=a.ids;return h.getCarouselItems(d.__assign(d.__assign({},p),{ids:a,indexes:b,offset:String(b[0]||0)}))}),[2]}})})}};r._operationNames=["getCarouselItems"];r.card=function(){return d.__awaiter(void 0,void 0,void 0,function(){return d.__generator(this,function(a){switch(a.label){case 0:return[4,I.initCarousel()];case 1:return a.sent(),[2]}})})}});
