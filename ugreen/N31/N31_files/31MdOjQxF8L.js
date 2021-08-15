'use strict';mix_d("P13NSCCards__p13n-rvi:p13n-rvi__N90fi0EL","exports tslib @c/aui-carousel @c/dom @c/remote-operations @c/scoped-dom @p/A @p/a-carousel-framework @c/aui-modal @c/aui-untrusted-ajax @c/browser-operations @c/logger @c/aui-utils @c/metrics".split(" "),function(v,k,z,A,B,C,D,E,F,G,H,I,W,X){function h(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var J=h(z),K=h(B),g=h(C),m=h(D),L=h(E),M=h(F),N=h(G),w=h(H),q=h(I),P=function(a){return k.__awaiter(void 0,void 0,void 0,
function(){var c,b,d,f,e;return k.__generator(this,function(n){c=g["default"].cardRoot.querySelector(".report-problem-modal-root");if(!c)return[2];b={a11yOpenMessage:"A modal for internal users to report problems with recommendations",hideHeader:!1};d=M["default"].create("report-flag-modal",".report-problem-modal-root",b);f=w["default"].setup();e=g["default"].cardRoot.querySelector(".report-flag");f.define("show","click",function(){d.show()});f.attach("show",e);O(a,d);return[2]})})},O=function(a,
c){var b=g["default"].cardRoot.querySelector(".report-flag"),d=w["default"].setup();d.define("showFlag","mouseover",function(){b.classList.remove("report-flag-hide")});d.define("hideFlag","mouseout",function(){b.classList.add("report-flag-hide")});d.attach("showFlag",a);d.attach("hideFlag",a);var f=g["default"].cardRoot.querySelector(".internal-flag-form");f.onsubmit=function(b){return Q(f,b,a)};m["default"].on("a:dropdown:selected:internal-flag-dropdown-name",function(a){f.querySelector(".internal-flag-env-data").setAttribute("data-problem-value",
a.value)});m["default"].on("a:popover:hide:"+c.id,function(){f.reset();var a=f.querySelector(".internal-flag-alias").nextSibling;a&&a.classList.contains("report-problem-message")&&(a.innerText="")})},Q=function(a,c,b){c.preventDefault();c=a.querySelector(".internal-flag-env-data").dataset;var d=a.querySelector(".internal-flag-dropdown").innerText,f=a.querySelector(".internal-flag-textarea").firstElementChild.value,e=a.querySelector(".internal-flag-alias"),n=e.value;if(void 0===a.querySelector(".internal-flag-env-data").dataset.problemValue)return u(e,
!1,"Please select a problem."),!1;a=g["default"].cardRoot.querySelectorAll(".a-carousel-card");var p=R(b,a.length);b="Internal user reported issue with your widget: "+g["default"].cardRoot.querySelector(".a-carousel-heading").innerText;d=S(a,p,d,f,n,c);N["default"].post("https://p13ngoals.corp.amazon.com/sims",{accepts:"text/html, application/json",contentType:"application/json;charset=UTF-8"},{sim_params:{assigned_folder:"1b027359-e4c6-4e3c-92a8-0ff8a2ecb593",description:d,descriptionContentType:"text/amz-markdown-sim",
tags:[{id:"internal-problem-generated"},{id:c.problemValue}],title:b}}).then(function(a){u(e,!0,a)}).catch(function(a){u(e,!1,a)});return!1},R=function(a,c){if(!a.dataset.aCarouselOptions)return q["default"].log("Empty ASIN List in carouselElement.dataset.aCarouselOptions","ERROR"),[];a=JSON.parse(a.dataset.aCarouselOptions).ajax.id_list;var b=g["default"].cardRoot.querySelector(".a-carousel-firstvisibleitem");b=(Number(b.value)||1)-1;return a.map(function(a){return JSON.parse(a).id}).slice(b,b+c)},
S=function(a,c,b,d,f,e){for(var n="",p=0;p<a.length;p++){var l=a[p].querySelector(".a-dynamic-image");n+=(l?"![]("+l.src+")":"IMAGE MISSING")+"\nASIN: "+(c[p]?c[p]:"ASIN MISSING")+"\n\n"}return"**This SIM issue is created by the 'Report a Problem' internal tool. To know more, here's its wiki: https://w.amazon.com/bin/view/Personalization/CoreRecommendations/Projects/Canaries/Report-a-Problem-UX-on-P13NWidget/UserGuide/**\n\n**Problem:** "+(b+"\n"+(""!==d?"**Comment:** "+d+"\n":"")+"\n**Strategy ID:** "+
e.strategyId+"\n**CTI:** "+e.cti+"\n**Facets:** ")+(e.facets+"\n**Content Reftag:** "+e.reftTag+"\n"+(""!==e.baseAsin?"**Page ASIN:** "+e.baseAsin+"\n":"")+"\n"+(""!==f?"**Alias:** ["+f+"](https://phonetool.amazon.com/users/"+f+")\n":"")+"**CustomerID:** "+e.customerId)+("\n**SessionID:** "+e.sessionId+"\n**MarketplaceID:** "+e.marketplaceId+"\n**Device Type:** "+e.deviceType+"\n\n**List of ASINs:**\n\n")+n},u=function(a,c,b){var d=a.nextSibling;d&&d.classList.contains("report-problem-message")||
(d=document.createElement("h5"),d.classList.add("report-problem-message"),a.after(d));c?(d.classList.remove("a-color-error"),b.responseBody&&"object"===typeof b.responseBody?b.responseBody.response&&b.responseBody.response.id?d.innerHTML="Success, here's the <a href=\"https://issues.amazon.com/issues/"+b.responseBody.response.id+'" target="_blank">SIM issue</a> you created.':(q["default"].log("Fail to find the id of the SIM issue created in the response body of response data.","ERROR"),d.innerText=
"Success, but we could not find the link to the SIM."):(q["default"].log("The response body of response data is not an object.","ERROR"),d.innerText="Success, but we could not find the link to the SIM.")):(d.classList.add("a-color-error"),d.innerText="string"===typeof b?b:"Oops! Something went wrong. Please try again.")},x=/(?=[ \-\/])|(?=[\u3105-\u312F])|(?=[\u31A0-\u31BA])|(?=[\u4E00-\u9FD5])|(?=[\u3400-\u4DB5])|(?=[\uF900-\uFAFF])|(?=[\u3040-\u309F])|(?=[\u30A0-\u30FF])|(?=[\u3190-\u319F])/,y=
/[^\/\-\[\]():\s]/,T=function(a){var c=m["default"].$("<div>")[0];c.classList.add("p13n-sc-offscreen-truncate");var b=parseInt(a.getAttribute("data-rows")||"2",10),d=function(){var b=a.innerHTML;a.innerHTML="&hellip;";var c=a.clientHeight;a.innerHTML=b;return c}();if(b){if(d){var f=function(a){c.innerHTML=a;return Math.round(c.clientHeight/d)<=b},e=function(b,d){b=b.split(d);var e=Math.floor(a.clientWidth/12),f=function(b){c.classList.add("p13n-sc-offscreen-truncate");c.style.overflow="hidden";c.textContent=
b;a.appendChild(c);b=a.clientWidth>=a.scrollWidth;a.removeChild(c);return b},n=function(a){var b=a.length-e;a.trim().length>e&&!f(a)&&Array.prototype.slice.call(a).map(function(a,c){return c>e&&c<=b&&y.test(a)?"&shy;"+a:a});return a};return b.map(function(a){return n(a)}).join("")};return{truncate:function(){var b=a.innerHTML.trim(),d=a.textContent||"";b=e(b,x);a.appendChild(c);if(f(b))a.removeChild(c),a.innerHTML=b;else{var l=b.split(x);for(var k=1,t=l.length,g,h,r=0;k!==t;)if(g=Math.floor((t+k)/
2),h=l.slice(0,g).join("")+"&hellip;",f(h)){if(1>=t-g){for(r=g;0<r&&!y.test(l[r-1]);)r--;break}k=g}else t=g;l=0===r?void 0:l.slice(0,r).join("")+"&hellip;";l?(a.innerHTML=l,a.setAttribute("title",d)):(q["default"].log("Unable to successfully truncate line "+b,"ERROR"),a.removeChild(c))}}}}q["default"].log("Truncation element does not have a line height or it is zero","ERROR")}else q["default"].log("Truncation element missing necessary line number data","ERROR")},U=function(a){var c=Array.prototype.slice.call(a.getElementsByClassName("p13n-sc-truncate"));
a=a.getElementsByClassName("p13n-sc-truncate-fallback");(window.CSS&&CSS.supports&&CSS.supports("-webkit-line-clamp","1")?c:c.concat(Array.prototype.slice.call(a))).filter(function(a){return!!a.offsetParent}).map(function(a){var b=T(a);b&&(b.truncate(),a.classList.add("p13n-sc-truncated"),a.classList.remove("p13n-sc-truncate"),a.classList.remove("p13n-sc-truncate-fallback"),a.className=a.className.replace(/p13n-sc-line-clamp-\d/g,""))})},V={initCarousel:function(a){return k.__awaiter(void 0,void 0,
void 0,function(){var c,b,d;return k.__generator(this,function(f){c=(a||{}).afterPageLoaded;b=g["default"].cardRoot.classList.contains("p13n-sc-shoveler")?[g["default"].cardRoot]:Array.prototype.slice.call(g["default"].cardRoot.getElementsByClassName("p13n-sc-shoveler"));d=K["default"].setup(["getCarouselItems"]);if(null===b||void 0===b||!b.length)return[2];b.forEach(function(a){return k.__awaiter(void 0,void 0,void 0,function(){var b,e,f,g,h;return k.__generator(this,function(l){switch(l.label){case 0:b=
function(){m["default"].loadDynamicImage("[data-name]='"+h+"' .p13n-sc-dynamic-image");U(a);null===c||void 0===c?void 0:c(a)};b();if(a.classList.contains("p13n-carousel-initialized"))return[2];a.classList.add("p13n-carousel-initialized");e=L["default"].getCarousel(A.unscope(a));f=J["default"].getCarousel(a);g=a.dataset||{};h=e.getAttr("name");return[4,Promise.all([f.initialized,P(a)])];case 1:return l.sent(),m["default"].on("a:carousel:"+h+":change:pageSize",b),m["default"].on("a:carousel:"+h+":change:loading",
b),m["default"].on("a:carousel:"+h+":change:animating",b),m["default"].on("a:carousel:"+h+":change:fetchedItems",b),f.attachRemoteOperation(function(a){var b=a.indexes;a=a.ids;return d.getCarouselItems(k.__assign(k.__assign({},g),{ids:a,indexes:b,offset:String(b[0]||0)}))}),[2]}})})});return[2]})})}};v._operationNames=["getCarouselItems"];v.card=function(){return k.__awaiter(void 0,void 0,void 0,function(){return k.__generator(this,function(a){switch(a.label){case 0:return[4,V.initCarousel()];case 1:return a.sent(),
[2]}})})}});
