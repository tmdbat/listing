!function a(i,s,d){function l(t,e){if(!s[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var r=s[t]={exports:{}};i[t][0].call(r.exports,function(e){return l(i[t][1][e]||e)},r,r.exports,a,i,s,d)}return s[t].exports}for(var c="function"==typeof require&&require,e=0;e<d.length;e++)l(d[e]);return l}({1:[function(e,u,t){
/*
    @license
    Underscore.js 1.8.3
    http://underscorejs.org
    (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    Underscore may be freely distributed under the MIT license.
*/
var o=function(){return window.P&&window.P.AUI_BUILD_DATE};u.exports.throttle=function(n,o,r){var a,i,s,d=null,l=0;r||(r={});var c=function(){l=!1===r.leading?0:u.exports.now(),d=null,s=n.apply(a,i),d||(a=i=null)};return function(){var e=u.exports.now();l||!1!==r.leading||(l=e);var t=o-(e-l);return a=this,i=arguments,t<=0||o<t?(d&&(clearTimeout(d),d=null),l=e,s=n.apply(a,i),d||(a=i=null)):d||!1===r.trailing||(d=setTimeout(c,t)),s}},u.exports.now=function(){return Date.now?Date.now():(new Date).getTime()},u.exports.addListener=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):window.attachEvent&&e.attachEvent("on"+t,n)},u.exports.removeListener=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},u.exports.addWindowListener=function(e,t){u.exports.addListener(window,e,t)},u.exports.removeWindowListener=function(e,t){window.removeEventListener?window.removeEventListener(e,t,!1):window.detachEvent&&window.detachEvent("on"+e,t)},u.exports.ensureMessageListener=function(e){u.exports.removeWindowListener("message",e),u.exports.addWindowListener("message",e)},u.exports.decodeBase64=function(e){var t,n,o,r,a,i,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="",l=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<e.length;)t=s.indexOf(e.charAt(l++))<<2|(r=s.indexOf(e.charAt(l++)))>>4,n=(15&r)<<4|(a=s.indexOf(e.charAt(l++)))>>2,o=(3&a)<<6|(i=s.indexOf(e.charAt(l++))),d+=String.fromCharCode(t),64!=a&&(d+=String.fromCharCode(n)),64!=i&&(d+=String.fromCharCode(o));return d=function(e){for(var t="",n=0,o=0,r=0,a=0;n<e.length;)(o=e.charCodeAt(n))<128?(t+=String.fromCharCode(o),n++):191<o&&o<224?(r=e.charCodeAt(n+1),t+=String.fromCharCode((31&o)<<6|63&r),n+=2):(r=e.charCodeAt(n+1),a=e.charCodeAt(n+2),t+=String.fromCharCode((15&o)<<12|(63&r)<<6|63&a),n+=3);return t}(d)},u.exports.createScript=function(e,t,n,o,r){if(!document.getElementById(n)){var a=document.createElement("script");return a.async=!0,a.setAttribute("crossorigin","anonymous"),a.src=e,a.type=t,a.id=n,a.onerror=o,a.onload=r,a}},u.exports.isAUIAvailable=o,u.exports.safeFunctionWrapper=function(e,t,n){return o()&&"function"==typeof window.P.guardError?P.guardError("APE-SafeFrame",e):function(){try{e.apply(this,arguments)}catch(e){"function"==typeof t&&n&&t(n,e)}}},u.exports.getCookie=function(e){var t=e+"=";try{for(var n=decodeURIComponent(document.cookie).split(";"),o=0;o<n.length;o++){for(var r=n[o];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}}catch(e){}return""},u.exports.disableCookieAccess=function(){try{Object&&Object.defineProperty&&"function"==typeof Object.defineProperty?Object.defineProperty(document,"cookie",{get:function(){return""},set:function(){}}):(document.__defineGetter__("cookie",function(){return""}),document.__defineSetter__("cookie",function(){}))}catch(e){}},u.exports.setObjectStyles=function(e,t){if(e&&t)for(var n in t)e.style[n]=t[n];return e},u.exports.ABP_STATUS={1:"Enabled",0:"NotEnabled","-1":"Unknown"},u.exports.hasHostname=function(e){var t="";return e&&(t=-1<e.indexOf("//")?e.split("/")[2]:e.split("/")[0]),0!=t.length}},{}],2:[function(e,l,t){function d(e,t,n){var o=0;return"visible"!==document.visibilityState?o:(o=0<e?n-e:0<t?Math.min(t,n):0,Math.min(o,t-e))}function i(){try{var e={};return e.t=window.screenY?window.screenY:window.screenTop,e.l=window.screenX?window.screenX:window.screenLeft,e.w=l.exports.windowWidth(),e.h=l.exports.windowHeight(),e.b=e.t+e.h,e.r=e.l+e.w,e}catch(e){return null}}function s(e,t){try{var n={},o=c(e,t),r=function(e){try{var t={},n=l.exports.windowWidth(),o=l.exports.windowHeight(),r=Math.max(0,d(e.t,e.b,o)),a=Math.max(0,d(e.l,e.r,n)),i=r*a,s=e.h*Math.min(e.w,l.exports.windowWidth());return t.xiv=Number(Math.min(1,a/e.w).toFixed(2)),t.yiv=Number(Math.min(1,r/e.h).toFixed(2)),t.iv=Number(Math.min(1,Math.max(0,i/s)).toFixed(2)),t}catch(e){return null}}(o);return n.t=o.t,n.l=o.l,n.r=o.r,n.b=o.b,n.w=o.w,n.h=o.h,n.z=o.z,n.xiv=r.xiv,n.yiv=r.yiv,n.iv=r.iv,n}catch(e){return null}}function c(e,t){try{var n={},o=t||e.getBoundingClientRect();return n.t=o.top,n.l=o.left,n.r=o.right,n.b=o.bottom,n.w=o.width||n.r-n.l,n.h=o.height||n.b-n.t,n.z=e?Number(window.getComputedStyle(e,null).zIndex):NaN,n}catch(e){return null}}function u(e,t){try{var n={},o=t||e.getBoundingClientRect();return n.t=o.top,n.l=o.left,n.r=l.exports.windowWidth()-o.right,n.b=l.exports.windowHeight()-o.bottom,n.xs=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth)>l.exports.windowWidth()?1:0,n.yx=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)>l.exports.windowHeight()?1:0,n}catch(e){return null}}l.exports.findVerticalPositionReached=function(){try{return window.scrollY+l.exports.windowHeight()}catch(e){return null}},l.exports.findDistanceFromViewport=function(e){try{return e.getBoundingClientRect().top-l.exports.windowHeight()}catch(e){return null}},l.exports.getViewableInfo=function(e){var t={};if(t.atf=function(e){if(!e)return"unknown";var t=function(e){try{var t=c(e,null),n=l.exports.windowHeight(),o=l.exports.windowWidth(),r=document.body.getBoundingClientRect(),a=Math.max(0,Math.min(r.left+o,t.r)-t.l),i=Math.max(0,Math.min(r.top+n,t.b)-t.t),s=a*i/(t.h*Math.min(t.w,o)),d=Number(Math.min(1,Math.max(0,s)).toFixed(2));return d}catch(e){return null}}(e);{if(null==t)return"unknown";if(.5<=t)return!0}return!1}(e),!e)return t;var n=i(),o=s(e),r=u(e);return n&&o&&r&&(t.geom={},t.geom.win=n,t.geom.self=o,t.geom.exp=r,t.payload={},t.payload.wh=n.h,t.payload.ww=n.w,t.payload.sx=window.scrollX,t.payload.sy=window.scrollY,t.payload.ah=o.h,t.payload.aw=o.w,t.payload.top=o.t,t.payload.left=o.l),t},l.exports.takeSnapshotOfSlotPosition=function(e){try{return{initialBoundingRect:e.getBoundingClientRect(),adHeight:e.offsetHeight,adWidth:e.offsetWidth,originalScrollX:window.scrollX,originalScrollY:window.scrollY}}catch(e){return null}},l.exports.getNoInventoryViewabilityData=function(e){var t={},n=function(e){try{var t=e.initialBoundingRect,n=t.top-(window.scrollY-e.originalScrollY),o=n+e.adHeight,r=t.left-(window.scrollX-e.originalScrollX),a=r+e.adWidth;return{top:n,bottom:o,left:r,right:a,width:e.adWidth,height:e.adHeight}}catch(e){return null}}(e),o=i(),r=s(null,n),a=u(null,n);return o&&r&&a?(t.geom={},t.geom.win=o,t.geom.self=r,t.geom.exp=a,t.payload={},t.payload.wh=o.h,t.payload.ww=o.w,t.payload.sx=window.scrollX,t.payload.sy=window.scrollY,t.payload.ah=r.h,t.payload.aw=r.w,t.payload.top=r.t,t.payload.left=r.l,t):null},l.exports.windowHeight=function(){return window.innerHeight||document.documentElement.clientHeight},l.exports.windowWidth=function(){return window.innerWidth||document.documentElement.clientWidth}},{}],3:[function(e,t,n){var O=e("../components/viewability"),p=e("../../components/util"),o=e("../metrics/csm"),r=e("../metrics/csa"),s=e("../metrics/counters").CUSTOM_MESSAGE_COUNTERS,a=o.sendCsmLatencyMetric,D=o.sendCsmCounter,i=r.markCsaLatencyMetric,d={ERROR:"ERROR",WARN:"WARN",FATAL:"FATAL"},c=l();function R(e,t){var n=t||new Error(e);D("",null,"safeFrameError",1),window.sfLogErrors&&(window.ueLogError?window.ueLogError(n,{logLevel:d.ERROR,attribution:"APE-safeframe",message:e+" "}):"undefined"!=typeof console&&console.error&&console.error(e,n))}function l(){var e=window.location.hostname.split(".").pop(),t="na";return/^(com|ca|mx|br)$/.test(e)?t="na":/^(uk|de|fr|it|es|in|ae|sa|nl|tr|se)$/.test(e)?t="eu":/^(jp|au)$/.test(e)?t="fe":/^(cn)$/.test(e)&&(t="cn"),"https://images-"+t+".ssl-images-amazon.com"}function u(e){return e.replace(/^.{1,5}:\/\/|^\/\//,"")}function U(e,t){e.style.transform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.webkitTransform=t}function F(e){return!e||W(e)||2<(t=e).length&&"px"===t.substring(t.length-2)?e:e+"px";var t}function W(e){return 1<e.length&&"%"===e.charAt(e.length-1)}function f(e,t,n,o){var r=!1,a=function(){o(n,e)&&(t(),r=!0)},i=p.safeFunctionWrapper(p.throttle(function(){a(),r&&(p.removeWindowListener("scroll",a),p.removeWindowListener("resize",a))},20));p.addWindowListener("scroll",i),p.addWindowListener("resize",i)}t.exports.util=p,t.exports.viewability=O,t.exports.messenger=new function(e,t,n){var l=this;this.adMap=e||{},this.supportedCommands=t||{},this.msgListeners=n||{};var i=function(e){var t=l.adMap,n=t[e].options;if(t==={}||n==={})return null;var o="ape_"+n.slot+"_iframe";return t[e].iframe&&(t[e].iframe=t[e].iframe&&t[e].iframe.innerHTML?t[e].iframe:document.getElementById(o)),t[e].iframe};this.sendMessageToAd=function(e,t,n){var o=i(e),r=o?o.contentWindow:null;if(r){var a={command:t,data:n};a=JSON.stringify(a),r.postMessage(a,"*")}},this.receiveMessage=function(t){var e=l.adMap,n=l.supportedCommands;if(e!=={}){var o,r,a,i,s;try{if(t.data&&t.data.message&&t.data.message.id&&-1<t.data.message.id.toLowerCase().indexOf("mash"))throw"Received Mash message";r=e[(o=JSON.parse(t.data)).arid]}catch(e){return}try{if(s=t,!(i=r)||!i.options||u(s.origin)!==u(c)||"object"!=typeof o.data||!n.hasOwnProperty(o.command))throw"Invalid Message: "+JSON.stringify(t.data);var d=n[o.command];d&&(r.options.debug&&"undefined"!=typeof console&&console.log(t),d(r,o.data))}catch(e){a="Problem with message: "+t.data,void 0!==o&&(a+=l.appendErrorDetails(o.arid)),R(a,e)}}},this.appendErrorDetails=function(e){var t=l.adMap;if(t==={})return"";var n="";if(void 0!==t[e]){var o=t[e].options;void 0!==o.aanResponse&&(n=" Ad Details: "+JSON.stringify(o.aanResponse))}return n},this.customMessage=function(e,t,n,o,r){var a=l.msgListeners;try{"undefined"!==n&&Array.isArray(n)&&(-1<n.indexOf(e)&&a[e]?(D(null,null,s.ALLOWLISTED+":"+e,1),a[e](t)):-1===n.indexOf(e)?(D(null,null,s.NOT_ALLOWLISTED,1),D(o,r,s.NOT_ALLOWLISTED,1)):R("Unrecognized custom message key: "+e))}catch(e){R("Custom Message Error",e)}},this.registerCustomMessageListener=function(e,t,n){var o=!1,r=l.msgListeners;try{!r[e]||"function"!=typeof r[e]||n?(r[e]=t,o=!0):R("Duplicate Key",new Error("Custom message listener already exists for key: "+e))}catch(e){R("Error registering custom message listener",e)}return o},this.sendCustomMessage=function(e,t){var n=l.adMap,o={key:e,data:t};for(var r in n)l.sendMessageToAd(r,"customMessage",o)},this.sendCustomMessageToAd=function(e,t,n){var o={key:t,data:n};l.sendMessageToAd(e,"customMessage",o)},this.takeSnapshotOfSlotPosition=function(e){var t=l.adMap,n=t&&t[e]&&t[e].options;if(t&&t!=={}&&n&&n!=={}){var o=i(e);l.adMap[e].options.slotSnapshot=O.takeSnapshotOfSlotPosition(o)}},this.onPageVisible=function(t){if("visible"===document.visibilityState)try{t()}catch(e){R("Error with callback",e)}else p.addListener(document,"visibilitychange",function e(){if("visible"===document.visibilityState){try{t()}catch(e){R("Error with callback",e)}p.removeListener(document,"visibilitychange",e)}})},this.updateViewability=function(e){var t=l.adMap,n=t&&t[e]&&t[e].options;if(t&&t!=={}&&n&&n!=={}){var o=i(e),r=t[e].options.viewabilityStandards,a=O.getViewableInfo(o);null!==a&&(a.viewabilityStandards=r,l.sendMessageToAd(e,"updateViewability",a))}},this.updateNoInventoryViewability=function(e){var t=l.adMap,n=t&&t[e]&&t[e].options,o=n&&n.slotSnapshot;if(t&&t!=={}&&n&&n!=={}&&o){var r=n.viewabilityStandards,a=O.getNoInventoryViewabilityData(o);null!==a&&(a.viewabilityStandards=r,l.sendMessageToAd(e,"updateViewability",a))}}},t.exports.logError=R,t.exports.SF_DOMAIN=c,t.exports.loadScript=function(e,t){var n=document.createElement("script");n.src=e,n.setAttribute("crossorigin","anonymous"),n.onload=n.onreadystatechange=function(){n.readyState&&"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onload=n.onreadystatechange=null,t&&"function"==typeof t&&t())},n.onerror=function(e){return R("Error loading script",e),!1},(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(n)},t.exports.fireViewableLatencyMetrics=function(e,t,n,o){window.apeViewableLatencyTrackers&&window.apeViewableLatencyTrackers[e]&&window.apeViewableLatencyTrackers[e].valid&&(window.apeViewableLatencyTrackers[e].loaded=!0,window.apeViewableLatencyTrackers[e].viewed&&(a("ld",t,n,"viewablelatency",o),i("viewablelatency:loaded",o),D(t,n,"htmlviewed:loaded",1)))},t.exports.hasClass=function(e,t){var n=new RegExp("(^|\\s)"+t+"(\\s|$)"),o=e.className;return o&&n.test(o)},t.exports.createIframeWithAttributes=function(e,t,n){var o=document.createElement("iframe");return o.name=JSON.stringify(e),o.id=t,o.src=n,o.height=F(e.size.height)||"250px",o.width=F(e.size.width)||"300px",o.className=e.iframeClass||"",o.setAttribute("frameborder","0"),o.setAttribute("marginheight","0"),o.setAttribute("marginwidth","0"),o.setAttribute("scrolling","no"),o.setAttribute("allowtransparency","true"),o.setAttribute("data-arid",e.arid),o.style.cssText=e.iframeExtraStyle||"",o.sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin",/(Chrome|Safari|AppleWebKit|Amazon)/.test(navigator.userAgent)?o.sandbox+=" allow-top-navigation-by-user-activation":o.sandbox+=" allow-top-navigation",o},t.exports.logCounter=function(e,t){window.ue&&"function"==typeof window.ue.count&&window.ue.count(e,t)},t.exports.collapseSlot=function(e){var t=document.getElementById(e);void 0!==t&&t&&(t.style.display="none")},t.exports.setResizePlacementStyle=function(e,t,n){var o=document.getElementById(t[e].placementDivId),r=document.getElementById(t[e].wrapperDivId)||o,a=document.getElementById(t[e].iframeId),i=n.resizePlacementWidthThreshold,s=n.resizePlacementStyleAboveThreshold,d=n.resizePlacementStyleBelowThreshold;i=parseInt(i,10),r&&a&&i&&s&&d&&(r.offsetWidth<i?p.setObjectStyles(a,d):p.setObjectStyles(a,s))},t.exports.resizeSafeFrameAd=function(t,e,n,o,r,a,i,s,d){try{var l=document.getElementById(s[t].placementDivId),c=document.getElementById(s[t].wrapperDivId)||l,u=document.getElementById(s[t].iframeId);if(null===c||null===l||null===u)return;var p=W(n),f=W(e),m=W(u.height)||W(u.style.height),w=W(u.width)||W(u.style.width),h=!f&&!p,g=h&&!w&&!m,E=parseInt(e,10),y=f?u.offsetWidth:E,v=p?u.offsetHeight:parseInt(n,10),S=parseInt(o,10),T=parseInt(a,10),x=!d&&("1004"===r||"1002"===r||"0"===r),C=T&&c.offsetWidth<T,_=g&&(x||C),A=function(e){h&&(v=Math.round(e*v/y)),y=Math.round(e)},b=0===c.offsetWidth?O.windowWidth():c.offsetWidth;S&&O.windowHeight()<O.windowWidth()?A(S):A(b),i&&i.adMap&&i.adMap[t]&&i.adMap[t].options&&i.adMap[t].options.slotSnapshot&&(i.adMap[t].options.slotSnapshot.adHeight=v,i.adMap[t].options.slotSnapshot.adWidth=y);var I=F(y),L=F(h?v:n),N=Math.floor(y/E*100)/100;_&&N?(u.style.height=n,u.style.width=e,U(u,"scale("+N+")")):(u.style.height=L,u.style.width=I,U(u,""));var M={width:I,height:L};c!==l&&(l.style.height=L,i.sendMessageToAd(t,"resizeCreativeWrapper",M)),"Detail_hero-quick-promo_Desktop"===s[t].slotId&&(D(s[t].slotId,i.adMap[t].options.placementId,"OffsetLeft",u.offsetLeft),D(s[t].slotId,i.adMap[t].options.placementId,"OffsetTop",u.offsetTop),D(s[t].slotId,i.adMap[t].options.placementId,"OffsetWidth",u.offsetWidth),D(s[t].slotId,i.adMap[t].options.placementId,"OffsetHeight",u.offsetHeight))}catch(e){R("Error resizing ad: "+s[t].slotId,e)}},t.exports.setTransformStyles=U,t.exports.delayLoad=function(e,t,n,o){var r="undefined"!=typeof P,a="undefined"!=typeof amznJQ,i="number"==typeof n&&0!==n?function(){setTimeout(t,n)}:t;if("windowOnLoad"===e)"complete"===document.readyState?i():p.addWindowListener("load",i);else if("spATFEvent"===e)r?P.when("search-page-utilities").execute(function(e){e.afterEvent("spATFEvent",i)}):a?amznJQ.available("search-js-general",function(){window.SPUtils.afterEvent("spATFEvent",i)}):i();else if("aboveTheFold"===e)r?P.when("af").execute(i):a?amznJQ.onCompletion("amznJQ.AboveTheFold",i):i();else if("criticalFeature"===e)r?P.when("cf").execute(i):a?amznJQ.onCompletion("amznJQ.criticalFeature",i):i();else if("r2OnLoad"===e)r?P.when("r2Loaded").execute(i):a?amznJQ.onReady("r2Loaded",i):i();else if(e.match("[^:]+:.+")){var s=e.split(":"),d=s[0].split("."),l=s[1],c=2<s.length?s[2]:l;r?P.when(c,"A").execute(i):a&&1<d.length?amznJQ[d[1]](l,i):i()}else if(e.match(/^\d{1,4}px$/g))f(parseInt(e,10),i,o,function(e,t){return e&&O.findDistanceFromViewport(e)<=t});else{var u=/^reached(\d{1,5}px)FromTop$/g.exec(e);u?f(parseInt(u[1],10),i,o,function(e,t){return O.findVerticalPositionReached()>=t}):i()}},t.exports.getMediaCentralOrigin=l,t.exports.sizeValidator=function(e,t){return e.height===t.height&&e.width===t.width},t.exports.checkAgainstAllowlist=function(e,t,n){if(!t||"object"!=typeof t)return!1;for(var o=0,r=t.length;o<r;o++)if(n(e,t[o]))return!0;return!1}},{"../../components/util":1,"../components/viewability":2,"../metrics/counters":4,"../metrics/csa":5,"../metrics/csm":6}],4:[function(e,t,n){t.exports.AD_LOAD_COUNTERS={START:"adload:start",CALLBACK:"adload:delayloadcallback",IFRAME_CREATED:"adload:iframecreated"},t.exports.CACHE_COUNTERS={SF_LIBRARY:"cache:sflibrary:",SF_HTML:"cache:sfhtml:"},t.exports.FEEDBACK_COUNTERS={REQUEST:"adfeedback:request",SUCCESS:"adfeedback:success",FALLBACK:"adfeedback:fallback"},t.exports.MESSENGER_COUNTERS={API:"messenger:"},t.exports.ABP_STATUS_COUNTERS={1:"abpstatus:enabled",0:"abpstatus:notenabled","-1":"abpstatus:unknown"},t.exports.SF_VERSION_COUNTERS={VERSION:"sfversion"},t.exports.RESOURCE_TIMING_DATA_COUNTERS={NEXUS_CLIENT_NOT_DEFINED:"ResourceTimingData.NexusClientNotDefined",LOGGING_FAILED:"ResourceTimingData.LoggingFailed",LOGGING_SUCCESSFUL:"ResourceTimingData.LoggingSuccessful",DEPENDENCIES_NOT_MET:"ResourceTimingData.DependenciesNotMet"},t.exports.CUSTOM_MESSAGE_COUNTERS={ALLOWLISTED:"custommessage:allowlisted",NOT_ALLOWLISTED:"custommessage:notallowlisted"}},{}],5:[function(e,t,n){var o=e("../messenger/msgHandler"),r={};t.exports.initCsaLatencyPlugin=function(e){window.csa&&(r.latencyPlugin=window.csa("Content",{element:e}))},t.exports.markCsaLatencyMetric=function(e,t){try{r.latencyPlugin("mark",e,t)}catch(e){o.logError("Error with initiating CSA",e)}},t.exports.initCsaEvents=function(){window.csa&&(r.events=window.csa("Events",{producerId:"adplacements"}))},t.exports.logCsaEvent=function(e,t,n){try{r.events("log",{schemaId:"ApeSafeframe.csaEvent.1",metricName:e+":"+t+":"+n,metricValue:1},{ent:"all"})}catch(e){o.logError("Error with initiating CSA",e)}},t.exports.addCsaEntity=function(e){try{r.events("setEntity",{adCreativeMetaData:e})}catch(e){o.logError("Error with initiating CSA",e)}},t.exports.csa=r},{"../messenger/msgHandler":3}],6:[function(e,t,n){var s={bb:"uet",af:"uet",cf:"uet",be:"uet",ld:"uex"};function d(e,t,n,o){var r=[e,t,n];return o&&r.push(o),r}t.exports.sendCsmLatencyMetric=function(e,t,n,o,r){if(s.hasOwnProperty(e)){var a=s[e],i=o?o+":":"";"function"==typeof window[a]&&(window[a].apply(this,d(e,"adplacements:"+i+t.replace(/_/g,":"),{wb:1},r)),n&&window[a].apply(this,d(e,"adplacements:"+i+n,{wb:1},r)))}},t.exports.sendCsmCounter=function(e,t,n,o){if(window.ue&&"function"==typeof window.ue.count){var r="adplacements:"+n;if(e&&(r+=":"+e.replace(/_/g,":")),window.ue.count(r,o),t){var a="adplacements:"+(n&&t?n+":":n)+t;window.ue.count(a,o)}}},t.exports.addCsmTag=function(e,t,n,o){if(window.ue&&window.ue.tag){if(t){var r=e+":"+t.replace(/_/g,":")+(o?":"+o:"");window.ue.tag(r)}if(n){var a=e+":"+n+(o?":"+o:"");window.ue.tag(a)}t||n||window.ue.tag(e+(o?":"+o:""))}}},{}],7:[function(e,t,n){t.exports.AD_LOAD_EVENTS={START:"adload_start",CALLBACK:"adload_delayload",IFRAME_CREATED:"adload_iframecreated"},t.exports.CACHE_EVENTS={SF_LIBRARY:"sflibrary_",SF_HTML:"sfhtml_"},t.exports.FEEDBACK_EVENTS={REQUEST:"adfeedback_request",SUCCESS:"adfeedback_success",FALLBACK:"adfeedback_fallback"},t.exports.ABP_STATUS_EVENTS={1:"abpstatus_enabled",0:"abpstatus_notenabled","-1":"abpstatus_unknown"},t.exports.SF_VERSION_EVENTS={VERSION:"sfversion_"},t.exports.RESOURCE_TIMING_DATA_EVENTS={LOGGING_FAILED:"resourceTimingData_LoggingFailed",LOGGING_SUCCESSFUL:"resourceTimingData_LoggingSuccessful",DEPENDENCIES_NOT_MET:"resourceTimingData_DependenciesNotMet",DEPENDENCIES_MET:"resourceTimingData_DependenciesMet"}},{}],8:[function(m,e,t){var w,h;w=window,h=document,w.logSafeframeResourceTimingData=function(t,o){var n=m("./metrics/counters"),r=m("./metrics/events"),e=m("./metrics/csm"),a=m("./metrics/csa"),i=e.sendCsmCounter,s=a.logCsaEvent,d={sd:1},l=["name","entryType","startTime","duration","initiatorType","nextHopProtocol","workerStart","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","connectEnd","secureConnectionStart","requestStart","responseStart","responseEnd","transferSize","encodedBodySize","decodedBodySize"];if(!(w.ue&&w.ue.event&&w.ue.attach))return i(null,null,n.RESOURCE_TIMING_DATA_COUNTERS.DEPENDENCIES_NOT_MET,1),void s(r.RESOURCE_TIMING_DATA_EVENTS.DEPENDENCIES_NOT_MET,t.slot,t.placementId);function c(e){for(var t,n={},o=0;o<l.length;o++)void 0!==e[t=l[o]]&&(n[t]=e[t]);return n}function u(){return{source:"safeframe",pageType:w.ue_pty||null,subPageType:w.ue_spty||null,pageTypeId:t.slot+"_"+t.adCreativeMetaData.adNetwork+"_"+t.adCreativeMetaData.adProgramId+"_"+t.adCreativeMetaData.adCreativeId+"_"+t.adCreativeMetaData.adId||null}}function p(){var e=u();return e.resourceData=function(){for(var e=[],t=0;t<o.resourceTimingData.length;t++){var n=o.resourceTimingData[t];0!==n.responseEnd&&e.push(c(n))}return e}(),e}function f(){var e=p();w.ue.event&&(w.ue.event(e,"adplacements","csm.ResourceTimingHit.2",d)?(i(null,null,n.RESOURCE_TIMING_DATA_COUNTERS.LOGGING_SUCCESSFUL,1),i(null,null,n.RESOURCE_TIMING_DATA_COUNTERS.LOGGING_FAILED,0),s(r.RESOURCE_TIMING_DATA_EVENTS.LOGGING_SUCCESSFUL,t.slot,t.placementId)):(i(null,null,n.RESOURCE_TIMING_DATA_COUNTERS.LOGGING_SUCCESSFUL,0),i(null,null,n.RESOURCE_TIMING_DATA_COUNTERS.LOGGING_FAILED,1),s(r.RESOURCE_TIMING_DATA_EVENTS.LOGGING_FAILED,t.slot,t.placementId)))}i(null,null,n.RESOURCE_TIMING_DATA_COUNTERS.DEPENDENCIES_NOT_MET,0),s(r.RESOURCE_TIMING_DATA_EVENTS.DEPENDENCIES_MET,t.slot,t.placementId),"complete"===h.readyState?f():w.ue.attach("load",f)}},{"./metrics/counters":4,"./metrics/csa":5,"./metrics/csm":6,"./metrics/events":7}]},{},[8]);